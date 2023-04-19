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

/* TEXT ANIMATION SECTION 1  */
const jobTitles = [
  "Full Stack Developer",
  "Front End Developer",
  "Back End Developer",
  "Mobile Developer",
];
const jobTitleElement = document.getElementById("job-title");

function writeJobTitle(title) {
  return new Promise((resolve) => {
    const letters = title.split("");
    let i = 0;
    let speed = 50;
    const interval = setInterval(() => {
      jobTitleElement.textContent += letters[i];
      i++;
      if (i === letters.length) {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

async function animateJobTitles() {
  while (true) {
    for (const title of jobTitles) {
      await writeJobTitle(title);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await eraseJobTitle();
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
}

async function eraseJobTitle() {
  return new Promise((resolve) => {
    const letters = jobTitleElement.textContent.split("");
    let i = letters.length - 1;
    let speed = 30;
    const interval = setInterval(() => {
      letters.pop();
      jobTitleElement.textContent = letters.join("");
      i--;
      if (i < 0) {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

animateJobTitles();
