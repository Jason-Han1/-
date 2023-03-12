option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['利润', '支出', '收入']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            axisLine: {
                show: false,  
            },
            min: -500,
            max: 500,
            type: 'value',
            splitLine: {
                show: false,
            },
        }
    ],
    yAxis: [
        {
            splitLine: {
                show: false,
            },
            type: 'category',
            axisTick: {
                show: false
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    },
    series: [
        {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
                show: true
            },
            data: [320, 302, 341, 374, 390, 450, 420],
            animationDelay: function (idx) {
                return idx * 100 + 100;
            }
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
            },
            data: [-120, -132, -101, -134, -190, -230, -210],
            animationDelay: function (idx) {
                return idx * 100 + 100;
            }
        }
    ]
};
