// ---------- Content ----------
// TODO: fill in your real profile URLs.
const LINKS = {
  linkedin: "#",
  instagram: "#",
};

const img = (name) => `assets/${name}`;

// Order here drives the work grid and the previous / next buttons.
//
// Project page fields:
//   subtitle    short description beside the title
//   blurb       short line shown on the previous / next cards (falls back to subtitle)
//   categories  shown as tag pills (split on commas and "and")
//   tools       shown as a list (split the same way)
//   info        the Overview paragraph; outro is an optional closing paragraph
//   challenge / solution  optional paragraphs shown under the Overview text
//   gallery     a string is a full-width row, a [a, b] pair is a two-up row
//               (pairs are cropped to the near-square FEGO tile shape).
const PROJECTS = [
  {
    slug: "fego",
    title: "FEGO",
    subtitle: "Your ultimate day-drinking Kombucha bar",
    blurb: "a kombucha bar for day drinking",
    categories: "Branding, Visual Identity, Packaging Design, Merchandise Design",
    year: "2026",
    tools: "Illustrator, Photoshop, Indesign and Blender",
    info: "Fego is a modern kombucha bar serving up unique, creative drinks. We've taken the ultimate gut-healthy beverage and given it a fresh spin, offering a new, wellness-focused approach to day drinking.",
    challenge: "Kombucha is often perceived as a niche, health-focused wellness drink, making it difficult to establish a lively, social day-drinking bar culture around it. The key challenge was to design a bold, vibrant brand identity that breaks away from traditional health-food visual tropes while capturing the playful, fizzy energy of a modern day-drinking spot.",
    solution: "Instead of leaning on leafy greens and wellness cues, FEGO borrows the language of a night out and moves it into the daytime. The pixelated wordmark mimics the wrinkled, uneven texture of a scoby, giving the brand a playful, digital edge rooted in how kombucha is actually made. The silhouette of a kombucha brewing jar becomes the shape of the glasses and the brand's other silhouettes, so every drink feels like the centrepiece, and the “So Good You Sparkle” tagline turns fizz into a personality. Deep plum keeps it bold and social while soft mint nods to the fresh, fermented drink inside, and scattered sparkle elements tie it all together, so the brand feels just as at home on a can or a menu as it does on a poster, a tee or an Instagram story.",
    cover: "fego-keychain.gif",
    hero: "fego-hero.jpg",
    gallery: [
      ["fego-sticker.jpg", "fego-shape-ice.jpg"],
      "fego-menu.jpg",
      "fego-stories-black.jpg",
      ["fego-keychain.jpg", "fego-constellation.jpg"],
      ["fego-aframe.jpg", "fego-drinks.jpg"],
      "fego-sign.jpg",
      "fego-stories-plum.jpg",
      ["fego-tee.jpg", "fego-cap.jpg"],
      "fego-pins.jpg",
      "fego-posters.jpg",
    ],
  },
  {
    slug: "cue",
    title: "CUE",
    subtitle: "Your personal AI prompt library",
    blurb: "AI Prompt Library Website",
    // TODO: confirm categories, year, tools and description.
    categories: "UI/UX Design, Web Design and Interaction Design",
    year: "2026",
    tools: "Figma, HTML, CSS, JavaScript and Firebase",
    info: "Cue is a community-driven prompt library where users can save, tag, and share AI prompts that have worked effectively for them. The platform organises these prompts by category and AI model, making it easy for others in the beginning stages of their AI journey to discover and reuse successful prompts.",
    challenge: "People starting out with AI often don't know which prompts actually work, and the ones that do end up scattered across chats, notes and documents. The challenge was to turn a shared, growing collection of prompts into something quick to scan and filter, while keeping a utility tool feeling friendly rather than clinical.",
    solution: "Cue gathers prompts that work into one shared library. Every prompt sits on a soft gradient card colour-coded by category, so writing, coding, research and design prompts can be told apart at a glance and filtered in a single tap. Opening a card reveals the full prompt with one-click copy, and sharing a new one takes a short form that records the platform, model and settings used, so others can reproduce the result. To keep it approachable for beginners, Cue's mascot Cuey blinks, winks, follows your cursor and shifts colour with each category. The app supports light and dark mode, and on mobile the search bar and add button move to the bottom for easy reach.",
    cover: "cue-laptop.jpg",
    // Vector redraw of the opener GIF, so it stays sharp at any size.
    hero: "cue-opener.svg",
    // Wordmark set over the opener, in the app's ABC Social font
    heroText: "Cue",
    // Custom sections from cue-layout.js, shown before the gallery
    layout: "cue",
    gallery: [],
  },
  {
    slug: "manifestio-poster",
    title: "MANIFESTIO POSTER",
    subtitle: "A modern take on self growth poster",
    categories: "Poster Design, Typography, augmented reality and Print Design",
    year: "2025",
    tools: "Illustrator, Photoshop, Indesign and Code",
    info: "“The Space Between” is a manifesto poster on self-growth.",
    challenge: "Growth is not flat or one-dimensional, and people are multilayered. The challenge was to show that depth and change on a printed poster.",
    solution: "The poster is built from two physical layers with an AR element, so it reveals more depth as you look closer. In the background, linked forms and dots represent the different checkpoints in a growth journey.",
    cover: "fpB6YPs3N8cKiBF1NcC9ASlHsk.png",
    hero: "fpB6YPs3N8cKiBF1NcC9ASlHsk.png",
    gallery: [
      "vePinANUudtskI6ifCjS1EcbQKU.png",
      { pair: ["VXu9IUaVXqm1QhcXr1Qe6cxm5po.png", "USQKa62tFbt9uzITW3pUjzHk.png"], natural: true },
      "EzUGlfr5Tz8sQvJa1aYTa0BcpDs.gif",
    ],
  },
  {
    slug: "mantra-merch",
    title: "MANTRA MERCH",
    subtitle: "Breathing new life into an organic market",
    categories: "merch design, motion graphics and visual identify",
    year: "2025",
    tools: "Illustrator, Photoshop and After Effects",
    info: "Merchandise designed around the slogan “Create the things you wish existed.” The brief allowed typography only, so the type itself had to carry the message of imagination and possibility. It is funky, playful and creatively expressive, with an asterisk-like shape symbolising the “creative wheels spinning,” suggesting sparks of inspiration and new ideas forming.",
    cover: "mantra-hf2dR7MOz27STpFPrSUarq6BP8.webp",
    hero: "qSJff7ednj0mFbYAe2F66RN87Eo.png",
    gallery: [["mantra-iFWjlDs4w6Aiu3e4SWNhFy43Ec.webp", "mantra-KJhSuDQ5hf78MszvUqqNQWzhi6U.webp"], "mantra-hf2dR7MOz27STpFPrSUarq6BP8.webp"],
  },
  {
    slug: "book-of-sands",
    title: "BOOK OF SANDS",
    subtitle: "A hand-tracked website you read with your webcam, inspired by Borges' The Book of Sand",
    // TODO: confirm categories, year, tools and description.
    categories: "Web Design, Interaction Design and Typography",
    year: "2025",
    tools: "HTML, CSS, JavaScript, MediaPipe Hands and Figma",
    info: "This website is an interactive web experience that translates Jorge Luis Borges’ “The Book of Sand” into a digital format. It uses a minimalist interface to simulate the story’s concept of an infinite, labyrinthine book with no beginning or end. In other words, you can never go back to the same text, just like the book. The website also takes reading to a different level, letting you control it without touching your device.",
    challenge: "Borges imagined a book with no first or last page, where new pages keep appearing between the ones already read. The challenge was to turn that idea into something you can hold and read on screen.",
    solution: "Instead of fixed pages, the site shows passages that never return in the same order, so no reading can be repeated. After a blackletter title screen, it turns on your webcam and tracks your hands in real time, letting you turn pages through gesture rather than touch. In scattered mode, passages drift like grains of sand until an open palm stops the pile and draws one forward to read. In cube mode, a pinch spins a cube of passages and a pinch with your other hand settles it onto a face. Each passage opens with a blackletter drop cap and continues in monospace type, pairing the feel of an old book with a digital screen, in black on white or white on black.",
    // Custom sections from sand-layout.js, shown before the gallery
    layout: "sand",
    cover: "book-of-sands.mp4",
    hero: "book-of-sands.jpg",
    gallery: [
      "sand/scene-landing.jpg",
      "sand/scene-scatter-dark.jpg",
      "sand/scene-page-light.jpg",
      "sand/scene-scatter-light.jpg",
      "sand/scene-cube-light.jpg",
      "sand/scene-cube-dark.jpg",
    ],
  },
  {
    slug: "small-caps",
    title: "SMALL CAPS",
    subtitle: "A reproducible publication of kids' views on adulthood",
    // TODO: confirm tools.
    categories: "Publication Design, Editorial Design, Print Design",
    year: "2026",
    tools: "Indesign, Illustrator and Photoshop",
    info: "Small Caps is a DIY reproducible publication featuring interviews with children sharing their opinions and perspectives on adulthood. The project provides users with a downloadable PDF copy alongside an instruction manual, allowing them to print, format, assemble, and reproduce their own version at home.",
    challenge: "Each child needed their own voice and space, while the booklet as a whole had to stay playful, handmade and easy for anyone to print and assemble at home.",
    solution: "Each child gets their own section: a practical six-year-old who plans to become a heart doctor, a nine-year-old artist who dreams of a stress-free life of endless sleep, and a sharp, witty eleven-year-old who crochets and plans to open a cafe to escape the struggles of adulthood. Every portrait is a cut-paper character with googly eyes, set against bright pink, purple and orange pages, and the bold scalloped title type carries the same playful, handmade feel. A set of instruction cards walks readers through printing, cutting, hole-punching and adding binder rings to make their own copy.",
    cover: "small-caps.jpg",
    hero: "small-caps-hero.jpg",
    gallery: [
      "small-caps-covers.jpg",
      "small-caps-instructions.jpg",
      "small-caps-cover.webp",
      "small-caps-spreads.jpg",
      ["small-caps-contents.jpg", "small-caps-names.jpg"],
      "small-caps-characters.jpg",
    ],
  },
  {
    slug: "dabba",
    title: "DABBA",
    subtitle: "A culinary guide exploring South Indian cuisine",
    blurb: "a publication on south India cuisine",
    categories: "Print design, Typography and Publication",
    year: "2025",
    tools: "Indesign, Illustrator, Photoshop",
    info: "Dabba is based on South Indian cuisines. As someone who has moved between states, I wanted to create a book that brings together my five favourite dishes from each state, along with their history, cultural context, and preparation. I also included a few special pages with select recipes. The book uses earth-tone colours to reflect the warmth and richness of South Indian culture. I titled the book “Dabba”, inspired by the idea of a tiffin container filled with pages about food.",
    cover: "tZW5WDAVb71xvqG7gOFrZseya3A.gif",
    hero: "tZW5WDAVb71xvqG7gOFrZseya3A.gif",
    gallery: ["9AX8myG7eeBFHQPup2TpTvxsCIA.png", "Jdhzcr4TqZUnM144VNPbEComfYs.png", "FD2kv6GdWvweYWQ3vGDlIgPKWmk.png", "n1JTj88NKgWrqQmX8RFGYdQEU.png", "5HvUPZZzxGELr8xEfdiR34FzQQ.png"],
  },
  {
    slug: "lyra",
    title: "LYRA",
    subtitle: "The weather app rethought, a UI/UX project",
    // comingSoon: shown on the Work page but not clickable, and skipped by previous / next
    comingSoon: true,
    cover: "lyra-cover.png",
  },
  {
    slug: "slurp",
    title: "SLURP",
    subtitle: "An innovative and sustainable ramen packaging",
    categories: "Branding, Packaging Design and Product design",
    year: "2024",
    tools: "Illustrator, Photoshop and After Effects",
    info: "SLURP is a sustainable, all-in-one packaging redesign for instant noodles.",
    challenge: "Instant noodle packaging creates a lot of single-use waste, from plastic seasoning packets to separate cutlery, and the eating experience itself is often an afterthought.",
    solution: "A biodegradable thermal cup unfolds from a cylinder into a wide bowl, and pressable seasoning compartments in the lid replace plastic packets. Smart details like a heat-sensitive readiness sticker, drainage holes and built-in chopsticks, paired with playful doodle-style graphics, make SLURP a seamless, eco-friendly ritual for the modern consumer.",
    cover: "slurp-cover.jpg",
    // Cleaned-up, 2x version of the original cup GIF
    hero: "slurp-cup.mp4",
    gallery: ["3Yb8mFw9Zu55gH9Bm42ZeV7UVE.png", "rSOTRb2Utm7t7qh5OedywnDgvEo.gif", "vNxhViGtzUnbVa7unWM42fS3Co4.png", "ykHMHsI3IG4agd8EZyQkJ50gn4.png"],
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
    ["archives.html", "Play"],
    ["about.html", "About"],
  ];
  const links = items.map(([href, text]) => `<li><a class="label" href="${href}">${roll(text)}</a></li>`).join("");

  document.body.insertAdjacentHTML(
    "afterbegin",
    `<nav class="nav">
      <a class="nav__logo" href="index.html" aria-label="Home">
        <img class="nav__logo-base" src="${img("logo-maroon.png")}" alt="">
        <img class="nav__logo-hover" src="${img("logo-pink.png")}" alt="">
      </a>
      <ul class="nav__links">${links}</ul>
      <button class="nav__toggle label" aria-expanded="false">Menu</button>
    </nav>
    <div class="menu">${items.map(([href, text]) => `<a href="${href}">${text}</a>`).join("")}</div>`
  );

  const body = document.body.classList;
  if (!body.contains("home-page") && !body.contains("about-page")) {
    const nav = document.querySelector(".nav");
    nav.classList.add("nav--auto");
    let last = scrollY;
    addEventListener("scroll", () => {
      const y = scrollY;
      if (y < 80 || y < last - 8) nav.classList.remove("nav--hidden");
      else if (y > last + 8 && !body.contains("menu-open")) nav.classList.add("nav--hidden");
      if (Math.abs(y - last) > 8) last = y;
    }, { passive: true });
  }

  const toggle = document.querySelector(".nav__toggle");
  toggle.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.textContent = open ? "Close" : "Menu";
    toggle.setAttribute("aria-expanded", open);
  });
}

