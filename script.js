const COMMIT = [
  "<div class='grid-item' style='background-color: #ebedf0;'></div>",
  "<div class='grid-item' style='background-color: #9be9a8;'></div>",
  "<div class='grid-item' style='background-color: #40c463;'></div>",
  "<div class='grid-item' style='background-color: #30a14e;'></div>",
  "<div class='grid-item' style='background-color: #216e39;'></div>",
];

const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var firebaseConfig = {
  apiKey: "AIzaSyBTmjnVwrG2My7bAnsQ0SkTgbbkg0q8Ess",
  authDomain: "personal-profile-4463e.firebaseapp.com",
  databaseURL: "https://personal-profile-4463e.firebaseio.com",
  projectId: "personal-profile-4463e",
  storageBucket: "personal-profile-4463e.appspot.com",
  messagingSenderId: "503415004644",
  appId: "1:503415004644:web:4b6f6d5916cda52be1fbf1"
};

firebase.initializeApp(firebaseConfig);
const app = firebase.app();
const db = firebase.firestore();
//console.log(app);


let date = new Date();
let weekday = date.getDay() + 1;
let month = MONTH[date.getMonth()];
function getGridType() {
  var random = Math.floor(Math.random() * 20);
  let temp = COMMIT[0];
  if (random == 0) {
    temp = COMMIT[0];
  }
  else if (random > 0 && random < 5) {
    temp = COMMIT[1];
  }
  else if (random < 11) {
    temp = COMMIT[2];
  }
  else if (random < 17) {
    temp = COMMIT[3];
  }
  else if (random < 20) {
    temp = COMMIT[4];
  }
  return temp;
}


$(document).ready(function() {

  // adding commit grid
  for (let i = 0; i < 21; i++) {
    $(".grid-container").append(getGridType());
  };
  for (let i = 0; i < weekday; i++) {
    $(".grid-container").append(getGridType());
  }

  // changing grid month
  $(".grid-month").append(month);

  // form textarea animation
  $("#form-textarea").focus(function() {
    $(".form-textarea-content").css("color", "var(--primary-text-color)");
  });
  $("#form-textarea").focusout(function() {
    if ($("form textarea").val() == "") {
      $(".form-textarea-content").css("color", "var(--primary-border-color)");
    }
  });

  // navbar navigation
  navbarHeightInString = $("#navbar").css("height");
  navbarHeightInString = navbarHeightInString.slice(0, navbarHeightInString.length - 2);
  const navbarHeight = parseInt(navbarHeightInString);

  $(".navbar-tab").on("click", function(event) {
    event.preventDefault();
    $(".navbar-tabs").removeClass("show-class");
    const id = event.currentTarget.getAttribute("href");
    const sectionOffsetTop = $(id).offset().top;
    let position = sectionOffsetTop - navbarHeight;
    window.scrollTo({
      top: position,
      left: 0,
    });
  });

  // navbar menu
  $(".navbar-button").on("click", function(event) {
    event.preventDefault();
    if ($(this).css("transform") == "none") {
      $(this).css("transform", "rotate(180deg)");
    }
    else {
      $(this).css("transform", "");
    }
    $(".navbar-tabs").toggleClass("show-class");
  });

  // submit to firebase

  $(".contact-form").on("submit", function(event) {
    event.preventDefault();
    var name = $("#form-name").val();
    var email = $("#form-email").val();
    var subject = $("#form-subject").val();
    var message = $("#form-textarea").val();
    // console.log(name + email +  subject + message);
    db.collection("Contact").add({
      "name": name,
      "email": email,
      "subject": subject,
      "message": message,
      "date": new Date(),
    })
    $("#form-name").val("");
    $("#form-email").val("");
    $("#form-subject").val("");
    $("#form-textarea").val("");
    $(".form-textarea-content").css("color", "var(--primary-border-color)");
    $(".form-button").text("Done");
    setTimeout(function() { 
      $(".form-button").text("Submit");
    }, 2000);
  });

})

