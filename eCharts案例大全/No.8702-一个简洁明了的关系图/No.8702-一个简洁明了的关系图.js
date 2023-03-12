var size = 65; //节点大小


var listdata = []; //节点数组
var links = []; //链接数组
var legendes = ["对象属性", "关联对象", "所属类别", "对象"];
var texts = []; //链接数组

var property_cat_json = {
    "展览": "展览",
    "专题": "专题",
    "资讯": "资讯",
};

var property_rel_cat = [  "100部", "200个", "100条"]
var rel_obj_cat_json = {
    "报纸": "报纸",
    "主题订阅": "主题\n订阅",
    "期刊": "期刊",
    "视频": "视频"
};
var rel_obj_rel_cat = ["120条", "90条", "100种",'200条']

var obj_name_cat_json = {
    对象: "资源\n数量"
}

function setData(json, n) {
    var i = 0;
    for (var p in json) {
        listdata.push({
            x: i * 50,
            y: size + i * 10,
            "name": p,
            "showName": json[p],
            "symbolSize": size,
            "category": n,
            "draggable": "true",
            formatter: function(params) {
                return params.data.showName
            }
        });
        i++;
    }
}

function setLinkData(json, relarr, title) {
    if (relarr !== "") {
        var i = 0;
        for (var p in json) {
            links.push({
                "source": p,
                "target": title,
                "value": relarr[i],
                lineStyle: {
                    normal: {
                        // text: relarr[i],
                        color: 'source'
                    }
                }
            });
            i++;
        }
    } else {
        for (var p2 in json) {
            links.push({
                "source": p2,
                "target": title,
                "value": "",
                lineStyle: {
                    normal: {
                        color: 'source'
                    }
                }
            });
        }
    }
}

for (var i = 0; i < legendes.length; i++) {
    texts.push({
        "name": legendes[i]
    })
}

setData(property_cat_json, 0);
setData(rel_obj_cat_json, 1);
setData(obj_name_cat_json, 3);

setLinkData(property_cat_json, property_rel_cat, legendes[3]);
setLinkData(rel_obj_cat_json, rel_obj_rel_cat, legendes[3]);

option = {
    backgroundColor: '#fff',
    tooltip: {
        formatter: '{b}'
    },
    animationDuration: 100,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '知识图谱',
        type: 'graph',
        layout: 'force',
        radius: ['90%', '90%'],
        // node: {
        //     symbolSize : 40
        // },
        force: {
            repulsion: 100,
            gravity: 0.02,
            edgeLength: [10, 50],
            layoutAnimation: true,
        },
        data: listdata,
        links: links,
        categories: texts,
        roam: true,
        nodeScaleRatio: 0, //鼠标漫游缩放时节点的相应缩放比例，当设为0时节点不随着鼠标的缩放而缩放
        focusNodeAdjacency: false, //是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
        lineStyle: {
            normal: {
                opacity: 0.5,
                width: 2,
                curveness: 0
            }
        },
        label: {
            normal: {
                show: true,
                position: 'inside',
                textStyle: { //标签的字体样式
                    color: '#fff', //字体颜色
                    fontWeight: 'normal', //'normal'标准'bold'粗的'bolder'更粗的'lighter'更细的或100 | 200 | 300 | 400...
                    fontSize: "14" //字体大小
                },
                formatter: function(params) {
                    return params.data.showName //此处为label转换 并转换颜色
                },
                fontSize: 18,
                fontStyle: '600',
            }
        },
        itemStyle: {                                 // 节点圆圈的全局样式
            normal: {
                radius: 60,
                borderColor: '#fff',
                borderWidth: 4,
                shadowBlur: 10,
                shadowColor: 'rgba(98, 198, 248, 0.5)'
            }
        },
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 12
                },
                formatter: "{c}"
            }
        }
    }],
    color: [ '#F5BB4A','#62C6F8'] //自定义调色板
};