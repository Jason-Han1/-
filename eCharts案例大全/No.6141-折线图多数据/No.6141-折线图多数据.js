option = {
                     legend: {
                        show: true,
                        icon: "rect",
                        itemWidth: 20,
                        itemHeight: 3,
                        right: "15%",
                        top: "3%",
                        textStyle: {
                            color: "#333"
                        },
                        data: ['金属件','线束','化学品','注塑件','标准件']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                     tooltip: {
                    trigger: 'axis',
					          backgroundColor: 'rgba(33,200,255,0.6)',
                   
                    textStyle: {
                      color: '#fff',
                      fontStyle: 'normal',
                      fontSize: 12,
                    },
                    axisPointer: {
                      animation: false,
                      lineStyle: {
                        color: {
                          type: 'linear',
                          x: 0,
                          y: 0,
                          x2: 0,
                          y2: 1,
                          colorStops: [{
                            offset: 0,
                            color: 'rgba(33,200,255,1)'
                          }, {
                            offset: 0.5,
                            color: 'rgba(33,200,255,1)',
                          }, {
                            offset: 1,
                            color: 'rgba(33,200,255,1)'
                          }],
                          global: false
                        }
                      },
                    }
                  },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                         axisTick: {
                            show: true,
                            alignWithLabel: true,
                            length: 0,
                            },
                            axisLabel:{
                            },
                            boundaryGap: false,
                            //轴线样式
                            axisLine: {
                            lineStyle: {
                                color: "#999",
                            },
                            },
                        data: [
                            '一月',
                            '二月',
                            '三月',
                            '四月',
                            '五月',
                            '六月',
                            '七月',
                            '八月',
                            '九月',
                            '十月',
                            '十一月',
                            '十二月'
                        ],
                    },
                    yAxis: {
                        type: 'value',
                        name: '合格率（%）',
                        min:'70',
                        max:'100',
                        nameTextStyle: {
                            color: "#999",
                        },
                        nameGap: 30,
                        axisLabel:{
                            color:'#999'
                            },
                            //网格样式
                            splitLine: {
                            show: true,
                            lineStyle: {
                                color: ['#000'],
                                opacity:0.06
                            }
                        },
                        //轴线样式
                        axisLine: {
                        lineStyle: {
                            color: "#e0e7ff",
                        },
                        },
                        axisTick: {
                        show: false, //不显示刻度
                        alignWithLabel: true, //刻度与标签对齐
                        interval: 1,
                        },

                    },
                    series: [
                        {
                            name: '金属件',
                            type: 'line',
                            smooth:true,
                            lineStyle:{ color:'#208cf0' },
                            itemStyle : {
                                normal : {
                                    color: '#208cf0'
                                }
                            },

                            data: ['87','94','100','74','98','94','92','93','92','94','87','100']
                        },
                        {
                            name: '线束',
                            type: 'line',
                            smooth:true,
                            lineStyle:{ color:'#21c8ff' },
                            itemStyle : {
                                normal : {
                                    color: '#21c8ff'
                                }
                            },
                            data: ['96','94','92','89','100','97','93','91','95','93','93','97']
                        },
                        {
                            name: '化学品',
                            type: 'line',
                            smooth:true,
                            lineStyle:{ color:'#99a2ff' },
                            itemStyle : {
                                normal : {
                                    color: '#99a2ff'
                                }
                            },
                            data: ['100','100','100','100','100','96','100','100','100','100','100','100']
                        },
                        {
                            name: '注塑件',
                            type: 'line',
                            smooth:true,
                            lineStyle:{ color:'#ff676e' },
                            itemStyle : {
                                normal : {
                                    color: '#ff676e'
                                }
                            },
                            data: ['79','83','86','72','90','86','91','87','77','76','86','72']
                        },
                        {
                            name: '标准件',
                            type: 'line',
                            smooth:true,
                            lineStyle:{ color:'#ff9966' },
                            itemStyle : {
                                normal : {
                                    color: '#ff9966'
                                }
                            },
                            data: ['100','100','98','100','96','98','100','96','98','98','97','100']
                        },
                    ],
                }
            