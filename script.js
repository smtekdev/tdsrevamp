const IMG = "assets/images/";
const FALL = "linear-gradient(135deg,#0b2a45,#17a9e1 55%,#ffc24b)";
const $ = (s, c = document) => c.querySelector(s),
  $$ = (s, c = document) => [...c.querySelectorAll(s)];
const fmt = (n) => n.toLocaleString("en-US");

const SOC = [
  ["ig", "Instagram", "#"],
  ["fb", "Facebook", "#"],
  ["in", "LinkedIn", "#"],
  ["xx", "X", "#"],
];
const LOGOS = [
  ["wix.png", "Wix"],
  ["wordpress.png", "WordPress"],
  ["amazon.png", "Amazon"],
  ["godaddy.png", "GoDaddy"],
  ["google.png", "Google"],
  ["paypal.png", "PayPal"],
  ["weebly.png", "Weebly"],
  ["airbnb.png", "Airbnb"],
  ["squarespace.png", "Squarespace"],
];

const CATS = {
  web: ["Web Design/Dev", "#0b2a45,#17a9e1"],
  graphic: ["Graphic Design", "#e8426b,#ffc24b"],
  app: ["App Development", "#17a9e1,#06182a"],
  seo: ["SEO Services", "#4cb04a,#17a9e1"],
  video: ["Video Editing", "#e8426b,#06182a"],
  anim: ["2D & 3D Animations", "#ffc24b,#e8426b"],
  illus: ["Illustration", "#8fd6f5,#4cb04a"],
};
const WORK = [
  ["Harbor Dental", "web", "portfolio-1.jpg", 2025],
  ["Wayfinder", "app", "portfolio-2.jpg", 2025],
  ["Palmetto Coffee", "graphic", "portfolio-3.jpg", 2024],
  ["Orbit Explainer", "anim", "portfolio-4.jpg", 2024],
  ["Bay Street Realty", "web", "portfolio-5.jpg", 2024],
  ["Northside Fitness", "illus", "portfolio-6.jpg", 2024],
  ["Summit Legal", "seo", "portfolio-7.jpg", 2025],
  ["Velocity Launch", "video", "portfolio-8.jpg", 2025],
];

const SVC = [
  [
    "Web Design/Development",
    "Transform your brand with stunning, user-friendly websites crafted to achieve your goals.",
    "service-1.jpg",
  ],
  [
    "Graphic Design",
    "We create logos and brochures that captivate and convey your brand's message.",
    "service-2.jpg",
  ],
  [
    "Social Media Services",
    "Grow your online community and engage your audience with effective social media strategies.",
    "service-3.jpg",
  ],
  [
    "App Development",
    "Deliver seamless user experiences with innovative mobile applications customized to your needs.",
    "service-4.jpg",
  ],
  [
    "SEO",
    "Boost your website's visibility and attract the right audience with our proven SEO techniques.",
    "service-5.jpg",
  ],
  [
    "Video Editing",
    "Create captivating video content that tells your story and engages your audience.",
    "service-6.jpg",
  ],
  [
    "2D & 3D Animations",
    "Bring ideas to life with eye-catching animations that add a dynamic touch to your brand.",
    "service-7.jpg",
  ],
  [
    "Illustrations",
    "Elevate your brand with custom illustrations that make a lasting impact.",
    "service-8.jpg",
  ],
];

