document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("resimler");

   
    function addRandomImages() {
        for (let i = 1; i < 13; i++) { 
            const imageUrl = `https://source.unsplash.com/random/300x300?${i}`;

            const imgElement = document.createElement("img");
            imgElement.src = imageUrl;

            gallery.appendChild(imgElement);
        }
    }

    addRandomImages();
});