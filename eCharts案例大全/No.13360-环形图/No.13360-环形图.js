
option = {
    title: {
        //text: '直销有效客户分布'
    },
    backgroundColor: '#00265f',
    tooltip: {
        //trigger: 'item',
        //formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        //orient: 'vertical',
        x: 'center',
        data: ['18-24岁', '25-29岁', '30-39岁', '40-49岁', '50-59岁', '60岁+','男性','女性'],
        textStyle: {
            color: "#fff"
        }
    },
    series: [{
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: ['20%', '35%'],

            label: {
                normal: {
                    position: 'inner',
                    formatter: '{b}\n {d}%',
                    fontSize:14
                }
            },
            tooltip:{
                 trigger: 'item'
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                    value: 222,
                    name: '男性',
                    itemStyle: {
                        normal: {
                            color: "#5045f6"
                        }
                    }
                },
                {
                    value: 328,
                    name: '女性',
                    itemStyle: {
                        normal: {
                            color: "#ff4343"
                        }
                    }
                }
            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            data: [{
                    value: 9,
                    name: '18-24岁',
                    itemStyle: {
                        normal: {
                            color: "#ffed25"
                        }
                    },
                    label: {
                        normal: {
                            fontSize:14,
                            formatter: '{d}%'
                        }
                    }
                },
                {
                    value: 73,
                    name: '25-29岁',
                    itemStyle: {
                        normal: {
                            color: "#45dbf7"
                        }
                    },
                    label: {
                        normal: {
                            fontSize:14,
                            formatter: '{d}%'
                        }
                    }
                },
                {
                    value: 290,
                    name: '30-39岁',
                    itemStyle: {
                        normal: {
                            color: "#0089fa"
                        }
                    },
                    label: {
                        normal: {
                            fontSize:14,
                            formatter: '{d}%'
                        }
                    }
                },
                {
                    value: 134,
                    name: '40-49岁',
                    itemStyle: {
                        normal: {
                            color: "#ba58ff"
                        }
                    },
                    label: {
                        normal: {
                            fontSize:14,
                            formatter: '{d}%'
                        }
                    }
                },
                {
                    value: 39,
                    name: '50-59岁',
                    itemStyle: {
                        normal: {
                            color: "#fe9336"
                        }
                    },
                    label: {
                        normal: {
                            fontSize:14,
                            formatter: '{d}%'
                        }
                    }
                },
                {
                    value: 5,
                    name: '60岁+',
                    itemStyle: {
                        normal: {
                            color: "#3eff74"
                        }
                    },
                    label: {
                        normal: {
                            fontSize:14,
                            formatter: '{d}%'
                        }
                    }
                }
            ]
        }
    ]
};