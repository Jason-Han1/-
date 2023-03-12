// var myChart = echarts.init(document.getElementById('lunwenhuojiang'));
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        extraCssText: 'width:auto;height:auto;'
    },
    color: ['pink ', 'yellow', '#629ee5'],
    legend: {
        data: ['14-16周岁', '16-18周岁', '18岁以上'],
        top: '5%',
        right: '0%',
        itemWidth: 20,
        itemHeight: 8,
        textStyle: {
            color: '#ffffff',
            fontSize: 16
        }
    },
    grid: {
        x: 50,
        y: 70,
        x2: 40,
        y2: 0,
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        show: false,
        axisLabel: {
            show: true,
            interval: '0',
            textStyle: {
                fontSize: 16,
                color: '#8597c1'
            }
        },
    }],
    yAxis: [{
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                interval: '0',
                textStyle: {
                    fontSize: 16,
                    color: '#8597c1'
                }
            },
            offset: 10,
            data: ['强迫卖淫罪', '侮辱罪', '非法拘禁罪', '敲诈勒索罪', '强奸罪', '故意杀人罪', '故意伤害罪', '抢劫罪', '聚众斗殴罪', '寻衅滋事罪'],
        },
        {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#6af7fc',
                fontSize: 16,
                interval: 0
            },
            data: ['100', '100', '100', '100', '100', '100', '100','100','100','100']
        }
    ],
    series: [{
            name: '14-16周岁',
            type: 'bar',
            barWidth: 30,
            stack: '总量',

            data: [0, 0, 0, 0, 30, 25, 17, 35, 0, 0]
        },
        {
            name: '16-18周岁',
            type: 'bar',
            barWidth: 10,
            stack: '总量',
            data: [60, 52, 20, 28, 45, 38, 46, 45, 48, 47]
        },
        {
            name: '18岁以上',
            type: 'bar',
            stack: '总量',
            barWidth: 10,
            data: [40, 48, 80, 72, 25, 37, 37, 20, 52, 53]
        }

    ]
};
myChart.setOption(option);