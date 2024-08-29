let stupid_6q = document.getElementById("stupid-6q");
let problems_title = document.getElementById("problems-title");
let fucking_leaf = document.getElementById("fucking-leaf");
let fucking_mountain = document.getElementById("fucking-mountain");
let small_mountain = document.getElementById("small-mountain");
// let text_iphone = document.getElementById("text_iphone");
// let text_iphone_plus = document.getElementById("text_iphone_plus");
// let iphone_14 = document.getElementById("iphone_14");
// let iphone_14_plus = document.getElementById("iphone_14_plus");

// 函數來處理顯示與隱藏
function toggleVisibility(x, y, z, n, element, triggerPoint, scrollPosition) {
    if (scrollPosition > triggerPoint) {
        element.style.opacity = x;
        element.style.transform = `scale(${y})`;
    } else if (scrollPosition <= triggerPoint) {
        element.style.opacity = z;
        element.style.transform = `scale(${n})`;
    }
}

window.addEventListener("scroll", () => {
    // let b = window.innerHeight;
    let a = window.scrollY;
    console.log(a);
    // 呼叫函數來處理 problems_title 和 stupid_6q
    toggleVisibility(1, 1, 0, 0, problems_title, 1500, a);
    toggleVisibility(1, 0.9, 0, 0, stupid_6q, 1700, a);
    if (a > 1950) {
        let offset = a - 1950;
        fucking_leaf.style.bottom = `${offset * 0.1}px`;
        small_mountain.style.bottom = `${offset * 0.1}px`;
    }
    if (a > 1700) {
        let offset = a - 1700;
        fucking_mountain.style.bottom = `${offset * -0.08}px`;
    }

    // btn.style.marginBottom = a * 0.5 + "px";
    // text_big.style.top = a * -0.3 + "px";
});
