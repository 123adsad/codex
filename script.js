const works = [];

let heroPhotoPool = [
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=86",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=86",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=86",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1000&q=86",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=86",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=86",
];

let portfolioProjects = [];

const workGroups = {
  wild: "Nature",
  city: "City",
  creative: "Creative",
};

const projectGroupById = {};

const defaultProjects = [
  {
    city: "秦岭72峪",
    theme: "山野路线与生活切片",
    notes: "围绕秦岭峪口、村落、山路与季节光线，整理可持续更新的自然生活地图。",
  },
  {
    city: "待策划",
    theme: "下一组生活地图",
    notes: "预留给新的城市或山野项目，可继续补充地点、路线、时间与样张。",
  },
];
const gallery = document.querySelector("#gallery");
const filterBar = document.querySelector(".filter-bar");
let filterButtons = [...document.querySelectorAll(".filter-button")];
const collectionGrid = document.querySelector(".collection-grid");
const navLinks = [...document.querySelectorAll(".nav-links a[href^='#']")];
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxTitle = document.querySelector("#lightboxTitle");
const lightboxMeta = document.querySelector("#lightboxMeta");
const lightboxStory = document.querySelector("#lightboxStory");
const projectForm = document.querySelector("#projectForm");
const projectBoard = document.querySelector("#projectBoard");
const ideaToast = document.querySelector("#ideaToast");
const heroImages = [...document.querySelectorAll(".collage-image")];
let visibleWorks = [...portfolioProjects];
let activeIndex = 0;
let heroSwapLocked = false;

function getPhotoLibraryTopics() {
  return window.PHOTO_LIBRARY?.topics || null;
}

function getPhotoLibraryProjects() {
  return window.PHOTO_LIBRARY?.projects || null;
}

const topicCopy = {
  nature: "Nature and landscape works from the local photo library.",
  city: "City, street and architecture works from the local photo library.",
  people: "Portrait and documentary works from the local photo library.",
  events: "Meeting and event works from the local photo library.",
};

function pickRandomPhoto(items) {
  if (!items?.length) return null;
  return items[Math.floor(Math.random() * items.length)];
}

function topicToProject(topic) {
  const cover = pickRandomPhoto(topic.photos);
  return {
    id: `topic-${topic.key}`,
    title: topic.title,
    category: topic.key,
    categoryLabel: topic.label,
    location: "Local library",
    count: `${topic.count} photos`,
    src: cover?.src || "",
    alt: cover?.title || topic.title,
    story: topicCopy[topic.key] || `${topic.label}: ${topic.count} photos.`,
  };
}

function libraryProjectToWork(project) {
  const cover = project.photos?.find((photo) => photo.src === project.cover) || pickRandomPhoto(project.photos);
  const chapterText = project.chapters?.length ? project.chapters.join(" / ") : "Local project";
  return {
    id: project.id || project.key,
    title: project.title || project.label,
    category: project.id || project.key,
    categoryLabel: project.label || project.title,
    location: chapterText,
    count: `${project.count} photos`,
    src: cover?.src || project.cover || "",
    alt: cover?.title || project.title || project.label,
    story: project.intro || `${project.label || project.title}: ${project.count} photos.`,
  };
}
function rebuildWorkFilters(projectList) {
  if (!filterBar || !projectList?.length) return;
  filterBar.innerHTML = [
    `<button class="filter-button active" type="button" data-filter="all">全部</button>`,
    ...projectList.map(
      (project) =>
        `<button class="filter-button" type="button" data-filter="${project.id || project.key}">${project.label || project.title}</button>`
    ),
  ].join("");
  filterButtons = [...document.querySelectorAll(".filter-button")];
}

