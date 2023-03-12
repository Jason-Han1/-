option = {
    title: {},
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params, ticket, callback) {
            return params[0].data;
        }
    },
    grid: {
        backgroundColor: 'white',
        width: 90,
        height: 90,
        top: '6',
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        show: false,
        data: [1, 2, 3, 4, 5, 6]
    },
    yAxis: {
        show: false,
        type: 'value'
    },
    series: [{
        color: 'black',
        name: 'Step Start',
        type: 'line',
        step: 'end',
        symbol: 'circle',
        symbolSize: 2,
        lineStyle:{
            normal:{
                width: 2.5
            }
        },
        data: [5, 2, 3, 4, 4, 4]
    }]
};