

(function () {
  "use strict";
  if (window.__lwLangPicker) return;
  window.__lwLangPicker = 1;

  var NAMES = {
    ar: "العربية", de: "Deutsch", en: "English", es: "Español", fr: "Français",
    hi: "हिन्दी", id: "Bahasa Indonesia", it: "Italiano", ja: "日本語", ko: "한국어",
    nl: "Nederlands", pl: "Polski", pt: "Português", th: "ไทย",
    tr: "Türkçe", vi: "Tiếng Việt", zh: "中文",
    

    bn: "বাংলা", fa: "فارسی", ur: "اردو", he: "עברית",
    sv: "Svenska", ms: "Bahasa Melayu", fil: "Filipino", ta: "தமிழ்",
    mr: "मराठी", te: "తెలుగు", el: "Ελληνικά", ro: "Română", cs: "Čeština"
  };
  var OFFER = {
    ar: "متوفر بالعربية", de: "Auf Deutsch ansehen", es: "Ver en español",
    fr: "Voir en français", hi: "हिन्दी में देखें", id: "Lihat dalam Bahasa Indonesia",
    it: "Guarda in italiano", ja: "日本語で表示", ko: "한국어로 보기",
    nl: "Bekijk in het Nederlands", pl: "Zobacz po polsku", pt: "Ver em português",
    th: "ดูเป็นภาษาไทย", tr: "Türkçe görüntüle",
    vi: "Xem bằng tiếng Việt", zh: "查看中文版", en: "View in English",
    bn: "বাংলায় দেখুন", fa: "مشاهده به فارسی", ur: "اردو میں دیکھیں",
    he: "צפה בעברית", sv: "Visa på svenska",
    ms: "Lihat dalam Bahasa Melayu", fil: "Tingnan sa Filipino",
    ta: "தமிழில் காண்க", mr: "मराठीत पाहा", te: "తెలుగులో చూడండి",
    el: "Δείτε στα ελληνικά", ro: "Vezi în română", cs: "Zobrazit česky"
  };
  var LABEL = { ar: "اللغة", de: "Sprache", es: "Idioma", fr: "Langue", id: "Bahasa",
    it: "Lingua", ja: "言語", ko: "언어", pt: "Idioma", th: "ภาษา",
    tr: "Dil", zh: "语言", en: "Language", bn: "ভাষা", fa: "زبان", ur: "زبان",
    he: "שפה", sv: "Språk", ms: "Bahasa", fil: "Wika", ta: "மொழி",
    mr: "भाषा", te: "భాష", el: "Γλώσσα", ro: "Limba", cs: "Jazyk",
    hi: "भाषा", vi: "Ngôn ngữ", pl: "Język", nl: "Taal" };
   
  var ORDER = {
    "sharedrop.io": "en id es pt ar tr fr zh de th it pl vi ja bn nl ms ko ur cs hi el sv ro he fa mr ta te fil",
    "snapdrop.net": "en es id zh ar pt fr th de vi tr it ja pl ko ms nl cs ro el sv fa he hi bn ta ur mr fil te",
    "sendbig.com": "en zh es it fr pt id ar tr el de nl vi pl ro sv he ja ko cs fa th hi bn mr te",
    "file.io": "en fr zh es de pt ar tr id pl vi it nl sv ko ro fa ja he cs th el hi ms bn fil mr ur te",
    "filetransfer.io": "en zh es fr pt id de tr it th pl ar vi ro nl cs ja ko el sv fa he hi bn ms ta mr fil te ur",
    "easyupload.io": "en zh sv de fr pl pt es ar ro tr ja ko it vi el id nl cs fa th he hi ms bn mr fil",
    "pdfupload.io": "en zh de es ar pt fr tr it ja el id vi nl pl th fa he ro cs hi ko ms sv"
  };
   
  var KEY = "lw-lang-hint";

  

  function rankOf() {
    var host = location.hostname.replace(/^(www|staging)\./, "");
    var pop = String(ORDER[host] || "").split(" "), rank = {}, n = 0, i;
    var langs = navigator.languages && navigator.languages.length
      ? navigator.languages : [navigator.language || ""];
    for (i = 0; i < langs.length; i++) { var c = base(langs[i]); if (c && !(c in rank)) rank[c] = n++; }
    for (i = 0; i < pop.length; i++) if (pop[i] && !(pop[i] in rank)) rank[pop[i]] = n++;
    return function (a, b) {
      var ra = a.code in rank ? rank[a.code] : 1e6, rb = b.code in rank ? rank[b.code] : 1e6;
      return ra - rb || a.name.localeCompare(b.name);
    };
  }

  function base(code) { return String(code || "").toLowerCase().split("-")[0]; }

  

  function stay(href) {
    var host = location.hostname;
    if (!href || host.indexOf("staging.") !== 0) return href;
    var prod = host.slice(8);
    return String(href).replace(/^https?:\/\/([^/]+)/, function (all, h) {
      return h === prod || h === "www." + prod ? location.origin : all;
    });
  }

  function versions() {
    var out = [], seen = {};
    var links = document.querySelectorAll('link[rel="alternate"][hreflang]');
    for (var i = 0; i < links.length; i++) {
      var raw = String(links[i].getAttribute("hreflang") || "").toLowerCase();
       
      if (!raw || raw === "x-default") continue;
      var code = base(raw);
      var href = stay(links[i].getAttribute("href"));
      if (!code || !href || seen[code]) continue;
      seen[code] = 1;
      out.push({ code: code, href: href, name: NAMES[code] || code.toUpperCase() });
    }
    return out;
  }

  function current(list) {
    var want = base(document.documentElement.getAttribute("lang")) ||
               base(location.pathname.split("/")[1]) || "en";
    for (var i = 0; i < list.length; i++) if (list[i].code === want) return list[i];
    return null;
  }

  

  function topOffset(rtl) {
    var x = rtl ? 24 : Math.max(window.innerWidth - 24, 8), y = 8;
    for (var pass = 0; pass < 4; pass++) {
      var stack = document.elementsFromPoint(x, y + 6), best = 0;
      for (var i = 0; i < stack.length; i++) {
        var node = stack[i];
        if (node.closest && node.closest(".lw-lp")) continue;
        

        var own = node.getBoundingClientRect ? node.getBoundingClientRect().bottom : 0;
        if (own > y && own <= 200 && own > best) best = own;
        while (node && node !== document.body && node !== document.documentElement) {
          var pos = getComputedStyle(node).position;
          if (pos === "fixed" || pos === "sticky") {
            var bottom = node.getBoundingClientRect().bottom;
            if (bottom > y && bottom <= 200 && bottom > best) best = bottom;
            break;
          }
          node = node.parentElement;
        }
      }
      if (!best) break;
      y = best + 8;
    }
    return Math.min(y, 200);
  }

  

  function nativePicker(list, nowCode, nowName) {
    

    var mark = document.querySelector("[data-lw-lang-native]");
    if (mark) {
      var text = (mark.textContent || "").trim().toLowerCase();
      return { list: null, toggle: mark, isCode: text === nowCode };
    }
    var href = {}, i;
    for (i = 0; i < list.length; i++) {
      href[String(list[i].href).replace(/^https?:\/\/[^/]+/, "").replace(/\/$/, "") || "/"] = 1;
    }
    

    var groups = document.querySelectorAll("ul, ol, div, nav, header"), best = null, bestN = 1e9;
    for (i = 0; i < groups.length; i++) {
      var g = groups[i];
      if (g.closest('.lw-lp, .lw-langs, [class*="lw_promo"]')) continue;
      var links = g.querySelectorAll("a[href]");
      if (links.length > 40) continue;
      var hit = {}, n = 0;
      for (var j = 0; j < links.length; j++) {
        var p = links[j].getAttribute("href").replace(/^https?:\/\/[^/]+/, "").replace(/\/$/, "") || "/";
        if (href[p] && !hit[p]) { hit[p] = 1; n++; }
      }
      if (n >= 2 && links.length < bestN) { best = g; bestN = links.length; }
    }
    if (!best || !best.closest("nav, header")) return null;
    var owner = best.parentElement || best;
    var tog = owner.querySelector(".dropdown-toggle, [aria-haspopup], [role=button], button, summary");
    if (!tog || best.contains(tog) || !tog.closest("nav, header")) return null;
    

    var label = (tog.textContent || "").trim().toLowerCase();
    if (label !== nowCode && label !== String(nowName).toLowerCase()) return null;
    return { list: best, toggle: tog, isCode: label === nowCode };
  }

  function css(rtl) {
    var side = rtl ? "left" : "right";
    return '.lw-lp{position:fixed;' + side + ':14px;z-index:2147483000;font:500 14px/1.3 ' +
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;direction:ltr}' +
      '.lw-lp *{box-sizing:border-box}' +
      '.lw-lp--slot{position:relative;' + side + ':auto;z-index:auto;display:inline-flex;vertical-align:middle}' +
      '.lw-lp--slot .lw-lp__btn{padding:5px 10px;box-shadow:none;border-color:rgba(0,0,0,.16);line-height:1.2}' +
      '.lw-lp--slot .lw-lp__btn:hover{box-shadow:none;border-color:rgba(0,0,0,.35)}' +
      '.lw-lp--slot .lw-lp__menu{z-index:1000}' +
      

      '.lw-lp.lw-lp--slot .lw-lp__menu a.lw-lp__it{display:flex;opacity:1;color:#111;font-size:14px;line-height:1.3}' +
      '.lw-lp.lw-lp--slot .lw-lp__hint a[href]{display:block;opacity:1;color:#111;font-size:14px;line-height:1.3}' +
      

      '.lw-lp.lw-lp--slot .lw-lp__menu a.lw-lp__it{color:#111!important;margin:0!important;border:0!important;' +
      'text-transform:none!important;letter-spacing:normal!important;float:none!important;width:auto!important}' +
      '.lw-lp.lw-lp--slot .lw-lp__menu a.lw-lp__it:hover{border:0!important}' +
       
      '.lw-lp--dark .lw-lp__btn{background:transparent;color:#fff;border-color:rgba(255,255,255,.5)}' +
      '.lw-lp--dark .lw-lp__btn:hover{border-color:#fff;background:rgba(255,255,255,.08)}' +
      '.lw-lp__btn{display:flex;align-items:center;gap:7px;padding:8px 12px;border:1px solid rgba(0,0,0,.12);' +
      'border-radius:999px;background:#fff;color:#111;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.14);' +
      'font:inherit;max-width:60vw}' +
      '.lw-lp__btn:hover{box-shadow:0 4px 16px rgba(0,0,0,.2)}' +
      '.lw-lp__btn:focus-visible{outline:2px solid #1a73e8;outline-offset:2px}' +
      '.lw-lp__glb{width:17px;height:17px;flex:0 0 17px}' +
      '.lw-lp__now{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
      '.lw-lp__car{opacity:.55;font-size:11px}' +
      '.lw-lp__code{display:none;font-weight:700;letter-spacing:.03em}' +
      '.lw-lp__menu{position:absolute;top:calc(100% + 8px);' + side + ':0;min-width:210px;max-height:60vh;' +
      'overflow:auto;padding:6px;border-radius:12px;background:#fff;color:#111;' +
      'box-shadow:0 10px 34px rgba(0,0,0,.26);border:1px solid rgba(0,0,0,.1)}' +
      '.lw-lp__menu[hidden]{display:none}' +
      '.lw-lp__ttl{padding:7px 10px 5px;font-size:11px;letter-spacing:.06em;text-transform:uppercase;opacity:.5}' +
      '.lw-lp__it{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:9px 10px;' +
      'border-radius:8px;color:#111;text-decoration:none}' +
      '.lw-lp__it:hover,.lw-lp__it:focus{background:#f1f3f5;text-decoration:none;color:#111}' +
      '.lw-lp__it[aria-current="true"]{font-weight:700;background:#eef6ff}' +
      '.lw-lp__tick{color:#1a73e8}' +
      '.lw-lp__hint{position:absolute;top:calc(100% + 8px);' + side + ':0;width:250px;padding:12px;' +
      'border-radius:12px;background:#111;color:#fff;box-shadow:0 10px 34px rgba(0,0,0,.3)}' +
      '.lw-lp__hint a{display:block;margin-top:9px;padding:9px 10px;border-radius:8px;background:#fff;' +
      'color:#111;text-align:center;text-decoration:none;font-weight:600}' +
      '.lw-lp__no{margin-top:7px;width:100%;padding:6px;border:0;background:none;color:#bbb;' +
      'font:inherit;font-size:13px;cursor:pointer;text-decoration:underline}' +
      
      'html[data-theme=dark] .lw-lp__btn,html[data-theme=dark] .lw-lp__menu{background:#1f1f1f;color:#f5f5f5;' +
      'border-color:rgba(255,255,255,.16)}html[data-theme=dark] .lw-lp__it{color:#f5f5f5}' +
      'html[data-theme=dark] .lw-lp__it:hover,html[data-theme=dark] .lw-lp__it:focus{background:#333;color:#fff}' +
      'html[data-theme=dark] .lw-lp__it[aria-current="true"]{background:#14314f}html[data-theme=dark] .lw-lp.lw-lp--slot .lw-lp__menu a.lw-lp__it{color:#f5f5f5!important}' +
      'html[data-theme=dark] .lw-lp--dark .lw-lp__btn{background:transparent;color:#fff}' +
      '@media (max-width:480px){.lw-lp__btn{padding:7px 10px}.lw-lp__now{display:none}' +
      '.lw-lp__code{display:inline}' +
      '.lw-lp__menu,.lw-lp__hint{position:fixed;top:auto;bottom:0;left:0;right:0;width:auto;' +
      'max-height:70vh;border-radius:14px 14px 0 0}' +
      '.lw-lp--slot .lw-lp__menu,.lw-lp--slot .lw-lp__hint{position:absolute;top:calc(100% + 8px);' +
      'bottom:auto;left:auto;right:auto;' + side + ':0;max-height:60vh;border-radius:12px}' +
      '.lw-lp--slot .lw-lp__hint{width:min(250px,calc(100vw - 32px))}}';
  }

  function build() {
    var list = versions();
    if (list.length < 2) return;
    var now = current(list) || list[0];
    var ui = base(now.code);
    var rtl = ui === "ar" || ui === "he" || ui === "fa";
    var native = nativePicker(list, base(now.code), now.name);

    var st = document.createElement("style");
    st.textContent = css(rtl);
    document.head.appendChild(st);

    var box = document.createElement("div");
    box.className = "lw-lp";

    

    

    var slots = native ? [] : document.querySelectorAll("[data-lw-lang-slot]");
    function pickSlot() {
      for (var s = 0; s < slots.length; s++) if (slots[s].getClientRects().length) return slots[s];
      return slots[0] || null;
    }
    var slot = pickSlot();
    if (slot) {
      box.className = "lw-lp lw-lp--slot" + (slot.getAttribute("data-lw-lang-slot") === "dark" ? " lw-lp--dark" : "");
      if (slots.length > 1) {
        window.addEventListener("resize", function () {
          var next = pickSlot();
          if (next && next !== box.parentNode) {
            close();
            box.className = "lw-lp lw-lp--slot" + (next.getAttribute("data-lw-lang-slot") === "dark" ? " lw-lp--dark" : "");
            next.appendChild(box);
          }
        });
      }
    } else {
      box.style.top = topOffset(rtl) + "px";

      

      var place = function () {
        if (!box.isConnected) return;
        box.style.top = topOffset(rtl) + "px";
      };
      window.addEventListener("resize", place);
      window.addEventListener("scroll", place, { passive: true });
      window.addEventListener("load", place);
      [400, 1200, 2500, 5000].forEach(function (ms) { setTimeout(place, ms); });
    }

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lw-lp__btn";
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", (LABEL[ui] || "Language") + ": " + now.name);
    btn.innerHTML = '<svg class="lw-lp__glb" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/>' +
      '<path d="M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>' +
      '<span class="lw-lp__now"></span><span class="lw-lp__code"></span>' +
      '<span class="lw-lp__car" aria-hidden="true">▾</span>';
    btn.querySelector(".lw-lp__now").textContent = now.name;
    btn.querySelector(".lw-lp__code").textContent = now.code.toUpperCase();

    var menu = document.createElement("div");
    menu.className = "lw-lp__menu";
    menu.hidden = true;
    menu.setAttribute("role", "menu");
    var ttl = document.createElement("div");
    ttl.className = "lw-lp__ttl";
    ttl.textContent = LABEL[ui] || "Language";
    menu.appendChild(ttl);

    list.sort(rankOf());
    for (var i = 0; i < list.length; i++) {
      var a = document.createElement("a");
      a.className = "lw-lp__it";
      a.href = list[i].href;
      a.hreflang = list[i].code;
      a.lang = list[i].code;
      a.setAttribute("role", "menuitem");
      a.textContent = list[i].name;
      if (list[i].code === now.code) {
        a.setAttribute("aria-current", "true");
        var tick = document.createElement("span");
        tick.className = "lw-lp__tick";
        tick.textContent = "✓";
        a.appendChild(tick);
      }
      a.addEventListener("click", remember);
      menu.appendChild(a);
    }

    box.appendChild(btn);
    box.appendChild(menu);
    if (native) {
       
      box.className = "lw-lp lw-lp--slot";
      box.style.cssText = "position:absolute;top:100%;" + (rtl ? "left" : "right") + ":0;width:0;height:0;display:block";
      (native.toggle.parentNode || document.body).appendChild(box);
    } else {
      (slot || document.body).appendChild(box);
    }

    

    if (native) {
      btn.style.display = "none";
      menu.hidden = true;
      var tog = native.toggle;
      if (tog && native.isCode) {
        tog.setAttribute("aria-label", (LABEL[ui] || "Language") + ": " + now.name);
        

        tog.innerHTML = '<span style="display:inline-flex;align-items:center;gap:6px;text-transform:none">' +
          '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
          'stroke-width="1.8" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/>' +
          '<path d="M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/></svg>' +
          '<span class="lw-lp__now"></span><span class="lw-lp__code"></span></span>';
        tog.querySelector(".lw-lp__now").textContent = now.name;
        tog.querySelector(".lw-lp__code").textContent = now.code.toUpperCase();
      }
    }

    function remember() { try { localStorage.setItem(KEY, "picked"); } catch (e) {} }
    function close() { menu.hidden = true; btn.setAttribute("aria-expanded", "false"); }
    function open() {
      hideHint();
      menu.hidden = false;
      btn.setAttribute("aria-expanded", "true");
       
      if (slot) {
        menu.style.left = menu.style.right = "";
        var r = menu.getBoundingClientRect();
        if (r.right > window.innerWidth - 4) { menu.style.left = "auto"; menu.style.right = "0"; }
        else if (r.left < 4) { menu.style.right = "auto"; menu.style.left = "0"; }
      }
      var first = menu.querySelector(".lw-lp__it[aria-current]") || menu.querySelector(".lw-lp__it");
      if (first) first.focus();
    }
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      menu.hidden ? open() : close();
    });
    document.addEventListener("click", function (e) { if (!box.contains(e.target)) close(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !menu.hidden) { close(); btn.focus(); }
    });

    var hint = null;
    function hideHint() { if (hint) { hint.remove(); hint = null; } }

    

    try { if (localStorage.getItem(KEY)) return; } catch (e) {}
    var langs = navigator.languages && navigator.languages.length
      ? navigator.languages : [navigator.language || "en"];
    var want = null;
    for (var j = 0; j < langs.length && !want; j++) {
      var code = base(langs[j]);
      if (code === now.code) return;
      for (var k = 0; k < list.length; k++) if (list[k].code === code) { want = list[k]; break; }
    }
    if (!want) return;

    hint = document.createElement("div");
    hint.className = "lw-lp__hint";
    hint.lang = want.code;
    if (want.code === "ar" || want.code === "fa" || want.code === "he" || want.code === "ur") hint.dir = "rtl";
    var txt = document.createElement("div");
    txt.textContent = OFFER[want.code] || ("View in " + want.name);
    var go = document.createElement("a");
    go.href = want.href;
    go.hreflang = want.code;
    go.textContent = want.name;
    go.addEventListener("click", remember);
    var no = document.createElement("button");
    no.type = "button";
    no.className = "lw-lp__no";
    no.textContent = "✕";
    no.setAttribute("aria-label", "Dismiss");
    no.addEventListener("click", function () { remember(); hideHint(); });
    hint.appendChild(txt);
    hint.appendChild(go);
    hint.appendChild(no);
    box.appendChild(hint);
    

    var hr = hint.getBoundingClientRect(), dx = 0;
    if (hr.right > window.innerWidth - 8) dx = window.innerWidth - 8 - hr.right;
    if (hr.left + dx < 8) dx = 8 - hr.left;
    if (dx) hint.style.transform = "translateX(" + Math.round(dx) + "px)";
    setTimeout(function () { hideHint(); }, 12000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else { build(); }
})();
