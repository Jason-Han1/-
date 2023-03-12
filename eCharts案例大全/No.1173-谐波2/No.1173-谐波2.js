option = {
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [{
        type: 'category',
        data: ['00:00','00:45','01:30','02:15','03:00','03:45','04:30','05:15','06:00','06:45','07:30','08:15','09:00'],
        axisLine: {
            lineStyle: {
                color: "#fff"
            }
        }
    }],
    backgroundColor: '#1a2439',
    yAxis: [{
        type: 'value',
        splitNumber: 4,
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: '#6c768d'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#fff"
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
        name: '课时',
        type: 'line',
        data: [23,60,20,36,23,45,20,36,23,45,23,45,20,36],
        lineStyle: {
            normal: {
                width: 4,
                color: {
                    type: 'linear',

                    colorStops: [{
                        offset: 0,
                        color: '#708eeb' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#5470c6' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: 'rgba(72,216,191, 0.3)',
                shadowBlur: 10,
                shadowOffsetY: 6
            }
        },
        itemStyle: {
            normal: {
                color: '#1a2439',
                borderWidth: 6,
                /*shadowColor: 'rgba(54,91,172, 0.3)',
                shadowBlur: 100,*/
                borderColor: "#6581d8"
            }
        },
        smooth: true
    }]
};