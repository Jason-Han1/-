var data = [{
                value: 10,
                name: 'IDS'
            },
            {
                value: 5,
                name: 'VPN'
            },
            {
                value: 50,
                name: '交换机'
            }
];
var a = 0;
for (var i = 0; i < data.length; i++) {
    a += data[i].value;
}
data.push({
    value: a,
    name: '__other',
    itemStyle: {
        normal: {
            color: 'rgba(0,0,0,0)'
        }
    }
});

// 中心园
var data1 = [{
            name: '',
            value: 0,
            itemStyle: {
                normal: {
                    color: "#49d9fe"
                }
            }
        }];
var b = 0;
for (var i = 0; i < data1.length; i++) {
    b += data1[i].value;
}
data1.push({
    value: b,
    name: '__other',
    itemStyle: {
        normal: {
            color: 'rgba(0,0,0,0)'
        }
    }
});



// 外圈
var data2 = [{
            name: '',
            value: 0,
            itemStyle: {
                normal: {
                    color: "#49d9fe"
                }
            }
        }];
var b = 0;
for (var i = 0; i < data2.length; i++) {
    b += data2[i].value;
}
data2.push({
    value: b,
    name: '__other',
    itemStyle: {
        normal: {
            color: 'rgba(0,0,0,0)'
        }
    }
});



option = {
    backgroundColor:"#0B1837",
    color: ['#f0b96c', '#06dbd7', '#8cd2b4'],
    // title: {
    //     text: '网络/安全设备',
    //     left: '60',
    //     top: 0,
    //     textAlign: 'center',
    //     textStyle: {
    //         color: '#fff',
    //         fontSize: 14,
    //         fontWeight: 0
    //     }
    // },
    grid: {
        left: -100,
        top: 50,
        bottom: 10,
        right: 10,
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        type: "scroll",
        orient: "vartical",
        // x: "right",
        top: "center",
        right: "15",
        // bottom: "0%",
        itemWidth: 16,
        itemHeight: 8,
        itemGap: 16,
        textStyle: {
            color: '#A3E2F4',
            fontSize: 12,
            fontWeight: 0
        },
        data: ['A', 'B', 'C']
    },
    polar: {},
    angleAxis: {
        interval: 1,
        type: 'category',
        data: [],
        z: 10,
        axisLine: {
            show: false,
            lineStyle: {
                color: "#0B4A6B",
                width: 1,
                type: "solid"
            },
        },
        axisLabel: {
            interval: 0,
            show: true,
            color: "#0B4A6B",
            margin: 8,
            fontSize: 16
        },
    },
    radiusAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false,
        }
    },
    calculable: false,
    series: [{
        type: 'pie',
        startAngle: -180,
        radius: ["5%", "10%"],
        hoverAnimation: false,
        labelLine: {
            normal: {
                show: false,
                length: 30,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        data: data1
    }, {
        type: 'pie',
        startAngle: -180,
        radius: ["90%", "95%"],
        hoverAnimation: false,
        labelLine: {
            normal: {
                show: false,
                length: 30,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        name: "",
        data: data2
    },{
        stack: 'a',
        type: 'pie',
        startAngle: -180,
        radius: ['20%', '80%'],
        zlevel:10,
        label: {
            normal: {
                show: false,
                formatter: "{c}",
                textStyle: {
                    fontSize: 12,
                },
                position: 'outside'
            },
            emphasis: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: false,
                length: 20,
                length2: 55
            },
            emphasis: {
                show: false
            }
        },
        data: data
    }, ]
}