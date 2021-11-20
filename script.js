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




//Scroll
function callbackFunc(entries, observer)
{
  entries.forEach(entry => {
    var txt = entry.target.id + " visibility: " + entry.isIntersecting;
    
    document.getElementById('log').appendChild(document.createTextNode(txt));
    document.getElementById('log').appendChild(document.createElement("br"));
  });
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1
  };

let observer = new IntersectionObserver(callbackFunc, options);

observer.observe(document.getElementById('firstBlock'));
observer.observe(document.getElementById('secondBlock'));