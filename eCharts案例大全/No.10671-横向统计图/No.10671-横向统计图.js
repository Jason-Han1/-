var data = [70, 10, 60, 70, 34, 100];
var titlename = ['加好友', '发消息', '发朋友圈', '微信拉群', '养号', '微信资料修改'];
var myColor = ['#838aff', '#fec400', '#f7622e', '#a359ff', '#24cecc', '#83b338'];
option = {
    backgroundColor: '#fff',
    title: {
        text: '横向统计图',
        textStyle: {
            fontSize: 15,
            color: '#333'
        },
    },
    //图标位置
    grid: {
        left: '15%',
        right: '15%',
        bottom: '40%',
        top: '10%',
        containLabel: true
    },
    xAxis: {
        show: true,
        position: 'top',
        axisLine: {
            lineStyle: {
                color: '#ebedf4'
            }
        },
        axisLabel: {
            textStyle: {
                fontFamily: 'Microsoft YaHei',
                color: '#6175a2'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ebedf4'
            }
        },
    },
    yAxis: [{
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ebedf4'
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#6175a2',
            formatter: (value, index) => {
                return [
                    '{title|' + value + '} '
                ].join('\n')
            },
            rich: {
                title: {
                    color: '#6175a2',
                    width: 77,
                    align: 'right',
                    padding: 5,
                }
            },
            textStyle: {
                fontFamily: 'Microsoft YaHei',
                color: '#6175a2'
            }
        },
    }],
    series: [{
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data: data,
        barWidth: 10,
        label: {
            normal: {
                show: true,
                position: 'right',
                textStyle: {
                    color: '#6175a2',
                    fontSize: '13',
                }
            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: 20,
                color: function(params) {
                    var num = myColor.length;
                    return myColor[params.dataIndex % num]
                },
                // 渐变色
                // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                // offset: 0,
                // color: 'rgba(0,255,0)'
                // }, {
                // offset: 1,
                // color: 'rgb(215 ,255,0)'
                // }]),

            }
        },

    }, ]
};