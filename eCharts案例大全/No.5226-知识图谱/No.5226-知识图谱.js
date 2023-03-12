let data = {
    // 所有节点
    nodes: [{
        name: '小额借款合同纠纷',
        category: 0
    }, {
        name: '银行卡纠纷',
        category: 1
    }, {
        name: '民间借贷纠纷',
        category: 1
    }, {
        name: '信用卡纠纷',
        category: 1
    }, {
        name: '企业借贷纠纷',
        category: 1
    }, {
        name: '借款合同纠纷',
        category: 1
    }, {
        name: '金融借款合同纠纷',
        category: 1
    }],
    //   节点间关系
    links: [{
        target: '操作系统集团',
        source: '小额借款合同纠纷',
    }, {
        target: '银行卡纠纷',
        source: '小额借款合同纠纷'
    }, {
        target: '信用卡纠纷',
        source: '小额借款合同纠纷'
    }, {
        target: '民间借贷纠纷',
        source: '小额借款合同纠纷'
    }, {
        target: '企业借贷纠纷',
        source: '小额借款合同纠纷'
    }, {
        target: '借款合同纠纷',
        source: '小额借款合同纠纷'
    }, {
        target: '金融借款合同纠纷',
        source: '小额借款合同纠纷'
    }]
}

const color1 = '#6581E1';
const color2 = '#F1A956';

data.nodes.forEach(node => {
    if (node.category === 0) {
        node.symbolSize = 100;
        node.symbol = 'rect'
        node.itemStyle = {
            color: color1
        };
    } else if (node.category === 1) {
        node.symbol = 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z';
        node.itemStyle = {
            color: color2
        };
    }
});



option = {
    title: {
        text: '知识图谱',
    },
    //   图例
    //   legend: [{
    //     // selectedMode: 'single',
    //     data: categories.map(x => x.name),
    //     // icon: 'circle'
    //   }],
    series: [{
        type: 'graph',
        layout: 'force',
        symbolSize: 58,
        draggable: true,
        roam: true,
        hoverAnimation: false,
        edgeSymbol: ['', 'arrow'],
        edgeSymbolSize: [0, 15],
        focusNodeAdjacency: false,
        lineStyle: {
            color: "#45B57E",
            width:2,
        },
        // 配置关系线间的文字
        // edgeLabel: {
        //   normal: {
        //     show: true,
        //     textStyle: {
        //       fontSize: 20
        //     },
        //     formatter(x) {
        //       return x.data.name;
        //     }
        //   }
        // },
        label: {
            show: true,
            position :'bottom',
            color:'#292F35',
            fontSize:18
        },
        force: {
            repulsion: 2000,
            edgeLength: 120
        },
        data: data.nodes,
        links: data.links
    }]
}