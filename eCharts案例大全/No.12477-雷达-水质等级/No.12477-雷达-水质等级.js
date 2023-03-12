//var myChart = echarts.init(document.getElementById("echart2"));
var data = {
    names: ["新城桥", "湟水河", "黄河什川", "水厂鱼口"],
    levels:[
        ["16.9014", "16.9014", "19.0141", "18.3099", "21.831", "7.0423"],
        ["12.5", "19.4444", "18.0556", "16.6667", "19.4444", "13.8889"],
        ["18.0451", "18.0451", "21.0526", "21.8045", "15.7895", "5.2632"],
        ["22.2581", "18.0645", "17.4194", "18.3871", "16.7742", "7.0968"],    
    ]
}
var option = {
    color: ['#00c2ff', '#f9cf67', '#e92b77', '#24b462'],
    legend: {
        show: true,
        orient: 'vertical',
        //icon: 'circle',//图例形状
        top: 'center',
        right: 20,
        itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
        itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
        itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
        textStyle: {
            fontSize: 14,
            color: '#000000'
        },
        data: data.names,
    },
    grid: {
        left: 'left',
        top: 'auto'
    },
    radar: [{

        indicator: [{
                name: 'I类',
                max: 30
            },
            {
                name: 'II类',
                max: 30
            },
            {
                name: 'III类',
                max: 30
            },
            {
                name: 'IV类',
                max: 30
            },
            {
                name: 'V类',
                max: 30
            },
            {
                name: '劣V类',
                max: 30
            }
        ],

        textStyle: {
            color: '#000000'
        },
        center: ['36%', '50%'],
        radius: 55,
        startAngle: 90,
        splitNumber: 3,
        orient: 'horizontal', // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
        // shape: 'circle',
        // backgroundColor: {
        //     image:imgPath[0]
        // },
        name: {
            formatter: '{value}',
            textStyle: {
                fontSize: 14, //外圈标签字体大小
                color: '#000000' //外圈标签字体颜色
            }
        },
        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: { // 分隔区域的样式设置。
                color: ['#ffffff', '#ffffff'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
        },
        axisLabel: { //展示刻度
            show: false
        },
        axisLine: { //指向外圈文本的分隔线样式
            lineStyle: {
                color: '#d7f2ff'
            }
        },
        splitLine: {
            lineStyle: {
                show: false,
                color: '#cdcdcd', // 分隔线颜色
                width: 6, // 分隔线线宽
            }
        }
    }, ],
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: function(params) {
            return params.name + '<br>' +
                'I&nbsp&nbsp类&nbsp;:' + toTwoPoint(params.value[0]) + '%<br>' +
                'II&nbsp类:' + toTwoPoint(params.value[1]) + '%<br>' +
                'III类:' + toTwoPoint(params.value[2]) + '%<br>' +
                'IV类:' + toTwoPoint(params.value[3]) + '%<br>' +
                'V&nbsp类:' + toTwoPoint(params.value[4]) + '%<br>' +
                '劣V类:' + toTwoPoint(params.value[5]) + '%';
        }
    },
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
        data: [{
            name: data.names[0],
            value: data.levels[0],
            areaStyle: {
                normal: { // 单项区域填充样式
                    opacity: 0 // 区域透明度
                }
            },
            symbolSize: 2.5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
            label: { // 单个拐点文本的样式设置                            
                normal: {
                    show: false, // 单个拐点文本的样式设置。[ default: false ]
                    position: 'top', // 标签的位置。[ default: top ]
                    distance: 2, // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
                    //color: '#6692e2', // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
                    fontSize: 14, // 文字的字体大小
                    formatter: function(params) {
                        return params.value;
                    }
                }
            },
            itemStyle: {
                normal: { //图形悬浮效果

                    borderWidth: 2.5
                }
            },
        }, {
            name: data.names[1],
            value: data.levels[1],
            symbolSize: 2.5,
            itemStyle: {
                normal: {
                    borderWidth: 2.5,
                }
            },
            areaStyle: {
                normal: { // 单项区域填充样式
                    opacity: 0 // 区域透明度
                }
            },
        }, {
            name: data.names[2],
            value: data.levels[2],
            symbolSize: 2.5,
            itemStyle: {
                normal: {

                    borderWidth: 2.5,
                }
            },
            areaStyle: {
                normal: { // 单项区域填充样式
                    opacity: 0 // 区域透明度
                }
            }
        }, {
            name: data.names[3],
            value: data.levels[3],
            symbolSize: 2.5,
            itemStyle: {
                normal: {
                    borderWidth: 2.5,
                }
            },
            areaStyle: {
                normal: { // 单项区域填充样式
                    opacity: 0 // 区域透明度
                }
            }
        }]
    }]
};
//myChart.setOption(option);
// 窗口改变重置
window.addEventListener("resize", function() { //窗口改变时的事件监听
    myChart.resize();
});