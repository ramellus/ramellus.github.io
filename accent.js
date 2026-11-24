const accentButtons = [...document.querySelectorAll(".accent-picker__button")];
const accents = ["coral", "lilac", "teal"];
const savedAccent = localStorage.getItem("site-accent-color");
const initialAccent = accents.includes(savedAccent) ? savedAccent : "coral";

function setAccent(accent) {
	document.body.dataset.accentColor = accent;
	localStorage.setItem("site-accent-color", accent);
	accentButtons.forEach(button => {
		button.setAttribute("aria-pressed", String(button.dataset.accent === accent));
	});
}

setAccent(initialAccent);
accentButtons.forEach(button => {
	button.addEventListener("click", () => setAccent(button.dataset.accent));
});
