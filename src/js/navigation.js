const navbarDesk = document.querySelector(`.navbar-desktop`);
const headerHeight = document.querySelector(`.header`).offsetHeight;
//wie würde ich mir das vorlesen? wenn ich im window scrolle, dann führe ich immer folgende funktion aus?

window.onscroll = function ()  {
	const scrollDown = window.scrollY;
	if (scrollDown > headerHeight) {
		navbarDesk.classList.add(`navbar-desktop__scroll`);
	} else{
		navbarDesk.classList.remove(`navbar-desktop__scroll`);
	}
}


//window.scrollY sagt mir wie weit an dem punkt wo ich es abfrage das fenster vertikal gescrollt ist in px
//offsetHeight = heading + padding + border

//ich hab noch nicht verstanden wie das mit den sections ging was in der einen fend session drankam, muss mir das video nochmal angucken
//spielerei.. weiß gerade definitiv bei vielem nicht meh rim detail wies geht. grobe idee: für jede section gucken ob sie eine dark/light klasse hat
//dann loop durch alle sectionindexes / also array um bei jeder zu checken ob die klasse da ist 
//frage..sind jetzt die sectsionindex1 -7 trotzdem noch teile des constructor function arrays? also kann ich da unten sectionsIndex reinkommen?
//und: wie checkt denn meine for loop dass mein i sich auf die SectionIndex beziehen soll?
function SectionsIndex = [sectionName, classBackground];
sectionsIndex1 = new SectionIndex[`header`, `dark`];
sectionsIndex2 = new SectionIndex[`cafe`, `dark`];
sectionsIndex3 = new SectionIndex[`shop`, `dark`];
sectionsIndex4 = new SectionIndex[`herkunft`, `dark`];
sectionsIndex5 = new SectionIndex[`dassteckt`, `dark`];
sectionsIndex6 = new SectionIndex[`visit`, `dark`];
sectionsIndex7 = new SectionIndex[`footer`, `dark`];
//kann man das eigentlich auch kürzen ?
//und: die sections sind jetzt natürlich noch null mit html tags verbunden.. das muss ich mir noch überlegen :D .. die auch auf unterschiedl. hierarchieebenne sind. aber hey
function sectionsIndexBackground (sectionsIndex){

window.onscroll = function () {
	for (1=0; I<sectionsIndex.length, i++){
		if (sectionsIndex.contains(`scrollDark`)){
			navbarDesk.classList.add(`navbar-desktop__scroll`);
		} else {
			navbarDesk.classList.remove(`navbar-desktop__scroll`);
		}
	}
}