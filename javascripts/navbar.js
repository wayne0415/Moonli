let bars = document.getElementById('bars');
let navbar = document.querySelector('.navigation'); // 只選取第一個匹配的元素
let cross = document.getElementById('menu-bars');

bars.addEventListener('click', () => {
    cross.classList.toggle('fa-bars');
    cross.classList.toggle('fa-x');

    bars.classList.toggle('active');

    // 對第一個匹配的 .navigation 元素進行操作
    if (navbar) { // 確保 .navigation 元素存在
        navbar.classList.toggle('active');
    }
});

document.addEventListener('DOMContentLoaded', adjustNavigation);
window.addEventListener('resize', adjustNavigation);

function adjustNavigation() {
    const navigation = document.querySelector('.navigation');
    const loginLink = document.querySelector('.navigation .nav-menu.login');
    const screenWidth = window.innerWidth;

    // 如果螢幕寬度小於或等於768px
    if (screenWidth <= 768) {
        if (!loginLink) {
            // 創建新的登入連結
            const newLink = document.createElement('a');
            newLink.href = '#';
            newLink.className='nav-menu'
            newLink.id = 'login-link'; // 添加 id
            newLink.textContent = '登入';
            navigation.appendChild(newLink); // 插入到navigation中

            
        }
    } else {
        if (loginLink) {
            // 移除登入連結
            navigation.removeChild(loginLink);
        }
    }
}

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // 向下滚动时隐藏 header
        header.style.top = '-100px';
    } else {
        // 向上滚动时显示 header
        header.style.top = '0';
    }
    lastScrollTop = scrollTop;
});



