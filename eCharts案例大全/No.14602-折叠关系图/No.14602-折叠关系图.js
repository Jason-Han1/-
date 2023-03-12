var timeFn=null; 
var sourceData = {
            nodes: [
                {name:'0',label:'xx大学',number:40, flag: 1, category: 0},
                {name:'1',label:'校区1',number:30, flag: 0, category: 1},
                {name:'2',label:'学院1',number:20, flag: 0, category: 2},
                {name:'3',label:'学院2',number:20, flag: 0, category: 2},
                {name:'4',label:'校区2',number:30, flag: 0, category: 1},
                {name:'5',label:'学院1',number:20, flag: 0, category: 2},
                {name:'6',label:'学院2',number:20, flag: 0, category: 2},
                {name:'7',label:'学院3',number:20, flag: 0, category: 2},
                {name:'8',label:'校区3',number:30, flag: 0, category: 1},
                {name:'9',label:'学院1',number:20, flag: 0, category: 2},
                {name:'10',label:'学院2',number:20, flag: 0, category: 2},
                {name:'11',label:'学院3',number:20, flag: 0, category: 2},
                {name:'12',label:'学院4',number:20, flag: 0, category: 2},
                {name:'13',label:'一班',number:45, flag: 0, category: 3},
                {name:'14',label:'二班',number:52, flag: 0, category: 3}
            ],
            links: [
                        {target : '1',source : '0'}, {target : '4',source : '0'}, {target : '8',source : '0'},
                        {target : '2',source : '1'}, {target : '3',source : '1'}, {target : '5',source : '4'}, 
                        {target : '6',source : '4'}, {target : '7',source : '4'}, {target : '9',source : '8'}, 
                        {target : '10',source : '8'}, {target : '11',source : '8'}, {target : '12',source : '8'},
                        {target : '13',source : '6'}, {target : '14',source : '6'}
            ]};

//加载完后初次显示
var graphOpt = createGraphOption(sourceData);
myChart.setOption(graphOpt);

//创建option
function createGraphOption(data){
    var nodes = data.nodes,
        links = data.links;

    var colorArray = ["#2e2e2e", "#5b9bd5", "#70ad47", "#f6ae8f", "#ffc000"];

    //获取子节点数
    for(var i in nodes){
        var childrenNum = 0;
        for(var j in links){                       
            if(nodes[i].name == links[j].source){
                childrenNum++;
            }
        }
        nodes[i].childrenNum = childrenNum;
        nodes[i].itemStyle = {
            normal: {
                color: colorArray[nodes[i].category]
            }
        };
    }

    //初始化节点与连线数据
    var initNodes = [nodes[0]];
    var initLinks = links.filter(function(i){
        if(i.source == "0") {
            for(var j in nodes){
                if(i.target == nodes[j].name){
                    initNodes.push(nodes[j]);
                }
            }
            return true;
        }
    })

    var option = {
            tooltip: {},
            animationEasingUpdate: 'quinticInOut',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    },
                }
            },
            series: [
                {
                    type: 'graph',
                    layout: 'force',
                    symbolSize: 45,
                    roam: true,
                    tooltip:{
                        trigger:'item',
                        formatter:function(params){
                            return params.data.label + ": " + params.data.childrenNum;
                        }
                    },
        
                    label: {
                        normal: {
                            show: true,
                            formatter:function(params){
                                return params.data.label + "\n" + params.data.childrenNum;
                            }
                        }
                    },
                    
                    edgeSymbolSize: [0, 5],
                    edgeSymbol:'arrow',
                    
                    nodes: initNodes,
                    links: initLinks,

                    force: {
                        repulsion: 1000,
                        initLayout:'circular',
                        layoutAnimation:false
                    }
                    
                }
            ]
    };
    return option;
}

//点击事件  
myChart.on('click', cevent);

function cevent(param) {
    clearTimeout(timeFn);
    //执行延时
    timeFn = setTimeout(function(){
        var option = myChart.getOption();
        var data = param.data,
            nodes = sourceData.nodes,
            links = sourceData.links;
 
        if (data != null && data != undefined) {
            var cName = data.name,
                chartNodes = option.series[0].nodes,
                chartLinks = option.series[0].links;

            if(data.childrenNum < 1) return false;

            if(data.flag === 0){

                //显示子节点
                for(var i in links){                  
                    if(cName == links[i].source){
                        chartLinks.push(links[i]);
                        for (var j in nodes) {
                            if(links[i].target == nodes[j].name){
                                chartNodes.push(nodes[j]);
                                break;
                            }
                        }
                    }                   
                }

            }else{

                //循环获取子节点
                function getChildren(name){
                    for(var i in chartLinks){
                        if(name == chartLinks[i].source){
                            transferLinksData.push(chartLinks[i]);
                            transferNodesData.push(chartLinks[i].target);
                            getChildren(chartLinks[i].target);
                        }
                    }  
                }

                //获取应该隐藏的子节点数据   
                var transferNodesData = [],
                    transferLinksData = [];
                getChildren(cName);

                //过滤点应该隐藏的子节点数据
                chartNodes = chartNodes.filter(function(i){
                                        var m = 0;
                                        for(var j in transferNodesData){
                                            if(transferNodesData[j] == i.Name){
                                                m = 1;
                                                break;
                                            }
                                        }
                                        return (m == 0 ? true : false);
                                    });
                chartLinks = chartLinks.filter(function(i){
                                        var m = 0;
                                        for(var j in transferLinksData){
                                            if(transferLinksData[j].source == i.source && transferLinksData[j].target == i.target){
                                                m = 1;
                                                break;
                                            }
                                        }
                                        return (m == 0 ? true : false);
                                    });
            }

            //设置flag
            var fFlag = (data.flag == 0 ? 1 : 0);
            for(var i in chartNodes){
                if(cName == chartNodes[i].name){
                    chartNodes[i].flag = fFlag;
                    break;
                }
            }

            //排序节点
            option.series[0].nodes = quicksort(chartNodes);
            option.series[0].links = chartLinks;

            //重绘图形
            myChart.clear();
            myChart.setOption(option);
        }
    },300);
}

//排序
function quicksort(arr){
    if (arr.length == 0)
        return [];
 
    var left = new Array();
    var right = new Array();
    var pivot = arr[0];
 
    for (var i = 1; i < arr.length; i++) {
        if (arr[i]['name'] < pivot['name']) {
           left.push(arr[i]);
        } else {
           right.push(arr[i]);
        }
    }

    return quicksort(left).concat(pivot, quicksort(right));
}

$(document).on("resize", function(){
    myChart.resize();
})