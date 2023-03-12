option = {
    xAxis: {
        min: 0,
        max: 5,
    },
    yAxis: {
        min: 0,
        max: 5,
    },
    series: [
        {
            data: [[0,0], [5,5]],
            type: 'line',
            stack: 'one'
        },
        {
            data: [[0,2], [5,2]],
            type: 'line',
            stack: 'one',
            areaStyle: {
                color: "red"
            }
        }
    ]
};
