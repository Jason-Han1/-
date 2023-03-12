option = {
    color: ['#2990ef'],
    grid: {
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: false
    },
    tooltip : {
        trigger: 'axis',
        backgroundColor: 'rgba(255,255,255,0.7)',
        textStyle: {
            fontSize: '14px',
            color: '#666'
        },
        formatter: '{b}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{c}',
        padding: [8, 10, 8, 10],
        confine: true,
        axisPointer: {
            type: 'none'
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap : false,
        data: ['2018-10-11', '2018-10-12', '2018-10-13', '2018-10-14', '2018-10-15', '2018-10-16', '2018-10-17']
    },
    yAxis: {
        show: false,
        type: 'value'
    },
    series: [{
        data: [4, 3, 5, 4, 6, 8, 7],
        type: 'line',
        areaStyle: {opacity:1},
        showSymbol: false,
        smooth: true
    }]
};
