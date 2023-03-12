  var data =[{value:75, name:''},{value:25, name:'__other', itemStyle:{normal:{color:'rgba(0,0,0,0)'}}}];
            var data2=[{value:75, name:''},{value:25, name:'__other', itemStyle:{normal:{color:'rgba(0,0,0,0)'}}}];
            var data3=[{value:12, name:'违规报警'},{value:25, name:'__other', itemStyle:{normal:{color:'rgba(0,0,0,0)'}}}];
            var option = {
                legend: {
                    selectedMode:false,//取消图例上的点击事件
                    orient: 'vertical',
                    x: 'center',
                    y:'bottom',
                    data:['违规报警'],
                    itemWidth:6,
                    itemHeight:6,
                    textStyle:{
                        fontSize: 14,
                    }
                },
                series : [
                    {   type: 'pie',
                        startAngle:225,
                        endAngle:360,
                        radius :  ['50%', '70%'],
                        center: ['50%', '50%'],
                        data:data,
                        hoverAnimation:false,
                        itemStyle: {
                            normal: {
                                color: '#c2d8e8',
                                shadowBlur: 60,
                                shadowOffsetX: 3,
                                shadowColor: 'rgba(27, 242, 245, 0.2)'
                            },
                        },
                        label: {
                            normal: {
                                show: false,
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                    },
                    {
                        type: 'pie',
                        startAngle:225,
                        endAngle:360,
                        radius :  ['50%', '70%'],
                        center: ['50%', '50%'],
                        data:data3,
                        hoverAnimation:false,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: '#1bf2f5'  },
                                    {offset: 1, color: '#1092e9'
                                    }], false),
                                shadowBlur: 60,
                                shadowOffsetX: 3,
                                shadowColor: 'rgba(27, 242, 245, 0.5)'
                            },

                        },
                        label: {
                            normal: {
                                show: false,
                            },
                        },

                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                    },
                    {
                        type: 'pie',
                        startAngle:225,
                        endAngle:360,
                        radius :  ['43%', '45%'],
                        center: ['50%', '50%'],
                        data:data2,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0, color: '#1bf2f5'  },
                                    {offset: 1, color: '#1092e9'
                                    }], false)
                            },
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(27, 242, 245, 0)'
                            }
                        },
                        label: {
                            normal: {
                                show: false,
                            },
                        },
                        hoverAnimation:false,
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },

                    }
                ]
            };