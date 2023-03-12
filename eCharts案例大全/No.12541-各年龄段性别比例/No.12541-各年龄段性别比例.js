// 指定图表的配置项和数据
var data = [{
    name: "10-20岁",
    value1: "100",
    value2: "200"
}, {
    name: "20-30岁",
    value1: "145",
    value2: "300"
}, {
    name: "30-40岁",
    value1: "145",
    value2: "300"
}, {
    name: "40-50岁",
    value1: "145",
    value2: "300"
}, {
    name: "50-60岁",
    value1: "145",
    value2: "300"
}, {
    name: "60-70岁",
    value1: "305",
    value2: "300"
}];
var nameList = [];
var value1List = [];
var value2List = [];
var maxNum = 0;
var tempNum;
var tempValue1;
var tempValue2;
for (var i = 0; i < data.length; i++) {
    nameList.push(data[i].name);
    tempValue1 = data[i].value1;
    tempValue2 = data[i].value2;
    tempNum = tempValue1 - (-tempValue2);
    if (tempNum > maxNum) {
        maxNum = tempNum;
    }
    value1List.push(tempValue1);
    value2List.push(tempValue2);

}
option = {
    title: {
        text: "各年龄段性别比例",
        x: "center",
        y: 20,
        textStyle: {
            color: "#d8d8d8",
            fontSize: 16,
            fontFamily: "Microsoft YaHei"
        }
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow"
        },
        //formatter: "{b0}<br />{a0}:{c0}<br>{a1}{c1}"
    },
    toolbox: {
        show: !0,
        orient: "vertical",
        right: 5,
        itemSize: 22,
        feature: {}
    },
    grid: {
        right: "15%",
        left: "16%",
        borderWidth: 0
    },
    legend: {
        data: ["男", "女"],
        y: 10,
        x: '80%',
        textStyle: {
            color: "#e4e4e4",
            fontFamily: "Microsoft YaHei"
        }
    },
    calculable: !1,
    backgroundColor: "#1D222A",
    xAxis: [{
        type: "value",
        axisLine: {
            lineStyle: {
                color: "#4a4a4a",
                width: 1
            }
        },
        axisTick: {
            show: true
        },
        name: "单位：人",
        nameTextStyle: {
            color: "#e4e4e4"
        },
        axisLabel: {
            textStyle: {
                color: "#e4e4e4",
                fontFamily: "Microsoft yahei"
            }
        },
        max: Math.ceil(maxNum / 100) * 100,
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        name: "年龄段",
        nameTextStyle: {
            color: "#e4e4e4"
        },
        type: "category",
        axisLine: {
            lineStyle: {
                color: "#4a4a4a",
                width: 1
            }
        },
        axisLabel: {
            formatter: function(a) {
                for (i in a)
                    return a.length > 5 ? a.substring(0, 4) + ".." : a
            },
            textStyle: {
                color: "#e4e4e4",
                fontFamily: "Microsoft yahei"
            }
        },
        axisTick: {
            show: !1
        },
        splitArea: {
            show: !1
        },
        splitLine: {
            show: !1
        },
        data: nameList
    }],
    series: [{
            name: '男',
            type: 'bar',
            barWidth: 10,
            stack: '总量',
            color: '#50a5ff',
            itemStyle: {
                //barBorderRadius: [15, 0, 0, 15]
            },
            emphasis: {
                itemStyle: {
                    // color: '#bd881f'
                }
            },
            data: value1List
        },
        {
            name: '女',
            type: 'bar',
            barWidth: 10,
            stack: '总量',
            color: '#49ff16',
            itemStyle: {
                //barBorderRadius: [0, 15, 15, 0]
            },
            emphasis: {
                itemStyle: {
                    // color: '#bd881f'
                }
            },
            data: value2List
        }
    ],
    noDataLoadingOption: {
        text: "暂无数据",
        effect: "whirling"
    }
}