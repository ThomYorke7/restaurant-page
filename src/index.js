import { createNavbar, createBanner } from "./mainPage";
import { createMenuDiv } from "./menuPage";
import { createGallery, eventListener } from "./galleryPage";
import { createContacts } from "./contactPage";

const mainDiv = document.getElementById("content");
const tabs = document.getElementsByTagName("a");

const tabNavigator = () => {
  Array.from(tabs).forEach((element) => {
    element.addEventListener("click", (e) => {
      mainDiv.removeChild(mainDiv.lastChild);
      switch (e.target.textContent) {
        case "Home":
          mainDiv.appendChild(createBanner());
          break;
        case "Menu":
          mainDiv.appendChild(createMenuDiv());
          break;
        case "Gallery":
          mainDiv.appendChild(createGallery());
          eventListener();
          break;
        case "Contacts":
          mainDiv.appendChild(createContacts());
          break;
        default:
          break;
      }
    });
  });
};

mainDiv.appendChild(createNavbar());
mainDiv.appendChild(createBanner());

tabNavigator();
