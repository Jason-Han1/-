
     var data = [40,50,60];
        var xdata = ['02', '03', '04'];
        var option = {
            tooltip: {
                trigger: "item",
                show: true
            },
            color:['#f00','#ff0','#f0f'],

            title: {
                text: "Time Power",
                subtext: "2014.12.25",
                textStyle: {
                    color: "#fff",
                    fontSize: 26
                },
                subtextStyle: {
                    color: "#ff8b5d",
                    fontSize: 14
                },
                left: 'center',
                top: "15%"
            },
            grid: {
                left: "10%",
                top: "35%",
                bottom: "15%",
                right: "10%",
                containLabel: true
            },
            xAxis: {
                data: xdata,
                type: 'category',
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: true
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#ff8b5d',
                    fontSize: 14
                }
            },
            yAxis: {
                type: 'value',
                splitNumber: 4,
                // interval: 50,
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#ec7443'
                    }
                },
                axisLine: {
                    show: true,
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#ff8b5d',
                    fontSize: 14
                }
            },
            series: [{
                    type: 'bar',
                    animation: false,
                    barWidth: 8,
                    data: data,
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
            　　　　　　　　//这里是重点
                            color: (params)=> {
                                //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                                var colorList = ['#1cffb1','#10c4ff', '#543abf'];
                                // return colorList[params.dataIndex]
                                return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 1,
                                    color: 'rgba(255,255,255,0)' // 0% 处的颜色
                                }, {
                                    offset: 0.2,
                                    color: colorList[params.dataIndex] // 100% 处的颜色
                                },{
                                    offset: 0,
                                    color: 'rgba(255,255,255,0)' // 0% 处的颜色
                                }], false)
                            }
                        }
                    }
                },
                {
                    type: 'scatter',
                    data:[40],
                    symbolSize: 20,
                    itemStyle: {
                        borderWidth: 0,
                      
                            shadowColor:'#67fcc9',
                     
                        shadowBlur: 10,
                        opacity: 1,
                        color: 'white'
                    }
                },
                {
                    type: 'scatter',
                  data:['',50],
                    symbolSize: 20,
                    itemStyle: {
                        borderWidth: 0,
                      
                            shadowColor:'#10c4fe',
                     
                        shadowBlur: 10,
                        opacity: 1,
                        color: 'white'
                    }
                },
                {
                    type: 'scatter',
                  data:['','',60],
                    symbolSize: 20,
                    itemStyle: {
                        borderWidth: 0,
                      
                            shadowColor:'#b9afe1',
                     
                        shadowBlur: 10,
                        opacity: 1,
                        color: 'white'
                    }
                }

            ]
        };
  