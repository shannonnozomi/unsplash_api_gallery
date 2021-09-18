
    var imagesStrings = localStorage.getItem("images");
    var parsedImages = JSON.parse(imagesStrings);
    const divForImg = document.getElementById('favoritesDiv');
    const messageDiv = document.getElementById("message");

document.getElementById("clearButton").addEventListener('click', clearFunction);

var favImagesArray = JSON.parse(localStorage.getItem('images')) || [];

function createFavImage(newImage){
    messageDiv.innerHTML="";
    const imageDiv = document.createElement("div");
    const image = document.createElement("img");
    const favoriteIcon = document.createElement("button");
    image.src = newImage;
    favoriteIcon.innerHTML ="<span class='heartActive heartFull iconify' data-icon='dashicons:heart' data-inline='false'></span>"
    favoriteIcon.onclick = function(){favorited(imageDiv, newImage)};
    image.style.margin = "20px";
    image.style.width ="400px";
    image.style.height = "auto";
    image.style.border = "double 4px black";
    imageDiv.append(image);
    divForImg.append(imageDiv);
    imageDiv.append(favoriteIcon);
};

function favorited(imageDiv, newImage) {
    imageDiv.animate(
        [
            {opacity:"-1"}
         ],
          {duration:250});
    function timeFunction() {
        setTimeout(function(){imageDiv.remove();}, 200);
    }
timeFunction();
if (favImagesArray.includes(newImage)) {
    const index = favImagesArray.indexOf(newImage)
    if (index > -1) {favImagesArray.splice(index,1)}
}
};

parsedImages.forEach((newImage)=>{
    createFavImage(newImage);
});

function clearFunction(){
    if (favImagesArray === undefined || favImagesArray.length == 0) { 
        console.log("nothing should happen")}
        else{
        divForImg.animate(
        [
            {opacity:"-1"}
         ],
          {duration:250});
    function timeFunction() {
        setTimeout(function(){divForImg.remove();}, 200);
    }
    timeFunction();
    localStorage.clear();}
};

function favoritePage() {localStorage.setItem("images", JSON.stringify(favImagesArray))};
document.getElementById("home").addEventListener("click", favoritePage);