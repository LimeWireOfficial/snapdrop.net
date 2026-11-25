

(function () {
  var d = document.documentElement, KEY = 'lwTheme';
  var mq = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;
  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function apply(t) {
    d.setAttribute('data-theme', t);
    var b = document.querySelectorAll('[data-lw-theme]');
    for (var i = 0; i < b.length; i++) b[i].setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
  }
  function current() { return d.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }
  function bind() {
    apply(current());
    document.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('[data-lw-theme]');
      if (!b) return;
      e.preventDefault();
      var t = current() === 'dark' ? 'light' : 'dark';
      apply(t);
      try {
        
        if (mq && (t === 'dark') === mq.matches) localStorage.removeItem(KEY); else localStorage.setItem(KEY, t);
      } catch (e2) {}
    });
    if (mq) {
      var follow = function () { if (!stored()) apply(mq.matches ? 'dark' : 'light'); };
      if (mq.addEventListener) mq.addEventListener('change', follow); else if (mq.addListener) mq.addListener(follow);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind); else bind();
})();
