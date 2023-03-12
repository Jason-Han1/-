options = [{
    backgroundColor:'#fff',
    title: {
        text:'业务办理结果占比',
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
        formatter: "计算公式：占比率=（不予受理数/审批申请数)<br/>*100% <br/>不予受理数：{c}<br/>"
    },
    series: [{
        name: '不予受理',
        type: 'pie',
        radius: ['30%', '40%'],
         color:'#f1ca11',
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 120,
            name: '不予受理',
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
            name: '不予受理',
            label: {
                normal: {
                    formatter: '不予受理',
                    textStyle: {
                        fontSize: 12,
                        color: '#555',
                    }
                }
            }
        },{
            value: 500,
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
},
{
    backgroundColor:'#fff',
    title: {
        text:'业务办理结果占比',
        x: 'center', 
    },
    tooltip: {
        trigger: 'item',
        formatter: "计算公式：占比率=（办结数/审批申请数)<br/>*100% <br/>办结数：{c}<br/>"
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
        color:'#05c83c',
        data: [{
            value: 300,
            name: '办结',
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
            value: 0,
            name: '办结',
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
            value: 200, 
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
            value: 160,
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
            value: 140,
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
        text:'举报环节立案占比',
        subtext: '餐饮服务/使用环节立案率',
        x: 'center', 
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['立案率']
    },
    series: [{
        name: '餐饮服务/使用环节立案率',
        type: 'pie',
        radius: ['30%', '40%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        color:'#f11111',
        data: [{
            value: 0,
            name: '立案率',
            label: {
                normal: {
                    formatter: '立案率',
                    textStyle: {
                        fontSize: 16,
                        color: '#555',
                    }
                }
            }
        },{
            value: 120,
            name: '立案率',
            label: {
                normal: {
                    formatter: '\n{d} %',
                    textStyle: {
                        fontSize:16,
                        color: '#555',
                    }
                }
            }
        }, {
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