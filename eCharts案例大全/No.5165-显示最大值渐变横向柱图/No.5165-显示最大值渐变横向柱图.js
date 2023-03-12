var chartData = [1789, 1245, 2645, 2315, 2251];
var chartName = ['采样货物件数', '采集管数', '检测管数', '阳性管数', '异常处置货物件数'];
var yData = [];
for (var i = 0; i < chartName.length; i++) {
    yData.push(chartName[i]);
}
option = {
    tooltip: {},
    grid: {
        left: '5%',
        right: '5%',
        bottom: '-5%',
        top: '2%',
        containLabel: true
    },
    xAxis: [{
            show: false,
        },
        {
            show: false,
        }
    ],
    yAxis: {
        type: 'category',
        inverse: true,
        nameGap: 16,
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
            margin: 20,
            textStyle: {
                color: '#d1e6eb',

            },
        },
        data: yData
    },

    series: [
        //亮色条 百分比
        {
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: 15,
            z: 2,
            silent: true,
            itemStyle: {
                barBorderRadius: 15,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(47,198,220,0.01)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(47,198,220,1)' // 100% 处的颜色
                    }]
                }
            },
            data: [1789, 1245, 2645, 2315, 2251],
        },
        {
            name: '外框',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 10,
                    color: 'rgba(24,64,96,0.14)' //rgba设置透明度0.14
                }
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#00DEFF',
                        fontSize: 14,
                        lineHeight: 0
                    },
                    position: ['95%', '-50%'],
                    rich: {
                        blue: {
                            fontSize: 14,
                            lineHeight: 5,
                            color: '#62E6F6',
                        }
                    }
                }
            },
            barGap: '-100%',
            z: 0,
            barWidth: 15,
            data: [2910, 2910, 2910, 2910, 2910, 2910, 2910]
        },
        //年份
        {
            show: true,
            type: 'bar',
            xAxisIndex: 1, //代表使用第二个X轴刻度
            barGap: '-100%',
            barWidth: 15,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: 'transparent',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: [0, '-10'],
                    textStyle: {
                        fontSize: 14,
                        color: '#62E6F6',
                        lineHeight: -20
                    },
                    formatter: function(data) {
                        var result = ''
                        result += chartName[data.dataIndex];
                        return result
                    },
                    rich: {
                        blue: {
                            fontSize: 14,
                            lineHeight: 5,
                            color: '#62E6F6'
                        },
                        mr: {
                            padding: [0, 0, 0, 10],
                            fontSize: 14,
                            color: '#fff'
                        }
                    }
                }
            },
            data: chartData
        }
    ]
};