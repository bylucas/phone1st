//Basics
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