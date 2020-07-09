$(document).ready(function(){
  AOS.init();
  $('.sidenav').sidenav();
  $('.tooltipped').tooltip();

});
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;

  let path = $(location).attr("pathname")
  if (path === "/index.html") {
    if (currentScrollPos > 1600) {
      $("li.active").removeClass("active");
      $("#project-li").addClass("active");
      
      $("#index.li-side").removeClass("active");
      $("#project-li-side").addClass("active");
    }
    else {
      $("#index-li").addClass("active");
      $("#project-li").removeClass("active");

      $("#index-li-side").addClass("active");
      $("#project-li-side").removeClass("active");
    }
  }
}