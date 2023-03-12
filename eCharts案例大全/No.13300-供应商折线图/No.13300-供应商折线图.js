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
        data: ['新增供应商']
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
        name: '月份',
        boundaryGap: false,
        data: ['2017.06', '2017.07', '2017.08', '2017.09', '2017.10', '2017.11', '2017.12','2018.01','2018.02','2018.03','2018.04','2018.05']
    },
    yAxis: {
        type: 'value',
        name: '数量',
        max:10
    },
    series: [{
            name: '新增供应商',
            type: 'line',
            stack: '总量',
            data: [1, 2, 4, 0, 3, 2, 8,2,1,0,1,2]
        }
        
        
    ]
};