option = {
    backgroundColor: '#fff',
    title: {
        text: '{a|任务完成率}',
        textStyle: {
            color: '#000',
            fontWeight: 'normal',
            fontSize: 40,
            fontFamily: 'MittelNeu',
            rich: {
                a: {
                    color: '#000',
                    fontWeight: 'normal',
                    fontSize: 40,
                    fontFamily: 'MittelNeu',
                    lineHeight: 50
                }
            }
        },
        x: 'center',
        y: '70%'
    },
    series: [{
        type: 'pie',
        clockWise: true,
        radius: ['15%', '40%'],
        hoverAnimation: false,
        silent: false,
        startAngle: 90,
        center: ['50%', '40%'],
        itemStyle: {
            normal: {
                labelLine: {
                    show: false,
                },
            }
        },
        z: 3,
        data: [{
            value: 59,
            label: {
                normal: {
                    show: true,
                    position: "center",
                    formatter: "{c}{a|%}",
                    fontSize: 50,
                    fontFamily: 'MittelNeu',
                    fontWeight: 'normal',
                    color: "white",
                    rich: {
                        a: {
                            fontFamily: 'din',
                            fontSize: 30,
                            color: 'white'
                        }
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#8FB633',opacity:0.3
                    // shadowColor: '#ccc',
                    // shadowBlur: 15
                }
            }
        }, {
            value:100-59  ,
            itemStyle: {
                normal: {
                    color: 'transparent',
                }
            }
        }]
    }, {
        type: 'pie',
        clockWise: false,
        radius: ['45%', '54%'],
        hoverAnimation: false,
        silent: true,
        center: ['50%', '40%'],
        itemStyle: {
            normal: {
                labelLine: {
                    show: false,
                },
            }
        },
        data: [{
            value: 0,
        }, {
            value: 100,
            itemStyle: {
                normal: {
                    color: 'red',
                }
            }
        }]
    }, {
        type: 'pie',
        clockWise: true,
        radius: '15%', // 大小
        hoverAnimation: false,
        silent: true,
        center: ['50%', '40%'], // 位置
        itemStyle: {
            normal: {
                labelLine: {
                    show: false,
                },
            }
        },
        data: [{
            value: 0,
        }, {
            value: 100,
            itemStyle: {
                normal: {
                    color: 'yellow', // 底部颜色
                }
            }
        }]
    }]
}
	option.series[0].data[0].value = (Math.random() * 100).toFixed(0) - 0;
				option.series[0].data[1].value = (100 - option.series[0].data[0].value);
				myChart.setOption(option, true);