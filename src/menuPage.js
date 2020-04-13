let dishID = 0;
const sushiArray = [];
const sashimiArray = [];
const rollsArray = [];

const createMenuEntry = (dish, price, type) => {
  dishID++;

  const entry = {
    id: dishID,
    dish,
    price,
  };

  switch (type) {
    case "sushi":
      sushiArray.push(entry);
      break;
    case "sashimi":
      sashimiArray.push(entry);
      break;
    case "rolls":
      rollsArray.push(entry);
      break;
    default:
      break;
  }

  return { entry };
};

createMenuEntry("Tuna (Maguro)", "$5.25", "sushi");
createMenuEntry("Salmon (Sake)", "$5.75", "sushi");
createMenuEntry("Yellowtail (Hamachi)", "$5.00", "sushi");
createMenuEntry("Halibut (Hirame)", "$5.00", "sushi");
createMenuEntry("Mackerel (Saba)", "$5.15", "sushi");
createMenuEntry("Tuna", "$13.00", "sashimi");
createMenuEntry("Salmon", "$15.00", "sashimi");
createMenuEntry("Octopus", "$18.00", "sashimi");
createMenuEntry("Albacore", "$12.00", "sashimi");
createMenuEntry("Escolar", "$13.00", "sashimi");
createMenuEntry("Spicy Tuna Roll", "$6.25", "rolls");
createMenuEntry("Salmon Skin Roll", "$7.50", "rolls");
createMenuEntry("Baked Crab Roll", "$6.75", "rolls");
createMenuEntry("Shrimp Roll", "$4.75", "rolls");
createMenuEntry("Scallop Roll", "$6.00", "rolls");

const createMenuDiv = () => {
  const menuDiv = document.createElement("div");
  menuDiv.id = "menu-container";
  const menuHeader = document.createElement("h1");
  menuHeader.id = "menu-header";
  menuHeader.textContent = "MENU";
  menuDiv.appendChild(menuHeader);

  const sushiDiv = document.createElement("div");
  const sushiHeader = document.createElement("h3");
  sushiHeader.textContent = "SUSHI SETS";
  sushiDiv.appendChild(sushiHeader);
  for (let i = 0; i < sushiArray.length; i++) {
    const sushiEntry = document.createElement("p");
    sushiEntry.innerHTML = `${sushiArray[i].id} - ${sushiArray[i].dish} <span class="price">${sushiArray[i].price}</span>`;
    sushiDiv.appendChild(sushiEntry);
  }
  const sushiImg = document.createElement("div");
  sushiImg.id = "sushi-img";

  const sashimiDiv = document.createElement("div");
  const sashimiHeader = document.createElement("h3");
  sashimiHeader.textContent = "SASHIMI";
  sashimiDiv.appendChild(sashimiHeader);
  for (let i = 0; i < sashimiArray.length; i++) {
    const sashimiEntry = document.createElement("p");
    sashimiEntry.innerHTML = `${sashimiArray[i].id} - ${sashimiArray[i].dish} <span class="price">${sashimiArray[i].price}</span>`;
    sashimiDiv.appendChild(sashimiEntry);
  }
  const sashimiImg = document.createElement("div");
  sashimiImg.id = "sashimi-img";

  const rollsDiv = document.createElement("div");
  const rollsHeader = document.createElement("h3");
  rollsHeader.textContent = "FUSION ROLLS";
  rollsDiv.appendChild(rollsHeader);
  for (let i = 0; i < rollsArray.length; i++) {
    const rollsEntry = document.createElement("p");
    rollsEntry.innerHTML = `${rollsArray[i].id} - ${rollsArray[i].dish} <span class="price">${rollsArray[i].price}</span>`;
    rollsDiv.appendChild(rollsEntry);
  }
  const rollsImg = document.createElement("div");
  rollsImg.id = "rolls-img";

  menuDiv.appendChild(sushiDiv);
  menuDiv.appendChild(sashimiDiv);
  menuDiv.appendChild(rollsDiv);
  menuDiv.appendChild(sushiImg);
  menuDiv.appendChild(sashimiImg);
  menuDiv.appendChild(rollsImg);

  return menuDiv;
};

export { createMenuDiv };
