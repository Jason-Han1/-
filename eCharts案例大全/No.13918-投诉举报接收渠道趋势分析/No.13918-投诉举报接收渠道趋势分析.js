var colors = ['#2978aa', '#3470a3'];

var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i + '月');
    }
    return data;
}();
option = {
    title: {
        text: '投诉举报接收渠道趋势分析',
        textStyle: {
            fontSize: '16'
        }
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    grid: {
        top: 80,
        right: '10%',//最大化时，需要重新修改为  150
        bottom: '55%'
    },
    legend: {
        data: ['投诉举报信息收件数', '投诉举报信息收件同比率', '投诉举报信息收件环比率'],
        align: 'left',
        left: '15%',
        top: 35
    },
    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#000'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            textStyle: {
                fontSize: 15
            }
        },
        "data": xData,
    }],
    yAxis: [{
            type: 'value',
            name: '',
            min: 0,
            max: 1500,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [{
            name: '投诉举报信息收件数',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#60c9ed'
                    }, {
                        offset: 1,
                        color: '#a7d8e8'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            barWidth: '40%',
            data: [756, 1227, 998, 797, 978, 347, 717, 993, 620, 845, 555, 741]
        },
        {
            name: '投诉举报信息收件同比率',
            color: '#4594dd',
            yAxisIndex: 1,
            type: 'line',
            itemStyle: {
                normal: {
                    /*lineStyle:{
                        width:3,//折线宽度
                    },
                   */
                }
            },
            data: [4.5, 8.2, 6.5, 4.2, 5.4, 2, 4, 7, 3, 6, 3, 4.5]
        }, {
            name: '投诉举报信息收件环比率',
            color: '#2ec3c1',
            yAxisIndex: 1,
            type: 'line',
            itemStyle: {
                normal: {
                    /*lineStyle:{
                        width:3,//折线宽度
                    },*/

                }
            },
            data: [2.5, 3.2, 4.5, 2.2, 4.4, 5, 6, 3, 7, 6, 4, 3.5]
        }
    ]
};