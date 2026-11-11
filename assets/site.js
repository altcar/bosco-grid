/* ------------------------------------------------------------------
   Shalev Lau — Puzzles
   Shared data + rendering for index.html (light) and roll.html (dark).

   To swap in your own photographs: replace the files in /assets and
   update PHOTOS below. Everything else is generated from here.
-------------------------------------------------------------------*/

const PHOTOS = {
    portrait: {
        src: "assets/shalev-lau.png",
        alt: "Shalev Lau standing inside a room of concentric neon light rings."
    },
    coast: {
        src: "assets/bristol-1.webp",
        alt: "Sea cliffs at the Lizard in Cornwall, gulls circling above dark rocks and green turf."
    },
    flower: {
        src: "assets/bristol-2.webp",
        alt: "A hand holding a small red flower with the city of Bristol out of focus behind it."
    },
    harbour: {
        src: "assets/bristol-3.webp",
        alt: "Boats moored at Bristol harbourside under a grey sky, with the colourful houses of Cliftonwood behind."
    },
    sunrise: {
        src: "assets/bristol-4.webp",
        alt: "An orange sunrise over flat fields and a road, seen from Exeter."
    },
    city: {
        src: "assets/bristol-5.webp",
        alt: "Looking down over Bristol from Cabot Tower: autumn trees, park paths and rooftops."
    },
    bridge: {
        src: "assets/bristol-6.webp",
        alt: "Clifton Suspension Bridge seen across Bristol from a high viewpoint in autumn."
    },
    cathedral: {
        src: "assets/bristol-7.webp",
        alt: "Bristol Cathedral and the city centre rooftops seen from above on a grey day."
    }
};

const PUZZLES = [
    {
        id: "section-1",
        num: "01",
        title: "The Canvas",
        desc: "One photograph given the room to breathe, with three smaller frames pinned over it like notes on a wall.",
        thumb: PHOTOS.city
    },
    {
        id: "section-2",
        num: "02",
        title: "Fade Away",
        desc: "Six frames, each holding a second one underneath. Hover a cell, or tap it, to watch the moment change.",
        thumb: PHOTOS.bridge
    },
    {
        id: "section-3",
        num: "03",
        title: "Staggered Limits",
        desc: "Three crops stepping down the page, deliberately off-balance to keep the eye moving.",
        thumb: PHOTOS.coast
    },
    {
        id: "section-4",
        num: "04",
        title: "Details",
        desc: "Four square details, set beside the small things that make a place recognisable.",
        thumb: PHOTOS.flower
    },
    {
        id: "section-5",
        num: "05",
        title: "Endless Horizon",
        desc: "A filmstrip that runs sideways. Drag it, scroll it, or use the arrows.",
        thumb: PHOTOS.sunrise
    },
    {
        id: "section-6",
        num: "06",
        title: "Organic Forms",
        desc: "Rectangles give way to soft, irregular windows, so the frames flow into one another.",
        thumb: PHOTOS.harbour
    },
    {
        id: "section-7",
        num: "07",
        title: "Analog Memories",
        desc: "Loose polaroids on a tabletop: a little crooked, a little nostalgic, better for it.",
        thumb: PHOTOS.portrait
    },
    {
        id: "section-8",
        num: "08",
        title: "Split Narrative",
        desc: "One frame holds still while the others keep moving past it.",
        thumb: PHOTOS.cathedral
    },
    {
        id: "section-9",
        num: "09",
        title: "Bento Collage",
        desc: "A dense bento of everything left over: textures, skies, and a few views worth keeping.",
        thumb: PHOTOS.coast
    }
];

const head = (puzzle, index) => `
    <header class="puzzle-head">
        <span class="puzzle-num" aria-hidden="true">${puzzle.num}</span>
        <h2 id="heading-${index + 1}">${puzzle.title}</h2>
        <p class="puzzle-desc">${puzzle.desc}</p>
    </header>
`;

