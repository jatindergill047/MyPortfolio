// function toggleSlidebar() {
//     document.getElementById("mobile-links").classList.toggle("active");

// }
$("#wrapper").click( function() {
	$(".mobile-links").toggleClass("active");
	$(".menu").toggleClass("close");
});