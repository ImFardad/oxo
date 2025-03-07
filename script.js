let currentPage = 1; // 0: puzzle, 1: cafe, 2: gamnet
const pages = document.getElementById('pagesWrapper');
const header = document.getElementById('main-header');

function updateTheme() {
  const themes = ['puzzle', 'cafe', 'gamnet'];
  document.body.className = themes[currentPage] + '-theme';
  header.style.backgroundColor = getComputedStyle(document.body)
    .getPropertyValue('--' + themes[currentPage] + '-secondary');
}

function movePage(direction) {
  if(direction === 'right' && currentPage < 2) currentPage++;
  if(direction === 'left' && currentPage > 0) currentPage--;
  
  pages.style.transform = `translateX(${currentPage * -100}vw)`;
  updateTheme();
}

// مدیریت کلیک منو
document.querySelectorAll('nav a').forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = index;
    movePage('');
  });
});

// مدیریت تب‌ها
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    this.parentElement.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

// اسکریپت کنترل صفحات
function updatePage() {
  pagesWrapper.style.transform = `translateX(${currentPage * -100}vw)`;
  document.body.className = ['puzzle', 'cafe', 'gamnet'][currentPage] + '-theme';
}

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const direction = e.target.classList.contains('arrow-right') ? 1 : -1;
    currentPage = Math.max(0, Math.min(2, currentPage + direction));
    updatePage();
  });
});

// تنظیم اولیه
updateTheme();