
    var vriticalCon, levelCon;
    var numbers;
    vriticalCon = document.querySelector("#virticalLinesCollect");
    levelCon = document.querySelector("#levelLinesCollect");
    numbers = parseInt((screen.width / 2 - 99.52 / 2) / 99.52) * 4;
    var vriticallines = new Array(numbers);
    var levelLines = new Array(7);

    //virtical 
    for (var i = 0; i < vriticallines.length; i++) {
        vriticallines[i] = document.createElement("div");
        vriticallines[i].setAttribute("class", "virticalLine");
        var styleString = "left:" + (49.76 - vriticallines.length / 2 * 99.52 + i * 99.52) + "px;"
        vriticallines[i].setAttribute("style", styleString);
        vriticalCon.appendChild(vriticallines[i]);
    }
    // level
    for (var i = 0; i < levelLines.length; i++) {
        levelLines[i] = document.createElement("div");
        levelLines[i].setAttribute("class", "levelLine");
        var styleString = "top:" + (670 + i * 100) + "px;"
        levelLines[i].setAttribute("style", styleString);
        levelCon.appendChild(levelLines[i]);
    }
 
    // build scene
    var tween1 = TweenMax.staggerFromTo(".virticalLine", 1, {
        top: -300,
        opacity: 0

    }, {
        top: 670,
        opacity: 1,
        ease: Power1.easeOut,
    }, 0.04);

    var tween2 = TweenMax.staggerFromTo(".levelLine", 1, {
        left: "190%",
        opacity: 0
    }, {
        left: "0%",
        opacity: 1,
        ease: Power1.easeOut
    }, 0.04);

    var scene1 = new ScrollMagic.Scene({
            triggerElement: "#trigger1"
        })
        .setTween([tween1, tween2])
        .addTo(controller);

    // gradeMove&RenMove
    // gradeMove();
    // function gradeMove() {
    var martopGrad, windowWide, windowHeight, gradHeight, moveDistance, gradSvgHeight;
    var stopDistance, renButtomDistance;
    windowWide = window.innerWidth;
    windowHeight = window.innerHeight;
    gradSvgHeight = document.querySelector("#gradientCut>img").offsetHeight;
    gradHeight = windowWide * 0.49;
    moveDistance = 1370;
    martopGrad = moveDistance + 0.5 * windowHeight - gradSvgHeight;
    stopDistance = 1000;
    renButtomDistance = 85 + gradHeight * 115 / 792;

    //renMOve
    var movePin = TweenMax.staggerFromTo("#rensvg", 1, {
        marginTop: 0,
        fill: "black",
    }, {
        marginTop: 397 + martopGrad + stopDistance + gradSvgHeight - renButtomDistance,
        fill: "white",
        ease: Power0.easeOut
    });

    var sceneMoveRenScene = new ScrollMagic.Scene({
            triggerElement: "#trigger2",
            // duration: 2200
            duration: moveDistance + 397 + stopDistance
        })
        .setTween(movePin)
        .addTo(controller);
    // renMoveEnd

    // stopGrad
    var noMoveGrad = TweenMax.staggerFromTo("#gradientCut", 1, {
        marginTop: martopGrad,
    }, {
        marginTop: martopGrad + stopDistance,
        ease: Power0.easeOut
    });
    var gradStopScen = new ScrollMagic.Scene({
            triggerElement: "#triggerGrad",
            duration: stopDistance,
            offset: moveDistance
        })
        .setTween(noMoveGrad)
        .addTo(controller);
    // stopGradEnd
    var moveGrad = TweenMax.staggerFromTo("#gradientCut", 1, {
        marginTop: 0,
    }, {
        marginTop: martopGrad,
        ease: Power0.easeOut
    });
    var gradMoveScen = new ScrollMagic.Scene({
            triggerElement: "#triggerGrad",
            duration: moveDistance
        })
        .setTween(moveGrad)
        .addTo(controller);
    // }
    // gradmoveEnd
