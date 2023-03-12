var legendData = ['收入/万元','班次', '里程/万公里']; //图例

var indicator = [{
        text: '包车',
        max: 30
    },
    {
        text: '接火车',
        max: 30
    },
    {
        text: '空车',
        max: 30
    },
    {
        text: '其他',
        max: 30,
    }
    
];
var dataArr = [
    {
         value: [25, 29, 29, 27],
        name: legendData[0],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#00D7FF',
                    // shadowColor: '#4BFFFC',
                    // shadowBlur: 10,
                },
                shadowColor: '#00D7FF',
                shadowBlur: 10,
            },
        },
         areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                            offset: 0,
                            color: '#00D7FF'
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: '#00D7FF'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            }
    },
    {
        value: [10, 11, 5 ,5],
        name: legendData[1],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#C000FF',
                    // shadowColor: '#4A99FF',
                    // shadowBlur: 10,
                },
                shadowColor: '#C000FF',
                shadowBlur: 10,
            },
        },
        areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                            offset: 0,
                            color: '#C000FF'
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: '#C000FF'
                        }
                        ],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            }
    },
    {
        value: [23, 23, 29, 29],
        name: legendData[2],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#00FFB4',
                    // shadowColor: '#4BFFFC',
                    // shadowBlur: 10,
                },
                shadowColor: '#00FFB4',
                shadowBlur: 10,
            },
        },
         areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                            offset: 0,
                            color: '#00FFB4'
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: '#00FFB4'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            }
    }
    
];
var colorArr = ['#00D7FF','#C000FF', '#00FFB4']; //颜色
option = {
    backgroundColor: '#101736',
    title: {
        "text": "非营运经营分析",
        x: "4%",
        width: 173,
        height: 163,
        fontSize: 22,
        textStyle: {
            color: '#fff',
            fontSize: '22'
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '16',

        },
    },
    color: colorArr,
    legend: {
        orient:'vertical',
        icon: 'squareRatio', //图例形状
        data: legendData,
        bottom:'35%',
        right:'5%',
        itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
        itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
        itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
        textStyle: {
            fontSize: 14,
            color: '#fff',
        },
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                fontSize: 16
            },
        },
        center: ["35%", "50%"],
        indicator: indicator,
        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: { // 分隔区域的样式设置。
                color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
        },
        axisLine: { //指向外圈文本的分隔线样式
            lineStyle: {
                color: '#153269'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#113865', // 分隔线颜色
                width: 1, // 分隔线线宽
            }
        },
    },
    tooltip: {
        show:true,
        trigger: "item"
        
    },
    series: [{
        type: 'radar',
        symbolSize: 8,
        // symbol: 'angle',
        data: dataArr
    }]
};