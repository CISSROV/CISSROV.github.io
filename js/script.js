jQuery(document).ready(function() {
  var navOffset = jQuery("header").offset().top;


  jQuery(window).scroll(function() {
    var scrollPos = jQuery(window).scrollTop();
    console.log(scrollPos);

    if (scrollPos >= navOffset) {
      jQuery("header").addClass("fixed");
    } else {
      jQuery("header").removeClass("fixed");
    }
  })


})
