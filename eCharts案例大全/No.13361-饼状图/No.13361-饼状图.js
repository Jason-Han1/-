
option = {
    title: {
        //text: '直销有效客户分布'
    },
    //backgroundColor: '#fff',
    tooltip: {
        //trigger: 'item',
        //formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        //orient: 'vertical',
        x: 'center',
        data: ['银保', 'Affinity', 'DTC', '直销', '代理', '团险',],
        textStyle: {
            color: "#555"
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
            
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['0%', '30%'],
            data: [{
                    value: 39,
                    name: '银保',
                    itemStyle: {
                        normal: {
                            color: "#5d73f6"
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
                    value: 233,
                    name: 'Affinity',
                    itemStyle: {
                        normal: {
                            color: "#8092f8"
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
                    value: 80,
                    name: 'DTC',
                    itemStyle: {
                        normal: {
                            color: "#b6c1fc"
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
                    value: 24,
                    name: '直销',
                    itemStyle: {
                        normal: {
                            color: "#f67d6d"
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
                    value: 16,
                    name: '代理',
                    itemStyle: {
                        normal: {
                            color: "#fbada2"
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
                    value: 30,
                    name: '团险',
                    itemStyle: {
                        normal: {
                            color: "#ffd3d0"
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