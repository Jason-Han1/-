option = {
    title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ["物理", "化学", "生物", "政治", "历史", "地理"]
    },
    series : [
        {
            name: '单科',
            type: 'pie',
            radius : ['5%', '10%'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
           
            data:[
                {
                    value:'967',
                    name:'物理',
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            normal: {
                                color: '#dc1439'
                            }
                        }
                    }
                },
                {
                    value:'2800', 
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    }
                }
            ]
        },  {
            name: '化学',
            type: 'pie',
            radius : ['15%', '20%'],
            data:[
                {
                    value:'825',
                    name:'化学',
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            normal: {
                                color: '#dc1439'
                            }
                        }
                    }
                },
                {
                    value:'500', 
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    }
                }
            ]
           
        },  {
            name: '生物',
            type: 'pie',
            radius : ['25%', '30%'],
            data:[
                // {value:1078, name:'生物'}
                {
                    value:'1078',
                    name:'生物',
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            normal: {
                                color: '#dc1439'
                            }
                        }
                    }
                },
                {
                    value:'800', 
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    }
                }
                
            ]
        },  {
            name: '政治',
            type: 'pie',
            radius : ['35%', '40%'],
            data:[
                // {value:981, name:'政治'}
                {
                    value:'981',
                    name:'政治',
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            normal: {
                                color: '#dc1439'
                            }
                        }
                    }
                },
                {
                    value:'900', 
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    }
                }
            ]
        },  {
            name: '历史',
            type: 'pie',
            radius : ['45%', '50%'],
            data:[
                // {value:877, name:'历史'}
                {
                    value:'877',
                    name:'历史',
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            normal: {
                                color: '#dc1439'
                            }
                        }
                    }
                },
                {
                    value:'500', 
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    }
                }
            ]
        },  {
            name: '地理',
            type: 'pie',
            radius : ['55%', '60%'],
            data:[
                // {value:939, name:'地理'}
                {
                    value:'939',
                    name:'地理',
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)',
                            normal: {
                                color: '#dc1439'
                            }
                        }
                    }
                },
                {
                    value:'200', 
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    }
                }
            ]
        },
    ]
};

