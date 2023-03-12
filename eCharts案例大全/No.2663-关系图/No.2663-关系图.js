var myGraphData = [
    { parentNode: '不显示', childNodes: ['上游', '中游', '下游'] },
    {
        parentNode: '上游',
        childNodes: [
            '优客工场北京创业投资有限公司',
            '北京云动数字媒体技术有限公司',
            '北京星云极客科技孵化器有限公司',
            '小微律政(北京)管理咨询有限公司',
        ],
    },
    { parentNode: '中游', childNodes: ['北京数码大方科技股份有限公司', '安徽皖通科技股份有限公司'] },
    { parentNode: '下游', childNodes: ['苏州开眼数据技术股份有限公司', '北京香橙互动网络科技有限公司'] },
];
let color = ['#FF605C', '#2394FD', '#2FD5C0'];
let sourceId = '';

function showBr(s) {
    var re = '';
    var length = s.length;
    for (var i = 0, j = 1; i < length; i++, j++) {
        if (j && j % 6 == 0) {
            re += '\n';
        } else {
            re += s[i];
        }
    }
    return re;
}

function setNodeData(arr, m, n, listdata, font = false) {
    var size = 73;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === '不显示') {
            sourceId = m;
        }
        console.log('n', n);
        listdata.push({
            id: m++,
            category: n,
            name: showBr(arr[i]),
            symbolSize: arr[i] === '不显示' ? 0 : size,
            draggable: 'true',
            itemStyle: {
                normal: {
                    color: n === 1 ? font : `${font}20`,
                },
            },
           
            label: {
                normal: {
                    textStyle: {
                        color: n === 1 ? '#fff' : font ? font : 'transparent',
                        fontSize: n === 1 ?18 :12
                    },
                },
            },
        });
    }
}

function setLinkData(sourceList, m, links) {
    for (var i = 0; i < sourceList.length; i++) {
        links.push({
            source: m,
            target: sourceList[i],
            lineStyle: {
                normal: {
                    color: sourceId === m ? 'transparent' : '#eee',
                },
            },
        });
    }
}

var listdata = [];
var linksdata = [];

var nodeData = myGraphData;
var m = 0;
var source = [];
for (var i = 1; i < nodeData.length; i++) {
    let num = i - 1;
    var node = nodeData[i].parentNode;
    var tx = [node];
    setNodeData(tx, m, 1, listdata, color[num]);
    source.push(m);

    var Data = nodeData[i].childNodes;

    setNodeData(Data, m + 1, 2, listdata, color[num]);

    var sourceList = [];
    for (var n = m + 1; n < m + Data.length + 1; n++) {
        sourceList.push(n);
    }
    setLinkData(sourceList, m, linksdata);
    m = m + Data.length + 1;
}

var tx7 = [];
tx7.push(nodeData[0].parentNode);
setNodeData(tx7, m, 0, listdata);
setLinkData(source, m, linksdata);

option = {
    tooltip: {
        formatter: '{b}',
    },
    backgroundColor: '#FFFFFF',
    animationDuration: 0,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            name: '知识图谱',
            type: 'graph',
            layout: 'force',
            edgeSymbol: ['', 'arrow'],

            force: {
                repulsion: 1000,
                gravity: 0.4,
                edgeLength:110,
                layoutAnimation: true,
            },
            data: listdata,
            links: linksdata,
            categories: [
                {
                    name: '父节点',
                    symbol: 'rect',
                    label: {},
                },
                {
                    name: '层级二',
                    symbol: 'circle',
                },
                {
                    name: '层级三',
                    symbol: 'circle',
                },
            ],
            roam: true,
            label: {
                normal: {
                    show: true,
                },
            },
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 1.5,
                    curveness: 0,
                },
            },
        },
    ],
};
