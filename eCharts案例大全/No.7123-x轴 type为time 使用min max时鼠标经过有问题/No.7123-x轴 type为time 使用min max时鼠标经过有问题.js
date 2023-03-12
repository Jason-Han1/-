let seriesData = [
    ["2020-07-01 03:10:00", 100],
    ["2020-07-01 04:20:00", 97.83],
    ["2020-07-01 06:40:00", 100],
    ["2020-07-01 10:00:00", 130]
];
option = {
    title: {
        text: 'Awesome Chart'
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            lineStyle: {
                color: "red",
                type: "dotted"
            }
        }

    },
    xAxis: {
        type: "time",
        min: "2020-07-01 00:00:00",
        max: "2020-07-01 23:59:59",
        axisTick: {
            show: false
        }
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: seriesData
    }]
};