// Stick navbar to top on scroll
window.onscroll = () => {
	stickNavbar();
};

let navbar = document.getElementById("navbar");
let stickPosition = navbar.offsetTop;

function stickNavbar() {
	if (window.scrollY >= stickPosition) {
		navbar.classList.add("sticky");
	} else {
		navbar.classList.remove("sticky");
	}
}
