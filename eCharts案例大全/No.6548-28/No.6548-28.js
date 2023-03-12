option = {
    title: [
        {
            text: '平均运距占线比%',
            left: '50%',
            textStyle: {
              color: 'red'
            }
        },
         {
            text: '平均运距（公里）',
            left: '50%',
            bottom: '0',
            textStyle: {
              color: 'blue'
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: []
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: 'blue'
            }
        },
        {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                color: 'red',
                formatter: '{value}%'
            }
        },
    ],
    yAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisTick: {
            show: false
        },
    },
    series: [{
            xAxisIndex: 1,
            symbol: 'path://M984.293767 435.610686 590.464452 435.610686 590.464452 41.78318l-157.531364 0 0 393.827505L39.105583 435.610686l0 157.531364 393.827505 0 0 393.831124 157.531364 0L590.464452 593.142049l393.829314 0L984.293767 435.610686z',
            symbolSize: 20,
            data: [3, 15, 30, 33, 39, 53, 40],
            type: 'scatter'
        },
        {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideLeft'
            },
            xAxisIndex: 0,
            data: [320, 302, 301, 334, 390, 330, 320]
        }
    ]
};