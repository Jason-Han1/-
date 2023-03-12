option = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '2%',
        right: '45%',
        top: '6%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#dbdee2'
            }
        },
        axisLabel: {
            color: '#666666'
        },
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#dbdee2'
            }
        },
        axisLabel: {
            color: '#666666'
        },
        splitLine: {
            show: false
        },
        type: 'value'
    },
    dataZoom: {
        show: true
    },
    series: [{
        name: '数据',
        smooth: true,
        type: 'line',
        symbolSize: 8,
        symbol: 'circle',
        data: [90, 50, 39, 50, 120, 82, 80],
        areaStyle: {
            normal: {
                opacity: 0.25
            }
        },
    }, {
        type: 'pie',
        center: ['78%', '25%'],
        radius: ['38%', '38.2%'],
        silent: true,
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                color: '#c4ccd3'
            }
        },
        data: [0]
    }, {
        type: 'pie',
        center: ['78%', '25%'],
        radius: ['23%', '23.2%'],
        silent: true,
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                color: '#c4ccd3'
            }
        },
        data: [0]
    }, {
        type: 'pie',
        center: ['78%', '75%'],
        radius: ['38%', '38.2%'],
        silent: true,
        labelLine: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                color: '#c4ccd3'
            }
        },
        data: [0]
    }, {
        type: 'pie',
        center: ['78%', '25%'],
        radius: ['26%', '35%'],
        name: '数据',
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        label: {
            normal: {
                show: true,
            }
        },
        data: [{
            value: 120,
            name: '占位1'
        }, {
            value: 70,
            name: '占位2'
        }, {
            value: 10,
            name: '占位3'
        }, {
            value: 90,
            name: '占位4'
        }]
    }, {
        type: 'pie',
        center: ['78%', '75%'],
        radius: [0, '35%'],
        name: '数据',
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        label: {
            normal: {
                normal: {
                    show: true,
                }
            }
        },
        data: [{
            value: 120,
            name: '占位1'
        }, {
            value: 170,
            name: '占位2'
        }, {
            value: 120,
            name: '占位3'
        }, {
            value: 90,
            name: '占位4'
        }]
    }]
};