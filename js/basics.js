//Basics

const basicLinks = [
  "Variables",
  "Strings",
  "Common String Methods",
  "Numbers",
  "Template Strings",
  "Arrays",
  "Null and Undefined",
  "Booleans and Comparisons",
  "Loose and Strict Comparisons",
  "Type Conversion"

];

const footerCatLinks = [
  "Basics",
  "Control Flow",
  "Functions",
  "Objects"

];

//Category Page
if (linkTitle == 'Basics') {
const catLinks = document.querySelector(".card-wrap")
 basicLinks.forEach((link) => {
  const urlLink = link.toLowerCase();
    let newLink = urlLink.split(" ").join("-");
  let html = `<div class="index-content">
    <h2><a href="${newLink}.html">${link}</a></h2>
    </div>`;
    catLinks.innerHTML += html;
})
 }
//Related Posts
const docTitle = linkTitle;
const bottomLinks = document.querySelector(".related-wrap");


    basicLinks.forEach((link) => {
      if (link !== docTitle) {
    const urlLink = link.toLowerCase();
    let newLink = urlLink.split(" ").join("-");
    let html = `<div class="related-post">
    <h3><a href="${newLink}.html">${link}</a></h3>
    </div>`;
    bottomLinks.innerHTML += html;
}
 })

//Sidebar links - Basics
//  const sideBasics = document.querySelector(".side-basics")
//  basicLinks.forEach((link) => {
//   const urlLink = link.toLowerCase();
//     let newLink = urlLink.split(" ").join("-");
//   let html = `<li><a id="${link}" href="${newLink}.html">${link}</a></li>`;
//     sideBasics.innerHTML += html;
// })

 //Footer Category Links
const catTitle = categoryTitle;
const footerLinks = document.querySelector(".footer-links");
footerCatLinks.forEach((link) => {
  if (link !== catTitle) {
    const urlLink = link.toLowerCase();
    let newLink = urlLink.split(" ").join("-");
    let html = `<a href="${newLink}.html">${link} .</a>`;
    footerLinks.innerHTML += html;
  }
});