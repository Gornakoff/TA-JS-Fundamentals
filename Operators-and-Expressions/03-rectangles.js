function rectangle(args) {
    const width = Number(args[0]),
        height = Number(args[1]),
        area = width * height,
        perimeter = (width + height) * 2;

    console.log(`${area.toFixed(2)} ${perimeter.toFixed(2)}`);
}

rectangle([ '2.5', '3' ]);
rectangle([ '5', '5' ]);
rectangle([ '3', '4' ]);