/*eslint-disable*/
//DAS LOGO MUSS FÜR topnav-desktop--scroll noch dunkel werden! 


//products.map(function(product) {return ``;})
// products.map(product => 1 + 2)
const navbarDesk = document.querySelector(`.topnav-desktop`);
const header = document.querySelector(`.header`);
const footer = document.querySelector(`.footer`);
const articleAll = document.querySelectorAll(`article`);
const scrollElements = [...articleAll, header, footer];

//wo treffen a und b aufeinander? a=navbarDesk, b=mein jeweiliges scrollElement, also articles+header+footer
//SOURCE https://github.com/Barry127/intersect-rect/blob/master/intersect-rect.js

function intersectRect (rectA, rectB) {
    return !(
        rectB.left >= rectA.right ||
        rectB.right <= rectA.left ||
        rectB.top >= rectA.bottom ||
        rectB.bottom <= rectA.top
      );
  }

window.onscroll = function ()
{
	scrollElements.forEach(scrollElement => {
		if (intersectRect(navbarDesk.getBoundingClientRect(), scrollElement.getBoundingClientRect())) {
			if (scrollElement.classList.contains("darkScrollNav")) {
				console.log("dark", scrollElement);
				navbarDesk.classList.add(`topnav-desktop--scroll`);
			} else {
				navbarDesk.classList.remove(`topnav-desktop--scroll`);
				console.log("light", scrollElement);
			}
		}
	});
};
//d.h.: wenn ich scrolle,
//dann soll für jedes meiner scrollElements abgefragt werden..
//ob es die Klasse darkScrollNav beinhaltet,
//dann gib mri ein console.log und füge die Klasse topnav-desktop--scroll hinzu
//SONST entferne besagte scroll Klasse und..
//..gib mir ein console mit light + besagtem element 


//* VERSUCH MIT DEM ARRAY AN STELLE [0] (classList geht nur auf elements. s. dev-tools für mögliche befehle)
//Problem: die klasse darkScrollNav wäre immer da beim page-loading

// console.log(articleAll);
// articleAll.forEach((arcticle) => {
//   if (articleAll[0].classList.contains(`darkScrollNav`)) {
//     navbarDesk.classList.add(`topnav-desktop--scroll`);
//   } else {
//     console.log(`mist`);
//     navbarDesk.classList.remove(`topnav-desktop--scroll`);
//   }
//   // navbarDesk.classList.remove(`topnav-desktop--bla`);
// });


//*INTERSECTIONOBSERVER VERSUCH. Problem: geht nur mit vieport height oder einem root element, dass parent zum target child ist. das trifft für nav nicht zu
// function articleObserverHandler(entries, observer) {
// 	console.log(entries);
//   entries.forEach(function (entry) {
// 	console.log(entry);
//     if (entry.isIntersecting) {
//       console.log(entry.isIntersecting, entry.target)
//     }
//   });
// }

// const observerOptions = {};

// const articles = document.querySelectorAll(".article");
// var articleObserver = new IntersectionObserver(articleObserverHandler, observerOptions);

// articleAll.forEach(function (article) {
//   articleObserver.observe(article);
// });

// 	if (articleAll.classList.contains(`dark`)){
// 		navbarDesk.classList.add(`topnav-desktop--scroll`);
// 		navbarDesk.classList.remove(`topnav-desktop--bla`);
// 	}
// 	else{
// 		navbarDesk.classList.add(`topnav-desktop--bla`);
// 		navbarDesk.classList.remove(`topnav-desktop--scroll`);
// 	}
// });


//*ALT ALT 
//for (i=0; i<articleAll.length;i++) {
//const headerHeight = document.querySelector(`.header`).offsetHeight;
// const articleAll = document.querySelectorAll(`article`);

// }
// 	const scrollDown = window.scrollY;
// 	console.log(scrollDown);

// window.onscroll = function () {
// 	for (i=0; i<sectionsIndex.length, i++){
// 		if (sectionsIndex.contains(`darkScrollMenu`)){
// 			navbarDesk.classList.add(`navbar-desktop__scroll`);
// 		} else {
// 			navbarDesk.classList.remove(`navbar-desktop__scroll`);
// 		}
// 	}
// }

// window.scrollY sagt mir wie weit an dem punkt wo ich es abfrage das fenster vertikal gescrollt ist in px
// offsetHeight = heading + padding + border

// ich hab noch nicht verstanden wie das mit den sections ging was in der einen fend session drankam, muss mir das video nochmal angucken
// spielerei.. wei� gerade definitiv bei vielem nicht meh rim detail wies geht. grobe idee: f�r jede section gucken ob sie eine dark/light klasse hat
// dann loop durch alle sectionindexes / also array um bei jeder zu checken ob die klasse da ist
// frage..sind jetzt die sectsionindex1 -7 trotzdem noch teile des constructor function arrays? also kann ich da unten sectionsIndex reinkommen?
// und: wie checkt denn meine for loop dass mein i sich auf die SectionIndex beziehen soll?
// function SectionsIndex(sectionName, classBackground) {
// 	this.sectionName = sectionName;
// 	this.classBackground = classBackground;
// }
/* eslint-disable*/

// var sectionsIndex1 = new SectionIndex(`header`, `dark`);
// var sectionsIndex2 = new SectionIndex(`cafe`, `dark`);
// var sectionsIndex3 = new SectionIndex(`shop`, `dark`);
// var sectionsIndex4 = new SectionIndex(`herkunft`, `dark`);
// var sectionsIndex5 = new SectionIndex(`dassteckt`, `dark`);
// var sectionsIndex6 = new SectionIndex(`visit`, `dark`);
// var sectionsIndex7 = new SectionIndex(`footer`, `dark`);

// // does it work?:
// console.log(sectionsIndex7.classBackground);
// console.log(SectionsIndex);

