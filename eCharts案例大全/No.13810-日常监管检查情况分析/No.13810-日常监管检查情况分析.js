option = {
    backgroundColor:'#fff',
     tooltip: { },
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
                 formatter: "{a}=({b}/检查违规企业数)*100%<br/> 完成整改企业数 : {c}"
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
            tooltip:{
                 trigger: 'item',
                 formatter: "{a}=(完成整改企业数/检查违规企业数)*100%<br/> {b} : {c}"
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
        name: '检查违规率',
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
                 formatter: "{a}=({b}/检查企业数)*100%<br/> 检查违规企业数 : {c}"
            }
        }, {
            value: 41,
            name: '检查未违规企业数',
            label: {
                normal: {
                    formatter: '\n检查违规率',
                    textStyle: {
                        color: '#555',
                        fontSize: 13
                    }
                }
            },
            tooltip:{
                 trigger: 'item',
                 formatter: "{a}=(检查违规企业数/检查企业数)*100%<br/> {b} : {c}"
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
            name: '检查企业数',
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
                 formatter: "{a}=({b}/持证企业数)*100%<br/> 检查企业数 : {c}"
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
            tooltip:{
                 trigger: 'item',
                 formatter: "{a}=(检查企业数/持证企业数)*100%<br/> {b} : {c}"
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