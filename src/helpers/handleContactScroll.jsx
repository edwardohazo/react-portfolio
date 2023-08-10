/* eslint-disable no-unused-vars */
export const handleContactScroll = (e) => {
    // Calculate the Y position of the bottom element
    const $connect = document.getElementById('connect');
    const bottomPosition = $connect.getBoundingClientRect().top + window.scrollY;

    // Scroll smoothly to the bottom element
    window.scrollTo({
        top: bottomPosition,
        behavior: 'smooth'
    });
  }

export const handleContactScrollResponsive = (e, menu, line1, line2, line3) => {
    // Calculate the Y position of the bottom element
    if (e.target.classList[1] === "to-home") {
      const $home = document.getElementById('home');
      const bottomPosition = $home.getBoundingClientRect().top + window.scrollY;
      // Scroll smoothly to the home element
      window.scrollTo({
        top: bottomPosition,
        behavior: 'smooth'
      });
    } else if (e.target.classList[1] === "to-skills") {
      const $skills = document.getElementById('skills');
      const bottomPosition = $skills.getBoundingClientRect().top + window.scrollY;
      // Scroll smoothly to the skills element
      window.scrollTo({
        top: bottomPosition,
        behavior: 'smooth'
      });
    } else if (e.target.classList[1] === "to-form") {
      const $connect = document.getElementById('connect');
      const bottomPosition = $connect.getBoundingClientRect().top + window.scrollY;
      // Scroll smoothly to the bottom element
      window.scrollTo({
        top: bottomPosition,
        behavior: 'smooth'
      });
    } 

    menu.classList.toggle("activeHeader__nav-ulResponsive");
    line1.classList.toggle("activebar-menu__line1");
    line2.classList.toggle("activebar-menu__line2");
    line3.classList.toggle("activebar-menu__line3");
  }