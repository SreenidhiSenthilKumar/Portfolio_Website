// ---------- Content ----------
// TODO: fill in your real profile URLs and resume file.
const LINKS = {
  resume: "#",
  linkedin: "#",
  instagram: "#",
  behance: "#",
};

const img = (name) => `assets/${name}`;

// Order here drives the work grid and the previous / next buttons.
const PROJECTS = [
  {
    slug: "fego",
    title: "FEGO",
    subtitle: "Your kombucha bar for day drinking",
    categories: "Branding, Visual Identity, Packaging and Merch Design",
    // TODO: confirm year, tools and description.
    year: "2025",
    tools: "Illustrator, Photoshop and Indesign",
    info: "FEGO is a brand identity for a kombucha bar built around day drinking. A pixel-edged wordmark and the “So Good You Sparkle” tagline give the brand a playful, digital fizz, while a glass-shaped silhouette and a constellation of bubbles and stars carry the sparkle across every touchpoint. A deep plum and soft mint palette ties the system together across menus, cans, posters, signage, social stories, a website, merch and packaging.",
    cover: "fego-keychain.gif",
    hero: "fego-24.jpg",
    gallery: [
      "fego-01.png",
      "fego-02.png", "fego-03.png",
      "fego-14.png", "fego-23.jpg",
      "fego-04.jpg", "fego-07.jpg",
      "fego-08.jpg", "fego-09.jpg",
      "fego-12.jpg", "fego-19.jpg",
      "fego-18.jpg", "fego-20.jpg",
      "fego-13.jpg", "fego-17.jpg",
      "fego-10.jpg", "fego-21.jpg",
      "fego-15.jpg", "fego-16.jpg",
      "fego-05.jpg", "fego-06.png",
      "fego-11.jpg", "fego-22.jpg",
      "fego-25.png",
    ],
  },
  {
    slug: "cue",
    title: "CUE",
    // TODO: add subtitle, categories, year, tools, info and gallery images.
    subtitle: "",
    categories: "",
    year: "",
    tools: "",
    info: "",
    cover: "cue-laptop.jpg",
    // Vector redraw of the opener GIF, so it stays sharp at any size.
    hero: "cue-opener.svg",
    gallery: ["cue-laptop.jpg"],
  },
  {
    slug: "manifestio-poster",
    title: "MANIFESTIO POSTER",
    subtitle: "A modern take on self growth poster",
    categories: "Poster Design, Typography, augmented reality and Print Design",
    year: "2025",
    tools: "Illustrator, Photoshop, Indesign and Code",
    info: "Here I created a manifesto poster on self-growth called “The Space Between.” It explores how people are multilayered, so I designed it with two physical layers and an AR element to show depth and change. The graphics uses linked forms and dots in the background to represent the different checkpoints in a growth journey.",
    cover: "fpB6YPs3N8cKiBF1NcC9ASlHsk.png",
    hero: "fpB6YPs3N8cKiBF1NcC9ASlHsk.png",
    gallery: ["vePinANUudtskI6ifCjS1EcbQKU.png", "VXu9IUaVXqm1QhcXr1Qe6cxm5po.png", "USQKa62tFbt9uzITW3pUjzHk.png", "EzUGlfr5Tz8sQvJa1aYTa0BcpDs.gif"],
  },
  {
    slug: "mantra-merch",
    title: "MANTRA MERCH",
    subtitle: "Breathing new life into an organic market",
    categories: "merch design, motion graphics and visual identify",
    year: "2025",
    tools: "Illustrator, Photoshop and After Effects",
    info: "This project required us to design merchandise based on a chosen slogan, and mine was “Create the things you wish existed.” Because the message is all about imagination and possibility, I wanted the type design to feel funky, playful, and creatively expressive. Since we were only allowed to use typography, I incorporated an asterisk-like shape to symbolize the “creative wheels spinning,” suggesting sparks of inspiration and new ideas forming.",
    cover: "hf2dR7MOz27STpFPrSUarq6BP8.gif",
    hero: "qSJff7ednj0mFbYAe2F66RN87Eo.png",
    gallery: ["iFWjlDs4w6Aiu3e4SWNhFy43Ec.gif", "KJhSuDQ5hf78MszvUqqNQWzhi6U.gif", "PgPvnYVijy7aQPSiAr4hdhHDnQ.png", "dc1Sp6mdjHCqB269tevc1FqOA.png", "hf2dR7MOz27STpFPrSUarq6BP8.gif"],
  },
  {
    slug: "dabba",
    title: "DABBA",
    subtitle: "A culinary guide exploring South Indian cuisine",
    categories: "Print design, Typography and Publication",
    year: "2025",
    tools: "Indesign, Illustrator, Photoshop",
    // NOTE: copied from the live site, which still shows template text here.
    info: "Casa Nomad invited me to build a brand that honored the authenticity of Oaxacan artisans while appealing to a global audience. I crafted a rich, storytelling-driven identity, designed e-commerce experiences, and developed packaging that put the artisans’ work at center stage.",
    cover: "tZW5WDAVb71xvqG7gOFrZseya3A.gif",
    hero: "tZW5WDAVb71xvqG7gOFrZseya3A.gif",
    gallery: ["9AX8myG7eeBFHQPup2TpTvxsCIA.png", "Jdhzcr4TqZUnM144VNPbEComfYs.png", "FD2kv6GdWvweYWQ3vGDlIgPKWmk.png", "n1JTj88NKgWrqQmX8RFGYdQEU.png", "5HvUPZZzxGELr8xEfdiR34FzQQ.png"],
  },
  {
    slug: "form-and-function",
    title: "FORM & FUCTION",
    subtitle: "An interactive web design to explore chairs",
    categories: "Web Design",
    year: "2024",
    tools: "HTML, CSS, Javascript, Photoshop and Illustrator",
    info: "Form & Function is a playful, interactive web experience built with HTML, CSS, and JavaScript that invites users to explore the world of chair design. Moving away from static product pages, the site uses engaging animations and dynamic transitions to showcase different seating styles, allowing users to experience the \"form\" of each piece through a fun, digital lens. It’s a project that blends clean code with a whimsical UI to turn a simple catalog into an interactive discovery.\nClick the image above to interact with the website",
    heroLink: "https://sreenidhisenthilkumar.github.io/form-and-function/index.html",
    cover: "QYyhEDMS2boaaD95SXB0P3weL0.gif",
    hero: "ST8i1KyymXEC5fazMK5A1n3Gc.gif",
    gallery: ["0WPx6CwT8KBHmOL97iQsg2NjzU0.png", "bwce2uYaQtgT2YFbCIdqoq8FYQ.png", "EDr0D3qWmVEXYQXf4wt2s0s6zHk.png", "DfSWJ5T3mOYSh6qJLYeYClB6Krw.gif", "QYyhEDMS2boaaD95SXB0P3weL0.gif"],
  },
  {
    slug: "slurp",
    title: "SLURP",
    subtitle: "An innovative and sustainable ramen packaging",
    categories: "Branding, Packaging Design and Product design",
    year: "2024",
    tools: "Illustrator and Photoshop",
    info: "SLURP is a sustainable, all-in-one packaging redesign that transforms the instant noodle experience through clever engineering and playful, doodle-style graphics. The biodegradable thermal cup unfolds from a cylinder into a wide bowl and features pressable seasoning compartments in the lid to eliminate plastic packet waste. With smart details like a heat-sensitive readiness sticker, drainage holes, and built-in chopsticks, SLURP creates a seamless, eco-friendly ritual for the modern consumer.",
    cover: "z8p3hK6dy7m4SoDK3O1BdYyqz8o.png",
    hero: "G6YwhZbrAQ80y12hZn7mnN4w5k.gif",
    gallery: ["3Yb8mFw9Zu55gH9Bm42ZeV7UVE.png", "rSOTRb2Utm7t7qh5OedywnDgvEo.gif", "vNxhViGtzUnbVa7unWM42fS3Co4.png", "ykHMHsI3IG4agd8EZyQkJ50gn4.png"],
  },
  {
    slug: "ecofin",
    title: "ECOFIN",
    subtitle: "Ecofin a new way to look at agriculture",
    categories: "Branding, Visual Identity",
    year: "2023",
    tools: "Illustrator and Photoshop",
    info: "Ecofin is a brand identity project for a home-based aquaponics system that promotes self-sustaining food growth in urban environments. The visual identity is anchored by a minimalist logo in which fish fins transform into sprouting leaves, symbolizing the symbiotic relationship between aquatic life and plant cultivation. A natural color palette of deep forest and lime greens reinforces ideas of ecological balance, resilience, and renewal across digital and physical touchpoints, including interfaces, billboards, and eco-friendly tote bags. Paired with clean Aktiv Grotesk and Gellix typography and organic imagery, Ecofin positions itself as a modern, professional approach to sustainable city living.",
    cover: "No2ULf9VvvBnrf9FQ2tsUZaSE.png",
    hero: "No2ULf9VvvBnrf9FQ2tsUZaSE.png",
    gallery: ["1jmOvBbLhkVuK7YEiRvyieQ7tEE.jpg", "fTqwAgSws0SRAT0YvBR58BWOgU.png", "29sVUvCcdGh9q4t5Li7yPc2soQ.png", "RgKizhFb8dvd3dAcVmLVTiS1dA.png", "iWdV9RvUtCYX2UTdgKYhiSpmyMU.png", "wFSUN4zZV7ziaXtc2FzXZl1qE1Y.jpg", "KIHkFy3YuvZWigjKmSBeng3hs.png", "Q20eCRlxyKxwPSh0KOJ436k.jpg"],
  },
];

