
    var imagesStrings = localStorage.getItem("images");
    var parsedImages = JSON.parse(imagesStrings);
    const divForImg = document.getElementById('favoritesDiv');

function createFavImage(newImage){
    const imageDiv = document.createElement("div");
    const image = document.createElement("img");
    image.src = newImage;
    image.style.margin = "20px";
    image.style.width ="400px";
    image.style.height = "auto";
    image.style.border = "double 4px black";
    imageDiv.append(image);
    divForImg.append(imageDiv);
};




parsedImages.forEach((newImage)=>{
    createFavImage(newImage);
});


