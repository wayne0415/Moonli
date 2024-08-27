// services modal
const modalViews = document.querySelectorAll('.service__modal');
const modalBtns = document.querySelectorAll('.service__button');
const modalCloses = document.querySelectorAll('#service__modal-close');
const modalContents = document.querySelectorAll('.service__modal-content');

let modal = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalViews) => {
            modalViews.classList.remove('active-modal')
        })
    })
})

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalViews.forEach((modalView) => {
    modalView.addEventListener('click', (e) => {
        if (e.target === modalView) {
            modalView.classList.remove('active-modal');
        }
    });
});
// services modal ends



// weekday active
const weekdays = document.querySelectorAll('.weekday');

weekdays.forEach(day => {
    day.addEventListener('click', function () {
        // 移除所有元素的 active 类
        weekdays.forEach(d => d.classList.remove('active'));

        // 为当前点击的元素添加 active 类
        this.classList.add('active');
    });
});

const time = document.querySelectorAll('.time');

time.forEach(day => {
    day.addEventListener('click', function () {
        // 移除所有元素的 active 类
        time.forEach(d => d.classList.remove('active'));

        // 为当前点击的元素添加 active 类
        this.classList.add('active');
    });
});




// checkbox只能選一個
function onlyOne(checkbox) {
    const checkboxes = document.getElementsByName('reservation');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
}





// RWD移動section

function moveContent() {
    const calendar = document.querySelector('.calendar');
    const style = document.querySelector('.block__content.style');
    const map = document.querySelector('.block__content.map');
    const notice = document.querySelector('.block__content.notice');
    const content = document.querySelector('.content');
    const screenWidth = window.innerWidth;

    // 移动内容到 .content
    if (screenWidth <= 768) {
        if (calendar) content.appendChild(calendar);
        if (style) content.appendChild(style);
        if (map) content.appendChild(map);
        if (notice) content.appendChild(notice);
    } else {
        // 恢复内容到 .info
        const info = document.querySelector('.info');
        if (calendar) info.appendChild(calendar);
        if (style) info.appendChild(style);
        if (map) info.appendChild(map);
        if (notice) info.appendChild(notice);
    }
}


// 获取元素
const profilePhoto = document.querySelector('.profile__photo');
const title = document.querySelector('.content .title');
const info = document.querySelector('.info');

// 函数：移动元素
function moveProfilePhoto() {
    if (window.innerWidth <= 768) {
        // 如果宽度小于等于768px，检查 .title 是否已有 .profile__photo
        if (!title.querySelector('.profile__photo')) {
            // 创建一个新的 div，并将 profilePhoto 移动到新的 div 中
            const newDiv = document.createElement('div');
            newDiv.className = 'profile__photo';
            newDiv.innerHTML = profilePhoto.innerHTML; // 复制内容

            // 将新的 div 添加到 .title 的开头
            title.insertAdjacentElement('afterbegin', newDiv);

            // 从 .info 中移除原始 .profile__photo
            profilePhoto.remove();
        }
    } else {
        // 如果宽度大于768px，将 .profile__photo 移动回原位置
        if (title.querySelector('.profile__photo')) {
            // 移除 .profile__photo 内的内容并移回 .info
            const profilePhotoInTitle = title.querySelector('.profile__photo');
            if (profilePhotoInTitle) {
                // 移回 .info 的开头
                info.insertAdjacentElement('afterbegin', profilePhotoInTitle);
            }
        }
    }
}

// 初次调用函数
moveProfilePhoto();

// 监听窗口大小变化事件
window.addEventListener('resize', moveProfilePhoto);


// 初始化和监听窗口调整事件
moveContent();
window.addEventListener('resize', moveContent);


document.addEventListener('DOMContentLoaded', () => {
    const optionMenus = document.querySelectorAll(".select-menu");

    optionMenus.forEach(optionMenu => {
        const selectBtn = optionMenu.querySelector(".select-btn");
        const options = optionMenu.querySelectorAll(".option-text");
        const sBtn_text = optionMenu.querySelector(".sBtn-text");

        selectBtn.addEventListener("click", () => {
            optionMenu.classList.toggle("active");
        });

        options.forEach(option => {
            option.addEventListener("click", () => {
                let selectedOption = option.innerText;
                sBtn_text.innerText = selectedOption;
                optionMenu.classList.remove("active");
            });
        });
    });
});