const SKILLS = ["TIME MANAGEMENT", "SELF-MOTIVATED", "AMBITIOUS", "PROBLEM-SOLVING", "CREATIVE", "EMPATHETIC", "LEADERSHIP"];

// ---------- Helpers ----------
const roll = (text) => `<span class="roll"><span>${text}</span><span aria-hidden="true">${text}</span></span>`;

const escape = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// ---------- Nav ----------
function renderNav() {
  const items = [
    ["work.html", "Work"],
    ["archives.html", "Archives"],
    ["about.html", "About"],
    [LINKS.resume, "RESUMÉ"],
  ];
  const links = items.map(([href, text]) => `<li><a class="label" href="${href}">${roll(text)}</a></li>`).join("");

  document.body.insertAdjacentHTML(
    "afterbegin",
    `<nav class="nav">
      <a class="nav__logo" href="index.html" aria-label="Home"><img src="${img("b7XOCkHBL5aJcRCYLvDpe4BL3IE.png")}" alt=""></a>
      <ul class="nav__links">${links}</ul>
      <button class="nav__toggle label" aria-expanded="false">Menu</button>
    </nav>
    <div class="menu">${items.map(([href, text]) => `<a href="${href}">${text}</a>`).join("")}</div>`
  );

  const toggle = document.querySelector(".nav__toggle");
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.textContent = open ? "Close" : "Menu";
    toggle.setAttribute("aria-expanded", open);
  });
}

