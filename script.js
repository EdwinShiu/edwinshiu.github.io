const COMMIT = [
  "<div class='grid-item' style='background-color: #ebedf0;'></div>",
  "<div class='grid-item' style='background-color: #9be9a8;'></div>",
  "<div class='grid-item' style='background-color: #40c463;'></div>",
  "<div class='grid-item' style='background-color: #30a14e;'></div>",
  "<div class='grid-item' style='background-color: #216e39;'></div>",
];

const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

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

// form textarea animation
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

  $("#form-textarea").focus(function() {
    $(".form-textarea-content").css("color", "var(--primary-text-color)");
  });
  $("#form-textarea").focusout(function() {
    if ($("form textarea").val() == "") {
      $(".form-textarea-content").css("color", "var(--primary-border-color)");
    }
  });
})
