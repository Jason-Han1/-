function randomData() {
    now = new Date(+now + oneMinute);
    var fatigue = Math.random() * 2 - 1;
    return {
        value: [
            [now.getHours(), now.getMinutes()].join(":"),
            Math.round(fatigue * 100) / 100
        ]
    };
}

function randomData2() {
    now = new Date(+now + 60 * 3000);
    var fatigue = Math.random() * 2 - 1;
    return {
        value: [
            [now.getHours(), now.getMinutes()].join(":"),
            Math.round(fatigue * 100) / 100
        ]
    };
}


function randomEmpty() {
    now = new Date(+now + oneMinute);
    var fatigue = "'jhkj'";
    return {
        value: [
            [now.getHours(), now.getMinutes()].join(":"),
            Math.round(fatigue * 100) / 100
        ]
    };
}

var now = +new Date();
var oneMinute = 60 * 1000;
var data = [];
var x = [];
for (var i = 0; i < 50; i++) {
    var item = randomData();
    data.push(item)
    x.push(item.value[0])
}

for (var i = 0; i < 10; i++) {
     var item = randomEmpty();
    data.push(item)
    x.push(item.value[0])
}

for (var i = 0; i < 50; i++) {
    var item = randomData2();
    data.push(item)
    x.push(item.value[0])
}

var option = {
    textStyle: {
        fontSize: 24
    },
    legend: {

        data: [{
            name: "Alert State",
            icon: "square",
            textStyle: {
                color: "#222222",
                fontSize: "13px",
                fontFamily: "Arial"
            }
        }]
    },
    tooltip: {
        trigger: "axis",
        formatter: function(params) {
            console.log(params[0].value[0]);
            return params[0].value[0] + " / " + params[0].value[1];
        }
    },
    xAxis: {
        name: "Time Period",
        nameLocation: "middle",
        nameGap: "40",
        nameTextStyle: {
            fontSize: "16",
            fontWeight: "normal",
            fontStyle: "normal",
            fontFamily: "Arial"
        },
        data: x,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        max: 'dataMax',
        min: 'dataMin',
        name: "Fatigue",
        nameTextStyle: {
            fontSize: "16",
            fontWeight: "normal",
            fontStyle: "normal",
            fontFamily: "Arial"
        },
        type: "value",
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true
        }
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: data,
        itemStyle: {
            normal: {
                color: '#199CD8',
                borderColor: '#fff',
                borderWith: 1,
                shadowBlur: 2,
                shadowOffsetX: 2,
                shadowOffsetY: 5
            }
        },
        lineStyle: {
            normal: {
                width: 2,
                shadowColor: 'rgba(112, 155, 233, 0.5)',
                shadowBlur: 4,
                shadowOffsetY: 4
            }
        },
        markLine: {
            silent: true,
            symbol: false,
            animation: false,
            label: {
                normal: {
                    show: false
                }
            },
            data: [{
                yAxis: -0.10
            }],
            lineStyle: {
                normal: {
                    type: "solid",
                    color: "#CE1C08"
                }
            }
        },
        markArea: {
            itemStyle: {
                normal: {
                    color: "rgba(251,222,222,0.5)",
                    borderColor: "#CE1C08",
                    borderWith: 1
                }
            },
            data: [
                [{
                    // name: '两个屏幕坐标之间的标域',
                    yAxis: 0.5
                }, {
                    coord: 0
                }]
            ]
        }
    }]
};

// setInterval(function() {
//     for (var j = 0; j < 5; j++) {
//         var newitem = randomData();
//         data.shift();
//         data.push(newitem);
//         x.shift();
//         x.push(newitem.value[0]);
//     }

//     myChart.setOption({
//         series: [{
//             data: data
//         }],
//         xAxis: [{
//             data: x
//         }]
//     });
// }, 1000);