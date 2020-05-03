 // Увеличение картин

// Get the modal
var modal = document.getElementById("myModal");
modal.addEventListener('click', function () {  
  this.style.display="none";
})

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByTagName("img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var i;

for(i = 0; i < img.length; i++)
 {
  img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.nextElementSibling.innerHTML;
}
}


// <!-- Приклеиваем навигацию к верхнему краю во время прокрутки вниз -->
$(document).ready(function() {
  var NavY = $('.navbar').offset().top;

  var stickyNav = function() {
    var Scrolly = $(window).scrollTop();

    if (Scrolly > NavY) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
  };
  stickyNav();
  $(window).scroll(function() {
    stickyNav();
  });
});

