var colorList = [
    {
        //不合格值颜色设置
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#7BB2FF', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#4186FF', // 100% 处的颜色
            },
        ],
    },
    {
        //合格值颜色设置
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        colorStops: [
            {
                offset: 0,
                color: '#FFD18C', // 0% 处的颜色
            },
            {
                offset: 1,
                color: '#FEAD5A', // 100% 处的颜色
            },
        ],
    },
];

option = {
    tooltip: {
        // 本系列特定的 tooltip 设定。
        show: true,
        formatter: '{b}：{c}%',
        backgroundColor: 'rgba(50,50,50,0.7)', // 提示框浮层的背景颜色。注意：series.tooltip 仅在 tooltip.trigger 为 'item' 时有效。
        borderColor: '#333', // 提示框浮层的边框颜色。...
        borderWidth: 0, // 提示框浮层的边框宽。...
        padding: 5, // 提示框浮层内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。...
        textStyle: {
            // 提示框浮层的文本样式。...
            color: '#fff', // color ,fontStyle ,fontWeight ,fontFamily ,fontSize ,lineHeight ,.......
        },
    },
    series: [
        {
            type: 'gauge',
            splitNumber: 3,
            radius: '93%',
            center: ['50%', '70%'],
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            pointer: {
                show: false,
                width: 7,
                length: '60%',
                itemStyle: {
                    // 仪表盘指针样式。
                    color: 'auto', // 指针颜色，默认(auto)取数值所在的区间的颜色
                    opacity: 1, // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                    borderWidth: 0, // 描边线宽,默认 0。为 0 时无描边。
                    borderType: 'solid', // 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
                    borderColor: '#000', // 图形的描边颜色,默认 "#000"。支持的颜色格式同 color，不支持回调函数。
                    shadowBlur: 10, // (发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
                    shadowColor: '#fff', // 阴影颜色。支持的格式同color。
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 35,
                    color: [
                        [0.3, colorList[1]],
                        [1, colorList[0]],
                        /*[1, colorList[2]],*/
                    ],
                    borderColor: '#000',
                    borderWidth: '10',
                },
            },
            axisLabel: {
                show: false,
                color: '#666',
                fontSize: 16,
                formatter: function (value) {
                    return value.toFixed(0);
                },
            }, //刻度标签。
            axisTick: {
                 show: false,
            }, //刻度样式
            splitLine: {
                show: false,
                length: '28%',
                lineStyle: {
                    color: '#fff',
                    width: 2,
                },
            }, //分隔线样式
            detail: {
                show: false,
            },
            title: {
                show: false,
            },
            data: [
                {
                    value: 30,
                    name: '合格值',
                },
            ],
        },
        {
            type: 'gauge',
            splitNumber: 10,
            radius: '100%',
            center: ['50%', '70%'],
            min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            pointer: {
                //仪表盘指针
                show: false,
                width: 7,
                length: '60%',
                itemStyle: {
                    // 仪表盘指针样式。
                    color: 'auto', // 指针颜色，默认(auto)取数值所在的区间的颜色
                    opacity: 1, // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
                    borderWidth: 0, // 描边线宽,默认 0。为 0 时无描边。
                    borderType: 'solid', // 柱条的描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'。
                    borderColor: '#000', // 图形的描边颜色,默认 "#000"。支持的颜色格式同 color，不支持回调函数。
                    shadowBlur: 10, // (发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
                    shadowColor: '#fff', // 阴影颜色。支持的格式同color。
                },
            },

            axisLine: {
                show: true,
                lineStyle: {
                    width: 35,
                    color: [
                        /*
                    [0.33, colorList[0]],
                    [0.67, colorList[1]],
                    [1, colorList[2]],*/
                        [0.3, colorList[1]],
                        [1, colorList[0]],
                    ],
                    opacity: 0.15,
                    borderColor: '#000',
                    borderWidth: '10',
                },
            },
            axisLabel: {
                show: false,
            }, //刻度标签。
            axisTick: {
                show: false,
                splitNumber: 5,
                lineStyle: {
                    color: '#fff',
                    width: 2,
                },
            }, //刻度样式
            splitLine: {
                show: false,
                length: '28%',
                lineStyle: {
                    color: '#fff',
                    width: 2,
                },
            }, //分隔线样式
            /*detail: {
            show: true,
        },*/
            title: {
                show: true,
                offsetCenter: ['0%', '30%'],
                fontSize: 30,
                color: '#1569F8',
            },
            detail: {
                fontSize: 40,
                offsetCenter: ['0%', '20%'],
                valueAnimation: true,
                //  formatter:'{a| {value}}',
                
                formatter: function (value) {
                    if (value < 30 && value >= 0) {
                        return '{a|' + value + '%' + '}';
                    } else if (value >= 30 && value <= 100) {
                        return '{b|'+value + '%' +'}';
                    }
                },
                 rich: {
                    a: {
                        fontSize: 26,
                        fontWeight: 800,
                        fontFamily: "Arial",
                        color: '#FEAD5A',
                        align: 'center',
                        padding: [0, 5, 0, 0]
                    },
                    b: {
                        fontSize: 26,
                        fontWeight: 800,
                        fontFamily: "Arial",
                        color: '#4A8DFF',
                        align: 'center',
                        padding: [0, 5, 0, 0]
                    },
                    
                },
                // itemStyle: {
                //     normal: {
                //         color: function (params) {
                //             if (params.data < 30 && params.data >= 0) {
                //                 return '#FEAD5A';
                //             } else if (params.data >= 30 && params.data <= 100) {
                //                 return '#4A8DFF';
                //             }
                //         },
                //     },
                // },
            },
            data: [
                {
                    value: 20.22,
                    name: '研究生学位教师占专任教师比例',
                },
            ],
        },
        
    ],
};

//return option;