function hydrateSiteFromPhotoLibrary() {
  const topics = getPhotoLibraryTopics();
  if (!topics) return;
  const projectCollections = getPhotoLibraryProjects();

  const topicList = Object.values(topics).filter((topic) => topic.photos?.length);
  const projectList = projectCollections
    ? Object.values(projectCollections).filter((project) => project.photos?.length)
    : [];
  const naturePhotos = topics.nature?.photos || [];

  if (naturePhotos.length) {
    heroPhotoPool = naturePhotos.map((photo) => photo.src);
    const firstHeroSet = [...naturePhotos].sort(() => Math.random() - 0.5).slice(0, heroImages.length);
    heroImages.forEach((image, index) => {
      const photo = firstHeroSet[index % firstHeroSet.length];
      if (!photo) return;
      image.src = photo.src;
      image.alt = photo.title || photo.filename || "自然风光作品";
      image.decoding = "async";
      image.loading = "eager";
      image.fetchPriority = index < 2 ? "high" : "auto";
    });
  }

  if (projectList.length) {
    rebuildWorkFilters(projectList);
    portfolioProjects = projectList.map(libraryProjectToWork);
  } else {
    portfolioProjects = topicList.map(topicToProject);
  }
  visibleWorks = [...portfolioProjects];

  const projectCountMetric = document.querySelector("#projectCountMetric");
  const projectPhotoMetric = document.querySelector("#projectPhotoMetric");
  const workPhotoTotal = projectList.length
    ? projectList.reduce((sum, project) => sum + project.count, 0)
    : visibleWorks.reduce((sum, work) => sum + (Number.parseInt(work.count, 10) || 0), 0);
  if (projectCountMetric) {
    projectCountMetric.dataset.countTarget = visibleWorks.length.toString();
    projectCountMetric.textContent = visibleWorks.length.toString();
  }
  if (projectPhotoMetric) {
    projectPhotoMetric.dataset.countTarget = workPhotoTotal.toString();
    projectPhotoMetric.textContent = workPhotoTotal.toString();
  }

  if (collectionGrid) {
    collectionGrid.innerHTML = topicList
      .map((topic, index) => {
        const cover = pickRandomPhoto(topic.photos);
        const tileClass = index === 0 ? "collection-tile large" : "collection-tile";
        return `
          <button class="${tileClass}" type="button" data-filter-jump="${topic.key}">
            <img src="${cover.src}" alt="${topic.label}" loading="lazy" />
            <span>
              <small>${String(index + 1).padStart(2, "0")}</small>
              <strong>${topic.label}</strong>
              <em>${topic.count} 张作品</em>
            </span>
          </button>
        `;
      })
      .join("");
  }

  if (!projectList.length) {
    filterButtons.forEach((button) => {
      if (button.dataset.filter === "all") return;
      const topic = topics[button.dataset.filter];
      if (topic) button.textContent = topic.label;
    });
  }

  const metrics = document.querySelectorAll(".metric[data-count-target]");
  const totalPhotos = topicList.reduce((sum, topic) => sum + topic.count, 0);
  if (metrics[0]) {
    metrics[0].dataset.countTarget = topicList.length.toString();
    metrics[0].textContent = topicList.length.toString();
  }
  if (metrics[1]) {
    metrics[1].dataset.countTarget = totalPhotos.toString();
    metrics[1].textContent = totalPhotos.toString();
  }
}

function getProjectGroup(project) {
  const groupKey = projectGroupById[project.id] || "wild";
  return {
    key: groupKey,
    label: workGroups[groupKey],
  };
}

function renderGallery(filter = "all", selectedProject = "all") {
  visibleWorks = [...portfolioProjects];

  if (filter !== "all") {
    visibleWorks = visibleWorks.filter((work) => work.category === filter || work.id === filter || getProjectGroup(work).key === filter);
  }

  if (selectedProject !== "all") {
    visibleWorks = visibleWorks.filter((work) => work.id === selectedProject);
  }

  gallery.innerHTML = "";

  visibleWorks.forEach((work, index) => {
    const group = getProjectGroup(work);
    const card = document.createElement("button");
    card.className = "photo-card project-card-large reveal";
    card.type = "button";
    card.dataset.index = index;
    card.dataset.projectId = work.id;
    card.setAttribute("aria-label", `查看项目：${work.title}`);
    card.innerHTML = `
      <img src="${work.src}" alt="${work.alt}" loading="lazy">
      <span class="photo-info">
        <small>${work.categoryLabel || group.label} · ${work.location} · ${work.count}</small>
        <strong>${work.title}</strong>
        <em>${work.story}</em>
      </span>
    `;
    gallery.appendChild(card);
  });

  observeReveal();
}

