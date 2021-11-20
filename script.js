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


function nameHovered() {
  let name = document.getElementById("name")
  name.style.animationDuration = "1s"
  
  document.getElementById("stars-small").style.animationPlayState = "paused"
  document.getElementById("stars-medium").style.animationPlayState = "paused"
  document.getElementById("stars-large").style.animationPlayState = "paused"
  
}

function nameUnhovered() {
  let name = document.getElementById("name")
  name.style.animationDuration = "3s"
  
  document.getElementById("stars-small").style.animationPlayState = "running"
  document.getElementById("stars-medium").style.animationPlayState = "running"
  document.getElementById("stars-large").style.animationPlayState = "running"
}

function nameClicked() {
  document.getElementById("target").scrollIntoView(true, {behavior: "smooth"})
}



// SCrolling animations

const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
  });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {
  // Default is null (Browser viewport). Set a specific parent element:
  root: document.querySelector('#someSpecificParent'),
  // add 40px inner "margin" area at which the observer starts to calculate:
  rootMargin: '40px', 
  // Default is 0.0 meaning the callback is called as soon 1 pixel is inside the viewport.  
  // Set to 1.0 to trigger a callback when 100% of the target element is inside the viewport,   
  // or i.e: 0.5 when half of the target element is visible:
  threshold: 0.5, 
};
// Attach observer to every [data-inviewport] element:
const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
  Obs.observe(EL, obsOptions);
});