const PK = {
  web: [
    "Web Design/Dev",
    ["Starter sites", "Growth builds"],
    [
      [
        "Basic",
        249,
        "Startup website",
        "5-page website|Custom layout design|Contact / query form|Unlimited revisions",
      ],
      [
        "Standard",
        699,
        "For growing startups",
        "Complete source files|Dedicated project manager|100% ownership rights|Mobile responsive",
      ],
      [
        "Premium",
        999,
        "Most complete starter",
        "Up to 10 unique pages|Custom, interactive design|WordPress or PHP development|Interactive sliding banners",
      ],
      [
        "Silver",
        1599,
        "Up to 20 unique pages",
        "Custom, dynamic, high-end design|WordPress or PHP development|Fully mobile responsive|Up to 15 custom banners",
      ],
      [
        "Business",
        2499,
        "25-page package",
        "Customized WordPress or PHP|Interactive sliding banners|Fully mobile responsive|Up to 15 custom banners",
      ],
      [
        "Platinum",
        4499,
        "Unlimited pages",
        "Unlimited pages|30-60 sec explainer video|Custom, dynamic design|Fully mobile responsive",
      ],
    ],
  ],
  graphic: [
    "Graphic Design",
    ["Logo & identity", "Print & marketing"],
    [
      [
        "Logo Starter",
        99,
        "2 concepts",
        "2 logo concepts|3 revisions|Final PNG & JPG|48-hour delivery",
      ],
      [
        "Logo Pro",
        199,
        "5 concepts",
        "5 logo concepts|Unlimited revisions|Vector source files|Social media kit",
      ],
      [
        "Brand Identity",
        349,
        "Full identity",
        "Logo + variations|Color & typography|Business card design|Brand guidelines PDF",
      ],
      [
        "Stationery",
        149,
        "Office essentials",
        "Letterhead & envelope|Business card|Print-ready files|3 revisions",
      ],
      [
        "Marketing Kit",
        249,
        "Brochure + social",
        "Brochure or flyer|Social media templates|Print-ready files|Unlimited revisions",
      ],
      [
        "Brand Book",
        499,
        "Complete brand system",
        "Full brand guidelines|Packaging concept|Marketing collateral|Source files included",
      ],
    ],
  ],
  app: [
    "App Development",
    ["Starter apps", "Scale-up apps"],
    [
      [
        "MVP App",
        2999,
        "Validate your idea",
        "Core feature build|iOS or Android|Clean UI/UX design|Launch support",
      ],
      [
        "Business App",
        5999,
        "Cross-platform",
        "iOS & Android|Admin dashboard|API integrations|3 months support",
      ],
      [
        "Premium App",
        8999,
        "Polished product",
        "Custom UI/UX system|Push notifications|Payments integration|6 months support",
      ],
      [
        "Growth App",
        12999,
        "Built to scale",
        "Advanced features|Scalable backend|Analytics dashboard|Priority support",
      ],
      [
        "Enterprise",
        19999,
        "Custom solution",
        "Complex architecture|Advanced security|Dedicated team|SLA support",
      ],
      [
        "Platform",
        29999,
        "Full product suite",
        "Multi-platform product|Custom CMS & admin|DevOps & CI/CD|12 months support",
      ],
    ],
  ],
  seo: [
    "SEO Services",
    ["Monthly plans", "One-time projects"],
    [
      [
        "Local SEO",
        199,
        "Local visibility",
        "Google Business setup|Keyword research|On-page fixes|Monthly report",
        "/ month",
      ],
      [
        "Growth SEO",
        399,
        "Grow organic traffic",
        "Technical audit|Content strategy|Link building|Bi-weekly reports",
        "/ month",
      ],
      [
        "Pro SEO",
        799,
        "Competitive markets",
        "Full-scale strategy|Content production|Authority backlinks|Dedicated manager",
        "/ month",
      ],
      [
        "Site Audit",
        149,
        "Know where you stand",
        "Technical audit|Keyword gap analysis|Action plan PDF|30-min review call",
      ],
      [
        "Content Pack",
        449,
        "Rank with content",
        "8 SEO articles|Keyword mapping|On-page optimization|Internal linking",
      ],
      [
        "Authority Boost",
        899,
        "Build authority",
        "15 quality backlinks|Competitor analysis|Local citations|Ranking report",
      ],
    ],
  ],
  video: [
    "Video Editing",
    ["Short-form", "Long-form"],
    [
      [
        "Reel",
        79,
        "Up to 60 seconds",
        "Captions & music|Color correction|Vertical + square cuts|2 revisions",
      ],
      [
        "Promo",
        149,
        "Up to 2 minutes",
        "Motion graphics|Brand intro / outro|Sound mixing|3 revisions",
      ],
      [
        "Ad Creative",
        249,
        "30-second ad",
        "Hook-driven edit|Sound design|3 format cuts|Unlimited revisions",
      ],
      [
        "YouTube",
        199,
        "Up to 8 minutes",
        "Cuts & transitions|Thumbnail design|Color grading|3 revisions",
      ],
      [
        "Corporate",
        399,
        "Up to 5 minutes",
        "Motion graphics|Voice-over sync|Subtitles|4 revisions",
      ],
      [
        "Studio",
        699,
        "Up to 15 minutes",
        "Advanced VFX|Multi-camera edit|Sound design|Unlimited revisions",
      ],
    ],
  ],
  anim: [
    "2D & 3D Animations",
    ["2D animation", "3D animation"],
    [
      [
        "Logo Sting",
        149,
        "5-second intro",
        "Animated logo|Sound effects|2 revisions|Source file",
      ],
      [
        "Explainer",
        349,
        "30-60 seconds",
        "Script & storyboard|Custom illustrations|Voice-over|3 revisions",
      ],
      [
        "Character",
        699,
        "Character-led story",
        "Custom character design|Full animation|Script & storyboard|Unlimited revisions",
      ],
      [
        "Product Spin",
        399,
        "3D turntable",
        "3D modeling|360° turntable|Studio lighting|2 revisions",
      ],
      [
        "Product Ad",
        799,
        "Cinematic 3D ad",
        "Cinematic camera moves|Realistic materials|Sound design|4 revisions",
      ],
      [
        "Full 3D",
        1499,
        "Complete 3D production",
        "Custom 3D scenes|Character animation|VFX & compositing|Unlimited revisions",
      ],
    ],
  ],
  illus: [
    "Illustration",
    ["Digital art", "Brand illustration"],
    [
      [
        "Spot",
        59,
        "Single illustration",
        "1 custom illustration|High-res PNG|2 revisions|3-day delivery",
      ],
      [
        "Character",
        129,
        "Custom character",
        "Custom character|Color variations|Transparent PNG|3 revisions",
      ],
      [
        "Scene",
        249,
        "Detailed scene",
        "Detailed scene art|Background included|Print-ready file|Unlimited revisions",
      ],
      [
        "Icon Set",
        199,
        "12 matching icons",
        "Set of 12 icons|Consistent style|SVG & PNG|3 revisions",
      ],
      [
        "Mascot",
        399,
        "Brand mascot",
        "Mascot concept & design|Poses & expressions|Vector files|Usage guide",
      ],
      [
        "Illustration Pack",
        699,
        "Full brand library",
        "20+ brand illustrations|Style guide|Web & print formats|Unlimited revisions",
      ],
    ],
  ],
};

