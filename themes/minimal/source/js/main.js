(() => {
  const backgroundImages = window.__BLOG_BACKGROUND_IMAGES__ || [];
  const backgroundInterval = Number(window.__BLOG_BACKGROUND_INTERVAL__) || 60000;
  const fadeDuration = Number(window.__BLOG_BACKGROUND_FADE_DURATION__) || 1500;

  if (backgroundImages.length > 1) {
    let index = 0;
    let isFading = false;

    backgroundImages.slice(1).forEach((src) => {
      const image = new Image();
      image.src = src;
    });

    const switchBackground = () => {
      if (isFading) return;

      isFading = true;
      index = (index + 1) % backgroundImages.length;
      const nextImage = backgroundImages[index];
      const preload = new Image();

      preload.onload = () => {
        document.documentElement.style.setProperty("--site-bg-next-image", `url("${nextImage}")`);
        document.documentElement.style.setProperty("--site-bg-next-opacity", "1");

        window.setTimeout(() => {
          document.documentElement.style.setProperty("--site-bg-image", `url("${nextImage}")`);
          document.documentElement.style.setProperty("--site-bg-next-opacity", "0");
          isFading = false;
        }, fadeDuration);
      };

      preload.onerror = () => {
        isFading = false;
      };

      preload.src = nextImage;
    };

    window.setInterval(switchBackground, backgroundInterval);
  }
})();

(() => {
  const headings = [...document.querySelectorAll(".article-content h2[id], .article-content h3[id]")];
  const links = [...document.querySelectorAll(".toc-link")];

  if (!headings.length || !links.length) return;

  const byId = new Map(links.map((link) => [decodeURIComponent(link.hash.slice(1)), link]));

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

    if (!visible) return;

    links.forEach((link) => link.classList.remove("is-active"));
    byId.get(visible.target.id)?.classList.add("is-active");
  }, {
    rootMargin: "-12% 0px -72% 0px",
    threshold: 0
  });

  headings.forEach((heading) => observer.observe(heading));
})();
