var colorList = ['#04FEF9', '#77ED4D', '#48A3FF', '#FFE822', '#FF61D8', '#FCCF77'];
option = {
    backgroundColor: '#020933',
    color: colorList,
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: [{
        type: 'category',
        data: ['数据一', '数据二', '数据三', '数据四', '数据五', '数据六'],
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#0d3866'
            }
        },
        axisLabel: {
            color: '#beceff'
        }
    }],
    yAxis: {
        
        type: 'value',
        axisLine: {
           lineStyle: {
                color: '#0d3866' //y轴线颜色
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#beceff' //y轴字体颜色
        }
    },
    series: [{
            tooltip: {
                show: false
            },
            name: 'bg',
            type: 'pictorialBar',
            barWidth: '60%',
            silent: true,
            symbol: 'rect',
            symbolRepeat: true,
            symbolMargin: 1,
            symbolSize: [16, 4], //柱子宽度
            itemStyle: {
                color: '#0B4B57'
            },
            data: [390, 390, 390, 390, 390, 390]
        },
        {
            type: 'pictorialBar',
            animation: true,
            animationDuration: 600,
            symbol: 'rect',
            symbolRepeat: true,
            symbolSize: [16, 4],
            symbolMargin: 1,
            barWidth: '60%',
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: false
                    }
                }
            },
            data: [10, 52, 200, 334, 390, 330]
        }
    ]
};