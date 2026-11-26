/*==========================================================
VIVEK SAI KATURI PORTFOLIO
MAIN JAVASCRIPT
==========================================================*/

/*========================
LOADER
=========================*/

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 800);
    }
});

/*========================
NAVBAR SCROLL EFFECT
=========================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header?.classList.add("scrolled");
    } else {
        header?.classList.remove("scrolled");
    }
});

/*========================
MOBILE MENU
=========================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {
    navLinks?.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks?.classList.remove("show");
    });
});

/*========================
ACTIVE NAV LINK BY CURRENT PAGE
=========================*/

(function highlightCurrentNav() {
    const rawPage = decodeURIComponent(window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    const projectDetailPages = [
        "stock market.html",
        "smart campus navigator.html",
        "student management system.html",
        "waymate.html"
    ];
    const currentPage = projectDetailPages.includes(rawPage) ? "projects.html" : (rawPage || "index.html");

    const links = document.querySelectorAll(".nav-links a");
    links.forEach((link) => {
        const href = (link.getAttribute("href") || "").toLowerCase();
        if (href === currentPage) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        } else {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
        }
    });
})();

/*========================
SCROLL REVEAL
=========================*/

function observeReveals(selector) {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    elements.forEach((el) => {
        el.classList.add("reveal");
        revealObserver.observe(el);
    });
}

observeReveals(".project-card, .stack-grid div, .achievement-card, .cta, .cert-card, .ach-card, .info-card, .timeline-card");

/*========================
CUSTOM CURSOR
=========================*/

const cursor = document.querySelector(".cursor");

if (cursor) {
    document.addEventListener("mousemove", (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    });

    document.querySelectorAll("a, button").forEach((item) => {
        item.addEventListener("mouseenter", () => cursor.classList.add("cursor-grow"));
        item.addEventListener("mouseleave", () => cursor.classList.remove("cursor-grow"));
    });
}

/*========================
HOME PAGE: DYNAMIC ORBITING SKILLS (UPDATES EVERY 5 SECONDS)
=========================*/

(function initSkillOrbit() {
    const heroCard = document.querySelector(".hero-card");
    if (!heroCard) return;

    const slots = Array.from(heroCard.querySelectorAll(".floating"));
    if (!slots.length) return;

    const statusLabel = document.getElementById("orbit-status-text");

    // Collect skills from shared PORTFOLIO_SKILLS (fallback to current DOM labels)
    let allSkills = [];
    if (Array.isArray(window.PORTFOLIO_SKILLS) && window.PORTFOLIO_SKILLS.length) {
        allSkills = window.PORTFOLIO_SKILLS.flatMap((cat) =>
            cat.items.map((item) => item.short || item.name)
        );
    } else {
        allSkills = slots.map((el) => el.textContent.trim()).filter(Boolean);
    }

    if (!allSkills.length) return;

    const batchSize = slots.length; // 6 slots
    let batchOffset = 0;
    let baseAngle = 0;
    let lastTimestamp = null;
    let isHovered = false;

    heroCard.addEventListener("mouseenter", () => { isHovered = true; });
    heroCard.addEventListener("mouseleave", () => { isHovered = false; });

    function getBatch(offset) {
        const result = [];
        for (let i = 0; i < batchSize; i++) {
            result.push(allSkills[(offset + i) % allSkills.length]);
        }
        return result;
    }

    function applyBatch(offset, animate) {
        const batch = getBatch(offset);
        const totalBatches = Math.max(1, Math.ceil(allSkills.length / batchSize));
        const currentBatchNum = Math.floor(offset / batchSize) % totalBatches + 1;

        if (animate) {
            slots.forEach((slot) => slot.classList.add("is-swapping"));
            setTimeout(() => {
                slots.forEach((slot, idx) => {
                    slot.textContent = batch[idx];
                    slot.classList.remove("is-swapping");
                });
                if (statusLabel) {
                    statusLabel.textContent = `Skills ${currentBatchNum}/${totalBatches} · Cycling every 5s`;
                }
            }, 320);
        } else {
            slots.forEach((slot, idx) => {
                slot.textContent = batch[idx];
            });
            if (statusLabel) {
                statusLabel.textContent = `Skills ${currentBatchNum}/${totalBatches} · Cycling every 5s`;
            }
        }
    }

    // Smooth circular orbit motion keeping badge text horizontal
    function animateOrbit(timestamp) {
        if (lastTimestamp === null) lastTimestamp = timestamp;
        const delta = (timestamp - lastTimestamp) / 1000;
        lastTimestamp = timestamp;

        const speed = isHovered ? 0.12 : 0.35; // radians per second
        baseAngle += delta * speed;

        const radius = Math.max(106, heroCard.clientWidth * 0.42);
        slots.forEach((slot, idx) => {
            const angle = baseAngle + (idx * (Math.PI * 2)) / batchSize;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const scale = slot.classList.contains("is-swapping") ? 0.78 : 1;
            slot.style.transform = `translate(calc(-50% + ${x.toFixed(1)}px), calc(-50% + ${y.toFixed(1)}px)) scale(${scale})`;
        });

        requestAnimationFrame(animateOrbit);
    }

    applyBatch(batchOffset, false);
    requestAnimationFrame(animateOrbit);

    // Dynamically rotate to next 6 skills every 5 seconds
    setInterval(() => {
        batchOffset = (batchOffset + batchSize) % allSkills.length;
        applyBatch(batchOffset, true);
    }, 5000);
})();

