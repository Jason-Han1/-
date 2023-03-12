 //临界值  当中心数大于临界值时，所有的关系都展开  小于临界值时不展开关系图
 var criticalValue = 2;
 
 //中心数
const defaultCategory = ["李志强",'赵冬','高鼎'];

 var graph = {
        "nodes": [{
            "name": "李志强",
            "category": "确诊",
            "symbolSize": 30,
            value:['确诊'],
            color:"#F10F0F"


        },
            {
                "name": "张亮",
                "category": "密接",
                "symbolSize": 30,
                value:['密接'],
                color: '#FFC001'

            },
            {
                "name": "王飞",
                "category": "王飞",
                "symbolSize": 30,
                value: ['次密接'],
                color: '#1D84C6'

            },

            {
                "name": "王丽",
                "category": "王丽",
                "symbolSize": 30,
                value: ['密接'],
                color: '#FFC001'
            },
            {
                "name": "符华",
                "category": "符华",
                "symbolSize": 30,
                value: ['次密接'],
                color: '#1D84C6'
            },
            {
                "name": "钱峰",
                "category": "钱峰",
                "symbolSize": 30,
                value: ['次密接'],
                color: '#1D84C6'
            },


            {
                "name": "赵冬",
                "category": "赵冬",
                "symbolSize": 30,
                value: ['确诊'],
                color:"#F10F0F"
            },
            {
                "name": "吴梦",
                "category": "吴梦",
                "symbolSize": 30,
                color: '#1D84C6',
                value: ['次密接']
            },
            {
                "name": "杨月",
                "category": "杨月",
                "symbolSize": 30,
                color: '#1D84C6',
                value: ['次密接']
            },
            {
                "name": "周清",
                "category": "周清",
                "symbolSize": 30,
                color: '#1D84C6',
                value: ['次密接']
            },
            {
                "name": "张枫",
                "category": "张枫",
                "symbolSize": 30,
                color: '#FFC001',
            value: ['密接']

            },
            {
                "name": "化辰",
                "category": "化辰",
                "symbolSize": 30,
                color: '#FFC001',
                value: ['密接']
            },
            {
                "name": "彭帅",
                "category": "彭帅",
                "symbolSize": 30,
                color: '#FFC001',
                value: ['密接']
            },
            {
                "name": "高鼎",
                "category": "课程",
                "symbolSize": 30,

                color:"#F10F0F"
            },
            {
                "name": "章艺",
                "category": "章艺",
                "symbolSize": 30,
                color: '#1D84C6',
                value: ['次密接']
            },
            {
                "name": "连亮",
                "category": "连亮",
                "symbolSize": 30,
                color: '#1D84C6',
                value: ['次密接']
            },
            {
                "name": "化月",
                "category": "化月",
                "symbolSize": 30,
                color: '#FFC001',
                value: ['密接']
            },
            {
                "name": "马可",
                "category": "马可",
                "symbolSize": 30,
                color: '#FFC001',
                value: ['密接']
            }


        ],
        "links": [{
            "source": "李志强",
            "target": "张亮",
             'reason':"聚餐"
        },
            {
                "source": "张亮",
                "target": "王飞",
                'reason':"出现在同一场所"
            },
            {
                "source": "李志强",
                "target": "王丽",
                'reason':"出现在同一场所"
            },
            {
                "source": "王丽",
                "target": "钱峰",
                'reason':"聚餐"
            },
            {
                "source": "王丽",
                "target": "符华",
                'reason':"家庭聚集"
            },

            {
                "source": "赵冬",
                "target": "张枫",
                'reason':"家庭聚集"
            },
            {
                "source": "张枫",
                "target": "吴梦",
                 'reason':"出现在同一场所"

            },
            {
                "source": "张枫",
                "target": "杨月",
                'reason':'聚会'
            },
            {
                "source": "彭帅",
                "target": "周清",
                'reason':'聚会'
            },
            {
                "source": "赵冬",
                "target": "化辰",
                'reason':"出现在同一场所"
            },
            {
                "source": "赵冬",
                "target": "彭帅",
                'reason':"出现在同一场所"
            },

            {
                "source": "高鼎",
                "target": "化月",
                'reason':"出现在同一场所"
            },
            {
                "source": "高鼎",
                "target": "马可",
                'reason':'聚会'
            },
            {
                "source": "马可",
                "target": "章艺",
                'reason':"出现在同一场所"
            },
            {
                "source": "马可",
                "target": "连亮",
                'reason':"出现在同一场所"
            }
        ]
    };

    const currentGraph = {
        nodes: {},
        links: {},
    };
    if(defaultCategory.length < criticalValue){
        currentGraph.links = graph.links
    }
    const nodeMap = {};
