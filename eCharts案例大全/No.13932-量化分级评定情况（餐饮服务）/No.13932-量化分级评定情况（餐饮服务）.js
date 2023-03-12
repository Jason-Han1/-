options = [{
    backgroundColor:'#fff',
    title: {
        text:'量化分级评定情况（餐饮服务）',
        subtext: '',
        x: 'center', 
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['优秀']
    },
    tooltip: {
        trigger: 'item',
        formatter: "计算公式：占比率=（{b}企业数/有效企业数)<br/>*100% <br/>企业数：{c}<br/>"
    },
    series: [{
        name: '优秀',
        type: 'pie',
        radius: ['30%', '40%'],
         color:'#f1ca11',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 30,
            name: '优秀',
            label: {
                normal: {
                    formatter: '\n{d} %',
                    textStyle: {
                        fontSize:20,
                        color: '#555',
                    }
                }
            }
        }, {
            value: 0,/*
            name: '良好',*/
            label: {
                normal: {
                    formatter: '优秀',
                    textStyle: {
                        fontSize: 12,
                        color: '#555',
                    }
                }
            }
        },{
            value: 100,
            itemStyle: {
                normal: {
                    color: '#aaa'
                }
            },
            name:'良好',
            label: {
                 formatter: '良好',
                normal: {
                    textStyle: {
                        fontSize: 12,
                        color: '#555',
                    }
                }
            },
            hoverAnimation: false
        }]
    }]
},{
    backgroundColor:'#fff',
    title: {
        text:'明厨亮灶市场规模情况（餐饮服务）',
        subtext: '',
        x: 'center', 
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['不予受理']
    },
    tooltip: {
        trigger: 'item',
        formatter: "计算公式：占比率=（明厨亮灶数/有效企业数)<br/>*100% <br/>明厨亮灶数：{c}<br/>"
    },
    series: [{
        name: '明厨亮灶数',
        type: 'pie',
        radius: ['30%', '40%'],
         color:'#05c83c',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 30,
            name: '明厨亮灶数',
            label: {
                normal: {
                    formatter: '\n{d} %',
                    textStyle: {
                        fontSize:20,
                        color: '#555',
                    }
                }
            }
        }, {
            value: 0,
            name: '明厨亮灶实施率',
            label: {
                normal: {
                    formatter: '名厨亮灶实施环比率',
                    textStyle: {
                        fontSize: 12,
                        color: '#555',
                    }
                }
            }
        },{
            value: 100,
            itemStyle: {
                normal: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    }]
},
{
    backgroundColor:'#fff',
    title: {
        text:'色标管理市场规模情况（餐饮服务）',
        x: 'center', 
    },
    tooltip: {
        trigger: 'item',
        formatter: "计算公式：占比率=（色标管理开展数/有效企业数)<br/>*100% <br/>色标管理开展数：{c}<br/>"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['办结']
    },
    series: [{
        name: '办结',
        type: 'pie',
        radius: ['30%', '40%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        color:'#0fcff5',
        data: [{
            value: 100,/*
            name: '办结',*/
            label: {
                normal: {
                    formatter: '\n{d} %',
                    textStyle: {
                        fontSize:20,
                        color: '#555',
                    }
                }
            }
        },{
            value: 0,/*
            name: '办结',*/
            label: {
                normal: {
                    formatter: '办结',
                    textStyle: {
                        fontSize: 12,
                        color: '#555',
                    }
                }
            }
        }, {
            value: 180, 
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    }]
},{
    backgroundColor:'#fff',
    title: {
        text:'业务办理结果占比',
        x: 'center', 
    },
    
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['发证']
    },
    series: [{
        name: '发证',
        type: 'pie',
        radius: ['30%', '40%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        color:'#0fcff5',
        data: [{
            value: 300,
            name: '发证',
            label: {
                normal: {
                    formatter: '\n{d} %',
                    textStyle: {
                        fontSize:20,
                        color: '#555',
                    }
                }
            }
        }, {
            value: 0,
            name: '发证',
            label: {
                normal: {
                    formatter: '发证',
                    textStyle: {
                        fontSize: 12,
                        color: '#555',
                    }
                }
            }
        },{
            value: 210,
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    }]
}];