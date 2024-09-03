// 選取元素
const bars = document.getElementById("bars");
const navbar = document.querySelector(".navigation");
const cross = document.getElementById("menu-bars");
const header = document.querySelector("header");

// 點擊 bars 切換導航列顯示/隱藏
bars.addEventListener("click", () => {
    cross.classList.toggle("fa-bars");
    cross.classList.toggle("fa-x");
    bars.classList.toggle("active");

    if (navbar) {
        navbar.classList.toggle("active");
    }
});

// DOM 加載完成和視窗大小變化時調整導航列
document.addEventListener("DOMContentLoaded", adjustNavigation);
window.addEventListener("resize", adjustNavigation);

function adjustNavigation() {
    const navigation = document.querySelector(".navigation");
    const loginLink = document.querySelector(".navigation .nav-menu#login-link");
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
        if (!loginLink) {
            // 創建登入連結並插入導航列中
            const newLink = document.createElement("a");
            newLink.href = "#";
            newLink.className = "nav-menu";
            newLink.id = "login-link";
            newLink.textContent = "登入";
            navigation.appendChild(newLink);
        }
    } else if (loginLink) {
        // 移除登入連結
        navigation.removeChild(loginLink);
    }
}

// 滾動時隱藏或顯示 header
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.style.top = "-100px";
    } else {
        header.style.top = "0";
    }

    lastScrollTop = scrollTop;
});
