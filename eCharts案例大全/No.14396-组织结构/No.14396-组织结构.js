option = {
    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
        offset: 0,
        color: '#f7f8fa'
    }, {
        offset: 1,
        color: '#cdd0d5'
    }]),

    tooltip: {},
    legend: [{
        formatter: function(name) {
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },
        tooltip: {
            show: true
        },
        selectedMode: 'false',
        bottom: 20,
        data: ['A', 'B', 'C', 'D']
    }],
    animationDuration: 3000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '广州大学',
        type: 'graph',
        layout: 'force',
        // edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [0, 10],
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 10
                },
                formatter: function(p){
                    console.log(p)
                    return "{c}"
                }
                
            }
        },
        force: {
            repulsion: 1000
        },
        data: [{
            "name": "A",
            "symbolSize": 100,
            "draggable": "true",
            "category": "HIGH",
            "value": 27
        }, {
            "name": "B",
            "value": 30,
            "symbolSize": 60,
            "category": "HIGH",
            "draggable": "true"
        }, {
            "name": "C",
            "symbolSize": 30,
            "category": "LOW",
            "draggable": "true",
            "value": 1
        }, {
            "name": "D",
            "symbolSize": 30,
            "category": "SAFE",
            "draggable": "true",
            "value": 1
        }, {
            "name": "E",
            "symbolSize": 30,
            "category": "SAFE",
            "draggable": "true",
            "value": 1
        }, {
            "name": "F",
            "symbolSize": 50,
            "category": "SAFE",
            "draggable": "true",
            "value": 1
        }, {
            "name": "H",
            "symbolSize": 30,
            "category": "HIGH",
            "draggable": "true",
            "value": 15
        }, {
            "name": "G",
            "symbolSize": 30,
            "category": "HIGH",
            "draggable": "true",
            "value": 15
        },
        {
            "name": "BB",
            "value": 30,
            "symbolSize": 60,
            "category": "HIGH",
            "draggable": "true"
        },
        {
            "name": "CC",
            "value": 30,
            "symbolSize": 60,
            "category": "HIGH",
            "draggable": "true"
        },
        {
            "name": "EE",
            "value": 30,
            "symbolSize": 60,
            "category": "MED",
            "draggable": "true"
        },{
            "name": "FF",
            "value": 30,
            "symbolSize": 60,
            "category": "MED",
            "draggable": "true"
        },{
            "name": "GG",
            "value": 30,
            "symbolSize": 60,
            "category": "MED",
            "draggable": "true"
        },
        {
            "name": "DD",
            "value": 30,
            "symbolSize": 60,
            "category": "LOW",
            "draggable": "true"
        }],
        links: [{
            "source": "A",
            "target": "B",
            'value':22
        }, {
            "source": "A",
            "target": "C"
        },  
        {
            "source": "A",
            "target": "BB"
        },
        {
            "source": "A",
            "target": "CC"
        },{
            "source": "A",
            "target": "DD"
        }, {
            "source": "A",
            "target": "EE"
        },  {
            "source": "A",
            "target": "FF"
        }, {
            "source": "A",
            "target": "GG"
        }, 
        {
            "source": "C",
            "target": "D"
        }, {
            "source": "C",
            "target": "E"
        }, {
            "source": "E",
            "target": "F"
        }, {
            "source": "B",
            "target": "G"
        }, {
            "source": "B",
            "target": "H"
        }, {
            "source": "G",
            "target": "I"
        }],
        categories: [{ //节点分类的类目
            'name': 'HIGH',
            'itemStyle ':{
                'normal':{
                    'color': '#5ac37d',
                }
            }
        }, {
            'name': 'MED'
        }, {
            'name': 'LOW'
        }, {
            'name': 'SAFE'
        }],
        focusNodeAdjacency: true,
        roam: true,
        label: {
            normal: {

                show: true,
                position: 'inside',
                formatter: function(p){
                    console.log('label---', p)
                    return '节点名称:'+p.name+'\n'+'资产数量:'+p.value
                }

            }
        },
        lineStyle: {
            normal: {
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        }
    }]
};