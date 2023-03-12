option = {
    title: {
        text: '人员流动情况'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['新入职人数','离职人数','净增数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'新入职人数',
            type:'line',
            stack: '总量',
            data:[12, 13, 10, 3, 9, 2, 5]
        },
        {
            name:'离职人数',
            type:'line',
            stack: '总量',
            data:[2, 8, 9, 4, 2, 10, 5]
        },

        {
            name:'净增数',
            type:'line',
            stack: '总量',
            data:[10, 5, 1, -1, 7, -8, 0]
        }
    ]
};
