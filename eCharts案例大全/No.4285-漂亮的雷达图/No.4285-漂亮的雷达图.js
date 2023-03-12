// 原作品：https://www.makeapie.com/editor.html?c=xS1sKZMUg7

option = {
    title: {
        text: "近三年月度风险特征分析",
        x: "center",
        textStyle: {
            fontSize: 12
        }
    },
    grid:{
        top:'10%'
    },
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: {
        center: ["50%", "50%"],
        radius: "70%",
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: ["transparent"]
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#a4a4a4"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#a4a4a4"
            }
        },
        indicator: [{
            "name": "1月",
            "max": 100
        }, {
            "name": "2月",
            "max": 100
        }, {
            "name": "3月",
            "max": 100
        }, {
            "name": "4月",
            "max": 100
        }, {
            "name": "5月",
            "max": 100
        }, {
            "name": "6月",
            "max": 100
        }, {
            "name": "7月",
            "max": 100
        }, {
            "name": "8月",
            "max": 100
        }, {
            "name": "9月",
            "max": 100
        }, {
            "name": "10月",
            "max": 100
        }, {
            "name": "11月",
            "max": 100
        }, {
            "name": "12月",
            "max": 100
        }]
    },
    series: [{
        type: "radar",
        name:'月度风险指数',
        symbol: "circle",
        symbolSize: 6,
        itemStyle: {
            normal: {
                color:'rgba(19, 173, 255, 1)',
                borderColor: "rgba(19, 173, 255, 0.4)",
                borderWidth: 6
            }
        },
        areaStyle: {
            normal: {
                color: "rgba(19, 173, 255, 0.5)"
            }
        },
        lineStyle: {
            normal: {
                color: "rgba(19, 173, 255, 1)",
                width: 2,
                type: "dashed"
            }
        },
        label: {
          normal: {
            show: true,
            color: '#a4a4a4',
            position: 'top'
          }
        },
        data: [
            [60, 60, 65, 60, 70, 40, 80, 63, 68, 60, 77, 60]
        ]
    }]
};