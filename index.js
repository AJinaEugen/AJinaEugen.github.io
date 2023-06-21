// global variables
var activePage = "welcome-text";

//utility functions
function hide(id) {
  document.getElementById(id).style.display = "none";
}

function showPage(id) {
  hide(activePage);
  var page = document.getElementById(id);
  page.style.display = "block";
  activePage = id;
}

function clickOnMenu(e) {
  // console.warn("click", e.target.getAttribute("page"));

  console.warn("click", e.target.dataset.page);
  console.log(
    "target.matches returns true or false depending if the user clicks on the coorect element",
    e.target.matches("a")
  );

  var link = e.target.closest("a");

  if (link) {
    let id = link.dataset.page;

    if (e.target.matches("a")) {
      showPage(id);
    }
  }
}
// Code start
showPage(activePage);
document.getElementById("top-menu-bar").addEventListener("click", clickOnMenu);
