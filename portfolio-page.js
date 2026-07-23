let categoryInfo = {
  landscape: {
    label: "风景",
    title: "风景 Landscape",
    intro: "山野、海岸、湖泊与远行路径组成的自然影像档案，关注光线、空气和地点本身的秩序。",
    hero: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=84",
  },
  portrait: {
    label: "人像",
    title: "人像 Portrait",
    intro: "以自然光和低干预引导建立人物与环境之间的关系，保留安静、真实的临场感。",
    hero: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1800&q=84",
  },
  street: {
    label: "街拍",
    title: "街拍 Street",
    intro: "从街角、灯牌、反光和行人的短暂停顿里，捕捉城市节奏的偶然片段。",
    hero: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=84",
  },
  wedding: {
    label: "婚礼",
    title: "婚礼 Wedding",
    intro: "记录仪式之外的情绪余波、靠近、手势和现场关系，让照片保留真实温度。",
    hero: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=84",
  },
  product: {
    label: "商业产品",
    title: "商业 Product",
    intro: "围绕材质、轮廓、空间和品牌气质展开，适合产品发布、品牌视觉与内容素材。",
    hero: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1800&q=84",
  },
  documentary: {
    label: "纪实",
    title: "纪实 Documentary",
    intro: "把地点、人物和事件放进同一条叙事线，让真实场景自己抵达画面。",
    hero: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1800&q=84",
  },
  mixed: {
    label: "混合",
    title: "混合 Mixed",
    intro: "在同一个项目里连接风景、人物与城市记忆，用更开放的方式组织视觉故事。",
    hero: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=84",
  },
};

let projects = [
  {
    id: "silent-ridges",
    title: "静默山脊",
    category: "landscape",
    location: "Iceland · 2026",
    count: "12 张",
    description: "以山路、岩层和远方低云构成一组冷静的风景叙事，关注地点本身的线条与秩序。",
    cover: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=84",
  },
  {
    id: "morning-lake",
    title: "晨雾湖岸",
    category: "landscape",
    location: "Norway · 2026",
    count: "9 张",
    description: "围绕清晨、湖面和建筑之间的关系展开，让雾气降低画面对比，保留安静的空间感。",
    cover: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=84",
  },
  {
    id: "window-portrait",
    title: "窗边人物",
    category: "portrait",
    location: "Shanghai · 2026",
    count: "16 张",
    description: "一组自然光人像项目，用窗、墙面和人物姿态建立克制的情绪。",
    cover: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1800&q=84",
  },
  {
    id: "night-corners",
    title: "夜色街角",
    category: "street",
    location: "Tokyo · 2025",
    count: "18 张",
    description: "从霓虹、路口和人群移动中寻找短暂停顿，让城市街拍呈现电影式的冷静节奏。",
    cover: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=84",
  },
  {
    id: "after-vows",
    title: "誓言之后",
    category: "wedding",
    location: "Hangzhou · 2026",
    count: "42 张",
    description: "以婚礼现场的情绪余波为主线，记录仪式之外的手势、眼神和人与人之间的靠近。",
    cover: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=84",
  },
  {
    id: "metal-surface",
    title: "金属表面",
    category: "product",
    location: "Brand Studio · 2026",
    count: "10 张",
    description: "商业静物项目，重点处理材质反光、边缘轮廓和品牌调性。",
    cover: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1800&q=84",
  },
  {
    id: "forest-route",
    title: "森林路径",
    category: "documentary",
    location: "Forest · 2025",
    count: "14 张",
    description: "以步行路线为线索的纪实项目，记录自然空间中的方向感、光斑和人的临时停留。",
    cover: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1800&q=84",
  },
  {
    id: "city-and-sea",
    title: "山海之间",
    category: "mixed",
    location: "Xiamen · 2026",
    count: "21 张",
    description: "把风景、人像和城市记忆放入同一个项目，用海岸线连接地点、人物和日常事件。",
    cover: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=84",
  },
  {
    id: "mountain-night",
    title: "山地夜色",
    category: "landscape",
    location: "Mountain · 2025",
    count: "8 张",
    description: "以星空和山体暗部为主体，探索低光环境里风景照片的静物感与空间深度。",
    cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=84",
  },
];

const workGroups = {
  wild: "山野自然",
  city: "城市人文",
  creative: "光彩创意",
};

