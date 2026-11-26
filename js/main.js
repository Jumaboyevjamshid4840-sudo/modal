const showBtn = document.getElementById("show-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");
const addHidden = ()=>{
     modal.classList.add("hiddin");
  overlay.classList.add("hiddin");
};
const removHiddin=()=>{
 modal.classList.remove("hiddin");
  overlay.classList.remove("hiddin");
};
showBtn.addEventListener("click", removHiddin);
closeBtn.addEventListener("click", addHidden);
overlay.addEventListener("click", addHidden);
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
     addHidden()
  }
});
