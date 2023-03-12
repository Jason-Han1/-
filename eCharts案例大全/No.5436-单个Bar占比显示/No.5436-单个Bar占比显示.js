option = {
    tooltip: {
        backgroundColor: 'rgba(50,50,50,.2)',
        textStyle: {
            color: '#222'
        }
    },
    grid: {
        left: 0,
        right: 0
    },
    xAxis: {
        axisLabel: {show: false},
        axisLine: {show: false},
        splitLine: {show: false},
        axisTick: {show: false}
    },
    yAxis: {
        data: [''],
        axisLabel: {show: false},
        axisLine: {show: false},
        splitLine: {show: false},
        axisTick: {show: false}
    },
    color: ['#ccf', '#f06', '#ff7761', '#fdc23e', '#6d9d88'],
    series: [{
        type: 'bar',
        name: '访问控制',
        data: [5],
        barWidth: 14,
        itemStyle: {
            normal: {
                barBorderRadius: [5, 0, 0, 5]
            }
        },
        stack: true
    }, {
        type: 'bar',
        name: '访问限速', 
        data: [8],
        barWidth: 14,
        stack: true
    }, {
        type: 'bar',
        name: '状态码限速', 
        data: [12],
        barWidth: 14,
        stack: true
    }, {
        type: 'bar',
        name: '攻击IP惩罚', 
        data: [3],
        barWidth: 14,
        stack: true
    }, {
        type: 'bar',
        name: '攻击客户端惩罚', 
        data: [7],
        barWidth: 14,
        itemStyle: {
            normal: {
                barBorderRadius: [0, 5, 5, 0]
            }
        },
        stack: true
    }]
};