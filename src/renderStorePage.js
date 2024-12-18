const liArray = [
  "High in protein",
  "Controlled carbohydrates",
  "Only healthy fats",
  "High in fiber",
  "Low in sodium",
];

const renderStore = () => {
  const section = document.createElement("section");
  const article = document.createElement("article");
  const heading = document.createElement("h2");
  const firstDescription = document.createElement("p");
  const list = document.createElement("ul");
  const secondDescription = document.createElement("p");
  const thirdDescription = document.createElement("p");
  const imageContainerDiv = document.createElement("div");
  const image = document.createElement("img");

  imageContainerDiv.classList.add("image-container");
  section.classList.add("store");
  image.src =
    "https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  heading.textContent = "The key to healthy eating for athletes:";
  firstDescription.textContent =
    "Do you work out but don't have time to cook? With Intense Meals you will have a diet with the following characteristics:";
  secondDescription.textContent =
    "With Intense Meals you will not only have healthy food, but everything you need to make every day at training worthwhile.";
  thirdDescription.textContent =
    "No matter your training location or discipline, Intense Meals helps you get the most out every day with specialized nutrition for you.";

  section.append(article, imageContainerDiv);
  imageContainerDiv.append(image);
  article.append(
    heading,
    firstDescription,
    list,
    secondDescription,
    thirdDescription
  );
  liArray.forEach((text) => {
    const li = document.createElement("li");
    const liText = document.createElement("p");

    liText.textContent = text;

    li.append(liText);
    list.append(li);
  });

  return section;
};

export default renderStore;
