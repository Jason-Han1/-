option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        color: ["#1E87F0"],
        data: ['菜品销售'],
        left: 'right',
        top: '-5px'
    },
    grid: {
        top: 'middle',
        left: '3%',
        right: '4%',
        bottom: '3%',
        height: '80%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            rotate: 45,
            formatter: function(value) {
                return value;
            }
        },
        axisLine: {
            lineStyle: {
                color: "#999"
            }
        },
        data: ['青椒肉丝', '剁椒鱼头', '回锅肉', '叫花鸡', '口水鸡', '辣子鸡'],
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#DDD'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#333"
            },
        },
        nameTextStyle: {
            color: "#999"
        },
        splitArea: {
            show: false
        }
    },
    series: [{
        name: '菜品销售',
        type: 'line',
        data: [125, 568, 25, 36, 784, 56],
        lineStyle: {
            normal: {
                width: 1.5,
                color: {
                    type: 'linear',
                    colorStops: [{
                            offset: 0,
                            color: '#1E87F0' // 0% 处的颜色
                        },
                        {
                            offset: 0.4,
                            color: '#1E87F0' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: '#1E87F0' // 100% 处的颜色
                        }
                    ],
                    globalCoord: false // 缺省为 false
                },
                shadowColor: '#1E87F0',
                shadowBlur: 0,
                shadowOffsetY: 0
            }
        },
        itemStyle: {
            normal: {
                color: '#1E87F0',
                borderWidth: 3,
                /*shadowColor: 'rgba(72,216,191, 0.3)',
                 shadowBlur: 100,*/
                borderColor: "#1E87F0"
            }
        },
        smooth: true //转角圆角
    }]
};