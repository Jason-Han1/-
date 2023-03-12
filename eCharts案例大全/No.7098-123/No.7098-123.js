var xData = function() {
    var data = [];
    for (var i = 1; i < 8; i++) {
        data.push("10-" + i);
    }
    return data;
}();

option = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    calculable: true,
    xAxis: [{
        type: "category",
        axisLine: {
            lineStyle: {
                color: "#949599",
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: xData,
    }],
    yAxis: [{
        name: "总表数",
        type: "value",
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "#949599",
            }
        },

    }],
    series: [{
        name: "总表数",
        type: "line",
        symbolSize: 10,
        symbol: 'circle',
        itemStyle: {
            color: "#84B000",
        },
        markPoint: {
            label: {
                normal: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            data: [{
                type: 'max',
                name: '最大值',

            }, {
                type: 'min',
                name: '最小值'
            }]
        },
         markLine: {
            //  symbol: ['none', 'none'], //去掉箭头
             itemStyle: {
                 normal: {
                     lineStyle: {
                         type: 'solid',
                         color: '#2477FF',
                         width: 2
                     }
                 },
             },
             data: [{
                 name: 'Y 轴值为 73 的水平线',
                 yAxis: 73,
                 label: {
                     normal: {
                         formatter: '73',
                     },
                 },
             }, ],
         },
        data: [70, 72, 76, 82, 89, 61, 66],
    }]
}