const AR = '<svg class="ic"><use href="#ar"/></svg>';
const rep = (h) => h + h;
const lg = (a) =>
  rep(
    a
      .map(
        ([f, n]) =>
          `<span class="lg"><img src="${IMG}${f}" alt="${n}" onerror="this.parentNode.classList.add('txt')"><b>${n}</b></span>`,
      )
      .join(""),
  );
$("#mq1").innerHTML = lg(LOGOS);
$("#mq2").innerHTML = lg([...LOGOS].reverse());
$$(".so").forEach(
  (el) =>
    (el.innerHTML = SOC.map(
      ([i, l, h]) =>
        `<a href="${h}" aria-label="${l}" target="_blank" rel="noopener"><svg><use href="#${i}"/></svg></a>`,
    ).join("")),
);
$("#fsel").innerHTML = [
  "Website design & development",
  "Graphic design",
  "Social media services",
  "App development",
  "SEO",
  "Video editing",
  "2D & 3D animations",
  "Illustration",
]
  .map((s) => `<option>${s}</option>`)
  .join("");

const cnt = (k) => WORK.filter((w) => k === "all" || w[1] === k).length;
const two = (n) => String(n).padStart(2, "0");
$("#pfF").innerHTML =
  `<li><button class="on" data-f="all">All work<em>${two(WORK.length)}</em></button></li>` +
  Object.entries(CATS)
    .map(
      ([k, v]) =>
        `<li><button data-f="${k}">${v[0]}<em>${two(cnt(k))}</em></button></li>`,
    )
    .join("");
