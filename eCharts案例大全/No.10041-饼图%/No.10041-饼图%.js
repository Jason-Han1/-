option = {
    backgroundColor:'#fff',
    title:{
        text:'各类型注销数量占比'
    },
    tooltip: {
    },
    
    series: [{
        name: '吊销注销',
        type: 'pie',
        radius: ['18%', '22%'],
        center:['10%','50%'],
        color:'#FF4500',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 32,
            name: '吊销注销数',
            
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 18
                    }
                }
            },
            tooltip:{
                 trigger: 'item',
                 formatter: "{a} <br/>计算公式:占比率=({b}/注销总数)*100%<br/> 吊销注销数 : {c}"
            }
        }, {
            value: 72,
            name: '其他类型数',
            label: {
                normal: {
                    formatter: '\n吊销注销占比',
                    textStyle: {
                        color: '#555',
                        fontSize: 13
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
        }]
    },{
        name: '到期注销',
        type: 'pie',
        radius: ['18%', '22%'],
        center:['30%','50%'],
        color:'#473C8B',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 54,
            name: '到期注销数',
            
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 18
                    }
                }
            },
            tooltip:{
                 trigger: 'item',
                 formatter: "{a} <br/>计算公式:占比率=({b}/注销总数)*100%<br/> 到期注销数 : {c}"
            }
        }, {
            value: 50,
            name: '其他类型数',
            label: {
                normal: {
                    formatter: '\n到期注销占比',
                    textStyle: {
                        color: '#555',
                        fontSize: 13
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
        }]
    },{
        name: '申请注销',
        type: 'pie',
        radius: ['18%', '22%'],
        center:['50%','50%'],
        color:'#00EE76',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 18,
            name: '申请注销数',
            
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 18
                    }
                }
            },
            tooltip:{
                 trigger: 'item',
                 formatter: "{a} <br/>计算公式:占比率=({b}/注销总数)*100%<br/> 申请注销数 : {c}"
            }
        }, {
            value: 86,
            name: '其他类型数',
            label: {
                normal: {
                    formatter: '\n申请注销占比',
                    textStyle: {
                        color: '#555',
                        fontSize: 13
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
        }]
    }]
};