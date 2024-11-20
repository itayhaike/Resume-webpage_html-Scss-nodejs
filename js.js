// Add this script tag right before the closing body tag
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Add percentage text next to skills
  document.querySelectorAll('.skills-prog li').forEach(function(skill) {
    const percent = skill.getAttribute('data-percent');
    const span = skill.querySelector('span');
    span.textContent = span.textContent + ' - ' + percent + '%';
  });

  // Add percentage text to soft skills
  document.querySelectorAll('.skills-soft li').forEach(function(skill) {
    const percent = skill.getAttribute('data-percent');
    const small = document.createElement('small');
    small.textContent = percent + '%';
    skill.appendChild(small);
  });

  // Your existing jQuery animations (optional for enhanced effect)
  if (typeof jQuery !== 'undefined') {
    $(".skills-prog li").find(".skills-bar").each(function(i) {
      $(this).find(".bar").delay(i * 150).animate({
        width: $(this).parents().attr("data-percent") + "%"
      }, 1000, "linear", function() {
        return $(this).css({
          "transition-duration": ".5s"
        });
      });
    });

    $(".skills-soft li").find("svg").each(function(i) {
      const circle = $(this).children(".cbar");
      const r = circle.attr("r");
      const c = Math.PI * (r * 2);
      const percent = $(this).parent().data("percent");
      const cbar = ((100 - percent) / 100) * c;
      circle.css({
        "stroke-dashoffset": c,
        "stroke-dasharray": c
      });
      circle.delay(i * 150).animate({
        strokeDashoffset: cbar
      }, 1000, "linear", function() {
        return circle.css({
          "transition-duration": ".3s"
        });
      });
    });
  }
});
</script>
