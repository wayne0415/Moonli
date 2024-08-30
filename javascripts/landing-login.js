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
// facebook_login.addEventListener("click", (e) => {
//     e.preventDefault(); // 阻止表單的默認提交行為
//     window.location.href = "https://www.facebook.com";
// });
google_login.addEventListener("click", (e) => {
    e.preventDefault(); // 阻止表單的默認提交行為
    window.location.href = "https://www.google.com";
});

// 以下是第三方登入的部分
window.fbAsyncInit = function () {
    FB.init({
        appId: "1178064053494656", // 用你的 App ID 替換
        cookie: true,
        xfbml: true,
        version: "v20.0", // 使用最新的 API 版本
    });

    FB.AppEvents.logPageView();
};

(function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

facebook_login.addEventListener("click", function () {
    FB.login(
        function (response) {
            if (response.status === "connected") {
                // 用戶已登入，處理登入後的邏輯
                console.log("User logged in successfully!");
            } else {
                // 用戶未登入或取消登入
                console.log("User did not log in.");
            }
        },
        { scope: "public_profile,email" }
    ); // 要求的權限
});
function handleCredentialResponse(response) {
    // 解碼 ID token，並處理登入邏輯
    console.log("ID token: " + response.credential);
}
// google
// google_login.addEventListener("click", function (e) {
//     e.preventDefault();
//     google.accounts.id.initialize({
//         client_id: "YOUR_CLIENT_ID", // 用你的 Client ID 替換
//         callback: handleCredentialResponse,
//     });

//     google.accounts.id.prompt(); // 顯示 Google 登入提示框
// });
