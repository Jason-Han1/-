  option = {
								    timeline: {
								        data: [
								            '2014', '2015', '2016', '2017', '2018'
								        ],
								        left: '10%',
								        right: '10%',
								        bottom: 0,
								        height: -120,
								        axisType: 'category',
								        show: false,
								        autoPlay: false,
								        playInterval: 1000,
								        checkpointStyle: {
								            color: '#C1FBFF',
								            borderColor: 'rgba(4, 165, 261, .5)'
								        },
								        label: {
								            normal: {
								                formatter: function(v) {
								                    var _txt = v.replace(/\//igm, '\n');
								                    return _txt;
								                },
								                rotate: -45,
								                position: 'bottom',
								                fontSize: '10'
								            }
								        },
								        itemStyle: {
								            normal: {
								                color: '#C1FBFF'
								            },

								        },
								        lineStyle: {
								            color: '#C1FBFF'
								        },
								        controlStyle: {
								            show: false,
								        },
								    },
								    options: [{
								        textStyle: {
								          fontSize: 22,
								          height:80,
								        },
								        tooltip: {
								            trigger: 'axis',
								            axisPointer: {
								                type: 'cross',
								                label: {
								                    backgroundColor: 'rgba(255,255,255,0.8)',
								                    extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
								                    textStyle: {
								                        color: '#666',
								                    },
								                },
								            },
								            backgroundColor: 'rgba(255,255,255,0.8)',
								            extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
								            textStyle: {
								                color: '#000000',
								            },
								        },
								        toolbox: {
								            'show': false,
								            // orient: 'vertical',
								            //x: 'right',
								            //y: 'center',
								            feature: {
								                'magicType': {
								                    'show': true,
								                    'type': ['bar', 'line']
								                },
								                restore: {
								                    'show': true
								                },
								                saveAsImage: {
								                    'show': true
								                }
								            }
								        },
												title : {
														text: 'GDP增长情况',
														x:'1%',
  													y:'5%',
														textStyle:{
															 color:'#85F4FB',
															 fontSize:17,
														}
												},
								        legend: {
								            data: ['生产总值（亿元）', '增长率（%）'],
														textStyle: {
                                  fontSize: '14',
                                  color:'#C1FBFF',
                            },
													  bottom: 20
								        },
								        grid: {
								            top: '100',
								            left: '3%',
								            right: '4%',
								            bottom: '60',
								            containLabel: true
								        },
								        xAxis: [{
								            type: 'category',
								            data: ['2014', '2015', '2016', '2017', '2018'],
								            axisLabel: { //坐标轴刻度标签的相关设置。
								                interval: 0, //设置为 1，表示『隔一个标签显示一个标签』
								                //rotate:-30,
								                textStyle: {
								                    color: '#C1FBFF',
								                    fontSize: '14',
								                }
								            },
								            axisLine: { //坐标轴轴线相关设置
																show:true,
								                lineStyle: {
								                    color: '#C1FBFF',
								                    opacity: 1
								                }
								            },
								            splitLine: { //坐标轴在 grid 区域中的分隔线。
								                show: false,
								            },
														axisTick: {
															 show: false
													 }
								        }],
								        yAxis: [{
								            name: '（亿元）',
								            type: 'value',

								            axisLabel: {
								                textStyle: {
								                    color: '#C1FBFF',
								                    fontSize: '14'
								                }
								            },
														nameTextStyle:{
															color:'#709DD5',
															fontSize: '14',
															align:'left'
														},
								            axisLine: {
								                show:true,
																lineStyle:{
																	color: '#C1FBFF',
																}
								            },
								            axisTick: {
								                show: false
								            },
								            splitLine: {
								                show: false,
								            }

								        }, {
								            name: '（%）',

								            type: 'value',
								            position: 'right',
								            axisLabel: {
								                textStyle: {
								                    color: '#C1FBFF',
								                    fontSize: '14',
								                }
								            },
														nameTextStyle:{
															align:'right',
															color:'#709DD5',
															fontSize: '14'
														},
								            axisLine: {
								                show: true,
																lineStyle:{
																	color: '#C1FBFF',
																}
								            },
								            axisTick: {
								                show: false
								            },
								            splitLine: {
								                show: false,
								            }
								        }],
								        series: [{
								            'name': '生产总值（亿元）',
								            'type': 'bar',
								            barWidth: 15,
								            'data': [12318, 15360, 11760, 11447, 7325],
								            itemStyle: {
								                normal: {
								                    //barBorderRadius: 15,
								                    color: new echarts.graphic.LinearGradient(
								                        0, 0, 0, 1, [{
								                                offset: 0,
								                                color: '#42B7F1'
								                            },
								                            {
								                                offset: 1,
								                                color: '#2078CF'
								                            }
								                        ]
								                    )
								                }
								            }
								        }, {
								            name: '增长率（%）',
								            yAxisIndex: 1,
								            type: 'line',
								            showAllSymbol: true,
								            symbol: 'emptyCircle',
								            symbolSize: 14,
								            data: [1061, 992, 1244, 4020, 818],
								            itemStyle: {
								                normal: {
								                    color: '#fdb94e'
								                },
								            },
								        }]
								    }]
								};