
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


    // move SvgBackgroundBegin
    var svgFontCollectionHeight = document.querySelector("#svgFonts").offsetHeight;

    var fontsTweens = fontBackgroundTween(100);
    var svgFontsMoveScene = new ScrollMagic.Scene({
            triggerElement: "#triggerFonts",
            duration: svgFontCollectionHeight
        })
        .setTween(fontsTweens)
        .addTo(controller);



    // function fontBackGroundBegin


    function fontBackgroundTween(numbers) {

        // Test one fontBackGroundBegin
        var svgFontCol;
        var moveSvgs = [];
        var svgFontsNew = new Array(numbers);
        var colorMax = [0.4, 0.6, 0.8, 1];
        // 12278 too big
        var svgMoveRange = svgFontCollectionHeight - 300;
        svgFontCol = document.querySelector("#svgFonts");
        for (var a = 0; a < svgFontsNew.length; a++) {
            var i = a % 7;
            var idNumber, srcAddress, randomTop;
            randomTop = random(svgMoveRange);
            idNumber = "svgFonts" + a;
            srcAddress = "svg/fonts/svgFonts" + i + ".svg";
            svgFontsNew[i] = document.createElement("img");
            svgFontsNew[i].setAttribute("class", "svgFontsBack");
            svgFontsNew[i].setAttribute("id", idNumber);
            svgFontsNew[i].setAttribute("src", srcAddress);
            svgFontsNew[i].style.top = randomTop;
            svgFontsNew[i].style.opacity = colorMax[Math.floor(Math.random() * colorMax.length)];

            svgFontCol.appendChild(svgFontsNew[i]);

            var moveSvg = TweenMax.staggerFromTo("#" + idNumber, 1, {
                top: randomTop,
            }, {
                top: random(svgMoveRange),
                ease: Power0.easeOut
            });
            moveSvgs.push(moveSvg);
            // Test fontBackGroundEnd
        }
        return moveSvgs;

    }
    // function fontBackGroundEnd
    function random(number) {
        return Math.floor(Math.random() * number);
    }
    // move SvgBackgroundEnd

    // movePrintBegin
    var movePrint = TweenMax.staggerFromTo("#fontMove", 1, {
        top: -371,
    }, {
        top: 0,
        ease: Power3.easeOut
    });
    var gradStopScen = new ScrollMagic.Scene({
            triggerElement: "#triggerPrint",
            duration: 600
        })
        .setTween(movePrint)
        .addTo(controller);

    // movePrintEnd

    // wuHedisplayBegin
    // wuHedisplay();

    // function wuHedisplay() {
    var weHe = new Array(4);
    weHe[0] = document.querySelector("#Layer_1-2 > g:nth-child(1)");
    weHe[1] = document.querySelector("#Layer_1-2 > g:nth-child(2)");
    weHe[2] = document.querySelector("#Layer_1-2 > g:nth-child(3)");
    weHe[3] = document.querySelector("#Layer_1-2 > g:nth-child(4)");
    var weHeOver = new Array(4);
    weHeOver[0] = document.querySelector("#wuHanOverCol > img:nth-child(1)");
    weHeOver[1] = document.querySelector("#wuHanOverCol > img:nth-child(2)");
    weHeOver[2] = document.querySelector("#wuHanOverCol > img:nth-child(3)");
    weHeOver[3] = document.querySelector("#wuHanOverCol > img:nth-child(4)");

    weHe[0].onmouseover = function() {
        weHeOver[0].style.visibility = "visible";

    }
    weHe[1].onmouseover = function() {
        weHeOver[1].style.visibility = "visible";

    }
    weHe[2].onmouseover = function() {
        weHeOver[2].style.visibility = "visible";

    }
    weHe[3].onmouseover = function() {
        weHeOver[3].style.visibility = "visible";

        }
        // wuHedisplayEnd