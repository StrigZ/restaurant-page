import "./styles.css";
import renderStartPage from "./renderStartPage";
import renderIntensePlan from "./renderIntensePlan";
import renderStore from "./renderStorePage";

const nav = document.querySelector("nav > ul");
const main = document.querySelector("main");

(() => {
  main.append(renderStartPage());
})();

const renderContentById = (id) => {
  let content = null;
  main.innerHTML = "";

  switch (id) {
    case "start-page-btn":
      content = renderStartPage();
      break;
    case "intense-plan-btn":
      content = renderIntensePlan();
      break;
    case "store-page-btn":
      content = renderStore();
      break;

    default:
      break;
  }

  main.append(content);
};

nav.addEventListener("click", ({ target }) => {
  if (!target.id) {
    return;
  }
  [...nav.children].forEach((li) => li.children[0].classList.remove("active"));
  target.classList.add("active");
  renderContentById(target.id);
});
