let data = []
for (var i = 0; i < 10; i++) {
    const obj = {
        name: '数据' + i,
        value: i + 0.5,
        symbolSize: 60,
        itemStyle: {
            normal: {
                color: 'rgb(' +
                    Math.round(Math.random() * 255) +
                    ', ' +
                    Math.round(Math.random() * 255) +
                    ', ' +
                    Math.round(Math.random() * 255) +
                    ')'
            }
        }
    }
    data.push(obj)
}
option = {
    title: {
        text: '颜色随机的气泡图',
        x:'center',
        y:'top'
    },
    tooltip: {
        show: false
    },
    grid: {
        // right: '12%'
    },
    series: [{
        type: 'graph', // 关系图
        layout: 'force', //图的布局，类型为力导图，'circular' 采用环形布局
        force: {
            repulsion: [50, 150], //节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
            edgeLength: 10 //边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
        },
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        data
    }]
};