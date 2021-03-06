function checkInput() {
  const name = document.getElementById("name-input")
  const email = document.getElementById("email-input")
  const message = document.getElementById("message-input")

  if (name.value.length < 1) {
    name.classList.add("incorrect")
    return false
  }

  if (email.value.length < 1) {
    email.classList.add("incorrect")
    return false
  }
  
  if (message.value.length < 1) {
    mesage.classList.add("incorrect")
  }
  
  return true
}

function loadStars(star, starsToLoad) {
  let boxShadow = "";
  let x;
  let y;

  for (let i = 0; i < starsToLoad; i++) {
    x = Math.floor(Math.random() * 100); //100% of screen width
    y = Math.floor(Math.random() * 200); //200% of screen height to make animation smooth on repeat
    boxShadow += `${x}vw ${y}vh #FFF, `
  }
  boxShadow = boxShadow.replace(/,\s*$/, ""); // Remove last comma
  star.style.boxShadow = boxShadow;
}




//Scroll first block tried
const numSteps = 20.0;

// let nameElement;
let previousRatio = 0.0;
let previousY = 0;
let transformY = -50;
let scrollScale = 50;

// Set things up
window.addEventListener("load", (event) => {
  // nameElement = document.querySelector("#name");

  createObserver();
}, false);

function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  };

  observer = new IntersectionObserver(handleIntersect, options);
  // observer.observe(boxElement);
  // observer.observe(nameElement);
}

function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i=1.0; i<=numSteps; i++) {
    let ratio = i/numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    
    const currentY = entry.boundingClientRect.y
    const currentRatio = entry.intersectionRatio
    const isIntersecting = entry.isIntersecting
    
     // Scrolling down/up
    if (currentY < previousY) {
      if (currentRatio > previousRatio && isIntersecting) { // Scrolling down enter
        transformY += -1 * entry.intersectionRatio * scrollScale
        entry.target.style.transform = `translate(0, ${transformY}px)`
      } else { // Scrolling down leave
        transformY += -1 * entry.intersectionRatio * scrollScale
        entry.target.style.transform = `translate(0, ${transformY}px)`
      }
    } else if (currentY > previousY && isIntersecting) {
      if (currentRatio < previousRatio) { // Scrolling up leave
        transformY += 1 * entry.intersectionRatio * scrollScale
        entry.target.style.transform = `translate(0, ${transformY}px)`
      } else { // Scrolling up enter
        transformY += 1 * entry.intersectionRatio * scrollScale
        entry.target.style.transform = `translate(0, ${transformY}px)`
      }
    }

    previousY = currentY
    previousRatio = currentRatio
  });
}



// Change gradient on scroll
const section1 = document.getElementById("vertical-scroll-wrapper")
const [red, green, blue] = [225, 111, 225]

function scrollHandler () {
  const y = (document.getElementById("vertical-scroll-wrapper").scrollTop)/1500 // was 150, or 2500 or 3000
  const [r, g, b] = [red*y, green*y, blue/y].map(Math.round) // was division instead of multiplication
  document.body.style.background = `linear-gradient(to top, rgb(${r}, ${g}, ${b}) -140%, black) center center fixed`
}



// Shuffle between images
function imagesClicked(imagesParent) {
  let images = imagesParent.getElementsByClassName("clickable-image")
  for (let i = 0; i < images.length; i++) {
    
    if (images[i].classList.contains("top-0")) {
      images[i].classList.remove("top-0")
      images[i].classList.add(`top-${images.length - 1}`)
    }
    else if (images[i].classList.contains("top-1")) {
      images[i].classList.remove("top-1")
      images[i].classList.add("top-0")
      imagesParent.getElementsByClassName("image-caption")[0].innerHTML = images[i].alt
    }
    else if (images[i].classList.contains("top-2")) {
      images[i].classList.remove("top-2")
      images[i].classList.add("top-1")
    }
    else if (images[i].classList.contains("top-3")) {
      images[i].classList.remove("top-3")
      images[i].classList.add("top-2")
    }
    else if (images[i].classList.contains("top-4")) {
      images[i].classList.remove("top-4")
      images[i].classList.add("top-3")
    }
    else if (images[i].classList.contains("top-5")) {
      images[i].classList.remove("top-5")
      images[i].classList.add("top-4")
    }
  } 
}