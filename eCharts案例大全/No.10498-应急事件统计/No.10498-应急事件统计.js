data = [{
        value: 107,
        name: '常规',
        itemStyle: {
            color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                        offset: 0,
                        color: '#C9F351'
                    },
                    {
                        offset: .5,
                        color: '#688032'
                    },
                    {
                        offset: 1,
                        color: '#688032'
                    }
                ],
                globalCoord: false // 缺省为 false
            }
        },
    },
    {
        value: 54,
        name: '暂缓',
        itemStyle: {
            color: {
                x: 1,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#265E3B'
                }, {
                    offset: 1,
                    color: '#21D0AF'
                }],
                globalCoord: false // 缺省为 false
            }
        },
    },
    {
        value: 57,
        name: '次紧急',
        itemStyle: {
            color: {
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#112B64'
                }, {
                    offset: 1,
                    color: '#0AC8E0'
                }],
                globalCoord: false // 缺省为 false
            }
        },
    },
    {
        value: 27,
        name: '紧急',
        itemStyle: {
            color: {
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#5C2F1C'
                }, {
                    offset: 1,
                    color: '#FE9F43'
                }],
                globalCoord: false // 缺省为 false
            }
        },
    },
];
// 累计事件次数
var totalTime = 0;
for (var i = 0; i < data.length; i++) {
    totalTime += data[i].value;
}
var radius =  ["40%", "58%"];//圆的大小
objData = arrayObj(data, "name");
var legendData = ['常规', '暂缓', '次紧急', '紧急'];

function arrayObj(array, key) {
    var resObj = {};
    for (var i = 0; i < array.length; i++) {
        resObj[array[i][key]] = array[i];
    }
    return resObj;
}
var rich = {
    text: {
        color: "#666",
        fontSize: 14,
        align: 'center',
        verticalAlign: 'middle',
        padding: 5
    },
    value: {
        color: "#8693F3",
        fontSize: 24,
        align: 'center',
        verticalAlign: 'middle',
        padding: [0, 20]
    },
    title: {
        fontSize: 18,
        color: "#82A1BD",
        padding: [0, 10]
    },
    num: {
        fontSize: 25,
        // lineHeight: 20,
        color: "#fff",
        fontWeight: 400,
    },
    bule: {
        color: '#00F7FE',
        fontSize: 35,
        padding: [10, 0],
        fontWeight: 600,
    }
};
option = {
    //  backgroundColor: "rgba(255,255,255,1)",
    backgroundColor: '#000',
    legend: {
        orient: 'vertical',
        x: 850,
        y: 'center',
        // icon:'image://./images/icon1.png'//格式为'image://+icon文件地址'，其中image::后的//不能省略
        data: legendData,
        formatter: function(name) {
            return "{title|" + name + "}{num|" + (objData[name].value) + "}{title|起}"
        },

        textStyle: {
            rich: rich
        },
    },
    series: [{
        // name: '违规次数',
        type: 'pie',
        clockwise: false, //饼图的扇区是否是顺时针排布
        minAngle: 20, //最小的扇区角度（0 ~ 360）
        radius: radius,
        center: ["35%", "50%"],
        avoidLabelOverlap: false,
        itemStyle: { //图形样式
            normal: {
                borderColor: '#000',
                borderWidth: 10,
            },
        },
        label: {
            normal: {
                show: true,
                position: 'center',
                // formatter: '{text|{b}}\n{value|{d}%}',
                formatter: function(parmas) {
                    return "{title|" + "累计事件次数" + '\n' + "}{bule|" + totalTime + '\n' + "}{title|" + "日均发生事件概率" + '\n' + "}{bule|" + '7.43%' + "}"
                },
                rich: rich
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: 46,
                }
            }
        },
        data: data
    }]
};
myChart.setOption(option);