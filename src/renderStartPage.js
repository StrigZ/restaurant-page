const renderStartPage = () => {
  const section = document.createElement("section");
  const bgImageDiv = document.createElement("div");
  const firstLayerDiv = document.createElement("div");
  const secondLayerDiv = document.createElement("div");
  const article = document.createElement("article");
  const heading = document.createElement("h1");
  const description = document.createElement("p");
  const button = document.createElement("button");

  section.classList.add("hero");
  bgImageDiv.classList.add("bg-image");
  firstLayerDiv.classList.add("bg-first-layer");
  secondLayerDiv.classList.add("bg-second-layer");

  heading.textContent = "Lunch healthy";
  description.textContent = "is better with Intense.Meals";
  button.textContent = "See plans";

  button.setAttribute("type", "button");

  section.append(bgImageDiv, firstLayerDiv, secondLayerDiv);
  secondLayerDiv.append(article);
  article.append(heading, description, button);

  return section;
};

export default renderStartPage;
