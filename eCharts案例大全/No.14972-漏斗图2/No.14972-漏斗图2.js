option = {
    color: ['#F8F872', '#76FFE7', '#ADF25C', '#5B8DFF', '#ADDD8E', '#41D5F2', '#0BA1FC'],
    toolbox: {
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    series: [{
        name: '',
        type: 'funnel',
        left: '10%',
        width: '80%',
        gap: 10,
        label: {
            normal: {
                position: 'left',
                formatter: '{b}',
                textStyle: {
                    fontSize: 22
                }
            },
            emphasis: {
                position: 'inside',
                formatter: '{b}',
                textStyle: {
                    fontSize: 22
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                opacity: 0.7
            }
        },
        data: [{
            value: 80,
            reveal: 1107,
            name: '祖庙'
        }, {
            value: 60,
            reveal: 1033,
            name: '石湾'
        }, {
            value: 40,
            reveal: 786,
            name: '张槎'
        }, {
            value: 20,
            reveal: 725,
            name: '南庄',
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            }
        }]
    }, {
        name: '',
        type: 'funnel',
        left: '10%',
        width: '80%',
        gap: 10,
        label: {
            normal: {
                position: 'inside',
                formatter:function(obj){
                    return obj.data.reveal
                },
                textStyle: {
                    color: '#fff',
                    fontSize: 22
                }
            },
            emphasis: {
                position: 'inside',
                formatter: '{b}'
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                opacity: 0.5,
                borderColor: '#fff',
                borderWidth: 2
            }
        },
        data: [{
            value: 80,
            reveal: 1265,
            name: '里水'
        }, {
            value: 60,
            reveal: 783,
            name: '西樵'
        }, {
            value: 40,
            reveal: 678,
            name: '九江'
        }, {
            value: 20,
            reveal: 536,
            name: '丹灶',
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false,
                    length: 30,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                },
                emphasis: {
                    show: true,
                    length: 30,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                }
            }
        }]
    }]
};