// function toggleSlidebar() {
//     document.getElementById("mobile-links").classList.toggle("active");

// }
AOS.init({
    duration: 2200,
});
$("#wrapper").click( function() {
	$(".mobile-links").toggleClass("active");
	$(".menu").toggleClass("close");
});

function initMap(){
	var loc = { lat: 51.0486, lng: -114.0708};
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 12,
		center: loc
	});
	var marker = new google.maps.Marker({
		position: loc,
		map: map
	});
}