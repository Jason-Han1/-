var json = {
    chart0: {
        xcategory: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
        low: [3, 10, 5, 20, 8, 35, 5, 25, 20, 37, 30, 39],
        lowLine: [],
    }
};

var zrUtil = echarts.util;

zrUtil.each(json.chart0.xcategory, function(item, index) {
    json.chart0.lowLine.push([{
        coord: [index, json.chart0.low[index]]
    }, {
        coord: [index + 1, json.chart0.low[index + 1]]
    }]);
});

option = {
    backgroundColor: "#fff",
    title: {
        text: '两种类型结合',
        x: 'center',
        top: 50,
        textStyle: {
            color: '#747474',
            fontSize: 14,
            fontWeight: 100,
        }
    },
    grid: {
        bottom: 50,
        left: 50,
        top: 130,
        right: 50,
    },
    xAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            show: false
        },
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']
    },
    yAxis: {
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
    },
    series: [{
            type: 'line',
            // smooth: true,
            symbol: 'circle',
            symbolSize: 25,
            lineStyle: {
                normal: {
                    width: 4,
                    shadowColor: 'rgba(155, 18, 184, .3)',
                    shadowBlur: 10,
                    shadowOffsetY: 20,
                    shadowOffsetX: 20,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [{
                            offset: 0,
                            color: 'rgba(255, 255, 255,1)'
                        }, {
                            offset: 0.1,
                            color: 'rgba(255, 75, 172,1)'
                        }, {
                            offset: 0.9,
                            color: 'rgba(155, 18, 184,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(255, 255, 255,1)'
                        }, ]
                    )
                }
            },
            itemStyle: {
                color: '#fff',
                borderColor: "#7c1fa2",
                borderWidth: 4,
            },

            data: [3, 10, 5, 20, 8, 35, 5, 25, 20, 37, 30, 39]
        },
        {
            name: '',
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            zlevel: 1,
            smooth: true,
            symbol: 'circle',
            symbolSize: 25,
            effect: {
                show: true,
                smooth: false,
                period: 2,
                symbolSize: 8
            },
            lineStyle: {
                normal: {
                    color: '#f00',
                    width: 0,
                    opacity: 0,
                    curveness: 0,
                }
            },
            data: json.chart0.lowLine
        },

    ]
};