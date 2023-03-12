var seriesData = [{
    name: "贷款",
    value: "100000"
}, {
    name: "银行渠道",
    value: "40000"
}, {
    name: "农信渠道",
    value: "53000"
}, {
    name: "微信渠道",
    value: "40000"
}, {
    name: "线下汇款",
    value: "40000"
}];
var legendData = ["贷款", "银行渠道", "农信渠道", "微信渠道",
    "线下汇款", "当面结算"
]
var colorList = ['#8D3EFA', '#2E3DE6', '#3385FF', '#2EE6A8', '#FF3144', '#BB33FF', '#00D5FF', '#00CC66', '#0066FF', '#E55D69', '#DD4171'];
option = {
    backgroundColor: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#0f2c70' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#020917' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    },
    // title: {
    //     text: '品种',
    //     x: 'center',
    //     y: 'center',
    //     textStyle: {
    //         color: '#fff'
    //     }
    // },
    tooltip: {
        trigger: 'item',
        borderColor: 'rgba(255,255,255,.3)',
        backgroundColor: 'rgba(13,5,30,.6)',
        borderWidth: 1,
        padding: 5,
        formatter: function(parms) {
            var str = parms.marker + "" + parms.data.name + "</br>" +
                "数量：" + parms.data.value + "元</br>" +
                "占比：" + parms.percent + "%";
            return str;
        }
    },
    legend: [{
        type: "scroll",
        orient: 'vertical',
        icon: 'square',
        left: '20%',
        align: 'left',
        top: '70%',
        itemGap: 20,
        // bottom:'50%',
        textStyle: {
            fontSize: 16,
            color: '#AAAAAA'
        },
        data: legendData.slice(0, 4)
    }, {
        type: "scroll",
        orient: 'vertical',
        icon: 'square',
        left: '47.5%',
        align: 'left',
        top: '70%',
        itemGap: 20,
        // bottom:'50%',
        textStyle: {
            fontSize: 16,
            color: '#AAAAAA'
        },
        data: legendData.slice(4, 8)
    }, {
        type: "scroll",
        orient: 'vertical',
        icon: 'square',
        left: '75%',
        align: 'left',
        top: '70%',
        itemGap: 20,
        // bottom:'50%',
        textStyle: {
            fontSize: 16,
            color: '#AAAAAA'
        },
        data: legendData.slice(8, 11)
    }],
    series: [{
        type: 'pie',
        center: ['50%', '40%'],
        radius: ['20%', '46%'],
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
            textStyle: {
                fontSize: 18,
            },
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
            show: true,
            normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                    width: 1
                }
            }
        },
        data: seriesData
    }]
};