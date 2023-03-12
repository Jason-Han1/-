option = {
        title: [{
            text: '到期贷款余额（累计）',
            x:'35%',
            y:'90%',
            textStyle: {
                fontSize: '24',
                color: '#ffffff'
            }
        },
        {
            text: '到期余额笔数（累计）',
            x:'35%',
            y:'2%',
            textStyle: {
                fontSize: '24',
                color: '#ffffff'
            }
        },
        {
            text: '500万' ,
            x: '13%',
            y: '22%',
            textStyle: {
                color: '#ffffff'
            }
        },
        {
            text: '1000万' ,
            x: '20%',
            y: '38%',
            textStyle: {
                color: '#ffffff'
            }
        },
        {
            text: '1500万' ,
            x: '30%',
            y: '55%',
            textStyle: {
                color: '#ffffff'
            }
        },
        {
            text: '7000万' ,
            x: '40%',
            y: '73%',
            textStyle: {
                color: '#ffffff'
            }
        },
        {
            text: '7000笔' ,
            x: '50%',
            y: '22%',
            textStyle: {
                color: '#ffffff'
            }
        },
        {
            text: '1500笔' ,
            x: '59%',
            y: '38%',
            textStyle: {
                color: '#ffffff'
            }
        },
        {
            text: '1000笔' ,
            x: '70%',
            y: '55%',
            textStyle: {
                color: '#ffffff'
            }
        },
        {
            text: '500笔' ,
            x: '78%',
            y: '73%',
            textStyle: {
                color: '#ffffff'
            }
        }
        ],
        backgroundColor:'#0e2147',
        grid: {
            left: '3.8%',
            top:'10%',
            right: '7%',
            bottom: '12%',
            containLabel: true
        },
        xAxis:[{
            name:'',
            show: false
        },
        {
            name:'',
            show: false,
            inverse: true
        }],
        yAxis: [{
            name: '',
            data: ['0-180天', '0-90天', '0-60天', '0-30天'],
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel:{
                                textStyle:{
                                     color: 'rgba(255,255,255,0.8)',
                                     fontSize:'14',
                                },
                              }
        },
        {
            name: '',
            data: ['0-180天', '0-90天', '0-60天', '0-30天'],
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel:{
                                textStyle:{
                                     color: 'rgba(255,255,255,0.8)',
                                     fontSize:'14',
                                },
                              },
            position: 'right',
            inverse: true
        }],
        series: [{
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '0%',
            symbol: 'path://M730 250 L730 325 L770 325 Z',
            label:{
                normal:{
                    show:false,
                    formatter: '500万',
                    textStyle:{
                        fontSize:'16',
                        color:'#ffffff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#d0a00e'
                }
            },
            data: [0, 0, 0 ,10],
            z: 4
        },
        {
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '0%',
            symbol: 'path://M730 250 L730 325 L770 325 L750 250 Z',
            label:{
                normal:{
                    show:false,
                    formatter: '1000万',
                    textStyle:{
                        fontSize:'16',
                        color:'#ffffff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#eb7f00'
                }
            },
            data: [0, 0, 20, 0],
            z: 4
        },
        {
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '0%',
            symbol: 'path://M730 250 L730 325 L770 325 L756.5 250 Z',
            label:{
                normal:{
                    show:false,
                    formatter: '1500万',
                    textStyle:{
                        fontSize:'16',
                        color:'#ffffff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#eb4800'
                }
            },
            data: [0, 30, 0, 0],
            z: 4
        },
        {
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '0%',
            symbol: 'path://M730 250 L730 325 L770 325 L760 250 Z',
            label:{
                normal:{
                    show:false,
                    formatter: '7000万',
                    textStyle:{
                        fontSize:'16',
                        color:'#ffffff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#eb2100'
                }
            },
            data: [40, 0, 0, 0],
            z: 4
        },
        {
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '0%',
            symbol: 'path://M730 250 L770 250 L730 325  Z',
            label:{
                normal:{
                    show:false,
                    formatter: '500笔',
                    textStyle:{
                        fontSize:'16',
                        color:'#ffffff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#76ec99'
                }
            },
            data: [0, 0, 0 ,10],
            xAxisIndex: 1,
            yAxisIndex: 1,
            z: 4
        },
        {
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '0%',
            symbol: 'path://M730 250 L730 325 L750 325 L770 250 Z',
            label:{
                normal:{
                    show:false,
                    formatter: '1000笔',
                    textStyle:{
                        fontSize:'16',
                        color:'#ffffff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#3cb371'
                }
            },
            data: [0, 0, 20 ,0],
            xAxisIndex: 1,
            yAxisIndex: 1,
            z: 4
        },
        {
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '0%',
            symbol: 'path://M730 250 L730 325 L750 325 L760 250 Z',
            label:{
                normal:{
                    show:false,
                        formatter: '1500笔',
                    textStyle:{
                        fontSize:'16',
                        color:'#ffffff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#35935e'
                }
            },
            data: [0, 30, 0 ,0],
            xAxisIndex: 1,
            yAxisIndex: 1,
            z: 4
        },
        {
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '0%',
            symbol: 'path://M730 250 L730 325 L760 325 L770 250 Z',
            label:{
                normal:{
                    show:false,
                    formatter: '7000笔',
                    textStyle:{
                        fontSize:'16',
                        color:'#ffffff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#2e744b'
                }
            },
            data: [40, 0, 0 ,0],
            xAxisIndex: 1,
            yAxisIndex: 1,
            z: 4
        }]
    };