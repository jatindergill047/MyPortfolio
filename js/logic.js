// function toggleSlidebar() {
//     document.getElementById("mobile-links").classList.toggle("active");

// }
AOS.init({
    duration: 2000,
});
$("#wrapper").click( function() {
	$(".mobile-links").toggleClass("active");
	$(".menu").toggleClass("close");
});

