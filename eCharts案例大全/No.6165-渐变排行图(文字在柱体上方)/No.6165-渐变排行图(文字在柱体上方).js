var chartData = [91, 91, 89, 89, 88, 10, 10];
var chartName = ['芳草街', '西园', '桂溪', '中和', '石羊', '肖家河', '合作'];
var yData = [];
var dataArr = [{
        name: '芳草街',
        num: 14,
        num1: 18
    },
    {
        name: '西园',
        num: 13,
        num1: 14
    },
    {
        name: '桂溪',
        num: 80,
        num1: 89
    },
    {
        name: '中和',
        num: 80,
        num1: 88
    },
    {
        name: '石羊',
        num: 107,
        num1: 118
    },
    {
        name: '肖家河',
        num: 10,
        num1: 10
    },
    {
        name: '合作',
        num: 10,
        num1: 10
    },
]



for (var i = 0; i < chartName.length; i++) {
    yData.push(i + ',' + chartName[i]);

}
option = {
    backgroundColor: '#000',
    grid: {
        left: '10%',
        right: '15%',
        bottom: '2%',
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
            barWidth: 10,
            z: 2,
            silent: true,
            itemStyle: {
                barBorderRadius: 10,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#275266' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#68D6DE' // 100% 处的颜色
                    }]
                }
            },
            data: chartData,
        },
        {
            name: '外框',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 10,
                    color: 'rgba(255,255,255,0.1)' //rgba设置透明度0.14
                }
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#DEDEDE',
                        fontSize: 14,
                         lineHeight:-20
                    },
                    position: ['90%', -20],
                    formatter: function(data) {
                        console.log('data',data)
                        return '处置率' + "{blue|" + (chartData[data.dataIndex]) + "}" + '%';
                    },
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
            barWidth: 10,
            data: [100, 100, 100, 100, 100,100,100]
        },
        //年份
        {
            show: true,
            type: 'bar',
            xAxisIndex: 1, //代表使用第二个X轴刻度
            barGap: '-100%',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: 'transparent',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: [0, '-20'],
                    textStyle: {
                        fontSize: 14,
                        color: '#fff',
                        lineHeight:-20
                    },
                    formatter: function(data) {
                        var result = ''
                        result += chartName[data.dataIndex] + "{mr|" + "当月处理" + "}" + "{blue|" + dataArr[data.dataIndex].num + "}" + "次" + "/" + "总数" + "{blue|" + dataArr[data.dataIndex].num1 + "}" + "次";
                        return result
                    },
                    rich: {
                        blue: {
                            fontSize: 14,
                            lineHeight: 5,
                            color: '#62E6F6'
                        },
                        mr: {
                            padding: [0, 0,0,10],
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