const SECTIONS = {
    "section-1": () => `
        <div class="canvas">
            <img class="canvas-bg" src="${PHOTOS.bridge.src}" alt="${PHOTOS.bridge.alt}" loading="lazy" decoding="async">
            <img class="canvas-pin pin-1" src="${PHOTOS.portrait.src}" alt="${PHOTOS.portrait.alt}" loading="lazy" decoding="async">
            <img class="canvas-pin pin-2" src="${PHOTOS.flower.src}" alt="${PHOTOS.flower.alt}" loading="lazy" decoding="async">
            <img class="canvas-pin pin-3" src="${PHOTOS.city.src}" alt="${PHOTOS.city.alt}" loading="lazy" decoding="async">
        </div>
    `,

    "section-2": () => {
        const pairs = [
            [PHOTOS.city, PHOTOS.cathedral],
            [PHOTOS.coast, PHOTOS.bridge],
            [PHOTOS.portrait, PHOTOS.harbour],
            [PHOTOS.flower, PHOTOS.sunrise],
            [PHOTOS.sunrise, PHOTOS.city],
            [PHOTOS.bridge, PHOTOS.coast]
        ];
        return `
            <div class="fade-grid">
                ${pairs.map(([base, top]) => `
                    <button class="fade-cell" type="button" aria-pressed="false" aria-label="Reveal the second frame">
                        <img src="${base.src}" alt="${base.alt}" loading="lazy" decoding="async">
                        <img class="top" src="${top.src}" alt="" loading="lazy" decoding="async">
                    </button>
                `).join("")}
            </div>
        `;
    },

    "section-3": () => `
        <div class="stagger">
            <img src="${PHOTOS.harbour.src}" alt="${PHOTOS.harbour.alt}" loading="lazy" decoding="async">
            <img src="${PHOTOS.portrait.src}" alt="${PHOTOS.portrait.alt}" loading="lazy" decoding="async">
            <img src="${PHOTOS.cathedral.src}" alt="${PHOTOS.cathedral.alt}" loading="lazy" decoding="async">
        </div>
    `,

    "section-4": () => {
        const details = [
            [PHOTOS.flower, "The flower"],
            [PHOTOS.sunrise, "The sky"],
            [PHOTOS.city, "The city"],
            [PHOTOS.coast, "The coast"]
        ];
        return `
            <div class="details">
                ${details.map(([photo, caption]) => `
                    <figure>
                        <img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async">
                        <figcaption>${caption}</figcaption>
                    </figure>
                `).join("")}
            </div>
        `;
    },

    "section-5": () => {
        const strip = [
            [PHOTOS.coast, "The Lizard, Cornwall"],
            [PHOTOS.bridge, "Clifton, Bristol"],
            [PHOTOS.city, "Cabot Tower, Bristol"],
            [PHOTOS.cathedral, "Bristol Cathedral"],
            [PHOTOS.flower, "Bristol, autumn"],
            [PHOTOS.sunrise, "Somewhere outside Exeter"]
        ];
        return `
            <div class="strip-shell">
                <button class="strip-btn prev" type="button" aria-label="Scroll the filmstrip left">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>
                </button>
                <div class="filmstrip" tabindex="0" aria-label="Photo filmstrip, scroll sideways">
                    ${strip.map(([photo, caption], i) => `
                        <figure>
                            <img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async">
                            <figcaption><span>${caption}</span><span>${String(i + 1).padStart(2, "0")}</span></figcaption>
                        </figure>
                    `).join("")}
                </div>
                <button class="strip-btn next" type="button" aria-label="Scroll the filmstrip right">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>
                </button>
            </div>
        `;
    },

    "section-6": () => `
        <div class="organic">
            <figure><img src="${PHOTOS.harbour.src}" alt="${PHOTOS.harbour.alt}" loading="lazy" decoding="async"></figure>
            <figure><img src="${PHOTOS.portrait.src}" alt="${PHOTOS.portrait.alt}" loading="lazy" decoding="async"></figure>
            <figure><img src="${PHOTOS.bridge.src}" alt="${PHOTOS.bridge.alt}" loading="lazy" decoding="async"></figure>
        </div>
    `,

    "section-7": () => {
        const snaps = [PHOTOS.portrait, PHOTOS.flower, PHOTOS.harbour, PHOTOS.sunrise, PHOTOS.city];
        return `
            <div class="polaroid-field">
                ${snaps.map((photo, i) => `
                    <div class="polaroid p${i + 1}">
                        <img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async">
                        <div class="cap">#0${i + 1}</div>
                    </div>
                `).join("")}
            </div>
        `;
    },

    "section-8": () => `
        <div class="split">
            <figure class="split-hero">
                <img src="${PHOTOS.portrait.src}" alt="${PHOTOS.portrait.alt}" loading="lazy" decoding="async">
                <figcaption>Self-portrait, somewhere loud.</figcaption>
            </figure>
            <div class="split-stack">
                <figure><img src="${PHOTOS.coast.src}" alt="${PHOTOS.coast.alt}" loading="lazy" decoding="async"></figure>
                <figure><img src="${PHOTOS.bridge.src}" alt="${PHOTOS.bridge.alt}" loading="lazy" decoding="async"></figure>
                <figure><img src="${PHOTOS.cathedral.src}" alt="${PHOTOS.cathedral.alt}" loading="lazy" decoding="async"></figure>
                <figure><img src="${PHOTOS.city.src}" alt="${PHOTOS.city.alt}" loading="lazy" decoding="async"></figure>
            </div>
        </div>
    `,

    "section-9": () => `
        <div class="bento">
            <img class="b-a" src="${PHOTOS.city.src}" alt="${PHOTOS.city.alt}" loading="lazy" decoding="async">
            <img class="b-b" src="${PHOTOS.flower.src}" alt="${PHOTOS.flower.alt}" loading="lazy" decoding="async">
            <img class="b-c" src="${PHOTOS.sunrise.src}" alt="${PHOTOS.sunrise.alt}" loading="lazy" decoding="async">
            <img class="b-d" src="${PHOTOS.cathedral.src}" alt="${PHOTOS.cathedral.alt}" loading="lazy" decoding="async">
            <div class="bento-note">
                <span>Shot on a phone. Arranged by hand.</span>
                <span>Bristol and Cornwall</span>
            </div>
            <img class="b-f" src="${PHOTOS.coast.src}" alt="${PHOTOS.coast.alt}" loading="lazy" decoding="async">
            <img class="b-g" src="${PHOTOS.bridge.src}" alt="${PHOTOS.bridge.alt}" loading="lazy" decoding="async">
        </div>
    `
};

