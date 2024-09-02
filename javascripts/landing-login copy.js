// 獲取元素
const tab_btn = document.querySelectorAll(".tab-btn");
const login_link = document.getElementById("login-link");
const tab_btn_login = document.getElementById("tab-btn-login");
const tab_btn_logout = document.getElementById("tab-btn-logout");
const loginButton = document.getElementById("loginButton");
const forgot_password = document.getElementById("forgot-password");
const privacy_content = document.getElementById("privacy-content");
const bars_btn = document.getElementsByClassName("bars-btn")[0];
const login_container = document.getElementById("login-container");
const overlay = document.getElementById("overlay");
const facebook_login = document.getElementById("facebook-login");
const google_login = document.getElementById("google-login");
let bars = document.getElementById("bars");
let navbar = document.querySelector(".navigation");
let cross = document.getElementById("menu-bars");
let lastScrollTop = 0;
const header = document.querySelector("header");
const memberCenterSpan = bars.querySelector("span");

// Tab 切換邏輯
tab_btn.forEach((tab) => {
    tab.addEventListener("click", () => {
        tab_btn.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
    });
});

// 按註冊改 login-button 的文字變成 "下一步"
tab_btn_logout.addEventListener("click", () => {
    forgot_password.style.display = "none";
    privacy_content.style.display = "flex";
    if (loginButton.textContent === "登入") {
        loginButton.textContent = "下一步";
    }
});

// 按登入改 login-button 的文字變成 "登入"
tab_btn_login.addEventListener("click", () => {
    forgot_password.style.display = "block";
    privacy_content.style.display = "none";
    if (loginButton.textContent === "下一步") {
        loginButton.textContent = "登入";
    }
});

// 點擊 bars 顯示登入框
bars.addEventListener("click", () => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) {
        login_container.style.display = "block";
        overlay.style.display = "block";
    }

    cross.classList.toggle("fa-bars");
    cross.classList.toggle("fa-x");
    bars.classList.toggle("active");
    navbar.classList.toggle("active");
});

// 點擊背景區域隱藏登入框
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        login_container.style.display = "none";
        overlay.style.display = "none";
        bars.classList.remove("active");
    }
});

// 用戶點擊 "下一步" 時跳轉頁面
loginButton.addEventListener("click", (e) => {
    if (loginButton.textContent === "下一步") {
        e.preventDefault();
        window.location.href = "./member.html";
    }
});

// Facebook 和 Google 登入
facebook_login.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "https://www.facebook.com";
});

google_login.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "https://www.google.com";
});

// 簡單的導覽列自適應邏輯
document.addEventListener("DOMContentLoaded", adjustNavigation);
window.addEventListener("resize", adjustNavigation);

function adjustNavigation() {
    const loginLink = document.querySelector(".navigation .nav-menu.login-link");
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768 && !loginLink) {
        const newLink = document.createElement("a");
        newLink.href = "#";
        newLink.className = "nav-menu login-link";
        newLink.id = "login-link";
        newLink.textContent = "登入";
        navbar.appendChild(newLink);

        newLink.addEventListener("click", (e) => {
            e.preventDefault();
            login_container.style.display = "block";
            overlay.style.display = "block";
            navbar.classList.remove("active");
            cross.classList.remove("fa-x");
            cross.classList.toggle("fa-bars");
            bars.classList.remove("active");
        });
    } else if (screenWidth > 768 && loginLink) {
        navbar.removeChild(loginLink);
    }
}

// 隱藏/顯示導覽列
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.style.top = "-100px";
    } else {
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

// 新登入狀態變成會員中心
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    memberCenterSpan.textContent = "會員中心";

    const loaderContainer = document.querySelector(".loader-container");
    loaderContainer.classList.add("show");

    setTimeout(() => {
        loaderContainer.classList.remove("show");
    }, 2000);

    login_container.style.display = "none";
    overlay.style.display = "none";
});

// 改變 bars 內的連結
bars.addEventListener("click", (event) => {
    if (memberCenterSpan.textContent === "會員中心" && !bars.querySelector(".member-link")) {
        const link = document.createElement("a");
        link.href = "/member.html";
        link.classList.add("member-link");

        link.appendChild(memberCenterSpan);
        bars.insertBefore(link, bars.firstChild);

        event.stopPropagation();
    }
});
