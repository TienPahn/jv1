
console.log("JavaScript is working!");

function upDate(previewPic) {
    console.log("upDate called:", previewPic.alt);

    const imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.textContent = previewPic.alt;
}

function unDo() {
    console.log("unDo called");

    const imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";
}
