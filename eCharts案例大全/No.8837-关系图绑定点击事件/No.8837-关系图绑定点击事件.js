// 调试页面回打印出点击的节点名称

var person = "/asset/get/s/data-1561621393298-zQTG-TuDS.png";
var car = "/asset/get/s/data-1561621386236-0IGCc48l6.png";
var phone = "/asset/get/s/data-1561621379686-rZHoryrBV.png";

var size = 50; //节点大小


var listdata = [];
var links = [];
var legendes = ["手机IMSI", "故障等级", "车牌号码", "故障等级"];
var texts = [];


var branch = {
    "蓄电池": "蓄电池",
    "空压机": "空压机",
    "制动": "制动",
    "烟雾探测": "烟雾探测",
    "列车方向": "列车方向",
    "司机室": "司机室",
    "紧急对讲": "紧急对讲",
    "速度": "速度",
    "受电弓": "受电弓"

};

var phoneIMSI = []


var carNum = {

}
const relationShipCar = []

var mainRelationShip = {
    故障等级: ""
}

function setDataPerson(json, n) {
    var i = 0;
    for (var p in json) {
        listdata.push({
            x: 50,
            y: 100,
            "name": p,
            "showName": json[p],
            "symbol": 'image://' + "/asset/get/s/data-1561621393298-zQTG-TuDS.png",
            "symbolSize": 70,
            "category": n,

            formatter: function(params) {
                return params.data.showName
            },
            label: {
                position: 'bottom'
            }
        });
        i++;
    }
}

function setDataPhone(json, n) {
    var i = 0;
    for (var p in json) {
        listdata.push({
            x: i * 50,
            y: size + i * 10,
            "name": p,
            "showName": json[p],
            "symbolSize": size,
            "category": n,
            formatter: function(params) {
                return params.data.showName
            },
            label: {
                position: 'bottom'
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

setDataPhone(branch, 0);

setDataPerson(mainRelationShip, 3);

setLinkData(branch, phoneIMSI, legendes[3]);
setLinkData(carNum, relationShipCar, legendes[3]);

option = {
    title: {
        text: "关系图绑定点击事件",
        top: "top",
        left: "left",
        textStyle: {
            color: '#000000'
        }
    },
    tooltip: {
        formatter: '{b}'
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
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 80,
            gravity: 0,
            edgeLength: 150,
            layoutAnimation: true,
        },
        data: listdata,
        links: links,
        categories: texts,
        roam: false,
        nodeScaleRatio: 0,
        focusNodeAdjacency: false,
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
                textStyle: {
                    color: '#000000',
                    fontWeight: 'normal',
                    fontSize: "12" //字体大小
                },
                formatter: function(params) {
                    return params.data.showName
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
    color: ['#e8b842', '#41b1ef', '#667aed', '#347fbb', '#772cdc',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0'
    ]
};

const clickFun = param => {
    console.log(param.name)
}

myChart.on("click", clickFun);