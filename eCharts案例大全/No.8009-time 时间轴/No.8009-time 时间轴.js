option = {
    title: {
        text: 'time Chart'
    },
    label: {
        show: true,
        position: 'top',
        formatter: '{c}',
    },
    xAxis: {
        type: 'time',
        boundaryGap: false,
        axisLabel: {
            rotate: 30
        },
        // data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    legend: {
        data: ['111', '222', '333']
    },
    tooltip: {
        trigger: 'axis',
        formatter: "{a}  {b}  {c}",
    },
    yAxis: {},
    series: [{
            name: "111",
            type: 'bar',
            barGap: 0,
            barWidth: 10,
            data: [
                ['2019-01-01 00:00:00', 100],
                ['2019-03-01 12:00:00', 38],
                ['2020-01-01 00:00:00', 10],
                ['2020-03-01 00:00:00', 180],
            ]
        },
        {
            name: '222',
            type: 'bar',
            barGap: 0,
            barWidth: 10,
            data: [
                ['2019-01-01 00:00:00', 100],
                ['2019-10-01 00:00:00', 38],
                ['2020-02-11 03:00:00', 10],
                ['2020-03-01 00:00:00', 180],
            ]
        },
        {
            name: '333',
            type: 'line',
            smooth: true,
            data: [
                ['2019-01-01 00:00:00', 100],
                ['2019-10-01 00:00:00', 38],
                ['2020-01-01 00:00:00', 10],
                ['2020-03-01 00:00:00', 180],
            ]
        }
    ]
};