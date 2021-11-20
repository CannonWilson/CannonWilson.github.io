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
document.addEventListener("DOMContentLoaded", function(event) {
    document.addEventListener("scroll", function(event) {
        const animatedBoxes = document.getElementsByClassName("animated-box");
        const windowOffsetTop = window.innerHeight + window.scrollY;

        Array.prototype.forEach.call(animatedBoxes, (animatedBox) => {
            const animatedBoxOffsetTop = animatedBox.offsetTop;

            if (windowOffsetTop >= animatedBoxOffsetTop) {
                addClass(animatedBox, "fade-in");
            }
        });
    });
});

function addClass(element, className) {
    const arrayClasses = element.className.split(" ");
    if (arrayClasses.indexOf(className) === -1) {
        element.className += " " + className;
    }
}