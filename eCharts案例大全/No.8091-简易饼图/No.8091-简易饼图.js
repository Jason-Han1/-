option = {
    backgroundColor: '#222A37',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [{
        name: '库存情况',
        type: 'pie',
        radius: '68%',
        center: ['50%', '50%'],
        clockwise: false,
        data: [{
            value: 25,
            name: '咖啡'
        }, {
            value: 15,
            name: '奶茶'
        }, {
            value: 20,
            name: '冷饮'
        }, {
            value: 8,
            name: '果汁'
        }, {
            value: 7,
            name: '牛奶'
        }],
        label: {
            normal: {
                position: 'inside',
                textStyle: {
                    color: '#fff',
                    fontSize: 16,
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                borderWidth: 4,
                borderColor: '#222A37',
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(255, 255, 255, 0.5)'
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(170, 166, 157,0.8)'
            }
        }
    }],
    color: [
        '#e15f41',
        '#e77f67',
        '#f19066',
        '#f3a683',
        '#ff793f'
    ],
};