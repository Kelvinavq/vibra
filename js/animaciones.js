$(document).ready(function() {
    $('.animar').waypoint(function() {
      $(this).addClass('animate__animated animate__backInUp');
    }, {
      offset: '50%'
    });
  });