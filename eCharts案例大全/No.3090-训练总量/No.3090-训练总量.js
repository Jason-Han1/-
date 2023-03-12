function deepCopy(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }
    var newobj = {};
    for (var attr in obj) {
        newobj[attr] = obj[attr];
    }
    return newobj;
}
var xData = [],
    yData = [];
var data = [{
    "name": "第一种",
    "value": 1895457
}, {
    "name": "第二种",
    "value": 722232
}, {
    "name": "第三种",
    "value": 1723130
}, {
    "name": "第四种",
    "value": 854920
}]
data.map((a, b) => {
    xData.push(a.name);
    yData.push(a.value);
});
var startColor = ['#0157be', '#7a18ed', '#00bbce', '#ea865a'];
var endColor = ['#0367d4', '#2743ed', '#00c4a5', '#ea2e41'];
var borderStartColor = ['#05acff', '#ee36ff', '#05fcfb', '#ffa597'];
var borderEndColor = ['#09c1ff', '#8171ff', '#05ffff', '#ff6584'];
var RealData = [];
var borderData = [];
data.map((item, index) => {
    var newobj = deepCopy(item);
    var newobj1 = deepCopy(item);
    RealData.push(newobj);
    borderData.push(newobj1);
});
RealData.map((item, index) => {
    item.itemStyle = {
        normal: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: startColor[index] // 0% 处的颜色
                }, {
                    offset: 1,
                    color: endColor[index] // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            },
        }
    }
});
borderData.map((item, index) => {
    item.itemStyle = {
        normal: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: borderStartColor[index] // 0% 处的颜色
                }, {
                    offset: 1,
                    color: borderEndColor[index] // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
            },
        }
    }
});
option = {
    backgroundColor:"rgb(3,39,34)",
    title: {
        text: '训练总量',
        textStyle: {
            color: '#f2f2f2',
            fontSize: 30,
            // align: 'center'
        },
        // top: "5%",
        left:"center"
    },
    legend: {
        top: "10%",
        // left: 10,
        textStyle: {
            color: '#f2f2f2',
              fontSize: 20,
    
        },
        icon: 'circle',
        data: data,
    },
     tooltip: {
                formatter: "{a}：<br/>{b}: {c}人"
            },
    series: [
        // 主要展示层的
        {
            radius: ['33%', '61%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            name: "民警训练总量",
            data: RealData,
           
        },
        // 边框的设置
        {
            radius: ['31%', '34%'],
            center: ['50%', '50%'],
            type: 'pie',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            animation: false,
            tooltip: {
                show: false
            },
            data: borderData
        },

    ]
};