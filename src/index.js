import "./styles.css";
import renderStartPage from "./renderStartPage";
import renderIntensePlan from "./renderIntensePlan";
import renderStore from "./renderStorePage";

const nav = document.querySelector("nav > ul");
const main = document.querySelector("main");

const logo = document.querySelector(".logo");

export const handleClick = (targetId) => {
  setActiveButton(targetId);
  renderContentById(targetId);
};

const setActiveButton = (targetId) => {
  const clickedButton = document.querySelector(`#${targetId}`);
  [...nav.children].forEach((li) => li.children[0].classList.remove("active"));
  clickedButton.classList.add("active");
};

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
  handleClick(target.id);
});

logo.addEventListener("click", () => {
  handleClick("start-page-btn");
});

main.append(renderStartPage());
