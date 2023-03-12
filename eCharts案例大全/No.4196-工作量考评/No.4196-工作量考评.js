option = {
    backgroundColor: '#fff',
    color: ['#58EAA7'],
    grid: {
        left: '1%',
        right: '5%',
        top: '10%',
        bottom: '6%',
        containLabel: true
    },
    xAxis: {
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {},
    series: [{
        type: 'line',
        lineStyle: {
            normal: {
                width: 3
            }
        },
        symbolSize: 8,
        data:[22, 55, 19, 33, 38, 69, 45, 42, 41, 18, 22, 21]
    }]
}