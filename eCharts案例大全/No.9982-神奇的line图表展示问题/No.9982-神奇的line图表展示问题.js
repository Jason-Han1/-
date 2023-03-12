option = {
    title: {
        text: 'AUC：',
        x: 'center'
    },
    xAxis: {
        name: '真正率',
        type: 'value',
        nameLocation: 'center',
        min: 0,
        max: 1,
        data: [0,0.2,0.4,0.8,1]
    },
    yAxis: {
        name: '假正率',
        nameLocation: 'center',
        type: 'value',
        min: 0,
        max: 1,
        show: true
    },
    series: [{
        name: 'AUC：',
        data: [0.7,0.3,0.8,0.25,0.55],
        type: 'line',
        areaStyle: {}
    }]
};