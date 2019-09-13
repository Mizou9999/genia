// $(document).ready(function() {
// 	$(window).scroll(function() {
// 		// checks if window is scrolled more than 500px, adds/removes solid class
// 		if ($(this).scrollTop() > 500) {
// 			$(".navbar").addClass("solid")
// 		} else {
// 			$(".navbar").removeClass("solid")
// 		}
// 	})
// })
const navbar = document.getElementById("nav_bar")
window.onscroll = () => scrollNav()
const scrollNav = () => {
	let currentScroll = document.documentElement.scrollTop || window.pageYOffset

	if (currentScroll > 250) {
		navbar.classList.add("solid")
	} else if (currentScroll < 250) {
		navbar.classList.remove("solid")
	}
}

const toggle = document.getElementById("toggle")
const openNav = event => {
	event.preventDefault()
	const mobileNav = document.getElementById("mobile_nav_ul")
	console.log("he")
}

toggle.addEventListener("click", function() {
	const mobileNav = document.getElementById("mobile_nav_ul")
	mobileNav.classList.toggle("toggle")
})
