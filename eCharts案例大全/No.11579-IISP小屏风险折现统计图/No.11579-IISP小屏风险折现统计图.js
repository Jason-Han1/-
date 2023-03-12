option = {
    title: {
        text: 'IISP小屏风险折现统计图'
    },
    toolbox: {
        show: false
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        boundaryGap: true,
        axisLine: { //设置X轴的颜色
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        max: 100,
        min: 0,
        interval: 20,
        axisLine: { //设置y轴的颜色
            show: false,
            lineStyle: {
                color: function(value, index) {
                    var colors = ['black', '#00B0CA', '#66A700', '#C6B200', '#D28308', '#AE501D']
                    return colors[index]
                }
            }
        },
        axisTick: {
            show: false
        }
    },
    series: [{
        name: null,
        type: 'line',
        stack: '总量',
        lineStyle: {
            color: '#66A700'
        },
        smooth: true, //点与点之间的幅度,false为直线
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
            color: '#66A700'
        },
        label: { //设置点数据的提示
            normal: {
                show: true,
                position: 'top'
            }
        },
        data: [
            ['02/21', 12],
            ['02/22', 16],
            ['02/23', 24],
            ['02/24', 34],
            ['02/25', 44],
            ['02/26', 55],
            ['02/27', 72]
        ]

    }]
};