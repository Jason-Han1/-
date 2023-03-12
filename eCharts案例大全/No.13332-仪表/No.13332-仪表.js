var dataAll = [
    ["用户活跃度", 80],
    ["用车时间", 66],
    ["油耗", 230],
    ["行车距离", 450],
    ["总里程", 600],
];
var position = [
    ['30%', '25%'],
    ['16.6%', '75%'],
    ['49.8%', '75%'],
    ['70%', '25%'],
    ['83%', '75%']
];
var getStyle = function(value) {
    if (value <= 30) {
        return {
            splitNumber: 3, //刻度数量
            min: 0,
            max: 30,
            startAngle: 225,
            endAngle: 144,
            color: [
                [1, '#FF0000']
            ]
        };
    } else if (value >= 90) {
        return {
            splitNumber: 1, //刻度数量
            min: 90,
            max: 100,
            startAngle: -18,
            endAngle: -45,
            color: [
                [1, '#60b044']
            ]
        };
    } else {
        return {
            splitNumber: 6, //刻度数量
            min: 30,
            max: 90,
            startAngle: 144,
            endAngle: -18,
            color: [
                [1, '#ffce00']
            ]
        };
    }
};
var makeSeries = function() {
    var series = [];
    dataAll.forEach(function(item, index) {
        let style = getStyle(item[1]);
        series.push({
            name: item[index],
            left: 0,
            center: position[index],
            type: 'gauge',
            splitNumber: 10, //刻度数量
            min: 0,
            max: (index+1)*100,
            radius: '33.3%', //图表尺寸
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [
                        [1, '#24273e']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#7887ae',
                    width: 1
                },
                length: 8,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: '#7887ae',
                }
            },
            axisLabel: {
                distance: 2,
                textStyle: {
                    color: "#7887ae",
                    fontSize: "14",
                },
                formatter: function(e) {
                    switch (e + "") {
                        case "0":
                            return "0%";
                        default:
                            return e;
                    }
                }

            },
            pointer: { //仪表盘指针
                show: 0
            },
            title: {
                offsetCenter: [0, '90%']
            },
            detail: {
                show: false
            },
            data: [{
                name: item[0],
                value: item[1]
            }]
        });
        series.push({
            name: item[0],
            type: 'gauge',
            center: position[index],
            splitNumber: style.splitNumber, //刻度数量
            min: style.min,
            max: style.max,
            startAngle: style.startAngle,
            endAngle: style.endAngle,
            radius: '33.3%', //图表尺寸
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: style.color
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 1
                },
                length: 8,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 12,
                lineStyle: {
                    color: 'auto',
                }
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                show: 1,
                length: '70%',
                width: 2
            },
            detail: {
                borderColor: '#ccc',
                shadowColor: '#ccc', //默认透明
                shadowBlur: 5,
                offsetCenter: [0, '30%'], // x, y，单位px
                textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#333',
                    fontSize: 35,
                },
                formatter: '{value}'
            },
            data: [{
                name: "",
                value: item[1]
            }]
        });

    });
    return series;
}
var list = makeSeries();
option = {
    backgroundColor: '#fff',

    tooltip: {
        formatter: "{a} {b} : {c}"
    },
    series: list
};