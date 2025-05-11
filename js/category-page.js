//Category Page
if (categoryTitle == 'Basics') {
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