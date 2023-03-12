
var nodes = [{
    name: "教育咨询顾问",
    symbolSize: 100,
    id: "1",
}, {
    name: "地点",
    symbolSize: 50,
    id: "2",
    value: 50
}, {
    name: "薪酬",
    symbolSize: 50,
    id: "3"
}, {
    name: "工作职责",
    symbolSize: 50,
    id: "4"
}, {
    name: "深圳",
    symbolSize: 20,
    id: "5"
}, {
    name: "广州",
    symbolSize: 20,
    id: "6"
}, {
    name: "北京",
    symbolSize: 20,
    id: "7"
}, {
    name: "(1500, 5000)",
    symbolSize: 20,
    id: "8"
}, {
    name: "(2000, 4000)",
    symbolSize: 20,
    id: "9"
}, {
    name: "吃苦耐劳",
    symbolSize: 20,
    id: "10"
}, {
    name: "文能定萝莉, 武能御人妻",
    symbolSize: 20,
    id: "11"
}, {
    name: "能打杂",
    symbolSize: 20,
    id: "12"
}, ];

var links = [{
    source: "1",
    target: "2"
}, {
    source: "1",
    target: "3"
}, {
    source: "1",
    target: "4"
}, {
    source: "2",
    target: "5"
}, {
    source: "2",
    target: "6"
}, {
    source: "2",
    target: "7"
}, {
    source: "3",
    target: "8"
}, {
    source: "3",
    target: "9"
}, {
    source: "4",
    target: "10"
}, {
    source: "4",
    target: "11"
}, {
    source: "4",
    target: "12"
}, ];


var colors = ['#2f4554','#c23531', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];
for(var i=0; i<nodes.length; i++){
    nodes[i].itemStyle = {normal: {color: colors[i]}};
    i++;
}

option = {
    title: {
        text: '薪酬咨询',
        subtext: 'iron',
        top: 'top',
        left: 'right'
    },
    tooltip: {},
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 50 * 20,
            // gravity: 0.001
        },
        data: nodes,
        links: links,
        roam: true,
        focusNodeAdjacency: true,
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        }
    }]
};