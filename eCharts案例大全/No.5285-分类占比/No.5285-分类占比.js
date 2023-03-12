var seriesData = [{
    name: "支付",
    value: "120000",
    unit:'人'
}, {
    name: "融资",
    value: "240000",
    unit:'人'
}, {
    name: "理财",
    value: "453000",
    unit:'人'
}];
// var legendData = ["养殖市场", "种植市场", "国家生猪市场", "智能设备"]
var legendData = seriesData.map(item=>{
    return item.name;
})
var colorList = ['#8D3EFA', '#2EE6A8', '#2E3DE6', '#3385FF'];
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
                "数量：" + parms.data.value +parms.data.unit+ "</br>" +
                "占比：" + parms.percent + "%";
            return str;
        }
    },
    legend: {
        type: "scroll",
        orient: 'horizontal',
        icon:'circle',
        top: '80%',
        left: 'center',
        align: 'auto',
        itemGap:30,
        textStyle: {
            color: '#fff'
        },
        data: legendData
    },
    series: [{
        type: 'pie',
        center: ['50%', '45%'],
        radius: ['25%', '55%'],
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
            formatter: '{a|{b}:{d}%}\n{hr|}',
            rich: {
                // hr: {
                //     backgroundColor: 't',
                //     borderRadius: 3,
                //     width: 3,
                //     height: 3,
                //     padding: [3, 3, 0, -12]
                // },
                a: {
                    padding: [3, 3, 3, 3],
                    fontSizeL:12,
                    color:'#aaaaaa'
                }
            }
        },
        labelLine: {
            show:false,
            normal: {
                length: 0,
                length2: 0,
                lineStyle: {
                    width: 0
                }
            }
        },
        data: seriesData
    }]
};