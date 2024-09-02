const tab_btn = document.querySelectorAll(".tab-btn");
const screenWidth = window.innerWidth;
const login_link = document.getElementById('login-link');

tab_btn.forEach((tab) => {
    tab.addEventListener("click", () => {
        tab_btn.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        // 這裡可以加入切換不同表單的邏輯
    });
});
// 按註冊改login-button的文字變成下一步
const tab_btn_login = document.getElementById("tab-btn-login");
const tab_btn_logout = document.getElementById("tab-btn-logout");
const loginButton = document.getElementById("loginButton");
const forgot_password = document.getElementById("forgot-password");
const privacy_content = document.getElementById("privacy-content");
tab_btn_logout.addEventListener("click", () => {
    forgot_password.style.display = "none";
    privacy_content.style.display = "flex";
    if (loginButton.textContent === "登入") {
        loginButton.textContent = "點此註冊";
    }
});
// 按登入改login-button的文字變成登入
tab_btn_login.addEventListener("click", () => {
    forgot_password.style.display = "block";
    privacy_content.style.display = "none";
    if (loginButton.textContent === "點此註冊") {
        loginButton.textContent = "登入";
    }
});

// 獲取元素
const bars_btn = document.getElementsByClassName("bars-btn")[0];
const login_container = document.getElementById("login-container");
const overlay = document.getElementById("overlay");
// 點擊登入按鈕時顯示登入框
bars_btn.addEventListener("click", () => {
    login_container.style.display = "block";
    overlay.style.display = "block";
});

// 點擊背景區域隱藏登入框
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        login_container.style.display = "none";
        overlay.style.display = "none";
    }
});
// 用戶點擊下一步時跳轉頁面
loginButton.addEventListener("click", (e) => {
    if (loginButton.textContent === "點此註冊") {
        e.preventDefault(); // 阻止表單的默認提交行為
        window.location.href = "https://www.google.com";
    }
});
const facebook_login = document.getElementById("facebook-login");
const google_login = document.getElementById("google-login");
facebook_login.addEventListener("click", (e) => {
    e.preventDefault(); // 阻止表單的默認提交行為
    window.location.href = "https://www.facebook.com";
});
google_login.addEventListener("click", (e) => {
    e.preventDefault(); // 阻止表單的默認提交行為
    window.location.href = "https://www.google.com";
});


let bars = document.getElementById('bars');
let navbar = document.querySelector('.navigation');
let cross = document.getElementById('menu-bars');

// navbar導覽列隱藏/顯示
bars.addEventListener('click', () => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) {
        login_container.style.display = "block";
        overlay.style.display = "block";
    }

    cross.classList.toggle('fa-bars');
    cross.classList.toggle('fa-x');
    bars.classList.toggle('active');
    navbar.classList.toggle('active');

});

document.addEventListener('DOMContentLoaded', adjustNavigation);
window.addEventListener('resize', adjustNavigation);

function adjustNavigation() {
    const navigation = document.querySelector('.navigation');
    const loginLink = document.querySelector('.navigation .nav-menu.login-link');
    const screenWidth = window.innerWidth;

    // <=768時
    if (screenWidth <= 768) {
        if (!loginLink) {
            // 增加連結
            const newLink = document.createElement('a');
            newLink.href = '#';
            newLink.className = 'nav-menu login-link'; // 添加 class
            newLink.id = 'login-link'; // 添加 id
            newLink.textContent = '登入';
            navigation.appendChild(newLink); // 插入到 navigation 中

            // 顯示登入&遮罩
            newLink.addEventListener('click', (e) => {
                e.preventDefault(); // 防止跳轉
                login_container.style.display = "block";
                overlay.style.display = "block";
                navbar.classList.remove('active')
                cross.classList.remove('fa-x');
                cross.classList.toggle('fa-bars');
                bars.classList.remove('active');
            });
        }
    } else {
        if (loginLink) {
            // 移除登入
            navigation.removeChild(loginLink);
        }
    }
}

// navbar
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

// new登入註冊狀態變成會員中心
const loginBtn = document.getElementById('loginButton');
const span = bars.querySelector('span');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    span.textContent = '會員中心';

    // gif
    const loaderContainer = document.querySelector('.loader-container');
    loaderContainer.classList.add('show');

    setTimeout(() => {
        loaderContainer.classList.remove('show');
    }, 2000);

    login_container.style.display = "none";
    overlay.style.display = "none";
});

// 改變連結
bars.addEventListener('click', (event) => {
    if (span.textContent === '會員中心') {
        const link = document.createElement('a');
        link.href = "/member.html";
        link.classList.add('member-link');

        // a標籤
        link.appendChild(span);

        // a標籤插入bars中
        bars.insertBefore(link, bars.firstChild);

        event.stopPropagation();
    }
});