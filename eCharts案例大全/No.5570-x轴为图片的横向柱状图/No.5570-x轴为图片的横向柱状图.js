option = {
    tooltip: {
        trigger: 'item',
        formatter: function(e) {
            return e.name + '：' + e.value ;
        }
    },


    xAxis: [{
            splitLine: {
                show: false
            },
            axisLabel: {
                show: true,
                interval: 0,
                textStyle: {
                    color: "#7d838b"
                }
            },
            axisTick: {
                show: false //X轴上面的刻度线
            },

            axisLine: {
                show: true,
                lineStyle: {
                    color: "#BCC2CA"
                }
            },


        },

    ],
    yAxis: [{

        data: ['2019/01', '2019/02', '2019/03', '2019/04', '2019/05', '2019/06', '2019/07', '2019/08', '2019/09', '2019/10', ],
        position: 'left',

        axisLabel: {
            formatter: function(value, index) {
                return `{img${index}|}`;
            },
            rich: {
                value: {
                    fontsize: 20
                },
                img0: {
                    height: 32,
                    backgroundColor: {
                        image: 'https://static.wmmeco.com/20200725/42347721-6e88-4d26-a217-38b32e0bfdaf.png'
                    }
                },
                img1: {
                    height: 32,
                    backgroundColor: {
                        image: 'https://static.wmmeco.com/20200725/42347721-6e88-4d26-a217-38b32e0bfdaf.png'
                    }
                },
                img2: {
                    height: 32,
                    backgroundColor: {
                        image: 'https://static.wmmeco.com/20200725/42347721-6e88-4d26-a217-38b32e0bfdaf.png'
                    }
                },
                img3: {
                    height: 32,
                    backgroundColor: {
                        image: 'https://static.wmmeco.com/20200725/42347721-6e88-4d26-a217-38b32e0bfdaf.png'
                    }
                },
                img4: {
                    height: 32,
                    backgroundColor: {
                        image: 'https://static.wmmeco.com/20200725/42347721-6e88-4d26-a217-38b32e0bfdaf.png'
                    }
                },
                img5: {
                    height: 32,
                    backgroundColor: {
                        image: 'https://static.wmmeco.com/20200725/42347721-6e88-4d26-a217-38b32e0bfdaf.png'
                    }
                },
                img6: {
                    height: 32,
                    backgroundColor: {
                        image: 'https://static.wmmeco.com/20200725/42347721-6e88-4d26-a217-38b32e0bfdaf.png'
                    }
                },
                img7: {
                    height: 32,
                    backgroundColor: {
                        image: 'https://static.wmmeco.com/20200725/42347721-6e88-4d26-a217-38b32e0bfdaf.png'
                    }
                },
                img8: {
                    height: 32,
                    backgroundColor: {
                        image: 'https://static.wmmeco.com/20200725/42347721-6e88-4d26-a217-38b32e0bfdaf.png'
                    }
                },
                img9: {
                    height: 32,
                    backgroundColor: {
                        image: 'https://static.wmmeco.com/20200725/42347721-6e88-4d26-a217-38b32e0bfdaf.png'
                    }
                },
                img10: {
                    height: 32,
                    backgroundColor: {
                        image: 'https://static.wmmeco.com/20200725/42347721-6e88-4d26-a217-38b32e0bfdaf.png'
                    }
                },

            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#BCC2CA'
            }
        },
        splitLine: {
            show: false,
        }
    }],
    series: [{
        name: '订单数量',
        type: 'bar',
        itemStyle: {
            
            normal: {
                color: '#2E8FFD',
								label: {
									show: true, //开启显示
									position: 'inside', //在上方显示
									textStyle: { //数值样式
										color: '#ffffff',
										fontSize: 14
									}
								}
							}

        },
        barWidth: 20,
        data: [482, 378, 446, 518, 238, 358, 312, 378, 220, 452, ]
    }]
};