let circleShape = document.getElementById("circleShape");

// random int
function getRandomIntRange(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

function randomColorChange(){
    let randomHue = getRandomIntRange(1,360);
    let newColor = "hsl("+ randomHue +", 45%, 54%)";
    circleShape.style.backgroundColor = newColor;

    //set the hsl range between 1 and 360 (using getRandomIntRange)
    //let the new colour be the hsl value with the randomHue as the first value (changing the color)
    //set the element style in the css document to the new colour
  }
  
  randomColorChange; //run the randomColorChange function

  let randomColourInterval = setInterval(randomColorChange, 500);

  let runningInterval = randomColourInterval;

  function stopColor(){
    runningInterval = clearInterval(randomColourInterval);
  }

  circleShape.addEventListener('click', stopColor);

  /* find the modal */
let modal = document.getElementById("modalDialog");
/* find the button and add an eventlister */
let showModalButton = document.getElementById("showModal");
showModalButton.addEventListener("click", () => {
  modal.showModal();
});
let closeModalButton = document.getElementById("closeModal");
closeModalButton.addEventListener("click", () => {
  modal.close();
});