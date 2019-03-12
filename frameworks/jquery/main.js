$(".content").hide();
$("#fade-div").hide();
$("#slide-div").hide();

$("#show").click(function() {
  $(".content").show();
});

function hideContent() {
  $(".content").hide();
}

function editText(input) {
  $("#output").text(input);
}

$("#hover-div").mouseenter(function() {
  // console.log("hello");
  $("#fade-div").fadeIn(2000);
  $("#slide-div").slideDown("slow");
});

$("#animator").click(function() {
  $("#fade-div").animate({
    height: "200px",
    left: "50px"
  });
  $("#hover-prompt").hide();
  $("#hover-div").css("background-color", "#0094e4");
  $("main").css("background-image", "url('./background-2.jpg')");
});
