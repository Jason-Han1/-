option = {
    title: {
        text: 'Graph 简单示例'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 100,
            roam: true,
            label: {
                show: true
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                fontSize: 20
            },
            data: [{
                name: '财务启动预算填报',
                x: 300,
                y: 300
            }, {
                name: '部门填报',
                x: 400,
                y: 300
            }, {
                name: '板块审批',
                x: 500,
                y: 300
            },{
                name: '财务确认',
                x: 600,
                y: 300
            }, {
                name: '板块审批1', symbolSize: 0,
                x: 500,
                y: 350
            },  {
                name: '板块审批2', symbolSize: 0,
                x: 400,
                y: 350
            },],
            // links: [],
            links: [{
                source:'财务启动预算填报',
                target: '部门填报',
            },{
                source: '部门填报',
                target: '板块审批'
            },{
                source: '板块审批',
                target:'板块审批1',symbol :'none',
            },{
                source: '板块审批1',
                target:'板块审批2',symbol :'none',
            },{
                source:  '板块审批2',
                target: 1
            },{
                source:  '板块审批',
                target: '财务确认'
            }],
            lineStyle: {
                opacity: 3.9,
                width: 2,
                curveness: 0
            }
        }
    ]
};