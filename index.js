//Change navigation style on scroll
window.addEventListener('scroll', event => {
   event.preventDefault();

   //logo overlay
   let logo = document.querySelector('.logo-overlay');
   (window.scrollY >= 200) ? logo.classList.add('scrolled') : logo.classList.remove('scrolled');

   //Menu overlay
   let menu = document.querySelector('.menu-overlay');
   (window.scrollY >= 200) ? menu.classList.add('scrolled') : menu.classList.remove('scrolled');
});

var resolvedPromise = typeof Promise == 'undefined' ? null : Promise.resolve();
var nextTick = resolvedPromise ? function(fn) { resolvedPromise.then(fn); } : function(fn) { setTimeout(fn); 83 };
nextTick(function() {
  
const carouselSlide = document.querySelector('.carousel-slide');
let carouselImages = document.querySelectorAll('.carousel-slide div');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 0;
let size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';    
    
//Next Slide
const nextSlide = () => {
    size = carouselImages[0].clientWidth;
    if(counter >= carouselImages.length - 1) {
        counter = 0;
        carouselSlide.style.transform = 'translateX(' + (-size * (counter = 0)) + 'px)';
    } else {
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
};

//Prev Slide
const prevSlide = () => {
    size = carouselImages[0].clientWidth;
    if(counter <= 0) {
        counter = carouselImages.length - 1;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    } else {
        carouselSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }    
};

//Button listner
nextBtn.addEventListener('click', e => {
     nextSlide();
});

prevBtn.addEventListener('click', e => {
     prevSlide();
});

// Auto slide
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;


if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
};

carouselSlide.addEventListener('mouseenter', (stopInterval) => {
  clearInterval(slideInterval);
});

carouselSlide.addEventListener('mouseleave', (startInterval) => {
  if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
  }
}); 

//Resize window
var previousCall;
window.addEventListener('resize', () => {
    if (previousCall >= 0) {
        clearTimeout(previousCall);
    } 
    previousCall = setTimeout(() => {
        counter--;
        nextSlide();
    }, 200);
}); 



//Image carousel two
const carouselSlideTwo = document.querySelector('.carousel-slide-two');
let carouselImagesTwo = document.querySelectorAll('.carousel-slide-two div');

//Buttons
const prevBtnTwo = document.querySelector('#prevBtn-two');
const nextBtnTwo = document.querySelector('#nextBtn-two');

//Counter
let counterTwo = 1;
let sizeTwo = carouselImagesTwo[0].clientWidth;

carouselSlideTwo.style.transform = 'translateX(' + (-sizeTwo * counterTwo) + 'px)';

 

//Next Slide
const nextSlideTwo = () => {
    sizeTwo = carouselImagesTwo[0].clientWidth;
    if(counterTwo >= carouselImagesTwo.length + 1) {
        counterTwo = 0;
    } else {
        carouselSlideTwo.style.transition = "transform 0.4s ease-in-out";
        counterTwo++;
        carouselSlideTwo.style.transform = 'translateX(' + (-sizeTwo * counterTwo) + 'px)';
    }
};

//Prev Slide
const prevSlideTwo = () => {
    sizeTwo = carouselImagesTwo[0].clientWidth;
    if(counterTwo <= 0) {
        counterTwo = carouselImagesTwo.length;
    } else {
        carouselSlideTwo.style.transition = "transform 0.4s ease-in-out";
        counterTwo--;
        carouselSlideTwo.style.transform = 'translateX(' + (-sizeTwo * counterTwo) + 'px)'; 
    }    
};

//Button listner
nextBtnTwo.addEventListener('click', e => {
     nextSlideTwo();
});

prevBtnTwo.addEventListener('click', e => {
     prevSlideTwo();
});


//Img Clone
const imgCloneTwo = () => {
    let cloneLastTwo = carouselImagesTwo[carouselImagesTwo.length - 1].cloneNode(true);
    cloneLastTwo.className = 'lastCloneTwo';
    carouselSlideTwo.prepend(cloneLastTwo);
    
    let cloneFirstTwo = carouselImagesTwo[0].cloneNode(true);
    cloneFirstTwo.className = 'firstCloneTwo';
    carouselSlideTwo.appendChild(cloneFirstTwo);
    
    carouselImagesTwo = document.querySelectorAll('.carousel-slide-two div');
}
window.onload = imgCloneTwo; 


//Transition 
carouselSlideTwo.addEventListener('transitionend', () => {
   sizeTwo = carouselImagesTwo[0].clientWidth;
   if(carouselImagesTwo[counterTwo].className === 'lastCloneTwo') {
       carouselSlideTwo.style.transition = "none";
       counterTwo = carouselImagesTwo.length - 2;
       carouselSlideTwo.style.transform = 'translateX(' + (-sizeTwo * counterTwo) + 'px)';
   } 
   if(carouselImagesTwo[counterTwo].className === 'firstCloneTwo') {
       carouselSlideTwo.style.transition = "none";
       counterTwo = carouselImagesTwo.length - counterTwo;
       carouselSlideTwo.style.transform = 'translateX(' + (-sizeTwo * counterTwo) + 'px)';
   } 
}); 


// Auto slide
const autoTwo = true; // Auto scroll
const intervalTimeTwo = 5000;
let slideIntervalTwo;


if (autoTwo) {
  slideIntervalTwo = setInterval(nextSlideTwo, intervalTimeTwo);
};

carouselSlideTwo.addEventListener('mouseenter', (stopIntervalTwo) => {
  clearInterval(slideIntervalTwo);
});

carouselSlideTwo.addEventListener('mouseleave', (startIntervalTwo) => {
  if (autoTwo) {
    slideIntervalTwo = setInterval(nextSlideTwo, intervalTimeTwo);
  }
}); 

//Resize window
var previousCallTwo;
window.addEventListener('resize', () => {
    if (previousCallTwo >= 0) {
        clearTimeout(previousCallTwo);
    } 
    previousCallTwo = setTimeout(() => {
        counterTwo--;
        nextSlideTwo();
    }, 200);
});  
});

