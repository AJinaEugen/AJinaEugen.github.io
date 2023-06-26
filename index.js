// global variables
var activePage = "skill-text";

//utility functions

function $(selector) {
  return document.querySelector(selector);
}

function hide(id) {
  $(`#${id}`).style.display = "none";
  let link = $(`#top-menu-bar [data-page=${id}]`);
  link.classList.remove("active");
}

function show(id) {
  var page = document.getElementById(id);
  page.style.display = "block";
  activePage = id;
}

function showPage(id) {
  let link = $(`#top-menu-bar [data-page=${id}]`);
  link.classList.add("active");

  hide(activePage);
  show(id);
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

function showSkills() {
  var skills = [
    { name: "Manual Testing" },
    { name: "Automation testing", favorite: true },
    { name: "API testing", favorite: true },
  ];
  var htmlSkills = skills.map(function (skill) {
    var cls = skill.favorite ? "favorite" : "";
    return `<li class="${cls}">${skill.name}</li> `;
  });
  var skill_list = $("#skill-text ul");
  skill_list.innerHTML = htmlSkills.join("");
}
// Code start
showPage(activePage);
$("#top-menu-bar").addEventListener("click", clickOnMenu);
showSkills();
