option = {
    title: {
        text: 'Graph 简单示例'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series : [
        {
            type: 'graph',
            layout: 'force',
            symbolSize: 100,
            roam: true,
label: {
    normal: {
        show:true,
        formatter:  function( data ) {
            return '{gray|' + data.name + ':}{green|\n' + data.name + '}';
        },
        rich: {
            gray: {
                color: 'gray'
            },
            green: {
                color: 'green'
            }
        }
    }
},
            //edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: [{
                name: '节点1',
                x: 360,
                y: 100,
                symbolSize: 50,
            }, {
                name: '节点2',
                x: 700,
                y: 219
            }, {
                name: '节点3',
                x: 550,
                y: 100
            }, {
                name: '节点4',
                x: 550,
                y: 300
            }, {
                name: '节点5',
                x: 450,
                y: 300
            }, {
                name: '节点6',
                x: 250,
                y: 300
            }, {
                name: '节点7',
                x: 250,
                y: 300
            }, {
                name: '节点8',
                x: 250,
                y: 300
            }, {
                name: '节点9',
                x: 250,
                y: 300
            }, {
                name: '节点10',
                x: 250,
                y: 300
            }],
            // links: [],
            links: [{
                source: '节点3',
                target: '节点1'
            }, {
                source: '节点3',
                target: '节点2'
            }, {
                source: '节点3',
                target: '节点4'
            }, {
                source: '节点3',
                target: '节点5'
            }, {
                source: '节点3',
                target: '节点6'
            }, {
                source: '节点3',
                target: '节点7'
            }, {
                source: '节点3',
                target: '节点8'
            }, {
                source: '节点3',
                target: '节点9'
            }, {
                source: '节点3',
                target: '节点10'
            }],
            animation:true,
            markArea:{
                animation:false
            },
            markPoint:{
                symbol: 'arrow',
            },
                        markLine:{
                symbol: 'arrow',
                precision:5
            },
               
                        lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                }
            },
                            force: {
                    repulsion:[0, 500],
                    edgeLength: [0, 200],
                    layoutAnimation:false,
                    //initLayout:'circle',
                    gravity:0
                }
        }
    ]
};