// const isMenu = document.querySelector
// und ..
// mit if remove und
// else add (`show`)

// später..
// addEVentListener(click, ismenu)

// wollen wir weil checkbox zweckentfremdet
// und sie hat ach ease-in-out

// window.onscroll = () => {
//   const navScroll = document.querySelector("topnav-desktop2");
//   if (this.scrollY <= 10) navScroll.classList = "";
//   else navScroll.classList = "scroll";
// };
// Problem: ist bei neuladen erst mal weiß. wie ann ich das noch verhindern?

const navbarColor = document.querySelector(`.topnav-desktop2`);
window.onscroll = function () {
  const top = window.scrollY;
  if (top <= 200) {
    navbarColor.classList.add(`topnav-desktop2--scroll`);
  } else {
    navbarColor.classList.remove(`topnav-desktop2--scroll`);
  }
};

// FRAGEN: ginge auch so was wie vh bei der if() --oder muss ich einfach irgendwelche pixel wählen?
// wie kann ich das schöner machen: die scrollba ist bei refresh erst mal weiß, weil ich ja die klasse habe
