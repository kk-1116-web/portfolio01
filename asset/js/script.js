document.addEventListener("DOMContentLoaded", () => {
  const workContents = document.querySelectorAll(".work-content, .news-archive");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.2 });

  workContents.forEach((item) => observer.observe(item));
});
workContents.forEach((item, i) => {
  item.style.setProperty("--index", i);
  observer.observe(item);
});
