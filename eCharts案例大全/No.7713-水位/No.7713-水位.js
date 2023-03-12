option = {
     title: {
            x: 'center',
            y: 'center',
            text: "这{a|暂}{b|无}{c|数}{d|据}",
            textStyle: {
                fontSize: 30,
                color: "#333",
                rich: {
                    a: {
                        color: 'darkgray',
                        fontSize: 80,
                        fontWeight: 900,
                    },
                    b: {
                        color: 'darkgray',
                        fontSize: 70,
                        fontWeight: 900,
                    },
                    c: {
                        color: 'darkgray',
                        fontSize: 60,
                        fontWeight: 900,
                    },
                    d: {
                        color: 'darkgray',
                        fontSize: 50,
                        fontWeight: 900,
                    }
                }
            }
        },
    xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false,
        data: ['Mon', 'Tue']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            data: [820, 820],
            type: 'line',
        },
        {
            data: [900, 900],
            type: 'line',
            areaStyle: {}

        }
    ]
};
setTimeout(function() {
    option.title={}
    // myChart.clear();
    // myChart.setOption(option);
}, 3000);


console.log(echarts)