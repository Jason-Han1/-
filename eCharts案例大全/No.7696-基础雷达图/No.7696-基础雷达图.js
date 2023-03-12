var itemData = [{
    name: '地区1',
    value: [9191.44, 9429, 9429, 9023, 9885, 9020]
}, {
    name: '地区2',
    value: [8590.67, 4628, 4019, 609, 637, 355]
}, {
    name: '地区3',
    value: [1048.68, 290, 290, 0, 80, 0]
}, {
    name: '地区4',
    value: [518.71, 123, 22, 345, 250, 0]
}, {
    name: '地区5',
    value: [3095.83, 2028, 1874, 154, 263, 370]
}, {
    name: '地区6',
    value: [2151.04, 1094, 955, 139, 154, 2560]
}]
var arr = []
for (var i = 0; i < itemData.length; i++) {
    arr.push({
        name: itemData[i].name,
        value: itemData[i].value,
        areaStyle: {
            normal: {
                // 单项区域填充样式
                color: {
                    type: 'linear',
                    x: 0, //右
                    y: 0, //下
                    x2: 1, //左
                    y2: 1, //上
                    colorStops: [{
                            offset: 1,
                            color: 'rgba(0,0,0,0)'
                        },
                        {
                            offset: 1,
                            color: '#00c2ff'
                        }
                    ],
                    globalCoord: false
                },
                opacity: 1 // 区域透明度
            }
        },
        symbolSize: 2.5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
        label: {
            // 单个拐点文本的样式设置
            normal: {
                show: false // 单个拐点文本的样式设置。[ default: false ]
            }
        },
        itemStyle: {
            normal: {
                //图形悬浮效果
                // borderColor: '#00c2ff',
                // borderWidth: 2.5
            }
        },
        lineStyle: {
            normal: {
                // opacity: 0.5 // 图形透明度
            }
        }
    })
}
option = {
    backgroundColor:'#000',
    color: ['#30E5CA', '#1BC4FC', '#7F46B3', '#10D785', '#FA9838', '#FF5B5B'],
    tooltip: {
        show: true,
        renderMode: 'html'
    },
    legend: {
        show: true,
        top: 5,
        itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
        itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
        itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
        textStyle: {
            fontSize: 14,
            color: '#ade3ff'
        },
        data: ['地区1', '地区2', '地区3', '地区4', '地区5', '地区6']
    },
    radar: [{
        indicator: [{
                text: '渔业经济总量产值'
            },
            {
                text: '水产品总量'
            },
            {
                text: '养殖量'
            },
            {
                text: '捕捞量'
            },
            {
                text: '养殖面积'
            },
            {
                text: '捕捞面积'
            }
        ],

        textStyle: {
            color: 'red'
        },
        center: ['50%', '55%'],
        radius: 190,
        startAngle: 90,
        splitNumber: 4,
        nameGap: 5,
        orient: 'horizontal', // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
        name: {
            formatter: '{value}',
            textStyle: {
                fontSize: 12, //外圈标签字体大小
                color: '#fff' //外圈标签字体颜色
            }
        },
        splitArea: {
            // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: {
                // 分隔区域的样式设置。
                color: 'rgba(0,0,0,0)' // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
        },
        // axisLabel:{//展示刻度
        //     show: true
        // },
        axisLine: {
            //指向外圈文本的分隔线样式
            lineStyle: {
                color: '#153269'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#113865', // 分隔线颜色
                width: 1 // 分隔线线宽
            }
        }
    }],
    series: [{
        name: '雷达图',
        type: 'radar',
        itemStyle: {
            emphasis: {
                lineStyle: {
                    width: 4
                }
            }
        },
        data: arr
    }]
}