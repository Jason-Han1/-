var color = ['#02CDFF', '#62FBE7', '#7930FF','#E148EB']

option = {
    color: color,
    title: {
        text: '40kg',
        left: 'center',
        top: '50%',
        textStyle: {
            fontSize: 22,
            color: '#333',
            fontWeight: 'normal'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        right: 20,
        top: '50%',
        textStyle: {
            fontSize: 14,
            color: '#333',
            fontWeight: 'normal'
        }
    },
    series: [{
        type: 'pie',
        roseType: 'radius',
        radius: ['30%', '60%'],
        data: [{
                value: 220,
                name: '正常'
            },{
                value: 120,
                name: '低体重'
            },{
                value: 189,
                name: '超重'
            },{
                value: 189,
                name: '肥胖'
            }
        ],
        label: {
            normal: {
                formatter: '{font|{c}人}',
                rich: {
                    font: {
                        fontSize: 20,
                        padding: [5, 0],
                        color: '#333'
                    },
                    hr: {
                        height: 0,
                        borderWidth: 1,
                        width: '100%',
                        borderColor: '#333'
                    }
                }
            },
        },
        labelLine: {
            lineStyle: {
                color: '#333'
            }
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0,0,0,0.5)'
            }
        }
    }]
};