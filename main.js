var bezos = document.getElementById('bezos');
var bezos_counter = document.getElementById('bezos-counter');
var bezosCounterStart = document.getElementById('bezos-counter-start');

var thousand = new Intl.NumberFormat('en-US')
var money = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
var additional_instructions_shown = false;

function detect_confused_user(e, timer) {
  if (!additional_instructions_shown) {
    additional_instructions_shown = true;

    setTimeout(function(){
      if (window.scrollX < 1) {
        document.getElementById('instructions').classList.add("show");
      }
    }, timer);
  }
}
function detect_slightly_confused_user(e, timer) {
  detect_confused_user(e, 2000);
}
function detect_very_confused_user(e, timer) {
  detect_confused_user(e, 4500);
}

if (window.innerWidth > 450) {
  document.addEventListener("mousemove", detect_very_confused_user, {once: true});
  document.addEventListener("mousewheel", detect_slightly_confused_user, {once: true});
  document.addEventListener("DOMMouseScroll", detect_slightly_confused_user, {once: true});
}

window.addEventListener('scroll', function(){
  update_wealth_counter();
});

function Elon_Musk_viewable() {
    return window.scrollX > bezos.offsetLeft - window.innerWidth + 1000;
}
function update_wealth_counter() {
  if (Elon_Musk_viewable()) {

      let wealth = calculate();
    if (wealth>0){
            bezos_counter.innerHTML = (wealth < 224000000000) ?money.format(wealth) : "$224,000,000,000";
    } else {
      bezos_counter.innerHTML = '';
    }

    }
    else {
      bezos_counter.innerHTML = '';
    }
  
  function calculate(){
    var wealth = (window.scrollX - bezos.offsetLeft + 175) * 500000;
    return wealth
  }
  function four_hundred_viewable() {
    return window.scrollX < four_hundred.offsetLeft + four_hundred.offsetWidth + 100;
  }
  function four_hundred_counter_viewable() {
    return four_hundred_counter_start.offsetLeft - window.scrollX < (window.innerWidth);
  }
}
function toggleZoom() {
  document.getElementById('line-chart').classList.toggle('zoom');
}



//Get the button:
mybutton = document.getElementById("myBtn");
scrollButton = document.getElementById("Speed1");
scrollButton2 = document.getElementById("Speed2");
scrollButton3 = document.getElementById("Speed3");

// scrollButton.addEventListener('click', test());
// function test(){
//   console.log("toggled");
// }
var doscroll = false;
var myTimeout;


function speed1(){
  toggleScroll();
   if (doscroll){
    autoScroll();

  } else {
    // stopScroll();
    clearTimeout(myTimeout);
  }
}

function speed2() {
  toggleScroll();
   if (doscroll){
    autoScroll2();

  } else {
    // stopScroll();
    clearTimeout(myTimeout);
  }
}

function speed3() {
  toggleScroll();
   if (doscroll){
    autoScroll3();

  } else {
    // stopScroll();
    clearTimeout(myTimeout);
  }
}
function toggleScroll(){
  if (doscroll) {
    doscroll = false;
  } else {
    doscroll = true;
  }
  console.log(doscroll);
  console.log("clicked");
 
 }

let s1 = 5
let s2 = 20
let s3 = 100
function autoScroll() {
  window.scrollBy(s1,0);
  myTimeout = setTimeout(autoScroll, 10)
}

function autoScroll2() {
  window.scrollBy(s2,0);
  myTimeout = setTimeout(autoScroll2, 10)
}

function autoScroll3() {
  window.scrollBy(s3,0);
  myTimeout = setTimeout(autoScroll2, 10)
}


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};


// When the user clicks on the button, scroll to the top of the document
function leftFunction() {
  document.body.scrollLeft = 0; // For Safari
  document.documentElement.scrollLeft = 0; // For Chrome, Firefox, IE and Opera
  clearTimeout(myTimeout);
}


car = document.getElementsByClassName('car')[0];
function scrollFunction() {
  if (Elon_Musk_viewable()) {
    mybutton.style.display = "block";
    scrollButton.style.display = "block";
    scrollButton2.style.display = "block";
    scrollButton3.style.display = "block";
    car.style.display = "block";
  } else {
    mybutton.style.display = "none";
    scrollButton.style.display = "none";
    scrollButton2.style.display = "none";
    scrollButton3.style.display = "none";
    car.style.display = "none";
  }


}



