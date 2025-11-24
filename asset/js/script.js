
// menuの閉開
const menuButtons = document.querySelectorAll('.menu'); // 2つとも取得
const menuInner = document.querySelector('.menu-inner');

menuButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    menuInner.classList.toggle('is-visible');
  });
});

// works
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
workContents.forEach((item, i) => {//コンソールエラーが出ている
  item.style.setProperty("--index", i);
  observer.observe(item);
});

