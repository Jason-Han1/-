var data = {
    "antity": [{
        "name": "中国恒大",
        "des": "中国恒大",
        "symbolSize": 106,
        "category": 0,
        "itemStyle": {
            'color': '#567CF7'
        }
    }, {
        "name": "深圳建设",
        "des": "深圳建设",
        "category": 1,
        "itemStyle": {
            'color': '#4093F2'
        }
    }, {
        "name": "恒大健康",
        "des": "深圳建设",
        "category": 1,
        "itemStyle": {
            'color': '#4093F2'
        }
    }, {
        "name": "03333",
        "des": "03333",
        "category": 1,
        "itemStyle": {
            'color': '#4093F2'
        }
    }, {
        "name": "hk_mb",
        "des": "hk_mb",
        "category": 1,
        "itemStyle": {
            'color': '#4093F2'
        }
    },  {
        "name": "HKEX",
        "des": "HKEX",
        "category": 1,
        "itemStyle": {
            'color': '#4093F2'
        }
    },  {
        "name": "00708",
        "des": "00708",
        "category": 1,
        "itemStyle": {
            'color': '#4093F2'
        }
    }],
    "relation": [{
        "source": "中国恒大",
        "target": "03333",
        "lineStyle": '#333',
        "name": "股票名称",
        "label": {
          "fontSize": 12,
          
        },
        "des": "招商银行参股中国银行0.05%"
    }, {
        "source": "中国恒大",
        "target": "HKEX",
        "label": {
          "fontSize": 12,
          
        },
        "name": "交易所",
        "des": "招商银行参股中国银行0.05%"
    }, {
        "source": "中国恒大",
        "target": "深圳建设",
        "label": {
          "fontSize": 12,
          
        },
        "name": "参股",
        "des": "招商银行参股中国银行0.05%"
    },  {
        "source": "中国恒大",
        "target": "恒大健康",
        "label": {
          "fontSize": 12,
          
        },
        "name": "参股",
        "des": "招商银行参股中国银行0.05%"
    }, {
        "source": "恒大健康",
        "target": "00708",
        "label": {
          "fontSize": 12,
          
        },
        "name": "股票名称",
        "des": "招商银行参股中国银行0.05%"
    },  {
        "source": "恒大健康",
        "target": "HKEX",
        "label": {
          "fontSize": 12,
          
        },
        "name": "交易所",
        "des": "招商银行参股中国银行0.05%"
    }, {
        "source": "中国恒大",
        "target": "hk_mb",
        "label": {
          "fontSize": 12,
          
        },
        "name": "主板",
        "des": "招商银行参股中国银行0.05%"
    }]
};


option = {
    title: {
        text: '招商银行知识图谱（数据为虚拟）'
    },
    tooltip: {
        formatter(x) {
            return x.data.des;
        }
    },
    legend: {
        x: 'center',
        data: ['一级关系', '二级关系', '三级关系']
    },
    series: [{
        type: 'graph',
        layout: 'force',
        symbolSize: 58,
        roam: true,
        focusNodeAdjacency: true,
        categories: [{
            name: '一级关系'
        }, {
            name: '二级关系'
        }, {
            name: '三级关系'
        }],
        edgeSymbol: ['', 'arrow'],
        // edgeSymbolSize: [80, 10],
        edgeLabel: {
            normal: {
                textStyle: {
                    fontSize: 20
                },
                show: true,
                formatter(x) {
                    return x.data.name;
                }
            }
        },
        force: {
            repulsion: 2000,
            edgeLength: 120
        },
        draggable: true,
        itemStyle: {
            normal: {
                color: '#4b565b'
            }
        },
        lineStyle: {
            normal: {
                width: 1,
                color: '#4b565b'

            }
        },
        label: {
            normal: {
                show: true,
                textStyle: {}
            }
        },
        data: data.antity,
        links: data.relation
    }]
}