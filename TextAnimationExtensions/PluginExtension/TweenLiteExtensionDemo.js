window.onload = function () {
    //Setup Variables
    var initial = "I.D.E.A.S"
    var replaceContent = "Identify.Develop.Enhance.Apply.Support";

    //Split Variables
    var initialArray = initial.split(".");
    var replacementArray = replaceContent.split(".");

    //Set the initial text value into list
    var text = "";

    initialArray.forEach(function (element, index) {
        console.log(element);
        text += "<li id='letter" + (index) + "'>" + element + ".</li>";
    });

    document.getElementById("textContent").innerHTML = text;


    //Replace each letter with the word in delayed sequence

    for (i = 0; i < initialArray.length; i++) {
        newText = replacementArray[i];
        console.log(newText);
        TweenLite.to(document.getElementById('letter' + i), 2, {
            text: {
                value: newText,
                ease: Linear.easeNone
            },
            delay: 2 + i
        });
    }
}
