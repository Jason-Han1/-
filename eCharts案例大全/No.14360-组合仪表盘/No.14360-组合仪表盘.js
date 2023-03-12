option = {
    backgroundColor: 'rgb(0,65,107)',
    title: {
        text: '组合仪表盘',
        textStyle: {
            color: "#fff",
            fontSize: 16
        },
        top: "5%",
        left: "center"
    },
    textStyle: {
        fontSize: 12
    },
    series: [{
        name: '辅助饼图最外层',
        type: 'pie',
        radius: '70%',
        z: -1,
        center: ["50%", "38%"],
        hoverAnimation: false,
        label: {
            normal: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                color: "rgba(0,0,0,0.35)"
            }
        },
        data: [{
            value: 1,
            name: '辅助饼图最外层'
        }]
    }, {
        name: '辅助饼图黑色',
        type: 'pie',
        radius: '8%',
        center: ["50%", "38%"],
        z: 3,
        hoverAnimation: false,
        label: {
            normal: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                color: {
                    type: 'radial',
                    x: 0.1,
                    y: -0.1,
                    r: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#DDDDDD' // 0% 处的颜色
                    }, {
                        offset: 0.7,
                        color: '#1B1811' // 50% 处的颜色
                    }, {
                        offset: 0.71,
                        color: '#1B1811' // 51% 处的颜色
                    }, {
                        offset: 1,
                        color: '#1B1811' // 100% 处的颜色
                    }],
                    globalCoord: true // 缺省为 false
                }
            }
        },
        data: [{
            value: 1,
            name: '辅助饼图黑色'
        }],
    }, {
        name: '辅助饼图红色',
        type: 'pie',
        radius: '4%',
        z: 4,
        center: ["50%", "38%"],
        hoverAnimation: false,
        label: {
            normal: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                color: "#E50505"
            }
        },
        data: [{
            value: 1,
            name: '辅助饼图红色'
        }],
    }, {
        name: '', //大仪表盘左侧
        type: 'gauge',
        min: 0,
        max: 1000,
        z: 2,
        radius: '65%',
        center: ["50%", "38%"],
        startAngle: 130,
        endAngle: 230,
        splitNumber: 5,
        clockwise: false,
        animation: false,
        detail: {
            show: false
        },
        data: [{
            value: 0,
            name: ''
        }],
        axisLine: {
            show: true,
            lineStyle: {
                color: [
                    [1, 'red']
                ],
                width: 0
            }
        },
        splitLine: {
            length: 15,
            lineStyle: {
                color: '#fff',
                width: 2
            }
        },
        axisTick: {
            lineStyle: {
                color: 'red',
                width: 2
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#fff",
            },
            formatter: function(e) {
                return e.toFixed(0);
            }
        },
        itemStyle: {
            normal: {
                color: '#E50505'
            }
        },
        pointer: {
            width: 0
        }
    }, {
        name: '', //大仪表盘右侧
        type: 'gauge',
        min: 1800,
        max: 2800,
        z: 2,
        radius: '65%',
        center: ["50%", "38%"],
        startAngle: -50,
        endAngle: 50,
        splitNumber: 5,
        clockwise: false,
        animation: false,
        detail: {
            show: false
        },
        data: [{
            value: 0,
            name: ''
        }],
        axisLine: {
            show: true,
            lineStyle: {
                color: [
                    [1, 'red']
                ],
                width: 0
            }
        },
        splitLine: {
            length: 15,
            lineStyle: {
                color: '#fff',
                width: 2
            }
        },
        axisTick: {
            lineStyle: {
                color: 'red',
                width: 2
            }
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#fff",
            },
            formatter: function(e) {
                return e.toFixed(0);
            }
        },
        itemStyle: {
            normal: {
                color: '#E50505'
            }
        },
        pointer: {
            width: 0
        }
    }, {
        name: '分钟', //大仪表盘(控制指针指向)
        type: 'gauge',
        min: 0,
        max: 2800,
        z: 2,
        radius: '70%',
        center: ["50%", "38%"],
        startAngle: -50,
        endAngle: 230,
        splitNumber: 8,
        clockwise: false,
        animation: false,
        detail: {
            textStyle: {
                fontSize: 24,
                color: '#f00'
            },
            // backgroundColor: "rgba(0,0,0,0.35)",
            offsetCenter: [0, '60%'],
            borderRadius: 1,
            formatter: function(e) {
                let eStr = e + '';
                let eArr = eStr.split('');
                let len = eArr.length;
                let str = '';
                for (let i = 0; i < len - 1; i++) {
                    str += '{per|' + eArr[i] + '} ';
                }
                return str + '{per|' + eArr[len - 1] + '}';
            },
            rich: {
                per: {
                    color: '#fff',
                    backgroundColor: '#f00',
                    padding: [3, 3, 3, 3],
                    borderRadius: 5,
                    //borderColor: '#aaa',
                    borderWidth: 1,
                    fontSize: 24,
                    fontStyle: 'bold'
                }
            }
        },
        data: [{
            value: 1988,
            name: ''
        }],
        axisLine: {
            show: false,
            lineStyle: {
                color: [
                    [1, 'rgba(0,0,0,0)']
                ],
                width: 0
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        itemStyle: {
            normal: {
                color: '#E50505'
            }
        },
        pointer: {
            width: 2
        } //大仪表盘指针
    }, {
        name: '小仪表盘辅助饼图最外层',
        type: 'pie',
        radius: '50%',
        z: -2,
        startAngle: 30,
        center: ["50%", "72%"],
        hoverAnimation: false,
        label: {
            normal: {
                show: false
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: { //设置半月形饼图
                color: {
                    type: 'radial',
                    x: 0.5,
                    y: -0.16,
                    r: 1.13,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(0,0,0,0)' // 0% 处的颜色
                    }, {
                        offset: 0.6,
                        color: 'rgba(0,0,0,0)' // 60% 处的颜色
                    }, {
                        offset: 0.61,
                        color: 'rgba(0,0,0,0.35)' // 61% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0,0,0,0.35)' // 100% 处的颜色
                    }],
                    globalCoord: true // 缺省为 false
                }
            }
        },
        data: [{
            value: 1,
            name: '小仪表盘辅助饼图最外层'
        }],
    }, {
        name: '', //小仪表盘最外层显示刻度标签
        type: 'gauge',
        min: 0,
        max: 100,
        z: 2,
        radius: '55%',
        center: ["50%", "72%"],
        startAngle: 0,
        endAngle: -180,
        splitNumber: 5,
        clockwise: false,
        animation: false,
          detail: {
            textStyle: {
                fontSize: 20,
                color: '#f00'
            },
            // backgroundColor: "rgba(0,0,0,0.35)",
            offsetCenter: [0, '-20%'],
            borderRadius: 1,
            formatter: function(e) {
                return  '分钟';
            }
        },
        data: [{
            value: 27,
            name: ''
        }],
        axisLine: {
            lineStyle: {
                color: [
                    [1, 'rgba(0,0,0,0)']
                ],
                width: 0
            }
        },
        splitLine: {
            length: 15,
            lineStyle: {
                color: 'rgba(0,0,0,0)',
                width: 2
            }
        },
        axisTick: {
            lineStyle: {
                color: 'rgba(0,0,0,0)',
                width: 2
            }
        },
        axisLabel: {
            textStyle: {
                color: "#fff",
            },
            formatter: function(e) {
                return e;
            }
        },
        pointer: {
            width: 0
        }
    }, {
        name: '', //小仪表盘显示轴线及刻度
        type: 'gauge',
        min: 0,
        max: 100,
        z: 2,
        radius: '40%',
        center: ["50%", "72%"],
        startAngle: 0,
        endAngle: -180,
        splitNumber: 5,
        clockwise: false,
        animation: false,
        detail: {
            textStyle: {
                fontSize: 24,
            },
            backgroundColor: "#f00",
            offsetCenter: [0, '10%'],
            borderRadius: 10,
            formatter: function(e) {
                return e + "%";
            }
        },
        data: [{
            value: 27,
            name: ''
        }],
        axisLine: {
            lineStyle: {
                color: [
                    [1, '#fff']
                ],
                width: 0
            }
        },
        splitLine: {
            length: 15,
            lineStyle: {
                color: '#fff',
                width: 2
            }
        },
        axisTick: {
            lineStyle: {
                color: 'red',
                width: 2
            }
        },
        axisLabel: {
            show: false
        },
        itemStyle: {
            normal: {
                color: '#E50505'
            }
        },
        pointer: {
            width: 3
        }
    }]
};