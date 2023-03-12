// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

var val1data2 = [{
        value: 0.6,
        name: '玩家1',
        explain: '解释一下名词1'
    },
    {
        value: 0.3,
        name: '玩家2',
        explain: '解释一下名词2'
    },
    {
        value: 0.1,
        name: '玩家3',
        explain: '解释一下名词3'
    },
]

var arr = ['middleLost', 0.6, val1data2, '垃圾玩家']

option = {
    title: {
        top: '45%',
        left: 'center',
        text: arr[3],
        textStyle: {
            color: '#333',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14
        },
        subtext: '(占所有数据的的' + (arr[1] * 10000 / 100).toFixed(2) + '%)',
        subtextStyle: {
            color: '#666',
            fontSize: 12
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(res) {
            console.log(res)

            if (res.componentSubType == 'liquidFill') {
                return res.seriesName + ': ' + (res.value * 10000 / 100).toFixed(2) + '%';
            } else {
                return '<span class="ii" style="background:' + res.color + ' "></span>' + res.name + ':<br/> ' + res.data.value + ' (' + res.percent + '%)<br/> ' + res.data.explain;
            }
        }
    },
    series: [{
            type: 'liquidFill',
            itemStyle: {
                normal: {
                    opacity: 0.4,
                    shadowBlur: 0,
                    shadowColor: 'blue'
                }
            },
            name: arr[0],
            data: [arr[1]],
            background: '#fff',
            color: ['#53d5ff'],
            center: ['50%', '50%'],

            backgroundStyle: {
                color: '#fff'
            },
            label: {
                normal: {
                    formatter: '',
                    textStyle: {
                        fontSize: 12
                    }
                }
            },
            outline: {
                itemStyle: {
                    borderColor: '#86c5ff',
                    borderWidth: 0
                },
                borderDistance: 0
            }
        },
        {
            type: 'pie',
            radius: ['42%', '50%'],
            hoverAnimation: false, ////设置饼图默认的展开样式
            label: {
                show: false,
                normal: {
                    show: false,
                    position: 'center'
                },

            },
            labelLine: {
                normal: {
                    show: false
                }
            },

            itemStyle: { // 此配置
                normal: {
                    borderWidth: 2,
                    borderColor: '#ffffff',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 2,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            data: arr[2]
        }
    ]
}