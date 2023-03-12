var data1 = [132, 324, 327, 452, 365]
var xData = ['9:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-13:00', '13:00-14:00']

option = {
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [{
        type: 'category',
        data: xData,
        axisTick: {
            show: false,
            alignWithLabel: true,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            color: '#989898',
        },
    }, ],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: '#ebebeb',
            },
        },
        axisLabel: {
            color: '#8c8c8c',
        },
    }, ],
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '40%',
        data: data1,
    }, ],
}