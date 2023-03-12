var myGraphData = [
        { "parentNode":"张三", "childNodes":["小明", "小华", "小杰", "小婷","小妍","小飞"]},
        { "parentNode":"小明", "childNodes":[ "小王", "小赵", "小钱" ] },
        { "parentNode":"小华", "childNodes":[ "小孙", "小李", "小周" ] },
        { "parentNode":"小杰", "childNodes":[ "小吴", "小郑" ] },
        { "parentNode":"小婷", "childNodes":[ "小谢", "小潘" ] },
        { "parentNode":"小妍", "childNodes":[ "小苏", "小陈" ] },
        { "parentNode":"小飞", "childNodes":[ "小郭", "小彭" ] },
        { "parentNode":"小王", "childNodes":[ "小a", "小b" ] },
        { "parentNode":"小孙", "childNodes":[ "小c", "小d" ] },
        { "parentNode":"小吴", "childNodes":[ "小e", "小f" ] },
    ];

function getNodes(parentNode,childNodes,nodes){
    var pnode;
    for(var i=0; i<nodes.length; i++){
        if(parentNode == nodes[i].nodename){
            pnode = nodes[i];
        }
    }
    for(i=0; i<childNodes.length; i++){
        nodes.push({
            nodename : childNodes[i],
            nodelevel: pnode.nodelevel+1,
            parentnode: parentNode,
        });
    }
}
        
function setNodeData(nodes,listdata) {
    var size = 33;
    for(var i=0; i<nodes.length; i++){
        listdata.push({
            category: nodes[i].nodelevel,
            name: nodes[i].nodename,
            symbolSize: size,
            draggable: "true"
        });
    }
}
        
function setLinkData(childList, parentnode, links) {
    for(var i=0; i<childList.length; i++){
        links.push({
            // links根据节点名称建立，只适用于节点名称不一样的情况
            "source": childList[i],
            "target": parentnode,
            lineStyle: {
                normal: {
                    color: 'source',
                }
            }
        });
    }
}    

var listdata = [];
var linksdata = []; 
var nodes =[{
        "nodename":"张三",
        "nodelevel":0,
        "parentnode":0
    }];
for(var i=0; i < myGraphData.length; i++){
    getNodes(myGraphData[i].parentNode,myGraphData[i].childNodes,nodes);
    setLinkData( myGraphData[i].childNodes, myGraphData[i].parentNode, linksdata);
}
setNodeData(nodes,listdata);  

var levels = 0;
var legend_data = [];
var series_categories = [];
var temp = ["一","二","三","四","五"];
for(var i=0; i < nodes.length; i++){
    levels = Math.max(levels, nodes[i].nodelevel);
}
for(var i=0; i<=levels; i++){
   
    legend_data.push({
        name : i===0?'父节点':'层级'+temp[i],             
        icon : 'rect'
    });
    
    series_categories.push({
        name : i===0?'父节点':'层级'+temp[i],
        symbol : 'rect'
    });
   
}

option = {
    title: {
        text: "张三的朋友们进阶版",
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
        data : legend_data,
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
        name: '关系图',
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
        categories: series_categories,
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
                width: 0.5,
                curveness: 0
            }
        }
    }]
};
        