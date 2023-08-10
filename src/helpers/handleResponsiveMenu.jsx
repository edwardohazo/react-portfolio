export const animateBar = (e, $menu, bar__line1, bar__line2, bar__line3) => {
    bar__line1.classList.toggle("activebar-menu__line1");
    bar__line2.classList.toggle("activebar-menu__line2");
    bar__line3.classList.toggle("activebar-menu__line3");
    $menu.classList.toggle("activeHeader__nav-ulResponsive");
  }