// ---------- Work ----------
// Cover thumbnail: an image, or a silent looping video for .mp4 covers
const coverMedia = (name, alt) => name.endsWith(".mp4")
  ? `<video src="${img(name)}" autoplay muted loop playsinline preload="metadata" aria-label="${escape(alt)}"></video>`
  : `<img src="${img(name)}" alt="${escape(alt)}" loading="lazy">`;

// archived: true moves a project from the Work grid to the Archives page
function renderWork(grid, archived = false) {
  grid.innerHTML = PROJECTS.filter((p) => !p.archived === !archived).map((p) => {
    const overlay = p.subtitle || p.blurb;
    const inner = `
      <div class="card__media">
        ${p.comingSoon
          ? `<div class="mini-soon" role="img" aria-label="${escape(titleCase(p.title))} sunrise"><div class="mini-soon__sun"></div></div>`
          : coverMedia(p.cover, p.title)}
        ${overlay ? `<p class="card__overlay">${escape(overlay)}</p>` : ""}
      </div>
      <p class="label">${p.comingSoon
        ? `${escape(titleCase(p.title))} <span class="card__soon">(Coming Soon)</span>`
        : roll(escape(titleCase(p.title)))}</p>`;
    return `<a class="card${p.comingSoon ? " card--soon" : ""}" href="project.html?p=${p.slug}">${inner}</a>`;
  }).join("");

  // Start the thumbnail sunrise once the card scrolls into view
  const scenes = grid.querySelectorAll(".mini-soon");
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add("is-visible");
    io.unobserve(e.target);
  }), { threshold: 0.4 });
  scenes.forEach((el) => io.observe(el));
}

