let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');
let currentTimeDisplay = document.getElementById('currentTime');
let totalTimeDisplay = document.getElementById('totalTime');

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
    // 更新總時長顯示
    totalTimeDisplay.textContent = formatTime(song.duration);
}

function playPause() {
    if (ctrlIcon.classList.contains('fa-pause')) {
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
    } else {
        song.play();
        ctrlIcon.classList.add('fa-pause');
        ctrlIcon.classList.remove('fa-play');
    }
}

setInterval(() => {
    if (!isNaN(song.duration)) {
        progress.value = song.currentTime;
        let percent = (song.currentTime / song.duration) * 100;
        progress.style.background = `linear-gradient(to right, var(--black-600) ${percent}%, var(--black-400) ${percent}%)`;

        // 更新當前播放時間顯示
        currentTimeDisplay.textContent = formatTime(song.currentTime);
    }
}, 500);

progress.onchange = function() {
    song.currentTime = progress.value;
    song.play();
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
}

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}