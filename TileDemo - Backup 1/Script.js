function toggleHidden(id, selectorId) {
    //Loop through all and make sure they are hidden if not already.
    var images = document.getElementsByClassName("BigImage");
    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        if (!document.getElementById(image.id).classList.contains("Hidden")) {
            document.getElementById(image.id).classList.toggle("Hidden");
        }
    }

    //Turn on correct image.
    if (document.getElementById(id).classList.contains("Hidden")) {
        document.getElementById(id).classList.toggle("Hidden");
    }
}
