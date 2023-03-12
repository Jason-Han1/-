var category = [{
        name: "备案车辆事件",
        value: 25
    },
    {
        name: "非备案车辆事件",
        value: 80
    }
]; // 类别
var total = 100; // 数据总数
var datas = []
category.forEach(value => {
    datas.push(value.value);
});
option = {
    backgroundColor: '#071347',
    xAxis: {
        max: total,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    grid: {
        left: 80,
        top: 20, // 设置条形图的边距
        right: 80,
        bottom: 20
    },
    yAxis: [{
        type: "category",
        inverse: false,
        data: category,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }],
    series: [{
            // 内
            type: "bar",
            barWidth: 4,

            // legendHoverLink: false,
            // silent: true,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var color;
                        color = {
                            type: "linear",
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                    offset: 0,
                                    color: "#1588D1" // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: "#1588D1" // 100% 处的颜色
                                }
                            ]
                        }
                        return color;
                    },
                }
            },
            label: {
                show: true,
                position: ['0', -23],
                fontSize: 16,
                color: '#B3CCF8',
                formatter: function(param) {
                    return param.name
                }
            },
            data: category,
            z: 1,
            animationEasing: "elasticOut"
        },
        {
            // 外边框
            type: "pictorialBar",
            symbol: "rect",
            symbolBoundingData: total,
            itemStyle: {
                normal: {
                    color: "none"
                }
            },
            label: {
                normal: {
                    padding: [0, 20, 20, -20],
                    formatter: (params) => {
                        text = '{c|  100%}{f|  ' + params.data + '}'
                        return text;
                    },
                    rich: {
                        a: {
                            color: 'red'
                        },
                        b: {
                            color: 'blue'
                        },
                        c: {
                            color: 'yellow'
                        },
                        d: {
                            color: "green"
                        },
                        f: {
                            color: "#ffffff"
                        }
                    },
                    position: 'right',
                    // distance: 0, // 向右偏移位置
                    verticalAlign: 'bottom',
                    lineHeight: 60,
                    fontSize: 13,
                    show: true
                }
            },
            data: datas,
            z: 0,
            animationEasing: "elasticOut"
        },
        {
            name: "外框",
            type: "bar",
            barGap: "-220%", // 设置外框粗细
            data: [total, total, total, total, total, total, total, total, total, total, total, total, total, total, total, total, total, total, total, total],
            barWidth: 16,
            itemStyle: {
                normal: {
                    color: "transparent", // 填充色
                    barBorderColor: "#f00", // 边框色
                    barBorderWidth: 1, // 边框宽度
                    // barBorderRadius: 0, //圆角半径
                    label: {
                        // 标签显示位置
                        show: false,
                        position: "top" // insideTop 或者横向的 insideLeft
                    }
                }
            },
            z: 0
        }
    ]
};