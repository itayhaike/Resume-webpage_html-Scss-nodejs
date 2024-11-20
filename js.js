$(document).ready(function() {
  // Function to set skill bars without showing percentages
  function setSkillBars() {
    $(".skills-prog li").each(function() {
      var percent = $(this).attr("data-percent");
      // Set the width directly and add the percentage text
      $(this).find(".bar").css("width", percent + "%");
    });
  }

  // Function to set circular progress
  function setCircularProgress() {
    $(".skills-soft li").each(function() {
      var percent = $(this).data("percent");
      var circle = $(this).find(".cbar");
      var r = circle.attr("r");
      var c = Math.PI * (r * 2);
      var cbar = ((100 - percent) / 100) * c;
      
      // Set the circle progress
      circle.css({
        "stroke-dashoffset": cbar,
        "stroke-dasharray": c
      });
    });
  }

  // Initial setup
  setSkillBars();
  setCircularProgress();

  // Add animation class after initial setup
  setTimeout(function() {
    $(".skills-prog li .bar").addClass("animated");
    $(".skills-soft li .cbar").addClass("animated");
  }, 50);

  // Rerun on window resize or orientation change
  $(window).on('resize orientationchange', function() {
    setSkillBars();
    setCircularProgress();
  });
});
