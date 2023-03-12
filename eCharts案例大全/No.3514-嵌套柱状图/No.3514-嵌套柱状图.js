option = {
    xAxis: {
        data: ['a', 'b', 'c', 'd'],
        axisTick: {show: false},
        axisLabel: {
            formatter: 'barGap: \'-100%\''
        }
    },
    yAxis: {
        splitLine: {show: false}
    },
    dataZoom: {
        type: "inside",
    },
    animationDurationUpdate: 1200,
    series: [{
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#ddd'
            }
        },
        silent: true,
        barWidth: 40,
        // barGap: '-88%', // Make series be overlap
        data: [60, 60, 60, 60]
    }, {
        type: 'bar',
        barWidth: 30,
        z: 10,
        itemStyle: {
            color: "white"
        },
        data: [60, 60, 60, 60]
    }, {
        type: 'bar',
        barWidth: 23,
        barGap: '-88%', // Make series be overlap
        z: 10,
        data: [45, 60, 13, 25]
    },
    ]
};



var barGaps = ['30%', '-100%'];
var loopIndex = 0;
