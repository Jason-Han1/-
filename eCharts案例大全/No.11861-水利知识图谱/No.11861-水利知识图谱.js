var size = 50; //节点大小


var listdata = []; //节点数组
var links = []; //链接数组
var legendes = ["对象属性", "关联对象", "所属类别", "对象"];
var texts = []; //链接数组


var legendes_json = {
    对象属性: "对象属性",
    关联对象: "关联对象",
    所属类别: "所属类别",
    对象: "对象"
};

var property_cat_json = {
    工程建设情况: "在建",
    工程规模: "大型",
    建成时间: "2011/10/01",
    归口管理部门: "xx部门",
    水电站代码: "6000026",
    水电站所在位置: "湖北省-宜昌市",
    水电站类型: "xx式水电站",
};

var property_cat = ["在建", "大型", "2011/10/01", "xx部门", "6000026", "湖北省-宜昌市", "xx式水电站"]
var property_rel_cat = ["工程建设情况", "工程规模", "建成时间", "管理部门", "水电站代码", "水电站所在位置", "水电站类型"]
var rel_obj_cat_json = {
    "位于,重庆至宜昌区间": "长江重庆",
    "属于，三峡枢纽水库": "三峡枢纽水库",
    "所在,宜宾至宜昌": "宜宾至宜昌"
};
var rel_obj_cat = ["宜宾至宜昌", "重庆至宜昌区间", "三峡枢纽水库"];
var rel_obj_rel_cat = ["位于", "属于", "所在"]
var cat_name_cat_json = {
    AD: "AD",
    BAS: "BAS",
    HYST: "HYST",
    RES: "RES",
    WIUN: "WIUN",
    WRZ: "WRZ"
}
var cat_name_cat = ["AD", "WIUN", "RES", "BAS", "WRZ", "HYST"]

var obj_name_cat_json = {
    对象: "三峡水电站"
}
var obj_name_cat = ["三峡水电站"]

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
setData(cat_name_cat_json, 2);
setData(obj_name_cat_json, 3);

setLinkData(property_cat_json, property_rel_cat, legendes[3]);
setLinkData(rel_obj_cat_json, rel_obj_rel_cat, legendes[3]);
setLinkData(cat_name_cat_json, "", legendes[3]);

option = {
    title: {
        text: "水利信息知识图谱",
        top: "top",
        left: "left",
        textStyle: {
            color: '#000000'
        }
    },
    tooltip: {
        formatter: '{b}'
    },
    toolbox: {
        show: true,
        feature: {
            restore: {
                show: true
            },
            magicType: {
                show: true,
                type: ['force', 'chord']
            },
            saveAsImage: {
                show: true
            }
        }
    },
    backgroundColor: '#f7f7f7',
    legend: {
        data: legendes,
        textStyle: {
            color: '#000000'
        },
        icon: 'circle',
        type: 'scroll',
        orient: 'vertical',
        left: 10,
        top: 20,
        bottom: 20,
        itemWidth: 10,
        itemHeight: 10
    },
    animationDuration: 1000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '知识图谱',
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 200,
            gravity: 0.02,
            edgeLength: 90,
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
                width: 1.5,
                curveness: 0
            }
        },
        label: {
            normal: {
                show: true,
                position: 'inside',
                textStyle: { //标签的字体样式
                    color: '#000000', //字体颜色
                    fontWeight: 'normal', //'normal'标准'bold'粗的'bolder'更粗的'lighter'更细的或100 | 200 | 300 | 400...
                    fontSize: "12" //字体大小
                },
                formatter: function(params) {
                    return params.data.showName //此处为label转换 并转换颜色
                },
                fontSize: 18,
                fontStyle: '600',
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
    color: ['#ff7f50', '#6dadd1', '#9765a8', '#91c7ae', '#772cdc',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
        '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
    ] //自定义调色板
};