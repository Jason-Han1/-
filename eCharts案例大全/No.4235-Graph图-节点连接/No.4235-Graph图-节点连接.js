// DATA 数据
let DATA = [
    // 线图
    {
        name: '1',
        value: [1, 300],
    },
    {
        name: '2',
        value: [2, 300],
    },
    {
        name: '3',
        value: [2, 225],
    },
    {
        name: '4',
        value: [2, 150],
    },
    {
        name: '5',
        value: [4, 300],
    },
    {
        name: '6',
        value: [7, 300],
        end: true,
    },
    {
        name: '6.8',
        value: [7, 275],
        label: {
            show: false
        },
        itemStyle: {
            color: 'rgb(255, 255, 255,0)',
            borderColor: 'rgb(255, 255, 255,0)'
        }
    },
    {
        name: '6.2',
        value: [6, 275],
        label: {
            show: false
        },
        itemStyle: {
            color: 'rgb(255, 255, 255,0)',
            borderColor: 'rgb(255, 255, 255,0)'
        }
    },
    {
        name: '7',
        value: [6, 250],
    },
    {
        name: '8',
        value: [8, 250],
        end: true,
    },
    {
        name: '18',
        value: [5, 225],
        end: true,
    },
    {
        name: '19',
        value: [4, 150],
        end: true,
    },
    {
        name: '19.2',
        value: [3, 125],
        label: {
            show: false
        },
        itemStyle: {
            color: 'rgb(255, 255, 255,0)',
            borderColor: 'rgb(255, 255, 255,0)'
        }
    },
    {
        name: '19.8',
        value: [4, 125],
        label: {
            show: false
        },
        itemStyle: {
            color: 'rgb(255, 255, 255,0)',
            borderColor: 'rgb(255, 255, 255,0)'
        }
    },
    {
        name: '20',
        value: [3, 100],
    },
    {
        name: '21',
        value: [5, 100],
        end: true,
    },
    // 框图 1
    {
        name: '29',
        value: [5.8, (15 / 2) + 50],
    },
    {
        name: '30',
        value: [6, 65],
        symbol: 'none',
    },
    {
        name: '31',
        value: [6, 50],
        symbol: 'none',
    },
    {
        name: '32',
        value: [8, 65],
        symbol: 'none',
    },
    {
        name: '33',
        value: [8, 50],
        symbol: 'none',
    },
    {
        name: '34',
        value: [8.2, (15 / 2) + 50],
        end: true,
    },
    {
        name: '29-solid',
        value: [6.3, (15 / 2) + 50],
        symbol: 'none',
    },
    {
        name: '34-solid',
        value: [7.9, (15 / 2) + 50],
        symbol: 'none',
    },
    // 虚线连接
    {
        name: '34.8',
        value: [8.2, 40],
        label: {
            show: false
        },
        itemStyle: {
            color: 'rgb(255, 255, 255,0)',
            borderColor: 'rgb(255, 255, 255,0)'
        }
    },
    {
        name: '34.2',
        value: [6.8, 40],
        label: {
            show: false
        },
        itemStyle: {
            color: 'rgb(255, 255, 255,0)',
            borderColor: 'rgb(255, 255, 255,0)'
        }
    },
    // 框图 2
    {
        name: '35',
        value: [6.8, (15 / 2) + 15],
    },
    {
        name: '36',
        value: [7, 30],
        symbolSize: 15
    },
    {
        name: '37',
        value: [7, 15],
        symbolSize: 15
    },
    {
        name: '38',
        value: [9, 30],
        symbolSize: 15
    },
    {
        name: '39',
        value: [9, 15],
        symbolSize: 15
    },
    {
        name: '40',
        value: [9.2, (15 / 2) + 15],
        end: true,
    },
];
let LINKS = [{
        source: '1',
        target: '2'
    },
    {
        source: '2',
        target: '3'
    },
    {
        source: '2',
        target: '5'
    },
    {
        source: '5',
        target: '6',
        value: '6#基础底板',
        label: {
            show: true,
            position: 'middle',
            formatter: "{c}"
        }
    },
    {
        source: '6',
        target: '6.8',
        lineStyle: {
            type: 'dashed'
        },
        symbol: 'none'
    },
    {
        source: '6.8',
        target: '6.2',
        lineStyle: {
            type: 'dashed'
        },
        symbol: 'none'
    },
    {
        source: '6.2',
        target: '7',
        lineStyle: {
            type: 'dashed'
        }
    },
    {
        source: '7',
        target: '8'
    },
    {
        source: '3',
        target: '4'
    },
    {
        source: '3',
        target: '18',
        value: '南区西侧底板',
        label: {
            show: true,
            position: 'middle',
            formatter: "{c}"
        }
    },
    {
        source: '4',
        target: '19',
        value: '南区东侧底板',
        label: {
            show: true,
            position: 'middle',
            formatter: "{c}"
        }
    },
    {
        source: '19',
        target: '19.8',
        lineStyle: {
            type: 'dashed'
        },
        symbol: 'none'
    },
    {
        source: '19.8',
        target: '19.2',
        lineStyle: {
            type: 'dashed'
        },
        symbol: 'none'
    },
    {
        source: '19.2',
        target: '20',
        lineStyle: {
            type: 'dashed'
        }
    },
    {
        source: '20',
        target: '21',
        value: '南区结构-地下3层（车库2层）',
        label: {
            show: true,
            position: 'middle',
            formatter: "{c}"
        }
    },
    // 框线图 1
    {
        source: '30',
        target: '31',
        symbol: 'none'
    },
    {
        source: '30',
        target: '32',
        symbol: 'none'
    },
    {
        source: '31',
        target: '33',
        symbol: 'none'
    },
    {
        source: '32',
        target: '33',
        symbol: 'none'
    },
    {
        source: '29-solid',
        target: '34-solid',
        symbol: 'none',
        lineStyle: {
            width: 10
        }
    },
    // 连接线
    {
        source: '34',
        target: '34.8',
        lineStyle: {
            type: 'dashed'
        },
        symbol: 'none'
    },
    {
        source: '34.8',
        target: '34.2',
        lineStyle: {
            type: 'dashed'
        },
        symbol: 'none'
    },
    {
        source: '34.2',
        target: '35',
        lineStyle: {
            type: 'dashed'
        }
    },
    // 框线图 2
    {
        source: '36',
        target: '37',
        symbol: 'none'
    },
    {
        source: '36',
        target: '38',
        symbol: 'none'
    },
    {
        source: '37',
        target: '39',
        symbol: 'none'
    },
    {
        source: '38',
        target: '39',
        symbol: 'none'
    }
];

