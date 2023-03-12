let dataMap = {};
dataMap.country = {
    'Vietnam': '越南',
    'Lao': '老挝',
    'Myanmar': '缅甸',
    'Thailand': '泰国',
    'Brunei': '文莱'
}

dataMap.values = {
    'Vietnam': {
        'town': 8,
        'village': 2
    },
    'Lao': {
        'town': 7,
        'village': 3
    },
    'Myanmar': {
        'town': 6,
        'village': 4
    },
    'Thailand': {
        'town': 5,
        'village': 5
    },
    'Brunei': {
        'town': 3,
        'village': 7
    }
};

dataMap.blood ={
    'Vietnam': {
        'town': 9,
        'village': 1
    },
    'Lao': {
        'town': 7,
        'village': 3
    },
    'Myanmar': {
        'town': 6,
        'village': 4
    },
    'Thailand': {
        'town': 5,
        'village': 5
    },
    'Brunei': {
        'town': 3,
        'village': 7
    }
}

option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            orient: 'vertical',
            autoPlay: false,
            inverse: true,
            left: null,
            right: '50%',
            top: 20,
            bottom: 20,
            width: 46,
            height: null,
            label: {
                normal: {
                    textStyle: {
                        color: '#00ccfe'
                    }
                }
            },
            symbol: 'none',
            lineStyle: {
                show: false
            },
            checkpointStyle: {
                borderWidth: 0,
                symbolSize: 0
            },
            controlStyle: {
                show: false
            },
            data: ['1 越南', '2 老挝', '3 缅甸', '4 泰国', '5 文莱']
        },
        tooltip: {
            trigger: 'item',
        },
        calculable: true,
        grid: {
            top: 80,
            bottom: 100,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        show: true,
                        formatter: function(params) {
                            return params.value.replace('\n', '');
                        }
                    }
                }
            }
        },
        title: {
            show: false,
            text: '饮水情况',
            left: 'center'
        },
        color : ['#3db5f5','#db8776'],
        series: [{
            name: '饮水情况',
            type: 'pie',
            center:['20%','50%'],
            clockWise: true,
            hoverAnimation: false,
            radius: ['24%', '25%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 1,
                label: {
                    normal: {
                        formatter: '饮水情况',
                        textStyle: {
                            color: '#3db5f5',
                            fontSize: 16
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#3db5f5',
                        borderColor: '#3db5f5',
                        borderWidth: 2
                    }
                },
                tooltip: {
                    show: false,
                    backgroundColor: 'rgba(0,0,0,0)',
                    textStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                }
            }]
        }, {
            type: 'pie',
            center:['20%','50%'],
            radius: ['30%', '40%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    formatter: '{b} {d}%',
                    textStyle: {
                        fontSize: 18,
                        color: '#3db5f5'
                    }
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#3db5f5'
                    }
                }
            },
            data: [{
                name: '城镇',
                itemStyle: {
                    normal: {
                        color: '#3db5f5'
                    }
                }
            }, {
                name: '农村',
                itemStyle: {
                    normal: {
                        color: '#ee8064'
                    }
                }
            }]
        },
        //此处新增一个饼状图
       {
              name:'贫血病',
              type:'pie',
              center:['75%','50%'],
              radius: ['30%', '35%'],
              avoidLabelOverlap: true,
              label: {
                  normal: {
                    formatter : '{b} {d}%',
                      textStyle: {
                        fontSize: 18,
                        color: '#00ccfe'
                    }
                  },
                  emphasis: {
                      show: true
                  }
              },
              labelLine: {
                  normal: {
                      lineStyle: {
                        color: '#00ccfe'
                    }
                  }
              },
              data:[
                  
              ]
        },
        //此处再新增一个饼状图
        {
            name: '贫血病',
            type: 'pie',
            center:['75%','50%'],
            clockWise: true,
            hoverAnimation: false,
            radius: ['24%', '25%'],
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                value: 1,
                label: {
                    normal: {
                        formatter: '贫血病',
                        textStyle: {
                            color: '#00ccfe',
                            fontSize: 16
                        }
                    }
                },
                itemStyle: {
                  normal: {
                    color: '#00ccfe',
                    borderColor: '#00ccfe',
                    borderWidth: 2
                  }
                },
                tooltip: {
                  backgroundColor: 'rgba(0,0,0,0)',
                  textStyle: {
                    color: 'rgba(0,0,0,0)'
                  }
                }
            }]
        },
        
        ]
    },
    options: [{
        series: [{}, {
            name: dataMap.country.Vietnam,
            data: [{
                value: dataMap.values.Vietnam.town,
                name: '城镇',
                itemStyle: {
                    normal: {
                        color: '#3db5f5'
                    }
                }
            }, {
                value: dataMap.values.Vietnam.village,
                name: '农村',
                itemStyle: {
                    normal: {
                        color: '#ee8064'
                    }
                }
            }]
        },
        {
            name: dataMap.country.Vietnam,
            data: [{value:dataMap.blood.Vietnam.town, name:'城镇'},
                  {value:dataMap.blood.Vietnam.village, name:'农村'}]
        },{}
        ]
    }, {
        series: [{}, {
            name: dataMap.country.Lao,
            data: [{
                value: dataMap.values.Lao.town,
                name: '城镇',
                itemStyle: {
                    normal: {
                        color: '#3db5f5'
                    }
                }
            }, {
                value: dataMap.values.Lao.village,
                name: '农村',
                itemStyle: {
                    normal: {
                        color: '#ee8064'
                    }
                }
            }]
        },
        {
            name: dataMap.country.Lao,
            data: [{value:dataMap.blood.Lao.town, name:'城镇'},
                  {value:dataMap.blood.Lao.village, name:'农村'}]
        },{}
        
        
        ]
    }, {
        series: [{}, {
            name: dataMap.country.Myanmar,
            data: [{
                value: dataMap.values.Myanmar.town,
                name: '城镇',
                itemStyle: {
                    normal: {
                        color: '#3db5f5'
                    }
                }
            }, {
                value: dataMap.values.Myanmar.village,
                name: '农村',
                itemStyle: {
                    normal: {
                        color: '#ee8064'
                    }
                }
            }]
        },
        {
            name: dataMap.country.Myanmar,
            data: [{value:dataMap.blood.Myanmar.town, name:'城镇'},
                  {value:dataMap.blood.Myanmar.village, name:'农村'}]
        },{}
        
        
        ]
    }, {
        series: [{}, {
            name: dataMap.country.Thailand,
            data: [{
                value: dataMap.values.Thailand.town,
                name: '城镇',
                itemStyle: {
                    normal: {
                        color: '#3db5f5'
                    }
                }
            }, {
                value: dataMap.values.Thailand.village,
                name: '农村',
                itemStyle: {
                    normal: {
                        color: '#ee8064'
                    }
                }
            }]
        },
        {
            name: dataMap.country.Thailand,
            data: [{value:dataMap.blood.Thailand.town, name:'城镇'},
                  {value:dataMap.blood.Thailand.village, name:'农村'}]
        },{}
        
        
        ]
    }, {
        series: [{}, {
            name: dataMap.country.Brunei,
            data: [{
                value: dataMap.values.Brunei.town,
                name: '城镇',
                itemStyle: {
                    normal: {
                        color: '#3db5f5'
                    }
                }
            }, {
                value: dataMap.values.Brunei.village,
                name: '农村',
                itemStyle: {
                    normal: {
                        color: '#ee8064'
                    }
                }
            }]
        },
        {
            name: dataMap.country.Brunei,
            data: [{value:dataMap.blood.Brunei.town, name:'城镇'},
                  {value:dataMap.blood.Brunei.village, name:'农村'}]
        },{}
        
        
        ]
    }]
};