// ---------- Home: selected work carousel ----------
// An auto-scrolling strip of finished work, duplicated once so the loop is seamless.
function renderSelected(track) {
  const picks = PROJECTS.filter((p) => !p.archived && !p.comingSoon);
  const cards = picks.map((p) => `
    <a class="selected__card" href="project.html?p=${p.slug}">
      <span class="selected__media">${coverMedia(p.cover, p.title)}</span>
      <span class="label">${roll(escape(titleCase(p.title)))}</span>
    </a>`).join("");
  track.innerHTML = `<div class="selected__list">${cards}${cards}</div>`;
}

// ---------- Project ----------
// "MANIFESTIO POSTER" -> "Manifestio Poster"
// Small words stay lowercase unless they come first: "BOOK OF SANDS" -> "Book of Sands"
const SMALL_WORDS = new Set(["a", "an", "and", "as", "at", "for", "in", "of", "on", "or", "the", "to"]);
const titleCase = (s) =>
  s.toLowerCase().split(" ")
    .map((w, n) => (n > 0 && SMALL_WORDS.has(w) ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");

// "Branding, Visual Identity and Merch" -> ["Branding", "Visual Identity", "Merch"]
const splitList = (s) => (s ? s.split(/\s*,\s*|\s+and\s+/i).filter(Boolean) : []);

function media(name) {
  if (name.endsWith(".mp4")) {
    return `<figure class="video"><video src="${img(name)}" autoplay muted loop playsinline preload="metadata"></video></figure>`;
  }
  return `<figure><img src="${img(name)}" alt="" loading="lazy"></figure>`;
}

const TRIANGLE = `<svg viewBox="0 0 12 14" aria-hidden="true"><path d="M1 1.5v11a1 1 0 0 0 1.5.86l9-5.5a1 1 0 0 0 0-1.72l-9-5.5A1 1 0 0 0 1 1.5Z"/></svg>`;

function pagerCard(p, dir) {
  const name = titleCase(p.title);
  // Avoid "Ecofin Ecofin a new way…" when the subtitle starts with the project name
  const blurb = (p.blurb || p.subtitle || "").replace(new RegExp(`^${p.title}\\s+`, "i"), "");
  const caption = `<p class="pager__caption"><strong>${escape(name)}</strong> ${escape(blurb)}</p>`;
  const button = `<span class="pager__btn">${dir === "prev" ? TRIANGLE : ""}<span>${dir === "prev" ? "Previous" : "Next"}</span>${dir === "next" ? TRIANGLE : ""}</span>`;
  return `<a class="pager__card pager__card--${dir}" href="project.html?p=${p.slug}">
      <span class="pager__thumb">${coverMedia(p.cover, "")}</span>
      <span class="pager__row">${dir === "prev" ? caption + button : button + caption}</span>
    </a>`;
}

// Animated sunrise scene, shared by unreleased projects (Lyra) and the Play page
function renderSunrise(root, { title, sub, tag = "Coming Soon", backHref, backLabel, label }) {
  document.body.classList.add("soon-page");

  const letters = [...tag]
    .map((c, n) => `<span style="animation-delay:${2.2 + n * .07}s">${c === " " ? "&nbsp;" : c}</span>`)
    .join("");

  root.innerHTML = `
    <section class="soon" aria-label="${escape(label || tag)}">
      <div class="soon__sun" aria-hidden="true"></div>
      <div class="soon__text">
        ${title ? `<h1 class="soon__title">${escape(title)}</h1>` : ""}
        ${sub ? `<p class="soon__sub">${escape(sub)}</p>` : ""}
        <p class="soon__tag" aria-label="${escape(tag)}">${letters}</p>
      </div>
      ${backHref ? `<a class="soon__back" href="${backHref}">${backLabel}</a>` : ""}
    </section>`;
}

function renderComingSoon(root, p) {
  const name = titleCase(p.title);
  document.title = `${name} (Coming Soon) | Sreenidhi Senthil Kumar`;
  renderSunrise(root, {
    title: name,
    sub: p.subtitle,
    tag: "Coming Soon",
    label: `${name} is coming soon`,
    backHref: "work.html",
    backLabel: "Back to Work",
  });
}

function renderProject(root) {
  const slug = new URLSearchParams(location.search).get("p");
  const soon = PROJECTS.find((x) => x.slug === slug && x.comingSoon);
  if (soon) return renderComingSoon(root, soon);

  const ready = PROJECTS.filter((x) => !x.comingSoon);
  const found = ready.find((x) => x.slug === slug) || ready[0];
  // Previous / next stay within the same group (Work or Archives)
  const group = ready.filter((x) => !x.archived === !found.archived);
  const i = group.indexOf(found);
  const p = found;
  const prev = group[(i - 1 + group.length) % group.length];
  const next = group[(i + 1) % group.length];
  const name = titleCase(p.title);
  const layout = p.layout && window.CUSTOM_LAYOUTS ? window.CUSTOM_LAYOUTS[p.layout] : null;

  document.title = `${name} | Sreenidhi Senthil Kumar`;
  document.body.dataset.project = p.slug;

  const hero = p.hero.endsWith(".mp4")
    ? `<video src="${img(p.hero)}" autoplay muted loop playsinline aria-label="${escape(name)}"></video>`
    : `<img src="${img(p.hero)}" alt="${escape(name)}">`;
  const tags = splitList(p.categories);
  const tools = splitList(p.tools);

  // A row can also be { pair: [a, b], natural: true } to keep each image's own shape (e.g. tall posters)
  const gallery = p.gallery
    .map((row) => (row && row.pair
      ? `<div class="gallery__row gallery__row--pair${row.natural ? " is-natural" : ""}">${row.pair.map(media).join("")}</div>`
      : Array.isArray(row)
      ? `<div class="gallery__row gallery__row--pair">${row.map(media).join("")}</div>`
      : `<div class="gallery__row">${media(row)}</div>`))
    .join("");

  root.innerHTML = `
    <section class="project-hero">
      <div class="project-hero__titles">
        <h1 class="project-title">${escape(name)}</h1>
        ${p.subtitle ? `<p class="project-hero__subtitle">${escape(p.subtitle)}</p>` : ""}
      </div>
      <div class="project-hero__media">
        ${p.heroLink ? `<a href="${p.heroLink}" target="_blank" rel="noopener">${hero}</a>` : hero}
        ${p.heroText ? `<p class="project-hero__word" aria-hidden="true">${escape(p.heroText)}</p>` : ""}
      </div>
    </section>

    ${p.info || tags.length || tools.length || p.year ? `
    <section class="overview">
      <div class="overview__main">
        ${p.info ? `<p class="overview__label">Overview</p>
        <div class="overview__text">${p.info.split("\n").map((t) => `<p>${escape(t)}</p>`).join("")}</div>` : ""}
        ${[["Challenge", p.challenge], ["Solution", p.solution]].filter(([, t]) => t).map(([label, t]) => `
        <div class="overview__block">
          <p class="overview__label">${label}</p>
          <p class="overview__text">${escape(t)}</p>
        </div>`).join("")}
      </div>
      <aside class="overview__side">
        ${tags.length ? `<ul class="overview__tags">${tags.map((t) => `<li>${escape(t)}</li>`).join("")}</ul>` : ""}
        ${tools.length ? `<div><p class="overview__label">Tools</p><ul class="overview__list">${tools.map((t) => `<li>${escape(t)}</li>`).join("")}</ul></div>` : ""}
        ${p.year ? `<div><p class="overview__label">Year</p><p class="overview__value">${p.year}</p></div>` : ""}
      </aside>
    </section>` : ""}

    ${layout ? layout.html(img) : ""}

    ${gallery ? `${layout && layout.galleryTitle ? `<h2 class="cue-gallery-title">${layout.galleryTitle}</h2>` : ""}<section class="gallery">${gallery}</section>` : ""}

    ${p.outro ? `<section class="outro"><p>${escape(p.outro)}</p></section>` : ""}

    <div class="project-foot">
      <nav class="pager" aria-label="More projects">
        ${pagerCard(prev, "prev")}
        ${pagerCard(next, "next")}
      </nav>
    </div>`;
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

// ---------- Footer ----------
// Shared by every page: name, a constantly-updating line, the home flower, and contacts.
function renderFooter() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `<footer class="site-footer">
      <div>
        <p class="site-footer__name site-footer__me">Sreenidhi Senthil Kumar</p>
        <p class="site-footer__ticker"><span class="site-footer__ticker-text"></span></p>
      </div>
      <a class="site-footer__flower" href="index.html" aria-label="Home"><img src="${img("logo-maroon.png")}" alt=""></a>
      <div class="site-footer__contact">
        <p class="site-footer__cta">If you like what you see, contact me!</p>
        <ul>
          <li><a href="${LINKS.instagram}">Instagram</a></li>
          <li><a href="mailto:sents848@newschool.edu">Email</a></li>
          <li><a href="${LINKS.linkedin}">LinkedIn</a></li>
        </ul>
      </div>
    </footer>`
  );
  initFooterTicker(document.querySelector(".site-footer__ticker-text"));
}

// Cycles a couple of "always growing" lines with a live NYC clock
function initFooterTicker(el) {
  const lines = [
    "This portfolio is always evolving, new work added constantly.",
    "Still designing, still shipping, still updating.",
    () => `It's ${new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York", hour: "numeric", minute: "2-digit" })} in New York right now.`,
  ];
  let i = 0;
  const show = () => {
    el.style.opacity = 0;
    setTimeout(() => {
      const line = lines[i % lines.length];
      el.textContent = typeof line === "function" ? line() : line;
      i++;
      el.style.opacity = 1;
    }, 300);
  };
  show();
  setInterval(show, 4200);
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

// ---------- Home: changing role ----------
// "A ___ designer": the pink word types out, deletes, then types the next.
// The article ("A" / "An") changes with the word so the sentence stays correct.
const ROLES = [
  "Multi-disciplinary", "Brand Identity", "UI/UX", "Interaction", "Product", "Packaging",
  "Editorial", "Graphic", "Motion", "Type",
];

function initRole(root) {
  const word = root.querySelector(".hero__word");
  const article = root.querySelector(".hero__article");
  const setArticle = (r) => { article.textContent = /^[aeio]/i.test(r) ? "An" : "A"; };
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let i = 0, n = ROLES[0].length, deleting = true;
  const tick = () => {
    const role = ROLES[i];
    if (!deleting) {
      if (n === 0) setArticle(role);
      word.textContent = role.slice(0, ++n);
      if (n === role.length) { deleting = true; return setTimeout(tick, 2200); }
      return setTimeout(tick, 70);
    }
    word.textContent = role.slice(0, --n);
    if (n === 0) { deleting = false; i = (i + 1) % ROLES.length; return setTimeout(tick, 300); }
    setTimeout(tick, 35);
  };
  setTimeout(tick, 2200);
}

// Touch screens have no hover: tap an icon to show its bubble
function toggleBubble(root, item) {
  const open = item.classList.contains("is-open");
  root.querySelectorAll(".inspire__item.is-open").forEach((o) => o.classList.remove("is-open"));
  if (!open) item.classList.add("is-open");
}

function initInspire(root) {
  if (root.querySelector(".box")) return initBox(root);
  root.querySelectorAll(".inspire__item").forEach((item) => item.addEventListener("click", () => toggleBubble(root, item)));
}

// Icons start tucked in a folder. Drag one out and drop it anywhere,
// or click it to pull it out to its own spot. Drop it on the folder to put it back.
function initBox(root) {
  const box = root.querySelector(".box");
  const inside = box.querySelector(".box__inside");
  const items = [...inside.querySelectorAll(".inspire__item")];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Two staggered rows (% of the folder): hidden behind the front while closed,
  // risen up out of the top once the folder is clicked open
  const TILT = [-8, 6, -4, 9, -6, 5, 7, -5, 4, -9, 6, -4];
  const slots = items.map((_, i) => {
    const row = Math.floor(i / 6), up = Math.floor(i / 4);
    return {
      x: 24 + (i % 6) * 10.4 + row * 4, y: 58 + row * 13,            // tucked away
      upX: 18 + (i % 4) * 21 + (up % 2) * 6, upY: -6 + up * 16,     // peeking out of the top
      r: TILT[i], front: up > 0, row: up,
    };
  });
  const isOpen = () => root.classList.contains("is-opened");

  const center = (el) => {
    const r = el.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  };
  const toPct = (pt) => {
    const r = root.getBoundingClientRect();
    return {
      x: Math.min(Math.max((pt.x - r.left) / r.width * 100, 3), 97),
      y: Math.min(Math.max((pt.y - r.top) / r.height * 100, 0), 100),
    };
  };

  // Move an element and animate it from where it was (FLIP)
  function fly(el, move) {
    const a = center(el);
    move();
    if (reduce) return;
    const b = center(el);
    el.style.transition = "none";
    el.style.transform = `translate(${a.x - b.x}px, ${a.y - b.y}px)`;
    el.offsetWidth;
    el.style.transition = "transform .7s cubic-bezier(.2, .9, .25, 1.12), rotate .7s ease";
    el.style.transform = "";
  }

  function packIn(el) {
    const s = slots[items.indexOf(el)];
    inside.appendChild(el);
    el.classList.add("is-boxed");
    el.classList.remove("is-out", "is-open");
    el.classList.toggle("is-front", s.front);
    el.style.zIndex = s.row + 1;
    el.style.left = (isOpen() ? s.upX : s.x) + "%";
    el.style.top = (isOpen() ? s.upY : s.y) + "%";
    el.style.rotate = s.r + "deg";
  }

  function takeOut(el, pct) {
    root.appendChild(el);
    el.classList.remove("is-boxed", "is-front");
    el.style.zIndex = "";
    el.classList.add("is-out");
    el.style.left = pct.x + "%";
    el.style.top = pct.y + "%";
    el.style.rotate = "0deg";
  }

  const spotOf = (el) => { const [x, y] = el.dataset.spot.split(",").map(Number); return { x, y }; };

  items.forEach((el) => {
    packIn(el);
    let start = null, grab = null, dragged = false;

    el.addEventListener("pointerdown", (e) => {
      if (e.button !== 0) return;
      start = { x: e.clientX, y: e.clientY };
      const c = center(el);
      grab = { x: e.clientX - c.x, y: e.clientY - c.y };
      dragged = false;
      el.setPointerCapture(e.pointerId);
    });

    el.addEventListener("pointermove", (e) => {
      if (!start) return;
      if (!dragged) {
        if (Math.hypot(e.clientX - start.x, e.clientY - start.y) < 5) return;
        dragged = true;
        if (el.classList.contains("is-boxed")) takeOut(el, toPct(center(el)));
        el.classList.add("is-dragging");
        el.style.transition = "none";
        el.style.transform = "";
      }
      const p = toPct({ x: e.clientX - grab.x, y: e.clientY - grab.y });
      el.style.left = p.x + "%";
      el.style.top = p.y + "%";
    });

    el.addEventListener("pointerup", (e) => {
      if (!start) return;
      start = null;
      if (!dragged) return;
      el.classList.remove("is-dragging");
      el.style.transition = "";
      const b = box.getBoundingClientRect();
      if (e.clientX > b.left && e.clientX < b.right && e.clientY > b.top + b.height * .3 && e.clientY < b.bottom) {
        fly(el, () => packIn(el));
      }
    });

    // Click (or Enter/Space): pull a boxed icon out to its spot; otherwise show its bubble
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      if (dragged) { dragged = false; return; }
      if (el.classList.contains("is-boxed")) {
        fly(el, () => takeOut(el, spotOf(el)));
      } else {
        toggleBubble(root, el);
      }
    });
  });

  // Click the folder: everything rises up out of it, ready to drag out.
  // Click again to tuck whatever is still inside back down.
  const setOpen = (open) => {
    root.classList.toggle("is-opened", open);
    items.filter((el) => el.classList.contains("is-boxed")).forEach((el, i) => {
      el.style.transitionDelay = reduce ? "0s" : `${i * 35}ms`;
      packIn(el);
    });
  };
  box.addEventListener("click", () => setOpen(!isOpen()));
  box.addEventListener("keydown", (e) => {
    if (e.target !== box) return;
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setOpen(!isOpen()); }
  });
}

