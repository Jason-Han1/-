option = {
    backgroundColor: '#0c1e55', //背景颜色
    title: {
        text: '测温',
        x: 'center',
        top: "20",
        textStyle: {
            //文字颜色
            color: '#ffff',
            //字体风格
            fontStyle: 'normal',
            //字体粗细 
            fontWeight: 'bold',
            //字体系列
            fontFamily: 'sans-serif',
            //字体大小
            fontSize: 18

        },
    },
    color: ['#00feff', '#4693EC'],
    legend: {
        data: ["累计热量", "环比"],
        // "bottom": 5,
        top: "10%",
        icon: "circle", //icon 长方形 circle 圆形 arrow箭头型 diamond菱形
        // triangle三角形  emptyDiamond 空心菱形
        //emptyCircle 空心圆型 emptyRectangle 空心长方形 emptyTriangle 空心三角形
        textStyle: {
            // color: "#fff", //自定义颜色
            color: [], //给随颜色
        },
        color: ['#00feff', '#4693EC']
    },
    tooltip: {
        trigger: 'item',
        formatter: function(parms) {
            var str = parms.seriesName + "</br>" +
                parms.marker + "" + parms.data.name + "</br>" +
                "当前温度：" + parms.data.value + "</br>" +
                "目标温度：" + parms.data.value1 + "</br>"
            // +
            // "占比：" + parms.percent + "%";
            return str;
        },

    },
    grid: {
        left: '3%', //整个曲线居左的距离
        right: '4%', //整个曲线居右左的距离
        bottom: '10%', //整个曲线居下左的距离
        height: '70%', //整个曲线的高
        containLabel: true
    },
    // dataZoom: [{
    //     type: 'slider',
    //     realtime: true,
    //     //拖拉
    //     handleSize: '100%', //滑动条两侧的大小
    //     start: 0, //开始位置
    //     end: 50, //结束位置
    //     bottom: 25, //居下的距离
    //     textStyle: {
    //         color: '#1bb4f6' // 滑动条的文字颜色
    //     },
    // }],
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false,
                color: '#707070'
            },

            axisLabel: {
                textStyle: {
                    fontSize: 14,
                    color: '#FFFF'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#00FF00'
                }
            },
            data: ['测温1', '测温2', '测温3'],
        },

    ],
    yAxis: [{
        type: 'value',
        name: '测温',
        nameTextStyle: {
            fontSize: 14, //文字大小
            color: '#ebf8ac' //文字颜色
        },
        axisLine: {
            lineStyle: {
                color: '#FFFF', //设置Y轴的颜色
                width: 1.5, //设置Y轴的粗细
            }
        },
        axisLabel: {
            show: true,
            // formatter: "{value} %", //左侧单位添加后缀
            textStyle: {

                color: '#00FF00' //Y轴的数据字体颜色
            },
        },
        splitLine: {
            show: true, //网格线显示
            lineStyle: {
                color: '#FFC125' //网格线的颜色
            }
        },

    }, ],
    series: [

        {
            name: '累计热量',
            type: 'bar',
            barWidth: '20%', //柱状图宽度
            data: [{
                    name: '测温1',
                    value: '70',
                    value1: '20',
                    itemStyle: {
                        normal: {
                            color: '#1F78B4',
                            barBorderRadius: [50, 50, 0, 0] //柱状图圆角
                        }
                    },
                    label: {
                        show: true, //是否显示
                        position: 'top', //位置
                        distance: 15, //高度
                        // 			color: '#DB5E6A', //颜色
                        fontWeight: 'bolder', //加粗
                        fontSize: 20, //字体大小
                    },

                },
                {
                    name: '测温2',
                    value: '60',
                    value1: '40',
                    itemStyle: {
                        color: '#A6CEE3'
                    },
                    label: {
                        show: true, //是否显示
                        // position: 'top', //位置
                        // distance: 15, //高度
                        // 			color: '#DB5E6A', //颜色
                        // fontWeight: 'bolder', //加粗
                        // fontSize: 20, //字体大小
                    },
                },
                {
                    name: '测温3',
                    value: '20',
                    value1: '70',
                    itemStyle: {
                        color: '#B2DF8A'
                    },
                    label: {
                        show: true, //是否显示
                        position: 'top', //位置
                        distance: 15, //高度
                        // 			color: '#DB5E6A', //颜色
                        fontWeight: 'bolder', //加粗
                        fontSize: 20, //字体大小
                    },
                }
            ]
        },
        {
            name: '环比',
            type: 'bar',
            barWidth: '20%', //柱状图宽度
            data: [{
                    name: '测温1',
                    value: '50',
                    value1: '10',
                    itemStyle: {
                        normal: {
                            color: '#1F78B4',
                            barBorderRadius: [50, 50, 0, 0] //柱状图圆角
                        }
                    },
                    label: {
                        show: true, //是否显示
                        position: 'top', //位置
                        distance: 15, //高度
                        // 			color: '#DB5E6A', //颜色
                        fontWeight: 'bolder', //加粗
                        fontSize: 20, //字体大小
                    },

                },
                {
                    name: '测温2',
                    value: '80',
                    value1: '60',
                    itemStyle: {
                        color: '#A6CEE3'
                    },
                    label: {
                        show: true, //是否显示
                        // position: 'top', //位置
                        distance: 15, //高度
                        // 			color: '#DB5E6A', //颜色
                        fontWeight: 'bolder', //加粗
                        fontSize: 20, //字体大小
                    },
                },
                {
                    name: '测温3',
                    value: '30',
                    value1: '50',
                    itemStyle: {
                        color: '#B2DF8A'
                    },
                    label: {
                        show: true, //是否显示
                        position: 'top', //位置
                        distance: 15, //高度
                        // 			color: '#DB5E6A', //颜色
                        fontWeight: 'bolder', //加粗
                        fontSize: 20, //字体大小
                    },
                },
            ]
        },

    ]
};