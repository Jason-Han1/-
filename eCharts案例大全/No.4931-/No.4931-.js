var data1 = [80, 70, 30, 85, 25];
var data2 = [62, 32, 87, 66, 45];
var indicatorname = ['项目', '著作', '专利', '论文'];
//var maxdata = [100, 100, 100, 100, 100];

var indicator = [];
for (var i = 0; i < indicatorname.length; i++) {
    indicator.push({
        name: indicatorname[i],
        //max: maxdata[i]
    })
}

option = {
    backgroundColor:'#0E2644',
    tooltip: {
        show: true,
        trigger: "item",
    },
    legend: {
        data: ['个人科研数', '校平均科研数'],
        left: '2%',
        top:20,
        itemGap: 20,
        itemWidth: 10,
        itemHeight: 10,
        icon: 'circle',
        textStyle: {
            color: '#C3F0FF',
            fontSize: 13
        }
    },
    radar: [{
        radius: "65%",
        indicator: indicator,
        shape: 'circle',
        name: {
            textStyle: {
                color: '#C3F0FF',
                fontSize: 17
            }
        },
        splitArea: {
            areaStyle: {
                color: 'transparent',
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0)'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#46C4FF',
                type: 'dashed',
                opacity: 0.5
            }
        }
    }, ],
    series: [{
        name: "个人科研数",
        type: "radar",
        symbol: "circle",
        symbolSize: 0,
        itemStyle: {
            color: 'rgba(4, 92, 182, 0.6)'
        },
        areaStyle: {
            color: 'rgba(4, 92, 182, 0.6)'
        },

        data: [data1]
    }, {
        name: "校平均科研数",
        type: "radar",
        symbol: "circle",
        symbolSize: 0,
        itemStyle: {
            color: 'rgba(0, 255, 255, 1)',
        },
        data: [data2]
    }]
}