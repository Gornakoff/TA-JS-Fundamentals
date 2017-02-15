function checkPointPosition(args) {
    const point = {
            x: Number(args[0]),
            y: Number(args[1])
        },
        circle = {
            x: 1,
            y: 1,
            radius: 1.5
        },
        rectangle = {
            top: 1,
            left: -1,
            width: 6,
            height: 2
        };

    let checkIsInsideCircle = (point.x - circle.x) ** 2 + (point.y - circle.y) ** 2 <= circle.radius ** 2;
    let checkIsInsideRectangle = (point.x >= rectangle.left && point.x <= rectangle.left + rectangle.width) && (point.y >= rectangle.top - rectangle.height & point.y <= rectangle.top);

    let insideCircle = 'inside';
    let insideRectangle = 'inside';

    if (!checkIsInsideCircle) {
        insideCircle = 'outside';
    }

    if (!checkIsInsideRectangle) {
        insideRectangle = 'outside';
    }

    console.log(`${insideCircle} circle ${insideRectangle} rectangle`);
}

checkPointPosition(['2.5', '2']);
checkPointPosition(['0', '1']);
checkPointPosition(['2.5', '1']);
checkPointPosition(['1', '2']);