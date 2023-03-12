var myGraphData = [
        { "parentNode":"张三", "childNodes":["小明", "小华", "小杰", "小婷","小妍","小飞"]},
        { "parentNode":"小明", "childNodes":[ "小王", "小赵", "小钱" ] },
        { "parentNode":"小华", "childNodes":[ "小孙", "小李", "小周" ] },
        { "parentNode":"小杰", "childNodes":[ "小吴", "小郑" ] },
        { "parentNode":"小婷", "childNodes":[ "小谢", "小潘" ] },
        { "parentNode":"小妍", "childNodes":[ "小苏", "小陈" ] },
        { "parentNode":"小飞", "childNodes":[ "小郭", "小彭" ] }
        
    ];
        
function setNodeData(arr, m, n ,listdata) {
    var size = 33;
    for(var i=0; i<arr.length; i++){
        listdata.push({
            id : m++,
            category: n,
            name: arr[i],
            symbolSize: size,
            draggable: "true"
        });
    }
}
        
function setLinkData(sourceList, m, links) {
    for(var i=0; i<sourceList.length; i++){
        links.push({
            "source": sourceList[i],
            "target": m,
            lineStyle: {
                normal: {
                    color: 'source',
                }
            }
        })
    }
}    

var listdata = [];
var linksdata = [];     

var nodeData = myGraphData;
var m = 0;
var source = [];
for(var i=1; i < nodeData.length; i++){
    var node = nodeData[i].parentNode;
    var tx = [node];
    setNodeData( tx, m, 1, listdata);
    source.push(m);

    var Data = nodeData[i].childNodes;
    setNodeData( Data, m+1, 2, listdata);

    var sourceList = [];
    for(var n = m+1; n < m + Data.length + 1; n++){
        sourceList.push(n);
    }
    setLinkData( sourceList, m, linksdata);
    m = m + Data.length + 1;
}
        
var tx7 = [];
tx7.push(nodeData[0].parentNode);
setNodeData(tx7, m, 0, listdata);
setLinkData(source, m, linksdata);

option = {
    title: {
        text: "张三的朋友和他朋友的朋友",
        top: "top",
        left: "left",
        textStyle: {
            color: '#292421'
        }
    },
    tooltip: {
        formatter: '{b}'
    },
    backgroundColor: '#FFFFFF',
    legend: {
        show : true,
        data : [ {
            name : '父节点',             
            icon : 'rect'
        },
        {
            name : '层级二',             
            icon : 'roundRect'
        }, {
            name : '层级三',              
            icon : 'circle'
        } ],
        textStyle: {
            color: '#292421'
        },
        icon: 'circle',
        type: 'scroll',
        orient: 'horizontal',
        left: 10,
        top: 20,
        bottom: 20,
        itemWidth: 10,
        itemHeight: 10
    },
    animationDuration: 0,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '知识图谱',
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 300,
            gravity: 0.1,
            edgeLength: 15,
            layoutAnimation: true,
        },
        data: listdata,
        links: linksdata,
        categories:[ 
            {
                name : '父节点',
                symbol : 'rect',
                label : {
                }
            }, {
                name : '层级二',
                symbol : 'rect'
            }, {
                name : '层级三',
                symbol : 'roundRect'
            }],
        roam: true,
        label: {
            normal: {
                show: true,
                position: 'bottom',
                formatter: '{b}',
                fontSize: 10,
                fontStyle: '600',
            }
        },
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 1.5,
                curveness: 0
            }
        }
    }]
};
        