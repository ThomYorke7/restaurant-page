const createGallery = () => {
    const galleryContainer = document.createElement("div");
    const imgContainer = document.createElement("div");
    imgContainer.setAttribute("id", "img-container")
    const galleryHeader = document.createElement("h1");
    galleryHeader.id = "galleryHeader"
    galleryHeader.textContent = "GALLERY"

    const mainImgDiv = document.createElement("div");
    mainImgDiv.setAttribute("id", "main-img");

    const mainImg = document.createElement("img");
    mainImg.setAttribute("src", "../images/img1.jpg");
    mainImg.setAttribute("id", "current");
    mainImgDiv.appendChild(mainImg)

    const imagesDiv = document.createElement("div");
    imagesDiv.setAttribute("id", "images-container");
    for (let i = 1; i < 9; i++) {
        let img = document.createElement("img");
        img.setAttribute("src", `../images/img${i}.jpg`);
        imagesDiv.appendChild(img)
    }

    galleryContainer.appendChild(galleryHeader)
    imgContainer.appendChild(mainImgDiv);
    imgContainer.appendChild(imagesDiv);
    galleryContainer.appendChild(imgContainer)

    return galleryContainer
}

const eventListener = () => {
    const current = document.getElementById("current")
    const images = document.querySelectorAll("#images-container img")
    const opacity = 0.4

    const imageClick = (e) => {
        images.forEach(img => (img.style.opacity = 1))
        current.src = e.target.src
        e.target.style.opacity = opacity
    }
    images.forEach(img => img.addEventListener("click", imageClick))
}

export { createGallery, eventListener }