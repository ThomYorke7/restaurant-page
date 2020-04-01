const createNavbar = () => {
    const navBar = document.createElement("nav");
    navBar.setAttribute("id", "navbar")

    const divLogo = document.createElement("div");
    const logo = document.createElement("p");
    logo.textContent = "Tokaido";
    divLogo.appendChild(logo);

    const divLinks = document.createElement("div");
    divLinks.id = "links"
    const anchorTags = ["Home", "Menu", "Gallery", "Contacts"]
    for (let i = 0; i < anchorTags.length; i++) {
        let a = document.createElement("a");
        a.textContent = anchorTags[i]
        a.setAttribute("href", "#")
        divLinks.appendChild(a)
    }


    navBar.appendChild(divLogo);
    navBar.appendChild(divLinks);

    return navBar
}

const createBanner = () => {
    const bannerDiv = document.createElement("div")
    bannerDiv.id = "banner-container"
    const bannerTitle = document.createElement("h1");
    bannerTitle.setAttribute("id", "banner")
    bannerTitle.textContent = "TOKAIDO";
    const subtitle = document.createElement("p");
    subtitle.textContent = "Beyond Simple Sushi."
    bannerDiv.appendChild(bannerTitle)
    bannerDiv.appendChild(subtitle);

    return bannerDiv
}

export { createNavbar, createBanner }