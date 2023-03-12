option = {
    backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            z: -1,
            lineStyle: {
                width: 2,
                color: '#2196f3'
            },
        }
    },
    grid: {
        left: '15%',
        top: '25%',
        right: '15%',
        bottom: '25%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['Jan', 'Feb', 'Mar', 'Apr ', 'May '],
        axisLabel: {
            show: true,
            textStyle: {
                color: '#c9c9c9',
                fontSize: 18,
            },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                type: 'dotted',
                color: '#ccc'
            }
        }
    }],
    yAxis: [{
        type: 'value',
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ccc',
                type: 'dotted'
            }
        },
    }],
    series: [{
            name: '新增投资额',
            type: 'line',
            smooth: true,
            symbol: 'emptyCircle',
            symbolSize: 10,
            showSymbol: false,
            areaStyle: {
                opacity: 0.3,
                color: {
                    type: "linear",
                    x: 1,
                    y: 0,
                    y2: 1,
                    colorStops: [{
                            "offset": 0,
                            "color": "#00bcd4"
                        },
                        {
                            "offset": 1,
                            "color": "white" // 100% 处的颜色
                        }
                    ],
                    "globalCoord": false // 缺省为 false
                }
            },
            lineStyle: {
                width: 6,
                color: '#2196f3'
            },
            itemStyle: {
                borderWidth: 8,
                color: '#2196f3'
            },
            data: [40, 35, 50, 45, 55],
        },
        {
            name: '新增投资公司',
            type: 'line',
            smooth: true,
            symbol: 'emptyCircle',
            symbolSize: 10,
            showSymbol: false,
            areaStyle: {
                opacity: 0.3,
                color: {
                    type: "linear",
                    x: 1,
                    y: 0,
                    y2: 1,
                    colorStops: [{
                            "offset": 0,
                            "color": "#0052d9"
                        },
                        {
                            "offset": 1,
                            "color": "white" // 100% 处的颜色
                        }
                    ],
                    "globalCoord": false // 缺省为 false
                }
            },
            lineStyle: {
                color: '#0052d9',
                width: 6
            },
            itemStyle: {
                color: '#0052d9',
                borderWidth: 8,
            },
            data: [35, 20, 40, 30, 22],
        }
    ]
};

myChart.resize();