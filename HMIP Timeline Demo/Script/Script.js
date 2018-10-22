window.onload = function () {
    console.log("Loaded Script");

    //Set all the drawing variables
    const lightbulb = new Vivus("DiscoverLightbulb", {
        start: "manual",
        duration: 150
    });

    const discoverPath = new Vivus("DiscoverPath", {
        start: "manual",
        duration: 200
    });

    const organizePath = new Vivus("OrganizePath", {
        start: "manual",
        duration: 200
    });

    const assessPath1 = new Vivus("AssessPath1", {
        start: "manual",
        duration: 100
    });

    const assessPath3 = new Vivus("AssessPath3", {
        start: "manual",
        duration: 100
    });

    const reassessPath = new Vivus("AcceleratePath", {
        start: "manual",
        duration: 200
    });

    const recommendationsPath = new Vivus("ReassessPath", {
        start: "manual",
        duration: 200
    });


    //Run all the animations

    //Discover
    $('.scrollTriggerDiscover').waypoint(function (direction) {
        lightbulb.play(function () {
            console.log("lightbulb success!");
        });

        //Add animated fadein on lightbulb
        document.getElementById("DiscoverLightbulbShadow").classList.toggle('Hidden');
        $('.Discover').addClass('animated fadeIn');

        this.destroy();
    }, {
        offset: '0%'
    });


    //PathToOrganize
    $('.scrollTriggerOrganize').waypoint(function (direction) {
        discoverPath.play(function () {
            console.log("discoverPath success!");
        });

        setTimeout(function () {
            //Reveal letters with offset
            var letters = document.getElementsByClassName("Letter");

            
            for (var i = 0; i < letters.length; i++) {
                letters[i].classList.toggle('Hidden');
            }
            
            
            /**
            for (var i = 0; i < letters.length-1; i++) {
                setTimeout(function () {
                    letters[i].classList.toggle('Hidden')
                }, parseInt(Math.random() * 1000));
            }
            */

            //Letters Pop Out
            document.getElementById("OrganizeLetterI").classList.toggle('PopI');
            document.getElementById("OrganizeLetterP").classList.toggle('PopP');
            $('.Organize').addClass('animated fadeIn');
        }, 2500);

        this.destroy();
    }, {
        offset: '10%'
    });


    //PathToAssess
    $('.scrollTriggerAssess').waypoint(function (direction) {
        organizePath.play(function () {
            console.log("organizePath success!");
        });

        //Add fade in animation
        setTimeout(function () {
            document.getElementById("AssessShadow").classList.toggle('Hidden');
            document.getElementById("AssessGrowth").classList.toggle('Hidden');
            $('.Assess').addClass('animated fadeIn');
        }, 2500);



        this.destroy();
    }, {
        offset: '30%'
    });


    //Paths to Accelerate
    $('.scrollTriggerAccelerate').waypoint(function (direction) {
        assessPath1.play(function () {
            console.log("assessPath1 success!");
        });

        setTimeout(function () {
            document.getElementById("AssessPath2").classList.toggle('Hidden');
            //Delayed second path
            assessPath3.play(function () {
                console.log("assessPath3 success!")
            });
        }, 1200);

        setTimeout(function () {
            document.getElementById("AccelerateBike").classList.toggle('Hidden');
            document.getElementById("AccelerateBike").classList.toggle('Zoomin');
            $('.Accelerate').addClass('animated fadeIn');
        }, 2500);

        this.destroy();
    }, {
        offset: '70%'
    });


    //Path to Reassess
    $('.scrollTriggerReassess').waypoint(function (direction) {
        reassessPath.play(function () {
            console.log("reassessPath success!");
        });

        //Add fade in animation
        setTimeout(function () {
            document.getElementById("ReassessPresentation").classList.toggle('Hidden');
            document.getElementById("ReassessShadow").classList.toggle('Hidden');
            $('.Reassess').addClass('animated fadeInUp');
        }, 2500);

        this.destroy();
    }, {
        offset: '75%'
    });


    //Path to Recommendations
    $('.scrollTriggerRecommendations').waypoint(function (direction) {
        recommendationsPath.play(function () {
            console.log("recommendationsPath success!");
        });

        //Add fade in annimation
        setTimeout(function () {
            document.getElementById("RecommendationsFlag").classList.toggle('Hidden');
            document.getElementById("RecommendationsShadow").classList.toggle('Hidden');
            $('#RecommendationsShadow').addClass('animated fadeIn');
            $('#RecommendationsFlag').addClass('animated fadeInDown');
        }, 2500);

        this.destroy();
    }, {
        offset: '70%'
    });
};
