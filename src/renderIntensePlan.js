const liArray = [
  {
    src: "https://img.icons8.com/color/48/healthy-food.png",
    alt: "healthy-food",
    text: "Our menu is inspired by many of your favorite dishes.",
  },
  {
    src: "https://img.icons8.com/color/48/supplier.png",
    alt: "supplier",
    text: "They are delivered directly to the door of your home or office in <em>coverage areas</em>.",
  },
  {
    src: "https://img.icons8.com/color/48/bento.png",
    alt: "bento",
    text: "We have Breakfast, Lunc, Dinner, Snacks and Drinks plans, designed with the quality and all the nutrients that your body needs.",
  },
];

const renderIntensePlan = () => {
  const section = document.createElement("section");
  const imageContainerDiv = document.createElement("div");
  const image = document.createElement("img");
  const article = document.createElement("article");
  const heading = document.createElement("h2");
  const description = document.createElement("p");
  const list = document.createElement("ul");

  imageContainerDiv.classList.add("image-container");
  section.classList.add("intense-plan");

  image.src =
    "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  heading.textContent = "The Real MealPrep for Athletes in El Salvador";
  description.textContent =
    "The most convenient and practical way to plan your meals for each week.";

  section.append(imageContainerDiv, article);
  imageContainerDiv.append(image);
  article.append(heading, description, list);
  liArray.forEach(({ src, alt, text }) => {
    const image = document.createElement("img");
    const bulletPoint = document.createElement("p");
    const li = document.createElement("li");

    image.src = src;
    image.alt = alt;
    bulletPoint.innerHTML = text;

    li.append(image, bulletPoint);
    list.append(li);
  });

  return section;
};

export default renderIntensePlan;
