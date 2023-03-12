// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill
let industry_data = 0.26;
// 处理旋转量
let startAngle = industry_data * 100 * 1.8 - 90;
var option = {
    color: ['#eeeafe'],
    legend: {
        show: true,
        itemGap: 12,
        subtext: '',
        data: []
    },
    series: [{
        name: 'Line 1',
        type: 'pie',
        clockWise: true,
        radius: ['20%', '25%'],
        startAngle: startAngle,
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: industry_data * 100,
            name: '01',
            itemStyle: {
                normal: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#5c7ffe' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: '#8e53de' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: '#5c7ffe' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: '02',
            value: (1 - industry_data) * 100,
            itemStyle: {
                normal: {
                    color: '',
                }
            }
        }]
    }, {
        type: 'liquidFill',
        data: [industry_data, industry_data],
        radius: '20%',
        itemStyle: {
            normal: {
                opacity: 0.4,
                shadowBlur: 0,
                shadowColor: ''
            }
        },
        label: {
            normal: {
                //formatter: '',
                textStyle: {
                    color: '#8e53de',
                    fontSize: 26
                }
            }
        },
        backgroundStyle: {
            color: '#fff', // 水球未到的背景颜色
            opacity: 0.5
        },
        color: ['#d1d0fd'],
        outline: {
            show: false
        },
    }, ]
};