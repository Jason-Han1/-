var value = '4';
    var max = 5;
    var option = {
        title: {
            show: true,
            text: '享受政府特殊津贴专家',
            left: '43%',
            bottom: '10%',
            textAlign: 'center',
            textStyle: {
                fontWeight: '600',
                fontSize: '16',
                color: '#fff',
                textAlign: 'center',
            },
            backgroundColor: {
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [{
                    offset: 0,
                    color: '#FECB84'
                }, {
                    offset: 1,
                    color: '#FEAE5B'
                }]
            },
            padding: [10, 45, 7, 45],
            borderRadius: 13,
        },
        angleAxis: {
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            min: 0,
            max: 6.666,
            // boundaryGap: ['0', '10'],
            startAngle: 225
        },
        radiusAxis: {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: ['a', 'b', 'c'],
            z: 10
        },
        polar: {
            radius: '100%'
        },
        series: [
            // 橙色圆条
            {
            type: 'bar',
            data: ['','',value],
            z: 1,
            coordinateSystem: 'polar',
            barMaxWidth: 24.2,
            name: '警告事件',
            roundCap: true,
            color: new echarts.graphic.LinearGradient(
                0, 0, 1, 0, [{
                    offset: 0,
                    color: '#FECB84',
                }, {
                    offset: 1,
                    color: '#FEAE5B',
                }]
            ),
            barGap: '-100%', // 不同系列的柱间距离，为百分比 如果想要两个系列的柱子重叠，可以设置 barGap 为 '-100%'。这在用柱子做背景的时候有用。
        // label: {
        //             normal: {
        //                 show: true,
        //                 position: 'center',
        //                 formatter:function (argument) {
        //                     var html;
        //                     html='本月业绩\r\n\r\n'+'50单';
        //                     return html;
        //                 },
        //                 textStyle:{
        //                   fontSize: 15,
        //                     color:'#39CCCC'
        //                 }
        //             }
        //         },
                
            }, 
        // {
        //     type: 'bar',
        //     data: ['','' ,'' ],
        //     z: 2,
        //     coordinateSystem: 'polar',
        //     barMaxWidth: 24.2,
        //     name: '警告事件',
        //     roundCap: true, // 是否在环形柱条两侧使用圆弧效果
        //     color: '#f00',
        //     barGap: '-100%',
        // },
        
        // 灰色圆条
        {
            type: 'bar',
            data: ['', '', max],
            z: 0,
            silent: true,
            coordinateSystem: 'polar',
            barMaxWidth: 24.2,
            name: 'C',
            roundCap: true,
            color: '#F1F3F5',
            barGap: '-100%',
        }, 
        {
            type: 'gauge',
            radius: '105%',
            splitNumber: 4,
            max: 5,
            detail: {
                show: false,
            },
            axisLine: {
                // 坐标轴线
                lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: [
                        [0, "#DE585D"],
                        [1, "#DE585D"]
                    ],
                    width: 25,
                    opacity: 0 //刻度背景宽度
                }
            },
            "data": [{
                "name": "",
                "value": value,
            }],
            splitLine: {
                length: 0, //长刻度节点线长度
                lineStyle: {
                    width: 2,
                    color: "rgba(0,0,0,0)"
                } //刻度节点线
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "#c4c6cc",
                    width: 5
                },
                length: 10,
                splitNumber: 15
            },
            axisLabel: {
                show: false,
                color: '#333',
                fontSize: 18,
            },
            pointer: {
                show: false,
                length: '70%',
                itemStyle: {
                    color: '#DE585D',
                }
            },
        }, 
        // {
        //     "type": "pie",
        //     radius: ['82%', '82%'],
        //     "hoverAnimation": false,
        //     startAngle: 225,
        //     endAngle: 0,
        //     "data": [{
        //         "name": "",
        //         "value": value / 5,
        //         "label": {
        //             show: false
        //         },
        //         "labelLine": {
        //             show: false
        //         },
        //         itemStyle: {
        //             color: 'rgba(0,0,0,0)'
        //         }
        //     }, {
        //         //画中间的小圆点图标
        //         "name": "",
        //         "value": 0,
        //         "label": {
        //             position: 'inside',
        //             backgroundColor: '#ffffff',
        //             borderRadius: 15,
        //             padding: 8,
        //             borderWidth: 5,
        //             borderColor: "#f7b365"

        //         }
        //     }, {
        //         "name": "",
        //         value: 1.33 - value / 5,
        //         "label": {
        //             show: false
        //         },
        //         "labelLine": {
        //             show: false
        //         },
        //         itemStyle: {
        //             color: 'rgba(255,255,255,0)'
        //         }
        //     }]
        // }
        ],
        tooltip: {
            show: false
        },
    }