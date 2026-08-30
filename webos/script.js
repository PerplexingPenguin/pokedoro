const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");
const notifier = document.getElementById("notifier");
var image = "";

const changeImage = (source) => {
  let img = document.getElementById("pokemon");
  img.src = source;
};

const defineImageFocus = () => {
  changeImage("/images/sylveonFocus.gif");
};

const defineImageBreak = () => {
  changeImage("/images/pokeball.png");
};

defineImageFocus();


let startingTime = 0.1;
let timeLeft = startingTime * 60;
let interval;


const updateTimer = () => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  timer.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
};

const startTimer = () => {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();

    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time Up!")
      if (startingTime === 0.1) {
        startingTime = 0.05
        timeLeft = startingTime * 60
        notifier.innerHTML = "Great work! Let's take a break..."
        updateTimer();
        defineImageBreak();
        startTimer();
      }
      else {
        startingTime = 0.1
        timeLeft = startingTime * 60
        notifier.innerHTML = "It's time to focus!"
        defineImageFocus();
        updateTimer();
        startTimer();
      };
    }
  }, 1000);
};

const stopTimer = () => clearInterval(interval);

const resetTimer = () => {
  clearInterval(interval);
  timeLeft = 6;
  notifier.innerHTML = "It's time to focus!"
  defineImageFocus();
  updateTimer();
}

start.addEventListener("click", startTimer)
stop.addEventListener("click", stopTimer)
reset.addEventListener("click", resetTimer)

const myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode(" \u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

const newElement = () => {
  var li = document.createElement("li");
  var inputValue = document.getElementById("todoInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  console.log(inputValue)
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("todoList").appendChild(li);
  }
  document.getElementById("todoInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode(" \u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
};

const submit = document.getElementById("todoSubmit");
submit.addEventListener('click', newElement);
