// global variables
let activePage = "welcome-text";

//utility functions

function $(selector) {
  return document.querySelector(selector);
}

function hide(id) {
  $(`#${id}`).style.display = "none";
  const link = $(`#top-menu-bar [data-page=${id}]`);
  link.classList.remove("active");
}

function show(id) {
  const page = document.getElementById(id);
  page.style.display = "block";
  activePage = id;
}

function showPage(id) {
  const link = $(`#top-menu-bar [data-page=${id}]`);
  link.classList.add("active");

  hide(activePage);
  show(id);
}

function clickOnMenu(e) {
  // console.warn("click", e.target.getAttribute("page"));

  console.warn("click", e.target.dataset.page);

  const link = e.target.closest("a");

  if (link) {
    const id = link.dataset.page;

    if (e.target.matches("a")) {
      showPage(id);
    }
  }
}

function loadSkills() {
  const response = fetch("skills.json");
  const loaded = response.then((r) => {
    return r.json();
  });
  loaded.then((skills) => {
    showSkills(skills);
  });
}

function sortByEndorcements(a, b) {
  return b.endorcement - a.endorcement;
}

function sortByName(a, b) {
  return a.name.localeCompare(b.name);
}

function showSkills(skills) {
  skills.sort(sortByEndorcements);
  const htmlSkills = skills.map((skill) => {
    const cls = skill.favorite ? "favorite" : "";
    return `<li class="${cls}">${skill.name}- <span>${skill.endorcement}</span></li> `;
  });
  const skill_list = $("#skill-text ul");
  skill_list.innerHTML = htmlSkills.join("");
}
// Code start
showPage(activePage);
$("#top-menu-bar").addEventListener("click", clickOnMenu);
loadSkills();
