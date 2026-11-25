

(function () {
	'use strict';

	 
	var SITE = 'snapdrop';
	var UTM_SOURCE = 'sd';

	var COUNTRY_KEY = 'lw_promo_country';
	var GEO_TIMEOUT = 1500;
	var GAME = 'https://simposter.limewire.com/';
	 
	var GAME_LANGS = ['ar', 'bn', 'de', 'es', 'fa', 'fr', 'hi', 'id', 'it', 'ja', 'ko', 'nl', 'pl', 'pt',
		'ru', 'th', 'tr', 'vi', 'zh'];

	

	var VARIANT_KEY = 'lw_promo_v';
	var chosen = null;
	function variant() {
		if (chosen) return chosen;
		var v = null;
		try { v = window.localStorage.getItem(VARIANT_KEY); } catch (e) {}
		if (v !== 'find' && v !== 'blend') {
			v = Math.random() < 0.5 ? 'find' : 'blend';
			try { window.localStorage.setItem(VARIANT_KEY, v); } catch (e) {}
		}
		return (chosen = v);
	}

	function gameUrl(locale, v) {
		var path = GAME_LANGS.indexOf(locale) >= 0 ? locale + '/' : '';
		return GAME + path + '?utm_source=' + UTM_SOURCE +
			'&utm_medium=banner_' + v + '&utm_campaign=wtb_launch&utm_content=' + locale;
	}

	

	var CREATIVES = {
		en: { text: 'Can you spot the bot?', hi: 'bot', cta: 'Play free', live: 'new' },
		es: { text: '¿Puedes descubrir al bot?', hi: 'bot', cta: 'Jugar gratis', live: 'nuevo' },
		de: { text: 'Erkennst du den Bot?', hi: 'Bot', cta: 'Gratis spielen', live: 'neu' },
		fr: { text: 'Saurez-vous repérer le bot ?', hi: 'bot', cta: 'Jouer gratuitement', live: 'nouveau' },
		it: { text: 'Riesci a scovare il bot?', hi: 'bot', cta: 'Gioca gratis', live: 'nuovo' },
		pt: { text: 'Consegue achar o bot?', hi: 'bot', cta: 'Jogar grátis', live: 'novo' },
		nl: { text: 'Herken jij de bot?', hi: 'bot', cta: 'Gratis spelen', live: 'nieuw' },
		cs: { text: 'Poznáš, kdo je bot?', hi: 'bot', cta: 'Hrát zdarma', live: 'nové' },
		pl: { text: 'Czy rozpoznasz bota?', hi: 'bota', cta: 'Graj za darmo', live: 'nowość' },
		tr: { text: 'Botu bulabilir misin?', hi: 'Botu', cta: 'Ücretsiz oyna', live: 'yeni' },
		ar: { text: 'هل تكشف البوت؟', hi: 'البوت', cta: 'العب مجانًا', live: 'جديد' },
		fa: { text: 'می‌توانی ربات را پیدا کنی؟', hi: 'ربات', cta: 'رایگان بازی کن', live: 'جدید' },
		bn: { text: 'বটটাকে চিনতে পারবে?', hi: 'বট', cta: 'ফ্রি খেলো', live: 'নতুন' },
		hi: { text: 'क्या तुम बॉट पहचान पाओगे?', hi: 'बॉट', cta: 'मुफ़्त खेलो', live: 'नया' },
		id: { text: 'Bisa tebak siapa botnya?', hi: 'botnya', cta: 'Main gratis', live: 'baru' },
		ja: { text: 'ボットを見抜けるか？', hi: 'ボット', cta: '無料でプレイ', live: '新作' },
		ko: { text: '봇을 찾아낼 수 있나요?', hi: '봇', cta: '무료로 플레이', live: '신규' },
		th: { text: 'คุณจับบอทได้ไหม?', hi: 'บอท', cta: 'เล่นฟรี', live: 'ใหม่' },
		vi: { text: 'Bạn có nhận ra bot không?', hi: 'bot', cta: 'Chơi miễn phí', live: 'mới' },
		zh: { text: '你能揪出机器人吗？', hi: '机器人', cta: '免费开玩', live: '新' },
		ru: { text: '\u0421\u043c\u043e\u0436\u0435\u0448\u044c \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u044c \u0431\u043e\u0442\u0430?', hi: '\u0431\u043e\u0442\u0430', cta: '\u0418\u0433\u0440\u0430\u0442\u044c \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e', live: '\u043d\u043e\u0432\u0438\u043d\u043a\u0430' }
	};

	 
	var BLEND = {
		en: { text: 'Survive among the bots: act like one.', hi: 'Survive' },
		es: { text: 'Sobrevive entre los bots: actúa como uno.', hi: 'Sobrevive' },
		de: { text: 'Überlebe unter Bots: tu so, als wärst du einer.', hi: 'Überlebe' },
		fr: { text: 'Survivez parmi les bots : faites comme eux.', hi: 'Survivez' },
		it: { text: 'Sopravvivi tra i bot: fingi di essere uno di loro.', hi: 'Sopravvivi' },
		pt: { text: 'Sobreviva entre os bots: finja ser um deles.', hi: 'Sobreviva' },
		nl: { text: 'Overleef tussen de bots: doe alsof je er een bent.', hi: 'Overleef' },
		cs: { text: 'Přežij mezi boty: tvař se jako jeden z nich.', hi: 'Přežij' },
		pl: { text: 'Przetrwaj wśród botów: udawaj jednego z nich.', hi: 'Przetrwaj' },
		tr: { text: 'Botların arasında hayatta kal: onlardan biri gibi davran.', hi: 'hayatta kal' },
		ar: { text: 'انجُ بين البوتات: تصرّف كواحد منها.', hi: 'انجُ' },
		fa: { text: 'میان ربات‌ها زنده بمان: مثل یکی از آن‌ها رفتار کن.', hi: 'زنده بمان' },
		bn: { text: 'বটদের ভিড়ে টিকে থাকো: ওদের একজনের মতো আচরণ করো।', hi: 'টিকে থাকো' },
		hi: { text: 'बॉट्स के बीच ज़िंदा रहो: उन्हीं में से एक बनकर।', hi: 'ज़िंदा रहो' },
		id: { text: 'Bertahan di antara bot: berlagaklah seperti mereka.', hi: 'Bertahan' },
		ja: { text: 'ボットの中で生き残れ。ボットのふりをして。', hi: '生き残れ' },
		ko: { text: '봇들 사이에서 살아남아라: 봇인 척하면서.', hi: '살아남아라' },
		th: { text: 'เอาตัวรอดท่ามกลางบอท: ทำตัวให้เหมือนบอท', hi: 'เอาตัวรอด' },
		vi: { text: 'Sống sót giữa bầy bot: hãy giả làm một con bot.', hi: 'Sống sót' },
		zh: { text: '在机器人中活下去：装成它们的一员。', hi: '活下去' },
		ru: { text: '\u0412\u044b\u0436\u0438\u0432\u0438 \u0441\u0440\u0435\u0434\u0438 \u0431\u043e\u0442\u043e\u0432: \u043f\u0440\u0438\u0442\u0432\u043e\u0440\u0438\u0441\u044c \u043e\u0434\u043d\u0438\u043c \u0438\u0437 \u043d\u0438\u0445.', hi: '\u0412\u044b\u0436\u0438\u0432\u0438' }
	};

	
	var COUNTRIES = {
		IN: 'hi', MX: 'es', ES: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es',
		DE: 'de', AT: 'de', CH: 'de',
		FR: 'fr', BE: 'fr',
		IT: 'it',
		BR: 'pt', PT: 'pt',
		NL: 'nl',
		PL: 'pl',
		TR: 'tr',
		IR: 'fa', AF: 'fa',
		BD: 'bn',
		SA: 'ar', AE: 'ar', EG: 'ar', MA: 'ar', DZ: 'ar', IQ: 'ar', JO: 'ar', KW: 'ar', QA: 'ar',
		ID: 'id',
		JP: 'ja',
		KR: 'ko',
		TH: 'th',
		VN: 'vi',
		CN: 'zh', TW: 'zh', HK: 'zh',
		RU: 'ru', BY: 'ru', KZ: 'ru', KG: 'ru'
	};

	
	var CLOSE = {
		en: 'Close', es: 'Cerrar', de: 'Schließen', fr: 'Fermer', it: 'Chiudi',
		pt: 'Fechar', nl: 'Sluiten', pl: 'Zamknij', tr: 'Kapat',
		ar: 'إغلاق', hi: 'बंद करें', id: 'Tutup', ja: '閉じる',
		ko: '닫기', th: 'ปิด', vi: 'Đóng', zh: '关闭', fa: 'بستن', bn: 'বন্ধ করুন', ru: '\u0417\u0430\u043a\u0440\u044b\u0442\u044c'
	};

	 
	function pageLocale() {
		var raw = (document.documentElement.getAttribute('lang') || '').toLowerCase();
		var base = raw.split('-')[0];
		return CREATIVES[base] ? base : '';
	}

	var root = document.documentElement;

	function storageGet(key) {
		try { return window.sessionStorage.getItem(key); } catch (e) { return null; }
	}

	function storageSet(key, value) {
		try { window.sessionStorage.setItem(key, value); } catch (e) {   }
	}

	
	root.classList.add('lw_promo_on');

	

	function lookupCountry() {
		var cached = storageGet(COUNTRY_KEY);
		if (cached) return Promise.resolve(cached);
		if (typeof window.fetch !== 'function') return Promise.resolve('');

		var request = window.fetch('/cdn-cgi/trace', { cache: 'no-store' })
			.then(function (response) { return response.ok ? response.text() : ''; })
			.then(function (body) {
				var match = /^loc=([A-Z]{2})$/m.exec(body);
				var country = match ? match[1] : '';
				if (country) storageSet(COUNTRY_KEY, country);
				return country;
			})
			.catch(function () { return ''; });

		var timeout = new Promise(function (resolve) {
			setTimeout(function () { resolve(''); }, GEO_TIMEOUT);
		});

		return Promise.race([request, timeout]);
	}

	var countryReady = lookupCountry();

	


	var CROWD = { H: 44, n: 16, seed: 11, u: 3, step: 36, top: 7, bot: 12 };

	var HUMAN = [
		'..hhhhhh..',
		'.hhhhhhhh.',
		'hhsssssshh',
		'PhssssssPh',
		'PsEEssEEsP',
		'PssssssssP',
		'@@@@@@@@@@',
		'##########',
		'...ssss...',
		'.tttttttt.',
		'tttttttttt'
	];
	var MOUTHS = [
		['.smssssms.', '..smmmms..'],
		['.ssmmmmss.', '..ssssss..'],
		['.ssmmmmss.', '..mssssm..'],
		['.sssmmsss.', '..ssmmss..']
	];
	var BOT = [
		'....aa....',
		'....gg....',
		'gggggggggg',
		'gddddddddg',
		'gdRRddRRdg',
		'gddddddddg',
		'gggggggggg',
		'ggmgmgmggg',
		'...gggg...',
		'.tttttttt.',
		'tttttttttt'
	];
	var SKIN = ['#F2C7A5', '#D9A07A', '#A8714A', '#7A4A2C', '#FFDFC4'];
	var HAIR = ['#1B1B1B', '#5A3417', '#C98B2B', '#D6402A', '#3DF5A0', '#7B5CFF', '#E8E8E8'];
	var EYES = ['#3DF5A0', '#7FD8FF', '#FFD23F', '#B57BFF'];
	var METAL = ['#8A9496', '#6E787A', '#A3ADAF'];
	var SHIRT = ['#3DF5A0', '#2B6CFF', '#FF5A6E', '#FFD23F', '#9AA3A0', '#B57BFF'];

	function lcg(seed) {
		var s = seed >>> 0;
		return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
	}

	function pick(rnd, list) { return list[Math.floor(rnd() * list.length)]; }

	 
	function sprite(rows, colours, x0, y0, u) {
		var out = '';
		rows.forEach(function (row, y) {
			var x = 0;
			while (x < row.length) {
				var ch = row.charAt(x), run = 1;
				while (x + run < row.length && row.charAt(x + run) === ch) run++;
				var col = colours[ch];
				if (col) {
					out += '<rect x="' + (x0 + x * u) + '" y="' + (y0 + y * u) + '" width="' + (run * u) +
						'" height="' + u + '" fill="' + col + '"/>';
				}
				x += run;
			}
		});
		return out;
	}

	function lineupSvg(blend) {
		var c = CROWD, rnd = lcg(c.seed), u = c.u;
		var botAt = blend ? c.n - 2 : c.n - 4;
		var W = c.n * c.step + 8;
		var heads = '';
		var botX = 0;
		for (var i = 0; i < c.n; i++) {
			var x = 4 + i * c.step;
			var y = c.top + (i % 2 ? 1 : 0);
			var body;
			if (blend && i !== botAt) {
				body = sprite(BOT, {
					a: pick(rnd, EYES), g: pick(rnd, METAL), d: '#14181A', R: pick(rnd, EYES), m: '#14181A', t: '#3A4144'
				}, x, c.top, u);
			} else if (i === botAt && blend) {
				botX = x;
				body = '<g class="lw_promo_bot">' + sprite(HUMAN, {
					h: '#5A3417', s: '#F2C7A5', E: '#0B0B0B', m: '#5A1F1F', t: '#3DF5A0', P: '#F2C7A5'
				}, x, y, u) + '</g>';
			} else if (i === botAt) {
				botX = x;
				body = '<g class="lw_promo_bot">' + sprite(BOT, {
					a: '#FF2B3D', g: '#8A9496', d: '#14181A', R: '#FF2B3D', m: '#14181A', t: '#3A4144'
				}, x, c.top, u) + '</g>';
			} else {
				var mouth = pick(rnd, MOUTHS);
				var rows = HUMAN.slice();
				rows[6] = mouth[0];
				rows[7] = mouth[1];
				var phones = rnd() < 0.4;
				var colours = {
					h: pick(rnd, HAIR), s: pick(rnd, SKIN), E: '#0B0B0B', m: '#5A1F1F', t: pick(rnd, SHIRT),
					P: phones ? pick(rnd, ['#3DF5A0', '#E9E9E9', '#FF5A6E']) : null
				};
				if (!phones) colours.P = colours.s;
				body = sprite(rows, colours, x, y, u);
			}
			heads += '<g class="lw_promo_head" style="animation-delay:' + (i * 45) + 'ms;opacity:' +
				(0.5 + 0.5 * (i / c.n)).toFixed(2) + '">' + body + '</g>';
		}

		var bw = 10 * u, bh = 11 * u;
		var L = 6, pad = 3;
		var x1 = botX - pad, y1 = c.top - pad, x2 = botX + bw + pad, y2 = Math.min(c.H - 1, c.top + bh + pad);
		var corners = 'M' + x1 + ' ' + (y1 + L) + 'V' + y1 + 'H' + (x1 + L) +
			'M' + (x2 - L) + ' ' + y1 + 'H' + x2 + 'V' + (y1 + L) +
			'M' + x2 + ' ' + (y2 - L) + 'V' + y2 + 'H' + (x2 - L) +
			'M' + (x1 + L) + ' ' + y2 + 'H' + x1 + 'V' + (y2 - L);

		return '<svg class="lw_promo_chart" viewBox="0 0 ' + W + ' ' + c.H +
				'" preserveAspectRatio="xMaxYMid meet" shape-rendering="crispEdges" aria-hidden="true" focusable="false">' +
			'<defs><radialGradient id="lwPromoHalo">' +
				'<stop offset="0" stop-color="#FF2B3D" stop-opacity=".55"/>' +
				'<stop offset="60%" stop-color="#FF2B3D" stop-opacity=".12"/>' +
				'<stop offset="100%" stop-color="#FF2B3D" stop-opacity="0"/></radialGradient></defs>' +
			'<ellipse class="lw_promo_halo" cx="' + (botX + bw / 2) + '" cy="' + (c.top + bh / 2) +
				'" rx="34" ry="26" fill="url(#lwPromoHalo)"/>' +
			heads +
			'<rect class="lw_promo_beam" style="--lw-beam:' + (botX + bw / 2) + 'px" x="0" y="1" width="2" height="' +
				(c.H - 2) + '" fill="#FF2B3D"/>' +
			'<path class="lw_promo_lock" d="' + corners + '" fill="none" stroke="#FF2B3D" stroke-width="1.6"/>' +
			'</svg>';
	}

	function track(name, info) {
		if (typeof window.gtag !== 'function') return;

		var promotion = {
			site: SITE,
			promotion_id: 'whos_the_bot',
			promotion_name: "Who's the Bot",
			creative_id: 'wtb_' + info.variant + '_' + info.locale,
			creative_name: 'top_banner_' + info.variant + '_' + info.locale,
			creative_slot: 'promo_top'
		};

		

		window.gtag('event', name, {
			site: promotion.site,
			promotion_id: promotion.promotion_id,
			promotion_name: promotion.promotion_name,
			creative_id: promotion.creative_id,
			creative_name: promotion.creative_name,
			creative_slot: promotion.creative_slot,
			promo_locale: info.locale,
			promo_variant: info.variant,
			promo_country: info.country || 'unknown',
			promo_locale_source: info.source || 'country',
			items: [{
				item_id: promotion.creative_id,
				item_name: promotion.promotion_name + ' ' + info.locale,
				site: promotion.site,
				promotion_id: promotion.promotion_id,
				promotion_name: promotion.promotion_name,
				creative_id: promotion.creative_id,
				creative_name: promotion.creative_name,
				creative_slot: promotion.creative_slot
			}],
			transport_type: 'beacon'
		});
	}

	 
	function paintCopy(node, creative) {
		node.textContent = '';
		var at = creative.hi ? creative.text.indexOf(creative.hi) : -1;
		if (at < 0) {
			node.textContent = creative.text;
			return;
		}
		var accent = document.createElement('b');
		accent.className = 'lw_promo_hi';
		accent.textContent = creative.hi;
		node.appendChild(document.createTextNode(creative.text.slice(0, at)));
		node.appendChild(accent);
		node.appendChild(document.createTextNode(creative.text.slice(at + creative.hi.length)));
	}

	function build() {
		var banner = document.createElement('div');
		banner.className = 'lw_promo';
		banner.setAttribute('role', 'region');
		banner.setAttribute('aria-label', "Who's the Bot?");
		banner.innerHTML =
			'<span class="lw_promo_grid" aria-hidden="true"></span>' +
			lineupSvg(variant() === 'blend') +
			'<span class="lw_promo_scan" aria-hidden="true"></span>' +
			'<span class="lw_promo_scrim" aria-hidden="true"></span>' +
			'<a class="lw_promo_link" target="_blank" rel="noopener">' +
				'<span class="lw_promo_brand" dir="ltr">Who&#8217;s the Bot?</span>' +
				'<span class="lw_promo_live"><i></i>live</span>' +
				'<span class="lw_promo_text"></span>' +
				'<span class="lw_promo_spacer"></span>' +
				'<span class="lw_promo_cta"><span class="lw_promo_cta_label"></span>' +
					'<span class="lw_promo_arrow" aria-hidden="true">&#8594;</span></span>' +
			'</a>' +
			'<button type="button" class="lw_promo_close" aria-label="Close">' +
				'<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>' +
			'</button>';
		document.body.insertBefore(banner, document.body.firstChild);
		 
		if (getComputedStyle(banner).direction === 'rtl') banner.classList.add('lw_promo_rtl');

		var info = null;
		var link = banner.querySelector('.lw_promo_link');

		banner.querySelector('.lw_promo_close').addEventListener('click', function () {
			if (info) track('close_promotion', info);
			banner.parentNode.removeChild(banner);
			root.classList.remove('lw_promo_on');
		});

		var page = pageLocale();

		

		var localeReady = page ? Promise.resolve({ locale: page, country: '', from: 'page' })
			: countryReady.then(function (country) {
				return { locale: COUNTRIES[country] || 'en', country: country, from: 'country' };
			});

		

		function paint(pick) {
			var locale = pick.locale;
			var creative = CREATIVES[locale];
			var v = variant();
			if (!banner.parentNode) return;
			info = { locale: locale, country: pick.country, source: pick.from, variant: v };

			link.href = gameUrl(locale, v);
			link.lang = locale;
			banner.setAttribute('data-variant', v);
			paintCopy(banner.querySelector('.lw_promo_text'), v === 'blend' ? BLEND[locale] : creative);
			banner.querySelector('.lw_promo_cta_label').textContent = creative.cta;
			banner.querySelector('.lw_promo_live').lastChild.nodeValue = creative.live;
			banner.querySelector('.lw_promo_close').setAttribute('aria-label', CLOSE[locale] || CLOSE.en);
			 
			if (getComputedStyle(banner).direction === 'rtl') {
				banner.querySelector('.lw_promo_arrow').textContent = '\u2190';
			}
			banner.classList.add('lw_promo_ready');
		}

		localeReady.then(function (pick) {
			paint(pick);
			if (!banner.parentNode) return;

			

			countryReady.then(function (country) {
				if (page === 'en' && COUNTRIES[country] === 'ru' && banner.parentNode) {
					paint({ locale: 'ru', country: country, from: 'country' });
				}
				info.country = info.country || country;
				track('view_promotion', info);
			});
			link.addEventListener('click', function () {
				track('select_promotion', info);
			});
		});
	}

	if (document.body) {
		build();
	} else {
		document.addEventListener('DOMContentLoaded', build);
	}
})();
