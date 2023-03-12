var dataname=['德','智（一）','智（二）','体','美','劳']
var datamax=[20,20,20,20,20,20]
var datavaule=[9,16,16,15,12,8] 
var datavaule1=[6,8,10,6,5,8]
var datavaule2=[19,19,19,19,19,19]

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
	legend: {
        data: ['当前分数','均值','满分'],
        type: "scroll",
        orient:'vertical',
		icon:"roundRect",
        right: '20',
        top: 'center',
        itemGap: 30,
        itemWidth: 16,
        itemHeight: 16,
        textStyle: {
            fontSize: '15',
            color: '#656565',
        },

    },
    radar: {
        center: ["50%", "50%"],
        radius: "65%",
        startAngle: 90,
        splitNumber: 5,
        splitArea: {
            areaStyle: {
                color: [ '#FFFFFF', '#F5F9FF', ].reverse(),
            }
        },
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#D2E4F8"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#D2E4F8"
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
        name: "当前分数",
        type: "radar",
        symbol: "none",
        symbolSize:6,
        areaStyle: {
            normal: {
                color: '#80B2FF',
            }
        },
        itemStyle: {
            color: '#80B2FF',
        },
        lineStyle: {
            normal: {
                color: "#80B2FF",
                width: 2
            }
        },
        data: [datavaule]
    },{
        name: "均值",
        type: "radar",
        symbol: "none",
        symbolSize:6,
        /*areaStyle: {
            normal: {
                color: 'rgba(103, 193, 57, 0.18)',
            }
        },*/
        itemStyle: {
            color: '#FF7A28',
        },
        lineStyle: {
            normal: {
                color: "#FF7A28",
                width: 2
            }
        },
        data: [datavaule1]
    },{
        name: "满分",
        type: "radar",
        symbol: "none",
        symbolSize:6,
        /*areaStyle: {
            normal: {
                color: 'rgba(234, 164, 61, 0.18)',
            }
        },*/
        itemStyle: {
            color: '#0263FF',
        },
        lineStyle: {
            normal: {
                color: "#0263FF",
                width: 2
            }
        },
        data: [datavaule2]
    }]
};