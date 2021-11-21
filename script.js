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

// let boxElement;
let nameElement;
let previousRatio = 0.0;
let previousY = 0;
let transformY = 0;
let scrollScale = 50;
// let increasingColor = "rgba(40, 40, 190, ratio)";
// let decreasingColor = "rgba(190, 40, 40, ratio)";

// Set things up
window.addEventListener("load", (event) => {
  // boxElement = document.querySelector("#box");
  nameElement = document.querySelector("#name");

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
  observer.observe(nameElement);
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



// SCroll second aproach tried
// const state = document.querySelector('.observer__state')
// const target = document.querySelector('.observer__target')

// const thresholdArray = steps => Array(steps + 1)
//  .fill(0)
//  .map((_, index) => index / steps || 0)

// let previousY = 0
// let previousRatio = 0

// const handleIntersect = entries => {
//   entries.forEach(entry => {
//     const currentY = entry.boundingClientRect.y
//     const currentRatio = entry.intersectionRatio
//     const isIntersecting = entry.isIntersecting

//     // Scrolling down/up
//     if (currentY < previousY) {
//       if (currentRatio > previousRatio && isIntersecting) { // Scrolling down enter
//         state.textContent ="Scrolling down enter"
//       } else { // Scrolling down leave
//         state.textContent ="Scrolling down leave"
//       }
//     } else if (currentY > previousY && isIntersecting) {
//       if (currentRatio < previousRatio) { // Scrolling up leave
//         state.textContent ="Scrolling up leave"
//       } else { // Scrolling up enter
//         state.textContent ="Scrolling up enter"
//       }
//     }

//     previousY = currentY
//     previousRatio = currentRatio
//   })
// }

// const observer = new IntersectionObserver(handleIntersect, {
//   threshold: thresholdArray(20),
// })

// observer.observe(target)