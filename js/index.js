$(document).ready(function(){
  AOS.init();
  $('.sidenav').sidenav();
  $('.tooltipped').tooltip();

  let pathname = $(location).attr("pathname");
  if (pathname === '/index.html' || pathname === '/') {
    $("#stock-video").html("<video autoplay loop muted><source src='video/stockapp.mp4' type='video/mp4'></video>");
    $("#shooterio-video").html("<video autoplay loop muted><source src='video/shooterio.mp4' type='video/mp4'></video>");
    $("#statify-video").html("<video autoplay loop muted><source src='video/statify.mp4' type='video/mp4'></video>");
    $("#pricosha-video").html("<video autoplay loop muted><source src='video/pricosha.mp4' type='video/mp4'></video>")

  } 

});

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;

  let path = $(location).attr("pathname")
  if (path === "/index.html" || path === '/') {
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

function closeOnProjects() {
  $(".sidenav").sidenav("close");
}
