option = {
    // title: {
    //     text: '血压分布'
    // },
    color: ['#81cefc', '#7cedc4', '#f4e07a', '#ff947b', '#ff5252'],
    tooltip: {
        show: false
    },
    legend: {
        orient: 'vertical',
        right: '5%',
        top: 'center',
        selectedMode: false,
        itemWidth: 20,
        itemHeight: 20,
        data: [{
                name: '正常',
                icon: 'roundRect'
            },
            {
                name: '正常高值',
                icon: 'roundRect'
            },
            {
                name: '轻度',
                icon: 'roundRect'
            },
            {
                name: '中度',
                icon: 'roundRect'
            },
            {
                name: '危险',
                icon: 'roundRect'
            },
        ]
    },
    grid: {
        left: '3%',
        right: '20%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        name: '低压（舒张压）',
        nameLocation: 'end',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        min: 50
    }],
    yAxis: [

        {
            type: 'value',
            name: '高压（收缩压）',
            nameLocation: 'end',
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            min: 60

        }
    ],
    series: [{
            type: 'line',
            name: '正常',
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 0,
                    color: '#81cefc'
                }
            },
            areaStyle: {
                normal: {
                    color: '#81cefc',
                }
            },
            z: 10,
            connectNulls: true,
            data: [
                [0, 130],
                [85, 130]
            ]


        },
        {
            type: 'line',
            name: '正常高值',
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 0,
                    color: '#7cedc4'
                }
            },
            areaStyle: {
                normal: {
                    color: '#7cedc4',
                }
            },
            itemStyle: {},
            z: 9,
            connectNulls: true,
            step: true,
            data: [
                [0, 140],
                [90, 140]
            ]

        },
        {
            type: 'line',
            name: '轻度',
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 0,
                    color: '#f4e07a'
                }
            },
            areaStyle: {
                normal: {
                    color: '#f4e07a'
                }
            },
            z: 8,
            data: [
                [0, 160],
                [100, 160]
            ]
        },
        {
            type: 'line',
            name: '中度',
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 0,
                    color: '#ff947b'
                }
            },
            areaStyle: {
                normal: {
                    color: '#ff947b'
                }
            },
            z: 7,
            data: [
                [0, 180],
                [110, 180]
            ]
        },
        {
            type: 'line',
            name: '危险',
            symbol: 'none',
            lineStyle: {
                normal: {
                    width: 0,
                    color: '#e21b1b'
                }
            },
            areaStyle: {
                normal: {
                    color: '#e21b1b'
                }
            },
            z: 1,
            data: [
                [0, 210],
                [120, 210]
            ]
        },
        {
            type: 'scatter',
            symbol: 'circle',
            symbolSize: 5,
            itemStyle: {
                normal: {
                    color: '#fff'
                }
            },
            z: 20,
            data: [
                [54, 112],
                [80, 120],
                [70, 125],
                [100, 130],
                [90, 128],
                [85, 135],
                [111, 188],
                [116, 200]
            ]
        },
    ]
};