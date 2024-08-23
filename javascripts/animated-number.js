const stats = document.querySelectorAll(".number .counter");

stats.forEach(stat => {
	// 正则模式用于将HTML中的输入数字拆分为一个包含数字和非数字的数组
	const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
	const time = 1000;
	let result = [...patt.exec(stat.textContent)];
	let fresh = true;
	let ticks;

	// 移除第一個完整匹配項(我們只需要單獨的匹配組)
	result.shift();
	// 移除未定義的值
	result = result.filter(res => res != null);

	// 清空現有的內容
	while (stat.firstChild) {
		stat.removeChild(stat.firstChild);
	}

	// 重新插入分割后的内容
	for (let res of result) {
		if (isNaN(res)) {
			stat.insertAdjacentHTML("beforeend", `<span>${res}</span>`);
		} else {
			for (let i = 0; i < res.length; i++) {
				stat.insertAdjacentHTML(
					"beforeend",
					`<span data-value="${res[i]}">
						<span>&ndash;</span>
						${Array(parseInt(res[i]) + 1)
							.join(0)
							.split(0)
							.map(
								(x, j) => `
							<span>${j}</span>
						`
							)
							.join("")}
					</span>`
				);
			}
		}
	}

	// 获取所有用于动画的元素
	ticks = [...stat.querySelectorAll("span[data-value]")];

	let activate = () => {
		let top = stat.getBoundingClientRect().top;
		let offset = window.innerHeight * 0.8;

		setTimeout(() => {
			fresh = false;
		}, time);

		if (top < offset) {
			setTimeout(() => {
				for (let tick of ticks) {
					let dist = parseInt(tick.getAttribute("data-value")) + 1;
					tick.style.transform = `translateY(-${dist * 100}%)`;
				}
			}, fresh ? time : 0);
			window.removeEventListener("scroll", activate);
		}
	};
	window.addEventListener("scroll", activate);
	activate();
});
