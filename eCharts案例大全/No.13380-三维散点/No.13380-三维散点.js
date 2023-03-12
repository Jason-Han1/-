option = {
    visualMap: [{
        bottom: 10,
        calculable: true,
        dimension: 3,
        max: 100,
        inRange: {
            color: ['#1710c0', '#0b9df0', '#00fea8', '#00ff0d', '#f5f811', '#f09a09', '#fe0300'],
            symbolSize: [1, 100]
        },
        textStyle: {
            color: '#000'
        }
    }],
    grid3D: {
        show: true,
        boxWidth: 90,
        boxHeight: 90,
        boxDepth: 90,
        axisLine: {
            show: true,
            lineStyle: {
                color: 'red',
                opacity: 1,
                width: 2
            }
        },
        axisLabel: {
            show: true,
            margin: 5,
            textStyle: {
                color: 'blue',
                fontSize: 20
            }
        },
        axisTick: {
            show: false,
            length: 0,
            lineStyle: {
                color: '#eee',
                opacity: 0,
                width: 0
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#eee'],
                opacity: 1,
                width: 1
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.3)']
            }
        },
        axisPointer: {
            show: true,
            lineStyle: {
                color: 'red',
                opacity: 1,
                width: 1
            },
            label: {
                show: true,
                margin: 8,
                textStyle: {
                    color: 'red',
                    fontSize: 20
                }
            }
        }
    },
    xAxis3D: {
        show: false,
        name: '星期',
        type: 'category',
        data:['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis3D: {
        show: false,
        name: '时间',
        type: 'category',
        data:['3am','6am','9am','12am','3pm','6pm','9pm','12pm']
    },
    zAxis3D: {
        show: false,
        name: '降水量/cc',
        type: 'value'
    },
    series: [{
        type: 'scatter3D',
        symbolSize: 50,
        coordinateSystem: 'cartesian3D',
        data: [
            ['周一', '3am', 30, 200, 200],
            ['周三', '9am', 10, 9, 9]
        ],
        itemStyle: {
            opacity: 1
        }
    }]
}