let source = ['40%', '50%']
    // 指定图表的配置项和数据
var option = {
    title: {
        text: '监管人员体系',
        top: '30%',
        right: "10%",
        textStyle: {
            color: '#e0e0e0'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        itemWidth: 14,
        orient: '',
        icon: 'rect',
        right: "10%",
        top: 'center',
        data: ['机构数量', '机构人员数量', '监管信息员数量'],
        textStyle: {
            color: '#e0e0e0'
        }
    },
    calculable: true,
    series: [{
        type: 'pie',
        data: [100],
        z: 2,
        radius: ['69%', '0%'],
        center: source,
        itemStyle: {
            normal: {
                color: '#000',
            }
        },
        silent: true,
        labelLine: {
            normal: {
                show: false
            }
        }
    }, {
        type: 'pie',
        data: [100],
        z: 1,
        radius: ['70%', '0%'],
        center: source,
        itemStyle: {
            normal: {
                color: '#fff',
            }
        },
        silent: true,
        labelLine: {
            normal: {
                show: false
            }
        }
    }, {
        type: 'pie',
        data: [100],
        z: 4,
        radius: ['10%', '0%'],
        center: source,
        itemStyle: {
            normal: {
                color: '#000',
            }
        },
        silent: true,
        labelLine: {
            normal: {
                show: false
            }
        }
    }, {
        type: 'pie',
        data: [100],
        z: 3,
        radius: ['11%', '0%'],
        center: source,
        itemStyle: {
            normal: {
                color: '#fff',
            }
        },
        silent: true,
        labelLine: {
            normal: {
                show: false
            }
        }
    }, {
        name: '访问来源',
        type: 'pie',
        radius: ["15%", "60%"],
        center: source,
        roseType: 'area',
        startAngle: 230,
        label: {
            normal: {
                show: false,
            },

        },
        data: [{
            value: 122,
            name: '机构数量'
        }, {
            value: 88,
            name: '机构人员数量'
        }, {
            value: 90,
            name: '监管信息员数量'
        }]
    }]
};