// ---------- Work ----------
function renderWork(grid) {
  grid.innerHTML = PROJECTS.map(
    (p) => `<a class="card" href="project.html?p=${p.slug}">
      <div class="card__media"><img src="${img(p.cover)}" alt="${escape(p.title)}" loading="lazy"></div>
      <p class="label">${roll(escape(p.title))}</p>
    </a>`
  ).join("");
}

// ---------- Project ----------
function renderProject(root) {
  const slug = new URLSearchParams(location.search).get("p");
  const i = Math.max(0, PROJECTS.findIndex((p) => p.slug === slug));
  const p = PROJECTS[i];
  const prev = PROJECTS[(i - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  document.title = `${p.title} | Sreenidhi Senthil Kumar`;

  const hero = `<img src="${img(p.hero)}" alt="${escape(p.title)}">`;

  // First image spans both columns; if an odd one is left over at the end, it spans too.
  const lastIsWide = p.gallery.length % 2 === 0;
  const gallery = p.gallery
    .map((name, n) => {
      const wide = n === 0 || (lastIsWide && n === p.gallery.length - 1);
      return `<figure class="${wide ? "wide" : ""}"><img src="${img(name)}" alt="" loading="lazy"></figure>`;
    })
    .join("");

  root.innerHTML = `
    <section class="project-hero">
      <div class="project-hero__titles">
        <h1 class="page-title">${escape(p.title)}</h1>
        <p class="project-hero__subtitle">${escape(p.subtitle)}</p>
      </div>
      <div class="project-hero__media">
        ${p.heroLink ? `<a href="${p.heroLink}" target="_blank" rel="noopener">${hero}</a>` : hero}
      </div>
    </section>

    <section class="details">
      <div class="details__col">
        ${p.categories ? `<div class="details__item"><p class="label">${escape(p.categories)}</p></div>` : ""}
        ${p.year ? `<div class="details__item"><p class="label">Year</p><p>${p.year}</p></div>` : ""}
        ${p.tools ? `<div class="details__item"><p class="label">TOOLS</p><p>${escape(p.tools)}</p></div>` : ""}
      </div>
      <div class="details__col">
        ${p.info ? `<div class="details__item">
          <p class="label">Info</p>
          <div class="details__info">${p.info.split("\n").map((t) => `<p>${escape(t)}</p>`).join("")}</div>
        </div>` : ""}
      </div>
    </section>

    ${gallery ? `<section class="gallery">${gallery}</section>` : ""}

    <nav class="pager">
      <a class="pill label" href="project.html?p=${prev.slug}">${roll("PREVIOUS PROJECT")}</a>
      <a class="pill label" href="project.html?p=${next.slug}">${roll("NEXT PROJECT")}</a>
    </nav>`;
}

// ---------- Lightbox ----------
function initLightbox(selector) {
  const box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = "<img alt=''>";
  document.body.append(box);

  document.addEventListener("click", (e) => {
    const target = e.target.closest(selector);
    if (!target) return;
    box.firstChild.src = target.querySelector("img").src;
    box.classList.add("open");
  });

  const close = () => box.classList.remove("open");
  box.addEventListener("click", close);
  document.addEventListener("keydown", (e) => e.key === "Escape" && close());
}

// ---------- About: draggable skill stickers with light gravity ----------
function initStickers(area) {
  area.innerHTML = SKILLS.map((s) => `<div class="sticker">${s}</div>`).join("");

  const bodies = [...area.children].map((el, n) => ({
    el,
    w: el.offsetWidth,
    h: el.offsetHeight,
    x: Math.min((area.clientWidth / SKILLS.length) * n, area.clientWidth - el.offsetWidth),
    y: -el.offsetHeight - n * 90,
    vx: 0,
    vy: 0,
    rot: Math.random() * 30 - 15,
    held: false,
  }));

  const G = 0.6;
  const BOUNCE = 0.35;
  const FRICTION = 0.9;

  function step() {
    const W = area.clientWidth;
    const H = area.clientHeight;
    for (const b of bodies) {
      if (!b.held) {
        b.vy += G;
        b.x += b.vx;
        b.y += b.vy;
        if (b.y + b.h > H) { b.y = H - b.h; b.vy *= -BOUNCE; b.vx *= FRICTION; }
        if (b.x < 0) { b.x = 0; b.vx *= -BOUNCE; }
        if (b.x + b.w > W) { b.x = W - b.w; b.vx *= -BOUNCE; }
      }
      b.el.style.transform = `translate(${b.x}px, ${b.y}px) rotate(${b.rot}deg)`;
    }
    requestAnimationFrame(step);
  }

  // Start dropping once the stickers scroll into view.
  new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) { obs.disconnect(); step(); }
  }, { threshold: 0.2 }).observe(area);

  for (const b of bodies) {
    let lastX, lastY, offX, offY;
    b.el.addEventListener("pointerdown", (e) => {
      b.el.setPointerCapture(e.pointerId);
      b.held = true;
      b.el.classList.add("dragging");
      offX = e.clientX - b.x;
      offY = e.clientY - b.y;
      lastX = e.clientX;
      lastY = e.clientY;
    });
    b.el.addEventListener("pointermove", (e) => {
      if (!b.held) return;
      b.vx = e.clientX - lastX;
      b.vy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      b.x = e.clientX - offX;
      b.y = e.clientY - offY;
    });
    const release = () => { b.held = false; b.el.classList.remove("dragging"); };
    b.el.addEventListener("pointerup", release);
    b.el.addEventListener("pointercancel", release);
  }
}

// ---------- Boot ----------
renderNav();

document.querySelectorAll("[data-social]").forEach((a) => (a.href = LINKS[a.dataset.social]));

const workGrid = document.querySelector(".work-grid");
if (workGrid) renderWork(workGrid);

const project = document.querySelector("#project");
if (project) {
  renderProject(project);
  initLightbox(".gallery figure");
}

if (document.querySelector(".archive-grid")) initLightbox(".archive-grid figure");

const stickers = document.querySelector(".stickers");
if (stickers) initStickers(stickers);
