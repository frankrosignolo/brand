/* Homepage interactions — frankrosignolo.com
   Three patterns, per the brief:
   1. Skills   — tab switcher (keyboard-accessible)
   2. Prompts  — expandable spec rows with copy-to-clipboard
   3. Directory — card carousel (scroll-snap + controls)
*/
(function () {
  'use strict';

  /* ---------- keep the URL hash-free ----------
     Anchor clicks used to write #skills etc. into the URL, so the next
     visit auto-scrolled past the hero. Scroll without recording a hash,
     and neutralize any stale hash already in the URL. */
  if (location.hash) {
    history.replaceState(null, '', location.pathname + location.search);
    var root = document.documentElement;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.style.scrollBehavior = '';
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var target = document.getElementById(a.getAttribute('href').slice(1));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView();
  });

  /* ---------- mobile nav ---------- */
  var menuBtn = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- free resources dropdown ---------- */
  var dropBtn = document.querySelector('.nav-drop-btn');
  var dropPanel = document.getElementById('resources-panel');
  if (dropBtn && dropPanel) {
    function setDrop(open) {
      dropBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      dropPanel.hidden = !open;
    }
    dropBtn.addEventListener('click', function () {
      setDrop(dropPanel.hidden);
    });
    dropPanel.addEventListener('click', function (e) {
      if (e.target.closest('a')) setDrop(false);
    });
    document.addEventListener('click', function (e) {
      if (!dropPanel.hidden && !e.target.closest('.site-head')) setDrop(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !dropPanel.hidden) {
        setDrop(false);
        dropBtn.focus();
      }
    });
  }

  /* ---------- 1. skills: tab switcher ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.skill-tab'));
  var panels = Array.prototype.slice.call(document.querySelectorAll('.skill-panel'));

  function selectTab(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
    });
    panels.forEach(function (p) {
      p.hidden = p.id !== tab.getAttribute('aria-controls');
    });
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { selectTab(tab); });
    tab.addEventListener('keydown', function (e) {
      var dir = 0;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') dir = 1;
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') dir = -1;
      else if (e.key === 'Home') dir = -i;
      else if (e.key === 'End') dir = tabs.length - 1 - i;
      else return;
      e.preventDefault();
      var next = tabs[(i + dir + tabs.length) % tabs.length];
      selectTab(next);
      next.focus();
    });
  });

  /* ---------- 2. prompts: expandable rows + copy ---------- */
  document.querySelectorAll('.prompt-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.prompt-item');
      var body = document.getElementById(btn.getAttribute('aria-controls'));
      var open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      body.hidden = !open;
    });
  });

  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pre = btn.parentElement.querySelector('pre');
      var text = pre.textContent.trim();
      function done(ok) {
        var label = btn.textContent;
        btn.textContent = ok ? 'Copied ✓' : 'Select & copy';
        btn.classList.toggle('done', ok);
        setTimeout(function () {
          btn.textContent = 'Copy prompt';
          btn.classList.remove('done');
        }, 2000);
        if (!ok) {
          var range = document.createRange();
          range.selectNodeContents(pre);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        }
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
      } else {
        done(false);
      }
    });
  });

  /* ---------- 3. directory: carousel ---------- */
  var track = document.querySelector('.saas-track');
  if (track) {
    var cards = Array.prototype.slice.call(track.querySelectorAll('.saas-card'));
    var prev = document.querySelector('.saas-controls .prev');
    var next = document.querySelector('.saas-controls .next');
    var counter = document.querySelector('.saas-counter');
    var meter = document.querySelector('.saas-meter i');

    function pad(n) { return n < 10 ? '0' + n : '' + n; }

    function step() {
      return cards.length > 1
        ? cards[1].offsetLeft - cards[0].offsetLeft
        : track.clientWidth;
    }

    function update() {
      var max = track.scrollWidth - track.clientWidth;
      var idx = Math.min(cards.length - 1, Math.round(track.scrollLeft / step()));
      counter.textContent = pad(idx + 1) + ' / ' + pad(cards.length);
      meter.style.width = Math.min(100, ((track.scrollLeft + track.clientWidth) / track.scrollWidth) * 100) + '%';
      prev.disabled = track.scrollLeft <= 2;
      next.disabled = track.scrollLeft >= max - 2;
    }

    prev.addEventListener('click', function () {
      track.scrollBy({ left: -step(), behavior: 'smooth' });
    });
    next.addEventListener('click', function () {
      track.scrollBy({ left: step(), behavior: 'smooth' });
    });

    var raf = null;
    track.addEventListener('scroll', function () {
      if (raf) return;
      raf = requestAnimationFrame(function () { raf = null; update(); });
    });
    window.addEventListener('resize', update);
    update();
  }

  /* ---------- footer year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
