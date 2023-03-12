option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        type: 'value',
        max: 0.5,
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: ['南京市', '江苏省'],
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            fontSize: 18,
            color: '#A6CAE2',
            margin: 0,
            align: 'left',
            verticalAlign: 'bottom',
            padding: [0, 0, 35, 0]
        }

    },
    series: [{
        type: 'pictorialBar',
        data: [0.19, 0.15],
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: '#59FD4D'
            }
        },
        symbolRepeat: true,
        symbolSize: [6, 30],
        symbolMargin: 1,
        label: {
            normal: {
                show: true,
                fontSize: 18,
                fontFamily: '',
                color: '#FFA03F',
                position: 'insideTopLeft',
                offset: [-5, 0],
                formatter: '{c} %'
            }
        },
    }, {
        type: 'pictorialBar',
        data: [0.5, 0.5],
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: '#162773'
            }
        },
        symbolRepeat: true,
        symbolSize: [6, 30],
        symbolMargin: 1,
        z: -10
    }]
};