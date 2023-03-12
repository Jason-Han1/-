var dataname=['自然科学','人文与社会科学','工程与技术学','医药科学','农业科学']
var datamax=[20,20,20,20,20]
var datavaule=[9,16,20,15,12] 
var datavaule1=[6,8,10,6,5]
var datavaule2=[15,12,16,10,16]

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
        data: ['博士','硕士','学士'],
        type: "scroll",
		icon:"circle",
        right: '20',
        top: '15',
        itemGap: 30,
        itemWidth: 16,
        itemHeight: 16,
        textStyle: {
            fontSize: '15',
            color: '#656565',
        },

    },
    radar: {
        center: ["50%", "60%"],
        radius: "65%",
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
        name: "博士",
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
    },{
        name: "硕士",
        type: "radar",
        symbol: "circle",
        symbolSize:6,
        areaStyle: {
            normal: {
                color: 'rgba(103, 193, 57, 0.18)',
            }
        },
        itemStyle: {
            color: '#67C139',
        },
        lineStyle: {
            normal: {
                color: "#67C139",
                width: 2
            }
        },
        data: [datavaule1]
    },{
        name: "学士",
        type: "radar",
        symbol: "circle",
        symbolSize:6,
        areaStyle: {
            normal: {
                color: 'rgba(234, 164, 61, 0.18)',
            }
        },
        itemStyle: {
            color: '#EAA43D',
        },
        lineStyle: {
            normal: {
                color: "#EAA43D",
                width: 2
            }
        },
        data: [datavaule2]
    }]
};