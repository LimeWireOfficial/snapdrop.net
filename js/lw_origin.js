

(function () {
  'use strict';
  var KEY = 'lw_origin';
  var TTL = 90 * 864e5;
  var AI = ['chatgpt.com', 'chat.openai.com', 'openai.com', 'perplexity.ai', 'gemini.google.com', 'bard.google.com',
    'copilot.microsoft.com', 'claude.ai', 'chat.deepseek.com', 'chat.mistral.ai', 'grok.com', 'meta.ai', 'you.com',
    'phind.com'];
  var SEARCH = /(^|\.)(google\.[a-z.]+|bing\.com|duckduckgo\.com|yahoo\.[a-z.]+|yandex\.[a-z.]+|ecosia\.org|seznam\.cz|naver\.com|baidu\.com|search\.brave\.com|qwant\.com|startpage\.com)$/;
  var FLAGSHIP = /(^|\.)limewire\.com$/;

  function bare(host) { return String(host || '').toLowerCase().replace(/^www\./, ''); }
  function own(host) {
    var self = bare(location.hostname).replace(/^staging\./, '');
    return host === self || host.slice(-self.length - 1) === '.' + self;
  }
  function medium(host) {
    for (var i = 0; i < AI.length; i++) {
      if (host === AI[i] || host.slice(-AI[i].length - 1) === '.' + AI[i]) return 'ai';
    }
    return SEARCH.test(host) ? 'organic' : 'referral';
  }
  function clip(v) { return String(v).replace(/[^\w.\-\/]/g, '').slice(0, 80); }

  function arrival() {
    var q = new URLSearchParams(location.search);
    var s = q.get('utm_source');
    if (s) {
      var m = q.get('utm_medium') || (medium(bare(s)) === 'ai' ? 'ai' : 'referral');
      return bare(s) + '/' + m;
    }
    if (q.has('gclid')) return 'google/cpc';
    if (q.has('msclkid')) return 'bing/cpc';
    var host;
    try { host = bare(new URL(document.referrer).hostname); } catch (e) { return null; }
    if (!host || own(host)) return null;
    return host + '/' + medium(host);
  }

  function read() {
    try {
      var o = JSON.parse(localStorage.getItem(KEY) || 'null');
      return o && o.v && Date.now() - o.at < TTL ? o.v : null;
    } catch (e) { return null; }
  }

  var origin = read();
  if (!origin) {
    var a = arrival();
    if (a) {
      origin = clip(a);
      try { localStorage.setItem(KEY, JSON.stringify({ v: origin, at: Date.now() })); } catch (e) {   }
    }
  }
  var term = origin || 'direct/none';

  function tag(href) {
    try {
      var u = new URL(href, location.href);
      if (!FLAGSHIP.test(u.hostname) || u.searchParams.has('utm_term')) return href;
      
      if (!u.searchParams.has('utm_source') && !u.searchParams.has('referrer')) return href;
      u.searchParams.set('utm_term', term);
      return u.toString();
    } catch (e) { return href; }
  }

  function onPointer(ev) {
    var el = ev.target && ev.target.closest ? ev.target.closest('a[href]') : null;
    if (el) {
      var next = tag(el.href);
      if (next !== el.href) el.setAttribute('href', next);
    }
  }
  ['mousedown', 'touchstart', 'keydown', 'click', 'auxclick', 'contextmenu'].forEach(function (t) {
    document.addEventListener(t, onPointer, { capture: true, passive: true });
  });

  var open = window.open;
  if (typeof open === 'function') {
    window.open = function (url) {
      var args = Array.prototype.slice.call(arguments);
      if (typeof url === 'string') args[0] = tag(url);
      return open.apply(window, args);
    };
  }

  window.lwOrigin = term;
})();
