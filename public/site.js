// Încarcă navigația și footerul comune, inițializează meniul mobil și animația de reveal.
(function () {
	document.documentElement.classList.add('js');

	function load(id, url, after) {
		var el = document.getElementById(id);
		if (!el) return;
		fetch(url).then(function (r) { return r.text(); }).then(function (html) {
			el.innerHTML = html;
			if (after) after(el);
		});
	}

	function initNav(root) {
		var t = root.querySelector('[data-menu-toggle]');
		var m = root.querySelector('[data-menu]');
		if (t && m) {
			t.addEventListener('click', function () {
				var open = m.classList.toggle('hidden') === false;
				t.setAttribute('aria-expanded', open);
				t.querySelector('[data-icon-open]').classList.toggle('hidden', open);
				t.querySelector('[data-icon-close]').classList.toggle('hidden', !open);
			});
			document.addEventListener('keydown', function (e) {
				if (e.key === 'Escape' && !m.classList.contains('hidden')) t.click();
			});
		}
		var current = document.body.getAttribute('data-page');
		if (current) {
			root.querySelectorAll('[data-nav="' + current + '"]').forEach(function (a) {
				a.classList.add('text-navy');
				a.setAttribute('aria-current', 'page');
			});
		}
	}

	load('nav-placeholder', '/components/nav.html', initNav);
	load('footer-placeholder', '/components/footer.html');
	document.querySelectorAll('[data-include]').forEach(function (el) {
		load(el.id, el.getAttribute('data-include'));
	});

	var reveals = document.querySelectorAll('.reveal');
	if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
		var io = new IntersectionObserver(function (entries) {
			entries.forEach(function (e) {
				if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
			});
		}, { threshold: 0.15 });
		reveals.forEach(function (el) { io.observe(el); });
	} else {
		reveals.forEach(function (el) { el.classList.add('is-visible'); });
	}
})();
