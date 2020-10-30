$('.carousel-1').owlCarousel({
    loop:true,
    smartSpeed: 1000,
    margin:10,
    nav:true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],

    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})

$('.carousel-email').owlCarousel({
    loop:true,
    animateOut: 'fadeOut',
    margin:10,
    smartSpeed: 1000,
    nav:true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1,
        },
        769:{
            items:2
        },
        1000:{
            items:3,
        }
    }
})



$('.carousel-video').owlCarousel({
    autoHeight: true,
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        
        1000:{
            items:2
        }
    }
})


$('.carousel-4').owlCarousel({
    loop:true,
    merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
    nav:true,
    dots: true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

$('.carousel-5').owlCarousel({
    autoplay:true,
    smartSpeed: 5000,
    autoplayTimeout:5000,
    slideTransition: 'linear',
    autoplayHoverPause:true,
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:10
        },
        600:{
            items:10
        },
        1000:{
            items:12
        }
    }
})






// MODAL SCRIPT

      // Open the Modal
      function openModal() {
        document.getElementById("myModal").style.display = "block";
      }
      
      // Close the Modal
      function closeModal() {
        document.getElementById("myModal").style.display = "none";
      }
      
      var slideIndex = 1;
      showSlides(slideIndex);
      
      // Next/previous controls
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      // Thumbnail image controls
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
      }

    //   MODAL SCRIPT END