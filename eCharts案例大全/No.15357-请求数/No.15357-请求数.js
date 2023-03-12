option = {
    backgroundColor: '#394056',
    title: {
        text: '弘康日调用数量',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 28,
            color: '#F1F1F3'
        },
        left: '6%'
    },
    tooltip: {
        trigger: 'axis', //触发类型。[ default: 'item' ] :数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用;'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        icon: 'rect', //设置图例的图形形状，circle为圆，rect为矩形
        itemWidth: 14, //图例标记的图形宽度[ default: 25 ] 
        itemHeight: 5, //图例标记的图形高度。[ default: 14 ] 
        itemGap: 13, //图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。[ default: 10 ] 
        data: ['移动', '电信', '联通'],
        right: '4%', //图例组件离容器右侧的距离
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    grid: {
        left: '3%', //grid 组件离容器左侧的距离。
        right: '4%', //grid 组件离容器右侧的距离。
        bottom: '3%', //grid 组件离容器下侧的距离。
        containLabel: true //grid 区域是否包含坐标轴的刻度标签[ default: false ] 
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
        axisLine: {
            lineStyle: {
                color: '#F1F1F3' //坐标轴线线的颜色。
            }
        },
        data: ['20180701', '20180702', '20180703', '20180704', '20180705', '20180706',
       '20180707', '20180708', '20180709', '20180710', '20180711', '20180712',
       '20180713', '20180714', '20180715', '20180716', '20180717', '20180718',
       '20180719', '20180720', '20180721', '20180722', '20180723', '20180724',
       '20180725', '20180726', '20180727', '20180728', '20180729', '20180730',
       '20180731']
    }],
    yAxis: [{
        type: 'value', //坐标轴类型。'value' 数值轴，适用于连续数据;'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据;'time' 时间轴;'log' 对数轴.
        name: '（件）', //坐标轴名称。
        axisTick: {
            show: false //是否显示坐标轴刻度
        },
        axisLine: {
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
    }],
    series: [ {
        name: '日调用数量',
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
        data: [152, 289, 283, 296, 324, 256, 164, 157, 328, 334, 342, 395, 485,
       267, 200, 394, 519, 556, 590, 516, 272, 216, 502, 472, 512, 359,
       333, 176, 174, 329, 373]
    }, ]
};;