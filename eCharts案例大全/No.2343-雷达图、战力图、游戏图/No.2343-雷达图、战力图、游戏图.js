var legendData = ['车辆数', '设计车位']; //图例
// 数据分析元素
var indicator = [{
    text: '新签外部合同',
    max: 100,
},
{
    text: '营业收入',
    max: 100
},
{
    text: '净利润',
    max: 100
},
{
    text: '经营活动净现金流',
    max: 100,
    //  axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}
},
{
    text: '营业收入利润率',
    max: 100
},
{
    text: '毛利率',
    max: 100
},
{
    text: '工资总额',
    max: 100
},
{
    text: '两金净额',
    max: 100
},
{
    text: '外部应收账款',
    max: 100
}
];
// 数据信息
var dataArr = [{
    value: [90, 73, 60, 58, 88, 69, 77, 52, 78],
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
    value: [100, 90, 83, 92, 82, 59, 67, 75, 65],
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
    color: colorArr,
    // legend: {
    //     orient: 'vertical',
    //     icon: 'circle', //图例形状
    //     data: legendData,
    //     bottom: 35,
    //     right: 40,
    //     itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
    //     itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
    //     itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
    //     textStyle: {
    //         fontSize: 14,
    //         color: '#00E4FF',
    //     },
    // },
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
