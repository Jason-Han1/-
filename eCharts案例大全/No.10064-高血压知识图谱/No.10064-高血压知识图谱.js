var size = 60;
var size1 = 30;
var yy = 200;
var yy1 = 250;

var listdata = [];
var links = [];

var med = "药品";
var ope = "生活习惯";
var che = "检查";

//著需要设定一下四个参数
//设定疾病名称
var diease = "高血压";
//设定传入的药品数组
var meds = ["硝苯地平", "卡托普利", "利美尼定", "氢氯噻嗪"];
//设定传入的操作数组
var opes = ["摄盐", "抽烟","饮酒", "运动","心理调整"];
//设定传入的检查数组
var ches = ["血压测量", "心率测量", "体重测量","心电图", "血液检查"];

function setData(arr, n) {
    for (var i = 0; i < arr.length; i++) {
        listdata.push({
            x: i * 50,
            y: size + i * 10,
            "name": arr[i],
            "symbolSize": size,
            "category": n,
            "draggable": "true"
        })
    }
}

function setLinkData(arr, title) {
    for (var i = 0; i < arr.length; i++) {
        links.push({
            "source": arr[i],
            "target": title,
            lineStyle: {
                normal: {
                    color: 'source',
                }
            }
        })
    }
}

var legendes = ["药物", "生活习惯", "检查", "疾病"];
var texts = [];
for (var i = 0; i < legendes.length; i++) {
    texts.push({
        "name": legendes[i],
    })
}

var cat1 = ["药物"];
for (var i = 0; i < meds.length; i++) {
    cat1.push(meds[i]);
}
var cat2 = ["生活习惯"];
for (var i = 0; i < opes.length; i++) {
    cat2.push(opes[i]);
}
var cat3 = ["检查"];
for (var i = 0; i < ches.length; i++) {
    cat3.push(ches[i]);
}
var cat4 = [];
cat4.push(diease);

setData(cat1, 0);
setData(cat2, 1);
setData(cat3, 2);
setData(cat4, 3);

setLinkData(cat1, cat1[0]);
setLinkData(cat2, cat2[0]);
setLinkData(cat3, cat3[0]);
setLinkData(legendes, cat4[0]);

option = {
    title: {
        text: "高血压知识图谱",
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
            saveAsImage: {
                show: true
            }
        }
    },
    backgroundColor: '#ffffff',
    legend: {
        data: legendes,
        textStyle: {
            color: '#000'
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
            repulsion: 60,
            gravity: 0.1,
            edgeLength: 20,
            layoutAnimation: true,
        },
        data: listdata,
        links: links,
        categories: texts,
        roam: false,
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: '{b}',
                fontSize: 12,
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