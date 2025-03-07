// مطمئن می‌شویم که اسکریپت پس از بارگذاری کامل صفحه اجرا شود
window.addEventListener('DOMContentLoaded', () => {
    // ترتیب صفحات: [بازی‌های فکری (index 0), کافی شاپ (index 1), گیم نت (index 2)]
    let currentIndex = 1; // صفحه اولیه: کافی شاپ (وسط)
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
  
    // به‌روزرسانی نمایش دکمه‌ها بر اساس صفحه فعلی
    function updateArrows() {
      const arrowLeft = document.getElementById('arrowLeft');
      const arrowRight = document.getElementById('arrowRight');
  
      if (currentIndex === 0) { // اولین صفحه: بازی‌های فکری
        arrowLeft.classList.add('hidden');
        arrowRight.classList.remove('hidden');
      } else if (currentIndex === totalPages - 1) { // آخرین صفحه: گیم نت
        arrowRight.classList.add('hidden');
        arrowLeft.classList.remove('hidden');
      } else { // صفحه وسط: کافی شاپ
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
  
    // رویداد سوئیچ تب‌ها در منوهای پایین صفحه
    document.querySelectorAll('.page-tabs .tab').forEach(tab => {
      tab.addEventListener('click', function() {
        const parent = this.closest('ul');
        parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        // در صورت نیاز می‌توان محتوای بخش .page-content را بر اساس تب تغییر داد
      });
    });
  
    // تنظیم اولیه
    updatePage();
  });
  