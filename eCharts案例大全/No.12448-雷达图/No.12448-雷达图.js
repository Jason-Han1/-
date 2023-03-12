// var imgPath = ['http://bmob-cdn-15355.b0.upaiyun.com/2017/12/01/bee4341c4089af7980b87074a77479ad.png']
option = {
    backgroundColor: '#01143d',
    color: ['#FFCC00'],
    legend: {
        show: false,
        // icon: 'circle',//图例形状
        bottom: 45,
        center: 0,
        itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
        itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
        itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
        textStyle: {
            fontSize: 14,
            color: '#009900'
        },
        data: ['2018'],
    },
    radar: [{
        
        indicator: [{
                text: '偷排漏放',
                max: 100
            },
            {
                text: '超标排放',
                max: 100
            },
            {
                text: '污水直排',
                max: 100
            },
            {
                text: '淤泥垃圾',
                max: 100
            },
            {
                text: '漂浮废弃物',
                max: 100
            },
            {
                text: '黑色臭味',
                max: 100
            },
            {
                text: '违法建筑',
                max: 100
            },
            {
                text: '垃圾堆放',
                max: 100
            }
        ],

        textStyle: {
            color: 'red'
        },
        center: ['50%', '50%'],
        radius: 100,
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
                color: '#b1d0ff' //外圈标签字体颜色
            }
        },
        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: { // 分隔区域的样式设置。
                color: ['#141c42', '#141c42'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
            }
        },
        // axisLabel:{//展示刻度
        //     show: true
        // },
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
        }
    }, ],
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
            name: '2018',
            value: [60, 80, 35, 50, 45,65,35,50],
            label: {
                        normal: {
                            show: true,
                            formatter:function(params) {
                                return params.value;
                            }
                        }
                    },
            symbolSize: 2.5,
            itemStyle: {
                normal: {
                    borderColor: '#FFCC00',
                    borderWidth: 2.5,
                }
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
                            color: '#FFCC00'
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: '#FFCC00'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            }
        }]
    }, ]
};