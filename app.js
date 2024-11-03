let links = document.querySelector(".links");
let mnu = document.querySelector(".uil-align-center-alt");
function menu() {
  links.classList.toggle("active");
  mnu.classList.toggle("uil-multiply");
}
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Get all sections that have an ID defined
const sections = document.querySelectorAll(".section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  // Get current scroll position
  let scrollY = window.pageYOffset;

  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 200;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".links a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".links a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

AOS.init();
