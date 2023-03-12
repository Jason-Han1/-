                  // var chartName = [{'name':'T','value':1},{'name':'Q','value':2},{'name':'E','value':3}]   
                   var asd = ['T','A','B']
                        option = {
                            tooltip: {
                                show: true,
                                trigger: 'axis',

                                //formatter: function (params) {
                                //    var content = params.name;

                                //    content = content + ' : ' + parseFloat(params.data.value).toFixed(2) + '%';
                                //    return content;
                                //}
                            },
                            backgroundColor: '#fff',
                            grid: {
                                //top: '15%',
                                //right: '10%',
                                //left: '10%',
                                //bottom: '12%'
                            },
                            xAxis: [{
                                show:false,
                                type: 'category',
                                color: '#59588D',
                                data:asd,
                                axisLabel: {
                                    margin: 20,
                                    color: '#999',
                                    textStyle: {
                                        fontSize: 18
                                    },
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: 'rgba(107,107,107,0.37)',
                                    }
                                },
                                axisTick: {
                                    show: false
                                },
                            }],
                            yAxis: [{
                                max: 100,
                                name: '编制变化数量（人）',
                                axisLabel: {
                                    formatter: '{value}',
                                    color: '#999',
                                    textStyle: {
                                        fontSize: 10
                                    },
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: 'rgba(107,107,107,0.37)',
                                    }
                                },
                                axisTick: {
                                    show: false
                                },
                                splitLine: {
                                    lineStyle: {
                                        color: 'rgba(131,101,101,0.2)',
                                        type: 'dashed',
                                    }
                                }
                            }],
                            legend: {
                            bottom: 0,
                            data: ['职级', '整体']
                            },
                            series: [{
                                type: 'bar',
                                data: [2,2,-5],
                                name: '职级',
                                barWidth: '50px',
                                itemStyle: {
                                    normal: {
                                        color: function(params) {
                                            return { //type: 'bar',
                                                x: 0,
                                                y: 0,
                                                x2: 0,
                                                y2: 1,
                                                colorStops: [{
                                                    offset: 0,
                                                    color: '#5B9BD5'
                                                }, {
                                                    offset: 1,
                                                    color: '#5B9BD5'
                                                }],
                                            };
                                        },


                                    }
                                },
                                label: {
                                    normal: {
                                       
                                        show: true,
                                        fontSize: 10,
                                        //fontWeight: 'bold',
                                        color: '#333',
                                        position: 'bottom',
                                         formatter: function(param) {
                                            console.log(param);  
                                                return param.name + '\n\n'  + param.value;
                                            }
                                       
                                    }
                                }
                            }, {
                                data: [2, 2, 2],
                                type: 'line',
                                smooth: false,
                                name: '整体',
                                symbol: 'none',
                                lineStyle: {
                                    color: '#ED7D31',
                                    width: 4,

                                }
                            }]
                        };