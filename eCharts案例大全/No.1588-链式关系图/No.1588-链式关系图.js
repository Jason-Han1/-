option = {

    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'force',
            symbolSize: 50,
            roam: true,
            label: {
                show: true,
                color: "#000",
                borderWidth: 1 ,
                borderColor: '#00',
                
                padding: 20 ,
                borderRadius: 3 ,
            },
            itemStyle:{
                color:'transparent'
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                fontSize: 16
            },
            force : { //力引导图基本配置
                repulsion : 600,//节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
                gravity : 0.05,//节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
                edgeLength :[100,300],//边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
                layoutAnimation : true
            },
            data: [{
                name: 'HZ-AF-OPERATION',
                symbol: "roundRect",
            }, {
                name: '节点3',
                symbol: "roundRect",
            }, {
                name: '节点2',
                symbol: "roundRect",
            }, {
                name: '节点4',
                symbol: "roundRect",
            }],
            // links: [],
            links: [ {
                source: 'HZ-AF-OPERATION',
                target: '节点2'
            }, {
                source: '节点2',
                target: '节点3'
            }, {
                source: '节点3',
                target: '节点4'
            }],
            lineStyle: {
                opacity: 0.9,
                width: 2,
                curveness: 0
            }
        }
    ]
};