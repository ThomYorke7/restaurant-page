const createGallery = () => {
    const imgContainer = document.createElement("div");
    imgContainer.setAttribute("id", "img-container")

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

    imgContainer.appendChild(mainImgDiv);
    imgContainer.appendChild(imagesDiv);

    return imgContainer
}

export { createGallery }