//Testimonials
const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const logo = document.querySelector('.logo');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

let i = 1;
let intervalTestimonials;
let autoTestimonials = true;
let timerTestimonials = 10000;

const testimonials = [
    {
        "name": "Warren Wong",
        "position": "Marketing",
        "photo": "https://source.unsplash.com/VVEwJJRRHgk/100x100",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, aperiam! Vel vitae dolorum autem ducimus blanditiis. Alias quas excepturi, ducimus dolores doloremque accusamus."
    },
    {
        "name": "Ivana Cajina",
        "position": "Software Engineer",
        "photo": "https://source.unsplash.com/dnL6ZIpht2s/100x100",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, aperiam! Vel dignissimos, nemo velit alias fuga minima architecto. Alias quas excepturi, ducimus dolores doloremque accusamus."
    },
    {
        "name": "Andrea Harirson",
        "position": "Graphic Designer",
        "photo": "https://source.unsplash.com/ZOT2Mewzmh8/100x100",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, aperiam! Vel dignissimos, nemo velit alias fuga minima architecto, vitae dolorum autem ducimus blanditiis. Alias quas excepturi, ducimus dolores doloremque accusamus."
    }
];

function updateTestimonial() {
    let { name, position, photo, text} = testimonials[i];

    testimonial.innerHTML = text;
    logo.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    i = (i >= testimonials.length - 1) ? 0 : i + 1;
}

if(autoTestimonials) {
    intervalTestimonials = setInterval(updateTestimonial, timerTestimonials);
}
testimonialsContainer.addEventListener('mouseenter', () => {
    clearInterval(intervalTestimonials);
});
testimonialsContainer.addEventListener('mouseleave', () => {
    if(autoTestimonials) {
        intervalTestimonials = setInterval(updateTestimonial, timerTestimonials);
    }
});