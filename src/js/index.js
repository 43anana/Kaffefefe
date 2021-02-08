import myFunction, { multiply } from "./myModule";

myFunction();

const result = multiply(2, 5);

console.log(result);

$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
});
