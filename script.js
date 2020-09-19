
// form textarea animation
$(document).ready(function() {
  $("#form-textarea").focus(function() {
    $(".form-textarea-content").css("color", "var(--primary-text-color)");
  });
  $("#form-textarea").focusout(function() {
    if ($("form textarea").val() == "") {
      $(".form-textarea-content").css("color", "var(--primary-border-color)");
    }
  });
})


