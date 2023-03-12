option = {
    backgroundColor: 'RGBA(7, 53, 91, 1)',
    color: ['#00FFFF','#A1E941','#F6E281'],
    legend: {
        show: true,
        right: '5%',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0, 255, 233,0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(255, 255, 255,1)',
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 233,0)'
                    }],
                    global: false
                }
            },
        },
    },
    grid: {
        top: '15%',
        left: '5%',
        right: '5%',
        bottom: '15%',
        // containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: false
        },
        splitArea: {
            // show: true,
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            color: '#fff'
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        data: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18','19', '20', '21', '22', '23', '24','25', '26', '27', '28', '29', '30'],

    }],

    yAxis: [{
        type: 'value',
        min: 0,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(50, 180, 181, 1)'
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
            margin: 10,
            textStyle: {
                color: '#d1e6eb',

            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [
        {
            name: '结构化',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: false,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'none',
            lineStyle: {
                normal: {
                    color: "rgba(0, 255, 255, 1)",
                },
            },
            tooltip: {
                show: true
            },
            data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02,502.84, 205.97, 332.79, 281.55, 398.35, 214.02,502.84, 205.97, 332.79, 281.55, 398.35, 214.02,502.84, 205.97, 332.79, 281.55, 398.35, 214.02,502.84, 205.97, 332.79, 281.55, 398.35, 214.02 ]
        },
        {
            name: '半结构化',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: false,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'none',
            lineStyle: {
                normal: {
                    color: "rgba(161, 233, 65, 1)",
                },
            },
            tooltip: {
                show: true
            },
            data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14,281.55, 398.35, 214.02, 179.55, 289.57, 356.14,281.55, 398.35, 214.02, 179.55, 289.57, 356.14,281.55, 398.35, 214.02, 179.55, 289.57, 356.14,281.55, 398.35, 214.02, 179.55, 289.57, 356.14 ],
        },
        {
            name: '非结构化',
            type: 'line',
            smooth: true, //是否平滑
            showAllSymbol: false,
            // symbol: 'image://./static/images/guang-circle.png',
            symbol: 'none',
            lineStyle: {
                normal: {
                    color: "rgba(246, 226, 129, 1)",
                },
            },
            tooltip: {
                show: true
            },
            data: [200,210,220,230,240,250,260,250,240,230,200,190,220,230,234,240,250,270,280,281,271,269,260,250,244,250,256,267,278,289,300]
        },
    ]
};