const projectGroupById = {
  "silent-ridges": "wild",
  "morning-lake": "wild",
  "forest-route": "wild",
  "mountain-night": "wild",
  "window-portrait": "city",
  "night-corners": "city",
  "city-and-sea": "city",
  "after-vows": "creative",
  "metal-surface": "creative",
};

let photos = [
  ["landscape", "群山薄雾", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=84", "tall"],
  ["landscape", "荒原公路", "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=84", "wide"],
  ["landscape", "海岸晨光", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=84", "wide"],
  ["landscape", "山地星空", "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=84", "wide"],
  ["landscape", "森林路径", "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=84", "tall"],
  ["landscape", "绿地日落", "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=84", "wide"],
  ["landscape", "湖中船影", "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=84", "wide"],
  ["landscape", "山脉远景", "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=84", "wide"],
  ["portrait", "窗边肖像", "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1200&q=84", "tall"],
  ["portrait", "低调肖像", "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=84", "tall"],
  ["portrait", "自然光侧影", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1200&q=84", "tall"],
  ["street", "霓虹街角", "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=84", "wide"],
  ["street", "城市立面", "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=84", "tall"],
  ["street", "雨夜反光", "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=84", "wide"],
  ["wedding", "誓言之后", "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=84", "tall"],
  ["wedding", "花束细节", "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=84", "tall"],
  ["wedding", "仪式光线", "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=84", "wide"],
  ["product", "腕表轮廓", "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=84", "wide"],
  ["product", "器皿静物", "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=84", "tall"],
  ["product", "品牌材质", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=84", "wide"],
  ["documentary", "林间行走", "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=84", "tall"],
  ["documentary", "瀑布桥面", "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=84", "tall"],
  ["mixed", "山海之间", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=84", "wide"],
  ["mixed", "城市与远方", "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=84", "wide"],
].map(([category, title, src, ratio]) => ({ category, title, src, ratio }));

const topicCopy = {
  nature: "山野、海岸、湖泊与季节光线构成的自然影像档案。",
  city: "街道、建筑、灯光与人群移动之间的城市节奏。",
  people: "人物、现场与真实关系共同组成的纪实肖像。",
  events: "活动、会议与集体现场中的秩序、表情和瞬间。",
};

function hydratePortfolioFromPhotoLibrary() {
  const topics = window.PHOTO_LIBRARY?.topics;
  if (!topics) return;
  const libraryProjects = window.PHOTO_LIBRARY?.projects;

  categoryInfo = {};
  projects = [];
  photos = [];

  Object.entries(topics).forEach(([key, topic]) => {
    if (!topic.photos?.length) return;

    const cover = topic.photos[0];
    categoryInfo[key] = {
      label: topic.label,
      title: topic.title,
      intro: topicCopy[key] || `${topic.label}分类作品，共 ${topic.count} 张。`,
      hero: cover.src,
    };

    projects.push({
      id: `topic-${key}`,
      title: topic.title,
      category: key,
      location: "本地图库",
      count: `${topic.count} 张`,
      description: topicCopy[key] || `${topic.label}分类作品，共 ${topic.count} 张。`,
      cover: cover.src,
    });

    photos.push(
      ...topic.photos.map((photo) => ({
        ...photo,
        category: key,
        title: photo.title || photo.filename,
        src: photo.src,
        ratio: photo.ratio || "standard",
      }))
    );
  });

  if (libraryProjects) {
    projects = Object.values(libraryProjects)
      .filter((project) => project.photos?.length)
      .map((project) => ({
        id: project.id || project.key,
        title: project.title || project.label,
        category: project.id || project.key,
        location: project.chapters?.length ? project.chapters.join(" / ") : "本地项目",
        count: `${project.count} 张`,
        description: project.intro || `${project.label || project.title}，共 ${project.count} 张作品。`,
        cover: project.cover || project.photos[0]?.src,
        photos: project.photos.map((photo) => ({
          ...photo,
          category: project.id || project.key,
          categoryLabel: project.label || project.title,
          title: photo.title || photo.filename,
          src: photo.src,
          ratio: photo.ratio || "standard",
        })),
        groupLabel: "沉浸式作品集",
      }));
  }
}

hydratePortfolioFromPhotoLibrary();

const params = new URLSearchParams(window.location.search);
const categoryKey = params.get("category") || "nature";
const projectId = params.get("project");
const selectedProject = projects.find((project) => project.id === projectId);
const selectedCategory = selectedProject ? selectedProject.category : categoryKey;
const fallbackCategory = categoryInfo[selectedCategory] ? selectedCategory : Object.keys(categoryInfo)[0];
const activeCategory = categoryInfo[fallbackCategory];

const hero = document.querySelector("#portfolioHero");
const eyebrow = document.querySelector("#portfolioEyebrow");
const title = document.querySelector("#portfolioTitle");
const intro = document.querySelector("#portfolioIntro");
const tabs = document.querySelector("#topicTabs");
const summary = document.querySelector("#portfolioSummary");
const gallery = document.querySelector("#portfolioGallery");
const lightbox = document.querySelector("#portfolioLightbox");
const imageStage = document.querySelector("#portfolioImageStage");
const lightboxImage = document.querySelector("#portfolioLightboxImage");
const lightboxTitle = document.querySelector("#portfolioLightboxTitle");
const lightboxMeta = document.querySelector("#portfolioLightboxMeta");
const lightboxCounter = document.querySelector("#portfolioLightboxCounter");
const ratingPanel = document.querySelector("#portfolioRating");
const ratingAverage = document.querySelector("#portfolioRatingAverage");
const ratingSummary = document.querySelector("#portfolioRatingSummary");
const fullscreenButton = document.querySelector("#portfolioFullscreen");
const zoomButton = document.querySelector("#portfolioZoom");
let visiblePhotos = [];
let activeLightboxIndex = 0;
let lightboxRenderToken = 0;
let wheelLocked = false;
let zoomed = false;
let zoomOrigin = { x: 50, y: 50 };
let zoomOffset = { x: 0, y: 0 };
let dragState = null;

function imageForLargeView(src) {
  return src.replace(/w=\d+/, "w=1800");
}

function shufflePhotos(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const nextIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[nextIndex]] = [shuffled[nextIndex], shuffled[index]];
  }
  return shuffled;
}

function formatPhotoMeta(photo) {
  const values = [
    photo.chapter,
    photo.categoryLabel || categoryInfo[photo.category]?.label,
    photo.time,
    photo.camera,
    [photo.focalLength, photo.aperture, photo.shutter, photo.iso].filter(Boolean).join(" · "),
    photo.location ? `地点 ${photo.location}` : "",
  ].filter(Boolean);
  return values.join(" / ");
}

function getPhotoStorageKey(photo) {
  return `linyu-photo-rating:${photo.id || photo.src || photo.title}`;
}

function hashPhotoSeed(photo) {
  const text = photo.id || photo.src || photo.title || "photo";
  let hash = 0;
  for (let index = 0; index < text.length; index += 1) {
    hash = (hash * 31 + text.charCodeAt(index)) >>> 0;
  }
  return hash;
}

function getBaseRatingStats(photo) {
  const seed = hashPhotoSeed(photo);
  const count = 36 + (seed % 168);
  const average = 4.18 + ((seed >> 3) % 62) / 100;
  return {
    count,
    total: average * count,
  };
}

function getStoredRating(photo) {
  const value = Number(localStorage.getItem(getPhotoStorageKey(photo)));
  return Number.isFinite(value) ? value : 0;
}

function getRatingStats(photo) {
  const base = getBaseRatingStats(photo);
  const userRating = getStoredRating(photo);
  const count = base.count + (userRating ? 1 : 0);
  const total = base.total + userRating;
  return {
    count,
    average: total / count,
    userRating,
  };
}

function setPhotoRating(photo, rating) {
  localStorage.setItem(getPhotoStorageKey(photo), rating.toString());
}

function renderRating(photo, changedRating = 0) {
  const stats = getRatingStats(photo);
  ratingPanel.classList.remove("rating-just-changed");
  ratingPanel.querySelectorAll("button").forEach((button) => {
    const value = Number(button.dataset.rating);
    button.classList.remove("just-rated");
    button.classList.toggle("active", value <= stats.userRating);
    button.setAttribute("aria-checked", value === stats.userRating ? "true" : "false");
    button.setAttribute("role", "radio");
  });

  ratingAverage.textContent = stats.average.toFixed(1);
  ratingSummary.textContent = `${stats.count} 人评价后的均分`;

  if (changedRating) {
    void ratingPanel.offsetWidth;
    ratingPanel.classList.add("rating-just-changed");
    ratingPanel.querySelectorAll("button").forEach((button) => {
      const value = Number(button.dataset.rating);
      if (value <= changedRating) {
        button.classList.add("just-rated");
      }
    });
  }
}

function updateZoom() {
  lightbox.classList.toggle("is-zoomed", zoomed);
  zoomButton.classList.toggle("active", zoomed);
  zoomButton.setAttribute("aria-pressed", zoomed ? "true" : "false");
  lightboxImage.style.transformOrigin = `${zoomOrigin.x}% ${zoomOrigin.y}%`;
  lightboxImage.style.transform = zoomed
    ? `translate3d(${zoomOffset.x}px, ${zoomOffset.y}px, 0) scale(2.15)`
    : "";
}

function resetZoom() {
  zoomed = false;
  zoomOrigin = { x: 50, y: 50 };
  zoomOffset = { x: 0, y: 0 };
  dragState = null;
  updateZoom();
}

function setZoomFromEvent(event) {
  const bounds = imageStage.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) / bounds.width) * 100;
  const y = ((event.clientY - bounds.top) / bounds.height) * 100;
  zoomOrigin = {
    x: Math.min(100, Math.max(0, x)),
    y: Math.min(100, Math.max(0, y)),
  };
  zoomOffset = { x: 0, y: 0 };
}

function toggleZoom(event) {
  if (!zoomed && typeof event?.clientX === "number") {
    setZoomFromEvent(event);
  }
  zoomed = !zoomed;
  if (!zoomed) {
    zoomOffset = { x: 0, y: 0 };
  }
  updateZoom();
}

function openLightboxAt(index) {
  if (!visiblePhotos.length) return;
  lightboxRenderToken += 1;
  const renderToken = lightboxRenderToken;
  activeLightboxIndex = (index + visiblePhotos.length) % visiblePhotos.length;
  const photo = visiblePhotos[activeLightboxIndex];
  if (!photo) return;

  resetZoom();
  lightboxImage.classList.remove("is-loaded");
  lightboxImage.onload = () => {
    if (renderToken !== lightboxRenderToken) return;
    lightboxImage.classList.add("is-loaded");
  };
  lightboxImage.src = imageForLargeView(photo.src);
  lightboxImage.alt = photo.title;
  if (lightboxImage.complete) {
    lightboxImage.onload();
  }
  lightboxTitle.textContent = photo.title;
  lightboxMeta.textContent = formatPhotoMeta(photo);
  lightboxCounter.textContent = `${activeLightboxIndex + 1} / ${visiblePhotos.length}`;
  renderRating(photo);

  if (!lightbox.open) {
    lightbox.showModal();
  }
}

function changeLightboxPhoto(step) {
  openLightboxAt(activeLightboxIndex + step);
}

function setFullscreenState(active) {
  lightbox.classList.toggle("is-fullscreen", active);
  fullscreenButton.classList.toggle("active", active);
  fullscreenButton.setAttribute("aria-pressed", active ? "true" : "false");
  fullscreenButton.title = active ? "退出全屏" : "全屏观看";
}

async function exitFullscreenView() {
  if (document.fullscreenElement) {
    await document.exitFullscreen();
    return;
  }
  setFullscreenState(false);
}

async function enterFullscreenView() {
  try {
    if (lightbox.requestFullscreen) {
      await lightbox.requestFullscreen();
      setFullscreenState(document.fullscreenElement === lightbox);
      if (document.fullscreenElement === lightbox) return;
    }
  } catch (error) {
    console.warn("Fullscreen request was not completed. Using in-page fullscreen instead.", error);
  }

  setFullscreenState(true);
}

function getProjectGroup(project) {
  if (project.groupLabel) {
    return {
      key: project.id,
      label: project.groupLabel,
    };
  }
  const groupKey = projectGroupById[project.id] || "wild";
  return {
    key: groupKey,
    label: workGroups[groupKey],
  };
}

function renderTabs() {
  if (selectedProject) {
    tabs.innerHTML = projects
      .map((project) => {
        const active = project.id === selectedProject.id ? "active" : "";
        return `<a class="${active}" href="portfolio.html?project=${project.id}">${project.title}</a>`;
      })
      .join("");
    return;
  }

  tabs.innerHTML = Object.entries(categoryInfo)
    .map(([key, item]) => {
      const active = key === fallbackCategory ? "active" : "";
      return `<a class="${active}" href="portfolio.html?category=${key}">${item.label}</a>`;
    })
    .join("");
}

function getVisiblePhotos() {
  if (!selectedProject) {
    return shufflePhotos(photos.filter((photo) => photo.category === fallbackCategory));
  }

  return shufflePhotos(selectedProject.photos || []);
}

function renderPage() {
  visiblePhotos = getVisiblePhotos();
  const heroPhoto = selectedProject
    ? visiblePhotos.find((photo) => photo.src === selectedProject.cover) || visiblePhotos[0]
    : visiblePhotos[Math.floor(Math.random() * visiblePhotos.length)];
  const heroImage = heroPhoto?.src || activeCategory.hero;
  const projectGroup = selectedProject ? getProjectGroup(selectedProject) : null;
  hero.style.setProperty("--portfolio-hero-image", `url("${heroImage}")`);
  eyebrow.textContent = selectedProject ? `Selected Project · ${projectGroup.label}` : "Topic Collection";
  title.textContent = selectedProject ? selectedProject.title : activeCategory.title;
  intro.textContent = selectedProject ? selectedProject.description : activeCategory.intro;

  summary.innerHTML = selectedProject
    ? `
      <span>${projectGroup.label}</span>
      <strong>${selectedProject.location}</strong>
      <em>${selectedProject.count}</em>
    `
    : `
      <span>${activeCategory.label}</span>
      <strong>${visiblePhotos.length} 张作品</strong>
      <em>按分类整理</em>
    `;

  gallery.innerHTML = visiblePhotos
    .map(
      (photo, index) => `
        <button class="masonry-photo ${photo.ratio}" type="button" data-index="${index}">
          <img src="${photo.src}" alt="${photo.title}" loading="lazy">
        </button>
      `
    )
    .join("");
}

renderTabs();
renderPage();

gallery.addEventListener("click", (event) => {
  const card = event.target.closest(".masonry-photo");
  if (!card) return;

  openLightboxAt(Number(card.dataset.index));
});

document.querySelector(".close-lightbox").addEventListener("click", () => lightbox.close());

fullscreenButton.addEventListener("click", async () => {
  if (document.fullscreenElement === lightbox || lightbox.classList.contains("is-fullscreen")) {
    await exitFullscreenView();
    return;
  }

  await enterFullscreenView();
});

zoomButton.addEventListener("click", () => toggleZoom());

imageStage.addEventListener("dblclick", (event) => {
  event.preventDefault();
  toggleZoom(event);
});

imageStage.addEventListener("pointerdown", (event) => {
  if (!zoomed || event.button !== 0) return;
  event.preventDefault();
  dragState = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    offsetX: zoomOffset.x,
    offsetY: zoomOffset.y,
  };
  imageStage.setPointerCapture(event.pointerId);
});

