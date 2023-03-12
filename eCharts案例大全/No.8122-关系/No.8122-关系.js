var nodes = [{
    "name": "字节跳动"
}, {
    "name": "美团"
}, {
    "name": "百度"
}, {
    "name": "阿里"
}, {
    "name": "京东"
}, {
    "name": "饿了么"
}];

var links = [{
    "source": "字节跳动",
    "target": "美团"
}, {
    "source": "字节跳动",
    "target": "百度"
}, {
    "source": "字节跳动",
    "target": "阿里"
}, {
    "source": "美团",
    "target": "京东"
}, {
    "source": "美团",
    "target": "饿了么"
}, {
    "source": "美团",
    "target": "百度"
}]



// 第一处
let searchedValue = '';
let resOld = '';
if (!document.getElementById('searchInput')) {
    document.getElementById('chart-panel').style.marginTop = '100px'
    var text = document.createElement('span');
    text.innerHTML = '节点名称搜索：';
    text.style.fontSize = '12px';
    document.body.appendChild(text);
    var input = document.createElement('input');
    input.id = 'searchInput';
    document.body.appendChild(input);
}
setInterval(() => {
    searchedValue = document.getElementById('searchInput').value;
    if (resOld !== searchedValue) {
        init();
    }
    resOld = searchedValue;
}, 1000);



function init() {
    // 第二处 - 将主要逻辑封装为init函数（注意下面的nodes，使用JSON.parse(JSON.stringify(nodes))）
    let data = {
        nodes: JSON.parse(JSON.stringify(nodes)),
        links: links,
    }
    const color1 = '#006acc';
    const color2 = '#ff7d18';
    const color3 = '#10a050';
    data.nodes.forEach(node => {
        if (node.category === 0) {
            node.symbolSize = 100;
            node.itemStyle = {
                color: color1
            };
        } else if (node.category === 1) {
            node.itemStyle = {
                color: color2
            };
        }
        //  第三处
        //  精准匹配
        // if (searchedValue &&  node.name === searchedValue) {
        
        // 模糊匹配
        if (searchedValue && node.name.toLowerCase().indexOf(searchedValue.toLowerCase()) > -1) {
            node.itemStyle = {
                color: 'black'
            };
        }
    });

    data.links.forEach(link => {
        link.label = {
            align: 'center',
            fontSize: 12
        };

        if (link.name === '参股') {
            link.lineStyle = {
                color: color2
            }
        } else if (link.name === '董事') {
            link.lineStyle = {
                color: color1
            }
        } else if (link.name === '法人') {
            link.lineStyle = {
                color: color3
            }
        }
    });

    let categories = [{
            name: '公司',
            itemStyle: {
                color: color1
            }
        },
        {
            name: '董事',
            itemStyle: {
                color: color2
            }
        }
    ]

    option = {
        title: {
            text: '知识图谱',
        },
        legend: [{
            // selectedMode: 'single',
            data: categories.map(x => x.name),
            // icon: 'circle'
        }],
        series: [{
            type: 'graph',
            layout: 'force',
            symbolSize: 58,
            draggable: true,
            roam: true,
            focusNodeAdjacency: true,
            categories: categories,
            edgeSymbol: ['', 'arrow'],
            // edgeSymbolSize: [80, 10],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 20
                    },
                    formatter(x) {
                        return x.data.name;
                    }
                }
            },
            label: {
                show: true,
            },
            force: {
                repulsion: 2000,
                edgeLength: 120
            },
            data: data.nodes,
            links: data.links
        }]
    }
    // 第四处：
    myChart.setOption(option);
}


// 第五处
init();