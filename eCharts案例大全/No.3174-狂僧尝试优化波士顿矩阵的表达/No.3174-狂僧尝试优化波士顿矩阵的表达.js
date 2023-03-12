// 散点数据
const set = [
    ['二级指标', '指标声量', '指标满意度'],
    ['外观', 42487, 92.95],
    ['电池', 23811, 76.98],
    ['物流', 21399, 95.87],
    ['拍照', 20666, 89.11],
];


// 参数控制
const log = 5;
const center = [25000,84];
const yAxismax = 100;
const yAxismin = 0;
myChart.resize({width:664,height:560})   // 控制输出图表大小
// 数据转换
const set1 = set.slice(1);
const marksData = set1.map(x => ({name:x[0],value:[x[1],x[2]]}));
// console.log(marksData)

// 中心线

centerLine = [
    {
        name: set[0][2], xAxis: center[0]
    },
    {
        name: set[0][1], yAxis: center[1]
    }
]
// 中心点
centerMark = [
    {
        value: '', coord: center
    }    
]

option = {
    tooltip: {
        axisPointer: {
            show: true,
            type: 'shadow',
            lineStyle: {
                type: 'dashed',
                width: 1
            },
            label: {
                backgroundColor: '#555'
            }
        },
        formatter:params => {
            // console.log(params)
            const {
                marker,
                name,
                value,
                componentType
            } = params;
            if (componentType === "series"){
                return [`${marker} ${name}`,` `,
                `${set[0][1]}: ${value[0]}`,
                `${set[0][2]}: ${value[1]}%`,
                    ].join("</br>")
            }
        }
    },
    toolbox:{
        show:true,
        right:16,
        top:16,
        feature: {
            dataZoom: {},
            restore: {},
        }
    },
    // backgroundColor:'#F2F2F2',
    grid: {
        left: 32,
        right: 64,
        bottom: 32,
        top: 64,
        containLabel: true
    },
    xAxis: {
        scale: true,
        axisLine: {
            lineStyle: {
                color: '#ddd'
            },
        },
        axisLabel: {
            color: '#666',
        },
        splitLine: {
            lineStyle: {
                color: '#eee'
            }
        },
        type:'log',
        logBase:log
    },
    yAxis: {
        scale: true,
        axisLine: {
            lineStyle: {
                color: '#ddd'
            },
        },
        axisLabel: {
            color: '#666',
            formatter: val => val === 0 ? 0 : `${val}%`
        },
        splitLine: {
            lineStyle: {
                color: '#eee'
            }
        }
    },
    series: [{
        type: 'scatter',
        data: marksData,
        label: {
            show: true,
            position: 'bottom',
            formatter: '{b}'
        },
        itemStyle: {
            shadowBlur: 2,
            shadowColor: 'rgba(120, 36, 50, 0.5)',
            shadowOffsetY: 1,
            color: function (e) {
                let randomColor = 'rgba(' + Math.floor(Math.random() * 240) + ',' + Math.floor(Math.random() * 240) + ',' + Math.floor(Math.random() * 240) + ',' + '.8' + ')'
                return randomColor.substring()
            }
        },
        // 各象限区域
        markArea: {
            silent: true,
            data: [
                // 第一象限
                [{
                    name: '强势区',
                    xAxis: 70000, // x 轴开始位置
                    yAxis: 84, // y 轴结束位置(直接取最大值)
                    itemStyle: {
                        color: 'rgba(56, 180, 139, .1)'
                    },
                    label: {
                        position: 'inside',
                        color: 'rgba(0, 0, 0, .1)',
                        fontSize: 22
                    }
                }, {
                    xAxis:30000,
                    yAxis:96  // y轴开始位置
                }],
                // 第二象限
                [{
                    name: '维持区',
                    yAxis: yAxismax, // y 轴结束位置(直接取最大值)
                    itemStyle: {
                        color: 'rgba(68, 97, 123, .1)'
                    },
                    label: {
                        position: 'inside',
                        color: 'rgba(0, 0, 0, .1)',
                        fontSize: 22
                    }
                }, {
                    xAxis: center[0], // x 轴结束位置
                    yAxis: center[1] // y轴开始位置
                }],
                // 第三象限
                [{
                    name: '次改善区',
                    yAxis: center[1], // y 轴结束位置
                    itemStyle: {
                        color: 'rgba(191, 120, 58, .1)'
                    },
                    label: {
                        position: 'inside',
                        color: 'rgba(0, 0, 0, .1)',
                        fontSize: 22
                    }
                }, {
                    xAxis: center[0], // x 轴结束位置
                    yAxis: yAxismin // y轴开始位置
                }],
                // 第四象限
                [{
                    name: '改善区',
                    xAxis: center[0], // x 轴开始位置
                    yAxis: center[1], // y 轴结束位置
                    itemStyle: {
                        color: 'rgba(116, 83, 153, .1)'
                    },
                    label: {
                        position: 'inside',
                        color: 'rgba(0, 0, 0, .1)',
                        fontSize: 22
                    }
                }, {
                    yAxis: yAxismin // y轴开始位置
                }]
            ]
        },
        // 中心点交集象限轴
        markLine: {
            silent: true, // 是否不响应鼠标事件
            precision: 2, // 精度
            lineStyle: {
                type: 'solid',
                color: '#00aca6'
            },
            label: {
                color: '#00aca6',
                position: 'end',
                formatter: '{b}'
            },
            data: centerLine
        },
        // 中心点
        markPoint: {
            symbol: 'roundRect',
            symbolSize: 12,
            itemStyle: {
                color: 'rgba(234, 85, 6, .8)'
            },
            label: {
                position: 'top'
            },
            data: centerMark
        }
    }]
}