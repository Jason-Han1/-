const handred = 100
let point = 80

var sData = [{
    name: "合同金额",
    value: "40000"
}, {
    name: "变更金额",
    value: "53000"
}, {
    name: "累计完成金额",
    value: ""
}];
var money = 15

var legendData1 = [];
var legendData2 = [];
for (var i = 0; i < sData.length; i++) {

    var itemName = sData[i].name;



    legendData2.push(itemName)

}
var colorList = ['#3085ff', '#f1b144', '#1bcc98'];
option = {
    backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#000F44' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#000B3B' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    },
    title: {
        text: "{c|" + '15' + "}{d|万元}{c|\n}{a|变更后金额}",
        x: "center",
        y: "center",
        textStyle: {
            rich: {
                a: {
                    fontSize: 12,
                    color: "#c9c9c9",
                    // 
                },

                c: {
                    fontSize: 20,
                    lineHeight: 40,
                    fontWeight: "bold",
                    color: "#c9c9c9",
                },
                d: {
                    fontSize: 12,

                    fontWeight: "bold",
                    color: "#c9c9c9",
                },
            },
        },
    },
    grid: {
        containLabel: true,
        left: 20,
        right: 20,
        bottom: 20,
        top: 40,
    },
    tooltip: {
        trigger: 'item',
        borderColor: 'rgba(255,255,255,.3)',
        backgroundColor: 'rgba(13,5,30,.6)',
        borderWidth: 1,
        padding: 5,
        formatter: function(parms) {
            var str;
            if (parms.name == "累计完成金额") {
                str =
                    "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#1bcc98;'></span>" +
                    "" +
                    parms.data.name +
                    "</br>" +
                    "金额: " +
                    money +
                    "万元</br>" +
                    "占比：" +
                    point +
                    "%";
            } else if (parms.name == "") {
                str =
                    "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#1bcc98;'></span>" +
                    "" +
                    "" +
                    "累计完成金额" +
                    "</br>" +
                    "金额: " +
                    money +
                    "万元</br>" +
                    "占比：" +
                    point +
                    "%";
            } else {
                str =
                    parms.marker +
                    "" +
                    parms.data.name +
                    "</br>" +
                    "金额：" +
                    parms.data.value +
                    "万元</br>" +
                    "占比：" +
                    parms.percent +
                    "%";
            }
            var box = `<div style="font-size:0.14rem">${str}</div>`;
            return box;
        },
    },
    legend: [{
        type: "scroll",
        // orient: 'vertical',
        icon: "circle",
        left: "center",
        align: "left",
        // top: 'center',
        bottom: "15",
        itemGap: 10,
        itemWidth: 10,
        // bottom:'50%',
        textStyle: {
            color: "#c9c9c9",
            fontSize: 12,
        },
        selectedMode: false,
        data: legendData2
    }],
    series: [{
            type: 'pie',
            z: 3,
            center: ['50%', '50%'],
            radius: ['40%', '55%'],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 15,
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList[params.dataIndex]
                    }
                }
            },
            label: {
                show: false,
                position: 'outside',
                formatter: '{a|{b}：{d}%}\n{hr|}',
                rich: {
                    hr: {
                        backgroundColor: 't',
                        borderRadius: 3,
                        width: 3,
                        height: 3,
                        padding: [3, 3, 0, -12]
                    },
                    a: {
                        padding: [-30, 15, -20, 15]
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 20,
                    length2: 30,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            data: sData
        },
        {
            name: 'circle',
            type: 'pie',
            clockWise: true,
            radius: ['30%', '35%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: point,
                // name: '占比',
                itemStyle: {
                    normal: {
                        color: { // 颜色渐变
                            colorStops: [{
                                offset: 0,
                                color: '#1bcc98' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#1bee97' // 100% 处的颜色1
                            }]
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '剩余',
                value: handred - point,
                itemStyle: {
                    normal: {
                        color: '#E1E8EE'
                    }
                }
            }]
        }

    ]
};
