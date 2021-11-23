const postBtn = document.querySelector('.post');
const postingChat = document.querySelector('.postingChat');
const textArea = document.querySelector('#status');
const imageContainer = document.querySelector('.imageContainer');

postBtn.addEventListener("click", () => {
    postingChat.classList.toggle('trade_in');
});

const faImage = document.querySelector('.fa-image');
faImage.addEventListener('click',() => {
    const imageContainerIsShowing = imageContainer.classList.contains("showing");
    if (imageContainerIsShowing) {
        imageContainer.style.display = "none";
        imageContainer.classList.remove("showing");
    }else {
        imageContainer.style.display = "block";
        imageContainer.classList.add("showing");
    }
});

const images = [
    "https://bit.ly/3271UbM",
    "https://bit.ly/3x2bHeC",
    "https://bit.ly/3qTspfa",
    "https://bit.ly/3FtcTeb",
    "https://bit.ly/3oMq96H",
    "https://bit.ly/3FvMvAd"
]

for (let i = 0; i < images.length; i++) {
    const imageTag = document.createElement('img')
    imageTag.classList.add("image");
    imageTag.src = images[i];
    imageContainer.append(imageTag);  
    imageTag.addEventListener('click',() => {
        console.log('clicked')
        imageTag.style.border = `3px solid blue`;
    }) 
};