option = {
    title: {
        top: 0,
        left: 'center',
        text: '矩阵,,相关性,热度,相关性矩阵热图'
    },
    xAxis: {
        type: 'category',

        splitArea: {
            show: true
        }
    },
    yAxis: {
        type: 'category',

        splitArea: {
            show: true
        }
    },
    dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            // start: 0,
            // end: 100, // 百分比
            startValue: 0, // item 
            endValue: 3, // 3 - 0 + 1 = 4 个 
        },
        {
            type: 'slider',
            show: true,
            yAxisIndex: [0],
            left: '95%',
            // start: 0,
            // end: 100,
            startValue: 0,
            endValue: 3, 
        },
        {
            type: 'inside',
            xAxisIndex: [0],
        },
        {
            type: 'inside',
            yAxisIndex: [0],

        }
    ],
    visualMap: {
        top: 30,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        pieces: [{
                max: -100,
                symbolSize: 70,
                color: '#000000',
                colorAlpha: 1,
                label: '爆表',
            },
            {
                min: -100,
                max: -90,
                symbolSize: 60,
                color: '#27727b',
                colorAlpha: 1
            },
            {
                min: -90,
                max: -80,
                symbolSize: 60,
                color: '#27727b',
                colorAlpha: 1
            },
            {
                min: -80,
                max: -50,
                symbolSize: 40,
                color: '#27727b',
                colorAlpha: 0.4
            },
            {
                min: -50,
                max: 0,
                symbolSize: 20,
                color: '#27727b',
                colorAlpha: 0.4
            },
            {
                min: 0,
                max: 50,
                symbolSize: 20,
                color: '#c1232b',
                colorAlpha: 0.4
            },
            {
                min: 50,
                max: 80,
                symbolSize: 40,
                color: '#c1232b',
                colorAlpha: 0.4
            },
            {
                min: 80,
                max: 90,
                symbolSize: 60,
                color: '#c1232b',
                colorAlpha: 1
            },
            {
                min: 90,
                max: 100,
                symbolSize: 70,
                color: '#c1232b',
                colorAlpha: 1
            },
            {
                label: '爆表',
                min: 101,
                symbolSize: 70,
                color: '#000000',
                colorAlpha: 1
            },
        ]
    },
    series: [{
        type: 'scatter',
        symbol: 'rect',
        data: [
            [0, 0, 100],
            [0, 1, 64],
            [0, 2, -68],
            [0, 3, 67],
            [0, 4, 90],
            [0, 5, 83],
            [1, 0, 64],
            [1, 1, 100],
            [1, 2, -58],
            [1, 3, 33],
            [1, 4, 59],
            [1, 5, 61],
            [2, 0, -68],
            [2, 1, -58],
            [2, 2, 100],
            [2, 3, -43],
            [2, 4, -65],
            [2, 5, -68],
            [3, 0, 67],
            [3, 1, 33],
            [3, 2, -43],
            [3, 3, 100],
            [3, 4, 55],
            [3, 5, 46],
            [4, 0, 90],
            [4, 1, 59],
            [4, 2, -65],
            [4, 3, 55],
            [4, 4, 100],
            [4, 5, 93],
            [5, 0, 83],
            [5, 1, 61],
            [5, 2, -68],
            [5, 3, 46],
            [5, 4, 93],
            [5, 5, 100]
        ],
        label: {
            formatter: '{@[2]}',
            show: true
        },
        itemStyle: {
            emphasis: {
                borderColor: '#333',
                borderWidth: 1
            }
        }
    }]
};