option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        xAxisIndex: 0,
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: '' // 默认为直线，可选为：'line' | 'shadow'
        },
        //  formatter:function(a){

        //  return '我是测试提示框内容';
        // },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
            type: 'category',
            data: ['0', '10', '20', '30', '40', '50', '60'],
            axisTick: {
                alignWithLabel: true
            },
            boundaryGap: false,
        },
        {
            type: 'category',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60'],
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,

            },
            axisLabel: {
                show: false,
            }

        }
    ],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '50%',
        xAxisIndex: 1,//根据第二个X轴来实现脱离X轴1  柱子居中
        data: [10, 52, 200, 334, 390, 330, 220]
    }, {
        name: '直接访问',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        xAxisIndex: 1,
    }]
};