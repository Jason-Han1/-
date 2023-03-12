option = {
    title: {
        text: '菲利普斯曲线图',
        textStyle: {
            fontSize: 25
        },
        right: '50%'
    },
    visualMap: {
        show: false,
        min: 0,
        max: 6,
        inRang: {
            colorLightness: [0.9, 1]
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['菲利普斯曲线'],
        top: '50%',
        right: '25%',
        textStyle: {
            fontSize: 15
        }
    },
    grid: {},
    xAxis: {
        type: 'value',
        name: '通货膨胀率',
        nameTextStyle: {
            fontSize: 15,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        name: '失业率',
        nameTextStyle: {
            fontSize: 15,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
        name: '菲利普斯曲线',
        type: 'line',
        coordinateSystem: 'cartesian2d',
        stack: '总量',
        data: [
            [0.3, 6.666666667],
            [0.4, 5],
            [0.5, 4],
            [0.6, 3.333333333],
            [0.7, 2.857142857],
            [0.8, 2.5],
            [0.9, 2.222222222],
            [1, 2],
            [1.1, 1.818181818],
            [1.2, 1.666666667],
            [1.3, 1.538461538],
            [1.4, 1.428571429],
            [1.5, 1.333333333],
            [1.6, 1.25],
            [1.7, 1.176470588],
            [1.8, 1.111111111],
            [1.9, 1.052631579],
            [2, 1],
            [2.1, 0.952380952],
            [2.2, 0.909090909],
            [2.3, 0.869565217],
            [2.4, 0.833333333],
            [2.5, 0.8],
            [2.6, 0.769230769]
        ]
    }]
};