const optionMenus = document.querySelectorAll(".select-menu");

optionMenus.forEach(optionMenu => {
    const selectBtn = optionMenu.querySelector(".select-btn");
    const options = optionMenu.querySelectorAll(".option");
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