 option = {
                //这里的是采用什么方式触发数据，这里显示的竖轴，跟随鼠标移动到节点上会显示内容
                tooltip: {
                    trigger: 'axis'
                },
                grid:{
                    x:60,
                    y:6,
                    bottom:100,
                    containLabel: true
                    // x2:-20,
                    // y2:-10,
                },
                 
                xAxis: {//代表x轴，这里type类型代表字符
                    type: 'category',
                    boundaryGap: false,//这里表示是否补齐空白
                    axisTick: {
                        show:false
                    },
                    axisLine: {
                          show: false,//不显示坐标轴线
                    },
                    data: ['2019年一季度', '2019年二季度', '2019年三季度', '2019年四季度','2020年一季度','2020年二季度'],
                    //网格属性
                    splitLine: {
                        show: true,
                        lineStyle:{
                            width: 1,
                            type: 'dashed'
                        }
                    },
                    axisLabel: {
                        interval:0,  
                        rotate:36,
                    }
                },
                yAxis: [{
                    type: 'value',
                    axisTick: {
                        show:false
                    },
                    axisLine: {
                          show: false,//不显示坐标轴线
                    },
                    //网格样式
                    splitLine: {
                        show: true,
                        lineStyle:{
                             width: 1,
                             type: 'dashed'
                        }
                    },
                }],
                //图表类型，type表示按照什么类型图表显示，line代表折线，下面的内容与
                //legend一一对应
                series: [{
                    data: [50, 26, 33, 22, 43,30],
                    type: 'line',
                    smooth: true,//如果想折线图平滑可以加上这个属性
                    showSymbol: true,
                    symbolSize:3,
                    symbol: 'circle',     //设定为实心点
                    hoverAnimation: false,
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'default',
                                color:'rgba(132, 202, 247,0.2)'
                            },
                            color: '#21a8f3' //改变区域颜色
                        }
                    },
                },{
                    data: [30, 18, 44, 18,28,42],
                    type: 'line',
                    smooth: true,//如果想折线图平滑可以加上这个属性
                    showSymbol: true,
                    symbol: 'circle',     //设定为实心点
                    symbolSize:3,
                    hoverAnimation: false,
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'default',
                                color:'rgba(255, 99, 99,0.2)'
                            },
                            color: '#ff6363' //改变区域颜色
                        }
                    },
                },
                ]
            }