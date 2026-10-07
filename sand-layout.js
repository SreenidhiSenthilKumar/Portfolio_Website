// Custom sections for the Book of Sands project page, styled after the site
// itself: black and white, a blackletter display face and monospace text.
// main.js renders this when a project has `layout: "sand"`.

window.CUSTOM_LAYOUTS = window.CUSTOM_LAYOUTS || {};

(function () {
  const LIVE = "https://sreenidhisenthilkumar.github.io/the-archive-/";

  // ---------- Hand diagrams ----------
  // 21-point hand skeletons (wrist, then thumb, index, middle, ring, pinky),
  // drawn the way the site traces a hand over the webcam feed.
  const BONES = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [0, 5], [5, 6], [6, 7], [7, 8],
    [5, 9], [9, 10], [10, 11], [11, 12],
    [9, 13], [13, 14], [14, 15], [15, 16],
    [13, 17], [0, 17], [17, 18], [18, 19], [19, 20],
  ];

  const POSES = {
    open: [[50, 110], [36, 100], [26, 88], [18, 76], [12, 66], [38, 70], [36, 52], [35, 40], [34, 30], [50, 68], [50, 48], [50, 35], [50, 24], [61, 70], [63, 52], [64, 41], [65, 32], [71, 76], [75, 62], [78, 53], [80, 45]],
    fist: [[50, 110], [36, 100], [30, 90], [34, 80], [40, 76], [38, 70], [38, 58], [42, 64], [42, 72], [50, 68], [50, 56], [53, 63], [52, 71], [61, 70], [61, 58], [63, 65], [62, 72], [71, 76], [71, 64], [72, 70], [70, 76]],
    pinch: [[50, 110], [36, 100], [30, 90], [27, 78], [30, 50], [38, 70], [40, 56], [36, 48], [31, 49], [50, 68], [51, 52], [52, 41], [52, 32], [61, 70], [63, 55], [64, 45], [65, 37], [71, 76], [74, 64], [76, 56], [77, 49]],
  };

  const handSVG = (cls = "") => `
    <svg class="sand-hand ${cls}" viewBox="-6 14 116 108" aria-hidden="true">
      <g class="sand-hand__bones">${BONES.map(() => `<line/>`).join("")}</g>
      <g class="sand-hand__joints">${POSES.open.map(() => `<circle r="2.2"/>`).join("")}</g>
    </svg>`;

  function drawHand(svg, pts, dx = 0, dy = 0) {
    const lines = svg.querySelectorAll("line");
    BONES.forEach(([p, q], i) => {
      lines[i].setAttribute("x1", pts[p][0] + dx); lines[i].setAttribute("y1", pts[p][1] + dy);
      lines[i].setAttribute("x2", pts[q][0] + dx); lines[i].setAttribute("y2", pts[q][1] + dy);
    });
    svg.querySelectorAll("circle").forEach((c, i) => {
      c.setAttribute("cx", pts[i][0] + dx); c.setAttribute("cy", pts[i][1] + dy);
    });
  }

  const mix = (a, b, t) => a.map((p, i) => [p[0] + (b[i][0] - p[0]) * t, p[1] + (b[i][1] - p[1]) * t]);
  const ease = (t) => (t < .5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);
  const clamp = (t) => Math.min(Math.max(t, 0), 1);

  // A small cube of blank pages, turned by the pinch demos
  const cube = () => `
    <div class="sand-cube" aria-hidden="true"><div class="sand-cube__body">
      ${["front", "back", "left", "right", "top", "bottom"].map((f) => `<span class="sand-cube__face sand-cube__face--${f}"><i></i><i></i><i></i></span>`).join("")}
    </div></div>`;

  // Small scatter of cards for the open-palm demo
  const scatter = () => `
    <div class="sand-scatter" aria-hidden="true">
      ${[[8, 14, -6], [52, 6, 4], [30, 46, -2], [64, 52, 7], [14, 62, 5], [40, 24, 0]].map(([x, y, r], n) =>
        `<span class="sand-card${n === 5 ? " sand-card--focus" : ""}" style="--x:${x}%;--y:${y}%;--r:${r}deg;--n:${n}"><i></i><i></i><i></i></span>`).join("")}
    </div>`;

  const GESTURES = [
    ["open", "Open palm", "Scattered cards", "Hold your hand open and the drifting pile stops. The card nearest the centre comes forward so you can read it. Close your hand and the pages drift again.", scatter()],
    ["pinch", "Pinch &amp; drag", "Cube", "Touch thumb to forefinger and move your hand. The cube of passages turns with you, and each new face brings a new passage.", cube()],
    ["two", "Second-hand pinch", "Cube", "Pinch with your other hand and the cube settles square onto the face you are looking at.", cube()],
  ];

  window.CUSTOM_LAYOUTS.sand = {
    html: () => `
    <div class="sand" data-layout="sand">

      <section class="sand-film">
        <video src="assets/sand/ornaments.mp4" autoplay muted loop playsinline preload="metadata" aria-label="Book of Sands intro animation"></video>
      </section>


      <section class="sand-hands">
        <div class="sand-hands__head">
          <h2 class="sand-title">Read it with<br>your hands</h2>
          <p class="sand-hands__lead">There is no mouse and no scrolling. The site switches on your webcam, tracks your hand in real time and turns gestures into page turns, so you leaf through the book with your hands as you would a real one.</p>
        </div>

        <div class="sand-cam">
          <div class="sand-cam__screen">
            <p class="sand-cam__label"><span class="sand-yarn">R</span> Your camera, in the corner of every page</p>
            <span class="sand-cam__btn" aria-hidden="true">Change Mode</span>
            <div class="sand-cam__feed">${handSVG("is-cam")}</div>
          </div>
          <p class="sand-cam__note">A small window shows your webcam with your hand traced over it, so you can always see what the site sees.</p>
        </div>

        <div class="sand-gestures">
          ${GESTURES.map(([key, name, mode, text, demo], n) => `
          <article class="sand-gesture" data-gesture="${key}">
            <div class="sand-gesture__stage">
              <div class="sand-gesture__hands">${handSVG("is-a")}${key === "two" ? handSVG("is-b") : ""}</div>
              <span class="sand-gesture__arrow" aria-hidden="true">&gt;</span>
              <div class="sand-gesture__result">${demo}</div>
            </div>
            <div class="sand-gesture__text">
              <h3>${name}</h3>
              <p class="sand-gesture__mode">${mode} mode</p>
              <p>${text}</p>
            </div>
          </article>`).join("")}
        </div>

        <a class="sand-live" href="${LIVE}" target="_blank" rel="noopener">Try it with your camera <span aria-hidden="true">↗</span></a>
        <p class="sand-live__note">Opens the live site. Allow camera access when your browser asks.</p>
      </section>
    </div>`,

    init(root) {
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      const get = (k) => root.querySelector(`[data-gesture="${k}"]`);

      const open = get("open"), pinch = get("pinch"), two = get("two");
      const openHand = open.querySelector(".is-a");
      const pinchHand = pinch.querySelector(".is-a");
      const twoA = two.querySelector(".is-a"), twoB = two.querySelector(".is-b");
      const camHand = root.querySelector(".sand-cam .sand-hand");
      const pinchCube = pinch.querySelector(".sand-cube__body");
      const twoCube = two.querySelector(".sand-cube__body");

      if (reduce) {
        drawHand(openHand, POSES.open); open.classList.add("is-focus");
        drawHand(pinchHand, POSES.pinch); drawHand(twoA, POSES.pinch); drawHand(twoB, POSES.pinch);
        drawHand(camHand, POSES.open);
        return;
      }

      const t0 = performance.now();
      (function frame(now) {
        const t = (now - t0) / 1000;

        // I. Open palm: fist -> open (cards freeze, centre card forward) -> fist
        const c1 = t % 5;
        const o = c1 < 1 ? 0 : c1 < 1.6 ? ease((c1 - 1) / .6) : c1 < 3.6 ? 1 : c1 < 4.2 ? 1 - ease((c1 - 3.6) / .6) : 0;
        drawHand(openHand, mix(POSES.fist, POSES.open, o));
        open.classList.toggle("is-focus", o > .9);

        // II. Pinch & drag: pinch, sweep right and back, release; cube turns with the hand
        const c2 = t % 5;
        const p = c2 < .5 ? ease(c2 / .5) : c2 < 4 ? 1 : c2 < 4.5 ? 1 - ease((c2 - 4) / .5) : 0;
        const sweep = c2 < .6 ? 0 : c2 < 4 ? Math.sin(((c2 - .6) / 3.4) * Math.PI) : 0;
        drawHand(pinchHand, mix(POSES.open, POSES.pinch, p), sweep * 16, 0);
        pinchCube.style.transform = `rotateX(-18deg) rotateY(${-30 + sweep * 120}deg)`;

        // III. Second hand pinches: the cube snaps to the nearest face
        const c3 = t % 6;
        const drift = -30 + Math.min(c3, 3) * 22; // first hand turns it off-square
        const snapT = clamp((c3 - 3.4) / .5);
        const target = Math.round(drift / 90) * 90;
        const rot = c3 < 3.4 ? drift : drift + (target - drift) * ease(snapT);
        drawHand(twoA, POSES.pinch, c3 < 3 ? (c3 / 3) * 10 : 10, 0);
        const b = c3 < 3.1 ? 0 : c3 < 3.4 ? ease((c3 - 3.1) / .3) : c3 < 5.2 ? 1 : 1 - ease(clamp((c3 - 5.2) / .4));
        drawHand(twoB, mix(POSES.open, POSES.pinch, b));
        twoCube.style.transform = `rotateX(-18deg) rotateY(${c3 > 5.6 ? -30 : rot}deg)`;
        two.classList.toggle("is-snapped", c3 >= 3.4 && c3 < 5.6);

        // Camera window: a slow, relaxed hand
        drawHand(camHand, mix(POSES.open, POSES.fist, (Math.sin(t * 1.3) + 1) / 2 * .35), Math.sin(t * .7) * 6, Math.cos(t * .9) * 4);

        requestAnimationFrame(frame);
      })(t0);
    },
  };
})();
