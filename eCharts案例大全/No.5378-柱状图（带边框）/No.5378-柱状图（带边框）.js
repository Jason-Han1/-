// 颜色设置
var backgroundColor = '#021547';
var fontColor = '#B3B3B3';
var lineColor = 'rgba(50, 68, 73, 1)';
var color1 = ['#39CDF2', '#1B204B'];

var result = {
    "airNum": 8741,
    "vipTotal": 44,
    "guaranteed": 32,
    "surplus": 12,
    "guaranteeing": 26,
    "depArrList": [
        600,
        800,
        600,
        3000,
        1800,
        3000,
        5300
    ],
    "schList": [
        1000,
        1200,
        1000,
        5780,
        4200,
        5300,
        6000
    ],
    "axisData": ["新疆", "西北", "西南", "中南", "华东", "东北", "华北"]
};

var seriesData = [];
var deparrList = result.depArrList; // 执行量
var planList = result.schList; // 计划量
var vplanTotal = 0; // 总计划量
var vexeTotal = 0; // 总执行量
var list = planList.concat(deparrList);
var maxNum = list.sort(sortNumber)[list.length - 1];

function sortNumber(a, b) {
    return a - b;
}

// 计划量
$.each(planList, function(i, val) {
    vplanTotal += Number(val);
    vexeTotal += Number(deparrList[i]);
    seriesData.push({
        value: maxNum,
        label: {
            formatter: '{execLabel|' + deparrList[i] + '/}' + '{planLabel|' + val + '}'
        }
    });
});

option = {
    backgroundColor: backgroundColor,
    color: color1,
    textStyle: {
        fontSize: 16,
        color: fontColor,
        fontFamily: '苹方-简'
    },
    title: {
        text: '{exec|总执行量: ' + vexeTotal + '}{plan|总计划量: ' + vplanTotal + '}',
        left: 'center',
        top: '3%',
        textStyle: {
            rich: {
                exec: {
                    color: '#3A99AF',
                    padding: [0, 20, 0, 0]
                },
                plan: {
                    color: '#E6E6E6'
                }
            }
        }
    },
    xAxis: {
        show: false,
        type: "value"
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            show: true,
            interval: 0,
            fontSize: 14,
            fontFamily: '苹方-简',
            color: '#E6E6E6'
        },
        axisLine: {
            lineStyle: {
                color: lineColor
            }
        },
        axisTick: {
            show: false
        },
        data: result.axisData
    },
    grid: {
        left: '15%',
        right: '35%',
        top: '13%',
        bottom: '0',
        containLabel: false
    },
    series: [{
            type: 'bar',
            name: '执行量',
            label: {
                show: false
            },
            itemStyle: {
                color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                    offset: 0,
                    color: 'rgba(54, 215, 255, 1)' // 顶端处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(10, 22, 33, 0)' // 底端处的颜色
                }], false),
                barBorderRadius: [0, 30, 30, 0],
                borderColor: '#39CDF2',
                borderWidth: 0.2
            },
            barWidth: '35%',
            data: deparrList,
            z: 3
        },
        {
            name: '计划量',
            type: 'bar',
            barGap: '-120%',
            data: planList,
            label: {
                show: false
            },
            barWidth: '50%',
            itemStyle: {
                color: '#1B204B'
            },
            z: 2
        },
        {
            name: '底图',
            type: 'bar',
            barGap: '-120%',
            data: seriesData,
            label: {
                show: true,
                position: 'right',
                padding: [8, 0, 0, 0],
                rich: {
                    execLabel: {
                        color: '#59DAF9',
                        fontSize: 17
                    },
                    planLabel: {
                        color: '#E5E5E5',
                        fontSize: 13
                    }
                }
            },
            barWidth: '50%',
            itemStyle: {
                color: 'rgba(0,0,0,0)'
            },
            z: 1
        }
    ]
};