// شاخص صفحه فعلی (صفحه کافی شاپ در وسط)
let currentIndex = 1;
const container = document.getElementById('pagesContainer');
const totalPages = 3;

// به‌روزرسانی موقعیت کانتینر و دکمه‌های ناوبری
function updatePage() {
  const offset = -currentIndex * window.innerWidth;
  container.style.transform = `translateX(${offset}px)`;
  updateArrows();
  updateActivePage();
}

// به‌روزرسانی کلاس active برای افکت fade-in
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

// به‌روزرسانی نمایش دکمه‌ها براساس صفحه فعلی
function updateArrows() {
  const arrowLeft = document.getElementById('arrowLeft');
  const arrowRight = document.getElementById('arrowRight');
  
  // صفحه چپ (بازی‌های فکری): چون هیچ صفحه‌ای سمت چپ نیست، فقط دکمه راست نمایش داده می‌شود
  if (currentIndex === 0) {
    arrowLeft.classList.add('hidden');
    arrowRight.classList.remove('hidden');
  }
  // صفحه راست (گیم نت): چون هیچ صفحه‌ای سمت راست نیست، فقط دکمه چپ نمایش داده می‌شود
  else if (currentIndex === totalPages - 1) {
    arrowRight.classList.add('hidden');
    arrowLeft.classList.remove('hidden');
  }
  // در صفحه وسط (کافی شاپ): هر دو دکمه نمایش داده شوند
  else {
    arrowLeft.classList.remove('hidden');
    arrowRight.classList.remove('hidden');
  }
}

// رویداد کلیک دکمه سمت چپ
document.getElementById('arrowLeft').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updatePage();
  }
});

// رویداد کلیک دکمه سمت راست
document.getElementById('arrowRight').addEventListener('click', () => {
  if (currentIndex < totalPages - 1) {
    currentIndex++;
    updatePage();
  }
});

// رویداد تغییر اندازه صفحه
window.addEventListener('resize', updatePage);

// رویداد سوئیچ تب‌ها (برای منوهای پایین هر صفحه)
document.querySelectorAll('.page-tabs .tab').forEach(tab => {
  tab.addEventListener('click', function() {
    const parent = this.closest('ul');
    parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    // در صورت نیاز می‌توان محتوا در بخش .page-content را بر اساس تب تغییر داد
  });
});

// تنظیم اولیه
updatePage();
