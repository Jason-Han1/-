var complaintType = [{
    value: 20,
    name: '已完成',
}, {
    value: 40,
    name: '未完成',
}, {
    value: 60,
    name: '处理中',
}];
var buildList = complaintType;
var arry = [];
for (var i = 0; i < buildList.length; i++) {
    let item = {
        value: buildList[i].value,
        name: buildList[i].name,
    };
    arry.push(item)
}
var buildData = arry;
var colorList = ['#34D160', '#F19610', '#FF3333'];
var arr = buildData;

function _pie2() {
    let dataArr = [];
    for (var i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 25,
                itemStyle: {
                    normal: {
                        color: "rgba(232,184,38,1)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        }
    }
    return dataArr
}
var text='投诉数量';
var finish='10';
 var option = {
    color: colorList,
    title: {
        text: finish,
        x: 'center',
        y: '44%',
        textStyle: {
            color: "#19F1F9",
            fontSize: 38
        },
    },
    graphic: [{
        type: "text",
        left: "center",
        top: "37%",
        style: {
            text: text,
            textAlign: "center",
            fill: "#141B5F",
            fontSize: 32,
            fontWeight: 700
        },
    } ],
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        right: 10,
        show: false,
    },
    series: [{
            type: 'pie',
            zlevel: 2,
            silent: true,
            center: ['49.5%', "43%"],
            radius: ['55%', '58%'],
            startAngle: -110,
            label: {
                normal: {
                    show: false
                },
            },
            data: _pie2()
        },
        {
            name: '圆圈',
            type: 'pie',
            zlevel: 1,
            silent: true,
            center: ['49.5%', "43%"],
            radius: ["57%", "58%"],
            hoverAnimation: false,
            color: "#cea053",
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 1,
                name: '',
                itemStyle: {
                    normal: {
                        color: '#e8b826'
                    }
                }
            }]
        },
        {
            type: 'pie',
            center: ['50%', '43%'],
            radius: ['30%', '43%'],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 5,
            itemStyle: {
                normal: {
                    color: function(params) {
                        return colorList[params.dataIndex]
                    }
                }
            },
            //文字消失
            label: {
                formatter: "{text|}\n{b}",
                borderWidth: 20,
                borderRadius: 4,
                padding: [-30, -40, 0, -40],
                alignTo: 'labelLine',
                rich: {
                    b: {
                        color: "#fff",
                        fontSize: 12,
                        lineHeight: 33
                    },
                    per: {
                        fontSize: 12,
                        padding: [2, 4],
                        borderRadius: 2
                    }
                }
            },
            //指示线消失
            labelLine: {
                show: true,
                normal: {
                    position: 'outside',
                    length: 35,
                    length2: 90,
                    show: true
                }
            },
            data: arr,
        }]
}
