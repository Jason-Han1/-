// 颜色设置
var backgroundColor = '#021547';
var fontColor = '#B3B3B3';
var lineColor = 'rgba(50, 68, 73, 1)';
var color7 = ['#53CEEB', '#FF9625'];

var result = {
    "time": [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23"
    ],
    "delayNum": [
        70,
        60,
        20,
        15,
        12,
        20,
        40,
        180,
        190,
        230,
        320,
        270,
        330,
        200,
        157,
        408,
        500,
        530,
        610,
        600,
        567,
        300,
        204,
        100
    ],
    "delayTime": [
        170,
        160,
        120,
        115,
        112,
        120,
        140,
        1180,
        1190,
        1230,
        1320,
        1270,
        1330,
        1200,
        1157,
        1408,
        1500,
        1530,
        1610,
        1600,
        1567,
        1300,
        1204,
        1100
    ]
};
var timeList = deepCopy(result.time);
timeList.push('00');



function deepCopy(o) {
    if (o instanceof Array) {
        var n = [];
        for (var i = 0; i < o.length; ++i) {
            n[i] = deepCopy(o[i]);
        }
        return n;

    } else if (o instanceof Object) {
        var n = {};
        for (var i in o) {
            n[i] = deepCopy(o[i]);
        }
        return n;
    } else {
        return o;
    }
}



option = {
    backgroundColor: backgroundColor,
    color: color7,
    textStyle: {
        fontSize: 16,
        color: fontColor,
        fontFamily: '苹方-简'
    },
    legend: {
        top: '5%',
        selectedMode: false,
        itemHeight: 10,
        data: [{
                name: '架次',
                icon: 'rect'
            },
            {
                name: '分钟'
            }
        ],
        textStyle: {
            fontSize: 14,
            color: '#F5F5F5'
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        top: '15%',
        bottom: '6%',
        containLabel: false
    },
    xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                show: true,
                interval: 0,
                fontSize: 13,
                fontFamily: '苹方-简',
                color: fontColor
            },
            axisLine: {
                lineStyle: {
                    color: lineColor
                }
            },
            axisTick: {
                show: true,
                inside: true
            },
            data: timeList
        },
        {
            show: false,
            type: 'category',
            data: result.time
        }
    ],
    yAxis: [{
            type: 'value',
            name: '架次',
            nameTextStyle: {
                fontSize: 14
            },
            axisLabel: {
                show: true,
                fontSize: 13
            },
            axisLine: {
                lineStyle: {
                    color: lineColor
                }
            },
            axisTick: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        {
            type: 'value',
            name: '分钟',
            nameTextStyle: {
                fontSize: 14
            },
            axisLabel: {
                show: true
            },
            axisLine: {
                lineStyle: {
                    color: lineColor
                }
            },
            axisTick: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            }
        }
    ],
    series: [{
            type: 'bar',
            name: '架次',
            xAxisIndex: 1,
            barWidth: '10',
            data: result.delayNum
        },
        {
            type: 'line',
            name: '分钟',
            xAxisIndex: 1,
            yAxisIndex: 1,
            lineStyle: {
                width: 1
            },
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                borderColor: 'rgba(255, 150, 37, 0.6)',
                borderWidth: 6
            },
            data: result.delayTime
        }
    ]
};