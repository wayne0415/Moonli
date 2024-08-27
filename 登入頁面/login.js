const tabs = document.querySelectorAll(".tabs button");
const loginButton = document.querySelector(".login-button");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        // 這裡可以加入切換不同表單的邏輯
    });
});
// 按註冊改login-button的文字變成下一步
const loginButton_changeName = document.getElementById("login-button");
const reg_btn = document.getElementById("reg-btn");
const loginButton1 = document.getElementById("login-button1");
reg_btn.addEventListener("click", () => {
    if (loginButton.textContent === "登入") {
        loginButton.textContent = "下一步";
    }
});
// 按登入改login-button的文字變成登入
loginButton1.addEventListener("click", () => {
    if (loginButton.textContent === "下一步") {
        loginButton.textContent = "登入";
    }
});
