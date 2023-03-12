var bdzData = '锡盟站';
var timeLineData = [2016, 2017];
var yData = ['变压器', '断路器', '电流互感器', '电压互感器', '避雷器', '隔离开关'];
var WLData = ['一级预警', '二级预警', '三级预警'];
WOData = {
    2016: [12, 3, 5, 5, 6, 6],
    2017: [3, 14, 5, 13, 2, 29]
}
WSData = {
    2016: [2, 6, 15, 1, 2, 16],
    2017: [13, 4, 5, 3, 12, 9]
}
WTData = {
    2016: [21, 3, 31, 5, 21, 6],
    2017: [3, 11, 5, 13, 2, 19]
}


option = {
    baseOption: {
        title: {},
        timeline: {
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval: 3000,
            left: null,
            right: 0,
            top: 20,
            bottom: 20,
            width: 55,
            height: null,
            symbol: 'none',
            lineStyle: {
                color: '#555'
            },
            checkpointStyle: {
                color: '#bbb',
                borderColor: '#777',
                borderWidth: 2
            },
            controlStyle: {
                showNextBtn: false,
                showPrevBtn: false,
                normal: {
                    color: '#666',
                    borderColor: '#666'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },
            data: [],
            label: {
                formatter: function(s) {
                    return (new Date(s)).getFullYear();
                }
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            // formatter: "{a} <br/>{b} : {c}%"
        },
        legend: {
            data: []
        },
        grid: {
            left: '3%',
            right: '15%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            "axisLabel": {
                "interval": 0,
                formatter: '{value}%',
            }
        },
        yAxis: {
            type: 'category',
            data: yData
        },
        series: [],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function(idx) {
            return idx * 5;
        }
    },
    options: []
};
for (var n = 0; n < timeLineData.length; n++) {
    option.baseOption.legend.data = WLData;
    option.baseOption.timeline.data.push(timeLineData[n]);
    option.options.push({
        title: {
            show: true,
            'text': timeLineData[n] + '年' + bdzData
        },
        series: [{
            name: WLData[0],
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data: WOData[timeLineData[n]],
        }, {
            name: WLData[1],
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data: WSData[timeLineData[n]],
        }, {
            name: WLData[2],
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data: WTData[timeLineData[n]],
        }]
    });
}