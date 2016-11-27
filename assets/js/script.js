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
    // $("#sec-store-project .project-title").css("display", "block");
    // $("#sec-store-project .project-desc").css("display", "block");
    $("#sec-store-project .project-title").fadeIn();
    $("#sec-store-project .project-desc").fadeIn();
  }, function() {
    // $("#sec-store-project .project-title").css("display", "none");
    // $("#sec-store-project .project-desc").css("display", "none");
    $("#sec-store-project .project-title").fadeOut();
    $("#sec-store-project .project-desc").fadeOut();
  });

  $("#emo-project").hover(function() {
    $("#emo-project .project-title").fadeIn();
    $("#emo-project .project-desc").fadeIn();
  }, function() {
    $("#emo-project .project-title").fadeOut();
    $("#emo-project .project-desc").fadeOut();
  });

  $("#pacman-project").hover(function() {
    $("#pacman-project .project-title").fadeIn();
    $("#pacman-project .project-desc").fadeIn();
  }, function() {
    $("#pacman-project .project-title").fadeOut();
    $("#pacman-project .project-desc").fadeOut();
  });

  $("#dvrouter-project").hover(function() {
    $("#dvrouter-project .project-title").fadeIn();
    $("#dvrouter-project .project-desc").fadeIn();
  }, function() {
    $("#dvrouter-project .project-title").fadeOut();
    $("#dvrouter-project .project-desc").fadeOut();
  });

});