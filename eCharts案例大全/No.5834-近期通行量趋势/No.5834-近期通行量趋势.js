option = {
    backgroundColor: '#f5f6fa',
    title: {
        text: '近期通行量趋势',
        left: 'center',
        top: 2,
        textStyle: {
            fontSize: 20
        },
    },
    color: ['#00a8ff', '#9c88ff', '#a9d18e', '#ffc000'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    legend: {
        left: 'center',
        bottom: '2%',
        data: ['去年', '今年', ]
    },
    xAxis: [{
        type: 'category',
        data: ['09-22', '09-22', '09-22', '09-22', '09-22', '09-22', '09-22'],
        axisTick: {
            alignWithLabel: true
        }
    }],
    yAxis: [{
        type: 'value'
    }],
    barMaxWidth: '30',
    series: [

        {
            name: '去年',
            type: 'bar',
            data: [10, 52, 200, 334, 390, 330, 220]
        },
        {
            name: '今年',
            type: 'bar',
            data: [10, 52, 200, 334, 390, 330, 220]
        },
    ]
};