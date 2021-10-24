const menu = document.querySelector(".menu"),
	menuA = document.querySelectorAll(".menu > a"),
	rule = document.querySelector(".menu > .rule"),
	rules = document.querySelector(".menu > .rule > .rules"),
	insta = document.querySelector(".fa.fa-instagram"),
	fb = document.querySelector(".fb"),
	logo1 = document.querySelector(".logo1 img"),
	logo2 = document.querySelector(".logo2 img"),
	bar = document.querySelectorAll("button[aria-expanded]>div");
var isScroll = false;
const hackerrankPage = document.querySelector("#hackerrank");
function scrollFunction() {
	90 < document.body.scrollTop || 90 < document.documentElement.scrollTop
		? ((logo1.style.transform = "translateX(-200%)"),
		  (logo1.style.transition = "all 0.8s"),
		  (logo2.style.transform = "translateX(-300%)"),
		  (logo2.style.trans1ition = "all 0.8s"),
		  menu.classList.add("scrolldown"),
		  insta.classList.add("scrolldown"),
		  fb.classList.add("scrolldown"),
		  (rules.style.color = "indigo"),
		  menuA.forEach((o) => {
				o.style.color = "indigo";
		  }))
		: ((logo1.style.transform = "translateX(0)"),
		  (logo1.style.transition = "all 1.2s"),
		  (logo2.style.transform = "translateX(0)"),
		  (logo2.style.transition = "all 1.2s"),
		  menu.classList.remove("scrolldown"),
		  insta.classList.remove("scrolldown"),
		  fb.classList.remove("scrolldown"),
		  (rules.style.color = "white"),
		  menuA.forEach((o) => {
				o.style.color = "white";
		  }));
	if (900 < document.body.scrollTop || 900 < document.documentElement.scrollTop) {
		isScroll = true;
	}
	if (1300 < document.body.scrollTop || 1300 < document.documentElement.scrollTop) {
		hackerrankPage.style.setProperty("opacity", "85%");
	}
}
// Dropdown menu of rules
const trigger = document.querySelector(".rule");
const dropdownRules = document.querySelector(".dropdown");
const arrow = document.querySelector(".arrow");

function handleEnter() {
	console.log(this);
	// dropdownRules.style.display = "block";
	// dropdownRules.style.opacity = "1";
	this.classList.add("trigger-enter");
	setTimeout(() => this.classList.contains("trigger-enter") && this.classList.add("trigger-enter-active"), 150);

	const triggerCoords = trigger.getBoundingClientRect();
	const dropdownCoords = dropdownRules.getBoundingClientRect();
	console.log(dropdownCoords, triggerCoords);

	const coords = {
		height: dropdownCoords.height,
		width: dropdownCoords.width,
		top: triggerCoords.bottom + 20, //20 is padding
		left: -(dropdownCoords.width / 2 - triggerCoords.width / 2),
	};
	console.log(coords);
	arrow.style.setProperty("transform", `translate(${triggerCoords.left + triggerCoords.width / 2 - 10}px, ${coords.top - 20}px) rotate(45deg)`);
	dropdownRules.style.setProperty("transform", `translate(${coords.left}px, ${coords.top}px)`);
	console.log("enter");
}

function handleLeave() {
	this.classList.remove("trigger-enter", "trigger-enter-active");

	console.log("leave");
}
if (window.innerWidth >= 1150) {
	trigger.addEventListener("mouseenter", handleEnter);
	trigger.addEventListener("mouseleave", handleLeave);
}

function openFB() {
	window.open("https://www.facebook.com/IETUNMC");
}
function openInsta() {
	window.open("https://www.instagram.com/iet_unmc/");
}
function openMockTest() {
	window.open("https://www.hackerrank.com/testing-for-nott-a-thon-turing");
}
function googleform() {
	window.open("https://forms.gle/6WYx6ekwvbgkn7bV9");
	// alert("Registration is closed, sorry for inconvenience! Hope that we will see you next year!");
	//window.location.href='/result.html';
}
function openPrintcious() {
	window.open("https://www.printcious.com/my");
}
// function popOut() {
// 	alert("The result is not available yet. Stay tuned!!");
// }
1100 <= window.innerWidth &&
	(window.onscroll = function () {
		scrollFunction();
	}),
	window.innerWidth < 1100 &&
		(window.onscroll = function () {
			90 < document.body.scrollTop || 90 < document.documentElement.scrollTop ? menu.classList.add("toggle") : menu.classList.remove("toggle");
			isScroll = true;
		});

const dropdown = document.querySelectorAll(".ques"),
	ans = document.querySelectorAll(".answer");
function dropdownAns() {
	this.classList.toggle("active");
	var o = this.classList[1] - 1,
		t = this.classList[2];
	ans[o].style.maxHeight = "active" === t ? "200px" : "0";
}
dropdown.forEach((o) => {
	o.addEventListener("click", dropdownAns);
});
const navButton = document.querySelector("button[aria-expanded]"),
	stopScrollHTML = document.querySelector("html"),
	stopScrollBody = document.querySelector("body");
function toggleNav() {
	navButton.classList.toggle("cross-icon");
	var o = "true" === navButton.getAttribute("aria-expanded") || !1;
	navButton.setAttribute("aria-expanded", !o),
		0 == o
			? (menu.classList.add("toggle"),
			  menuA.forEach((o) => {
					o.style.display = "block";
			  }),
			  (rule.style.display = "grid"),
			  (stopScrollBody.style.overflow = "hidden"),
			  stopScrollHTML.style.overflow)
			: 1 == o &&
			  (menu.classList.remove("toggle"),
			  menuA.forEach((o) => {
					o.style.display = "none";
			  }),
			  (rule.style.display = "none"),
			  rule.classList.remove("trigger-dropdown"),
			  (stopScrollBody.style.overflow = "scroll"),
			  stopScrollHTML.style.overflow);
}
navButton.addEventListener("click", toggleNav);

// Dropdown for rules in mobile side
function enterDropDown() {
	rule.classList.toggle("trigger-dropdown");
}
rules.addEventListener("click", enterDropDown);

const intViewportHeight = window.innerHeight - 191;
const rulebook = document.querySelector("iframe");
if (intViewportHeight > 50) {
	rulebook.style.height = `${intViewportHeight}px`;
} else {
	rulebook.style.height = "500px";
}