// 生成 timeLine 节点
const generatorLineNodes = (x, y) => {
    let nodes = [];
    for (let i = 1; i <= y; i++) {
        nodes.push({
            name: `timeLine-${i}`,
            value: [x, i],
            label: {
                show: false
            },
            itemStyle: {
                color: 'rgb(255, 255, 255,0)',
                borderColor: 'rgb(255, 255, 255,0)'
            }
        });
    }

    let linkNodes = [];
    for (let j = 0; j < nodes.length; j++) {
        if (j + 5 >= nodes.length) break;
        // 找到DATA数据中同等高度的节点
        let LINKS_Nodes = DATA.filter(x => x.value[1] === nodes[j + 5].value[1] && x.value[0] < nodes[j + 5].value[0]);
        if(LINKS_Nodes.length > 0) {
            // 如果有多个，则按照节点 横坐标 倒序排列 (方便取最接近line的节点)
            LINKS_Nodes.sort((a,b)=>b.value[0] - a.value[0])
        }
        // 如果存在 name 且 j + 5 j - 5在数据范围内 且 name 属性值是一个整数字符串
        if (LINKS_Nodes[0]?.name && j + 5 < nodes.length && j - 5 >= 0 && !LINKS_Nodes[0]?.name.includes('.') && !LINKS_Nodes[0]?.end) {
            
            linkNodes.push({
                source: nodes[j].name,
                target: LINKS_Nodes[0].name,
                lineStyle: {
                    type: 'solid',
                    color: 'red',
                    width: 2
                },
                symbol: 'none'
            });
            j += 9;
            linkNodes.push({
                source: LINKS_Nodes[0].name,
                target: nodes[j + 1].name,
                lineStyle: {
                    type: 'solid',
                    color: 'red',
                    width: 2
                },
                symbol: 'none'
            });
        } else {
            linkNodes.push({
                source: nodes[j].name,
                target: nodes[j + 1].name,
                lineStyle: {
                    type: 'solid',
                    color: 'red',
                    width: 2
                },
                symbol: 'none'
            })
        }
    }
    return {
        nodes,
        linkNodes
    };
}

// 调用生成 Lines的函数
let LineNodes = generatorLineNodes(3, 320);

// 生成 option
const generatorOpt = (el) => {
    return {
        title: {
            text: 'Graph图-节点连接'
        },
        tooltip: {
            show: false
        },
        xAxis: [{
                type: 'value',
                boundaryGap: false,
                splitLine: {
                    show: false
                },
                data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            }

        ],
        yAxis: {
            type: 'value',
            splitLine: {
                show: false
            }
        },
        series: [{
            type: 'graph',
            layout: 'none',
            coordinateSystem: 'cartesian2d',
            symbolSize: 20,
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [0, 10],
            itemStyle: {
                color: '#fff',
                borderColor: '#000'
            },
            label: {
                show: true,
                color: '#000'
            },
            data: DATA.concat(el.nodes),
            links: LINKS.concat(el.linkNodes),
            lineStyle: {
                normal: {
                    color: '#2f4554'
                }
            }
        }]
    };
};

option = generatorOpt(LineNodes);