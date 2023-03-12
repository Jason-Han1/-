var dataname=['招生公告','高考录取信息','招生计划','往年录取分数','招生政策']
var datamax=[20000,20000,20000,20000,20000]
var datavaule=[9054,16811,19214,15855,12025] 

var indicator = []
for (var i = 0; i < dataname.length; i++) {
    indicator.push({
        name: dataname[i],
        max: datamax[i],
    })
}

option = {
    tooltip: {
        show: true,
        trigger: "item",
    },
    radar: {
        center: ["50%", "50%"],
        radius: "70%",
        startAngle: 90,
        splitNumber: 4,
        splitArea: {
            areaStyle: {
                color: ["transparent"]
            }
        },
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#E7E7E7"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#E7E7E7"
            }
        },
        name: {
            formatter: '{value}',
            textStyle: {
              color: '#656565' , 
              fontSize: 15,
            },
        },
        indicator: indicator
    },

    series: [{
        name: "招生网站各访问内容分布",
        type: "radar",
        symbol: "circle",
        symbolSize:6,
        areaStyle: {
            normal: {
                color: 'rgba(170, 216, 255, 0.18)',
            }
        },
        itemStyle: {
            color: '#4B95F3',
        },
        lineStyle: {
            normal: {
                color: "#4B95F3",
                width: 2
            }
        },
        data: [datavaule]
    }]
}; 