option = {
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
            value: 72,
            name: '医院倾向'
        }, {
            value: 85,
            name: '家属倾向'
        }, {
            value: 32,
            name: '产妇倾向'
        }, {
            value: 111,
            name: '社会倾向'
        }, {
            value: 0,
            name: ''
        }],
        label: {
            normal: {
                textStyle: {
                    color: '#999',
                    fontSize: 14,
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
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }],
    color: [
        '#00acee',
        '#52cdd5',
        '#79d9f1',
        '#a7e7ff',
        '#c8efff'
    ],
    backgroundColor: '#fff'
};