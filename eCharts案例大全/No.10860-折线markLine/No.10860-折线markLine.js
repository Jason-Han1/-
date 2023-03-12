option = {
    backgroundColor: '#000',
    title: {
        text: '本月非内涝严重月',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
        },
        top: '0%',
        right: '0%'
    },
    legend: {
        icon: 'rect', //设置图例的图形形状，circle为圆，rect为矩形
        itemWidth: 14, //图例标记的图形宽度[ default: 25 ]
        itemHeight: 5, //图例标记的图形高度。[ default: 14 ]
        itemGap: 13, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。[ default: 10 ]
        data: ['历年最高水位'],
        right: 'center', //图例组件离容器右侧的距离
        top: '10%',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    grid: {
        top: '28%',
        left: '5%', //grid 组件离容器左侧的距离。
        right: '8%', //grid 组件离容器右侧的距离。
        bottom: '5%', //grid 组件离容器下侧的距离。
        containLabel: true //grid 区域是否包含坐标轴的刻度标签[ default: false ]
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                color: '#fff',
                fontSize: 14
            }
        },
        data: ['2015', '2016', '2017', '2018']
    },
    yAxis: {
        type: 'value', //坐标轴类型。'value' 数值轴，适用于连续数据;'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据;'time' 时间轴;'log' 对数轴.
        name: 'cm             ', //坐标轴名称。
        axisTick: {
            show: false //是否显示坐标轴刻度
        },
        axisLine: {
            show: false, //是否显示坐标轴刻度
            lineStyle: {
                color: '#F1F1F3' //坐标轴线线的颜色
            }
        },
        axisLabel: {
            margin: 10, //刻度标签与轴线之间的距离
            textStyle: {
                fontSize: 14 //文字的字体大小
            }
        },
        splitLine: {

            lineStyle: {
                color: '#57617B' //分隔线颜色设置
            }
        }
    },
    series: [{
        name: '历年最高水位',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12
            }
        },
        markLine: {
            lineStyle: {
                color: '#e6492d'
            },
            data: [
                [{
                    symbol: 'none',
                    x: '13%',
                    yAxis: 100
                }, {
                    symbol: 'arrow',
                    x: '90%',
                    yAxis: 100,
                    label: {
                        normal: {
                            position: 'middle',
                            formatter: '当前最高水位'
                        }
                    }
                }]
            ]
        },
        data: [152, 289, 283, 296]
    }, ]
};