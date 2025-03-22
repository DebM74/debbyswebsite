// Slideshow header
var i = 0;
var root = document.querySelector(".fadein");
var els = root.querySelectorAll(":not(:first-child)");
for (i = 0; i < els.length; i++) {
  els[i].classList.add("is-hidden");
}
root.addEventListener("transitionend", function () {
  root.insertBefore(root.querySelector(":first-child.is-hidden"), null);
});
setInterval(function () {
  root.querySelector(":first-child").classList.add("is-hidden");
  root.querySelector(":nth-child(2)").classList.remove("is-hidden");
}, 5000);


// dropdown menu
$(document).ready(function(){
  $('select').mousedown(function(e){
      e.preventDefault();

      var select = this;
      var scroll = select.scrollTop;

      e.target.selected = !e.target.selected;

      setTimeout(function(){select.scrollTop = scroll;}, 0);

      $(select).focus();
  });
  $('select').mousemove(function(e){
      e.preventDefault();
  });
});