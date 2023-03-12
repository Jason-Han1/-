let num = 0;
var bfb = '60';
var rich = {
    white: {
        fontSize: 30,
        color: '#21F0FF',
        fontWeight: '500',
        // fontStyle: 'oblique',
        padding: [10, 0, 0, 0]
    },
    bule: {
        fontSize: 60,
        fontFamily: 'DINBold',
        color: '#21F0FF',
        // fontWeight: '700',
        // fontStyle: 'italic',
        padding: [10, 0, 0, 0],
    },
    radius: {
        width: 350,
        height: 80,
        // lineHeight:80,
        // borderWidth: 1,
        // borderColor: '#0092F2',
        fontSize: 36,
        color: '#FFE58D',
        // fontWeight: 'bold',
        // backgroundColor: '#1B215B',
        // borderRadius: 20,
        textAlign: 'center',
    },
    size: {
        height: 400,
        padding: [100, 0, 0, 0]
    }
}

option = {
    backgroundColor: '#076696',
    title: {
    // text: '外籍人员\n\n' + bfb,
    text: ['{radius|外籍人员占比}\n','{bule|'+bfb+'}','{white|%}'].join(''),
    textStyle: {
      color: '#FFFDBB',
      fontSize: 50,
      fontWeight: 'bold',
      rich: rich,
    },
    left: 'center',
    bottom: '37%',

    itemGap: 60,
  },
    polar: {
        center: ['50%', '50%'],
        radius: '300',
    },
    angleAxis: {
        show: false,
        max: (100 * 360) / 270, //-45度到225度，二者偏移值是270度除360度
        type: 'value',
        startAngle: 225, //极坐标初始角度
        splitLine: {
            show: false,
        },
    },
    barMaxWidth: 40, //圆环宽度

    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    series: [
        {
            name: '',
            type: 'bar',
            // roundCap: true,
            barWidth: 40,
            // showBackground: true,
            // backgroundStyle: {
            //     color: 'rgba(66, 66, 66, .3)',
            // },
            data: [bfb],
            coordinateSystem: 'polar',

            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                        {
                            offset: 0,
                            color: '#02d6fc',
                        },
                        {
                            offset: 1,
                            color: '#0469AA',
                        },
                    ]),
                    borderWidth: 2,
                    shadowBlur: 20,
                    borderColor: '#02BFD3',
                    shadowColor: '#076696',
                },
            },
            barGap: '-100%', //柱间距离,上下两层圆环重合
            // coordinateSystem: 'polar',
            // roundCap: true, //顶端圆角从 v4.5.0 开始支持
            z: 2, //圆环层级，同zindex
        },
        {
            //下层圆环，显示最大值
            name: '123',
            type: 'bar',
            barWidth: 40,
            data: [
                {
                    value: 100,
                    itemStyle: {
                        color: {
                            // 完成的圆环的颜色
                            colorStops: [
                                {
                                    offset: 0,
                                    color: '#045990', // 0% 处的颜色
                                },
                                {
                                    offset: 1,
                                    color: '#045990', // 100% 处的颜色
                                },
                            ],
                        },
                        borderWidth: 2,
                        shadowBlur: 20,
                        borderColor: '#02BFD3',
                        shadowColor: '#076696',
                    },
                },
            ],
            barGap: '-100%',
            coordinateSystem: 'polar',
            // roundCap: true,
            z: 1,
        },
        // {
        //     type: 'gauge',
        //     name: '',
        //     radius: '57%',
        //     startAngle: '0',
        //     endAngle: '-359.99',
        //     splitNumber: '200',
        //     center: ['50%', '50%'],
        //     pointer: {
        //         show: false
        //     },
        //     title: {
        //         show: false
        //     },
        //     detail: {
        //         show: false
        //     },
        //     data: [{
        //         value: 95,
        //         name: ''
        //     }],
        //     axisLine: {
        //         lineStyle: {
        //             width: 20,
        //             opacity: 0
        //         }
        //     },
        //     axisTick: {
        //         show: false
        //     },
        //     splitLine: {
        //         show: true,
        //         length: 13,
        //         lineStyle: {
        //             color: {
        //                 type: 'linear',
        //                 x: 1,
        //                 y: 0,
        //                 x2: 0,
        //                 y2: 0,
        //                 colorStops: [{
        //                     offset: 0,
        //                     color: '#111'
        //                 }, {
        //                     offset: 0.5,
        //                     color: 'rgba(66, 66, 66, 1)',
        //                 }, {
        //                     offset: 1,
        //                     color: '#111'
        //                 }],
        //                 globalCoord: false
        //             },
        //             width: 1,
        //             type: 'solid',
        //         },
        //     },
        //     axisLabel: {
        //         show: false
        //     }
        // },
        // {
        //     name: '',
        //     type: 'pie',
        //     startAngle: 90,
        //     radius: ['60%', '62%'],
        //     hoverAnimation: false,
        //     center: ['50%', '50%'],
        //     itemStyle: {
        //         normal: {
        //             labelLine: {
        //                 show: false
        //             },
        //             color: 'rgba(66, 66, 66, .4)',
        //             shadowBlur: 10,
        //             shadowColor: 'rgba(253, 249, 20, .3)',
        //         }
        //     },
        //     data: [{
        //         value: 100,

        //     }]
        // },
        // {
        //     name: '',
        //     type: 'pie',
        //     startAngle: 90,
        //     radius: ['62.5%', '64%'],
        //     hoverAnimation: false,
        //     center: ['50%', '50%'],
        //     itemStyle: {
        //         normal: {
        //             labelLine: {
        //                 show: false
        //             },
        //             color: 'rgba(66, 66, 66, .3)',
        //             shadowBlur: 10,
        //             shadowColor: 'rgba(253, 249, 20, .3)',
        //         }
        //     },
        //     data: [{
        //         value: 100,

        //     }]
        // },
        // {
        //     name: '',
        //     type: 'pie',
        //     startAngle: 90,
        //     radius: ['64.5%', '65.8%'],
        //     hoverAnimation: false,
        //     center: ['50%', '50%'],
        //     itemStyle: {
        //         normal: {
        //             labelLine: {
        //                 show: false
        //             },
        //             color: 'rgba(66, 66, 66, .2)',
        //             shadowBlur: 10,
        //             shadowColor: 'rgba(253, 249, 20, .3)',
        //         }
        //     },
        //     data: [{
        //         value: 100,

        //     }]
        // },
        // {
        //     name: '',
        //     type: 'pie',
        //     startAngle: 90,
        //     radius: ['66.5%', '67.5%'],
        //     hoverAnimation: false,
        //     center: ['50%', '50%'],
        //     itemStyle: {
        //         normal: {
        //             labelLine: {
        //                 show: false
        //             },
        //             color: 'rgba(66, 66, 66, .1)',
        //             shadowBlur: 10,
        //             shadowColor: 'rgba(253, 249, 20, .3)',
        //         }
        //     },
        //     data: [{
        //         value: 100,

        //     }]
        // },
        // {
        //     name: "",
        //     type: 'custom',
        //     coordinateSystem: "none",
        //     renderItem: function(params, api) {
        //         return {
        //             type: 'arc',
        //             shape: {
        //                 cx: api.getWidth() / 2,
        //                 cy: api.getHeight() / 2,
        //                 r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.545,
        //                 startAngle: (0+num) * Math.PI / 180,
        //                 endAngle: (1+num) * Math.PI / 180
        //             },
        //             style: {
        //                 stroke: "#fdf914",
        //                 fill: "transparent",
        //                 lineWidth: 5
        //             },
        //             silent: true
        //         };
        //     },
        //     data: [0]
        // },
    ],
};
function numb() {
    num = num + 5;
    myChart.setOption(option, true);
}
setInterval(function () {
    numb();
}, 100);
