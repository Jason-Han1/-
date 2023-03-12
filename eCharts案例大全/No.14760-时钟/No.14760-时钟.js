			var option = {
			    title: {
			        text: '饼图时钟',
			        x: 'center'
			    },
			    legend: {
			        show: false,
			        data: ['n', 'l']
			    },
			    series: [{
			        name: '秒',
			        type: 'pie',
			        center: ['50%', '30%'],
			        radius: ['40%', '30%'],
			        hoverAnimation: false,
			        label: {
			            normal: {
			                show: true,
			                position: 'inside',
			                formatter: function(v) {
			                    if (v.name == 'n') {
			                        v = v.value + '秒';
			                    } else {
			                        v = '';
			                    }
			                    return v;
			                }
			            }
			        },
			        labelLine: {
			            show: false
			        },
			        data: [{
			            name: 'n',
			            value: 0,
			            itemStyle: {
			                normal: {
			                    color: '#92C8C3',
			                    shadowBlur: 10,
			                    shadowColor: 'gray'
			                }
			            }
			        }, {
			            name: 'l',
			            value: 60,
			            itemStyle: {
			                normal: {
			                    color: 'rgba(0,0,0,0)'
			                }
			            }
			        }]
			    }, {
			        name: '分',
			        type: 'pie',
			        center: ['50%', '30%'],
			        radius: ['30%', '20%'],
			        hoverAnimation: false,
			        label: {
			            normal: {
			                show: true,
			                position: 'inside',
			                formatter: function(v) {
			                    if (v.name == 'n') {
			                        v = v.value + '分';
			                    } else {
			                        v = '';
			                    }
			                    return v;
			                }
			            }
			        },
			        labelLine: {
			            show: false
			        },
			        data: [{
			            name: 'n',
			            value: 0,
			            itemStyle: {
			                normal: {
			                    color: '#674B84',
			                    shadowBlur: 10,
			                    shadowColor: 'gray'
			                }
			            }
			        }, {
			            name: 'l',
			            value: 60,
			            itemStyle: {
			                normal: {
			                    color: 'rgba(0,0,0,0)'
			                }
			            }
			        }]
			    }, {
			        name: '时',
			        type: 'pie',
			        center: ['50%', '30%'],
			        radius: ['20%', '10%'],
			        hoverAnimation: false,
			        label: {
			            normal: {
			                show: true,
			                position: 'inside',
			                formatter: function(v) {
			                    if (v.name == 'n') {
			                        v = v.value + '点';
			                    } else {
			                        v = '';
			                    }
			                    return v;
			                }
			            }
			        },
			        labelLine: {
			            show: false
			        },
			        data: [{
			            name: 'n',
			            value: 0,
			            itemStyle: {
			                normal: {
			                    color: '#C75C7B',
			                    shadowBlur: 10,
			                    shadowColor: 'gray'
			                }
			            }
			        }, {
			            name: 'l',
			            value: 12,
			            itemStyle: {
			                normal: {
			                    color: 'rgba(0,0,0,0)'
			                }
			            }
			        }]
			    }]
			};
			myChart.setOption(option);

			//定时执行
			clearInterval(timeTicket);
			var timeTicket = setInterval(function() {
			    var h = option.series[2].data[0].value;
			    var m = option.series[1].data[0].value;
			    var s = option.series[0].data[0].value;
			    var date = new Date();
			    if (date.getHours() < 12) {
			        option.series[2].data[0].value = date.getHours();
			        option.series[1].data[0].value = date.getMinutes();
			        option.series[0].data[0].value = date.getSeconds();
			        option.series[2].data[1].value = 12 - date.getHours();
			        option.series[1].data[1].value = 60 - date.getMinutes();
			        option.series[0].data[1].value = 60 - date.getSeconds();
			    } else {
			        option.series[2].data[0].value = date.getHours() - 12;
			        option.series[1].data[0].value = date.getMinutes();
			        option.series[0].data[0].value = date.getSeconds();
			        option.series[2].data[1].value = 12 - (date.getHours() - 12);
			        option.series[1].data[1].value = 60 - date.getMinutes();
			        option.series[0].data[1].value = 60 - date.getSeconds();
			    }
			    myChart.setOption(option, true);
			}, 1000)