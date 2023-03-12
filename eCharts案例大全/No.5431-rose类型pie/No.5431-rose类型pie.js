option = {
    color: ['#edc523', '#2ac9cf', '#f87777', '#67a4fc', '#6dcc50'],
    tooltip: {
        backgroundColor: 'rgba(50,50,50,.3)',
        textStyle: {
           color: '#222'
       },
       formatter: '{b} : {c}（{d}%）' // a->seriesName,b->legendName,c->value,d->percent
    },
    legend: {
        orient: 'vertical',
        right: 0,
        bottom: '4%',
        itemWidth: 10,
        itemHeight: 10
    },
    series: [{
        name: '攻击次数',
        type: 'pie',
        clockwise: false,
        radius: '75%',
        center: ['44%', '50%'],
        hoverAnimation: false,
        roseType: 'radius', 
        data: [{
                value: 335,
                name: '访问控制'
            },
            {
                value: 310,
                name: '访问限速'
            },
            {
                value: 234,
                name: '状态码限速'
            },
            {
                value: 135,
                name: '攻击IP惩罚'
            },
            {
                value: 148,
                name: '其他'
            }
        ],
        itemStyle: {
            normal:{ 
                borderColor:'#fff',
                borderWidth: 5,
            },
        },
        label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}：{d}%}\n{hr|}',
            rich: {
                hr: {
                    backgroundColor: 't',
                    borderRadius: 100,
                    width: 0,
                    height: 6,
                    padding: [3, 3, 0, -12],
                    shadowColor: '#1c1b3a',
                    shadowBlur: 1,
                    shadowOffsetX: 1,
                    shadowOffsetY: 2,
                },
                a: {
                    padding: [-35, 15, -20, 5],
                }
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                    width: .5,
                }
            }
        }
    }],
}