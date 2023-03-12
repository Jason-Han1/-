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
    backgroundColor: '#0d235e',
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
        data: ['未采集', '生产经营数据采集', '电子账簿采集'],
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
        name: '未采集',
        type: 'pie',
        radius: ['10%', '12%'],
        label: false,
        startAngle: 90,
        clockWise: true, //顺时加载
        hoverAnimation: true,
        hoverOffset: 3,
         
        data: [{
                value:400,
                name: '未采集',
                itemStyle: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#7fdce6' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#46b2d5' // 100% 处的颜色
                        }]
                    }
                }
            },
            {
                value: 900,
                hoverAnimation: false, //鼠标移入变大
                itemStyle: placeHolderStyle
            }

        ]
    }, {
        name: '生产经营数据采集',
        type: 'pie',
        radius: ['20%', '22%'],
        label: false,
        startAngle: 90,
        clockWise: false,
        hoverAnimation: true,
        hoverOffset: 3,
        data: [{
                value: 500,
                name: '生产经营数据采集',
                itemStyle: {
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#3a91e7' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#304fce' // 100% 处的颜色
                        }]
                    }
                }
            },
            {
                value:800,
                hoverAnimation: false,
                itemStyle: placeHolderStyle
            }
        ]
    }, {
        name: '电子账簿采集',
        type: 'pie',
        radius: ['30%', '32%'],
        label: false,
        startAngle: 339,
        clockWise: true,
        hoverAnimation: true,
        hoverOffset: 3,
        data: [{
                value: 700,
                name: '电子账簿采集',
                itemStyle: {
                   color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#602dae' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#c165e3' // 100% 处的颜色
                        }]
                    }
                }
            },
            {
                value: 600,
                hoverAnimation: false,
                itemStyle: placeHolderStyle
            }
        ]
    } ]
};