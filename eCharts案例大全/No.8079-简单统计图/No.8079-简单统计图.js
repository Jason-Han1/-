option = {
                    color: ['#3398DB'],
                    grid:{
                        x:0,
                        y:20,
                        y2:30,
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['2019', '2020'],
                            axisTick:{
                                show:false//不显示坐标轴刻度线
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#ececec'
                                }
                            },
                        }
                    ],
                    yAxis: {
                            show:false,//不显示坐标轴线、坐标轴刻度线和坐标轴上的文字
                            axisTick:{
                                show:false//不显示坐标轴刻度线
                            },
                            axisLine: {
                                show: false,//不显示坐标轴线
                            },
                            axisLabel: {
                                show: false,//不显示坐标轴上的文字
                            },
                        },
                    series: [
                        {
                            name: '直接访问',
                            type: 'bar',
                            barWidth: '38%',
                            data: [700, 1000],
                            itemStyle: {
                                normal: {
                                    color: function(params){
                                        let colorArr = params.value > 0?['#368aed', '#2e69c9']:['#368aed', '#2e69c9']
                                        return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                            offset: 0,
                                            color: colorArr[0] // 0% 处的颜色
                                        }, {
                                            offset: 1,
                                            color:  colorArr[1]// 100% 处的颜色
                                        }], false)
                                    },
                                    barBorderRadius: [1, 1, 0, 0]
                                },
                            },
                            label: {
                                normal: {
                                    formatter:"{b}",
                                    show: true,
                                    fontSize: 12,
                                    fontWeight: 'normal',
                                    color: '#333',
                                    position: 'top',
                                }
                            }
                        } 
                    ]
                };
                