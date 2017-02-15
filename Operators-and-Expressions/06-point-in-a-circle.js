function isPointInsideCircle(args) {
    const x = Number(args[0]),
        y = Number(args[1]),
        circleX = 0,
        circleY = 0,
        circleRadius = 2,
        checkX = Math.abs(x - circleX),
        checkY = Math.abs(y - circleY),
        distance = Math.sqrt(checkX * checkX + checkY * checkY);

    if (distance <= circleRadius) {
        console.log(`yes ${distance.toFixed(2)}`);
    } else {
        console.log(`no ${distance.toFixed(2)}`);
    }
}

isPointInsideCircle(['-2', '0']);
isPointInsideCircle(['-1', '2']);
isPointInsideCircle(['1.5', '-1']);
isPointInsideCircle(['-1.5', '-1.5']);
isPointInsideCircle(['100', '-30']);
isPointInsideCircle(['0', '0']);
isPointInsideCircle(['0.2', '-0.8']);
isPointInsideCircle(['0.9', '-1.93']);
isPointInsideCircle(['1', '1.655']);
isPointInsideCircle(['0', '1']);
