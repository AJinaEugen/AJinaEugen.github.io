function hideAllPages() {
  document.getElementById("skill-text").style.display = "none";
  document.getElementById("welcome-text").style.display = "none";
  document.getElementById("known-languages").style.display = "none";
  document.getElementById("projects").style.display = "none";
}

function showSkills() {
  hideAllPages();
  var page = document.getElementById("skill-text");
  page.style.display = "block";
}

function showHome() {
  hideAllPages();
  var page = document.getElementById("welcome-text");
  page.style.display = "block";
}

function showLanguages() {
  hideAllPages();
  var page = document.getElementById("known-languages");
  page.style.display = "block";
}

function showProjects() {
  hideAllPages();
  var page = document.getElementById("projects");
  page.style.display = "block";
}

showHome();
