document.addEventListener('DOMContentLoaded', () => {
  // شماره صفحات: 0: بازی‌های فکری، 1: کافی شاپ (صفحه اولیه)، 2: گیم نت
  let currentPage = 1;
  const pages = document.querySelectorAll('.page');
  
  // نمایش صفحه اولیه
  pages.forEach(page => {
    if (parseInt(page.getAttribute('data-page')) === currentPage) {
      page.classList.add('active');
    } else {
      page.classList.remove('active');
    }
  });
  updateArrows();

  // بروزرسانی نمایش دکمه‌های ناوبری بر اساس صفحه فعلی
  function updateArrows() {
    const arrowLeft = document.getElementById('arrowLeft');
    const arrowRight = document.getElementById('arrowRight');
    if (currentPage === 0) {
      arrowLeft.classList.add('hidden');
      arrowRight.classList.remove('hidden');
    } else if (currentPage === pages.length - 1) {
      arrowRight.classList.add('hidden');
      arrowLeft.classList.remove('hidden');
    } else {
      arrowLeft.classList.remove('hidden');
      arrowRight.classList.remove('hidden');
    }
  }

  // تابع جابجایی صفحه با انیمیشن
  function switchPage(newPage, direction) {
    if (newPage < 0 || newPage >= pages.length) return;
    
    const currentEl = document.querySelector(`.page[data-page="${currentPage}"]`);
    const newEl = document.querySelector(`.page[data-page="${newPage}"]`);
    
    // نمایش صفحه مقصد برای آماده سازی انیمیشن
    newEl.classList.add('active');
    // حذف کلاس‌های انیمیشنی احتمالی
    currentEl.classList.remove('slide-in-left', 'slide-in-right', 'slide-out-left', 'slide-out-right');
    newEl.classList.remove('slide-in-left', 'slide-in-right', 'slide-out-left', 'slide-out-right');
    
    if (direction === 'left') {
      // جهت چپ: صفحه فعلی به راست و صفحه مقصد از چپ وارد می‌شود
      currentEl.classList.add('slide-out-right');
      newEl.classList.add('slide-in-left');
    } else if (direction === 'right') {
      // جهت راست: صفحه فعلی به چپ و صفحه مقصد از راست وارد می‌شود
      currentEl.classList.add('slide-out-left');
      newEl.classList.add('slide-in-right');
    }
    
    // پس از پایان انیمیشن (0.5 ثانیه)، به‌روزرسانی وضعیت
    setTimeout(() => {
      currentEl.classList.remove('active', 'slide-out-right', 'slide-out-left');
      newEl.classList.remove('slide-in-left', 'slide-in-right');
      currentPage = newPage;
      updateArrows();
    }, 500);
  }

  // رویداد کلیک برای دکمه سمت چپ
  document.getElementById('arrowLeft').addEventListener('click', () => {
    if (currentPage > 0) {
      switchPage(currentPage - 1, 'left');
    }
  });

  // رویداد کلیک برای دکمه سمت راست
  document.getElementById('arrowRight').addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
      switchPage(currentPage + 1, 'right');
    }
  });

  // سوئیچ تب‌ها (در منوهای پایین هر صفحه)
  document.querySelectorAll('.page-tabs .tab').forEach(tab => {
    tab.addEventListener('click', function() {
      const parent = this.closest('ul');
      parent.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      // در صورت نیاز، می‌توانید محتوای صفحه را بر اساس تب تغییر دهید.
    });
  });
});
