// global variables
var activePage = "welcome-text";

//utility functions
function hide(id) {
  document.getElementById(id).style.display = "none";
  let link = document.querySelector(`#top-menu-bar [data-page=${id}]`);
  console.log(link);
  link.classList.remove("active");
}

function showPage(id) {
  let link = document.querySelector(`#top-menu-bar [data-page=${id}]`);
  console.log(link);
  link.classList.add("active");

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
  console.log(e.target.id);

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
