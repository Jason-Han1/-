let categories = [
            {
                name: '主要人物',
                icon: "circle",
                itemStyle: {
                    normal: {
                        color: "#c23531",
                    }
                }
            },{
                name: '社区关系',
                icon: "circle",
                itemStyle: {
                    normal: {
                        color: "#e488d6",
                    }
                }
            },{
                name: '同学关系',
                icon: "circle",
                itemStyle: {
                    normal: {
                        color: "#45bb95",
                    }
                }
            },{
                name: '团伙关系',
                icon: "circle",
                itemStyle: {
                    normal: {
                        color: "#e65955",
                    }
                }
            }
];
let data = [
    {
        category: 0,
        name: '张大伟(主)',
        x: 250,
        y:351,
    },
    {  
        category: 1,
        name: '社区关系',
        x: 251,
        y: 350,
        itemStyle: {normal: {borderColor: "#E7ADDE"}}
    },
    {
        category: 1,
        name: '邻居',
        x: 252,
        y: 350,
        itemStyle: {normal: {borderColor: "#E7ADDE"}}
    },
    {
        category: 2,
        name: '小学同学',
        x: 252,
        y: 351,
        itemStyle: {normal: {borderColor: "#69CAAB"}}
    },
    {
        category: 2,
        name: '同学关系',
        x: 251,
        y: 351,
        itemStyle: {normal: {borderColor: "#69CAAB"}}
    }
    ,
    {
        category: 3,
        name: '团伙关系',
        x: 251,
        y: 352,
        itemStyle: {normal: {borderColor: "#EE9492"}}
    }
];
let links = [
    {
        relationId: 1,
        lineStyle:{normal: {color: "#E488D6", borderColor: "#E7ADDE"}},
        source: '张大伟(主)',
        target: '社区关系'
    },
    {
        relationId: 2,
        lineStyle:{normal: {color: "#E488D6", borderColor: "#E7ADDE"}},
        source: '社区关系',
        target: '邻居'
    },
    {
        relationId: 3,
        lineStyle:{normal: {color: "#45BB95", borderColor: "#69CAAB"}},
        source: '张大伟(主)',
        target: '同学关系'
    },
    {
        relationId: 4,
        lineStyle:{normal: {color: "#E65955", borderColor: "#EE9492"}},
        source: '张大伟(主)',
        target: '团伙关系'
    },
    {
        relationId: 5,
        lineStyle:{normal: {color: "#45BB95", borderColor: "#69CAAB"}},
        source: '同学关系',
        target: '小学同学'
    }
];
option = {
    title: {
        text: ''
    },
    tooltip: {},
    label: {
        padding: 10,
        left: 0,
        top: 0,
        textStyle: {
          color: 'white'
        },
        normal: {
            show: true,
            textStyle: {
                fontSize: 12
            },
        }
    },
    legend: {
        width: 500,
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.71)',
        left: 0,
        top: 0,
        textStyle: {
          color: 'white'
        },
        show: true,
        data: ["主要人物", "社区关系", '同学关系', '团伙关系']
    },
    series: [
        {
            name: '人物关系',
            top: 18,
            type: 'graph',
            symbolSize: 45,
            lineStyle: {
                normal: {
                  color: 'gray',
                  curveness: 0.2,
                  opacity: 1,
                  width: 1.5
    
                }
            },
            itemStyle: {
                normal: {
                  borderWidth: 5,
                  borderColor: 'rgba(255, 0, 0, 0.51)',
                }
            },
            categories: categories,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 16
                    },
                }
            },
            edgeSymbolSize: [4, 50],
            data: data,
            links: links
        }
    ]
};