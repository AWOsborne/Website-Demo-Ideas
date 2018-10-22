function toggleHidden(id, textId) {
    //Loop through all and make sure they are hidden if not already.
    var images = document.getElementsByClassName("BigImage");
    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        if (!document.getElementById(image.id).classList.contains("Hidden")) {
            document.getElementById(image.id).classList.toggle("Hidden");
        }
    }

    var text = document.getElementsByClassName("TextSingle");
    for (var i = 0; i < text.length; i++) {
        var tmp = text[i];
        console.log(tmp);
        if (!document.getElementById(tmp.id).classList.contains("Hidden")) {
            document.getElementById(tmp.id).classList.toggle("Hidden");
        }
    }

    //Turn on correct image.
    if (document.getElementById(id).classList.contains("Hidden")) {
        document.getElementById(id).classList.toggle("Hidden");
    }

    if (document.getElementById(textId).classList.contains("Hidden")) {
        document.getElementById(textId).classList.toggle("Hidden");
    }
}
