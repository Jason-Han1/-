option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['积极', '消极','客观']
    },
    grid: {
        left: '12%',
        right: '3%',
        bottom: '13%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['餐饮业','管理部门','海底捞公司','媒体']
    },
    series: [
        {
            name: '积极',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [17, 2,66,0]
        },
        {
            name: '消极',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [39, 24,78,13]
        },
        {
            name: '客观',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [20, 11,24,6]
        },
        
    ]
};