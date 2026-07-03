const text = ["Software Developer", "CSE Student", "Cloud Enthusiast"];

let i = 0;
let j = 0;
let isDeleting = false;

function type() {
  let current = text[i];

  if (!isDeleting) {
    j++;
  } else {
    j--;
  }

  document.getElementById("typing").innerText = current.substring(0, j);

  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, 100);
}

type();
