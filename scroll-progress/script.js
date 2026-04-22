const progressBar = document.getElementById("progressBar");
const badge = document.getElementById("badge");

function updateProgress() {
  // how many pixels we have scrolled from the top
  const scrollTop = window.scrollY;

  // total scrollable height (full page height minus visible window height)
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  const progress = Math.round((scrollTop / docHeight) * 100);

  progressBar.style.width = progress + "%";
  badge.textContent = progress + "% read";

  if (progress >= 100) {
    badge.classList.add("complete");
    badge.ctextContent = ", complte";
  } else {
    badge.classList.remove("complete");
  }
}

window.addEventListener("scroll", updateProgress);