imageStage.addEventListener("pointermove", (event) => {
  if (!dragState || event.pointerId !== dragState.pointerId) return;
  zoomOffset = {
    x: dragState.offsetX + event.clientX - dragState.startX,
    y: dragState.offsetY + event.clientY - dragState.startY,
  };
  updateZoom();
});

function stopDragging(event) {
  if (!dragState || event.pointerId !== dragState.pointerId) return;
  dragState = null;
  if (imageStage.hasPointerCapture(event.pointerId)) {
    imageStage.releasePointerCapture(event.pointerId);
  }
}

imageStage.addEventListener("pointerup", stopDragging);
imageStage.addEventListener("pointercancel", stopDragging);

document.addEventListener("fullscreenchange", () => {
  setFullscreenState(document.fullscreenElement === lightbox);
});

lightbox.addEventListener("close", () => {
  resetZoom();
  setFullscreenState(false);
  if (document.fullscreenElement === lightbox) {
    document.exitFullscreen().catch(() => {});
  }
});

ratingPanel.addEventListener("click", (event) => {
  const button = event.target.closest("[data-rating]");
  if (!button) return;
  const photo = visiblePhotos[activeLightboxIndex];
  const rating = Number(button.dataset.rating);
  setPhotoRating(photo, rating);
  renderRating(photo, rating);
});

lightbox.addEventListener(
  "wheel",
  (event) => {
    if (!lightbox.open || wheelLocked) return;
    event.preventDefault();
    if (zoomed) return;

    const direction = event.deltaY > 0 ? 1 : -1;
    wheelLocked = true;
    changeLightboxPhoto(direction);
    window.setTimeout(() => {
      wheelLocked = false;
    }, 280);
  },
  { passive: false }
);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.open) {
    lightbox.close();
  }
  if (!lightbox.open) return;
  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    changeLightboxPhoto(1);
  }
  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    changeLightboxPhoto(-1);
  }
});