$("#pfG").innerHTML = WORK.map(
  (w) =>
    `<article class="wk" data-c="${w[1]}"><div class="wk-img" style="--a:linear-gradient(140deg,${CATS[w[1]][1]})"><img src="${IMG}${w[2]}" alt="${w[0]}" loading="lazy" onerror="this.remove()"><span>${w[3]}</span></div><div class="wk-b"><div><small>${CATS[w[1]][0]}</small><h3>${w[0]}</h3></div><div class="wk-go">${AR}</div></div></article>`,
).join("");
const lay = () =>
  $$(".wk:not(.hide)").forEach((el, i) =>
    el.classList.toggle("drop", i % 2 === 1),
  );
lay();

$("#xp").innerHTML = SVC.map(
  (s, i) =>
    `<article class="xi" style="background-image:url(${IMG}${s[2]}),${FALL}"><span class="xi-n">${two(i + 1)}</span><h3 class="xi-v">${s[0]}</h3><div class="xi-c"><h3>${s[0]}</h3><p>${s[1]}</p><a href="#contact" class="rm"><span>Read more</span>${AR}</a></div></article>`,
).join("");
$("#xt").textContent = two(SVC.length);
const xi = $$(".xi");
let xa = 0,
  xTimer = null,
  xPaused = false;
function xAct(i) {
  xa = (i + xi.length) % xi.length;
  xi.forEach((el, k) => el.classList.toggle("on", k === xa));
  $("#xn").textContent = two(xa + 1);
}
xi.forEach((el, k) => {
  el.addEventListener("mouseenter", () => {
    if (matchMedia("(hover:hover)").matches) {
      xPaused = true;
      xAct(k);
    }
  });
  el.addEventListener("click", () => {
    xPaused = true;
    xAct(k);
  });
});
$("#xp").addEventListener("mouseleave", () => {
  xPaused = false;
});
xAct(0);

let pc = "web",
  ps = 0;
const bar = (el, items, on) => {
  el.innerHTML =
    '<i class="ind"></i>' +
    items
      .map(
        (t, i) =>
          `<button class="${i === on ? "on" : ""}" data-i="${i}">${t}</button>`,
      )
      .join("");
};
const keys = Object.keys(PK);
function moveInd(box, instant) {
  const on = $("button.on", box),
    ind = $(".ind", box);
  if (!on || !ind) return;
  if (window.gsap && !instant)
    gsap.to(ind, {
      x: on.offsetLeft,
      width: on.offsetWidth,
      duration: 0.55,
      ease: "power3.out",
    });
  else {
    ind.style.transform = `translateX(${on.offsetLeft}px)`;
    ind.style.width = on.offsetWidth + "px";
  }
}
function countPrices() {
  $$(".cnt").forEach((el) => {
    const to = +el.dataset.to;
    if (!window.gsap || !document.documentElement.classList.contains("js")) {
      el.textContent = fmt(to);
      return;
    }
    const o = { v: 0 };
    gsap.to(o, {
      v: to,
      duration: 1.2,
      ease: "power2.out",
      onUpdate: () => (el.textContent = fmt(Math.round(o.v))),
    });
  });
}
function rows(anim) {
  const d = PK[pc];
  $("#pkG").innerHTML = d[2]
    .slice(ps * 3, ps * 3 + 3)
    .map(
      (p, i) =>
        `<article class="pr${i === 1 ? " pop" : ""}"><div>${i === 1 ? '<span class="badge">Best value</span>' : ""}<h3>${p[0]}</h3><p class="sub">${p[2]}</p></div><ul>${p[3]
          .split("|")
          .map((f) => `<li><svg><use href="#ck"/></svg>${f}</li>`)
          .join(
            "",
          )}</ul><div class="pr-r"><div class="price"><sup>$</sup><b class="cnt" data-to="${p[1]}">${fmt(p[1])}</b><small>${p[4] || "/ project"}</small></div><a href="#contact" class="btn"><span>Get started</span>${AR}</a></div></article>`,
    )
    .join("");
  if (window.gsap && anim)
    gsap.from("#pkG .pr", {
      x: -80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      clearProps: "transform,opacity",
    });
  countPrices();
  window.ScrollTrigger && ScrollTrigger.refresh();
}
function pkInit() {
  bar(
    $("#pkC"),
    keys.map((k) => PK[k][0]),
    keys.indexOf(pc),
  );
  bar($("#pkS"), PK[pc][1], ps);
  rows(false);
  moveInd($("#pkC"), true);
  moveInd($("#pkS"), true);
}
pkInit();
((document.fonts && document.fonts.ready) || Promise.resolve()).then(() => {
  moveInd($("#pkC"), true);
  moveInd($("#pkS"), true);
});
addEventListener("resize", () => {
  moveInd($("#pkC"), true);
  moveInd($("#pkS"), true);
});
$("#pkC").onclick = (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  pc = keys[+b.dataset.i];
  ps = 0;
  bar($("#pkS"), PK[pc][1], 0);
  $$("#pkC button").forEach((x) => x.classList.toggle("on", x === b));
  moveInd($("#pkC"));
  moveInd($("#pkS"), true);
  rows(true);
  b.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
};
$("#pkS").onclick = (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  ps = +b.dataset.i;
  $$("#pkS button").forEach((x) => x.classList.toggle("on", x === b));
  moveInd($("#pkS"));
  rows(true);
};