// 页面加载时，第一次初始化图
    function init() {
        // 根据定义的常量，产生currentGraph的默认数据
        // 遍历全部nodes和links，产生node映射map
        for (let i = 0; i < graph.nodes.length; i++) {
           if(defaultCategory.length > criticalValue){
               for(let m = 0;m<defaultCategory.length;m++){
                   if (graph.nodes[i].name === defaultCategory[m]) {
                       currentGraph.nodes[graph.nodes[i].name] = graph.nodes[i];
                   }
                   nodeMap[graph.nodes[i].name] = graph.nodes[i];
                   nodeMap[graph.nodes[i].name]['links'] = {};
                   nodeMap[graph.nodes[i].name]['nodes'] = {};
                   nodeMap[graph.nodes[i].name]['hasAppend'] = false;
               }
           }else{
               currentGraph.nodes[graph.nodes[i].name] = graph.nodes[i];
               nodeMap[graph.nodes[i].name] = graph.nodes[i];
               nodeMap[graph.nodes[i].name]['links'] = {};
               nodeMap[graph.nodes[i].name]['nodes'] = {};
               nodeMap[graph.nodes[i].name]['hasAppend'] = true;
           }
        }
        for (let i = 0; i < graph.links.length; i++) {
            let link = graph.links[i];
            if (nodeMap[link.source] !== undefined && nodeMap[link.target] !== undefined) {
                nodeMap[link.source].links[link.target] = link;
                nodeMap[link.source].nodes[nodeMap[link.target].name] = nodeMap[link.target];
            }
        }

        for (let i = 0; i < graph.nodes.length; i++) {
            graph.nodes[i].itemStyle =  {
                color: graph.nodes[i].color
            };
            graph.nodes[i].label = {
                normal: {
                    show: graph.nodes[i].symbolSize > 15
                },

            };
        }
        redrawGraph();
    }
// 处理点击节点展开
    function append(nodeName) {
        // 根据nodeName从nodeMap里拿出对应的nodes和links，并append到currentGraph.nodes currentGraph.links
        let node = nodeMap[nodeName];
        if (node.hasAppend === true || Object.keys(node.nodes).length === 0 || Object.keys(node.links).length === 0) {

            return
        }
        Object.values(node.nodes).forEach(n => {
            n.symbolSize =40;
            currentGraph.nodes[n.name] = n;
        });
        Object.values(node.links).forEach(l => {
            currentGraph.links[l.source + "_" + l.target] = l;
        });
        node.hasAppend = true;
        redrawGraph();
    }
// 处理点击节点收缩
    function remove(nodeName) {
        //根据nodeName从nodeMap里拿出对应的nodes和links，从currentGraph.nodes currentGraph.links删除当前节点的nodes和links并且递归
        let node = nodeMap[nodeName];
        Object.values(node.nodes).forEach(n => {
            delete currentGraph.nodes[n.name];
            if (n.hasAppend === true && Object.keys(n.nodes).length > 0) {
                remove(n.name);
            }
        });
        Object.values(node.links).forEach(l => {
            delete currentGraph.links[l.source + '_' + l.target];
        });
        // 设置flag 等于false
        node.hasAppend = false;

        redrawGraph();
    }
// 根据更新后的option重新画图
    function redrawGraph() {
        option.series[0].data = Object.values(currentGraph.nodes);
        option.series[0].links = Object.values(currentGraph.links);
        console.log(option);
        myChart.setOption(option);
    }
    option = {
        backgroundColor:"#000",
        tooltip: {
            formatter:function(params){
                return params.data.reason
            }
        },
        legend: [],
        animation: false,
        series: [{
            type: 'graph',
            layout: 'force',
            data: Object.values(currentGraph.nodes),
            links: Object.values(currentGraph.links),
            roam: true,
            focusNodeAdjacency: false,
            label: {
                formatter: '{b}',
                textStyle:{
                    color:"#ffffff"
                },
                
            },
              edgeSymbol: ['circle', 'arrow'],
            lineStyle: {
                color: 'rgba(255,255,255,0.6)',
                opacity: 1,
                curveness: 0.3
            },
            force: {
                layoutAnimation: false,
                repulsion: 100
            },

        }]
    };
    init();
    myChart.on('click', function(params) {

        if (params.dataType === "node") {
            const node = nodeMap[params.data.name];
            if (node.hasAppend === true) {
                option.series[0].force.repulsion = 100;
                currentGraph.nodes[(params.data.name)].symbolSize = 30
                remove(node.name)
            } else {
                option.series[0].force.repulsion = 320;
                currentGraph.nodes[(params.data.name)].symbolSize = 40
                append(node.name);


            }
        }

    });