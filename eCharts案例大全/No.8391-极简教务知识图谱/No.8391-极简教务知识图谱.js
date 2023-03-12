var size = 60;
var size1 = 30;
var yy = 200;
var yy1 = 250;

var listdata = [];
var links = [];



//著需要设定一下四个参数
//设定疾病名称
var myclass = "17级计科网工班";
//设定传入的学生数组
var stus = ["学神", "学霸", "学圣", "学仙"];
//设定传入的操作数组
var opes = ["选课", "退课", "旷课"];
//设定传入的教师数组
var techs = ["杜老师", "刘老师", "安老师", "其他老师"];

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

var legendes = ["学生", "操作", "教师", "班级"];
var texts = [];
for (var i = 0; i < legendes.length; i++) {
    texts.push({
        "name": legendes[i],
    })
}

var cat1 = ["学生"];
for (var i = 0; i < stus.length; i++) {
    cat1.push(stus[i]);
}
var cat2 = ["操作"];
for (var i = 0; i < opes.length; i++) {
    cat2.push(opes[i]);
}
var cat3 = ["教师"];
for (var i = 0; i < techs.length; i++) {
    cat3.push(techs[i]);
}
var cat4 = [];
cat4.push(myclass);

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
        text: "极简教务知识图谱",
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