/*========================
SKILLS PAGE: RENDER & FILTER
=========================*/

(function initSkillsPage() {
    const grid = document.getElementById("skills-grid");
    const filterContainer = document.getElementById("skills-filter");
    if (!grid || !Array.isArray(window.PORTFOLIO_SKILLS)) return;

    const categories = window.PORTFOLIO_SKILLS;
    let activeFilter = "all";

    function renderFilters() {
        if (!filterContainer) return;
        const buttons = [
            `<button type="button" class="filter-tab active" data-filter="all">All (${categories.reduce((acc, c) => acc + c.items.length, 0)})</button>`,
            ...categories.map(
                (cat) => `<button type="button" class="filter-tab" data-filter="${cat.id}">${cat.title}</button>`
            )
        ];
        filterContainer.innerHTML = buttons.join("");

        filterContainer.querySelectorAll(".filter-tab").forEach((btn) => {
            btn.addEventListener("click", () => {
                filterContainer.querySelectorAll(".filter-tab").forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");
                activeFilter = btn.dataset.filter || "all";
                renderCards();
            });
        });
    }

    function renderCards() {
        const list = activeFilter === "all"
            ? categories
            : categories.filter((c) => c.id === activeFilter);

        grid.innerHTML = list
            .map(
                (cat) => `
                <article class="skill-card" style="--skill-accent: ${cat.accent};">
                    <div class="skill-card-head">
                        <div class="skill-card-title">
                            <div class="skill-icon">
                                <i class="${cat.icon}"></i>
                            </div>
                            <h3>${cat.title}</h3>
                        </div>
                        <span class="skill-count">${cat.items.length} Skills</span>
                    </div>
                    <p class="skill-summary">${cat.summary}</p>
                    <div class="skill-tags">
                        ${cat.items
                            .map(
                                (item) => `
                                <div class="skill-pill">
                                    <i class="${item.icon}"></i>
                                    <strong>${item.name}</strong>
                                    ${item.tag ? `<span>${item.tag}</span>` : ""}
                                </div>`
                            )
                            .join("")}
                    </div>
                </article>`
            )
            .join("");
    }

    renderFilters();
    renderCards();
})();

/*========================
ACHIEVEMENTS PAGE: CATEGORY FILTER
=========================*/

