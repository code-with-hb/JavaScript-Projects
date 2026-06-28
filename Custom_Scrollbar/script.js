window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const pageHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = (scrollTop / pageHeight) * 100;

  document.getElementById("progress-bar").style.width = progress + "%";
});