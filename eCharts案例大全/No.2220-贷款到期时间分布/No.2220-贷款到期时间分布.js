
   var option = {
                title: {
	        text: '贷款到期时间分布',
	        textStyle: {
	        	 align: 'center',
	            color: '#666666',
	            fontSize: 20,
	        },
	        top: '10%',
	        left: '45%',
	    },
                tooltip: {
                    trigger: 'item',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '2%',
                    right: '8%',
                    bottom: '14%',
                    top:'16%',
                    containLabel: true
                },
                legend: {
                    data: ['滕士圆', '徐亚敏', '上海茜诺宾馆','总计'],
                    left: '57%',
                    top:'3%',
                    textStyle: {
                        color: "#666666"
                    },
                    itemWidth: 15,
                    itemHeight: 10,
                    itemGap: 25
                },
                xAxis: {
                    type: 'category',
                    name: "到期日",
                   
                    data: ['2021/1','2021/2','2021/3','2021/4','2021/5','2021/6','2021/7','2021/8'],
                    axisLine: {
                        lineStyle: {
                            color: '#cdd5e2'

                        }
                    },
                  
                    axisLabel: {
                        textStyle: {
                            color: "#666666"
                        }
                    },
                },

                yAxis: {
                    type: 'value',
                    name: "在贷余额",
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#cdd5e2'
                        }
                    },
                    splitLine: {
                        show: false,
                    },
                    axisLabel: {                
                        textStyle: {
                            color: "#666666"
                        }}    ,
                    axisLine: {
                        lineStyle: {
                            color: '#cdd5e2'
                        }
                    },
                },
                series: [{
                    name: '滕士圆',
                    type: 'bar',
                    barWidth: '12px',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#29acff'
                            }, {
                                offset: 1,
                                color: '#4bdfff'
                            }]),
                            barBorderRadius: 6,
                        },
                    },
                    data: [400, 400, 300, 300, 300, 400, 400, 400, 300]
                },
                    {
                        name: '徐亚敏',
                        type: 'bar',
                        barWidth: '12px',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#3d93f2'
                                }, {
                                    offset: 1,
                                    color: '#5dc1fd'
                                }]),
                                barBorderRadius: 6,
                            }

                        },
                        data: [400, 500, 500, 500, 500, 400,400, 500, 500]
                    },
                    {
                        name: '上海茜诺宾馆',
                        type: 'bar',
                        barWidth: '12px',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#01c871'
                                }, {
                                    offset: 1,
                                    color: '#55f49c'
                                }]),
                                barBorderRadius: 6,
                            }
                        },
                        data: [400, 600, 700, 700, 1000, 400, 400, 600, 700]
                    },{
                        name: "总计",
                        type: "line",
                        //yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
                        smooth: false, //平滑曲线显示

                        symbol: "circle", //标记的图形为实心圆
                        symbolSize: 8, //标记的大小
                        itemStyle: {
                            normal: {
                                color: '#ffa43a',
                                borderColor: 'rgba(255, 234, 0, 0.5)',  //圆点透明 边框
                                borderWidth: 5
                            },

                        },
                        lineStyle: {
                            color: "#ffa43a"
                        },

                        data: [400, 900, 1100, 700, 1100, 400, 900, 1300, 700]
                    }
                ]
            };