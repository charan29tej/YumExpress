const body = document.body;
const themeToggleBtn = document.getElementById('theme-toggle');


const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('darkmode');
    themeToggleBtn.textContent = '☀️ Light';
} else {
    themeToggleBtn.textContent = '🌙 Dark';
}

themeToggleBtn.addEventListener('click', () => {
    const isDark = body.classList.toggle('darkmode');

    if (isDark) {
        themeToggleBtn.textContent = '☀️ Light';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleBtn.textContent = '🌙 Dark';
        localStorage.setItem('theme', 'light');
    }
});
