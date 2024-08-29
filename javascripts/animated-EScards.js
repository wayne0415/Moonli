$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,                // 循環播放
        margin: 20,                // 設置卡片之間的間距
        center: true,              // 中央卡片居中
        items: 3,                  // 每次顯示三張卡片
        autoplay: true,            // 自動播放
        autoplayTimeout: 5000,     // 自動播放間隔
        autoplayHoverPause: true,  // 懸停時暫停播放
        responsive: {
            0: {
                items: 1           // 小屏幕上顯示 1 張卡片
            },
            600: {
                items: 2           // 中屏幕上顯示 2 張卡片
            },
            1000: {
                items: 3           // 大屏幕上顯示 3 張卡片
            }
        }
    });
});