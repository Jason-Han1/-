option = {
    backgroundColor: '#020D20',
    color: ['#056AFD', '#43F4B7'],
    title: [
        {
            z: 6,
            text: ['{span|进}'].join(''),
            top: '42%',
            // bottom:'35%',
            left: '20%',
            textStyle: {
                rich: {
                    span: {
                        color: '#fff',
                        backgroundColor: '#020D2090',
                        width: 62,
                        height: 57,
                        borderRadius: 50,
                        fontSize: 24,
                        align: 'center',
                        verticalAlign: 'middle',
                        lineHeight: 64,
                        padding: [3, 5, 1, 1],
                    },
                },
            },
        },
        {
            z: 6,
            text: ['{span|登}'].join(''),
            top: '42%',
            // bottom:'center',
            // left: 'center',
            right: '20%',
            textStyle: {
                rich: {
                    span: {
                        color: '#fff',
                        backgroundColor: '#020D2090',
                        width: 62,
                        height: 57,
                        borderRadius: 50,
                        fontSize: 24,
                        align: 'center',
                        verticalAlign: 'middle',
                        lineHeight: 64,
                        padding: [3, 1, 1, 1],
                    },
                },
            },
        },
    ],
    legend: {
        top: '0%',
        right: '10%',
        textStyle: {
          fontSize: '20px',
          fontFamily: 'MicrosoftYaHeiUI',
          color: '#FFFFFF',
        },
        itemWidth: 28,
        itemHeight: 28,
        // padding:[],
        data: [{name:'男',icon:'circle'},{ name:'女',icon:'circle'}],
    },
    radar: [
        {
            indicator: [
                { text: '10-20', max: 50, min: -30 },
                { text: '20-30', max: 50, min: -30 },
                { text: '30-40', max: 50, min: -30 },
                { text: '40-50', max: 50, min: -30 },
                { text: '50-60', max: 50, min: -30 },
                { text: '70-80', max: 50, min: -30 },
                { text: '0-10', max: 50, min: -30 },
            ].reverse(),
            center: ['25%', '50%'], // 雷达图的位置
            radius: 120, //雷达图的半径
            startAngle: 90, //旋转
            splitNumber: 7, //圆圈线的数量
            shape: 'circle',
            name: {
                //外围文字样式
                formatter: '{value}',
                textStyle: {
                    color: '#428BD4',
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 10,
                },
            },
            axisLine: {
                lineStyle: {
                    // symbolSize:[220,150],
                    color: '#142D3D',
                },
            },
            axisTick: {
                show: false,
                length: 13,
                lineStyle: {
                    color: 'tomato',
                    cap: 'round',
                },
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    // color: '#1F505F'
                    color: [
                        // 给每一条分割线颜色来控制分割线数量
                        '#100C2A',
                        '#100C2A',
                        '#100C2A',
                        '#1F505F',
                        '#1F505F',
                        '#1F505F',
                        '#1F505F',
                        '#100C2A',
                    ],
                },
            },
        },
        {
            indicator: [
                { text: '10-20', max: 50, min: -30 },
                { text: '20-30', max: 50, min: -30 },
                { text: '30-40', max: 50, min: -30 },
                { text: '40-50', max: 50, min: -30 },
                { text: '50-60', max: 50, min: -30 },
                { text: '70-80', max: 50, min: -30 },
                { text: '0-10', max: 50, min: -30 },
            ].reverse(),
            center: ['75%', '50%'], // 雷达图的位置
            radius: 120, //雷达图的半径
            startAngle: 90, //旋转
            splitNumber: 7, //圆圈线的数量
            shape: 'circle',
            name: {
                //外围文字样式
                formatter: '{value}',
                textStyle: {
                    color: '#428BD4',
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 10,
                },
            },
            axisLine: {
                lineStyle: {
                    // symbolSize:[220,150],
                    color: '#142D3D',
                },
            },
            axisTick: {
                show: false,
                length: 13,
                lineStyle: {
                    color: 'tomato',
                    cap: 'round',
                },
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    // color: '#1F505F'
                    color: [
                        // 给每一条分割线颜色来控制分割线数量
                        '#100C2A',
                        '#100C2A',
                        '#100C2A',
                        '#1F505F',
                        '#1F505F',
                        '#1F505F',
                        '#1F505F',
                        '#100C2A',
                    ],
                },
            },
        },
    ],
    series: [
        {
            z: 7,
            type: 'pie',
            name: '',
            radius: ['11%', '15%'],
            center: ['25%', '50%'],
            hoverAnimation: false,
            startAngle: 200,
            itemStyle: {
                normal: {
                    color: '#44F7BC90',
                    //   backgroundColor:'#100C2A',
                    // color: {
                    //   type: 'linear',
                    //   x: 0,
                    //   y: 0,
                    //   x2: 0,
                    //   y2: 1,
                    //   colorStops: [{
                    //     offset: 0,
                    //     color: '#0F2E3A' // 0% 处的颜色
                    //   }, {
                    //     offset: 0.3,
                    //     color: '#0F2E3A' // 100% 处的颜色
                    //   }, {
                    //     offset: 0.4,
                    //     color: '#0F2E3A' // 100% 处的颜色
                    //   }, {
                    //     offset: 1,
                    //     color: '#0F2E3A' // 100% 处的颜色
                    //   }]
                    // }
                },
            },
            label: {
                show: false,
            },
            data: [0],
        },
        {
            z: 3,
            name: '雷达图',
            type: 'radar',
            emphasis: {
                lineStyle: {
                    width: 6,
                },
            },
            data: [
                {
                    value: [40, 36, 28, 39, 37, 36, 40],
                    name: '男',
                    areaStyle: {
                        color: '#04214E',
                    },
                },
                {
                    value: [23, 33, 22, 38, 33, 33, 33],
                    name: '女',
                    areaStyle: {
                        color: '#0E3B3E',
                    },
                },
            ],
        },
        {
            z: 7,
            type: 'pie',
            name: '',
            radius: ['11%', '15%'],
            center: ['75%', '50%'],
            hoverAnimation: false,
            startAngle: 200,
            itemStyle: {
                normal: {
                    color: '#44F7BC90',
                    //   backgroundColor:'#100C2A',
                    // color: {
                    //   type: 'linear',
                    //   x: 0,
                    //   y: 0,
                    //   x2: 0,
                    //   y2: 1,
                    //   colorStops: [{
                    //     offset: 0,
                    //     color: '#0F2E3A' // 0% 处的颜色
                    //   }, {
                    //     offset: 0.3,
                    //     color: '#0F2E3A' // 100% 处的颜色
                    //   }, {
                    //     offset: 0.4,
                    //     color: '#0F2E3A' // 100% 处的颜色
                    //   }, {
                    //     offset: 1,
                    //     color: '#0F2E3A' // 100% 处的颜色
                    //   }]
                    // }
                },
            },
            label: {
                show: false,
            },
            data: [0],
        },
        // {
        //     name: '成绩单',
        //     type: 'radar',
        //     radarIndex: 1,
        //     data: [
        //         {
        //             value: [120, 118, 130, 100, 99, 70],
        //             name: 'Data C',
        //             symbol: 'rect',
        //             symbolSize: 12,
        //             lineStyle: {
        //                 type: 'dashed'
        //             },
        //             label: {
        //                 show: true,
        //                 formatter: function (params) {
        //                     return params.value;
        //                 }
        //             }
        //         },
        //         {
        //             value: [100, 93, 50, 90, 70, 60],
        //             name: 'Data D',
        //             areaStyle: {
        //                 color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
        //                     {
        //                         color: 'rgba(255, 145, 124, 0.1)',
        //                         offset: 0
        //                     },
        //                     {
        //                         color: 'rgba(255, 145, 124, 0.9)',
        //                         offset: 1
        //                     }
        //                 ])
        //             }
        //         }
        //     ]
        // }
        {
            z: 3,
            name: '成绩单',
            radarIndex: 1,
            type: 'radar',
            emphasis: {
                lineStyle: {
                    width: 6,
                },
            },
            data: [
                {
                    value: [40, 36, 28, 39, 37, 36, 40],
                    name: '男',
                    areaStyle: {
                        color: '#04214E',
                    },
                },
                {
                    value: [23, 33, 22, 38, 33, 33, 33],
                    name: '女',
                    areaStyle: {
                        color: '#0E3B3E',
                    },
                },
            ],
        },
    ],
};
