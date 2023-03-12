var dataAll = {
    x_data: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'],
    bar_data: [{
            type: '加工线',
            UPH: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70],
            lines: [{
                name: '加工线1',
                data: [11, 23, 45, 66, 78, 44, 21, 43, 55, 67, 98, 74]
            }, {
                name: '加工线2',
                data: [21, 43, 55, 67, 98, 74, 11, 23, 45, 66, 78, 44]
            }]
        },
        {
            type: '组装线',
            UPH: [80, 80, 80, 80, 80, 80,80, 80, 80, 80, 80, 80],
            lines: [{
                name: '组装线1',
                data: [11, 23, 45, 66, 78, 44,11, 23, 45, 66, 78, 44]
            }, {
                name: '组装线2',
                data: [21, 43, 55, 67, 98, 74,21, 43, 55, 67, 98, 74]
            }]
        },
        {
            type: '充电桩线',
            UPH: [90, 90, 90, 90, 90, 90,90, 90, 90, 90, 90, 90],
            lines: [{
                name: '充电桩线1',
                data: [11, 23, 45, 66, 78, 44,11, 23, 45, 66, 78, 44]
            }, {
                name: '充电桩线2',
                data: [21, 43, 55, 67, 98, 74,21, 43, 55, 67, 98, 74]
            }]
        }
    ]
};

var showType = 'ba';
if (showType === 'bar') {
    var makexAxis = function() {
        var Axis = [];
        dataAll.bar_data.forEach(function(item, index) {
            Axis.push({
                axisLabel: {
                    interval: 0,
                    color: '#555'
                },
                gridIndex: index,
                data: dataAll.x_data
            });
        });
        return Axis;
    };

    var makeyAxis = function() {
        var Axis = [];
        dataAll.bar_data.forEach(function(item, index) {
            Axis.push({
                gridIndex: index,
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    color: '#777'
                },
                max: function(v) {
                    return v.max + 10;
                }
            });
        });
        return Axis;
    };

    var makeseries = function() {
        var series = [];
        dataAll.bar_data.forEach(function(item, index) {
            series.push({
                name: 'UPH',
                showSymbol: false,
                data: item.UPH,
                xAxisIndex: index,
                yAxisIndex: index,
                type: 'line'
            });
            item.lines.forEach(function(line, i) {
                series.push({
                    name: line.name,
                    label: {
                        position: 'top',
                        show: true,
                        color: '#333'
                    },
                    data: line.data,
                    xAxisIndex: index,
                    yAxisIndex: index,
                    type: 'bar'
                });
            });
        })

        return series;
    };

    option = {
        title: [{
            top: 0,
            textStyle: {
                fontSize: 14,
            },
            textAlign: 'left',
            text: '加工线生产情况'
        },
        {
            top: '31%',
            textStyle: {
                fontSize: 14,
            },
            textAlign: 'left',
            text: '组装线生产情况'
        },
        {
            top: '64%',
            textStyle: {
                fontSize: 14,
            },
            textAlign: 'left',
            text: '组装线生产情况'
        }],
        color: ['#c23531', '#6ca1ff', '#4db64d', '#6ca1ff', '#4db64d', '#6ca1ff', '#4db64d'],
        legend: [{
            top: '3%',
            data: ['UPH', '加工线1', '加工线2']
        }, {
            top: '33%',
            data: ['UPH', '组装线1', '组装线2']
        }, {
            top: '66%',
            data: ['UPH', '充电桩线1', '充电桩线2']

        }],
        grid: [{
                top: '5%',
                left: '5%',
                right: '3%',
                height: '22%'
            },
            {
                top: '35%',
                left: '5%',
                right: '3%',
                height: '22%'
            },
            {
                top: '68%',
                left: '5%',
                right: '3%',
                height: '22%'
            }
        ],
        xAxis: makexAxis(),
        yAxis: makeyAxis(),
        series: makeseries()
    };
} else {
    
    var dataAll = [
        ["加工线1良品率", 99],
        ["加工线1良品率", 99],
        ["加工线1良品率", 99],
        ["加工线1良品率", 99],
        ["加工线1良品率", 99],
        ["加工线1良品率", 99]
    ];
    var position = [
        ['16.6%', '25%'],
        ['16.6%', '75%'],
        ['49.8%', '25%'],
        ['49.8%', '75%'],
        ['83%', '25%'],
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
                name: item[0],
                left: 0,
                center: position[index],
                type: 'gauge',
                splitNumber: 10, //刻度数量
                min: 0,
                max: 100,
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
                title:{
                   offsetCenter:[0, '90%']  
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
                    formatter: '{value}%'
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
            formatter: "{a} <br/>{b} : {c}%"
        },
        series: list
    };
}