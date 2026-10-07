// Custom sections for the Cue project page, styled after the Cue app:
// cream and black surfaces, coral accents, gradient category chips and Cuey.
// main.js renders this when a project has `layout: "cue"`.

window.CUSTOM_LAYOUTS = window.CUSTOM_LAYOUTS || {};

(function () {
  const a = (name) => `assets/cue/${name}`;

  // Cuey, drawn with the same star and eyes as the Cue app
  const cuey = (id, [c0, c1] = ["#FFBB55", "#FF5E82"]) => `
    <svg class="cuey" viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <radialGradient id="${id}" cx="50%" cy="28%" r="72%">
          <stop offset="0%" stop-color="${c0}"/><stop offset="100%" stop-color="${c1}"/>
        </radialGradient>
        <filter id="${id}-r" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="6" result="blur"/>
          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 16 -6" result="r"/>
          <feComposite in="SourceGraphic" in2="r" operator="in"/>
        </filter>
      </defs>
      <path d="M100,12 L124.7,66 L183.7,72.8 L139.9,113 L151.7,171.2 L100,142 L48.3,171.2 L60.1,113 L16.3,72.8 L75.3,66 Z" fill="url(#${id})" filter="url(#${id}-r)"/>
      <circle cx="82" cy="98" r="19" fill="#fff"/><circle cx="118" cy="98" r="19" fill="#fff"/>
      <circle class="cuey__pupil" cx="82" cy="101" r="12" fill="#111"/><circle class="cuey__pupil" cx="118" cy="101" r="12" fill="#111"/>
    </svg>`;

  // The half-sun theme icon from the app
  const THEME_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.31 23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69ZM12 18V6c3.31 0 6 2.69 6 6s-2.69 6-6 6Z" fill="currentColor"/></svg>`;

  const chip = (cat, text) => `<span class="cue-chip cue-chip--${cat}">${text}</span>`;

  const head = (cat, label, title, text) => `
    <header class="cue-head">
      ${label ? chip(cat, label) : ""}
      <h2>${title}</h2>
      ${text ? `<p>${text}</p>` : ""}
    </header>`;

  // The flower-shaped add button from the app
  const BLOB = `<svg class="mi-blob__shape" viewBox="0 0 477.62 445.78" aria-hidden="true"><path d="M229.32,83.05c1.26-37.89,22.73-69.87,52.93-79.8,30.2-9.94,58.11,5.81,64.3,9.3,6.74,3.8,30.83,17.39,39.51,45.71,8.53,27.84-1.06,59.43-23.81,82.12,4.93-2.15,34.93-14.63,67.07,0,36.17,16.46,45.36,56.39,46.13,60.03,1.22,5.77,8.81,41.77-14.12,68.51-21.9,25.53-63.11,32.7-100.3,15.36,4.36,1.96,33.99,15.92,43.56,49.75,11.2,39.6-15.28,70.42-17.95,73.42-18.91,21.26-48.98,32.08-78.68,25.1-28.52-6.7-51.22-28.52-59.12-56.81-.84,4.3-9.42,44.67-47.92,62.49-32.15,14.89-69.37,6.74-93.43-15.2-3.1-2.83-35.78-33.67-26.88-76.69,6.78-32.77,32.88-49.34,37.74-52.31-21.56,17.64-50.02,22.83-73.92,12.89-33.07-13.75-40.39-49.4-42.38-59.1C.03,238.03-6.17,199.48,21.18,171.34c22.19-22.83,57.68-29.74,89.84-17.57-25.63-14.77-41.16-41.27-39.49-68.42,2.03-33.01,28.55-51.69,34.61-55.97,7.15-5.04,34.48-22.6,67.07-13.41,29.51,8.31,51.61,34.76,56.1,67.07Z" fill="currentColor"/></svg>`;

  const CATS = ["writing", "research", "productivity"];
  const GRADS = {
    all: ["#FFBB55", "#FF5E82"], writing: ["#e8a090", "#7a8c42"], coding: ["#e898b0", "#7898d0"],
    marketing: ["#c8b0e4", "#e8d040"], research: ["#7080d0", "#60a0b0"], design: ["#98b8e4", "#e08878"],
    productivity: ["#e8a848", "#c4a8dc"], education: ["#e098b0", "#9880cc"], other: ["#f0d0d0", "#a03060"],
  };

  // One live demo tile: stage on top, name and trigger underneath
  const tile = (key, name, how, stage) => `
    <article class="mi-tile" data-mi="${key}">
      <div class="mi-tile__stage">${stage}</div>
      <h3 class="mi-tile__name">${name}</h3>
    </article>`;

  const zoom = (src, alt, cls = "") => `<figure class="cue-zoom ${cls}"><img src="${src}" alt="${alt}" loading="lazy"></figure>`;




  const replay = (el, cls) => {
    el.classList.remove(cls);
    void el.getBoundingClientRect();
    el.classList.add(cls);
  };

  // Eyes that ease toward the cursor, with the app's maths
  function trackEyes(svg) {
    const EYES = [{ cx: 82, cy: 98 }, { cx: 118, cy: 98 }];
    const pupils = [...svg.querySelectorAll(".cuey__pupil")];
    const st = EYES.map(({ cx, cy }) => ({ x: cx, y: cy + 3, tx: cx, ty: cy + 3 }));
    document.addEventListener("mousemove", (e) => {
      const r = svg.getBoundingClientRect();
      if (!r.width) return;
      const x = (e.clientX - r.left) * (200 / r.width), y = (e.clientY - r.top) * (200 / r.height);
      EYES.forEach(({ cx, cy }, i) => {
        const dx = x - cx, dy = y - cy, d = Math.hypot(dx, dy), k = d > 0 ? Math.min(d, 6) / d : 0;
        st[i].tx = cx + dx * k; st[i].ty = cy + dy * k;
      });
    });
    (function tick() {
      pupils.forEach((p, i) => {
        st[i].x += (st[i].tx - st[i].x) * 0.1; st[i].y += (st[i].ty - st[i].y) * 0.1;
        p.setAttribute("cx", st[i].x.toFixed(2)); p.setAttribute("cy", st[i].y.toFixed(2));
      });
      requestAnimationFrame(tick);
    })();
  }

  function initMicro(mi) {
    const get = (k) => mi.querySelector(`[data-mi="${k}"]`);

    // Theme: spin the icon, flip the tile
    const themeTile = get("theme");
    themeTile.querySelector(".mi-theme").addEventListener("click", () => {
      replay(themeTile.querySelector(".mi-theme svg"), "is-spinning");
      themeTile.classList.toggle("is-dark");
    });

    // Cuey: random move on click
    const MOVES = ["bounce", "wiggle", "squish", "dizzy", "spin"];
    const cueySvg = get("cuey").querySelector("svg");
    get("cuey").querySelector(".mi-cuey").addEventListener("click", () => {
      MOVES.forEach((m) => cueySvg.classList.remove(`go-${m}`));
      replay(cueySvg, `go-${MOVES[Math.floor(Math.random() * MOVES.length)]}`);
    });

    // Mood colours
    const moodSvg = get("chips").querySelector("svg");
    const stops = moodSvg.querySelectorAll("stop");
    get("chips").querySelectorAll(".mi-chip").forEach((chip) => chip.addEventListener("click", () => {
      get("chips").querySelectorAll(".mi-chip").forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      const [s0, s1] = GRADS[chip.dataset.cat];
      stops[0].setAttribute("stop-color", s0);
      stops[1].setAttribute("stop-color", s1);
    }));

    // Card: gradient follows the cursor
    const card = get("card").querySelector(".mi-card");
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.backgroundPosition = `${((e.clientX - r.left) / r.width * 100).toFixed(1)}% ${((e.clientY - r.top) / r.height * 100).toFixed(1)}%`;
    });
    card.addEventListener("mouseleave", () => { card.style.backgroundPosition = "50% 50%"; });

    // Custom cursor inside its tile
    const area = get("cursor").querySelector(".mi-tile__stage");
    const dot = area.querySelector(".mi-cursor");
    area.addEventListener("mousemove", (e) => {
      const r = area.getBoundingClientRect();
      dot.style.left = `${e.clientX - r.left}px`;
      dot.style.top = `${e.clientY - r.top}px`;
    });
    area.addEventListener("mousedown", () => dot.classList.add("is-down"));
    addEventListener("mouseup", () => dot.classList.remove("is-down"));

    // Close: half-turn spin on press
    const close = get("close").querySelector(".mi-close");
    close.addEventListener("click", () => replay(close, "is-spinning"));

    // Copy
    const ghost = get("ghost").querySelector(".mi-ghost");
    let t;
    ghost.addEventListener("click", () => {
      ghost.textContent = "Copied!";
      ghost.classList.add("is-copied");
      clearTimeout(t);
      t = setTimeout(() => { ghost.textContent = "Copy Prompt"; ghost.classList.remove("is-copied"); }, 2000);
    });

    mi.querySelectorAll(".cuey").forEach(trackEyes);
  }

  window.CUSTOM_LAYOUTS.cue = {
    html: (img) => `
    <div class="cue" data-layout="cue">

      <section class="cue-stage">
        ${zoom(img("cue-laptop.jpg"), "Cue open on a laptop", "cue-stage__main")}
        <div class="cue-stage__row">
          ${zoom(a("scene-phone.jpg"), "Cue on a phone", "cue-stage__phone")}
          <div class="cue-hello">
            <div class="cue-bubble">Hey! I'm Cuey ✦<br>Cue is your personal AI prompt library, save &amp; search your best prompts.</div>
            <button class="cue-hello__cuey" type="button" aria-label="Spin Cuey">${cuey("cue-g1")}</button>
            <p class="cue-hint">Move your cursor. Click Cuey.</p>
          </div>
        </div>
      </section>

      <section class="cue-outside">
        <div class="cue-theme__bar">
          ${head("design", "", "Two moods, one library", "")}
          <button class="cue-toggle" type="button" aria-pressed="false" aria-label="Switch light and dark">${THEME_ICON}<span>Light</span></button>
        </div>
        <div class="cue-theme" data-theme="light">
        <div class="cue-devices">
          <div class="cue-swap">
            <img class="is-light" src="${a("mac-light.png")}" alt="Cue in light mode on a laptop">
            <img class="is-dark" src="${a("mac-dark.png")}" alt="Cue in dark mode on a laptop">
          </div>
          <div class="cue-swap cue-swap--phone">
            <img class="is-light" src="${a("phone-light.png")}" alt="Cue in light mode on a phone">
            <img class="is-dark" src="${a("phone-dark.png")}" alt="Cue in dark mode on a phone">
          </div>
        </div>
        </div>
      </section>

      <section class="mi cue-outside">
        ${head("", "", "Micro-interactions", "Every control in Cue answers back. Try them: these are rebuilt with the app's own shapes, timing and colours.")}
        <div class="mi-grid">
          ${tile("add", "Add Button", "Hover and it wobbles while the plus turns. Press and it squashes.",
            `<button class="mi-blob" type="button" aria-label="Add prompt">${BLOB}<span class="mi-blob__plus">+</span></button>`)}
          ${tile("theme", "Theme Toggle", "Wobbles on hover. Click to spin the icon and flip the tile between light and dark.",
            `<button class="mi-theme" type="button" aria-label="Toggle theme">${THEME_ICON}</button>`)}
          ${tile("cuey", "Cuey", "Follows your cursor with his eyes. Click for a random move.",
            `<button class="mi-cuey" type="button" aria-label="Play with Cuey">${cuey("mi-g1")}</button>`)}
          ${tile("chips", "Mood Colours", "Pick a category and Cuey takes on its gradient.",
            `<div class="mi-chips">${CATS.map((c, n) => `<button class="mi-chip mi-chip--${c}${n ? "" : " is-active"}" data-cat="${c}" type="button">${c}</button>`).join("")}</div>${cuey("mi-g2", GRADS[CATS[0]])}`)}
          ${tile("card", "Card Gradient", "Move across the card: its gradient flows after your cursor, and the card lifts.",
            `<div class="mi-card"><strong>80/20 Rule Auditor</strong><span>Find the 20% of activities that produce 80% of the results…</span><em>Productivity</em></div>`)}
          ${tile("cursor", "Custom Cursor", "Cue swaps the pointer for a dot that shrinks when you click.",
            `<p class="mi-cursor__hint">Move in here</p><span class="mi-cursor" aria-hidden="true"></span>`)}
          ${tile("close", "Close Button", "Tilts on hover and spins half a turn when pressed.",
            `<button class="mi-close" type="button" aria-label="Close">✕</button>`)}
          ${tile("ghost", "Copy Prompt", "Fills in on hover, squashes on press and confirms with Copied!",
            `<button class="mi-ghost" type="button">Copy Prompt</button>`)}
        </div>
      </section>




      <section class="cue-outside">
        ${head("writing", "", "See it in action", "")}
        <div class="cue-action">
          <video src="assets/cue-walkthrough.mp4" autoplay muted loop playsinline preload="metadata"></video>
          <a class="cue-live" href="https://sreenidhisenthilkumar.github.io/cue/" target="_blank" rel="noopener">Visit the live site</a>
        </div>
      </section>
    </div>`,

    init(root) {
      initMicro(root.querySelector(".mi"));

      // Light / dark toggle, with the app's spinning icon
      const theme = root.querySelector(".cue-theme");
      const toggle = root.querySelector(".cue-toggle");
      toggle.addEventListener("click", () => {
        const dark = theme.dataset.theme !== "dark";
        theme.dataset.theme = dark ? "dark" : "light";
        toggle.setAttribute("aria-pressed", dark);
        toggle.querySelector("span").textContent = dark ? "Dark" : "Light";
        toggle.classList.remove("is-spinning");
        void toggle.offsetWidth;
        toggle.classList.add("is-spinning");
      });

      // Cuey spins on click and its eyes follow the cursor, as in the app
      const button = root.querySelector(".cue-hello__cuey");
      const svg = button.querySelector("svg");
      button.addEventListener("click", () => {
        svg.classList.remove("is-spinning");
        void svg.getBoundingClientRect();
        svg.classList.add("is-spinning");
      });

      const EYES = [{ cx: 82, cy: 98 }, { cx: 118, cy: 98 }];
      const pupils = [...svg.querySelectorAll(".cuey__pupil")];
      const state = EYES.map(({ cx, cy }) => ({ x: cx, y: cy + 3, tx: cx, ty: cy + 3 }));
      document.addEventListener("mousemove", (e) => {
        const r = svg.getBoundingClientRect();
        const x = (e.clientX - r.left) * (200 / r.width);
        const y = (e.clientY - r.top) * (200 / r.height);
        EYES.forEach(({ cx, cy }, i) => {
          const dx = x - cx, dy = y - cy, d = Math.hypot(dx, dy);
          const k = d > 0 ? Math.min(d, 6) / d : 0;
          state[i].tx = cx + dx * k;
          state[i].ty = cy + dy * k;
        });
      });
      (function tick() {
        pupils.forEach((p, i) => {
          const s = state[i];
          s.x += (s.tx - s.x) * 0.1;
          s.y += (s.ty - s.y) * 0.1;
          p.setAttribute("cx", s.x.toFixed(2));
          p.setAttribute("cy", s.y.toFixed(2));
        });
        requestAnimationFrame(tick);
      })();
    },
  };
})();
