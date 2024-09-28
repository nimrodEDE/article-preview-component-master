const button = document.getElementById("share-btn");
const button2 = document.getElementById("share-btn2");
const shareWindow = document.getElementById("share-window");

button.addEventListener("click", () => {
  shareWindow.classList.toggle("hidden");
});

button2.addEventListener("click", () => {
  shareWindow.classList.toggle("hidden");
});
