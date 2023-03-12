var seriesData = [{
    name: "养殖市场",
    value: "100000"
}, {
    name: "种植市场",
    value: "40000"
}, {
    name: "国家生猪市场",
    value: "53000"
}, {
    name: "智能设备",
    value: "40000"
}];
var legendData = ["养殖市场", "种植市场", "国家生猪市场", "智能设备"]
var colorList = ['#8D3EFA', '#2EE6A8', '#3385FF', '#2E3DE6'];
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
    legend: {
        type: "scroll",
        orient: 'horizontal',
        icon:'square',
        top: '80%',
        left: 'center',
        align: 'auto',
        textStyle: {
            color: '#fff'
        },
        data: legendData
    },
    series: [{
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['20%', '45%'],
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
            show:false,
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