// this is the frist script is 
// to load ajax html into the page on click

$(function () {

	$("#navbarToggle").blur(function (event){
		var screenWidth = window.innerWidth;
		if(screenWidth < 768 ){
			$('#collapsable-nav').collapse('hide')
		}
	});
});

$(function () {
$('#collapsable-nav li a').on('click', function(e){
	e.preventDefault();
	var url = this.href;
	$('li').removeClass('active')
	var nameofClass = $(this).parent().addClass('active');
	// document.write(nameofClass);
	$('.well').remove();
	$('#edu').load(url + ' #eduPage').hide().fadeIn('1500');
	if(screenWidth < 768 ){
			$('#collapsable-nav').collapse('hide')
		}

});
}

// $('#navbarToggle').click(function () {
//     if($('#navbarToggle span').hasClass('ToggleButton')) {
//         $('#navbarToggle').html('<span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>'); 
//     }
//     else {      
//         $('#navbarToggle').html('<span class="ToggleButton glyphicon glyphicon-remove"></span>'); 
//     }
// });

////////////////////////////////////////////////////////////////


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}