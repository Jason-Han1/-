
option = {
    //backgroundColor: '#080b30',//整个幕布背景色
    title: { //echarts主标题样式
        text: '折线图样式总览',
        textStyle: {
            align: 'center',
            color: '#888888',
            fontSize: 20,
            fontWeight: 600
        },
        top: '5%',
        left: 'center',
    },
    tooltip: {//鼠标滑过交叉点的提示样式，默认是黑色半透明状态
        trigger: 'axis',
        axisPointer: {
            label: {//X轴坐标文字样式
                show: true,
                backgroundColor: '#fff',
                color: '#556677',
                borderColor: 'rgba(0,0,0,0)',
                shadowColor: 'rgba(0,0,0,0)',
                shadowOffsetY: 0
            },
            lineStyle: {
                width: 0
            }
        },
        backgroundColor: '#fff',
        textStyle: {
            color: '#5c6c7c'
        },
        padding: [10, 10],
        extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
    },
    legend: {//右上角线类型标记
        data: ['日均收入', '全国点均'],
        top: "15",
        right: "15",
        icon: 'circle',//图标点样式
        itemWidth: 6,
        itemGap: 20,
        // data: charts.names,
        textStyle: {
            fontSize: 12,
            color: '#151619'
        },
    },
    //
    grid: {
        top: '10%',
        left: '4%',
        right: '4%',
        bottom: '4%',
        containLabel: true
    },
    //横坐标设置
    xAxis: {
        type: 'category',
        boundaryGap: false,//坐标轴两边留白
        axisLabel: { //坐标轴刻度标签的相关设置。
            interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
            //	margin:15,
            textStyle: {
                color: '#1B253A',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            },
            //rotate:50,
        },
        axisTick: {//坐标轴刻度相关设置。
            show: false,
        },
        axisLine: {//坐标轴轴线相关设置
            lineStyle: {
                color: '#D9D9D9',
                // opacity:0.2
            }
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
            show: false,
            lineStyle: {
                color: '#E5E9ED',
                // 	opacity:0.1
            }
        },
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    //纵坐标设置
    yAxis: {
        name: '单位：万千瓦时',//Y轴坐标名称 or 单位
        splitLine: {
            lineStyle: {//grid 区域内横坐标的线样式 此时为虚线
                type: "dashed",
                color: "#D9D9D9"
            }
        },

    },
    series: [{
                    name: '日均收入',
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            color: '#F88940',
                            //交叉点的阴影样式
                            shadowBlur: 3,
                            shadowColor: 'rgba(3,3,3,0.5)',
                            shadowOffsetY: 8,
                            lineStyle: {
                                color: "#F88940",
                                //以下为线的阴影样式
                                shadowBlur: 3,
                                shadowColor: 'rgba(3,3,3,0.5)',
                                shadowOffsetY: 8,
                                width: 1
                            },
                            areaStyle: {//曲线图覆盖的地方为渐变色
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: 'rgba(248,137,64,0)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(248,137,64,0.35)'
                                }]),
                            },
        
                            
                        }
                    },
                    symbol: 'circle',//数据交叉点样式
                    symbolSize: 5,//数据交叉点尺寸
                    data: ['171','281','322','432','337','285','175']
                },
                {
                    name: '全国点均',
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            color: '#6B97FE',
                            lineStyle: {
                                color: "rgba(107,151,254)",
                                width: 1
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: 'rgba(107,151,254,0)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(107,151,254,0.35)'
                                }]),
                            }
                        }
                    },
                    data: [50,100,375,650,210,160,75]
                }]
};


   