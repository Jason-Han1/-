option = {
    backgroundColor: '#202020',
    title: {
        top: 40,
        text: 'Radar with Polygon Fill✍',
        subtext: '',
        x: 'center',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 30,
            fontWeight: '100',
        },
    },
    tooltip: {},
    radar: {
        radius: '60%',
        center: ['50%', '55%'],
        splitNumber: 100,
        name: {
            textStyle: {
                color: '#fff',
            }
        },
        splitLine: {
            lineStyle: {
                width: 1,
                color: '#202020',
            }
        },
        axisLine: {
             lineStyle: {
                width: 10,
                color: '#202020',
            }
         },
        splitArea: {
            areaStyle: {
                color: [
                    new echarts.graphic.LinearGradient(0, 0, 1, 0,
                        [{
                            offset: 0,
                            color: '#FFEE08'
                        }, {
                            offset: 1,
                            color: '#000'
                        }], 
                    false),
                    new echarts.graphic.LinearGradient(0, 0, 1, 0,
                        [{
                            offset: 0,
                            color: '#000'
                        }, {
                            offset: 1,
                            color: '#DC07BB'
                        }], 
                    false),
                ]
            },
        },
        indicator: [{
                name: 'Sunday',
                max: 100
            },
            {
                name: 'Monday',
                max: 100
            },
            {
                name: 'Tuesday',
                max: 100
            },
            {
                name: 'Wednesday',
                max: 100
            },
            {
                name: 'Thursday',
                max: 100
            },
            {
                name: 'Friday',
                max: 100
            },
            {
                name: 'Saturday',
                max: 100
            }
        ]
    },
    series: [{
        name: 'Title✍',
        type: 'radar',
        symbolSize: 10,
        itemStyle: {
            borderColor: '#202020',
            borderWidth: 1,
        },
        areaStyle: {
            normal: {
                opacity: 0,
            },
        },
        data: [{
            itemStyle: {
                normal: {
                    color: '#C6FA08',
                    shadowColor: 'rgba(0, 0, 0, 1)',
                    shadowBlur: 10,
                    shadowOffsetX: 5,
                    shadowOffsetY: 5,
                },
            },
            value: [20, 33, 80, 50, 30, 40, 100]
        }]
    }]
};