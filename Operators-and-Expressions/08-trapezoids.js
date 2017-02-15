function trapezoidArea(args) {
    const a = Number(args[0]),
        b = Number(args[1]),
        h = Number(args[2]),
        area = (a + b) / 2 * h;

        console.log(area.toFixed(7));
}

trapezoidArea(['5', '7', '12']);
trapezoidArea(['2', '1', '33']);
trapezoidArea(['8.5', '4.3', '2.7']);
trapezoidArea(['100', '200', '300']);
trapezoidArea(['0.222', '0.333', '0.555']);