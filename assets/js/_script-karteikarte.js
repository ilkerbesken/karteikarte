var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }




//counter//
updateCounter(0);
function updateCounter(value) {
  // slayt sayısını al
  var totalSlides = document.getElementsByClassName("deutsch").length;
   
  // n değerini hesapla
  var n = (slideIndex);
  // counter'ı güncelle
  counter = n + "/" + totalSlides;
  
  // counter'ı HTML sayfasında göster
  document.getElementById("counter").innerHTML = counter;
}

function plusSlides(n) {
  showSlides(slideIndex += n);
  
  // counter'ı güncelle
  updateCounter(slideIndex);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  
  // counter'ı güncelle
  updateCounter(n - slideIndex);
}