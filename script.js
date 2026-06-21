const photos = [

    "photos/photo1.jpg",
    "photos/photo2.jpg",
    "photos/photo3.jpg"

];

let current = 0;

setInterval(() => {

    current++;

    if(current >= photos.length){

        current = 0;
    }

    document
        .getElementById("slide")
        .src = photos[current];

}, 3000);


document
.getElementById("celebrate")
.addEventListener("click", () => {

    confetti({

        particleCount:200,

        spread:120,

        origin:{
            y:0.6
        }

    });

});
