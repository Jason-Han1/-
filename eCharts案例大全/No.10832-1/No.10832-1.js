option = {
    backgroundColor: "#fff",
    color: ["#37A2DA"],


    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['五里仓', '磁灶仓', '顺丰云仓', '京东云仓', '产地仓', '基地', '嘉善仓']
    },
    yAxis: {
        x: 'center',
        type: 'value',
    },
    series: [{
        name: '时效',
        type: 'line',
        data: [20, 80, 51, 90, 80, 30, 20]
    }]
};