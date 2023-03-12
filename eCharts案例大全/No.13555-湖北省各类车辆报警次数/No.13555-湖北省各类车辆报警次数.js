option = {
    color: ['#D53A35', '#E98F6F', '#6AB0B8', '#334B5C'],
    //title: {
    //    text: '报警次数'
    //},
    tooltip: {
        trigger: 'axis',
        //formatter: "{b} <br> 合格率: {c}%"
    },
    legend: {
        data: ['旅游运输', '班线运输', '危险品', '普货']
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
        name: '日期',
        boundaryGap: false,
        data: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7']
    },
    yAxis: {
        type: 'value',
        name: '报警次数',
    },
    series: [{
            name: '旅游运输',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '班线运输',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '危险品',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '普货',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
    ]
};