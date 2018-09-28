window.onload = function () {
    console.log("Loaded Script");

    //Discover
    $('.scrollTriggerDiscover').waypoint(function (direction) {
        const lightbulb = new Vivus("DiscoverLightbulb", {
            duration: 150
        });
        lightbulb.play(function () {
            console.log("lightbulb success!");
        });
        
        //Add animated fadein on lightbulb
        $('.Discover').addClass('animated fadeIn');
        
        this.destroy();
    }, {
        offset: '70%'
    });


    //PathToOrganize
    $('.scrollTriggerOrganize').waypoint(function (direction) {
        const discoverPath = new Vivus("DiscoverPath", {
            duration: 200
        });
        discoverPath.play(function () {
            console.log("discoverPath success!");
        });
        this.destroy();
    }, {
        offset: '70%'
    });


    //PathToAssess
    $('.scrollTriggerAssess').waypoint(function (direction) {
        const organizePath = new Vivus("OrganizePath", {
            duration: 200
        });
        organizePath.play(function () {
            console.log("organizePath success!");
        });
        
        //Add fade in animation
        $('.Assess').addClass('animated fadeIn');
        
        this.destroy();
    }, {
        offset: '70%'
    });


    //Paths to Accelerate
    $('.scrollTriggerAccelerate').waypoint(function (direction) {
        const assessPath1 = new Vivus("AssessPath1", {
            duration: 200
        });
        assessPath1.play(function () {
            console.log("assessPath1 success!");
        });

        const assessPath3 = new Vivus("AssessPath3", {
            duration: 200
        });
        
        //Delayed second path
        setTimeout(assessPath3.play(function () {
            console.log("assessPath3 success!")
        }), 2000);
        

        this.destroy();
    }, {
        offset: '90%'
    });


    //Path to Reassess
    $('.scrollTriggerReassess').waypoint(function (direction) {
        const reassessPath = new Vivus("AcceleratePath", {
            duration: 200
        });
        reassessPath.play(function () {
            console.log("reassessPath success!");
        });
        
        //Add fade in animation
        $('.Reassess').addClass('animated fadeIn');
        
        this.destroy();
    }, {
        offset: '100%'
    });


    //Path to Recommendations
    $('.scrollTriggerRecommendations').waypoint(function (direction) {
        const recommendationsPath = new Vivus("ReassessPath", {
            duration: 200
        });
        recommendationsPath.play(function () {
            console.log("recommendationsPath success!");
        });
        
        //Add fade in annimation
        $('.Recommendations').addClass('animated fadeIn');
        
        this.destroy();
    }, {
        offset: '100%'
    });
};
