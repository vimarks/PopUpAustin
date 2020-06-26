import { places } from "./data.js";

let placeId = Number(window.location.search.substring(1).split("=")[1]);
let place = places.get(placeId);

let title = document.getElementById("title");
title.innerHTML = place.name;

let barButton = document.getElementById("barButton");
barButton.addEventListener("click", update);
let barWidth = localStorage.getItem(`progress ${place.name}`) || 0;
let progressBar = document.getElementById("progressBar");
progressBar.style.width = barWidth + "%";
progressBar.innerHTML = barWidth + "%";

function update() {
  console.log("update");
  let myProgress = localStorage.getItem(`progress ${place.name}`);
  if (myProgress) barWidth = parseInt(myProgress);
  barWidth++;
  if (barWidth > 100) {
    localStorage.setItem(`progress ${place.name}`, 0);
    barWidth = 0;
    progressBar.innerHTML = "0%";
  }
  progressBar.style.width = barWidth + "%";
  if (barWidth > 1 && barWidth) progressBar.innerHTML = barWidth + "%";
  localStorage.setItem(`progress ${place.name}`, barWidth);
}

let frames = document.getElementsByClassName("slide");
for (let i = 0; i < frames.length; i++) {
  frames[i].src = place.images[i];
}

var slideIndex = 1;
showSlides(slideIndex);

window.plusSlides = function(n) {
  showSlides((slideIndex += n));
};
window.currentSlide = function(n) {
  showSlides((slideIndex = n));
};

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let list = document.getElementsByClassName("stats")[0];
let listItems = list.children;
listItems[0].innerHTML = "Name:  " + place.name;
listItems[1].innerHTML = "Address:  " + place.address;
listItems[2].innerHTML = "Height:  " + place.height + " ft";
listItems[3].innerHTML = "Lights:  " + place.lights;
listItems[4].innerHTML = "Surface:  " + place.surface;

let blurb = document.getElementsByClassName("blurb")[0];
let a = document.createElement("a");
let linkText = document.createTextNode("Directions");
a.appendChild(linkText);
a.target = "_blank";
a.href = `https://www.google.com/maps/dir/?api=1&destination=${place.coords}&travelmode=bicycling`;
blurb.appendChild(a);
