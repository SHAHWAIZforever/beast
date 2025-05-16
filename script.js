  // Toggle mobile menu
  document.getElementById("hamburger").onclick = () => {
    document.getElementById("navLinks").classList.toggle("active");
  };

  $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
          items: 3,
          loop: true,
          margin: 10,
          nav: true,
          dots: true,
      });
  });

  document.addEventListener('DOMContentLoaded', function () {
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    header.classList.toggle('active');
    content.classList.toggle('show');
  });
});
});


// >>>>>>>>>>>>>>>>>>>>>>


function route(event) {
window.location.href = '<?= $nextPage ?>' + window.location.search;
}


// // >>>>>>>>>>>>>>>>>>>>
// class Slider {
// constructor(sliderElement) {
//   this.slider = sliderElement;
//   this.slides = this.slider.querySelectorAll('.slide');
//   this.dots = this.slider.querySelectorAll('.dot');
//   this.prevButton = this.slider.querySelector('.prev');
//   this.nextButton = this.slider.querySelector('.next');
//   this.slideIndex = 0;

//   this.showSlide(this.slideIndex);

//   this.prevButton.addEventListener('click', () => this.changeSlide(-1));
//   this.nextButton.addEventListener('click', () => this.changeSlide(1));

//   this.dots.forEach((dot, i) => {
//     dot.addEventListener('click', () => this.showSlide(i));
//   });

//   // Optional: auto-slide every 5 seconds
//   setInterval(() => {
//     this.changeSlide(1);
//   }, 5000);
// }

// showSlide(index) {
//   this.slides.forEach((slide, i) => {
//     slide.classList.remove('active');
//     if (this.dots[i]) this.dots[i].classList.remove('active');

//     if (i === index) {
//       slide.classList.add('active');
//       if (this.dots[i]) this.dots[i].classList.add('active');
//     }
//   });

//   this.slideIndex = index;
// }

// changeSlide(n) {
//   this.slideIndex = (this.slideIndex + n + this.slides.length) % this.slides.length;
//   this.showSlide(this.slideIndex);
// }
// }

// // Initialize all sliders
// document.querySelectorAll('.slider').forEach(sliderElement => {
// new Slider(sliderElement);
// });class Slider {
  class Slider {
    constructor(sliderElement) {
      this.slider = sliderElement;
      this.slides = this.slider.querySelectorAll('.slide');
      this.dots = this.slider.querySelectorAll('.dot');
      this.slideIndex = 0;
  
      // For swipe support
      this.startX = 0;
      this.endX = 0;
  
      this.showSlide(this.slideIndex);
      this.setupDots();
      this.setupAutoSlide();
      this.setupSwipe();
    }
  
    showSlide(index) {
      this.slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (this.dots[i]) this.dots[i].classList.remove('active');
  
        if (i === index) {
          slide.classList.add('active');
          if (this.dots[i]) this.dots[i].classList.add('active');
        }
      });
  
      this.slideIndex = index;
    }
  
    changeSlide(n) {
      this.slideIndex = (this.slideIndex + n + this.slides.length) % this.slides.length;
      this.showSlide(this.slideIndex);
    }
  
    setupDots() {
      this.dots.forEach((dot, i) => {
        dot.addEventListener('click', () => this.showSlide(i));
      });
    }
  
    setupAutoSlide() {
      setInterval(() => {
        this.changeSlide(1);
      }, 5000);
    }
  
    setupSwipe() {
      this.slider.addEventListener('touchstart', (e) => {
        this.startX = e.touches[0].clientX;
      });
  
      this.slider.addEventListener('touchmove', (e) => {
        this.endX = e.touches[0].clientX;
      });
  
      this.slider.addEventListener('touchend', () => {
        const deltaX = this.endX - this.startX;
  
        if (Math.abs(deltaX) > 50) { // Only respond to significant swipes
          if (deltaX < 0) {
            this.changeSlide(1); // Swipe left
          } else {
            this.changeSlide(-1); // Swipe right
          }
        }
  
        this.startX = 0;
        this.endX = 0;
      });
    }
  }
  
  // Initialize all sliders on the page
  document.querySelectorAll('.slider').forEach(sliderElement => {
    new Slider(sliderElement);
  });
  

  // >>>>>>>>>>>>>>>

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,              // ✅ Show navigation arrows
    dots: true,            // Disable pagination dots
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
  

// // Custom Owl Carousel (Pure JS version)
// $(document).ready(function() {
//   $('#smallslide .owl-carousel ').owlCarousel({
//     items: 6,
//     loop: true,
//     margin: 10,
//     autoplay: true,
//     autoplayTimeout: 1000,
//     autoplayHoverPause: false,
//     responsive: {
//       0: { items: 1 },
//       600: { items: 2 },
//       1000: { items: 4 }
//     }
//   });
// });
