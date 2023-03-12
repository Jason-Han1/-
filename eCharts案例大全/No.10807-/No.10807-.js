var angle = [220, -40],
    splitNum = 0,
    alertVal = 55,
    targetVal = 69,
    curVal = 212;
var option = {
    backgroundColor: '#fff',
    tooltip: {
        show: false,
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [{
        name:'最外层环仪表盘',
        z: 3,
        type: "gauge",
        min: 100,
        max: 600,
        startAngle: angle[0],
        endAngle: angle[1],
        splitNumber: splitNum + 10,
        axisLine: {
            lineStyle: {
                color: [
                    [1, "#c1c3c5"]
                ],
                width: 10
            }
        },
        axisTick: {
            lineStyle: {
                color: "#fff",
                width: 2
            },
            length: 0,
            splitNumber: 1
        },
        axisLabel: {
            distance: -40,
            formatter: function(v) {
                if (v % 1 == 0 && v != alertVal) return v;
                //else if(v==alertVal) return ''
            },
            textStyle: {
                color: "#bbb"
            }
        },
        splitLine: {
            show: true,
            length: 10,
            lineStyle: {
                color: '#fff',
                width: 2
            }
        },
        itemStyle: {
            normal: {
                color: "#818488",
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowBlur: 10
            }
        },
        detail: {
            formatter: "{value}",
            offsetCenter: [0, "60%"],
            textStyle: {
                fontSize: 30,
                color: "#333"
            }
        },
        title: {
            show: false
        },
        pointer: {
            length: '95%'
        },
        data: [{
            name: "",
            value: curVal
        }]
    }, {
        name: "警戒值仪表盘",
        type: "gauge",
        min: 65,
        max: 75,
        startAngle: angle[0],
        endAngle: angle[1],
        splitNumber: splitNum + 10,
        axisLine: {
            lineStyle: {
                color: [
                    [1, "transparent"]
                ],
                width: 10
            }
        },
        axisTick: {
            lineStyle: {
                color: "#fff",
                width: 2
            },
            length: 0,
            splitNumber: 1
        },
        axisLabel: {
            distance: -40,
            formatter: function(v) {
                if (v == alertVal) return v + '▼';
                //else if(v==alertVal) return ''
            },
            textStyle: {
                color: "#fb5310",
                fontWeight: 700
            }
        },
        splitLine: {
            show: true,
            length: 10,
            lineStyle: {
                color: '#fff',
                width: 2
            }
        },
        itemStyle: {
            normal: {
                color: "transparent"
            }
        },
        pointer: {
            length: 0
        },
        detail: {
            show: false
        },
        title: {
            show: false
        },
        data: [{
            name: "",
            value: ''
        }]
    }, {
        name: "内环仪表盘四段颜色",
        type: "gauge",
        min: 65,
        max: 75,
        radius: '69%',
        startAngle: angle[0],
        endAngle: angle[1],
        splitNumber: splitNum,
        axisLine: {
            lineStyle: {
                color: [
                    [0.186, '#6aaa39'],
                    [0.258, '#46cb18'],
                    [0.386, '#9cd072'],
                    [0.506, '#fdf100'],
                    [0.678, "#fb9902"],
                    [1, "#fd3400"]
                ],
                width: 15
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: true,
            length: 15,
            lineStyle: {
                color: '#fff',
                width: 2
            }
        },
        itemStyle: {
            normal: {
                color: "transparent"
            }
        },
        pointer: {
            length: 0
        },
        detail: {
            show: false
        },
        title: {
            show: false
        },
        data: [{
            name: "",
            value: ''
        }]
    }, {
        name: "警戒值红线阴影",
        type: "gauge",
        min: 65,
        max: 75,
        radius: '70%',
        startAngle: angle[0],
        endAngle: angle[1],
        splitNumber: 1,
        axisLine: {
            lineStyle: {
                color: [
                    [(alertVal - 65) / splitNum - 0.001, 'transparent'],
                    //[0.4, '#fbe010'],
                    [(alertVal - 65) / splitNum + 0.001, '#c53c05'],
                    [1, "transparent"]
                ],
                shadowColor: '#942B01',
                shadowBlur: 8,
                width: 20
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        itemStyle: {
            normal: {
                color: "transparent"
            }
        },
        pointer: {
            length: 0
        },
        detail: {
            show: false
        },
        title: {
            show: false
        },
        data: [{
            name: "",
            value: ''
        }]
    }, {

        name: "目标值蓝色线阴影",
        type: "gauge",
        min: 65,
        max: 75,
        radius: '70%',
        startAngle: angle[0],
        endAngle: angle[1],
        splitNumber: 1,
        axisLine: {
            lineStyle: {
                color: [
                    [(targetVal - 65) / splitNum - 0.001, 'transparent'],
                    //[0.4, '#fbe010'],
                    [(targetVal - 65) / splitNum + 0.001, '#3fa7dc'],
                    [1, "transparent"]
                ],
                shadowColor: '#176ADA',
                shadowBlur: 8,
                width: 20
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        },
        itemStyle: {
            normal: {
                color: "transparent"
            }
        },
        pointer: {
            length: 0
        },
        detail: {
            show: false
        },
        title: {
            show: false
        },
        data: [{
            name: "",
            value: ''
        }]
    }]
}