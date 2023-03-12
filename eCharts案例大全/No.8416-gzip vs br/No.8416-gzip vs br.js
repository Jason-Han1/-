var legendData = ['lzstring', 'lzma']; //图例
var indicator = [{
        text: '消耗内存(M)',
        max: 300,
    },
    {
        text: '压缩耗时(ms)',
        max: 9000
    },
    {
        text: '解压耗时(ms)',
        max: 600
    },
    {
        text: '压缩比',
        max: 1,
        //  axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}
    }
];
var dataArr = [{
        value: [9, 991, 144, 0.93],
        name: legendData[0],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#396f00',
                    // shadowColor: '#4A99FF',
                    // shadowBlur: 10,
                },
                shadowColor: '#396f00',
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
                            color: '#25a927'
                        }, {
                            offset: 0.5,
                            color: 'rgba(255,255,255,0.1)'
                        }, {
                            offset: 1,
                            color: '#25a927'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            }
    },
    {
        value: [233, 8918, 526, 0.89],
        name: legendData[1],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#e43c59',
                    // shadowColor: '#4BFFFC',
                    // shadowBlur: 10,
                },
                shadowColor: '#e43c59',
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
                            color: '#e43c59'
                        }, {
                            offset: 0.5,
                            color: 'rgba(255,255,255,0.1)'
                        }, {
                            offset: 1,
                            color: '#e43c59'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            }
    }
];
var colorArr = ['#396f00', '#e43c59']; //颜色
option = {
    backgroundColor: '#efefef',
    color: colorArr,
    legend: {
        orient:'vertical',
        icon: 'circle', //图例形状
        data: legendData,
        bottom:35,
        right:40,
        itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
        itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
        itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
        textStyle: {
            fontSize: 34,
            color: '#333',
        },
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#333',
                fontSize: 26
            },
        },
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
    series: [{
        type: 'radar',
        symbolSize: 8,
        // symbol: 'angle',
        data: dataArr
    }]
};