var data = [{
    "name": "暂住证登记不一致",
    "value": 80
}, {
    "name": "暂住已登记",
    "value": 87.8
}, {
    "name": "有采无证登记不一致",
    "value": 71
}, {
    "name": "暂住证登记不一致",
    "value": 80
}, {
    "name": "居住正已登记",
    "value": 66
}, {
    "name": "已知身份未采集",
    "value": 80
}, {
    "name": "未知身份",
    "value": 80
}];
var xData = [],
    yData = [];
var min = 50;
data.map(function(a, b) {
    xData.push(a.name);
    if (a.value === 0) {
        yData.push(a.value + min);
    } else {
        yData.push(a.value);
    }
});
option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle: {
                opacity: 0
            }
        },
        formatter: function(prams) {
            if (prams[0].data === min) {
                return "抓拍人员：0%"
            } else {
                return "抓拍人员：" + prams[0].data
            }
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '10%',
        top: '7%',
        z: 22
    },
    xAxis: [{
        type: 'category',
        gridIndex: 0,
        data: xData,
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#092b5e'
            }
        },
        axisLabel: {
            show: true,
            color: '#24c4ff',
            fontSize: 12,
            formatter: function(val) {
                var strs = val.split(''); //字符串数组
                var str = ''
                for (var i = 0, s; s = strs[i++];) { //遍历字符串数组
                    str += s;
                    if (!(i % 2)) str += '\n'; //按需要求余
                }
                return str
            }


        }
    }],
    yAxis: [{
            type: 'value',
            gridIndex: 0,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            min: min,
            max: 100,
            axisLine: {
                lineStyle: {
                    color: '#092b5e'
                }
            },
            axisLabel: {
                color: '#24c4ff',
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            gridIndex: 0,
            min: min,
            max: 100,
            splitNumber: 12,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                }
            }
        }
    ],
    series: [{
        name: '合格率',
        type: 'bar',
        barWidth: '30%',
        xAxisIndex: 0,
        yAxisIndex: 0,
        itemStyle: {
            normal: {
                barBorderRadius: [30, 30, 0, 0],
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                            offset: 0,
                            color: '#1067e1'
                        },
                        {
                            offset: 1,
                            color: '#3eb6fa'
                        }
                    ]
                )
            }
        },
        data: yData,
        zlevel: 11

    }]
};