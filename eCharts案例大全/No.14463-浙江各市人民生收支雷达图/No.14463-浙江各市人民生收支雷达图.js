options=[
    {
        title: {
            text: '浙江各市2016年人民生收支雷达图',
            padding:[0,0,0,80]
        },
        tooltip: {},
        legend: {
            data: ['收入（单位：元）', '支出（单位：元）'],
            padding:30
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
               }
            },
            indicator: [
               { name: '嘉兴市', max: 55000},
               { name: '金华市', max: 55000},
               { name: '宁波市', max: 55000},
               { name: '绍兴市', max: 55000},
               { name: '温州市', max: 55000},
            ]
        },
        series: [{
            name: '收入VS支出',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [38961.5, 37159, 51560, 50305, 39601],
                    name : '收入（单位：元）',
                    label: {
                            normal: {
                                show: true,
                                formatter:function(params) {
                                    return params.value;
                                }
                            }
                        }
                },
                 {
                    value : [23588.5, 24961, 31584, 28858, 26234],
                    name : '支出（单位：元）',
                    label: {
                            normal: {
                                show: true,
                                formatter:function(params) {
                                    return params.value;
                                }
                            }
                        }
                }
            ]
        }]
    },
    {
        title: {
            text: '浙江各市2015年人民生收支雷达图',
            padding:[0,0,0,80]
        },
        tooltip: {},
        legend: {
            data: ['收入（单位：元）', '支出（单位：元）'],
            padding: 30
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
               }
            },
            indicator: [
               { name: '嘉兴市', max: 55000},
               { name: '金华市', max: 55000},
               { name: '宁波市', max: 55000},
               { name: '绍兴市', max: 55000},
               { name: '温州市', max: 55000},
            ]
        },
        series: [{
            name: '收入VS支出',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [33318.5, 34378, 47852, 28156, 36459],
                    name : '收入（单位：元）',
                    label: {
                            normal: {
                                show: true,
                                formatter:function(params) {
                                    return params.value;
                                }
                            }
                        }
                },
                 {
                    value : [21533, 22670, 29645, 16587, 24799],
                    name : '支出（单位：元）',
                    label: {
                            normal: {
                                show: true,
                                formatter:function(params) {
                                    return params.value;
                                }
                            }
                        }
                }
            ]
        }]
    },
    {
        title: {
            text: '浙江各市2014年人民生收支雷达图',
            padding:[0,0,0,80]
        },
        tooltip: {},
        legend: {
            data: ['收入（单位：元）', '支出（单位：元）'],
            padding: 30
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
               }
            },
            indicator: [
               { name: '嘉兴市', max: 55000},
               { name: '金华市', max: 55000},
               { name: '宁波市', max: 55000},
               { name: '绍兴市', max: 55000},
               { name: '温州市', max: 55000},
            ]
        },
        series: [{
            name: '收入VS支出',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [30681, 31599, 44155, 43167, 29952],
                    name : '收入（单位：元）',
                    label: {
                            normal: {
                                show: true,
                                formatter:function(params) {
                                    return params.value;
                                }
                            }
                        }
                },
                 {
                    value : [19597.5, 20954, 27893, 26231, 20702],
                    name : '支出（单位：元）',
                    label: {
                            normal: {
                                show: true,
                                formatter:function(params) {
                                    return params.value;
                                }
                            }
                        }
                }
            ]
        }]
    },
    {
        title: {
            text: '浙江各市2013年人民生收支雷达图',
            padding:[0,0,0,80]
        },
        tooltip: {},
        legend: {
            data: ['收入（单位：元）', '支出（单位：元）'],
            padding: 30
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
               }
            },
            indicator: [
               { name: '嘉兴市', max: 55000},
               { name: '金华市', max: 55000},
               { name: '宁波市', max: 55000},
               { name: '绍兴市', max: 55000},
               { name: '温州市', max: 55000},
            ]
        },
        series: [{
            name: '收入VS支出',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [38961.5, 37159, 51560, 50305, 39601],
                    name : '收入（单位：元）',
                    label: {
                            normal: {
                                show: true,
                                formatter:function(params) {
                                    return params.value;
                                }
                            }
                        }
                },
                 {
                    value : [23588.5, 24961, 31584, 28858, 26234],
                    name : '支出（单位：元）',
                    label: {
                            normal: {
                                show: true,
                                formatter:function(params) {
                                    return params.value;
                                }
                            }
                        }
                }
            ]
        }]
    }
]