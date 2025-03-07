// از بارگذاری کامل صفحه مطمئن می‌شویم
window.addEventListener('DOMContentLoaded', () => {
  // شاخص صفحه فعلی (کافی شاپ در وسط)؛
  // ترتیب صفحات: [بازی‌های فکری (index 0), کافی شاپ (index 1), گیم نت (index 2)]
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

    // اگر صفحه فعلی اولین (بازی‌های فکری) باشد، تنها دکمه سمت راست نمایش داده شود
    if (currentIndex === 0) {
      arrowLeft.classList.add('hidden');
      arrowRight.classList.remove('hidden');
    }
    // اگر صفحه فعلی آخرین (گیم نت) باشد، تنها دکمه سمت چپ نمایش داده شود
    else if (currentIndex === totalPages - 1) {
      arrowRight.classList.add('hidden');
      arrowLeft.classList.remove('hidden');
    }
    // در صفحه‌ی وسط (کافی شاپ)، هر دو دکمه نمایش داده شوند
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

  // به‌روزرسانی موقعیت در تغییر اندازه صفحه
  window.addEventListener('resize', updatePage);

  // سوئیچ تب‌ها در منوهای پایین صفحه
  document.querySelectorAll('.page-tabs .tab').forEach(tab => {
    tab.addEventListener('click', function() {
      const parent = this.closest('ul');
      parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      // می‌توانید بر اساس تب انتخابی، محتوای .page-content را تغییر دهید
    });
  });

  // تنظیم اولیه
  updatePage();
});
