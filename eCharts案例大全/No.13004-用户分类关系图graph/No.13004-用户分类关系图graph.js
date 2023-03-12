
const roles = ['商户', '客户', '司机', '收货人', '发货人', '质检员', '库管', '采购员', '风控', '付款专员']

function generateRandom(min, max) {
    return (min + Math.round(Math.random() * (max - min)))
}

let links = [], data = []

roles.map((v, k) => {
    var num = generateRandom(5, 99999)
    
    if(k > 0) {
        data.push({
            name: v,
            value: num,
            category: 1
        })
        
        links.push({
            source: 0,
            target: k,
            value: num
        })
    } else {
        data.push({
            name: v,
            value: num,
            category: 0,
            symbolSize: 100
        })
    }
    
})

option = {
    animationEasingUpdate: 'quinticInOut',
    
    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 3000,
            edgeLength: [150, 10],
            // layoutAnimation:false
        },
        // 节点标记类型
        symbol: 'circle',
        symbolSize: 70,
        // 两端标记类型
        edgeSymbol: ['circle', 'circle'],
        edgeSymbolSize: [12, 20],
        
        focusNodeAdjacency: true, // 鼠标经过节点是否突出显示
        roam: false, // 是否开启鼠标平移
        draggable: false, // 节点是否可拖拽
        
        label: {
            normal: {
                show: true,
                position: 'inside',
                textStyle: {
                    fontSize: 12
                },
            }
        },
        
        lineStyle: {
            normal: {
                opacity: 1,
                color: {
                    colorStops: [{
                        offset: 0,
                        color: '#FEE52D'
                    }, {
                        offset: 1,
                        color: '#F89212'
                    }]
                },
                width: 3
            }
        },
        itemStyle: {
            normal: {
                color: '#162436',
                borderColor: {
                    colorStops: [{
                        offset: 0,
                        color: '#A568FF'
                    }, {
                        offset: 1,
                        color: '#006CFF'
                    }]
                },
                borderWidth: 6
            }
        },
        // 节点分类
        categories: [{
            name: 'root',
            label: {
                formatter: '{b}',
                fontSize: 20
            },
            itemStyle: {
                color: '#132486'
            }
        }, {
            name: 'child',
            label: {
                formatter: ['{a|{c}}', '{b|{b}}'].join('\n'),
                rich: {
                    a: {
                        color: '#0ff',
                        align: 'center',
                    },
                    b: {
                        color: '#fff',
                        align: 'center',
                        lineHeight: 24
                    }
                }
            }
        }],
        // 数据
        data,
        // 节点间关系数据
        links
    }]
};

myChart.on("mouseover", function(data) {
    // 取消节点连接线触发效果
    if (data.dataType == "edge") {
        myChart.dispatchAction({
            type: 'unfocusNodeAdjacency',
            seriesIndex: 0
        });
    }
})