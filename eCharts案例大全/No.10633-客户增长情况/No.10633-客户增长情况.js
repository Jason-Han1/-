option = {
    title: {
        text: ''
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    xAxis: {
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 320, 350, 360, 380, 530, 550],
        areaStyle: {}
    }]
};