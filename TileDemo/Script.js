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

window.onload = function () {

    //Setup person data
    var personData = [
        {
            firstName: "Jamil",
            lastName: "Albertelli",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/JamilAlbertelliInner.jpg"
        },
        {
            firstName: "Wayne",
            lastName: "Chen",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/WayneChenInner.jpg"
        },
        {
            firstName: "James",
            lastName: "Chung",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/Default.jpg"
        },
        {
            firstName: "Selvi",
            lastName: "Clark",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/ChristinaClarkInner.jpg"
        },
        {
            firstName: "Jarid",
            lastName: "Cottrell",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/CottrellJaridInner.jpg"
        },
        {
            firstName: "Jamie",
            lastName: "Fitzgibbon",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/JaimeInner.jpg"
        },
        {
            firstName: "Hillarie",
            lastName: "Flood",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/HillarieFloodInner2.jpg"
        },
        {
            firstName: "Nyla Beth",
            lastName: "Gawel",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/NylaBethGawelInner.jpg"
        },
        {
            firstName: "Heidi",
            lastName: "Grady",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/HeidiGradyInner.jpg"
        },
        {
            firstName: "Chris",
            lastName: "Hample",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/Default.jpg"
        },
        {
            firstName: "Dee Dee",
            lastName: "Helfenstein",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/DeeDeeHelfensteinInner.jpg"
        },
        {
            firstName: "Andy",
            lastName: "Linn",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/AndyLinnInner.jpg"
        },
        {
            firstName: "Brian",
            lastName: "MacCarthy",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/Default.jpg"
        },
        {
            firstName: "Sandy",
            lastName: "Marshall",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/SandraMarshallInner.jpg"
        },
        {
            firstName: "Mike",
            lastName: "McGinn",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/MichaelMcGinnInner.jpg"
        },
        {
            firstName: "Nirmal",
            lastName: "Mehta",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/MehtaNirmalInner.jpg"
        },
        {
            firstName: "Eric",
            lastName: "Miller",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/EricMillerInner.jpg"
        },
        {
            firstName: "Jason",
            lastName: "Myers",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/JasonMyersInner.jpg"
        },
        {
            firstName: "Andie",
            lastName: "Rauta",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/AndieRautaInner.jpg"
        },
        {
            firstName: "Munjeet",
            lastName: "Singh",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/SinghMunjeetInner.jpg"
        },
        {
            firstName: "Mark",
            lastName: "Tullio",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/MarkTullioInner.jpg"
        },
        {
            firstName: "Scott",
            lastName: "Welles",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/ScottWellesInner.jpg"
        },
        {
            firstName: "Christiana",
            lastName: "Williamson",
            title: "Title",
            fact1: "Fact 1",
            fact2: "Fact 2",
            fact3: "Fact 3",
            imgSrc: "Images/Default.jpg"
        }
    ];

    //Setup filler data
    var fillerData = [
        {
            used: true,
            name: "Diamond",
            src: "Images/Filler/Diamond.png",
            locations: [20]
        },
        {
            used: true,
            name: "Half 1",
            src: "Images/Filler/Half1.png",
            locations: [14]
        },
        {
            used: false,
            name: "Half 2",
            src: "Images/Filler/Half2.png",
            locations: []
        },
        {
            used: true,
            name: "Rectangle Dark",
            src: "Images/Filler/Rectangle Grey.png",
            locations: [25]
        },
        {
            used: true,
            name: "Rectangle Light",
            src: "Images/Filler/Rectangle Light Grey.png",
            locations: [2, 9]
        },
        {
            used: true,
            name: "Chevron Left",
            src: "Images/Filler/Shapes Tile Left.png",
            locations: [13]
        },
        {
            used: true,
            name: "Chevron Right",
            src: "Images/Filler/Shapes Tile Right.png",
            locations: [13]
        },
        {
            used: true,
            name: "Triangle Lines 1",
            src: "Images/Filler/Triangle Lines.png",
            locations: [7]
        },
        {
            used: true,
            name: "Triangle Lines 2",
            src: "Images/Filler/Triangle Lines 2.png",
            locations: [5]
        }
    ];

    /* ---------Fill website with content--------- */

    var textData = [];
    var imageData = [];
    var controlData = [];
    for (var i = 0; i < personData.length; i++) {
        //Text Data Fill
        textData[i] = "<div class=\"TextSingle Hidden\" id=\"text" + i + "\"><h1 class=\"PersonName\">" + personData[i].firstName + " " + personData[i].lastName + "</h1><h2 class=\"PersonTitle\">" + personData[i].title + "</h2><h3 class=\"PersonFact\">" + personData[i].fact1 + "</h3><h3 class=\"PersonFact\">" + personData[i].fact2 + "</h3><h3 class=\"PersonFact\">" + personData[i].fact3 + "</h3></div>";

        //Image Data Fill
        imageData[i] = "<img class=\"BigImage Hidden\" id=\"image" + i + "\" src=\"" + personData[i].imgSrc + "\">";

        //Control Data Fill
        controlData[i] = "<div class=\"ImageTile\"><h1 class=\"Name\">" + personData[i].firstName + " " + personData[i].lastName + "</h1><img class=\"Faded\" src=\"" + personData[i].imgSrc + "\"  onclick=\"toggleHidden('image" + i + "', 'text" + i + "')\"></div>";
    }

    //Add fillers in control
    fillerData.forEach(function (current_value) {
        current_value.locations.forEach(function (innerValue) {
            if (innerValue.used = true) {
                controlData.splice(innerValue, 0, "<img class=\"SmallImage\" src=\"" + current_value.src + " \">");
            };
        });
    });

    //Export to HTML
    var finalText = "";
    textData.forEach(function (current_value) {
        finalText += current_value;
    });
    document.getElementById("textFill").innerHTML = finalText;

    var finalImage = "";
    imageData.forEach(function (current_value) {
        finalImage += current_value;
    });
    document.getElementById("mainImg").innerHTML = finalImage;

    var finalControl = "<img class='BackgroundInfo Faded' id='Info' src='Images/Filler.jpg'>";
    controlData.forEach(function (current_value) {
        finalControl += current_value;
    });
    document.getElementById("control").innerHTML = finalControl;
}
