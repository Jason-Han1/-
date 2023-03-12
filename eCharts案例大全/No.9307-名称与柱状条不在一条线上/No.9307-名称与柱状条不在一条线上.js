 // 本月已经检定/目标
        var baifenbi = [0.084, 0.433,0.583];
        var wancheng = [58, 96,80];
        var zongshu = [100, 100,100];
        var gs = ['产品1', '产品2', '产品3'];
        option = {
            grid: {
                left: '6%',
                right: '6%',
                bottom: '-5%',
                top: '-5%',
                containLabel: true,
            },
              backgroundColor:'RGBA(2, 44, 59, 1)',
            xAxis: [{
                show: false,
            },
                {
                    show: false,
                }
            ],
            yAxis: {
                type: 'category',
                show: false
            },
            series: [
                //背景色 完成、总金额
                {
                    show: true,
                  
                    type: 'bar',
                    barGap: '-100%',
                    barWidth: '27%',
                    z: 1,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 7,
                            color: 'RGBA(5, 73, 102, 0.7)',
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: 'rgba(0, 237, 212, 1)',
                                fontSize:'16px',
                            },
                            position: [530, '-15'],
                            formatter: function(data) {
                                return '合格率  '+ (baifenbi[data.dataIndex] * 100).toFixed(1) + '%';
                            }

                        }
                    },
                    data: [1, 1,1],
                },
                //亮色条 百分比
                {
                    show: true,
                    type: 'bar',
                    barGap: '-100%',
                    barWidth: '27%',
                    z: 2,
                    itemStyle: {
                        normal: {
                            barBorderRadius: 7,
                            color: new echarts.graphic.LinearGradient(0,0,1 , 0, [{
                                offset: 0,
                                color: 'rgba(21,114,154,1)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(13,197,210,1)' // 100% 处的颜色
                            }], false),
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: 'rgba(54, 255, 234, 1)',
                                fontSize:'12px',
                            },
                            position: 'inside',
                            offset:[150,0],
                            formatter: function(data) {
                                return wancheng[data.dataIndex] + '/' + zongshu[data.dataIndex] + ' （台）'
                            }
                        }
                    },
                    data: baifenbi,
                },
                //公司名称
                {
                    show: true,
                    type: 'bar',
                    xAxisIndex: 1, //代表使用第二个X轴刻度
                    barGap: '-100%',
                    barWidth: '10%',
                    itemStyle: {
                        normal: {
                            barBorderRadius: 7,
                            color: 'transparent'
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: [0, '-15'],
                            textStyle: {
                                color: 'rgba(215, 253, 249, 1)',
                            },
                            formatter: function(data) {
                                return gs[data.dataIndex];
                            }
                        }
                    },
                    data: [1, 1, 1]
                }
            ]
        }