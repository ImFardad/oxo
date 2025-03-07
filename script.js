let currentPage = 1; // 0: بازی فکری, 1: کافی شاپ, 2: گیم نت

function updateTheme() {
  const themes = ['puzzle-theme', '', 'gamnet-theme'];
  document.body.className = themes[currentPage];
  
  // آپدیت هدر
  const header = document.querySelector('header');
  header.style.background = `var(--secondary-bg)`;
}

function movePage(direction) {
  const pages = document.getElementById('pagesContainer');
  if(direction === 'right' && currentPage < 2) currentPage++;
  if(direction === 'left' && currentPage > 0) currentPage--;
  
  pages.style.transform = `translateX(${-currentPage * 33.3333}%)`;
  updateTheme();
}

// مدیریت کلیک روی منو
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = parseInt(e.target.dataset.page);
    movePage('');
  });
});

// مدیریت تبها (مانند قبل)
document.querySelectorAll('.tab-menu li').forEach(tab => {
  tab.addEventListener('click', function() {
    // کد مدیریت تبها
  });
});

// تنظیمات اولیه
updateTheme();