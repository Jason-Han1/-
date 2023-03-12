option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            label: {
                show: true,
                backgroundColor: '#333'
            }
        }
    },
  
    legend: {
        data: [{
            name: '新单量',
            textStyle: {
                color: "#7d838b"
            }
        }, {
            name: '累计单量',
            textStyle: {
                color: "#7d838b"
            }
        }, {
            name: '人数',
            textStyle: {
                color: "#7d838b"
            }
        }],
        top: "0px",
        textStyle: {
            "color": "#fff"
        }
    },
    xAxis: [{
        type: 'category',
        data: ["8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"],
        axisPointer: {
            type: "shadow"
        },
        axisTick: {
            show: false //X轴上面的刻度线
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#BCC2CA"
            }
        },
        axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
                "color": "#7d838b"
            }
        }
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            show: true,
            textStyle: {
                color: "#7d838b"
            }
        },
        splitLine: {
            show: false //y轴的网格线
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#BCC2CA"
            }
        },
        axisTick: { //y轴刻度线
            show: false
        },
    }, {
        type: 'value',
        show: true,
        axisTick: { //y轴刻度线
            "show": false
        },
        splitLine: {
            show: false //y轴的网格线
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#BCC2CA"
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                "color": "#7d838b"
            }
        }
    }],
    series: [{
        name: '新单量',
        type: 'bar',
        data: [25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        stack: '总量',
        barWidth: 30,
        itemStyle: {
            normal: {
                //barBorderRadius: [5, 5, 0, 0],//柱形弧度
                color: '#FF9080',
                label: {
                    show: true,
                    position: "insideTop",
                    formatter: function(p) {
                        return p.value > 0 ? (p.value) : '';
                    }
                }
            }
        },
    }, {
        name: '累计单量',
        type: 'bar',
        stack: '总量',
        data: [28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
        barWidth: 30,
        itemStyle: {
            normal: {
                //barBorderRadius: [5, 5, 0, 0],//柱形弧度
                color: '#00BFB7',
                label: {
                    show: true,
                    position: "insideTop",
                    formatter: function(p) {
                        return p.value > 0 ? (p.value) : '';
                    }
                }
            }
        },
    }, {
        name: '人数',
        type: 'line',
        data: [3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
        yAxisIndex: 1,
        symbolSize: 10, //拐点的大小
        itemStyle: {
            normal: {
                color: "#FCE630"
            }
        },
        smooth: true
    }]
};