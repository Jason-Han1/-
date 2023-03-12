var seriesData = [{
    name: "二元",
    value: "40000"
}, {
    name: "大白",
    value: "40000"
}, {
    name: "长大",
    value: "53000"
}, {
    name: "杜洛克",
    value: "40000"
}, {
    name: "三元",
    value: "60000"
}, {
    name: "大长",
    value: "10000"
}, {
    name: "PIC",
    value: "20000"
}];
var legendData = ["二元", "大白", "长大", "杜洛克", "三元", "大长", "PIC"]
var colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF'];
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
        left: 'left',
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
        radius: ['25%', '45%'],
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
        data: seriesData
    }, {
        name:'第一层环',
        type: 'pie',
        z: 2,
        tooltip:{
            show:false
        },
        center: ['50%', '50%'],
        radius: ['45%', '58%'],
        hoverAnimation: false,
        clockWise: false,
        itemStyle: {
            normal: {
                // shadowBlur: 40,
                // shadowColor: 'rgba(0, 255, 255,.3)',
                color: 'rgba(1,15,80,.4)',
            },
            emphasis:{
                color: 'rgba(1,15,80,.4)',
            }
        },
        label: {
            show: false
        },
        data: [100]
    }, {
        name:'第二层环',
        type: 'pie',
        z: 1,
        tooltip:{
            show:false
        },
        center: ['50%', '50%'],
        radius: ['58%', '76%'],
        hoverAnimation: false,
        clockWise: false,
        itemStyle: {
            normal: {
                // shadowBlur: 40,
                // shadowColor: 'rgba(0, 255, 255,.3)',
                color: 'rgba(0,15,69,.2)',
            },
            emphasis:{
                color: 'rgba(0,15,69,.2)',
            }
        },
        label: {
            show: false
        },
        data: [100]
    }]
};