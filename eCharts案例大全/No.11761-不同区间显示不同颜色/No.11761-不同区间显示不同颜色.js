option = {
    xAxis: {
        type: 'category',
        axisLabel: {
            textStyle: {
                color: '#8895A2',
                fontSize: 12
            }
        },
        axisTick: {
            show: false
        },
        data: [
            "00:00",
            "02:00",
            "04:00",
            "06:00",
            "08:00",
            "10:00",
            "12:00",
            "14:00",
            "16:00",
            "18:00",
            "20:00",
            "22:00"
        ]
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        data: ['当日', '昨日', '上周','历史'],
        right: 10,
        top: 12,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
    },
    color: ['#4A90E2', '#FF8B00', '#BD10E0', '#7ED321'],
    grid: {
        top: 10,
        bottom: 30,
        left: 30,
        right: '1%'
    },
    dataZoom: [{
        type: 'inside'
    }],
    yAxis: {
        type: 'value',
        max: 100,
        // data:[15,30,60,100],
        splitNumber: 4,
        axisLabel: {
            textStyle: {
                color: '#8895A2',
                fontSize: 12
            },
            formatter: function(value) {
                var texts = [];
                if (value <= 0) {
                    texts.push("0");
                } else if (value > 0 && value <= 15) {
                    texts.push("15");
                } else if (value > 15 && value <= 30) {
                    texts.push("30");
                } else if (value == 60) {
                    texts.push("60");
                } else if (value == 100) {
                    texts.push("100");
                }
                return texts;
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
         name: '当日',
        data: [12, 11, 14, 22, 55, 33, 55, 66, 77, 88, 99, 100, 34, 12],
        type: 'line',
        smooth: true,
        markArea: { //标记区域
            itemStyle: { //全局的
                normal: {
                    color: '#ff3333'
                }
            },
            data: [
                [{
                    yAxis: '0', //y轴坐标控制
                    itemStyle: {
                        color: '#E9201D'
                    }
                }, {
                    yAxis: '15'
                }],
                [{
                    yAxis: '15', //y轴坐标控制
                    itemStyle: {
                        color: '#FB8202'
                    }
                }, {
                    yAxis: '30'
                }],
                [{
                    yAxis: '30',
                    itemStyle: {
                        color: '#E3EC32'
                    }
                }, {
                    yAxis: '60'
                }],
                [{
                    yAxis: '60',
                    itemStyle: {
                        color: '#2CE431'
                    }
                }, {
                    yAxis: '100'
                }]
            ]
        },
        lineStyle: {

            width: 1
        }
    }, {
        name:'昨日',
        data: [15, 16, 17, 15, 25, 23, 34, 21, 24, 11, 76, 32, 45, 34],
        type: 'line',
        smooth: true,

        lineStyle: {

            width: 1
        }
    }]
};