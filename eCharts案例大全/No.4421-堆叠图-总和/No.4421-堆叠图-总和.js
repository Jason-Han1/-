option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['进油功率', '净功率', '回油功率']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
             data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: {
                show: false
            },
           
        }
    ],
    series: [
        {
            name: '进油功率',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'inside'
            },
            data: [320, 302, 341, 374, 390, 450, 420]
            
        },
        {
            name: '净功率',
            type: 'bar',
            
            label: {
                show: true
            },
            data: [200, 170, 240, 244, 200, 220, 210]
        },
        {
            name    : '回油功率',
            type    : 'bar',
            stack   : '总量',
            label   : {
            show    : true,
            // position: 'left'
            },
            data: [-120, -132, -101, -134, -190, -230, -210]
        }
    ]
};
