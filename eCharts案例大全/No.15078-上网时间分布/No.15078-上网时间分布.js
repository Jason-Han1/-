function data() {
    var d = [];
    for (var i = 0; i < 24; i++) {
        d.push({
            name: i + '~' + (i + 1),
            value: Math.random() * 60
        });
    }
    return d;
}

var data1 = [];
for (var i = 0; i <= 24; i++) {
    data1.push({
        name: String(i),
        value: 1
    })
}

option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
        formatter: function(p) {
            var a = option.series[0].data[p.dataIndex].name,
                b = option.series[0].data[p.dataIndex + 1].name;
            return '上网时长<br/>' + a + '-' + b + '点：' + p.value.toFixed(0) + '分钟'
        }
    },
    series: [{
            type: 'pie',
            startAngle: 97.5,
            hoverAnimation: false,
            radius: ['65%', '80%'],
            itemStyle: {
                normal: {
                    color: '#eee', // 表盘颜色
                },
                emphasis: {
                    show: false,
                    color: '#ffffff',
                }
            },
            silent: true,
            label: {
                normal: {
                    position: 'inner',
                    formatter: '{b}',
                    textStyle: {
                        color: '#066c8d',// 钟表字体颜色
                        fontWeight: 'bold',
                        fontSize: 10
                    }
                },
            },
            labelLine: {
                normal: {
                    show: true,
                    lineStyle: {
                        color: '#ffffff'
                    }
                }
            },
            data: data1
        }, {
            name: '上网时间分布',
            type: 'pie',
            radius: ['0%', '62%'],
            roseType: 'area',
            color: ['#a1d559'], // 扇形分区颜色
            data: data(),
            labelLine: {
                normal: {
                    show: true
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        },

        {
            name: '',
            type: 'gauge',
            min: 0,
            max: 24,
            startAngle: 90,
            endAngle: 449.9,
            radius: '65%',
            splitNumber: 24,
            clockwise: false,
            animation: false,
            detail: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: [
                        [1, 'rgba(255,255,255,.4)']
                    ],
                    width: '10%',
                    opacity: 0.0
                }
            },
            splitLine: {
                show: true,
                length: '92%',
                lineStyle: {
                    color: '#fff', // 扇形区分割线
                    width: '1'
                }
            },
            axisLabel: {
                show: false,
                formatter: function(v) {
                    return v ? v : '';
                },
            },
        },
    ]
};