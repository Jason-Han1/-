option = {
    backgroundColor:'RGBA(26, 38, 67, 1)',
    angleAxis: {
        show: false,
        max: (100 * 360) / 230, //-45度到225度，二者偏移值是270度除360度
        type: 'value',
        startAngle: 205, //极坐标初始角度
        splitLine: {
            show: false,
        },
    },
    barMaxWidth: 10, //圆环宽度
    radiusAxis: {
        show: false,
        type: 'category',
    },
    //圆环位置和大小
    polar: {
        center: ['50%', '50%'],
        radius: '80%',
    },
    series: [
        {
            type: 'bar',
            stack: '测试',
            data: [
                {
                    //上层圆环，显示数据
                    value: 78,
                    name: 'sdfasdf',
                    itemStyle: {
                      color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color:'rgba(48, 236, 166, 0.2)',
              },
              {
                offset: 1,
                color: 'rgba(48, 236, 166, 1)',
              },
            ]),
                    },
                },
            ],
            barGap: '-100%', //柱间距离,上下两层圆环重合
            coordinateSystem: 'polar',
            roundCap: true, //顶端圆角从 v4.5.0 开始支持
            z: 2, //圆环层级，同zindex
            //       detail: {
            //     valueAnimation: true,
            //     fontSize: 25,
            //     fontWeight: '400',
            //     color: 'rgb(51,51,51)',
            //     offsetCenter: [0, '40%'],
            // },
        },
        {
            //下层圆环，显示最大值
            type: 'bar',
            data: [
                {
                    value: 100,
                    itemStyle: {
                        color: {
                            //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1, //从左到右 0-1
                            y2: 0,
                            colorStops: [
                                {
                                    offset: 0,
                                    color: 'rgba(255,255,255,0.2)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(255,255,255,0.2)',
                                },
                            ],
                        },
                    },
                },
            ],
            barGap: '-100%',
            coordinateSystem: 'polar',
            roundCap: true,
            z: 1,
        },
        {
            stack: '测试',
            type: 'bar',
            data: [0.01],
            showBackground: false,
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 10,
            itemStyle: {
                color: 'rgba(48, 236, 166, 0.5)',
                borderColor: 'rgba(48, 236, 166, 1)',
                borderWidth: 6,
                shadowColor: 'rgba(48, 236, 166, 0.5)',
                shadowBlur: 15,
                shadowOffsetY: 2,
            },
        },
        {
            name: '外部刻度',
            type: 'gauge',
            //  center: ['20%', '50%'],
            radius: '70%',
            min: 0, //最小刻度
            max: 100, //最大刻度
            splitNumber: 4, //刻度数量
            startAngle: 225,
            endAngle: -45,

            axisLine: {
                show: false,
                // 仪表盘刻度线
                lineStyle: {
                    width: 1,
                    color: [[1, '#FFFFFF']],
                },
            },
            //仪表盘文字
            axisLabel: {
                show: false,
              
            }, //刻度标签。
            axisTick: {
                show: false,
             
            }, //刻度样式
            splitLine: {
                show: false,
              
            }, //分隔线样式
            detail: {
                show: false,
               
            },
            pointer: {
                show: false,
            },
            title: {
                show: true,
                offsetCenter: [0, '-10%'],
                textStyle: {
                    fontSize: 32,
                   color: '#30ECA6',
                   fontWeight:600,
                   
                },
            },
            data: [
                {
                    value: 78,
                    name: '636',
                },
            ],
        },
    ],
};
