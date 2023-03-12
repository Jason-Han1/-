option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['总量', '去年总量', '涉金融类', '涉黄警情', '涉赌警情', '涉农警情', '房地产物业类', '医疗', '生活服务消费']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        name: '次数',
        position: 'left'
    }, {
        show: false
    }],
    xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    },
    series: [{
        name: '总量',
        type: 'line',
        yAxisIndex: 1,
        label: {
            normal: {
                show: true
            }
        },
        symbolSize: 10,
        lineStyle: {
            normal: {
                width: 5,
                shadowColor: 'rgba(0,0,0,0.5)',
                shadowBlur: 10,
                shadowOffsetY: 15,
                color: 'rgb(190, 93, 99)'
            }
        },
        data: [990, 588, 979, 1102, 1088, 1182, 1149, 0, 0, 0, 0, 0]
    }, {
        name: '去年总量',
        type: 'line',
        yAxisIndex: 1,
        label: {
            normal: {
                show: true
            }
        },
        symbolSize: 10,
        lineStyle: {
            normal: {
                width: 5,
                shadowColor: 'rgba(0,0,0,0.5)',
                shadowBlur: 10,
                shadowOffsetY: 15,
                color: 'rgb(153, 214, 48)'
            }
        },
        data: [993, 733, 1085, 842, 899, 1023, 947, 909, 945, 812, 1002, 980]
    }, {
        name: '涉金融类',
        type: 'bar',
        stack: '次数',
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(249,18,243)'
            }
        },
        data: [197, 134, 138, 167, 160, 174, 164, 0, 0, 0, 0, 0]
    }, {
        name: '涉黄警情',
        type: 'bar',
        stack: '次数',
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(249,205,30)'
            }
        },
        data: [325, 191, 315, 400, 407, 448, 417, 0, 0, 0, 0, 0]
    }, {
        name: '涉赌警情',
        type: 'bar',
        stack: '次数',
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0, 137, 239)'
            }
        },
        data: [138, 111, 156, 139, 116, 151, 154, 0, 0, 0, 0, 0]
    }, {
        name: '涉农警情',
        type: 'bar',
        stack: '次数',
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(158, 206, 32)'
            }
        },
        data: [66, 47, 74, 57, 73, 89, 68, 0, 0, 0, 0, 0]
    }, {
        name: '房地产物业类',
        type: 'bar',
        stack: '次数',
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(220, 139, 103)'
            }
        },
        data: [127, 58, 145, 149, 177, 170, 178, 0, 0, 0, 0, 0]
    }, {
        name: '医疗',
        type: 'bar',
        stack: '次数',
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(134, 174, 30)'
            }
        },
        data: [37, 23, 119, 141, 127, 117, 145, 0, 0, 0, 0, 0]
    }, {
        name: '生活服务消费',
        type: 'bar',
        stack: '次数',
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(195, 226, 228)'
            }
        },
        data: [100, 24, 119, 141, 127, 117, 145, 0, 0, 0, 0, 0]
    }]
};