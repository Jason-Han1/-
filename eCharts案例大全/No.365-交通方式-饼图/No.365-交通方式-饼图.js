option = {
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [{
        type: 'category',
        data: ['2016', '2017', '2018', '2019'],
        axisLine: {
            lineStyle: {
                color: "#999"
            }
        }
    }],
    yAxis: [{
        type: 'value',
        splitNumber: 5,
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#DDD'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#333"
            },
        },
        nameTextStyle: {
            color: "#999"
        },
        splitArea: {
            show: false
        }
    }],
    series: [{
        name: 'Ⅳ～Ⅴ类',
        type: 'line',
        data: [6.3, 16, 31.1, 42.7],
        lineStyle: {
            normal: {
                width: 8,
                color: {
                    type: 'linear',

                    colorStops: [{
                        offset: 0,
                        color: '#cbcbcb' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#000000' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(72,216,191, 0.3)',
                shadowBlur: 10,
                shadowOffsetY: 20
            }
        },
        itemStyle: {
            normal: {
                color: '#fff',
                borderWidth: 40,
                /*shadowColor: 'rgba(72,216,191, 0.3)',
                shadowBlur: 100,*/
                borderColor: "#A9F387"
            }
        },
        smooth: true
    }]
};