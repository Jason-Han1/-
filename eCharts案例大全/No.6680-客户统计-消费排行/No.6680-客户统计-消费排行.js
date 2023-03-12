option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '4%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        name: '消费额(元)',
        type: 'value',
        boundaryGap: [0, 0.01]

    },
    xAxis: {
        type: 'category',
        data: ['A会员', 'B会员', 'C会员', 'D会员', 'E会员', 'F会员', 'G会员', 'H会员', 'I会员', 'J会员'],
        axisLabel: {
            interval: 0,
            rotate: 40
        }
    },
    series: [{
        name: '消费额(元)',
        type: 'bar',
        data: [269, 264, 259, 201, 186, 183, 176, 155, 153, 124]
    }]
};



myChart.setOption(option);

function randomData() {
    return Math.round(Math.random() * 1000);
}