var bgColor = '#041F34',
    borderColor = "rgb(88,142,197)"
option = {
    backgroundColor: bgColor,
    color: [borderColor],
    series: [{
            type: 'pie',
            zlevel: 1,
            radius: ['60%'],
            center: ['50%', '105.5%'],
            silent: true,
            startAngle: 180,
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: _pie1()
        },
        {
            type: 'pie',
            zlevel: 0,
            silent: true,
            center: ['50%', '60%'],
            radius: ['87%', '90%'],
            startAngle: -100,
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [1]
        },
        {
            name: "",
            type: 'gauge',
            splitNumber: 15, //刻度数量
            min: 0,
            max: 200,
            radius: '80%', //图表尺寸
            center: ['50%', '60%'],
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [
                        [1, '#666']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 2
                },
                length: 28,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 22,
                lineStyle: {
                    color: 'auto',
                }
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                show: 0,
            },
            detail: {
                show: 0,
            },
        },
        {
            name: '统计',
            type: 'gauge',
            splitNumber: 15, //刻度数量
            min: 0,
            max: 200,
            radius: '80%', //图表尺寸
            center: ['50%', '60%'],
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [
                        [0, borderColor],
                        [0.10, borderColor],
                        [0.20, borderColor],
                        [0.30, borderColor],
                        [0.40, borderColor],
                        [0.50, borderColor],
                        [0.60, borderColor],
                        [0.70, 'transparent'],
                        [0.80, 'transparent'],
                        [0.90, 'transparent'],
                        [1, 'transparent']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 2
                },
                length: 28,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 22,
                lineStyle: {
                    color: 'auto',
                }
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                show: 0,
                length: '70%',
                width: 2
            },
            detail: {
                show: false
            },
            data: [{
                name: "",
                value: 10
            }]
        }, {
            zlevel: 3,
            top: '95.1%',
            breadcrumb: {
                show: false
            },
            levels: [{
                color: [bgColor],
            }],
            itemStyle: {
                normal: {
                    borderColor: bgColor
                }
            },
            roam: false,
            nodeClick: false,
            width: '100%',
            height: 80,
            type: 'treemap',
            data: [{
                name: '', // First tree
                value: 1
            }]
        }
    ]
};

function _pie1() {
    let dataArr = [];
    for (var i = 0; i < 2; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: borderColor,
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        color: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        }

    }
    return dataArr

}