var chartData = [99.89, 98.12, 87.88, 66.78, 54.33];
var chartName = ['合肥市', '滁州市', '黄山市', '安庆市', '芜湖市'];
var yData = [];


for (var i = 0; i < chartName.length; i++) {
    yData.push(i + ',' + chartName[i]);

}
// var unit='亿元';
//var myColor = ['#F34E1B','#F97F53','#F45922'];
option = {
    //  title: {
    //     text: '单位:  '+unit,
    //     right:0,
    //     textStyle: {
    //         color: '#000',
    //         fontSize:14,
    //     }
    // },

    backgroundColor: '#000',
    grid: {
        left: '0',
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
        color: '#f00',
        axisLine: {
            show: false,
            lineStyle: {
                color: '#00f'
            }
        },
        axisTick: {
            show: false,
            lineStyle: {
                color: '#00f'
            }
        },
        axisLabel: {
            interval: 0,
            margin: 30,
            textStyle: {
                color: '#fff',
                align: 'top',
                fontSize: 14,

            },
            rich: {
                b: {
                    color: '#fff',
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 2,
                    backgroundColor: '#05A8FA'
                },
            },
            formatter: function(params) {
                var paramsArr = params.split(',');
                var index = paramsArr[0];
                var name = paramsArr[1];
                return [
                    '{b|' + '' + (parseInt(index) + 1) + '}' + '  '
                ].join('\n')
            }
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
            itemStyle: {
                normal: {
                    color: "#05A8FA"
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
                        color: '#F34E1B',
                        fontSize: 14
                    },
                    position: ['90%', -20],
                    formatter: function(data) {
                        return (chartData[data.dataIndex]).toFixed(2) + '%';
                    }
                }
            },
            barGap: '-100%',
            z: 0,
            barWidth: 10,
            data: [100, 100, 100, 100, 100]
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
                    },
                    formatter: function(data) {
                        return chartName[data.dataIndex];
                    }
                }
            },
            data: chartData
        }
    ]
};