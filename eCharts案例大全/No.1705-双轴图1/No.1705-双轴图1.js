option = {
                    backgroundColor: '#fff',
                    tooltip: {
                         show:true,
                         trigger: 'item',
                         backgroundColor: 'rgba(0,0,0,0.5)',
                         axisPointer: {
                              lineStyle: {
                                   color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [{
                                             offset: 0,
                                             color: '#A7D6FF'
                                        }, {
                                             offset: 0.5,
                                             color: '#fff',
                                        }, {
                                             offset: 1,
                                             color: '#A7D6FF'
                                        }],
                                        global: false
                                   }
                              },
                         }
                    },
                    legend: {
                          data: ['参与演练人数', '部门总人数 ', '参与率'],
                    left: '0%',
                    top:'0%',
                    bottom:'2%',
                    textStyle: {
                        color: "#666666",
                        fontSize:14,
                    },
                    itemWidth: 15,
                    itemHeight: 10,
                    itemGap: 25
                    },
                    grid: {
                         top: '10%',
                         left: '3%',
                         right: '5%',
                         bottom: '12%',
                    },
                    xAxis: [
                         {
                              type: 'category',
                              data: ['产品部', '技术部', '销售部', '人事部', '售前部', '售后部', '市场部', '平台部', '测试部', '运维部' ] ,
                              axisTick: {
                                   show: false // 是否显示坐标轴轴线
                              },
                              axisLabel: {
                                   color: '#282828',
                                   fontSize:14,
                              },
                              splitLine: {
                                   show: false
                              },
                              boundaryGap: true,
                              axisLine: { //坐标轴轴线相关设置。
                                   show: true,
                                   inside: false,
                                   lineStyle: {
                                        color: '#000'
                                   }
                              }
                         },
                    ],

                    yAxis: [
                     {
                         type: 'value',
                         min: 0,
                         splitNumber: 4,
                         splitLine: {show: true},
                         axisLabel: { //坐标轴刻度标签的相关设置。
                              show: true,
                              textStyle: {
                                    color: '#737373',
                                    fontSize:14,
                              }
                         },
                         axisLine: {
                              show: true,
                         },
                         axisTick: {
                              show: false,
                         },
                         splitLine: {
                              lineStyle: {
                                   color: 'rgba(131,101,101,0.2)',
                                   type: 'dashed',
                              }
                         },
                         show: true,
                    },
                    {
                        type: "value",
                        name: "百分比",
                        nameTextStyle: {
                            color: "#666666"
                        },
                        position: "right",
                        axisLine: {
                            lineStyle: {
                                color: '#cdd5e2'
                            }
                        },
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: true,
                            formatter: "{value} %", //右侧Y轴文字显示
                            textStyle: {
                                color: "#666666",
                                 fontSize:14,
                            }
                        }
                    }
                    ],
                      dataZoom: [
    {
        show: true,
        realtime: true,
        "height": 12,
        start: 0,
        end: 70,
         bottom:'2%',
    },
    {
        type: 'inside',
        realtime: true,
        "height": 12,
        start: 0,
        end: 70
    }
],
                    series: [
                         {
                           name: '参与演练人数',
                              type: 'bar',
                              barMaxWidth: 20,
                              zlevel: 10,
                              // barGap: '100%',
                              data: [40, 59, 50,40, 19, 50,40, 79, 50,40, 23, 50],
                              itemStyle: {
                                   normal: {
                                        color: {
                                             type: 'linear',
                                             x: 0,
                                             y: 0,
                                             x2: 0,
                                             y2: 1,
                                             colorStops: [{
                                                  offset: 0,
                                                  color: '#4F93FE' 
                                             }, {
                                                  offset: 1,
                                                  color: '#A7D6FF' 
                                             }]
                                        },
                                        barBorderRadius: [30, 30, 0, 0],
                                   }
                              },
                         },
                         {
                           name: '部门总人数',
                              type: 'bar',
                              itemStyle: {
                                   normal: {
                                        color: '#E9E9E9',
                                   }
                              },
                              silent: true,
                              barWidth: 30,
                               barGap: '-125%',
                              data: [120, 80, 60,60, 23,  80, 80,80, 100, 100,70, 40, 60]
                         },
                         {
                        name: "参与率",
                        type: "line",
                        yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                        smooth: false, //平滑曲线显示
                        symbol: "circle", //标记的图形为实心圆
                        symbolSize: 8, //标记的大小
                        itemStyle: {
                            normal: {
                                color: '#ffa43a',
                                borderColor: 'rgba(255, 234, 0, 0.5)',  //圆点透明 边框
                                borderWidth: 7
                            },

                        },
                        lineStyle: {
                            color: "#ffa43a"
                        },

                        data: [34, 73, 83, 67, 63, 50, 79,100,50,58,58,84]
                    }
                    ]
               };
               