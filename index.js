


function showSkills(){

var page = document.getElementById('skill-text');
   document.getElementById('welcome-text').style.display="none";
   document.getElementById('known-languages').style.display="none";
page.style.display="block";


};



function showHome(){
var page = document.getElementById('welcome-text');   
page.style.display="block";
document.getElementById('known-languages').style.display="none";
document.getElementById('skill-text').style.display="none";

};


function showLanguages(){
var page = document.getElementById('known-languages');   
page.style.display="block";
document.getElementById('welcome-text').style.display="none";
document.getElementById('skill-text').style.display="none";

};







