const menuBtn = document.querySelector(".mob-menu-btn");
const mobMenu = document.getElementById("mobNav");
const mobLinks = [...document.querySelectorAll("#mobNav a")];

function openMenu() {
	mobMenu.classList.add("show");
	setTimeout(() => {
		mobMenu.classList.add("open");
	}, 100);
	menuOpened = true;
}

function closeMenu() {
	mobMenu.classList.remove("open");
	setTimeout(() => {
		mobMenu.classList.remove("show");
	}, 100);
	menuOpened = false;
}

let menuOpened = false;

menuBtn.addEventListener("click", (event) => {
	if (menuOpened) {
		closeMenu();
	} else {
		openMenu();
	}
});

mobLinks.forEach((_link) => {
	_link.addEventListener("click", closeMenu);
});
