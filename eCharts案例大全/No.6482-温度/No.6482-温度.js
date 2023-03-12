var dataValArray = 0.63;
var uploadedDataURL = "/asset/get/s/data-1559120606810-8K55q2kWT.png";
option = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    series: [{
            name: '温度',
            type: 'gauge',
            max: 50,
            startAngle: 225,
            endAngle: -45,
            detail: {
                formatter: ['{value}℃', '{a|当前温度}'].join('\n'),
                fontSize: 120,
                width: '100%',
                height: '30%',
                padding: [-300, 0, 0, 0],
                rich: {
                    a: {
                        color: '#666',
                        fontSize: 30,
                        padding: [10, 0, 10, 0],
                    }
                }
            },
            data: [{
                value: 40
            }],
            axisLine: {
                lineStyle: {
                    color: [ //数组第一个属性是颜色所占line百分比
                        [0.4, "#49afff"],
                        [0.6, "#68A54A"],
                        [1, "#f56c6c"],

                    ],
                    width: 22
                }
            },
            splitLine: {
                length: 22,
                lineStyle: {
                    width: 4
                }
            },
            axisLabel: {
                distance: -20,
                show: true,
                formatter: function(value) {
                    if (value === 0 || value === 50) {
                        return value + '℃'
                    }
                    return ''
                },
                //   padding: '8 0 0 0'
                lineHeight: -60,
                fontSize: 40
            },
            pointer: {
                show: false
            },
            axisTick: {
                show: false
            },

        },
     
        // { //进度指针(通过三个data的pie画进度指针)
        //     name: 'Line 1',
        //     type: 'pie',
        //     startAngle: -135,
        //     clockWise: true,
        //     hoverAnimation: false,
        //     radius: ['70%', '67%'],
        //     itemStyle: {
        //         normal: {
        //             label: {
        //                 show: true
        //             },
        //             labelLine: {
        //                 show: false
        //             },
        //         }
        //     },


        //     data: [ //指针样式
        //         {
        //             value: 40,
        //             itemStyle: {
        //                 normal: {
        //                     color: [
        //                         [
        //                             new echarts.graphic.LinearGradient(
        //                                 0, 0, 1, 0, [{
        //                                         offset: 0,
        //                                         color: 'rgba(255,255,255)',
        //                                     },
        //                                     {
        //                                         offset: 1,
        //                                         color: '#0CD7F0',
        //                                     }
        //                                 ]
        //                             )
        //                         ]
        //                     ],

        //                 }
        //             }
        //         }, { //指针的图标
        //             name: "",
        //             value: 0,
        //             label: {
        //                 position: 'inside',
        //                 backgroundColor: '#53adf4',
        //                 width: 16,
        //                 height: 16,
        //                 borderRadius: 20, //圆角
        //                 borderColor: '#fff',
        //                 borderWidth: 4,
        //                 padding: 8
        //             }
        //         }, {
        //             value: 20,
        //             name: 'invisible',
        //             itemStyle: {
        //                 normal: {
        //                     color: 'transparent', //未完成的圆环的颜色
        //                     label: {
        //                         show: false
        //                     },
        //                     labelLine: {
        //                         show: false
        //                     }
        //                 }
        //             }
        //         }
        //     ]
        // }
    ]
};
setInterval(function() {
    // let num = (Math.random() * 40).toFixed(2) - 0;
    let num = 25
    option.series[0].data[0].value = num;
    option.series[1].data[0].value = num;
    option.series[1].data[2].value = 67 - num;
    myChart.setOption(option, true);
}, 2000);