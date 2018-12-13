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
$(document).ready(function(){
	$('.error').hide();
	$('.invalid_email').hide();
	$('#submit').click(function(){
		var name = $('#name').val();
		var email = $('#email').val();
		if(name == ''){
			$('#name').next().show();
			return false;
		}
		if(email == ''){
			$('#email').next().show();
			return false;
		}
		if(IsEmail(email) == false){
			$('.invalid_email').show();
			return false;
		}
	});
});
function IsEmail(email) {
	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!regex.test(email)) {
	  return false;
	}else{
	  return true;
	}
  }