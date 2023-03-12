option = {
    backgroundColor:'#fff',
    title:{
        text:'投诉举报办理情况'
    },
    tooltip: {
       
    },
    
    series: [{
        name: '完成整改率',
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
            value: 29,
            name: '完成整改企业数',
            
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
                 formatter: "{a} <br/>计算公式:完成整改率=({b}/检查违规企业数)*100%<br/> 完成整改企业数 : {c}"
            }
        }, {
            value: 9,
            name: '未完成整改企业数',
            label: {
                normal: {
                    formatter: '\n完成整改率',
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
        name: '检查企业违规率',
        type: 'pie',
        radius: ['18%', '22%'],
        center:['30%','50%'],
        color:'#FF4500',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 38,
            name: '检查违规企业数',
            
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
                 formatter: "{a} <br/>计算公式:检查企业违规率=({b}/检查企业数)*100%<br/> 检查违规企业数 : {c}"
            }
        }, {
            value: 41,
            name: '检查未违规企业数',
            label: {
                normal: {
                    formatter: '\n检查企业违规率',
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
        name: '检查覆盖率',
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
            name: '已检查企业数',
            
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
                 formatter: "{a} <br/>计算公式:检查覆盖率=({b}/检查企业数)*100%<br/> 实际业数 : {c}"
            }
        }, {
            value: 59,
            name: '未检查企业数',
            label: {
                normal: {
                    formatter: '\n检查覆盖率',
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