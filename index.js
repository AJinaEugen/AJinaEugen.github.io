function hideAllPages() {
  document.getElementById("skill-text").style.display = "none";
  document.getElementById("welcome-text").style.display = "none";
  document.getElementById("known-languages").style.display = "none";
  document.getElementById("projects").style.display = "none";
}

function showPage(id) {
  hideAllPages();
  var page = document.getElementById(id);
  page.style.display = "block";
}

showPage("welcome-text");