$$(".split").forEach(
  (el) =>
    (el.innerHTML = [...el.textContent]
      .map((c) => `<span class="ch">${c}</span>`)
      .join("")),
);
const stt = $("#st");
if (stt)
  stt.innerHTML = stt.textContent
    .split(" ")
    .map((w) => `<span class="w">${w}</span>`)
    .join("");

const menu = $("#menu"),
  burger = $("#burger");
burger.onclick = () => {
  menu.classList.toggle("open");
  burger.classList.toggle("x");
};
$$("#menu a").forEach(
  (a) =>
    (a.onclick = () => {
      menu.classList.remove("open");
      burger.classList.remove("x");
    }),
);
$("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target,
    v = (n) => f.elements[n].value.trim();
  let bad = false;
  ["name", "email"].forEach((n) => {
    const ok = n === "email" ? /^\S+@\S+\.\S+$/.test(v(n)) : v(n).length > 1;
    f.elements[n].classList.remove("bad");
    void f.elements[n].offsetWidth;
    f.elements[n].classList.toggle("bad", !ok);
    bad = bad || !ok;
  });
  if (bad) return;
  const body = `Name: ${v("name")}%0D%0AEmail: ${v("email")}%0D%0AService: ${v("service")}%0D%0A%0D%0A${encodeURIComponent(v("msg"))}`;
  location.href = `mailto:benjamin@thedesignspark.com?subject=${encodeURIComponent("New project inquiry from " + v("name"))}&body=${body}`;
  const ok = $("#ok");
  window.gsap
    ? gsap.to(ok, { autoAlpha: 1, duration: 0.6 })
    : ((ok.style.opacity = 1), (ok.style.visibility = "visible"));
});
$("#news").addEventListener("submit", (e) => {
  e.preventDefault();
  const i = e.target.querySelector("input");
  i.value = "";
  i.placeholder = "Thanks, you are subscribed!";
});

