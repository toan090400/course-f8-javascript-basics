const tabsItem = document.querySelectorAll(".tab-item");
const tabsPane = document.querySelectorAll(".tab-pane");

tabsItem.forEach((tab, value) => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab-item.active").classList.remove("active");
    document.querySelector(".tab-pane.active").classList.remove("active");

    tab.classList.add("active");
    tabsPane[value].classList.add("active");
  });
});