function openLightbox(index) {
  activeIndex = index;
  const work = visibleWorks[activeIndex];
  lightboxImage.src = work.src.replace("w=1200", "w=1800");
  lightboxImage.alt = work.alt;
  lightboxTitle.textContent = work.title;
  lightboxMeta.textContent = `${work.categoryLabel || getProjectGroup(work).label} · ${work.location}`;
  lightboxStory.textContent = work.story;
  lightbox.showModal();
}

function changeLightbox(step) {
  activeIndex = (activeIndex + step + visibleWorks.length) % visibleWorks.length;
  openLightbox(activeIndex);
}

function setActiveFilter(filter) {
  filterButtons.forEach((item) => {
    item.classList.toggle("active", item.dataset.filter === filter);
  });
  renderGallery(filter, "all");
}

function loadProjects() {
  return [...defaultProjects];
}

function renderProjects() {
  const projects = loadProjects();
  projectBoard.innerHTML = "";

  projects.slice(0, 2).forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <span>Project ${String(index + 1).padStart(2, "0")}</span>
      <h3>${project.city}</h3>
      <p>${project.notes}</p>
    `;
    projectBoard.appendChild(card);
  });
}

function showIdeaThanks() {
  if (!ideaToast) return;
  ideaToast.hidden = false;
  window.requestAnimationFrame(() => {
    ideaToast.classList.add("is-visible");
  });
  window.clearTimeout(showIdeaThanks.timer);
  showIdeaThanks.timer = window.setTimeout(() => {
    ideaToast.classList.remove("is-visible");
    window.setTimeout(() => {
      ideaToast.hidden = true;
    }, 240);
  }, 3200);
}

async function submitIdeaForm(formData) {
  if (window.location.protocol === "file:") return;
  await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  });
}

function initHeroAutoGallery() {
  if (!heroImages.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let visibleSources = heroImages.map((image) => image.src);
  let intervalId = null;
  let preloadQueue = Promise.resolve();
  const decodedImages = new Map();

  function shuffleSources(sources) {
    const shuffled = [...sources];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const nextIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[nextIndex]] = [shuffled[nextIndex], shuffled[index]];
    }
    return shuffled;
  }

  function pickNextSourceSet() {
    const unseenSources = heroPhotoPool.filter((src) => !visibleSources.includes(src));
    const sourceList = unseenSources.length >= heroImages.length ? unseenSources : heroPhotoPool;
    return shuffleSources(sourceList).slice(0, heroImages.length);
  }

  function preloadSource(src) {
    if (decodedImages.has(src)) return decodedImages.get(src);

    const request = new Promise((resolve) => {
      const image = new Image();
      image.decoding = "async";
      image.fetchPriority = "low";
      image.onload = () => {
        if (image.decode) {
          image.decode().then(resolve).catch(resolve);
        } else {
          resolve();
        }
      };
      image.onerror = resolve;
      image.src = src;
    });

    decodedImages.set(src, request);
    return request;
  }

  function trimPreloadCache() {
    if (decodedImages.size <= 30) return;
    const keep = new Set([...visibleSources, ...heroPhotoPool.slice(0, 12)]);
    [...decodedImages.keys()].forEach((src) => {
      if (!keep.has(src)) decodedImages.delete(src);
    });
  }

  function warmNextHeroImages() {
    const nextSources = pickNextSourceSet();
    preloadQueue = Promise.all(nextSources.map(preloadSource)).then(() => nextSources);
  }

  async function swapAllHeroImages() {
    if (heroSwapLocked) return;

    heroSwapLocked = true;
    const nextSources = await preloadQueue;
    preloadQueue = Promise.resolve(nextSources);

    heroImages.forEach((image) => {
      image.classList.add("is-swapping");
    });
    window.setTimeout(() => {
      heroImages.forEach((image, index) => {
        image.src = nextSources[index];
        image.classList.remove("is-swapping");
      });
      visibleSources = [...nextSources];
      trimPreloadCache();
      warmNextHeroImages();
    }, 260);

    window.setTimeout(() => {
      heroSwapLocked = false;
    }, 620);
  }

  function startAutoSwap() {
    if (intervalId) return;
    intervalId = window.setInterval(swapAllHeroImages, 2000);
  }

  function stopAutoSwap() {
    if (!intervalId) return;
    window.clearInterval(intervalId);
    intervalId = null;
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoSwap();
    } else {
      startAutoSwap();
    }
  });

  heroImages.forEach((image) => {
    image.decoding = "async";
    image.loading = "eager";
  });
  warmNextHeroImages();
  startAutoSwap();
}

function observeReveal() {
  const items = document.querySelectorAll(".reveal:not(.visible)");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
}

function initStatsCounter() {
  const statStrips = [...document.querySelectorAll(".stats-strip, .work-stats")];
  const counters = [...document.querySelectorAll(".metric[data-count-target]")];
  if (!statStrips.length || !counters.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setFinalValues() {
    counters.forEach((counter) => {
      counter.textContent = counter.dataset.countTarget;
    });
  }

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    setFinalValues();
    return;
  }

  counters.forEach((counter) => {
    counter.textContent = "0";
  });

  function animateCounter(counter) {
    const target = Number(counter.dataset.countTarget);
    const duration = 1100;
    const startTime = performance.now();

    function update(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.round(target * eased).toString();

      if (progress < 1) {
        window.requestAnimationFrame(update);
      } else {
        counter.textContent = target.toString();
      }
    }

    window.requestAnimationFrame(update);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll(".metric[data-count-target]").forEach(animateCounter);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.35 }
  );

  statStrips.forEach((strip) => observer.observe(strip));
}

function initSectionTransitions() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const sections = [...document.querySelectorAll("main > section")];
  let ticking = false;

  function setActiveNav(id) {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  }

  function updateSectionMotion() {
    ticking = false;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const viewportCenter = viewportHeight / 2;
    let activeSection = null;
    let activeDistance = Number.POSITIVE_INFINITY;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionCenter = rect.top + rect.height / 2;
      const distance = Math.abs(sectionCenter - viewportCenter);
      const intersectsViewport = rect.bottom > 0 && rect.top < viewportHeight;
      if (intersectsViewport && section.id && distance < activeDistance) {
        activeSection = section;
        activeDistance = distance;
      }
    });

    if (activeSection) {
      setActiveNav(activeSection.id);
    }
  }

  function requestSectionMotionUpdate() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateSectionMotion);
  }

  window.addEventListener("scroll", requestSectionMotionUpdate, { passive: true });
  window.addEventListener("resize", requestSectionMotionUpdate);
  updateSectionMotion();

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      window.setTimeout(() => {
        target.classList.remove("section-focus-fade");
        void target.offsetWidth;
        target.classList.add("section-focus-fade");
        setActiveNav(target.id);
        requestSectionMotionUpdate();
      }, 260);
    });
  });

  if (window.location.hash) {
    const initialTarget = document.querySelector(window.location.hash);
    if (initialTarget) {
      window.setTimeout(() => {
        initialTarget.classList.add("section-focus-fade");
        setActiveNav(initialTarget.id);
        requestSectionMotionUpdate();
      }, 320);
    }
  }
}

function rebuildContactSection() {
  const contact = document.querySelector("#contact");
  if (!contact) return;

  contact.innerHTML = `
    <article class="contact-card">
      <section class="contact-column bio-column" aria-label="\u6444\u5f71\u5e08\u4ecb\u7ecd">
        <img
          class="contact-bio-image"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=82"
          alt="\u6444\u5f71\u5e08\u5de5\u4f5c\u7167"
        />
        <div>
          <p class="eyebrow">Photographer</p>
          <h2>\u627f\u7440</h2>
          <p>\u627f\u7440\u6444\u5f71 Thomas pics\uff0c\u5173\u6ce8\u81ea\u7136\u5149\u3001\u57ce\u5e02\u751f\u6d3b\u548c\u4eba\u7269\u5173\u7cfb\u3002\u4f5c\u54c1\u8986\u76d6\u5c71\u91ce\u3001\u57ce\u5e02\u3001\u4eba\u50cf\u4e0e\u6d3b\u52a8\u7eaa\u5f55\u3002</p>
        </div>
      </section>
      <section class="contact-column social-column" aria-label="\u793e\u4ea4\u5a92\u4f53\u5173\u6ce8">
        <p class="eyebrow">Follow</p>
        <h3>\u793e\u4ea4\u5a92\u4f53</h3>
        <div class="social-stack">
          <a class="social-profile" href="https://www.xiaohongshu.com" target="_blank" rel="noreferrer">
            <span class="social-logo xhs-logo">RED</span>
            <span>
              <strong>\u5c0f\u7ea2\u4e66</strong>
              <small>RED ID: thomas_pics</small>
            </span>
          </a>
          <a class="social-profile" href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <span class="social-logo ig-logo">IG</span>
            <span>
              <strong>Instagram</strong>
              <small>@thomas.pics</small>
            </span>
          </a>
        </div>
      </section>
      <section class="contact-column wechat-column" aria-label="\u9884\u7ea6\u65b9\u5f0f">
        <p class="eyebrow">Booking</p>
        <div class="qr-placeholder" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <strong>\u5fae\u4fe1\u9884\u7ea6</strong>
        <small>WeChat: chengyu_95</small>
        <div class="direct-contact">
          <a href="mailto:605710591@qq.com">605710591@qq.com</a>
          <a href="tel:+8613319119096">13319119096</a>
        </div>
      </section>
    </article>
  `;
}
filterBar?.addEventListener("click", (event) => {
  const button = event.target.closest(".filter-button");
  if (!button) return;
  setActiveFilter(button.dataset.filter);
});

collectionGrid?.addEventListener("click", (event) => {
  const tile = event.target.closest("[data-filter-jump]");
  if (!tile) return;
  window.location.href = `portfolio.html?category=${encodeURIComponent(tile.dataset.filterJump)}`;
});

gallery.addEventListener("click", (event) => {
  const card = event.target.closest(".photo-card");
  if (!card) return;
  if (card.dataset.projectId) {
    window.location.href = `portfolio.html?project=${encodeURIComponent(card.dataset.projectId)}`;
    return;
  }

  openLightbox(Number(card.dataset.index));
});

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(projectForm);
  const place = formData.get("city").toString().trim();
  const theme = formData.get("theme").toString().trim();

  if (!place || !theme) return;

  submitIdeaForm(formData)
    .catch(() => {})
    .finally(() => {
      showIdeaThanks();
      projectForm.reset();
    });
});

document.querySelector(".close-lightbox").addEventListener("click", () => lightbox.close());
document.querySelector(".lightbox-prev").addEventListener("click", () => changeLightbox(-1));
document.querySelector(".lightbox-next").addEventListener("click", () => changeLightbox(1));

document.addEventListener("keydown", (event) => {
  if (!lightbox.open) return;
  if (event.key === "ArrowLeft") changeLightbox(-1);
  if (event.key === "ArrowRight") changeLightbox(1);
});

document.querySelector("#year").textContent = new Date().getFullYear();
rebuildContactSection();
hydrateSiteFromPhotoLibrary();
initHeroAutoGallery();
renderGallery();
renderProjects();
initSectionTransitions();
initStatsCounter();
observeReveal();