(function initAchievementsFilter() {
    const filterBar = document.getElementById("achievements-filter");
    const cards = document.querySelectorAll(".ach-card[data-category]");
    if (!filterBar || !cards.length) return;

    filterBar.querySelectorAll(".filter-tab").forEach((btn) => {
        btn.addEventListener("click", () => {
            filterBar.querySelectorAll(".filter-tab").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            const category = btn.dataset.filter || "all";

            cards.forEach((card) => {
                const match = category === "all" || card.dataset.category === category;
                card.style.display = match ? "flex" : "none";
            });
        });
    });
})();

/*========================
CERTIFICATE & ACHIEVEMENT LIGHTBOX MODAL
=========================*/

(function initCertModal() {
    const triggers = document.querySelectorAll("[data-modal-img]");
    if (!triggers.length) return;

    let modal = document.getElementById("cert-modal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "cert-modal";
        modal.className = "cert-modal";
        modal.setAttribute("role", "dialog");
        modal.setAttribute("aria-modal", "true");
        modal.innerHTML = `
            <div class="cert-modal-box">
                <div class="cert-modal-header">
                    <h3 id="cert-modal-title">Certificate Preview</h3>
                    <button type="button" class="cert-modal-close" aria-label="Close preview">
                        <i class="ri-close-line"></i>
                    </button>
                </div>
                <div class="cert-modal-body">
                    <img id="cert-modal-img" src="" alt="Certificate preview">
                </div>
                <div class="cert-modal-footer">
                    <a id="cert-modal-pdf" href="#" target="_blank" rel="noopener noreferrer" class="cert-btn cert-btn-view" style="display:none;">
                        <i class="ri-file-pdf-2-line"></i> Open PDF
                    </a>
                    <a id="cert-modal-verify" href="#" target="_blank" rel="noopener noreferrer" class="cert-btn cert-btn-verify" style="display:none;">
                        <i class="ri-verified-badge-line"></i> Verify Credential
                    </a>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    const titleEl = modal.querySelector("#cert-modal-title");
    const imgEl = modal.querySelector("#cert-modal-img");
    const pdfBtn = modal.querySelector("#cert-modal-pdf");
    const verifyBtn = modal.querySelector("#cert-modal-verify");
    const closeBtn = modal.querySelector(".cert-modal-close");

    function closeModal() {
        modal.classList.remove("open");
        document.body.style.overflow = "";
    }

    triggers.forEach((trigger) => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            const img = trigger.dataset.modalImg || "";
            const title = trigger.dataset.modalTitle || "Certificate Preview";
            const pdf = trigger.dataset.modalPdf || "";
            const verify = trigger.dataset.modalVerify || "";

            titleEl.textContent = title;
            imgEl.src = img;
            imgEl.alt = title;

            if (pdf) {
                pdfBtn.href = pdf;
                pdfBtn.style.display = "inline-flex";
            } else {
                pdfBtn.style.display = "none";
            }

            if (verify) {
                verifyBtn.href = verify;
                verifyBtn.style.display = "inline-flex";
            } else {
                verifyBtn.style.display = "none";
            }

            modal.classList.add("open");
            document.body.style.overflow = "hidden";
        });
    });

    closeBtn?.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("open")) {
            closeModal();
        }
    });
})();

/*========================
COPY EMAIL HELPER
=========================*/

(function initCopyEmail() {
    const copyButtons = document.querySelectorAll("[data-copy-email]");
    if (!copyButtons.length) return;

    let toast = document.querySelector(".copy-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.className = "copy-toast";
        document.body.appendChild(toast);
    }

    let timer = null;
    function showToast(msg) {
        toast.textContent = msg;
        toast.classList.add("show");
        clearTimeout(timer);
        timer = setTimeout(() => toast.classList.remove("show"), 2200);
    }

    copyButtons.forEach((btn) => {
        btn.addEventListener("click", async () => {
            const email = btn.dataset.copyEmail || "katuriviveksai@gmail.com";
            try {
                await navigator.clipboard.writeText(email);
                showToast(`Copied ${email}`);
            } catch {
                showToast(email);
            }
        });
    });
})();
