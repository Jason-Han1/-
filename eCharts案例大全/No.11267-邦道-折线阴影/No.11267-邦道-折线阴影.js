var option = {
    backgroundColor: "transparent",
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['网吧', '酒店', '出行'],
        right: '1%'
    },
    grid: {
        left: '1%',
        top: '12%',
        right: '1%',
        bottom: '8%',
        containLabel: true
    },

    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(103, 189, 226, 0.6)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(103, 189, 226, 0.6)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                type: 'dotted'
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['rgba(103, 189, 226, 0.1)', 'rgba(103, 189, 226, 0.06)']

            }
        }
    },



    series: [{
            name: '网吧',
            type: 'line',
            stack: '总量',
            data: [1,3,14,12,12,42,12,32,12,2,1,2,3,4,5,6,7,8,9,0,12,22,23,44],
            lineStyle: {
                width: 3, //折线粗细
                //color:'rgba(48,125,242,1)', //折线颜色
                shadowColor: 'rgba(0,0,0,.4)', //阴影颜色
                shadowBlur: 10, //阴影模糊度
                shadowOffsetY: 10 //阴影偏离
            },
            smooth: true //折线圆滑处理
        },
        {
            name: '酒店',
            type: 'line',
            stack: '总量',
            data: [23,12,2,1,4,5,6,7,8,4,3,2,2,12,32,44,12,23,1,2,0,4,5,6],
            lineStyle: {
                width: 3, //折线粗细
                //color:'rgba(48,125,242,1)', //折线颜色
                shadowColor: 'rgba(0,0,0,.4)', //阴影颜色
                shadowBlur: 10, //阴影模糊度
                shadowOffsetY: 10 //阴影偏离
            },
            smooth: true
        },
        {
            name: '出行',
            type: 'line',
            stack: '总量',
            data: [21,23,1,4,5,7,8,9,0,7,13,23,22,2,1,4,5,6,7,8,11,12,13,0],
            lineStyle: {
                width: 3, //折线粗细
                //color:'rgba(48,125,242,1)', //折线颜色
                shadowColor: 'rgba(0,0,0,.4)', //阴影颜色
                shadowBlur: 10, //阴影模糊度
                shadowOffsetY: 10 //阴影偏离
            },
            smooth: true
        }
    ]
};