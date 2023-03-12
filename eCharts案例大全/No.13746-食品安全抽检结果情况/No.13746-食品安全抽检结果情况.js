option = {
    backgroundColor:'#fff',
    title:{
        text:'日常监管检查情况分析'
    },
    tooltip: {
       
    },
    
    series: [{
        name: '计算公式：',
        type: 'pie',
        radius: ['18%', '22%'],
        center:['50%','50%'],
        color:'#FF8C00',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 29,
            name: '异议成立批次数',
            
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
                 formatter: "{a} <br/>异议成立率=({b}/异议成立批次数)*100%<br/> 异议提出批次数 : {c}"
            }
        }, {
            value: 9,
            name: '异议提出批次数',
            label: {
                normal: {
                    formatter: '\n异议成立率',
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
        name: '计算公式：',
        type: 'pie',
        radius: ['18%', '22%'],
        center:['30%','50%'],
        color:'#A2B5CD',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 38,
            name: '抽检不合格批次数',
            
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
                 formatter: "{a} <br/>异议提出率=({b}/异议提出批次数)*100%<br/> 抽检不合格批次数 : {c}"
            }
        }, {
            value: 41,
            name: '异议提出批次数',
            label: {
                normal: {
                    formatter: '\n异议提出率',
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
        name: '计算公式:',
        type: 'pie',
        radius: ['18%', '22%'],
        center:['10%','50%'],
        color:'#00CDCD',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 79,
            name: '抽检合格批次数',
            
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
                 formatter: "{a} <br/>抽检不合格率=({b}/抽检不合格批次数)*100%<br/> 抽检合格批次数 : {c}"
            }
        }, {
            value: 59,
            name: '抽检不合格批次数',
            label: {
                normal: {
                    formatter: '\n抽检不合格率',
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