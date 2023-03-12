let allNodes = [{
        id: 1,
        name: '中国',
        pid: 0,
        pname: '',
        relation: '',
        category: 0
    },
    {
        id: 2,
        name: '省份2',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 3,
        name: '省份3',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 4,
        name: '省份4',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 5,
        name: '省份5',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 6,
        name: '省份6',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 7,
        name: '省份7',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 8,
        name: '省份8',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 8,
        name: '省份9',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 8,
        name: '省份10',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 8,
        name: '省份11',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 8,
        name: '省份12',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 8,
        name: '省份13',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 8,
        name: '省份14',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 8,
        name: '省份15',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 8,
        name: '省份16',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 8,
        name: '省份17',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 8,
        name: '省份18',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 8,
        name: '省份19',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 8,
        name: '省份20',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 8,
        name: '省份21',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 8,
        name: '省份22',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 8,
        name: '省份23',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 8,
        name: '省份24',
        pid: 1,
        pname: '中国',
        relation: '省份',
        category: 1
    },
    {
        id: 9,
        name: '属性1',
        pid: 2,
        pname: '省份2',
        relation: '属性',
        category: 2
    },
    {
        id: 10,
        name: '属性2',
        pid: 2,
        pname: '省份2',
        relation: '属性',
        category: 2
    },
];
let nodeData = [];
let linksData = [];

function getNodeData() {
    nodeData = [];
    for (let node of allNodes) {
        let myNode = {};
        myNode.name = node.name;
        myNode.value = node.id;
        myNode.category = node.category;
        // myNode.id = node.id;
        nodeData.push(myNode)
    }
}

function getLinksData() {
    linksData = [];
    for (let node of allNodes) {
        if (node.pid === 0) {
            continue;
        }
        let myNode = {};
        myNode.source = node.name;
        myNode.target = node.pname;
        // myNode.value = 50;
        myNode.relation = node.relation;
        myNode.sourceId = node.id;
        myNode.targetId = node.pid;
        myNode.label = {
            show: true,
            formatter: (params) => {
                return params.data.relation;
            },
            fontSize: 20,
        };
        linksData.push(myNode)
    }
}

getNodeData();
getLinksData();
option = {
    title: {
        text: '知识图谱'
    },
    series: [{
        type: "graph",
        name: '知识图谱',
        layout: 'force',
        force: {
            repulsion: 1000,
            gravity: 0.001,
            edgeLength: 200,
            layoutAnimation: true,
        },
        categories: [{
            name: '一级',
            symbolSize: 100,
        }, {
            name: '二级',
            symbolSize: 60,
            label: {
                show: true,
                fontSize: 18
            }
        }, {
            name: '三级',
            symbolSize: 60,
            label: {
                show: true,
                fontSize: 18
            }
        }, {
            name: '四级',
            symbolSize: 60,
            label: {
                show: true,
                fontSize: 18
            }
        }, ],
        label: {
            show: true,
            fontSize: 30
        },
        roam: true,
        draggable: true,
        data: nodeData,
        links: linksData,
        // focusNodeAdjacency: true
    }],

};