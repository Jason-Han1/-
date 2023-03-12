var placeHolderStyle = {
    normal: {
        color: '#17315b', //未完成的圆环的颜色
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: '#17315b' //未完成的圆环的颜色
    }
};

var option = {
    backgroundColor: {
        type: 'radial',
        x: 0.5,
        y: 0.5,
        r: 1,
        colorStops: [{
            offset: 0,
            color: '#00498a' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#142541' // 100% 处的颜色
        }],
        globalCoord: false // 缺省为 false
    },
    color: ['#33b4eb'],
    textStyle: {
        color: '#33b4eb',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        show: true,
        left: 30,
        right: 30,
        top: 20,
        bottom: 30,
        containLabel: true,
        borderColor: '#33b4eb',
        borderWidth: 1,
        shadowBlur: 0
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            lineStyle: {
                color: '#33b4eb'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#0e5f97'
            }
        }
    }],

    yAxis: [{
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#33b4eb'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#0e5f97'
            }
        },
        axisLabel: {
            formatter: '￥{value}'
        }
    }],
    series: [{
        name: '收 客',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                color: '#ffd800',
                width: 3,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#ffd800',
                width: 3,
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowBlur: 10,
                shadowOffsetY: 10,
            }
        },
        data: [1504, 352, 10514, 514, 800, 178, 80, 8178, 4878, 708, 878, 7800]
    }, {
        name: '营业额',
        type: 'bar',
        data: [2154.10, 15487.10, 1541, 10045, 1054, 89, 945, 187, 178, 4147, 989, 14578]
    }]
};