/* ------------------------------------------------------------------
   Render
-------------------------------------------------------------------*/

const grid = document.getElementById("main-grid");
if (grid) {
    grid.innerHTML = PUZZLES.map(puzzle => `
        <a class="tile" href="#${puzzle.id}">
            <span class="tile-media">
                <img src="${puzzle.thumb.src}" alt="" loading="lazy" decoding="async">
            </span>
            <span class="tile-caption">
                <span class="tile-num">${puzzle.num}</span>
                <span class="tile-title">${puzzle.title}</span>
            </span>
        </a>
    `).join("");
}

const puzzleRoot = document.getElementById("puzzles");
if (puzzleRoot) {
    puzzleRoot.innerHTML = PUZZLES.map((puzzle, index) => `
        <section class="puzzle" id="${puzzle.id}" aria-labelledby="heading-${index + 1}">
            <div class="puzzle-inner">
                ${head(puzzle, index)}
                ${SECTIONS[puzzle.id]()}
            </div>
        </section>
    `).join("");
}

/* ------------------------------------------------------------------
   Fade cells: click / tap to hold the second frame
-------------------------------------------------------------------*/

document.querySelectorAll(".fade-cell").forEach(cell => {
    cell.addEventListener("click", () => {
        const pressed = cell.getAttribute("aria-pressed") === "true";
        cell.setAttribute("aria-pressed", String(!pressed));
    });
});

/* ------------------------------------------------------------------
   Filmstrip arrows + keyboard
-------------------------------------------------------------------*/

const strip = document.querySelector(".filmstrip");
if (strip) {
    const shell = strip.closest(".strip-shell");
    const prev = shell.querySelector(".prev");
    const next = shell.querySelector(".next");
    const step = () => Math.round(strip.clientWidth * 0.7);

    const updateButtons = () => {
        prev.disabled = strip.scrollLeft < 8;
        next.disabled = strip.scrollLeft + strip.clientWidth >= strip.scrollWidth - 8;
    };

    prev.addEventListener("click", () => strip.scrollBy({ left: -step(), behavior: "smooth" }));
    next.addEventListener("click", () => strip.scrollBy({ left: step(), behavior: "smooth" }));

    strip.addEventListener("keydown", event => {
        if (event.key === "ArrowRight") {
            event.preventDefault();
            strip.scrollBy({ left: step(), behavior: "smooth" });
        }
        if (event.key === "ArrowLeft") {
            event.preventDefault();
            strip.scrollBy({ left: -step(), behavior: "smooth" });
        }
    });

    strip.addEventListener("scroll", updateButtons, { passive: true });
    window.addEventListener("resize", updateButtons);
    updateButtons();
}

/* ------------------------------------------------------------------
   Back to top
-------------------------------------------------------------------*/

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const toTop = document.querySelector(".to-top");

if (toTop) {
    const updateToTop = () => {
        toTop.classList.toggle("show", window.scrollY > 700);
    };

    window.addEventListener("scroll", updateToTop, { passive: true });
    updateToTop();

    toTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
}

/* ------------------------------------------------------------------
   Footer year
-------------------------------------------------------------------*/

document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
});
