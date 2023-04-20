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

/* DONWLOAD CV */
document.getElementById("downloadBtn").addEventListener("click", downloadCV);
function downloadCV() {
  const url =
    "https://www.dropbox.com/s/vn3ahvtvm6gw1nu/Gabriela%20Meirelles%20CV.pdf?dl=1";
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "CV - Gabriela Meirelles.pdf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.getElementById("downloadBtn").addEventListener("click", downloadCV);

/* ANIMATION BOX TEXT */
const boxAnimation = document.querySelector(".boxAnimation");
const introSection = document.getElementById("intro");

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    let box = document.getElementById("box");
    setInterval(() => {
      box.classList.toggle("hideBox");
      box.classList.toggle("showBox");
    }, 1000);
  }
});

observer.observe(introSection);
