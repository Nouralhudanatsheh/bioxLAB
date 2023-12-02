// function changeNavBG() {
//   var navbar = document.getElementById("navbar");
//   var helpDesk = document.getElementById("help-desk");
//   var scrollValue = window.scrollY;
//   if (scrollValue > 117) {
//     navbar.classList.add("navBG");
//     helpDesk.classList.add("nabBoxShadow");
//   } else {
//     if (scrollValue < 117) {
//       navbar.classList.remove("navBG");
//       helpDesk.classList.remove("nabBoxShadow");
//     }
//   }

$(window).scroll(function () {
  if ($(window).scrollTop() > 110) {
    $("#navbar").addClass("navBG");
    $("#help-desk").addClass("nabBoxShadow");
  } else {
    $("#navbar").removeClass("navBG");
    $("#help-desk").removeClass("nabBoxShadow");
  }
});
$(".owl-next").addClass("fa-solid fa-arrow-right");

//   var scrollUp = document.getElementById("scroll-up");

//   if (scrollValue < 250) {
//     scrollUp.classList.add("displayNone");
//   } else {
//     scrollUp.classList.remove("displayNone");
//   }
// }

$(".up").fadeOut();
$(window).scroll(function () {
  if ($(window).scrollTop() > $("#header-title").offset().top)
    $(".up").fadeIn(500);
  else $(".up").fadeOut(500);
});
$(".services-content").fadeOut();
$(window).scroll(function () {
  if ($(window).scrollTop() > $("#services").offset().top)
    $(".services-content").fadeIn();
});

$(".up").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 1500);
});

$("body").css("overflow", "hidden");

$(document).ready(function () {
  $(".loading").fadeOut(3000, function () {
    $("body").css("overflow", "auto");
  });
});

$(document).ready(function () {
  $(".owl-cont").owlCarousel({
    stagePadding: 50,
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".owl-gallery").owlCarousel({
    autoplay: true,
    loop: true,
    items: 4,
    responsiveClass: true,
    responsive: {
      300: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  });
  $(".owl-team").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1300: {
        items: 3,
      },
    },
  });
  $(".owl-contact").owlCarousel({
    autoplay: true,
    loop: true,
    items: 5,
    responsiveClass: true,
    responsive: {
      300: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  });
});

// window.addEventListener("scroll", changeNavBG);

var years = setInterval(counter, 100);
let i = 1;

function counter() {
  i++;
  document.querySelector("#years").innerHTML = i;
  if (i == 12) clearInterval(years);
}
var states = setInterval(counter1, 15);
let j = 1290;

function counter1() {
  j++;
  document.querySelector("#count1").innerHTML = j;
  if (j == 1492) clearInterval(states);
}

var specialists = setInterval(counter2, 14);
let k = 1;

function counter2() {
  k++;
  document.querySelector("#count2").innerHTML = k;
  if (k == 152) clearInterval(specialists);
}

var points = setInterval(counter3, 9);
let m = 700;

function counter3() {
  m++;
  document.querySelector("#count3").innerHTML = m;
  if (m == 1022) clearInterval(points);
}

var patients = setInterval(counter4, 1);
let n = 1200;

function counter4() {
  n++;
  document.querySelector("#count4").innerHTML = n;
  if (n == 2332) {
    document.querySelector("#count4").innerHTML = 24332;

    clearInterval(patients);
  }
}

// let width = window.innerWidth;
// console.log(width);

// let about = document.getElementById("aboutCon");

// if (width < 404) {
//   about.classList.remove("container");
//   about.classList.add("containe-fluid");
// }

// let services = document.querySelectorAll(".services .carousel-item");
// console.log(services.length);
