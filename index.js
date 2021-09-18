const divForImg = document.getElementById("img-box");
const favDivForImg = document.getElementById("favoritesDiv");

function makeRequestToUnsplash(requestUrl) {
  fetch(requestUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      data.results.forEach((imageObj) => {
        createImage(imageObj);
      });
    });
}

var favImagesArray = JSON.parse(localStorage.getItem("images")) || [];

function favorited(imageId, favoriteIcon) {
  favoriteIcon.classList.toggle("heartActive");

  if (favImagesArray.includes(imageId)) {
    const index = favImagesArray.indexOf(imageId);
    if (index > -1) {
      favImagesArray.splice(index, 1);
    }
  } else {
    favImagesArray.push(imageId);
  }
  console.log(favImagesArray);
}

function createImage(imageObj) {
  const imageDiv = document.createElement("div");
  const image = document.createElement("img");
  const favoriteIcon = document.createElement("button");
  favoriteIcon.innerHTML =
    "<span class='heart heartFull iconify' data-icon='dashicons:heart' data-inline='false'></span>";
  favoriteIcon.onclick = function () {
    favorited(imageObj.urls.full, favoriteIcon.firstChild);
  };
  image.src = imageObj.urls.regular;
  image.alt = imageObj.alt_description;
  image.style.margin = "20px";
  image.style.width = "400px";
  image.style.height = "auto";
  image.style.border = "double 4px black";
  imageDiv.append(image);
  divForImg.append(imageDiv);
  imageDiv.append(favoriteIcon);
}

function myFunction() {
  document.getElementById("img-box").innerHTML = "";
  var inputVal = document.getElementById("myInput").value;
  const requestOne =
    "https://api.unsplash.com/search/photos?page=1&query=" +
    inputVal +
    "&client_id=dDm5YTPapDT4uWpO9Rsrt1fnKj7AvR_yayArid0CcSA";
  const requestTwo =
    "https://api.unsplash.com/search/photos?page=2&query=" +
    inputVal +
    "&client_id=dDm5YTPapDT4uWpO9Rsrt1fnKj7AvR_yayArid0CcSA";
  makeRequestToUnsplash(requestOne);
  makeRequestToUnsplash(requestTwo);
}

document.getElementById("submit").addEventListener("click", myFunction);

document.getElementById("frm1").addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    myFunction();
  }
});

function favoritePage() {
  localStorage.setItem("images", JSON.stringify(favImagesArray));
}

document.getElementById("favs").addEventListener("click", favoritePage);
