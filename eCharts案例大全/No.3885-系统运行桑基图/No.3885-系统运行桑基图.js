var nodes = [

    {
        name: 'FTP下载队列',
        itemStyle: {
            color: '#6FA8F7'
        }
    },
    {
        name: 'FTP下载',
        itemStyle: {
            color: '#5ECC8F'
        }
    },
    {
        name: 'Pcap处理',
        itemStyle: {
            color: '#FCC600'
        }
    },
    {
        name: 'PCAP规则检测结果',
        itemStyle: {
            color: '#6FA8F7'
        }
    },
    {
        name: 'PCAP规则检测聚合',
        itemStyle: {
            color: '#5ECC8F'
        }
    },

    {
        name: 'kafka队列1',
        itemStyle: {
            color: '#6FA8F7'
        }
    },
    {
        name: 'kafka队列2',
        itemStyle: {
            color: '#5ECC8F'
        }
    },

    {
        name: 'Kafka',
        itemStyle: {
            color: '#FCC600'
        }
    },

    {
        name: 'Meta处理队列1',
        itemStyle: {
            color: '#6FA8F7'
        }
    },
    {
        name: 'Meta处理队列2',
        itemStyle: {
            color: '#5ECC8F'
        }
    },
    {
        name: 'Meta处理队列3',
        itemStyle: {
            color: '#FCC600'
        }
    },

    {
        name: '元数据标注结果',
        itemStyle: {
            color: '#6FA8F7'
        }
    },
    {
        name: '元数据检测结果',
        itemStyle: {
            color: '#5ECC8F'
        }
    },
    {
        name: '文件标注结果',
        itemStyle: {
            color: '#FCC600'
        }
    },

    {
        name: '元数据标注聚合',
        itemStyle: {
            color: '#6FA8F7'
        }
    },
    {
        name: '元数据检测聚合',
        itemStyle: {
            color: '#5ECC8F'
        }
    },
    {
        name: '文件标注聚合',
        itemStyle: {
            color: '#FCC600'
        }
    },

    {
        name: 'Meta_DoLog',
        itemStyle: {
            color: '#6FA8F7'
        }
    },
    {
        name: 'File_DoLog',
        itemStyle: {
            color: '#5ECC8F'
        }
    },
]
var links = [{
    source: 'kafka队列1',
    target: 'Kafka',
    value: 150
},
    {
        source: 'kafka队列2',
        target: 'Kafka',
        value: 150
    },

    {
        source: 'Kafka',
        target: 'Meta处理队列1',
        value: 100
    },
    {
        source: 'Kafka',
        target: 'Meta处理队列2',
        value: 100
    },
    {
        source: 'Kafka',
        target: 'Meta处理队列3',
        value: 100
    },

    {
        source: 'Meta处理队列1',
        target: '元数据标注结果',
        value: 11.1
    },
    {
        source: 'Meta处理队列1',
        target: '元数据检测结果',
        value: 11.1
    },
    {
        source: 'Meta处理队列1',
        target: '文件标注结果',
        value: 11.1
    },
    {
        source: 'Meta处理队列2',
        target: '元数据标注结果',
        value: 11.1
    },
    {
        source: 'Meta处理队列2',
        target: '元数据检测结果',
        value: 11.1
    },
    {
        source: 'Meta处理队列2',
        target: '文件标注结果',
        value: 11.1
    },
    {
        source: 'Meta处理队列3',
        target: '元数据标注结果',
        value: 11.1
    },
    {
        source: 'Meta处理队列3',
        target: '元数据检测结果',
        value: 11.1
    },
    {
        source: 'Meta处理队列3',
        target: '文件标注结果',
        value: 11.1
    },

    {
        source: '元数据标注结果',
        target: '元数据标注聚合',
        value: 33.3
    },
    {
        source: '元数据检测结果',
        target: '元数据检测聚合',
        value: 33.3
    },
    {
        source: '文件标注结果',
        target: '文件标注聚合',
        value: 33.3
    },

    {
        source: '元数据标注聚合',
        target: 'Meta_DoLog',
        value: 11.1
    },
    {
        source: '元数据检测聚合',
        target: 'Meta_DoLog',
        value: 11.1
    },
    {
        source: '文件标注聚合',
        target: 'File_DoLog',
        value: 11.1
    },

    {
        source: 'FTP下载队列',
        target: 'FTP下载',
        value: 150
    },
    {
        source: 'FTP下载',
        target: 'Pcap处理',
        value: 100
    },
    {
        source: 'Pcap处理',
        target: 'PCAP规则检测结果',
        value: 33.3
    },
    {
        source: 'PCAP规则检测结果',
        target: 'PCAP规则检测聚合',
        value: 33.3
    },
    {
        source: 'PCAP规则检测聚合',
        target: 'Meta_DoLog',
        value: 33.3
    },
]
var option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    backgroundColor: '#FFFFFF',
    series: {
        type: 'sankey',
        layout: 'none',
        top: 50,
        left: '3%',
        right: '12%',
        nodeGap: 14,
        layoutIterations: 0, // 自动优化列表，尽量减少线的交叉，为0就是按照数据排列
        data: nodes, // 节点
        links: links, // 节点之间的连线
        draggable: false,
        focusNodeAdjacency: 'allEdges', // 鼠标划上时高亮的节点和连线，allEdges表示鼠标划到节点上点亮节点上的连线及连线对应的节点
        // tooltip: {
        //   formatter: function(params) {
        //     if (params.data.source) {
        //       return `${params.data.source}：${params.data.value}`;
        //     } else {
        //       return `${params.name}：${params.value}`;
        //     }
        //   }
        // },
        levels: [{
            depth: 0,
            itemStyle: {
                color: '#F27E7E'
            },
            lineStyle: {
                color: 'source',
                opacity: 0.2
            }
        },
            {
                depth: 1,
                lineStyle: {
                    color: 'source',
                    opacity: 0.2
                }
            },
            {
                depth: 2,
                lineStyle: {
                    color: 'source',
                    opacity: 0.2
                }
            },
            {
                depth: 3,
                label: {
                    fontSize: 12
                }
            }
        ],
        label: {
            fontSize: 14,
            color: '#666'
        },
        itemStyle: {
            normal: {
                borderWidth: 0
            }
        }
    }
}
