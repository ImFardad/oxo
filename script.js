let currentIndex = 1; // صفحه مرکزی (کافی شاپ)
const container = document.getElementById('pagesContainer');
const totalPages = 3;

// به‌روزرسانی انیمیشن انتقال و افکت fade-in
function updatePage() {
  const offset = -currentIndex * window.innerWidth;
  container.style.transform = `translateX(${offset}px)`;
  updateActivePage();
}

// اعمال کلاس active به صفحه فعلی برای افکت fade-in
function updateActivePage() {
  const pages = document.querySelectorAll('.page');
  pages.forEach((page, index) => {
    if (index === currentIndex) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
}

// رویداد کلیک فلش چپ (جهت بازی‌های فکری)
document.getElementById('arrowLeft').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updatePage();
  }
});

// رویداد کلیک فلش راست (جهت گیم نت)
document.getElementById('arrowRight').addEventListener('click', () => {
  if (currentIndex < totalPages - 1) {
    currentIndex++;
    updatePage();
  }
});

// به‌روزرسانی موقعیت در تغییر اندازه صفحه
window.addEventListener('resize', updatePage);

// تنظیم اولیه
updatePage();
