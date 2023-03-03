  let stopButton = document.getElementById("stopButton");
  let slowButton = document.getElementById("slowButton");
  let goButton = document.getElementById("goButton");
  let stopLight = document.getElementById("stopLight");
  let slowLight = document.getElementById("slowLight");
  let goLight = document.getElementById("goLight");

  stopButton.addEventListener("click", function() {
    stopLight.classList.toggle("stop");
  });

  slowButton.addEventListener("click", function() {
    slowLight.classList.toggle("slow");
  });

  goButton.addEventListener("click", function() {
    goLight.classList.toggle("go");
  });

  let buttons = document.querySelectorAll('.button');

  for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseenter', function(event) {
      buttonLogEnter(event.target.innerText);
    })
    buttons[i].addEventListener('mouseleave', function(event) {
      buttonLogLeave(event.target.innerText);
    })
  }

function buttonLogEnter(buttonName) {
  console.log(`Enter ${buttonName} button`);
}

function buttonLogLeave(buttonName) {
  console.log(`Left ${buttonName} button`)
}
