var data1 = [1200, 2000, 1400, 3000, 600, 800, 1800, 1000, 1500];
var data2 = [332, 200, 1400, 700, 834, 1200, 1300, 800, 900];
var option = {
    backgroundColor:'#000',
    title: {
        text: `今日进出馆累计曲线`,
        textStyle: {
            color: "rgba(204, 204, 204, 1)",
            fontSize: 12,
        },

        top: 2,
        left: 0
    },
    color: ['rgba(95, 181, 227, 1)', 'rgba(241, 170, 58, 1)'],
    grid: {
        top: 55,
        bottom: 20,
        left: 50,
        right: 20,
    },
    tooltip: {},
    xAxis: {
        type: 'category',
        boundaryGap: false,
        interval: 0,
        axisLine: {
            show: false,
            interval: 0,
        },
        axisTick: {
            show: false,
            interval: 0,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: 'RGBA(11, 33, 40, 1)',
            },
            interval: 0,
        },
        axisLabel: {
            interval: 1,
            show: true,
            fontSize: 10,
            color: function(value, index) {
                var date = new Date().getHours();
                return value.indexOf(date) > -1 ? '#fff' : 'rgba(255,255,255,0.6)';
            },
        },
        data: ['9:00', '10:00', '11:00', '12:00', '13:00', "14:00", "15:00", "16:00"],
    },
    yAxis: {
        type: 'value',
        splitNumber: 4,
        name: '',
        nameGap: 10,
        nameTextStyle: {
            color: '#ffffff',
            fontSize: 10
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(101,124,168,0.3)',
            },
            interval: 0,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        // splitLine: {
        //   show: false,
        // },
        axisLabel: {
            showMinLabel: false,
            formatter: '{value}',
            fontSize: 10,
            padding: [0, 10, 0, 0],
            color: 'rgba(255,255,255,0.6)',
        },
    },
    series: [{
        type: 'line',
        name: '进馆人数',
        symbol: 'circle',
        symbolSize: 2,
        smooth: true,
        lineStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                        offset: 0,
                        color: 'rgba(107, 187, 241, 1)', // 0% 处的颜色
                    },
                    {
                        offset: 1,
                        color: 'rgba(98, 88, 173, 0.9)', // 100% 处的颜色
                    },
                ]
            },
            width: 2,
            type: 'solid',
        },
        areaStyle: {
            color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [{
                        offset: 0,
                        color: "rgba(107, 187, 241, 1)"
                    },
                    {
                        offset: 0.95,
                        color: "rgba(98, 88, 173, 0.45)"
                    }
                ],
                false
            )
        },
        label: {
            show: true,
            position: 'top',
            distance: -15,
            padding: [0, 5, 0, 25],
            formatter: function(params) {
                var date = new Date().getHours();
                var str = '';
                if (params.name.indexOf(date) > -1) {
                    if (data1[params.dataIndex] == data2[params.dataIndex]) {
                        str = "进、出：" + params.value
                    } else {
                        str = '进：' + params.value
                    }
                }
                return str
            },
            fontSize: 10,
            color: 'rgba(153, 153, 153, 1)',
        },
        data: data1,
    }, {
        type: 'line',
        name: '出馆人数',
        symbol: 'circle',
        symbolSize: 2,
        markPoint: {},
        smooth: true,
        lineStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                        offset: 0,
                        color: 'rgba(241, 170, 58, 0.45)', // 0% 处的颜色
                    },
                    {
                        offset: 1,
                        color: 'rgba(247, 86, 62, 0.8)', // 100% 处的颜色
                    },
                ]
            },
            width: 2,
            type: 'solid',
        },
        label: {
            show: true,
            position: 'top',
            distance: -15,
            padding: [0, 5, 0, 25],
            formatter: function(params) {
                var date = new Date().getHours();
                var str = '';
                if (params.name.indexOf(date) > -1) {
                    if (data1[params.dataIndex] != data2[params.dataIndex]) {
                        str = "出：" + params.value
                    }
                }
                return str
            },
            fontSize: 10,
            color: 'rgba(153, 153, 153, 1)',
        },
        areaStyle: {
            color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [{
                        offset: 0,
                        color: "rgba(241, 170, 58, 0.35)"
                    },
                    {
                        offset: 0.95,
                        color: "rgba(247, 86, 62, 0.45)"
                    }
                ],
                false
            )
        },
        data: data2
    }]
};