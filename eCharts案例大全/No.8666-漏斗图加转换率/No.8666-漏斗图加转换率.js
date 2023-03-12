var nodes = [{ 
        x: '300',
        y: '-9',
        name: '点1',
    },
    {
        x: '350',
        y: '-9',
        name: '点2',
    },
    {
        x: '350',
        y: '-22',
        name: '点3',
    },
    {
        x: '300',
        y: '-22',
        name: '点4',
    },
   
]
var links = [{
        source: '点1',
        target: '点2',
        name: '注册人数'
    },
    {
        source: '点2',
        target: '点3',
        name: '转换率(25.61%)'
    },
    {
        source: '点3',
        target: '点4',
        name: '支付人数'
    },
    
]
var charts = {
    nodes: [],
    links: [],
    linesData: []
}
var dataMap = new Map()
for (var j = 0; j < nodes.length; j++) {
    var x = parseInt(nodes[j].x)
    var y = parseInt(nodes[j].y)
    var node = {
        name: nodes[j].name,
        value: [x, y],
        symbolSize: 0,
        alarm: nodes[j].alarm,
        itemStyle: {
            normal: {
                color: '#12b5d0',
            }
        }
    }
    dataMap.set(nodes[j].name, [x, y])
    charts.nodes.push(node)
}
for (var i = 0; i < links.length; i++) {
    var link = {
        source: links[i].source,
        target: links[i].target,
        label: {
            normal: {
                show: true,
                formatter: links[i].name
            }
        },
        lineStyle: {
            normal: {
                color: '#53b8e2'
            }
        }
    }
    charts.links.push(link)
    
}


option = {
    
    // backgroundColor: "#1b2735",
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: {
        show: false,
        type: 'value'
    },
    "legend": {
        "top": "bottom",
        "left": "center",
        "textStyle": {
            "color": "#000"
        },
        "itemHeight": 10,
        "data":  ['访问人数','注册人数','下单人数','支付人数']
    },
    "grid": {
        "top": 24,
        "left": "2%",
        "right": 20,
        "bottom": 30,
        "containLabel": true,
        "borderWidth": 0.5
    },
    series: [
        {
        type: 'graph',
        layout: 'none',
        coordinateSystem: 'cartesian2d',
        symbolSize: 0,
        label: {
            normal: {
                show: true,
                position: 'bottom',
                color: '#00FFFF'
            }
        },
        lineStyle: {
            normal: {
                width: 1,
                shadowColor: 'none'
            }
        },
        data: charts.nodes,
        links: charts.links,
        
    },
    {
            top:0,
            
            name: '',
            type: 'funnel',
            left: '10%',
            width: '80%',
            gap: 10,
            minSize: '40%',
            maxSize: '100%',
            label: {
                normal: {
                    color: '#353535',
                    position: 'left',
                    formatter: '{b}\n{c}',
                    lineStyle: {
                        width: 2,
                        align:'center'
                    }
                   
                }
            },
            labelLine: {
                normal: {
                    length: 40,
                    position: 'left',
                    
                    lineStyle: {
                        width: 2
                        
                    }
                }
            },
            itemStyle: {
                normal: {
                   
                }
            },
            data: [
                {value: 952358, name: '访问人数', 
                    itemStyle: {
                        normal: {
                            color: '#398bd8'
                        }
                    },
                   labelLine:{
                       normal: {
                           lineStyle: {
                               shadowColor: '#398bd8',
                               shadowOffsetX: 1
                           }
                       }
                   }
                },
                {value: 394841, name: '注册人数',
                     itemStyle: {
                        normal: {
                            color: '#4e99de'
                        }
                    },
                     labelLine:{
                       normal: {
                           lineStyle: {
                               shadowColor: '#4e99de',
                               shadowOffsetX: 1
                           }
                       }
                   }
                },
                {value: 63497, name: '下单人数',
                     itemStyle: {
                        normal: {
                            color: '#4da7db'
                        }
                    },
                     labelLine:{
                       normal: {
                           lineStyle: {
                               shadowColor: '#4da7db',
                               shadowOffsetX: 1
                           }
                       }
                   }
                },
                {value: 52582, name: '支付人数',
                     itemStyle: {
                        normal: {
                            color: '#53b8e2'
                        }
                    },
                     labelLine:{
                       normal: {
                           lineStyle: {
                               shadowColor: '#53b8e2',
                               shadowOffsetX: 1
                           }
                       }
                   }
                }
            ]
        },
        {
            name: '',
            type: 'funnel',
            top:0,
            gap: 10,
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{b}：({c}%)',
                    textStyle: {
                        color: '#fff'
                    }
                }
              
            },
            labelLine: {
                normal: {
                  
            
                }
            },
            itemStyle: {
                normal: {
                    color: 'transparent',
                    borderWidth:0,
                    opacity: 0
                }
            },
            data: [
                {value: 100, name: '访问人数'
            
                },
                {value: 48.23, name: '注册人数'},
                {value: 36.62, name: '下单人数'},
                {value: 18.15, name: '支付人数'},
            ]
        }
    ]
};
