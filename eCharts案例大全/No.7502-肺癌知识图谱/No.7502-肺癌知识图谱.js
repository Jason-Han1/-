var size = 60;
var size1 = 30;
var yy = 200;
var yy1 = 250;

var listdata = [];
var links = [];

var med = "药品";
var ope = "症状";
var che = "号源";

//著需要设定一下四个参数
//设定疾病名称
var diease = "肺癌";
//设定传入的药品数组
var meds = ["PD1", "奥希替尼", "特罗凯", "克唑替尼"];
//设定传入的操作数组
//咳嗽，胸痛，气喘，痰中带血
var opes = ["咳嗽", "气喘", "痰中带血", "胸闷胸疼"];
//设定传入的检查数组
//https://www.zhihu.com/question/35696825
var ches = ["王俊", "王洁", "朱广迎", "杨帆"];

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

var legendes = ["药物", "症状", "号源", "疾病"];
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
var cat2 = ["症状"];
for (var i = 0; i < opes.length; i++) {
    cat2.push(opes[i]);
}
var cat3 = ["号源"];
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
        text: "肺癌知识图谱",
        top: "top",
        left: "left",
        textStyle: {
            color: '#f7f7f7'
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
    backgroundColor: '#00000',
    legend: {
        data: legendes,
        textStyle: {
            color: '#fff'
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
            edgeLength: 15,
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
                fontSize: 16,
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