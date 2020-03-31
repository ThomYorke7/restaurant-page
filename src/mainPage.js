const createMainPage = () => {

    const mainDiv = document.getElementById("content")

    const createNavbar = (() => {
        const navBar = document.createElement("nav");
        navBar.setAttribute("id", "navbar")

        const divLogo = document.createElement("div");
        const logo = document.createElement("p");
        logo.textContent = "Tokaido";
        divLogo.appendChild(logo);

        const divLinks = document.createElement("div");
        const anchorTags = ["Home", "Menu", "Gallery", "Contacts"]
        for (let i = 0; i < anchorTags.length; i++) {
            let a = document.createElement("a");
            a.textContent = anchorTags[i]
            a.setAttribute("href", "#")
            divLinks.appendChild(a)
        }


        navBar.appendChild(divLogo);
        navBar.appendChild(divLinks);
        mainDiv.appendChild(navBar)
    })()

    const createBanner = (() => {
        const bannerTitle = document.createElement("h1");
        bannerTitle.setAttribute("id", "banner")
        bannerTitle.textContent = "Tokaido";
        const subtitle = document.createElement("p");
        subtitle.textContent = "Beyond Simple Sushi"
        bannerTitle.appendChild(subtitle);
        mainDiv.appendChild(bannerTitle)
    })()

    return mainDiv
}

export { createMainPage }