var seriesData = [{
    name: "支付宝",
    value: "40000"
}, {
    name: "微信",
    value: "40000"
}, {
    name: "京东",
    value: "53000"
}, {
    name: "百度",
    value: "40000"
}];
var legendData = ["支付宝", "微信", "京东", "百度"]
var colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A'];
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
            color: '#091732' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    },
    title: {
        text: '品种',
        x: 'center',
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
                "数量：" + parms.data.value + "头</br>" +
                "占比：" + parms.percent + "%";
            return str;
        }
    },
    legend: {
        type: "scroll",
        orient: 'vertical',
        left: '10%',
        align: 'auto',
        top: 'middle',
        textStyle: {
            color: '#fff'
        },
        data: legendData
    },
    series: [{
        type: 'pie',
        z: 3,
        center: ['50%', '50%'],
        radius: ['25%', '30%'],
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
        data: seriesData
    }]
};