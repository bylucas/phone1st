

//Sidebar links - Basics
 const sideBasics = document.querySelector(".side-basics")
 basicLinks.forEach((link) => {
  const urlLink = link.toLowerCase();
    let newLink = urlLink.split(" ").join("-");
  let html = `<li><a id="${link}" href="${newLink}.html">${link}</a></li>`;
    sideBasics.innerHTML += html;
})

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