let images = ['/image/t1.jpg', '/image/tt1.jpg', '/image/ttt1.jpg']
let slideIndex = 0;
showSlides();

//currentSlide(0);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    console.log('current select', n)
  showSlides(slideIndex = n);
}

function showSlides() {
    slideIndex ++;
    if (slideIndex >= images.length) {
      slideIndex = 0
    }

    let slides = document.getElementById("banner");
    if (slides != undefined) {
      console.log('slider here', images[slideIndex])
      slides.src = images[slideIndex]
    }
    
  
    setTimeout(showSlides, 5000); // Change image every 2 seconds
  }


  function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }


  
     // Get the modal
     var modal = document.getElementById('id02');
    
     // When the user clicks anywhere outside of the modal, close it
     window.onclick = function(event) {
       if (event.target == modal) {
         modal.style.display = "none";
       }
     }
   // Get the modal
   var modal = document.getElementById('id01');
      
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
       if (event.target == modal) {
           modal.style.display = "none";
       }
   }