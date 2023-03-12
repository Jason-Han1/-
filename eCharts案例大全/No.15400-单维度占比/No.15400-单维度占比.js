option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['占有率']
    },
    series: [{
        name: '饼图二',
        type: 'pie',
        radius: ['60%', '70%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 20,
            name: '占有率',
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 50
                    }
                }
            }
        }, {
            value: 80,
            name: '占位',
            label: {
                normal: {
                    formatter: '\n完成率',
                    textStyle: {
                        color: '#555',
                        fontSize: 20
                    }
                }
            },
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    }]
};