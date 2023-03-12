options = [{
    title: {
        text:'举报环节立案占比',
        subtext: '研制环节立案率',
        x: 'center', 
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['立案率']
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [{
        name: '研制环节立案率',
        type: 'pie',
        radius: ['30%', '40%'],
         color:'#f1ca11',
        label: {
            normal: {
                position: 'center'
            }
        },
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
            value: 30,
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
            value: 100,
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
    title: {
        text:'举报环节立案占比',
        subtext: '生产环节立案率',
        x: 'center', 
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['立案率']
    },
    series: [{
        name: '生产环节立案率',
        type: 'pie',
        radius: ['30%', '40%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        color:'#05c83c',
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
            value: 100,
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
    title: {
        text:'举报环节立案占比',
        subtext: '流通环节立案率',
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
        name: '流通环节立案率',
        type: 'pie',
        radius: ['30%', '40%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        color:'#0fcff5',
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
            value: 300,
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
},{
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