option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月'],
        axisLine: {
            lineStyle: {
                color: '#8FA3B7', //y轴颜色
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: '#6D6D6D',
            }
        },
        axisTick: {
            show: false
        }

    }],
    yAxis: [{
        type: 'value',
        splitLine: {
            show: false
        },
        splitNumber: 3,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#8FA3B7', //y轴颜色
            }
        },
        axisLabel: {
            show: false,
            textStyle: {
                color: '#6D6D6D',
            }
        },
    }],
    series: [{
        name: '',
        type: 'bar',
        barWidth: '30%',

        itemStyle: {
            normal: {
                barBorderRadius: 100,
                color: function(idx) {
                    var color = ['#40E3F6', '#31B1E6', '#6888EF', '#9B68EF', '#E660F6']
                    return color[idx.dataIndex % color.length]
                }
            }
        },
        data: [31, 28, 28, 26, 21]
    }]
};