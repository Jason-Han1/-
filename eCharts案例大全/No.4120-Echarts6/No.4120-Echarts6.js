var legendData = ['图例一', '图例二']; //图例
var data = ['55k', '66k'];
legendData.forEach((s,index) => {
    s = legendData[index] + '    ' + data[index]
})
legendData[0] = legendData[0] + '    ' + data[0]
legendData[1] = legendData[1] + '    ' + data[1]
var indicator = [{
        text: 'Design',
        max: 30,
    },
    {
        text: 'Ux',
        max: 30
    },
    {
        text: 'Sales',
        max: 30
    },
    {
        text: 'Support',
        max: 30,
        //  axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}
    },
    {
        text: 'Technology',
        max: 30
    },
    {
        text: 'language',
        max: 30
    },
    {
        text: 'Test',
        max: 30
    },
    {
        text: 'Marketing',
        max: 30
    },
    {
        text: 'Development',
        max: 30
    }

];
var dataArr = [{
        value: [28, 12, 17, 18, 10, 12, 23, 16, 9],
        name: legendData[0],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#4A99FF',
                    // shadowColor: '#4A99FF',
                    // shadowBlur: 10,
                },
                shadowColor: '#4A99FF',
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
                        color: '#4A99FF'
                    }, {
                        offset: 0.5,
                        color: 'rgba(0,0,0,0)'
                    }, {
                        offset: 1,
                        color: '#4A99FF'
                    }],
                    globalCoord: false
                },
                opacity: 1 // 区域透明度
            }
        }
    },
    {
        value: [11, 11, 15, 14, 20, 16, 17, 18, 26],
        name: legendData[1],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#4BFFFC',
                    // shadowColor: '#4BFFFC',
                    // shadowBlur: 10,
                },
                shadowColor: '#4BFFFC',
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
                        color: '#4BFFFC'
                    }, {
                        offset: 0.5,
                        color: 'rgba(0,0,0,0)'
                    }, {
                        offset: 1,
                        color: '#4BFFFC'
                    }],
                    globalCoord: false
                },
                opacity: 1 // 区域透明度
            }
        }
    }
];
var colorArr = ['#4A99FF', '#4BFFFC']; //颜色
option = {
    backgroundColor: '#101736',
    title: {
        show: false,
        text: "数学薄弱知识点分析",
        x: "4%",

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
        orient: 'vertical',
        icon: 'rect', //图例形状
        data: legendData,
        bottom: '18%',
        padding: 30,
        right: '5%',
        backgroundColor: '#0080C6',
        formatter: function(name,data) {
            return  name + '    ' + data;
        },
        itemWidth: 16, // 图例标记的图形宽度。[ default: 25 ]
        itemHeight: 16, // 图例标记的图形高度。[ default: 14 ]
        itemGap: 28, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
        textStyle: {
            fontSize: 16,
            padding: [6, 6, 6, 6],
            color: '#00E4FF',
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