if (!window.gsap) {
  console.warn("GSAP did not load, check your internet connection.");
} else if (!matchMedia("(prefers-reduced-motion:reduce)").matches) {
  gsap.registerPlugin(ScrollTrigger, Flip);
  document.documentElement.classList.add("js");
  countPrices();

  gsap.to(".progress", {
    scaleX: 1,
    ease: "none",
    scrollTrigger: { scrub: 0.3, start: 0, end: "max" },
  });
  const nav = $("#nav");
  let hidden = false;
  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (s) => {
      const d = s.direction,
        y = s.scroll();
      if (d === 1 && y > 300 && !hidden) {
        hidden = true;
        gsap.to(nav, { y: -130, duration: 0.5, ease: "power3.in" });
      }
      if (d === -1 && hidden) {
        hidden = false;
        gsap.to(nav, { y: 0, duration: 0.6, ease: "power3.out" });
      }
    },
  });
  $$("section[id]").forEach((s) =>
    ScrollTrigger.create({
      trigger: s,
      start: "top 55%",
      end: "bottom 55%",
      onToggle: (t) => {
        if (!t.isActive) return;
        $$(".nav nav a").forEach((a) =>
          a.classList.toggle("on", a.getAttribute("href") === "#" + s.id),
        );
      },
    }),
  );

  const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
  tl.from(".sun", { yPercent: 55, duration: 2.6, ease: "power3.out" }, 0)
    .from(".rays", { opacity: 0, duration: 2.4 }, 0)
    .from(".pw", { yPercent: 30, opacity: 0, duration: 1.8, stagger: 0.2 }, 0.2)
    .from(nav, { y: -120, duration: 1 }, 0.2)
    .from(
      ".hero .ch",
      { yPercent: 120, rotate: 8, duration: 1.25, stagger: 0.045 },
      0.5,
    )
    .from(
      ".stk",
      {
        scale: 0.3,
        rotate: -24,
        opacity: 0,
        duration: 1,
        ease: "back.out(2.2)",
      },
      "-=.7",
    )
    .from("[data-h]", { y: 40, opacity: 0, duration: 1, stagger: 0.12 }, "-=.9")
    .from(
      ".hc",
      {
        y: 220,
        opacity: 0,
        duration: 1.4,
        stagger: 0.15,
        ease: "back.out(1.2)",
      },
      1,
    )
    .from(
      ".hero-foot > *",
      { y: 40, opacity: 0, duration: 0.9, stagger: 0.12 },
      1.4,
    )
    .set(".row", { clipPath: "none" });
  gsap.to(".rays", { rotation: 360, duration: 90, repeat: -1, ease: "none" });
  $$(".pw svg").forEach((s, i) =>
    gsap.to(s, {
      rotation: i ? -2.2 : 2.2,
      duration: 3.4 + i,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    }),
  );
  $$(".hc").forEach((c, i) =>
    gsap.to(c, {
      y: i % 2 ? -14 : 14,
      duration: 3 + i * 0.6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2,
    }),
  );
  gsap.to(".w1", { xPercent: -50, duration: 16, repeat: -1, ease: "none" });
  gsap.to(".w2", { xPercent: -50, duration: 24, repeat: -1, ease: "none" });
  gsap.to(".w3", { xPercent: -50, duration: 34, repeat: -1, ease: "none" });
  gsap.to(".sun", {
    yPercent: 30,
    scale: 1.08,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
  gsap.to(".hero-c", {
    yPercent: -12,
    opacity: 0.3,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "35% top",
      end: "bottom top",
      scrub: true,
    },
  });
  $(".hero").addEventListener("mousemove", (e) => {
    const x = e.clientX / innerWidth - 0.5,
      y = e.clientY / innerHeight - 0.5;
    gsap.to(".sun", { x: x * -40, duration: 1.6 });
    gsap.to(".pl", { x: x * -30, duration: 1.6 });
    gsap.to(".pp", { x: x * -30, duration: 1.6 });
    gsap.to(".c1", { x: x * -40, duration: 1.4 });
    gsap.to(".c2", { x: x * -60, duration: 1.4 });
    gsap.to(".c3", { x: x * -25, y: y * -20, duration: 1.4 });
  });

  const tws = ["#mq1", "#mq2"].map((s, i) =>
    gsap.fromTo(
      s,
      { xPercent: i ? -50 : 0 },
      {
        xPercent: i ? 0 : -50,
        duration: [46, 52][i],
        ease: "none",
        repeat: -1,
      },
    ),
  );
  ScrollTrigger.create({
    trigger: ".clients",
    onUpdate: (s) => {
      const v = 1 + Math.min(Math.abs(s.getVelocity()) / 200, 7);
      tws.forEach((t) => {
        t.timeScale(v);
        gsap.to(t, {
          timeScale: 1,
          duration: 1.2,
          overwrite: true,
          delay: 0.1,
        });
      });
    },
  });
  gsap.from(".cl-r .lg", {
    y: 40,
    opacity: 0,
    stagger: 0.05,
    duration: 0.8,
    scrollTrigger: { trigger: ".clients", start: "top 80%" },
  });

  ScrollTrigger.batch("[data-r]", {
    start: "top 92%",
    once: true,
    onEnter: (b) =>
      gsap.to(b, {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.12,
        ease: "power3.out",
        overwrite: "auto",
      }),
  });
  $$("[data-count]").forEach((el) => {
    const o = { v: 0 };
    gsap.to(o, {
      v: +el.dataset.count,
      duration: 2.2,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 92%" },
      onUpdate: () => (el.textContent = Math.round(o.v)),
    });
  });
  $$("h2[data-r]").forEach((h) => {
    h.removeAttribute("data-r");
    gsap.fromTo(
      h,
      { clipPath: "inset(0 0 100% 0)", yPercent: 30 },
      {
        clipPath: "inset(-10% -10% -10% -10%)",
        yPercent: 0,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: { trigger: h, start: "top 90%" },
        onComplete: () => gsap.set(h, { clearProps: "clipPath" }),
      },
    );
  });

  gsap.fromTo(
    ".arch",
    { clipPath: "inset(100% 0 0 0 round 999px 999px 30px 30px)" },
    {
      clipPath: "inset(0% 0 0 0 round 999px 999px 30px 30px)",
      duration: 1.6,
      ease: "power4.inOut",
      scrollTrigger: { trigger: ".arch", start: "top 85%" },
      onComplete: () => gsap.set(".arch", { clearProps: "clipPath" }),
    },
  );
  gsap.fromTo(
    ".arch img",
    { scale: 1.35, yPercent: -6 },
    {
      scale: 1,
      yPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".arch",
        start: "top bottom",
        end: "bottom 30%",
        scrub: true,
      },
    },
  );
  gsap.from(".stamp", {
    scale: 0,
    rotate: -120,
    duration: 1.2,
    ease: "back.out(1.8)",
    scrollTrigger: { trigger: ".arch", start: "top 60%" },
  });
  gsap.from(".halo", {
    scale: 0.4,
    opacity: 0,
    duration: 1.8,
    ease: "power3.out",
    scrollTrigger: { trigger: ".ab-c", start: "top 85%" },
  });
  gsap.from(".pil-list li", {
    x: -50,
    opacity: 0.2,
    stagger: 0.12,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: { trigger: ".pil-list", start: "top 88%" },
  });

  gsap.from(".wk", {
    y: 90,
    opacity: 0.2,
    scale: 0.94,
    rotate: (i) => (i % 2 ? 3 : -3),
    duration: 1,
    stagger: 0.1,
    ease: "power3.out",
    clearProps: "transform,opacity",
    scrollTrigger: { trigger: "#pfG", start: "top 88%" },
  });
  gsap.from("#pfF li", {
    x: -40,
    opacity: 0.2,
    stagger: 0.07,
    duration: 0.7,
    scrollTrigger: { trigger: "#pfF", start: "top 90%" },
  });
  $("#pfF").onclick = (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    $$("#pfF button").forEach((t) => t.classList.toggle("on", t === b));
    const f = b.dataset.f,
      st = Flip.getState(".wk");
    $$(".wk").forEach((w) =>
      w.classList.toggle("hide", !(f === "all" || w.dataset.c === f)),
    );
    lay();
    Flip.from(st, {
      duration: 0.8,
      ease: "power3.inOut",
      scale: true,
      absolute: true,
      stagger: 0.04,
      onEnter: (el) =>
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.7 },
          { opacity: 1, scale: 1, duration: 0.7 },
        ),
      onLeave: (el) => gsap.to(el, { opacity: 0, scale: 0.7, duration: 0.4 }),
      onComplete: () => ScrollTrigger.refresh(),
    });
  };

  gsap.from(".xi", {
    y: 120,
    opacity: 0.2,
    stagger: 0.07,
    duration: 1,
    ease: "power3.out",
    clearProps: "transform,opacity",
    scrollTrigger: { trigger: "#xp", start: "top 85%" },
  });
  ScrollTrigger.create({
    trigger: "#xp",
    start: "top 70%",
    end: "bottom 20%",
    onToggle: (t) => {
      clearInterval(xTimer);
      if (t.isActive)
        xTimer = setInterval(() => {
          if (!xPaused) xAct(xa + 1);
        }, 4200);
    },
  });

  gsap.from("#pkG .pr", {
    y: 80,
    opacity: 0.2,
    duration: 1,
    stagger: 0.12,
    ease: "power3.out",
    clearProps: "transform,opacity",
    scrollTrigger: { trigger: "#pkG", start: "top 88%" },
  });
  gsap.from(".assure > div", {
    y: 30,
    opacity: 0.2,
    stagger: 0.1,
    duration: 0.8,
    scrollTrigger: { trigger: ".assure", start: "top 92%" },
  });

  gsap.from(".flow", {
    "--lw": 0,
    duration: 1.6,
    ease: "power2.inOut",
    scrollTrigger: { trigger: ".flow", start: "top 85%" },
  });
  gsap.from(".flow b", {
    scale: 0,
    rotate: -90,
    stagger: 0.25,
    duration: 0.8,
    ease: "back.out(2)",
    scrollTrigger: { trigger: ".flow", start: "top 85%" },
  });
  gsap.from(".flow h4,.flow p", {
    y: 24,
    opacity: 0.2,
    stagger: 0.08,
    duration: 0.8,
    scrollTrigger: { trigger: ".flow", start: "top 80%" },
  });
  gsap.from(".tile", {
    y: 60,
    opacity: 0.2,
    stagger: 0.12,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: { trigger: ".tiles", start: "top 92%" },
  });
  gsap.from(".fgrid > div", {
    y: 50,
    opacity: 0.2,
    stagger: 0.12,
    duration: 0.9,
    scrollTrigger: { trigger: ".fgrid", start: "top 90%" },
  });
  gsap.fromTo(
    ".soc a",
    { scale: 0, rotate: -90 },
    {
      scale: 1,
      rotate: 0,
      stagger: 0.1,
      duration: 0.7,
      ease: "back.out(2)",
      immediateRender: false,
      scrollTrigger: { trigger: ".ft", start: "top 90%", once: true },
      onComplete: () => gsap.set(".soc a", { clearProps: "transform" }),
    },
  );
  $$(".ft-palm svg").forEach((s, i) =>
    gsap.to(s, {
      rotation: i ? -2 : 2,
      duration: 3.6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    }),
  );
  gsap.to(".f-brand img", {
    y: -8,
    rotate: -2,
    duration: 2.6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
  gsap.to(".g1", {
    y: 60,
    x: -40,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
  gsap.to(".g2", {
    y: -50,
    x: 50,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  if (matchMedia("(pointer:fine)").matches) {
    let last = null;
    const reset = () => {
      last &&
        gsap.to(last, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      last = null;
    };
    document.addEventListener("mousemove", (e) => {
      const t = e.target.closest && e.target.closest(".tile,.lg");
      if (t !== last) reset();
      if (!t) return;
      last = t;
      const r = t.getBoundingClientRect();
      gsap.to(t, {
        rotationY: ((e.clientX - r.left) / r.width - 0.5) * 12,
        rotationX: -((e.clientY - r.top) / r.height - 0.5) * 12,
        transformPerspective: 900,
        duration: 0.5,
        ease: "power2.out",
      });
    });
    const cur = $(".cur"),
      cx = gsap.quickTo(cur, "x", { duration: 0.25 }),
      cy = gsap.quickTo(cur, "y", { duration: 0.25 });
    addEventListener("mousemove", (e) => {
      cx(e.clientX);
      cy(e.clientY);
    });
    document.addEventListener("mouseover", (e) => {
      const w = e.target.closest(".wk");
      cur.classList.toggle("on", !!w);
      if (w) cur.firstChild.textContent = "View";
    });
    $$(".mag").forEach((b) => {
      b.addEventListener("mousemove", (e) => {
        const r = b.getBoundingClientRect();
        gsap.to(b, {
          x: (e.clientX - r.left - r.width / 2) * 0.3,
          y: (e.clientY - r.top - r.height / 2) * 0.4,
          duration: 0.4,
        });
      });
      b.addEventListener("mouseleave", () =>
        gsap.to(b, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1,.4)" }),
      );
    });
  }
  addEventListener("load", () => ScrollTrigger.refresh());
}
