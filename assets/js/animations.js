/* SCROWDOWN TO SECTIONS */

const links = document.querySelectorAll("[data-scroll]");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = link.getAttribute("data-scroll");
    const section = document.getElementById(target);
    section.scrollIntoView({ behavior: "smooth" });
  });
});
