var legendData = ['本人数值', '销冠数值（王旭）', '项目团队单项最大值']; //图例
var indicator = [{
        text: '二级转认购转化率',
        max: 6000,
    },
    {
        text: '认购金额',
        max: 5000
    },
    {
        text: '现切率',
        max: 5000
    },
    {
        text: '二级转认购转化周期',
        max: 5000,
    }
];
var dataArr = [ {
        value: [5000, 5000, 5000, 5000],
        name: legendData[2],
        itemStyle: {
            normal: {
                borderWidth: 3,
                shadowColor: '#4A99FF',
                shadowBlur: 0
            },
        },
        areaStyle: {
            normal: {
                color: '#fff',
            }
        },
        lineStyle: {
            normal: {
                type: "solid",
                width: 3
            }
        }
    },{
        value: [4200, 4000, 4400, 2000],
        name: legendData[1],
        itemStyle: {
            normal: {
                shadowColor: '#fff',
                shadowBlur: 0,
                borderWidth: 3
            },
        },
        areaStyle: {
            normal: {
                color: '#FFF6DB',
            }
        },
        lineStyle: {
            normal: {
                type: "solid",
                width: 3
            }
        }
    },
    {
        value: [3300, 3700, 3600, 3900],
        name: legendData[0],
        itemStyle: {
            normal: {
                borderWidth: 3,
                shadowColor: '#4A99FF',
                shadowBlur: 0
            },
        },
        areaStyle: {
            normal: {
                color: '#DEE0EE',
            }
        },
        lineStyle: {
            normal: {
                type: "solid",
                width: 3
            }
        }
    }
];
var colorArr = ['#CCDAFF','#FFD24C', '#5865A8']; //颜色
option = {
    backgroundColor: '#fff',
    color: colorArr,
    legend: {
        orient: 'horizontal',
        icon: 'angle', //图例形状
        data: legendData,
        bottom: 35,
        left: 165,
        itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
        itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
        itemGap: 88, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
        textStyle: {
            fontSize: 14,
            color: '#999',
        },
    },
    radar: {
        name: {
            textStyle: {
                color: '#000',
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
            show: false,
            lineStyle: {
                color: '#153269'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#CCDAFF', // 分隔线颜色
                width: 0, // 分隔线线宽
            }
        },
        splitNumber: 0,
    },
    series: [{
        type: 'radar',
        symbolSize: 8,
        borderWidth: 3,
        // symbol: 'angle',
        data: dataArr
    }]
};