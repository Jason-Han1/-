var unit = '℃'
var title = '温度'
var color = 'rgba(68, 163, 252, 1)'
var color1 = 'rgba(17, 58, 94, 1)'
var color2 = 'rgba(17, 58, 94, 1)'
var color3 = 'rgba(4, 32, 56, 1)'


option = {
    backgroundColor: 'rgba(2, 22, 48, 1)',
    title: [{
            text: unit,
            x: '10',
            y: '35',

            textStyle: {
                color: '#A4A8AE',
                fontWeight: 400,
                fontSize: 14,
                rotate: 90
            }
        },
        {
            text: 'h',
            x: '935',
            y: '163',

            textStyle: {
                color: '#A4A8AE',
                fontWeight: 400,
                fontSize: 14,
                rotate: 90
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: '#44A3FC',
                width: 1,
                type: 'solid'
            }
        }
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23
        ],
        axisLabel: {
            show: true,
            textStyle: {
                color: '#A5A5A5'
            }
        },
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: '#A5A5A5'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#1B2D46',
                width: 1
            }
        }
    }],
    series: [{
        color: [color],
        name: title,
        type: 'line',
        smooth: false,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: color1
                    },
                    {
                        offset: 0.4,
                        color: color2
                    },
                    {
                        offset: 1,
                        color: color3
                    }
                ])
            }
        },
        data: [
          10,
          11,
          11,
          12,
          14,
          15,
          16,
          17,
          18,
          20,
          22,
          21,
          22,
          23,
          22,
          21,
          18,
          17,
          15,
          15,
          14,
          13,
          12,
          10
        ],
        markPoint: {
            // symbol: "circle",
            itemStyle: {
                color: 'rgba(255, 255, 255, 0)',
                fontSize: 16,
                fontWeight: 400
            },
            data: [{
                    type: 'max',
                    name: '最大值'
                },
                {
                    type: 'min',
                    name: '最小值'
                }
            ]
        }
    }]

};