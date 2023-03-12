

option = {
    title: {
       
    },
    color:['#25EBE9','#6390F0',],
    tooltip: {
        trigger: 'axis'
    },

    grid: {
        containLabel: true
    },
    legend: {
        data: ['不良率','不良资产余额']
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            alignWithLabel: true
        },
        data: ['A租赁','B租赁','C租赁','D租赁','E租赁','F租赁']
    }],
    yAxis: [{
        type: 'value',
        name: '不良率（%）',
        min: 0,
        max: 50,
        position: 'right',
        axisLabel: {
            formatter: '{value} %'
        }
    }, {
        type: 'value',
        name: '不良资产余额(亿元)',
        min: 0,
        max: 100,
        position: 'left'
    }],
    series: [{
        name: '不良率',
        type: 'line',
        
            label: {
                normal: {
                    show: true,
                    position: 'top',
                }
            },
        lineStyle: {
                normal: {
                    width: 2,
                    shadowColor: '#25EBE9',
                }
            },
                    animationDelay: function (idx) {
            return idx * 1000;
        },
        data: [8,13,10,34,15,13]
    }, {
        name: '不良资产余额',
        type: 'bar',
        yAxisIndex: 1,
        barWidth:20,
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
                                animationDelay: function (idx) {
            return idx * 1000;
        },
        data: [80,56,32,93,44,57]
    }]
};