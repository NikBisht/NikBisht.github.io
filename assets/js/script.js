$(document).ready(function() {

  var topofDiv = $("#welcome-container").offset().top;
  var height = $("#welcome-container").outerHeight()

  // Scrolling header color change
  $(window).scroll(function(){
    if($(window).scrollTop() > (topofDiv + height)){
      if (!$("#header").hasClass("scrolled"))
        $("#header").addClass("scrolled")
    }
    else{
      if ($("#header").hasClass("scrolled"))
        $("#header").removeClass("scrolled")
    }
  });

  // On header button click, must scroll down over
  $("#header-home").click(function() {
    $('html, body').animate({
        scrollTop: $("#welcome-container").offset().top
    }, 750);
  });

  $("#header-about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-container").offset().top
    }, 750);
  });

  $("#header-projects").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects-container").offset().top
    }, 750);
  });

  $("#header-contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-container").offset().top
    }, 750);
  });

  // Hover over project should show desc
  $("#sec-store-project").hover(function() {
    $("#sec-store-project .project-title").css("display", "block");
    $("#sec-store-project .project-desc").css("display", "block");
  }, function() {
    $("#sec-store-project .project-title").css("display", "none");
    $("#sec-store-project .project-desc").css("display", "none");
  });

  $("#emo-project").hover(function() {
    $("#emo-project .project-title").css("display", "block");
    $("#emo-project .project-desc").css("display", "block");
  }, function() {
    $("#emo-project .project-title").css("display", "none");
    $("#emo-project .project-desc").css("display", "none");
  });

  $("#pacman-project").hover(function() {
    $("#pacman-project .project-title").css("display", "block");
    $("#pacman-project .project-desc").css("display", "block");
  }, function() {
    $("#pacman-project .project-title").css("display", "none");
    $("#pacman-project .project-desc").css("display", "none");
  });

  $("#dvrouter-project").hover(function() {
    $("#dvrouter-project .project-title").css("display", "block");
    $("#dvrouter-project .project-desc").css("display", "block");
  }, function() {
    $("#dvrouter-project .project-title").css("display", "none");
    $("#dvrouter-project .project-desc").css("display", "none");
  });

});