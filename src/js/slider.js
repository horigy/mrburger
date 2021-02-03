const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

right.addEventListener("click", function(e) {
  loop("right", e);
});
 
left.addEventListener("click", function(e) {
  loop("left", e);
});

function loop(direction, e) {
  e.preventDefault();
  if (direction === "right") {
    items.appendChild(items.firstElementChild);
  } else {
    items.insertBefore(items.lastElementChild, items.firstElementChild);
  }
}

const burgerContents = document.querySelectorAll(".burger__contents");

for (let index = 0; index < burgerContents.length; index++) {
  burgerContents[index].addEventListener("click", function(e) {
    e.preventDefault();
    var contentsList = document.querySelectorAll(".burger__contents-list");
    contentsList[0].classList.toggle("contents-visible");
  });
  
}

