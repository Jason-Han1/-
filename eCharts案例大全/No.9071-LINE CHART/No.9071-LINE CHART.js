var dimensions = [];
var datava0 = [];
var datava1 = [];
for (var i = 100; i < 1000; i++) {
    datava0.push((Math.sin(i / 0.396) * (i * 8 - 4) + i + 4) / 4);
    datava1.push((Math.sin(i / 0.4) * (i * 8 - 4) + i + 4) / 4);
}

var option = {
    backgroundColor: '#fff',
    title: {
        text: 'LINE ✌ CHART',
        textStyle: {
            align: 'center',
            color: '#000',
            fontSize: 16,
        },
        top: '17',
        left: 'center',
    },
    tooltip: {
        show: true,
        formatter: "{a}:{c}"
    },
    grid: {
        bottom: 50,
        left: 50,
        top: 80,
        right: 10,
    },
    xAxis: {
        data: dimensions,
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: '#000',
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#000'
            }
        },
        axisTick: {
            show: false
        },
    },
    series: [{
            name: 'A',
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: "#01c0c8",
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 10,
                shadowOffsetY: 10,
                shadowOffsetX: 5,
                },
            },
            itemStyle: {
                color: "#fff",
                borderColor: "#01c0c8",
                borderWidth: 1,
            },
            tooltip: {
                show: true
            },

            data: datava0
        },
        {
            name: 'B',
            type: 'line',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    color: "#f6947a",
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur: 10,
                    shadowOffsetY: 10,
                    shadowOffsetX: 5,
                },
            },
            itemStyle: {
                color: "#fff",
                borderColor: "#f6947a",
                borderWidth: 1,
                
            },
            tooltip: {
                show: true
            },

            data: datava1
        },
    ]
};