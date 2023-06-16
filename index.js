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

// Code start
showPage(activePage);
