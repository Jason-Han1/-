// 数据进度值
const angle = 360/(24*60)
console.log(angle)
console.log(90 + angle*(16*60 + 45))

data = [{
        name: "https",
        value: 500,  //时长600分钟
        startAngle: 90 + angle*(15*60 + 45),  //开始时间8点15分
        color: '#ff0000'
    },
    {
        name: "ftp",
        value: 600,
        startAngle: 90 + angle*(13*60 + 30),  //开始时间10点30分
        color: '#F59A23'
    },
    {
        name: "行为",
        value: 690,
        startAngle: 90 + angle*(12*60),  //开始时间12点00分
        color: '#95F204'
    }
];
sumValue = 24*60;
optionData = getData(data);
function getData(data) {
    var res = {
        series: [
            {
            name: '外部刻度',
            type: 'gauge',
                radius: '80%',
                center: ['50%', '50%'],
            //  center: ['20%', '50%'],
            // radius: '70%',
            min: 0, //最小刻度
            max: 24, //最大刻度
            splitNumber: 24, //刻度数量
            startAngle: 90,
            endAngle: -269.9999,
            axisLine: {
                show: true,
                // 仪表盘刻度线
                lineStyle: {
                    width: 2,
                    color: [
                        [1, '#FFFFFF']
                    ]
                }
            },
            //仪表盘文字
            axisLabel: {
                show: true,
                color:'#333333',
                fontSize:16,
                fontWeight:600,
                // color: '#868FDF',
                distance: -25,
                formatter:function(v) {
                    return v=== 24 ? '' : v
                }
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 12,
                lineStyle: {
                    color: 'rgba(215,215,215,1)',
                    // color: '#3082FE', //用颜色渐变函数不起作用
                    width: 2,
                },
                length: -8
            }, //刻度样式
            splitLine: {
                show: true,
                length: -20,
                lineStyle: {
                    color: 'rgba(215,215,215,1)',
                    // color: '#458EFD', //用颜色渐变函数不起作用
                }
            }, //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        ]
    };
    for (let i = 0; i < data.length; i++) {
        res.series.push({
            name: data[i].name,
            type: 'pie',
            startAngle: data[i].startAngle,
            // startAngle: 90 + angle*(15*60 + 45),  //开始时间8点15分
            // clockWise: false,
            z: 2,
            hoverAnimation: false,
            radius: [73 - i * 15 + '%', 63 - i * 15 + '%'],
            center: ["50%", "50%"],
            label: {
                show: false,

            },
            labelLine: {
                show: false
            },
            data: [{
                value: data[i].value,
                name: data[i].name,
                itemStyle: {
                    color: data[i].color
                    // color: {
                    //     type: 'linear',
                    //     x: 0,
                    //     y: 0,
                    //     x2: 1,
                    //     y2: 1,
                    //     colorStops: [{
                    //         offset: 1,
                    //         color: data[i].color
                    //         // color: '#0050E2'
                    //     }, {
                    //         offset: 0,
                    //         color: '#fff'
                    //     }],
                    //     global: false
                    // }
                }
            }, {
                value: sumValue - data[i].value,
                name: '',
                itemStyle: {
                    color: "rgba(0,0,0,0)",
                    borderWidth: 0
                },
                tooltip: {
                    show: false
                },
                label: {
                    show: false
                },
                hoverAnimation: false
            }]
        });
        res.series.push({
            name: '背景线',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: false,
            hoverAnimation: false,
            radius: [73 - i * 15 + '%', 68 - i * 15 + '%'],
            center: ["50%", "50%"],
            label: {
                show: false
            },
            itemStyle: {
                label: {
                    show: false,
                },
                labelLine: {
                    show: false
                },
                borderWidth: 10,
            },
            data: [{
                value: 100,
                itemStyle: {
                    color: "rgba(215,215,215,0.5)",
                    borderWidth: 10
                },
                tooltip: {
                    show: false
                },
                hoverAnimation: false
            }]
        });
        // res.yAxis.push(data[i].name);
    }
    return res;
}


var option = {
    backgroundColor: "#FFFFFF",
    // title: {
    //     show: true,
    //     text: '任务进度',
    //     x: '50%',
    //     y: '57%',
    //     z: 8,
    //     textAlign: 'center',
    //     textStyle: {
    //         color: '#f1f7fe',
    //         fontSize: 20,
    //         fontWeight: 'normal'
    //     },

    // },
    series: optionData.series
    // series: [
    //     {
    //         name: "内部（环形）进度条",
    //         type: "gauge",
    //         startAngle: 90,
    //         // endAngle: -269.9999,
    //         // center: ['20%', '50%'],
    //         radius: '60%',
    //         splitNumber: 24,
    //         axisLine: {
    //             lineStyle: {
    //                 color: [
    //                     [dataArr / 24, '#458EFD'],
    //                     [1, "#FFFFFF"]
    //                 ],
    //                 width: 14
    //             }
    //         },
    //         axisLabel: {
    //             show: false,
    //         },
    //         axisTick: {
    //             show: false,

    //         },
    //         splitLine: {
    //             show: false,
    //         },
    //         pointer: {
    //             show: false,
    //         },
    //     },
    //     {
    //         name: '外部刻度',
    //         type: 'gauge',
    //         //  center: ['20%', '50%'],
    //         radius: '70%',
    //         min: 0, //最小刻度
    //         max: 24, //最大刻度
    //         splitNumber: 24, //刻度数量
    //         startAngle: 90,
    //         endAngle: -269.9999,
    //         axisLine: {
    //             show: true,
    //             // 仪表盘刻度线
    //             lineStyle: {
    //                 width: 2,
    //                 color: [
    //                     [1, '#FFFFFF']
    //                 ]
    //             }
    //         },
    //         //仪表盘文字
    //         axisLabel: {
    //             show: true,
    //             color: '#868FDF',
    //             distance: -25,
    //             formatter:function(v) {
    //                 return v=== 24 ? '' : v
    //             }
    //         }, //刻度标签。
    //         axisTick: {
    //             show: true,
    //             splitNumber: 12,
    //             lineStyle: {
    //                 color: '#3082FE', //用颜色渐变函数不起作用
    //                 width: 2,
    //             },
    //             length: -8
    //         }, //刻度样式
    //         splitLine: {
    //             show: true,
    //             length: -20,
    //             lineStyle: {
    //                 color: '#458EFD', //用颜色渐变函数不起作用
    //             }
    //         }, //分隔线样式
    //         detail: {
    //             show: false
    //         },
    //         pointer: {
    //             show: false
    //         }
    //     },
    //     /*内部*/
    //     // {
    //     //     type: 'pie',
    //     //     radius: ['0', '40%'],
    //     //     center: ['50%', '50%'],
    //     //     z: 8,
    //     //     hoverAnimation: false,
    //     //     data: [{
    //     //         name: '检查进度',
    //     //         value: dataArr,
    //     //         itemStyle: {
    //     //             normal: {
    //     //                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //     //                     offset: 0,
    //     //                     color: '#3398ff'
    //     //                 }, {
    //     //                     offset: 1,
    //     //                     color: '#7db0fd'
    //     //                 }])
    //     //             }

    //     //         },
    //     //         label: {
    //     //             normal: {
    //     //                 formatter: function(params) {
    //     //                     return params.value + '%';
    //     //                 },
    //     //                 color: '#FFFFFF',
    //     //                 fontSize: 54,
    //     //                 fontWeight: "bold",
    //     //                 position: 'center',
    //     //                 show: true
    //     //             }
    //     //         },
    //     //         labelLine: {
    //     //             show: false
    //     //         }
    //     //     }],
    //     // },
    //     /*外一层*/
    //     // {
    //     //     type: "pie",
    //     //     radius: "45%",
    //     //     startAngle: 220,
    //     //     endAngle: -40,
    //     //     hoverAnimation: false,
    //     //     center: ["50%", "50%"],
    //     //     avoidLabelOverlap: false,
    //     //     label: {
    //     //         show: false
    //     //     },
    //     //     labelLine: {
    //     //         show: false
    //     //     },
    //     //     data: [{
    //     //         value: 1,
    //     //         itemStyle: {
    //     //             normal: {
    //     //                 color: '#8DC4FD'
    //     //             }
    //     //         }
    //     //     }],
    //     // },
    //     //外二层圈
    //     // {
    //     //     type: "pie",
    //     //     radius: "50%",
    //     //     center: ["50%", "50%"],
    //     //     avoidLabelOverlap: false,
    //     //     z: 0,
    //     //     hoverAnimation: false,
    //     //     label: {
    //     //         show: false
    //     //     },
    //     //     labelLine: {
    //     //         show: false
    //     //     },
    //     //     data: [{
    //     //         "value": 1,
    //     //         itemStyle: {
    //     //             normal: {
    //     //                 color: '#e3edf8'
    //     //             }
    //     //         }
    //     //     }]
    //     // }
    // ]
};