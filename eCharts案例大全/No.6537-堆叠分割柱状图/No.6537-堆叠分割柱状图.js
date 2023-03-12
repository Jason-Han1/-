option = {
    backgroundColor: '#fff',
    grid: {
        top: 60,
        bottom: 50,
        left: 0,
        right: 0
    },
    tooltip: {
        padding: [10, 10],
        formatter: '{b}：{c}件'
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            fontSize: 14,
            interval: 0,
            formatter: function(value) {
                var str = value.length > 4 ? value.substring(0, 4) + "..." : value;
                return str
            }
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: ['名称1', '名称2', '名称3', '名称4', '名称5', '名称6']
    },
    yAxis: {
        type: 'value',
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
    series: [{
            type: 'bar',
            barWidth: 26,
            stack: 1,
            z: 1,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00e4ff' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#089df1' // 100% 处的颜色
                }], false)
            },
            label: {
                show: false
            },
            data: [23, 45, 78, 68, 48, 118],
        }, {
            type: 'bar',
            barWidth: 26,
            stack: 1,
            z: 1,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#f80' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#f00' // 100% 处的颜色
                }], false)
            },
            label: {
                show: false
            },
            data: [11, 56, 69, 45, 36, 54],
        },
        { //分隔
            type: 'pictorialBar',
            itemStyle: {
                color: '#fff'
            },
            symbolRepeat: 'fixed',
            symbolMargin: 5,
            symbol: 'rect',
            // symbolClip: true,
            symbolSize: [28, 5],
            symbolPosition: 'start',
            symbolOffset: [0, 0],
            data: [240, 240, 240, 240, 240, 240],
            z: 2,
            animationEasing: 'elasticOut'
        }
    ]
};