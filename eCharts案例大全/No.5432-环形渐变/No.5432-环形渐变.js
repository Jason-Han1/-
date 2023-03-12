var color1 = {
            type: "linear",
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
                {
	                offset: 0,
	                color: "yellow"
                },
                {
                    offset: 1,
                    color: "#52BDEB"
                }
            ],
                global: false
        }

			option = {
			    backgroundColor:"#000",
                legend: {
                    orient: 'vertical',  //垂直显示
                    y: 'center',    //延Y轴居中
                    x: 'right', //居右显示
                    // selectedMode: 'multiple', 
                    padding:[0,150,0,0], //调节legend的位置
                    data: ['A轮', 'B轮', 'C轮', 'D轮'],
                    icon: "circle",   //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none
                    itemWidth: 10,  // 设置宽度
                    itemHeight: 10, // 设置高度
                    
                    itemGap: 55, // 设置间距
                      textStyle: { //图例文字的样式
                            color: '#fff',
                            fontSize: 16
                        },
                },
                graphic: [
                    {
                        type: 'group',
                        top: 'middle',
                        left: 'center',
                        id: 'data',
                        children: [
                            {
                                type: 'text',
                                id: 'current',
                                top: 40,
                                style: {
                                    text: '1542',
                                    font: 'bolder 36px "Microsoft YaHei", sans-serif',
                                    fill: '#5B94ED',
                                    textAlign: 'center'
                                }
                            }, 
                            {
                                type: 'text',
                                id: 'all',
                                top: 80,
                                style: {
                                    text: '数量数量',
                                    font: 'bolder 16px "Microsoft YaHei", sans-serif',
                                    fill: '#5B94ED',
                                    textAlign: 'center'
                                }
                            }
                        ]
                    }
                ],
                series: [
                    {
                        name: '轮次',
                        type: 'pie',
                        radius: ['50%', '60%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'inside',
                            formatter: (params) => {
                                return `${params.percent}%`
                            }
                        },
                        emphasis: {
                            label: {
                                show: false,
                                fontSize: '16',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {
                                value: 335, 
                                name: 'A轮',
                                itemStyle: {
                                 color:color1}
                            },
                            {
                                value: 310, 
                                name: 'B轮',
                                 itemStyle: {
                                    color: {
                                        type: "linear",
                                        x: 0,
                                        y: 0,
                                        x2: 1,
                                        y2: 1,
                                        colorStops: [
                                            {
                                                offset: 0,
                                                color: "#FC8053"
                                            },
                                            {
                                                offset: 1,
                                                color: "#F2CAA4"
                                            }
                                        ],
                                        global: false
                                    }
                                },
                            },
                            {
                             value: 234,
                             name: 'C轮',
                              itemStyle: {
                                    color: {
                                        type: "linear",
                                        x: 0,
                                        y: 0,
                                        x2: 1,
                                        y2: 1,
                                        colorStops: [
                                            {
                                                offset: 0,
                                                color: "#F868A1"
                                            },
                                            {
                                                offset: 1,
                                                color: "#FB91BA"
                                            }
                                        ],
                                        global: false
                                    }
                                },
                            },
                            {
                                value: 135, 
                                name: 'D轮',
                                 itemStyle: {
                                    color: {
                                        type: "linear",
                                        x: 0,
                                        y: 0,
                                        x2: 1,
                                        y2: 1,
                                        colorStops: [
                                            {
                                                offset: 0,
                                                color: "#8F5AEB"
                                            },
                                            {
                                                offset: 1,
                                                color: "#CD98F2"
                                            }
                                        ],
                                        global: false
                                    }
                                },
                            }
                            
                        ]
                    }
                ]
            };
