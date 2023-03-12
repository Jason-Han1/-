// cover: 品种

var seriesData = [{
    name: "1月及以下",
    value: "40000"
}, {
    name: "1-3月",
    value: "40000"
}, {
    name: "3-6月",
    value: "53000"
}, {
    name: "6-12月",
    value: "40000"
}, {
    name: "12月及以上",
    value: "60000"
}];
var legendData = ["1月及以下", "1-3月", "3-6月", "6-12月", "12月及以上"]
var colorList = ['#007AFF', '#E8395D', '#00D7E9', '#00C800', '#7C00FF'];
option = {
    tooltip: {
        trigger: 'item',
        borderColor: 'rgba(255,255,255,.3)',
        backgroundColor: 'rgba(13,5,30,.6)',
        borderWidth: 1,
        padding: 5,
    },
    legend: {
        type: "scroll",
        orient: 'vertical',
        right: '10%',
        top: 'middle',
        textStyle: {
            color: colorList
        },
        data: legendData
    },
    series: [{
        type: 'pie',
        z: 3,
        center: ['35%', '50%'],
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
                // hr: {
                //     backgroundColor: 't',
                //     borderRadius: 3,
                //     width: 3,
                //     height: 3,
                //     padding: [3, 3, 0, -12]
                // },
                // a: {
                //     padding: [-30, 15, -20, 15]
                // }
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