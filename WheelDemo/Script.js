window.onLoad = function () {
    console.log("script loaded");

}

function toggleHidden(id, outerId) {
    //Loop through all and make sure they are hidden if not already.
    var innerImages = document.getElementsByClassName("CenterImage");
    for (var i = 0; i < innerImages.length; i++) {
        var image = innerImages[i];
        if (!document.getElementById(image.id).classList.contains("Hidden")) {
            document.getElementById(image.id).classList.toggle("Hidden");
        }
    }

    //Turn on correct image.
    if (document.getElementById(id).classList.contains("Hidden")) {
        document.getElementById(id).classList.toggle("Hidden");
    }


    /* FADED COLOR ON OUTSIDE */

    //Loop through all outer images and make sure all are faded.
    var outerImages = document.getElementsByClassName("OuterPerson");
    for (var i = 0; i < outerImages.length; i++) {
        var image = outerImages[i];
        if (!document.getElementById(image.id).classList.contains("Faded")) {
            document.getElementById(image.id).classList.toggle("Faded");
        }
    }

    //Restore color to correct image.
    if (document.getElementById(outerId).classList.contains("Faded")) {
        document.getElementById(outerId).classList.toggle("Faded");
    }
}
