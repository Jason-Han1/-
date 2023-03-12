option = {
    title: {
        text: '10月-12月份质控完成情况',
        left: 'center'
    },
    color: ['#3A85D3','#F4BB17'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '80px',
        containLabel: true
    },
    legend: {
        data: ['计划', '已完成'],
        top: '30px',
        right: '80px'
    },
    xAxis: [
        {
            type: 'category',
            data: ['A级保养', 'B级保养', 'C级保养', '巡检', '质控检查'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '计划',
            type: 'bar',
            itemStyle: {
              barBorderRadius: [50,50,0,0]  
            },
            barWidth: '60',
            data: [10, 52, 200, 330, 220]
        },
        {
            name: '已完成',
            type: 'line',
            data: [10, 5, 20, 30, 20]
        }
    ]
};
