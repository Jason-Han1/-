option = {
   
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    legend: {
        itemWidth: 15,
        itemHeight: 15,
        data: ['直接访问', '简洁访问'],
    },
    xAxis: [{
        data: ['80以上', '70~80', '70以下', '停运'],
        splitLine: {
            show: false,
        },
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: '直接访问',
            type: 'bar',
            stack:'使用情况',
            data: [10, 390, 330, 220],
            itemStyle:{
                normal:{
                    color:'red'
                }
            }
        },
        {
            name: '简洁访问',
            type: 'bar',
            stack:'使用情况',
            data: [10, 390, 330, 220],
             itemStyle:{
                normal:{
                    color:'green'
                }
            }
        }
    ]
};