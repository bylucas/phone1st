function spinner(){const t=document.getElementById("loader-wrapper");setTimeout((function(){t.classList.add("loaded")}),100)}class Backtotop{constructor(){this.backbutton=document.getElementById("topBtn")}init(){window.onscroll=()=>{document.body.scrollTop>20||document.documentElement.scrollTop>20?this.backbutton.style.display="block":this.backbutton.style.display="none"},this.backbutton.addEventListener("click",(()=>{this.top()}))}top(){0==document.body.scrollTop&&0==document.documentElement.scrollTop||(window.scrollBy(0,-50),this.timeout=setTimeout((()=>{this.top()}),10))}}const backtotop=new Backtotop;backtotop.init();const submit=document.querySelector(".modal-button"),popup=document.querySelector(".popup-wrapper"),effect=document.querySelector(".popup"),close=document.querySelector(".popup-close");function smoothScroll(t){const o=document.getElementById(t);o&&window.scrollTo({top:o.offsetTop,behavior:"smooth"})}submit.addEventListener("click",(()=>{popup.style.display="block",effect.classList.add("enter")})),close.addEventListener("click",(()=>{popup.style.display="none"})),popup.addEventListener("click",(t=>{"popup-wrapper"===t.target.className&&(popup.style.display="none")})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll('a[href^="#"]').forEach((function(t){t.addEventListener("click",(function(o){o.preventDefault();smoothScroll(t.getAttribute("href").substring(1))}))}))}));