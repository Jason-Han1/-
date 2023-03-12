var myGraphData = [
  { "parentNode":"南京工业大学", "childNodes":["安全环境学部", "材料科学学部", "化学化工学部", "机械控制学部","健康科技学部","建筑艺术学部","经济管理学部","人文社科学部","生物制造学部","数理信息学部","土木交通学部","其他培养单位"]},
        { "parentNode":"安全环境学部", "childNodes":[ "安全科学与工程学院", "环境科学与工程学院"] },
        { "parentNode":"材料科学学部", "childNodes":[ "材料科学与工程学院" ] },
        { "parentNode":"化学化工学部", "childNodes":[ "化工学院", "化学与分子工程学院" ] },
        { "parentNode":"机械控制学部", "childNodes":[ "电气工程与控制科学学院", "机械与动力工程学院","能源科学与工程学院" ] },
        { "parentNode":"健康科技学部", "childNodes":[ "药学院" ] },
        { "parentNode":"建筑艺术学部", "childNodes":[ "建筑学院", "艺术设计学院" ] },
        { "parentNode":"经济管理学部", "childNodes":[ "经济与管理学院" ] },
        { "parentNode":"人文社科学部", "childNodes":[ "法学院", "马克思主义学院","外国语语言文学学院","体育部" ] },
        { "parentNode":"生物制造学部", "childNodes":[ "生物与制药工程学院", "食品与轻工学院" ] },
        { "parentNode":"数理信息学部", "childNodes":[ "计算机科学与技术学院", "数理科学学院" ] },
        { "parentNode":"土木交通学部", "childNodes":[ "测绘科学与技术学院", "城市建设学院","交通运输工程学院","土木工程学院" ] },
        { "parentNode":"生物制造学部", "childNodes":[ "2011学院", "海外教育学院","继续教育学院","浦江学院" ] },
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
        text: "南京工业大学学部学院关系图",
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
            name : '学校',             
            icon : 'rect'
        },
        {
            name : '学部',             
            icon : 'roundRect'
        }, {
            name : '学院',              
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
                name : '学校',
                symbol : 'rect',
                label : {
                }
            }, {
                name : '学部',
                symbol : 'rect'
            }, {
                name : '学院',
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
        