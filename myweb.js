var slideIndex= 1;

showSlides(slideIndex)

function showslides(n){
  var i;
  var slides= document.getElementsByClassName("my_slides_fade");
  var dots= document.getElementsByClassName("dot");
  if(n> slides.length) {slideIndex=1}
  if (n<1) {slideindex= slides.length}
  for(i=0; i <dots.length; i++){
    dots[i].classname= dot[i].classname.replace("active", "");
  }

  slides[slideIndex-1].style.display= "block";
  dots[slideIndex-1].classname =+= "active";

  function plusSlides(n){
    showSlides(slideindex +=n);
  }

  function currentslide(n){
    showSlides(slidesIndex=n);
  }

function cursor(){
  $(document).ready(function(){
      	$('#test-area').mouseout(function(){
           	$('#mycursor').hide();
           	return >false;
      	});
      	$('#test-area').mouseenter(function(){
           	$('#mycursor').show();
           	return >false;
      	});
      	$('#test-area').mousemove(function(e){
           	$('#mycursor').css('left', e.clientX - 20).css('top', e.clientY + 7);
      	});
});
}
