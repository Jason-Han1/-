//借鉴的地址：https://www.makeapie.com/editor.html?c=xHJDgLdnCm
option = {
    backgroundColor: '#180f2a',
    title: [{
        text: '118',
        x: '50%',
        y: '45%',
        textAlign: 'center',
        textStyle: {
            fontSize: '70',
            fontWeight: '100',
            color: '#0FF',
            textAlign: 'center',
        },
    }, {
        text: '异常设备数量',
        left: '50%',
        top: '90%',
        textAlign: 'center',
        textStyle: {
            fontSize: '18',
            fontWeight: '400',
            color: '#8d8793',
            textAlign: 'center',
        },
    }],
    polar: {
        radius: ['56%', '52%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        show: false,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
    },
    series: [{
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 60,
            showBackground: true,
            backgroundStyle: {
                color: '#2e2856',
            },
            data: [80],
            coordinateSystem: 'polar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: '#585fe1'
                    }, {
                        offset: 1,
                        color: '#0ff'
                    }]),
                }
            }
        }

    ]
};