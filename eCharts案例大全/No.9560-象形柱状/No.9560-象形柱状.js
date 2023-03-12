var colorList = ['#cb3a40', '#cdb048', '#1b9adb'];
option = {
    backgroundColor: '#0a124b',
    color: colorList,
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['上午', '下午', '晚上'],
        textStyle: {
            color: '#fff',
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
            show: true,
            lineStyle: {
                color: '#183369',
                type: 'dashed',
                width: 1
            }
        },
        axisLabel: {
            color: '#59a4c5',
            fontFamily: 'SourceSansCN-Regular',
            fontSize: 14
        }
    }],
    yAxis: {
        type: 'value',
        name: '（个）',
        nameTextStyle: {
            color: '#2c6fbd',
            align: 'right',
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#183369',
                type: 'dashed',
                width: 1
            }
        },
        axisLabel: {
            color: '#2c6fbd',
            fontFamily: 'ArialMT',
            fontSize: 14
        }
    },
    series: [{
            tooltip: {
                show: false
            },
            name: '框',
            type: 'bar',
            barWidth: '40',
            barGap: '-100%',
            silent: true,
            data: [400, 400, 400, 400, 400, 400],
            animation: false,
            itemStyle: {
                normal: {
                    color: '#0a2e74',
                    borderColor: '#0c42af',
                    borderWidth: 1,
                    barBorderRadius: 5,
                }
            }
        },
        {
            tooltip: {
                show: false
            },
            name: 'bg',
            type: 'pictorialBar',
             silent:true,
            animation: false,
            barWidth: '60%',
            symbol: 'roundRect',
            symbolRepeat: true,
            symbolMargin: 2,
            symbolSize: [31, 8],
            itemStyle: {
                color: '#064f96'
            },
            data: [390, 390, 390, 390, 390, 390]
        },
        {
            type: 'pictorialBar',
            stack: '总量',
            name: '上午',
            silent:true,
            animation: false,
            symbol: 'roundRect',
            symbolRepeat: true,
            symbolSize: [31, 8],
            symbolMargin: 2,
            barWidth: '60%',
            data: [290, 252, 320, 304, 339, 333]
        },
        {
            type: 'pictorialBar',
            stack: '总量',
            name: '下午',
            silent:true,
            animation: false,
            symbol: 'roundRect',
            symbolRepeat: true,
            symbolSize: [31, 8],
            symbolMargin: 2,
            barWidth: '60%',
            data: [170, 182, 183, 195, 270, 263]
        },
        {
            type: 'pictorialBar',
            stack: '总量',
            name: '晚上',
            silent:true,
            animation: false,
            symbol: 'roundRect',
            symbolRepeat: true,
            symbolSize: [31, 8],
            symbolMargin: 2,
            barWidth: '60%',
            data: [50, 62, 73, 85, 120, 113],

        }
    ]
};