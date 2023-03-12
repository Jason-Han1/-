//柱状图  渐变色双y轴

//可以鼠标滚动

//点击背景和点击图形触发不同的事件

let dataList = [{
    name: '苹果',
    value: '56'
}, {
    name: '橘子',
    value: '75'
}, {
    name: '香蕉',
    value: '85'
}, {
    name: '火龙果',
    value: '78'
}, {
    name: '西瓜',
    value: '76'
}, {
    name: '椰子',
    value: '45'
}, {
    name: '葡萄',
    value: '100'
}];


myChart.setOption({
    backgroundColor: 'rgb(20,28,52)',
    grid: {
        left: "10%", //距离左边的距离
        right: "13%", //距离右边的距离
        bottom: "10%", //距离下边的距离
        top: "8%" //距离上边的距离
    },
    title: {
        text: '爱吃水果指数',
        left: 26,
        top: 26,
        textStyle: {
            color: '#FFFFFF',
            fontSize: 15,
            fontWeight: 50000,
            fontFamily: 'PingFang SC'
        }
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: true
            },
            magicType: {
                show: true,
                type: ["line", "bar"]
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: true,
                name: "爱吃水果指数统计图",
                pixelRatio: 2
            }
        },
        iconStyle: {
            normal: {
                borderColor: "#41A7DE"
            }
        },
        itemSize: 12,
        top: 20,
        right: 22
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            crossStyle: {
                color: "#999"
            }
        },
    },
    xAxis: [{
        type: "category",
        data: ['苹果', '橘子', '香蕉', '火龙果', '西瓜', '椰子', '葡萄'],
        axisLabel: {
            textStyle: {
                color: "#ffffff",
                fontSize: 14,
                fontFamily: "Microsoft YaHei"
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
            type: "value",
            axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: "#fff",
                    fontSize: 12,
                    fontFamily: "Microsoft YaHei"
                },
            },
            splitLine: {
                lineStyle: {
                    color: "#666"
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },
        {
            type: "value",
            axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: "#fff",
                    fontSize: 12,
                    fontFamily: "Microsoft YaHei"
                }
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }
    ],
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: dataList.length > 15 ? 35 : 100
    }],
    series: [{
            name: "爱吃指数",
            type: "bar",
            data: dataList,
            barGap: '-100%',
            barCategoryGap: '60%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#499ef4'
                        },
                        {
                            offset: 1,
                            color: '#3eb5dd'
                        }
                    ])
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#3eb5dd'
                        },
                        {
                            offset: 1,
                            color: '#499ef4'
                        }
                    ])
                }
            },
        },
        {
            name: "爱吃水果占比",
            type: "line",
            yAxisIndex: 1,
            data: dataList,
            itemStyle: {
                normal: {
                    color: "#ff7f50"
                }
            }
        }
    ]
})

//这里先解绑，防治click事件触发多次
myChart.off('click')

//这里使用getZr(),直接使用click方法点击背景不会触发
myChart.getZr().on('click', params => {
    const pointInPixel = [params.offsetX, params.offsetY]

    if (myChart.containPixel('grid', pointInPixel)) {
        const pointInGrid = Math.abs(myChart.convertFromPixel(
            'grid',
            pointInPixel
        )[0])
        //这个就是当前的index下标
        console.log(pointInGrid)
        //这里就是当前的值
        console.log(dataList[pointInGrid])

    } else {
        console.log('点击的是背景...')
    }
})