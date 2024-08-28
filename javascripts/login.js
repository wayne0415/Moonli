const tab_btn = document.querySelectorAll(".tab-btn");

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
tab_btn_logout.addEventListener("click", () => {
    if (loginButton.textContent === "登入") {
        loginButton.textContent = "下一步";
    }
});
// 按登入改login-button的文字變成登入
tab_btn_login.addEventListener("click", () => {
    if (loginButton.textContent === "下一步") {
        loginButton.textContent = "登入";
    }
});

// 獲取元素
const loginBtn = document.getElementById("loginBtn");
const login_container = document.getElementById("login-container");
const body = document.getElementsByTagName("body")[0];
// 點擊登入按鈕時顯示登入框
loginBtn.addEventListener("click", () => {
    login_container.style.display = "block";
});

// 點擊背景區域隱藏登入框
body.addEventListener("click", (e) => {
    if (e.target === body) {
        login_container.style.display = "none";
    }
});
