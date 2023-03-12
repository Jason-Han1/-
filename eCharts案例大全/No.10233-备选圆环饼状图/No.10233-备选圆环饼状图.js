app.title = '环形图';

const colors = 
    [
        
    ]

option = {
    backgroundColor: '#333',
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['内部销售代表','转介服务商','外部代理人','战略合作伙伴'],
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
            name:'访问来源',
            type:'pie',
            radius: ['100', '140'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center',
                    formatter: (params)=>{
                        console.log(params);
                        return '{top| '+params.percent+'%}\n'+'{bottom| '+params.name+'}'
                    },
                    rich: {
                        top: {
                            fontSize: 18,
                            color: '#EBE806',
                            fontWeight: 400,
                            fontFamily: 'PingFangSC'
                        },
                        bottom: {
                            fontSize: 18,
                            color: '#EBE806',
                            padding: [0, 0, 12, 0],
                            fontWeight: 400,
                            fontFamily: 'PingFangSC'
                        }
                    }
                }
            },
            emphasis: {
                label: {
                    show: true
                }    
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {
                    value:12, name:'转介服务商',
                    highlight: true,
                    label: {
                      show: true  
                    },
                    itemStyle: {
                        color: {
                            type: 'radial',
                            r: 1,
                            colorStops: [{
                                offset: 0, color: '#EBE806' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(235,232,6, 0.2)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
                {
                    value:20, name:'外部代理人',
                    itemStyle: {
                        color: {
                            type: 'radial',
                            r: 1,
                            colorStops: [{
                                offset: 0, color: '#FF5624' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(255,86,36, 0.2)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
                {
                    value:10, name:'战略合作伙伴',
                    itemStyle: {
                        color: {
                            type: 'radial',
                            r: 1,
                            colorStops: [{
                                offset: 0, color: '#5EA6FE' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(94,166,254, 0.2)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
                {
                    value:68, name:'内部销售代表',
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 0.2,
                            y: 0.56,
                            r: 1,
                            colorStops: [{
                                offset: 0, color: '#37FFF9' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(0,222,215, 0.2)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                },
                
            ]
        }
    ]
};

