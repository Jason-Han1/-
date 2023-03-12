const data = [
    ["0~5", 1.5, 0, 2, 10, 2.5, 40, 3, 10, 3.5, 0],
    ["5~10", 1, 0, 2, 11, 2.5, 33, 3, 11, 4, 0],
    ["10~15", 1, 0, 2, 11, 2.5, 33, 3, 11, 4, 0],
];

// @ts-ignore

option = {
     dataset: {
      // @ts-ignore
      sourceHeader: false,
      source: data,
      dimensions: [
        { type: "ordinal" }
      ],
    }, 
    grid: {
        left: 0,
        right: 0,
        containLabel: true,
    },
    // @ts-ignore
    xAxis: {
        type: "category",
        // boundaryGap: false,
    },
    yAxis: {
        boundaryGap: [0, "20%"],
    },
    series: [{
        type: "custom",
        encode: {
            y: [2, 4, 6, 8],
            x: 0,
        },
        data,
        // @ts-ignore
        renderItem(params, api) {
            const category = api.value(0);
            console.log(category);
            const pointsNum = (data[params.dataIndex].length - 1) / 2;
            const categoryIndex = params.dataIndex;
            const groupWidth = api.size([0, 0])[0];
            const unitWidth = groupWidth / (pointsNum - 1);
            const leftPadding = (api.getWidth() - params.coordSys.width) / 2;
            const points = new Array(pointsNum).fill(null).map((value, index) => {
                const num = api.value(index * 2 + 2);
                const point = api.coord([categoryIndex, num]);
                const center = (point[0] - leftPadding - groupWidth * categoryIndex) / unitWidth;
                const waveLength = api.value(index * 2 + 1);
                point[0] += unitWidth * ((waveLength / 5) * (pointsNum - 1) - center);
                return point;
            });

            return {
                type: "polyline",
                shape: {
                    points,
                    smooth: "spline",
                },
                style: api.style({
                    fill: null,
                    stroke: api.visual("color"),
                    lineWidth: 2,
                }),
            };
        },
    }, ],
};