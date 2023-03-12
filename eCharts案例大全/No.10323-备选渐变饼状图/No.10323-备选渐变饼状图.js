app.title = '环形图';

const colors = 
    [
        
    ]

option = {
    backgroundColor: '#333',
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['中国人保','太平洋保险','平安保险','其它'],
        icon: 'circle',
        textStyle: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'PingFangSC',
            fontWeight: 400
        }
    },
    series: [
        {
            type:'pie',
            radius: ['0', '110'],
             selectedMode: 'single',
            selectedOffset: 30,
            clockwise: true,
            itemStyle: {
                borderColor: '#04192b',
                borderWidth: 1
            },
            label: {
                normal: {
                    show: true,
                    formatter: (params)=>{
                        console.log(params);
                        return '{color'+params.dataIndex+'| '+params.percent+'%}'
                    },
                    rich: {
                        color0: {
                            fontSize: 18,
                            color: '#EBE806',
                            fontWeight: 400,
                            fontFamily: 'PingFangSC'
                        },
                        color1: {
                            fontSize: 18,
                            color: '#FF5624',
                            fontWeight: 400,
                            fontFamily: 'PingFangSC'
                        },
                        color2: {
                            fontSize: 18,
                            color: '#5EA6FE',
                            fontWeight: 400,
                            fontFamily: 'PingFangSC'
                        },
                        color3: {
                            fontSize: 18,
                            color: '#37FFF9',
                            fontWeight: 400,
                            fontFamily: 'PingFangSC'
                        }
                    }
                }
            },
            labelLine: {
                length: 24  
            },
            emphasis: {
                label: {
                    show: true
                }    
            },
            data:[
                {
                    value:100, name:'其它',
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 550,
                            y: 440,
                            r: 120,
                            colorStops: [{
                                offset: 0, color: 'rgba(235,232,6, 0.2)' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#EBE806' // 100% 处的颜色
                            }],
                            global: true // 缺省为 false
                        }
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#EBE806'
                        }
                    }
                },
                {
                    value:30, name:'平安保险',
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 550,
                            y: 440,
                            r: 120,
                            colorStops: [{
                                offset: 0, color: 'rgba(255,86,36, 0.2)' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#FF5624' // 100% 处的颜色
                            }],
                            global: true // 缺省为 false
                        }
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#FF5624'
                        }
                    }
                },
                {
                    value:30, name:'太平洋保险',
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 550,
                            y: 440,
                            r: 120,
                            colorStops: [{
                                offset: 0, color: 'rgba(94,166,254, 0.2)' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#5EA6FE' // 100% 处的颜色
                            }],
                            global: true // 缺省为 false
                        }
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#5EA6FE'
                        }
                    }
                },
                {
                    value:30, name:'中国人保',
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 550,
                            y: 440,
                            r: 120,
                            colorStops: [{
                                offset: 0, color: 'rgba(0,222,215, 0.2)' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#37FFF9' // 100% 处的颜色
                            }],
                            global: true // 缺省为 false
                        }
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#37FFF9'
                        }
                    }
                },
                
            ]
        }
    ]
};

