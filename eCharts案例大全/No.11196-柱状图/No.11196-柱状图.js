option = {
    title: {
        text: '新增情况',
        textStyle: {
            fontSize: 14,
            color: '#808492',
            fontWeight: 500,
        }
    },
    color: ['#3b9ffc'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '30',
        right: '30',
        bottom: '20',
        containLabel: true
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
    },
    calculable: true,
    xAxis: {
        // boundaryGap: false, //x轴从0开始到结束显示
        // onZero: true,
        splitLine: {
            show: false
        }, //去除网格线
        splitArea: {
            show: false
        }, //保留网格区域
        axisLine: {
            show: true,
            lineStyle: { //轴上的线样式
                color: '#808492',
                width: 0.6, //这里是为了突出显示加上的
            },
        },
        axisTick: {
            show: true
        },
        axisLabel: { //轴上的数据样式
            color: '#808492',
        },
        data: ['1月', '2月', '3月', '4月', '5月'],
    },
    yAxis: {
        show: true,
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: 'rgba(33,148,246,0.2)'
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 12,
                color: '#808492'
            }
        }
    },
    series: [{
            type: 'bar',
            barWidth: 20, // 柱形的宽度
            barGap: 0,
            data: [320, 332, 301, 334, 390],
        },
        {
            type: 'line',
            data: [320, 332, 301, 334, 390],
            symbol: 'none',
            symbolSize: '5',
            name: '总计',
            lineStyle: {
                //折线样式
                color: "#ffc83b"
            },
        }
    ]
};