// ---------- Boot ----------
renderNav();

document.querySelectorAll("[data-social]").forEach((a) => (a.href = LINKS[a.dataset.social]));

const role = document.querySelector(".hero__role");
if (role && role.querySelector(".hero__word")) initRole(role);
document.querySelectorAll(".inspire").forEach(initInspire);

const workGrid = document.querySelector(".work-grid");
if (workGrid) renderWork(workGrid, workGrid.dataset.archived === "true");

const selectedTrack = document.querySelector("[data-carousel]");
if (selectedTrack) renderSelected(selectedTrack);

const project = document.querySelector("#project");
if (project) {
  renderProject(project);
  initLightbox(".gallery figure:not(.video), .cue-zoom");
  const custom = window.CUSTOM_LAYOUTS && document.querySelector("[data-layout]");
  if (custom) window.CUSTOM_LAYOUTS[custom.dataset.layout].init(custom);
}

const stickers = document.querySelector(".stickers");
if (stickers) initStickers(stickers);

// Content taller than the screen pins at its bottom edge, so all of it is seen before the panel slides over
const pinned = document.querySelectorAll("[data-pin]");
const cvPanel = document.querySelector(".cv");
const setPins = () => {
  pinned.forEach((el) => { el.style.top = Math.min(0, innerHeight - el.offsetHeight) + "px"; });
  // The CV panel peeks up by its header; it needs its real height to know how far down to sit
  if (cvPanel) cvPanel.style.setProperty("--cv-h", cvPanel.offsetHeight + "px");
};
if (pinned.length) { setPins(); addEventListener("resize", setPins); addEventListener("load", setPins); }

// The folder, its logo, caption and dragged-out icons fade out once Selected Work slides up, so nothing peeks over the panel
const heroLogo = document.querySelector(".inspire");
const selectedPanel = document.querySelector(".selected");
if (heroLogo && selectedPanel) {
  const hideLogo = () => heroLogo.classList.toggle("is-hidden", selectedPanel.getBoundingClientRect().top < innerHeight - 40);
  hideLogo();
  addEventListener("scroll", hideLogo, { passive: true });
  addEventListener("resize", hideLogo);
}

const cvTitle = document.querySelector(".cv .panel__title");
if (cvTitle) cvTitle.addEventListener("click", () => {
  const main = document.querySelector("main");
  scrollTo({ top: main.offsetTop + main.offsetHeight - Math.max(innerHeight, cvPanel.offsetHeight), behavior: "smooth" });
});

renderFooter();
