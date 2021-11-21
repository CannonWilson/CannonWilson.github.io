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




//Scroll
const numSteps = 20.0;

let boxElement;
let nameElement;
let prevRatio = 0.0;
let increasingColor = "rgba(40, 40, 190, ratio)";
let decreasingColor = "rgba(190, 40, 40, ratio)";

// Set things up
window.addEventListener("load", (event) => {
  boxElement = document.querySelector("#box");
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
  observer.observe(boxElement);
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
    
      entry.target.style.opacity = `${entry.intersectionRatio}`;      
      if (entry.target.scrollHeight - entry.target.scrollTop === entry.target.clientHeight - 1) {
              entry.target.style.transform = `translate(0, ${(-1*entry.intersectionRatio) * 150}px)`
      }

      
    if (entry.intersectionRatio > prevRatio) {
      //entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
      //entry.target.style.fontSize = `${Math.floor(entry.intersectionRatio * 14)}vw`;
      //entry.target.style.opacity = `${entry.intersectionRatio}`;
      //entry.target.style.top = `${(entry.intersectionRatio - 0.5) * 200}px`
      //entry.target.style.transform = `translate(0, ${(entry.intersectionRatio) * 150}px)`
    } else {
      //entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
      //entry.target.style.fontSize = `${Math.floor(entry.intersectionRatio * 14)}vw`;
      //entry.target.style.opacity = `${entry.intersectionRatio}`;
      //entry.target.style.top = `${(entry.intersectionRatio - 0.5) * 200}px`
      //entry.target.style.transform = `translate(0, ${(entry.intersectionRatio) * 150}px)`
    }

    prevRatio = entry.intersectionRatio;
  });
}
