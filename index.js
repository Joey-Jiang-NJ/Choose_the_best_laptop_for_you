var button = document.getElementById("one");
var myDiv = document.querySelectorAll(".serial-number");

button.addEventListener("click", function () {
  for (var i = 2; i < myDiv.length; i++) {
    if (myDiv[i].style.display === "none") {
      myDiv[i].style.display = "block";
    } else {
      myDiv[i].style.display = "none";
    }
  }

  document.querySelector("#one").classList.toggle("btn-outline-dark");
  document.querySelector("#one").classList.toggle("btn-dark");
});

var button2 = document.getElementById("two");
button2.addEventListener("click", function () {
  for (var i = 0; i < 2; i++) {
    if (myDiv[i].style.display === "none") {
      myDiv[i].style.display = "block";
    } else {
      myDiv[i].style.display = "none";
    }
  }

  for (var i = 3; i < myDiv.length; i++) {
    if (myDiv[i].style.display === "none") {
      myDiv[i].style.display = "block";
    } else {
      myDiv[i].style.display = "none";
    }
  }

  document.querySelector("#two").classList.toggle("btn-outline-success");
  document.querySelector("#two").classList.toggle("btn-success");
});

var button3 = document.getElementById("three");
button3.addEventListener("click", function () {
  for (var i = 0; i < 3; i++) {
    if (myDiv[i].style.display === "none") {
      myDiv[i].style.display = "block";
    } else {
      myDiv[i].style.display = "none";
    }
  }

  document.querySelector("#three").classList.toggle("btn-outline-info");
  document.querySelector("#three").classList.toggle("btn-info");
});
