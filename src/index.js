import { createMainPage } from "./mainPage"
import { createMenuDiv } from "./menuPage"
import { createGallery } from "./galleryPage"


const mainDiv = document.getElementById("content");
const tabs = document.getElementsByTagName("a");

const tabNavigator = () => {
    const banner = document.getElementById("banner")

    Array.from(tabs).forEach((element) => {
        element.addEventListener("click", (e) => {
            mainDiv.removeChild(mainDiv.lastChild)
            switch (e.target.textContent) {
                case "Home":
                    mainDiv.appendChild(banner)
                    break;
                case "Menu":
                    mainDiv.appendChild(createMenuDiv());
                    break;
                case "Gallery":
                    mainDiv.appendChild(createGallery());
                    break;
            }
        })
    })
}

createMainPage();

tabNavigator()


