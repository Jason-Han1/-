var sData = [{
    name: "指标未完成占比",
    value: 51
}, {
    name: "指标完成占比",
    value: 49
}];
var legendData1 = [];
var legendData2 = [];
for (var i = 0; i < sData.length; i++) {
    var halfLength = Math.ceil(sData.length / 2);
    var itemName = sData[i].name;
    if (i < halfLength) {
        legendData1.push(itemName)
    } else {
        legendData2.push(itemName)
    }
}
var colorList = ['#0066FF', '#2E2EE6', '#4400CC', '#00AACC', '#9BBF30', '#E60000', '#92368D', '#BF9926'];
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
        text: '完成率占比',
        x: '55%',
        y: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        borderColor: 'rgba(255,255,255,.3)',
        backgroundColor: 'rgba(13,5,30,.6)',
        borderWidth: 1,
        padding: 5,
        formatter: function(parms) {
            var str = parms.marker + "" + parms.data.name + "</br>" +
                "占比：" + parms.percent + "%";
            return str;
        }
    },
    legend: [{
        type: "scroll",
        orient: 'vertical',
        icon: 'square',
        left: '8%',
        align: 'left',
        top: 20,
        itemGap: 20,
        // bottom:'50%',
        textStyle: {
            color: '#AAAAAA'
        },
        data: legendData1
    }, {
        type: "scroll",
        orient: 'vertical',
        icon: 'square',
        left: '8%',
        align: 'left',
        top: 60,
        itemGap: 20,
        // bottom:'50%',
        textStyle: {
            color: '#AAAAAA'
        },
        data: legendData2
    }],
    series: [{
        type: 'pie',
 
z: 3,
        center: ['60%', '50%'],
        radius: ['30%', '45%'],
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
            show: true,
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
    }, {
        name: '第一层环',
        type: 'pie',
        z: 2,
        tooltip: {
            show: false
        },
        center: ['60%', '50%'],
        radius: ['45%', '58%'],
        hoverAnimation: false,
        clockWise: false,
        itemStyle: {
            normal: {
                shadowBlur: 1,
                shadowColor: 'rgba(53,139,255,.3)',
                color: 'rgba(1,15,80,.95)',
            },
            emphasis: {
                color: 'rgba(1,15,80,.95)',
            }
        },
        label: {
            show: false
        },
        data: [100]
    }, {
        name: '第二层环',
        type: 'pie',
        z: 1,
        tooltip: {
            show: false
        },
        center: ['60%', '50%'],
        radius: ['58%', '76%'],
        hoverAnimation: false,
        clockWise: false,
        itemStyle: {
            normal: {
                shadowBlur: 1,
                shadowColor: 'rgba(53,139,255,.3)',
                color: 'rgba(0,15,69,.95)',
            },
            emphasis: {
                color: 'rgba(0,15,69,.95)',
            }
        },
        label: {
            show: false
        },
        data: [100]
    }]
};