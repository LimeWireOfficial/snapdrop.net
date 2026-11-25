(function () {
	'use strict';

	 
	var apiBaseUrl = 'https://api.limewire.com';

	

	var SLOTS = [
		{ selector: '.lw_ad_left', desktop: 'download-left', group: 'sides' },
		{ selector: '.lw_ad_right', desktop: 'download-right', group: 'sides' },
		{ selector: '.lw_ad_top', desktop: 'download-top', group: 'top' },
		{ selector: '.lw_ad_mobile_top', mobile: 'download-top-mobile', group: 'top' },
		{
			selector: '.lw_ad_bottom',
			desktop: 'download-bottom',
			mobile: 'download-bottom-mobile',
			group: 'bottom'
		}
	];
	 
	var MOBILE_MEDIA_QUERY = '(max-width: 1179px)';

	var VIEWABLE_RATIO = 0.5;
	var VIEWABLE_DURATION_MS = 1000;
	var RETRY_DELAY_MS = 500;

	var ANCHOR_START = /<a\s/gi;
	var CREATIVE_STYLE = [
		'html,body{margin:0;padding:0;overflow:hidden;background:transparent}',
		'a{display:block;line-height:0}',
		'img{display:block;border:0;max-width:100%}'
	].join('');

	function buildCreativeDocument(html) {
		return '<!doctype html><html><head><meta charset="utf-8">' +
			'<base target="_blank">' +
			'<style>' + CREATIVE_STYLE + '</style>' +
			'</head><body>' +
			html.replace(ANCHOR_START, '<a rel="sponsored noopener nofollow" target="_blank" ') +
			'</body></html>';
	}

	function requestItem(site, slot, isRetry) {
		var url = apiBaseUrl + '/sharing/featured?site=' + encodeURIComponent(site) +
			'&slot=' + encodeURIComponent(slot);

		return fetch(url, { credentials: 'omit' }).then(function (response) {
			return response.status === 200 ? response.json() : null;
		}).catch(function () {
			if (isRetry) return null;

			return new Promise(function (resolve) {
				setTimeout(resolve, RETRY_DELAY_MS);
			}).then(function () {
				return requestItem(site, slot, true);
			});
		});
	}

	function trackPromotion(name, site, slot, item) {
		if (typeof window.gtag !== 'function') return;

		var creativeName = item.size || (item.width + 'x' + item.height);
		var promotion = {
			site: site,
			promotion_id: item.campaignId != null ? String(item.campaignId) : item.id,
			promotion_name: item.campaignName,
			creative_id: item.id,
			creative_name: creativeName,
			creative_slot: slot
		};

		

		window.gtag('event', name, {
			site: promotion.site,
			promotion_id: promotion.promotion_id,
			promotion_name: promotion.promotion_name,
			creative_id: promotion.creative_id,
			creative_name: promotion.creative_name,
			creative_slot: promotion.creative_slot,
			items: [{
				item_id: item.id,
				item_name: item.campaignName ? item.campaignName + ' ' + creativeName : creativeName,
				site: promotion.site,
				promotion_id: promotion.promotion_id,
				promotion_name: promotion.promotion_name,
				creative_id: promotion.creative_id,
				creative_name: promotion.creative_name,
				creative_slot: promotion.creative_slot
			}]
		});
	}

	function trackSlot(element, site, slot, item) {
		var seenTimeout;
		var observer;
		var reported = false;

		function onWindowBlur() {
			var active = window.document.activeElement;
			if (!reported && active instanceof HTMLIFrameElement && element.contains(active)) {
				reported = true;
				trackPromotion('select_promotion', site, slot, item);
			}
		}

		if (typeof IntersectionObserver === 'function') {
			observer = new IntersectionObserver(function (entries) {
				var entry = entries[0];
				if (entry.intersectionRatio >= VIEWABLE_RATIO) {
					if (!seenTimeout) {
						seenTimeout = setTimeout(function () {
							observer.disconnect();
							trackPromotion('view_promotion', site, slot, item);
						}, VIEWABLE_DURATION_MS);
					}
				} else {
					clearTimeout(seenTimeout);
					seenTimeout = undefined;
				}
			}, { threshold: VIEWABLE_RATIO });
			observer.observe(element);
		}

		window.addEventListener('blur', onWindowBlur);

		return function () {
			clearTimeout(seenTimeout);
			if (observer) observer.disconnect();
			window.removeEventListener('blur', onWindowBlur);
		};
	}

	function createSlot(element, site, definition) {
		var item = null;
		var activeSlot = null;
		var frame = null;
		var wrapper = null;
		var untrack = null;
		var resizeObserver = null;
		var requested = false;

		function fitScale() {
			if (!item || !item.width || !item.height) return 1;

			var availableWidth = element.clientWidth;
			var availableHeight = element.clientHeight;
			if (!availableWidth || !availableHeight) return 1;

			return Math.min(1, availableWidth / item.width, availableHeight / item.height);
		}

		function applyScale() {
			if (!frame || !wrapper) return;

			var scale = fitScale();
			wrapper.style.width = (item.width * scale) + 'px';
			wrapper.style.height = (item.height * scale) + 'px';
			frame.style.transform = scale === 1 ? '' : 'scale(' + scale + ')';
		}

		function clear() {
			if (untrack) {
				untrack();
				untrack = null;
			}
			if (resizeObserver) {
				resizeObserver.disconnect();
				resizeObserver = null;
			}
			while (element.firstChild) {
				element.removeChild(element.firstChild);
			}
			element.classList.remove('lw_ad_empty');
			item = null;
			activeSlot = null;
			frame = null;
			wrapper = null;
			requested = false;
		}

		function render(served) {
			item = served;

			wrapper = document.createElement('div');
			wrapper.className = 'lw_ad_creative';

			frame = document.createElement('iframe');
			frame.title = served.campaignName || activeSlot;
			frame.width = served.width;
			frame.height = served.height;
			frame.scrolling = 'no';
			frame.setAttribute('sandbox', 'allow-popups allow-popups-to-escape-sandbox');
			frame.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
			frame.style.width = served.width + 'px';
			frame.style.height = served.height + 'px';
			frame.srcdoc = buildCreativeDocument(served.html);

			wrapper.appendChild(frame);
			element.appendChild(wrapper);
			applyScale();

			if (typeof ResizeObserver === 'function') {
				resizeObserver = new ResizeObserver(applyScale);
				resizeObserver.observe(element);
			}

			untrack = trackSlot(element, site, activeSlot, served);
		}

		

		function begin(slot) {
			if (requested) return false;
			requested = true;
			activeSlot = slot;
			

			element.classList.remove('lw_ad_empty');
			return true;
		}

		

		function fill(served) {
			if (!requested) return;

			if (!served || !served.html) {
				element.classList.add('lw_ad_empty');
				return;
			}

			render(served);
		}

		function collapse() {
			clear();
			element.classList.add('lw_ad_empty');
		}

		function slotFor(isMobile) {
			return (isMobile ? definition.mobile : definition.desktop) || null;
		}

		return {
			begin: begin,
			fill: fill,
			site: site,
			clear: clear,
			collapse: collapse,
			slotFor: slotFor,
			group: definition.group
		};
	}

	function init() {
		var slots = [];
		var desktopGroups = [];
		var mobileGroups = [];

		function collect(groups, slot, isMobile) {
			if (slot.slotFor(isMobile) && groups.indexOf(slot.group) < 0) groups.push(slot.group);
		}

		function pick(groups) {
			return groups.length ? groups[Math.floor(Math.random() * groups.length)] : null;
		}

		for (var i = 0; i < SLOTS.length; i++) {
			var element = document.querySelector(SLOTS[i].selector);
			var site = element && element.getAttribute('data-site');
			if (!site) continue;

			var created = createSlot(element, site, SLOTS[i]);
			slots.push(created);
			collect(desktopGroups, created, false);
			collect(mobileGroups, created, true);
		}

		if (!slots.length) return;

		

		var pickedDesktop = pick(desktopGroups);
		var pickedMobile = pick(mobileGroups);
		var mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);

		

		function loadGroup(shown, isMobile) {
			var started = [];

			for (var i = 0; i < shown.length; i++) {
				if (shown[i].begin(shown[i].slotFor(isMobile))) started.push(shown[i]);
			}

			if (!started.length) return;

			requestItem(started[0].site, started[0].slotFor(isMobile)).then(function (served) {
				for (var j = 0; j < started.length; j++) started[j].fill(served);
			});
		}

		function apply() {
			var isMobile = mediaQuery.matches;
			var picked = isMobile ? pickedMobile : pickedDesktop;
			var shown = [];

			for (var i = 0; i < slots.length; i++) {
				var slot = slots[i];
				var eligible = slot.slotFor(isMobile) && slot.group === picked;

				if (eligible) shown.push(slot);
				else slot.collapse();
			}

			loadGroup(shown, isMobile);
		}

		if (typeof mediaQuery.addEventListener === 'function') {
			mediaQuery.addEventListener('change', apply);
		} else if (typeof mediaQuery.addListener === 'function') {
			mediaQuery.addListener(apply);
		}

		apply();
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
