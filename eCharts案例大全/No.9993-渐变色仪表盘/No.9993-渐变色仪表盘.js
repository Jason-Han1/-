option = {
    backgroundColor:'#000',
        series: [
            {
                name: '统计',
                type: 'gauge',
                radius: '70%', //图表尺寸
                center: ['50%', '55%'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 0,
                        shadowBlur: 0,
                        color: [
                            [0.05, '#a62efb'],
                            [0.10, '#af23fa'],
                            [0.15, '#b31ffa'],
                            [0.20, '#b71afa'],
                            [0.25, '#b51dfa'],
                            [0.30, '#b220fa'],
                            [0.35, '#a42ffb'],
                            [0.40, '#993dfb'],
                            [0.45, '#8f47fb'],
                            [0.50, '#7b5efc'],
                            [0.55, '#6476fc'],
                            [0.60, '#4c91fd'],
                            [0.65, '#35abfe'],
                            [0.70, '#24befe'],
                            [0.75, '#12d1ff'],
                            [0.80, '#06defe'],
                            [0.85, '#05e0ff'],
                            [0.90, '#06deff'],
                            [0.95, '#06deff'],
                            [1, '#06deff']
                        ]
                    }
                },
                axisTick: {
                    show: true,
                    lineStyle: {
                        color: 'auto',
                        width: 2
                    },
                    length: -20,
                    splitNumber: 5
                },
                splitLine: {
                    show: true,
                    length: -30,
                    lineStyle: {
                        color: 'auto',
                        width: 2
                    }
                },
                axisLabel: {
                    show: false
                },
                pointer: { //仪表盘指针
                    show: false,
                },
                detail: {
                    offsetCenter: [0, '50%'], // x, y，单位px
                    textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        color: '#fff',
                        fontSize: 20,
                    },
                    formatter: '总数：{value}'
                },
                title: {
                   show: true,
                   offsetCenter: [0, '110%'], // x, y，单位px
                   textStyle: {
                     color: '#29669B',
                     fontSize: 24
                   }
                 },
                data: [{
                    name: "状态一切正常",
                    value: 11
                }]
            },
            {
                 type: 'gauge',
                 radius: '65%',
                 center: ['50%', '55%'],
                 splitNumber: 0, //刻度数量
                 startAngle: 225,
                 endAngle: -45,
                 axisLine: {
                   show: true,
                   lineStyle: {
                     width: 25,
                     color: [
                       [
                         0.9, new echarts.graphic.LinearGradient(
                         0, 0, 1, 0, [{
                         offset: 0,
                         color: '#A52EFA'
                       },
                         {
                           offset: 1,
                           color: '#07DDFD'
                         }
                       ]
                         )
                       ],
                       [
                         1, '#173991'
                       ]
                     ]
                   }
                 },
                 //分隔线样式。
                 splitLine: {
                   show: false,
                 },
                 axisLabel: {
                   show: false
                 },
                 axisTick: {
                   show: false
                 },
                 pointer: {
                   show: false
                 },
                 title: {
                   show: true,
                   offsetCenter: [0, '-30%'], // x, y，单位px
                   textStyle: {
                     color: '#fff',
                     fontSize: 20
                   }
                 },
                 //仪表盘详情，用于显示数据。
                 detail: {
                   show: true,
                   offsetCenter: [0, '16%'],
                   color: '#fff',
                   formatter: function(params) {
                     return params+'%'
                   },
                   textStyle: {
                     fontSize: 42
                   }
               },
               data: [{
                   name: "正常率",
                   value: 90.61
               }]
             }
        ]
    };