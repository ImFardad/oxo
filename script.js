// اسکریپت برای تغییر تب‌های هر بخش
document.querySelectorAll('.tab-menu ul li').forEach(tab => {
  tab.addEventListener('click', function() {
    // یافتن بخش والد (صفحه) مربوط به این منو
    const parentSection = this.closest('.page');
    // حذف کلاس active از تمامی تب‌های این منو
    this.parentElement.querySelectorAll('li').forEach(li => li.classList.remove('active'));
    // اضافه کردن کلاس active به تب انتخابی
    this.classList.add('active');
    const tabId = this.getAttribute('data-tab');
    // مخفی کردن تمامی محتواهای تب در این بخش و نمایش تب انتخابی
    parentSection.querySelectorAll('.tab-content .box-grid').forEach(grid => {
      grid.style.display = grid.id === tabId ? 'grid' : 'none';
    });
  });
});
