option = {
    backgroundColor:'#212121',
    color: ['#43a6f7', '#f5cb62'],
    grid: {
        left: '5%',
        right: '6%',
        top: '14%',
        bottom: '6%',
        containLabel: true
    },
    legend: {
        show: true,
        icon: 'circle',
        // align: 'right',
        right: 20,
        textStyle: {
            fontSize: 14,
            color: '#eeeeee'
        },
        data: ['入职', '离职']
    },
    xAxis: {
        show: true,
        type: 'category',
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#eeeeee'
            }
        },
        data: ['2015年', '2016年', '2017年']
    },
    yAxis: {
        show: true,
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#3a4b61'
            }
        },
        axisLabel: {
            textStyle: {
                fontSize: 14,
                color: '#eeeeee'
            }
        }
    },
    series: [{
        name: '入职',
        type: 'bar',
        stack: '数量',
        itemStyle: {
            normal: {
                barBorderRadius: [2, 2, 0, 0]
            }
        },
        barWidth: 30,
        data: [90, 113, 60]
    }, {
        name: '离职',
        type: 'bar',
        stack: '数量',
        itemStyle: {
            normal: {
                barBorderRadius: [0, 0, 2, 2]
            }
        },
        barWidth: 30,
        data: [-10, -13, -60]
    }]
};