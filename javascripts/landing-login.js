// 獲取元素
const tab_btn = document.querySelectorAll(".tab-btn");
const loginButton = document.getElementById("loginButton");
const forgot_password = document.getElementById("forgot-password");
const privacy_content = document.getElementById("privacy-content");
const bars_btn = document.getElementsByClassName("bars-btn")[0];
const login_container = document.getElementById("login-container");
const overlay = document.getElementById("overlay");
const facebook_login = document.getElementById("facebook-login");
const google_login = document.getElementById("google-login");
const bars = document.getElementById("bars");
const navbar = document.querySelector(".navigation");
const cross = document.getElementById("menu-bars");
const header = document.querySelector("header");
const span = bars.querySelector("span");

// Tab 切換邏輯
tab_btn.forEach((tab) => {
    tab.addEventListener("click", () => {
        tab_btn.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        // 可以在這裡加入切換不同表單的邏輯
    });
});

// 按註冊改 login-button 的文字變成 "下一步"
document.getElementById("tab-btn-logout").addEventListener("click", () => {
    forgot_password.style.display = "none";
    privacy_content.style.display = "flex";
    if (loginButton.textContent === "登入") {
        loginButton.textContent = "下一步";
    }
});

// 按登入改 login-button 的文字變成 "登入"
document.getElementById("tab-btn-login").addEventListener("click", () => {
    forgot_password.style.display = "block";
    privacy_content.style.display = "none";
    if (loginButton.textContent === "下一步") {
        loginButton.textContent = "登入";
    }
});

// 點擊 bars 顯示登入框
bars_btn.addEventListener("click", () => {
    login_container.style.display = "block";
    overlay.style.display = "block";
});

// 點擊背景區域隱藏登入框
overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        login_container.style.display = "none";
        overlay.style.display = "none";
        bars.classList.remove("active");
    }
});

// 過場動畫跟跳轉頁面
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    span.textContent = "會員中心";
    const loaderContainer = document.querySelector(".loader-container");

    // 顯示加載動畫
    loaderContainer.classList.add("show");

    // 隱藏登錄容器和遮罩
    login_container.style.display = "none";
    overlay.style.display = "none";

    // 使用 Promise 來控制動畫和頁面跳轉
    const animationPromise = new Promise((resolve) => {
        setTimeout(resolve, 2000); // 動畫持續2秒
    });

    animationPromise.then(() => {
        loaderContainer.classList.remove("show");
        if (loginButton.textContent === "下一步") {
            window.location.href = "./member.html";
        }
    });
});

// 用戶點擊 "點此註冊" 時跳轉頁面
// loginButton.addEventListener("click", (e) => {
//     if (loginButton.textContent === "點此註冊") {
//         e.preventDefault();
//         window.location.href = "https://www.google.com";
//     }
// });

// Facebook 和 Google 登入
facebook_login.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "https://www.facebook.com";
});

google_login.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "https://www.google.com";
});

// Navbar 導覽列隱藏/顯示
bars.addEventListener("click", () => {
    if (window.innerWidth > 768) {
        login_container.style.display = "block";
        overlay.style.display = "block";
    }

    cross.classList.toggle("fa-bars");
    cross.classList.toggle("fa-x");
    bars.classList.toggle("active");
    navbar.classList.toggle("active");
});

// 調整導航邏輯
document.addEventListener("DOMContentLoaded", adjustNavigation);
window.addEventListener("resize", adjustNavigation);

function adjustNavigation() {
    const loginLink = document.querySelector(".navigation .nav-menu.login-link");

    if (window.innerWidth <= 768) {
        if (!loginLink) {
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
        }
    } else if (loginLink) {
        navbar.removeChild(loginLink);
    }
}

// 改變 bars 內的連結
bars.addEventListener("click", (event) => {
    if (span.textContent === "會員中心") {
        const link = document.createElement("a");
        link.href = "/member.html";
        link.classList.add("member-link");

        link.appendChild(span);
        bars.insertBefore(link, bars.firstChild);

        event.stopPropagation();
    }
});

// 隱藏/顯示 header 的邏輯
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        header.style.top = "-100px";
    } else {
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;
});
