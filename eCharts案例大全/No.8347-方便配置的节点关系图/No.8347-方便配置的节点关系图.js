// =======================
// 人员关系数据
var links = [
    ['陈卫东', '赵英杰', '朋友'],
    ['赵英杰', '郑志勇', '同学'],
    ['赵英杰', '徐建云', '同学'],
]
// =======================
// 人员信息数据
var nodes = [{
        '姓名': '陈卫东',
        '身份证号': '2220',
        '住址': 'xxxxx',
        '类别': '二类节点',
    },
    {
        '姓名': '赵英杰',
        '身份证号': '2220',
        '住址': 'xxxxx',
        '类别': '三类节点',
    },
    {
        '姓名': '郑志勇',
        '身份证号': '2220',
        '住址': 'xxxxx',
        '类别': '一类节点',
    },
    {
        '姓名': '徐建云',
        '身份证号': '2220',
        '住址': 'xxxxx',
        '类别': '一类节点',
    }
]
// =======================

//数据正确性检查
//检查节点是否有重复人名
var infos = {};
for (var node of nodes){
    if(node['姓名'] in infos){
        window.alert('人名重复，请修改: ' + node['姓名'])
    }
    infos[node['姓名']] = Object.assign({}, node);
}
// 检查边的links的姓名是否都出现在nodes中
for(var link of links){
    if( !( (link[0] in infos) && (link[1] in infos) ) ){
        window.alert('人员未出现导致边非法:' + link)
    }
}

//格式化输入数据
var legend = new Set()
for (var node of nodes){
    legend.add(node['类别']);
}
legend = Array.from(legend);
legend.sort(); 

echar_data = []
for (var node of nodes){
    echar_data.push({
                name: node['姓名'],
                category:  legend.findIndex((element) => element == node['类别']),
                draggable: true,
            })
}

echar_links = []
for(var link of links){
    echar_links.push({
                source: link[0],
                target: link[1],
                value: link[2]
            })
} 

option = {
    title: {
        text: '人员关系信息'
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            if(params.dataType == 'edge'){
                var info = '<p style="font-size:14px">' + params.name + '</p>'
                info = info + '<p style="font-size:14px">' + params.value + '</p>'
                return info;
            }
            
            if (params.name in infos) {
                var info = '<p style="font-size:14px">' + params.name + '</p>'
                for (var p in infos[params.name]) {
                    info = info + '<p style = "font-size:12px" >' + p + ':' + infos[params.name][p] + '</p>'
                }
                return info;
            }
        },
        backgroundColor: "#ff7f50", //提示标签背景颜色 
        textStyle: {
            color: "#fff"
        } //提示标签字体颜色 
    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12
            },
        }
    },
    legend: {
        x: "center",
        show: true,
        data: legend 
    },
    series: [

        {
            type: 'graph',
            layout: 'force',
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: true,
            categories: [{
                name: legend[0],
                itemStyle: {
                    normal: {
                        color: "#009800",
                    }
                }
            }, {
                name: legend[1],
                itemStyle: {
                    normal: {
                        color: "#4592FF",
                    }
                }
            }, {
                name: legend[2],
                itemStyle: {
                    normal: {
                        color: "#3592F",
                    }
                }
            },
             {
                name: legend[3],
                itemStyle: {
                    normal: {
                        color: "#3592F",
                    }
                }
            },
             {
                name: legend[4],
                itemStyle: {
                    normal: {
                        color: "#3592F",
                    }
                }
            }],
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    },
                }
            },
            force: {
                repulsion: 1000
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: "{c}"
                }
            },
            data: echar_data,
            links: echar_links,
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 1,
                    curveness: 0
                }
            }
        }
    ]
};