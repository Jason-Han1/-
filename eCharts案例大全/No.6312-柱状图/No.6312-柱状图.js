option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['堵塞', '空气', '装药', ]
    },
    grid: {
        left: 'center',
        right: '4%',
        bottom: '3%',
        containLabel: false,
        width: 50

    },
    xAxis: [{
        type: 'category',
        data: ['连续', ]
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [


        {
            name: '装药',
            type: 'bar',
            stack: '广告',
            data: [800],
            itemStyle: {
                color: "rgba(255, 0, 0, 1)"
            }
        },
        {
            name: '空气',
            type: 'bar',
            stack: '广告',
            data: [100, ],
            itemStyle: {
                color: "rgba(255, 255, 255, 1)"
            }
        },
        {
            name: '堵塞',
            type: 'bar',
            stack: '广告',
            data: [250, ],
            itemStyle: {
                color: "rgba(0,0,0, 1)"
            }
        },

    ]
};