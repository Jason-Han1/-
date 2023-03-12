var placeHolderStyle = {
    normal: {
        color: '#fff',
        opacity: .1
    },
    emphasis: {
        color: '#fff',
        opacity: .1
    }
}


option = {
    backgroundColor: '#030303',
    textStyle: {
        fontSize: 16,
        color: '#40E7F4 '
    },
    title: [{
        text: '累计认证个人用户',
        subtext: '纯属虚构',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        top: '45%',
        right: '10%',
        data: ['客户经理', '发货人', '收货人', '司机'],
        textStyle: {
            color: '#40E7F4 ',
            fontSize: 14
        },
        formatter(name) {
            return name
        },
        itemWidth: 14,
        itemHeight: 14,
        itemGap: 16
    },
    series: [{
        name: '客户经理',
        type: 'pie',
        radius: ['10%', '11%'],
        label: false,
        startAngle: 90,
        clockWise: true, //顺时加载
        hoverAnimation: true,
        hoverOffset: 3,
        data: [{
                value: 1078,
                name: '客户经理',
                itemStyle: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#57FF86' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#3AA5C7' // 100% 处的颜色
                        }]
                    }
                }
            },
            {
                value: 400,
                hoverAnimation: false, //鼠标移入变大
                itemStyle: placeHolderStyle
            }

        ]
    }, {
        name: '发货人',
        type: 'pie',
        radius: ['20%', '21%'],
        label: false,
        startAngle: 270,
        clockWise: true,
        hoverAnimation: true,
        hoverOffset: 3,
        data: [{
                value: 981,
                name: '发货人',
                itemStyle: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#A568FF' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#006CFF' // 100% 处的颜色
                        }]
                    }
                }
            },
            {
                value: 900,
                hoverAnimation: false,
                itemStyle: placeHolderStyle
            }
        ]
    }, {
        name: '收货人',
        type: 'pie',
        radius: ['30%', '31%'],
        label: false,
        startAngle: 180,
        clockWise: true,
        hoverAnimation: true,
        hoverOffset: 3,
        data: [{
                value: 877,
                name: '收货人',
                itemStyle: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#FFEA4F' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#F89212' // 100% 处的颜色
                        }]
                    }
                }
            },
            {
                value: 500,
                hoverAnimation: false,
                itemStyle: placeHolderStyle
            }
        ]
    }, {
        name: '司机',
        type: 'pie',
        radius: ['40%', '41%'],
        label: false,
        startAngle: 0,
        clockWise: true,
        hoverAnimation: true,
        hoverOffset: 3,
        data: [{
                value: 939,
                name: '司机',
                itemStyle: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#FF7671' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#A14AFF' // 100% 处的颜色
                        }]
                    }
                }
            },
            {
                value: 200,
                hoverAnimation: false,
                itemStyle: placeHolderStyle
            }
        ]
    }, ]
};