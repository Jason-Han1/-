function fontSize(res){
    return res*100;
}
option = {
    backgroundColor:'#000928',
        toolbox: {
            itemSize:fontSize(.15),
            feature: {
                backgroundColor: '#000',
                saveAsImage: {
                    backgroundColor: '#000',
                    iconStyle: {
                        color: '#fff',
                        borderColor: '#fff'
                    }
                }
            }
        },
        grid: [{
            left: '10%',
            top: '17%',
            bottom: '18%',
            right: '8%'
        }, {
            left: '15%',
            top: '17%',
            bottom: '18%',
            right: '-10%'
        }],
        xAxis: [{
            data: ['石家庄', '保定', '邢台', '邯郸','衡水','沧州','雄安'],
            axisTick: {
                show: true
            },
            gridIndex:0,
            axisLine: {
                lineStyle: {
                    color: '#1D4A9B'
                }
            },
            axisLabel: {
                formatter:(params)=>{
                    return '      '+params
                },
                interval:0,
                textStyle: {
                    color: "#fff",
                    fontSize:fontSize(.17)
                }
            }
        }, {
            data: ['驯鹿', '火箭', '飞机', '高铁', '轮船', '汽车', '跑步', '步行', ],
            axisTick: {
                show: false
            },
            gridIndex:1,
            offset:[-10,20],
            position: 'bottom',
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 129, 109, 0.1)',
                    width: 1 //这里是为了突出显示加上的
                }
            },
            axisLabel: {
                show:false,
                textStyle: {
                    color: '#999',
                    fontSize: 12
                }
            }
        }],
        yAxis: [{
            name: "个",
            nameTextStyle: {
                color: "#fff",
                fontSize:fontSize(.17)
            },
            gridIndex:0,
            max:150,
            axisTick: {
                show: true
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#1D4A9B'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#fff",
                    fontSize:fontSize(.17)
                }
            },
            splitArea: {
                areaStyle: {
                    color: 'rgba(255,255,255,.5)'
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255, 129, 109, 0.1)',
                    width: 0.5,
                    type: 'dashed'
                }
            }
        },{
            gridIndex:1,
            max:150,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255, 129, 109, 0.1)',
                    width: 1 //这里是为了突出显示加上的
                }
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#999'
                }
            },
            splitArea: {
                areaStyle: {
                    color: 'rgba(255,255,255,.5)'
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255, 129, 109, 0.1)',
                    width: 0.5,
                    type: 'dashed'
                }
            }
        }],
        series: [{
            name: 'hill',
            type: 'pictorialBar',
            xAxisIndex: 0,
            yAxisIndex:0,
            barCategoryGap:'30%',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            label: {
                show: true,
                position: 'top',
                color: '#DB5E6A',
                fontSize: fontSize(.17),
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(232, 94, 106, .8)' //  0%  处的颜色
                        },
                            {
                                offset: 1,
                                color: 'rgba(232, 94, 106, .1)' //  100%  处的颜色
                            }
                        ],
                        global: false //  缺省为  false
                    }
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: [123, 60, 55, 18, 12, 9, 2],
            z: 10
        }, {
            name: 'hill2',
            type: 'pictorialBar',
            barCategoryGap:'30%',
            xAxisIndex: 1,
            yAxisIndex:1,
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            label: {
                show: true,
                position: 'top',
                color: '#ECD64F',
                fontSize: fontSize(.17),
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            "offset": 0,
                            "color": "rgba(236,214,79,1)"
                        },
                            {
                                "offset": 1,
                                "color": "rgba(236,214,79,0)"
                            }
                        ],
                        global: false //  缺省为  false
                    }
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: [93, 40, 35, 38, 32, 9, 4],
            z: 10
        }]
    };