const divForImg = document.getElementById('img-box');


function makeRequestToUnsplash(requestUrl) {
    fetch(requestUrl)
        .then(res=> res.json())
        .then((data)=>{
            console.log(data.results)
            data.results.forEach((imageObj)=>{
                createImage(imageObj);
            });
        });
}
function createImage(imageObj){
    const imageDiv = document.createElement("div");
    const image = document.createElement("img");
    image.src = imageObj.urls.regular;
    image.alt = imageObj.alt_description;
    image.style.margin = "20px";
    image.style.width ="500px";
    image.style.height = "auto";
    image.style.border = "double 4px black"
    imageDiv.append(image);
    divForImg.append(imageDiv);
}

function myFunction() {
    document.getElementById("img-box").innerHTML = "";
    var inputVal = document.getElementById("myInput").value;
    const requestOne = "https://api.unsplash.com/search/photos?page=1&query=" + inputVal + "&client_id=dDm5YTPapDT4uWpO9Rsrt1fnKj7AvR_yayArid0CcSA";
    const requestTwo = "https://api.unsplash.com/search/photos?page=2&query=" + inputVal + "&client_id=dDm5YTPapDT4uWpO9Rsrt1fnKj7AvR_yayArid0CcSA";
    makeRequestToUnsplash(requestOne);
    makeRequestToUnsplash(requestTwo);
}

document.getElementById("submit").addEventListener('click', myFunction);

document.getElementById("frm1").addEventListener("keyup", function(e){
    if (e.key === "Enter") {
       myFunction();
    }
});
    
    
    

