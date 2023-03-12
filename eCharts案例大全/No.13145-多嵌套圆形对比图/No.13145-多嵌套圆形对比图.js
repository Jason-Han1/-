var placeHolderStyle = {
    normal: {
        color: '#ccc'
    },
    emphasis: {
        color: '#ccc'
    }
}


option = {
    title: [{
        text: '累计认证个人用户',
        subtext: '纯属虚构',
        left: 'center'
    }, {
        text: '2345',
        subtext: '总计人数',
        left: 'center',
        top: 'middle',
        textStyle: {
            fontSize: 20,
        },
        subtextStyle: {
            fontSize: 16
        }
    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: '20',
        data: ['客户经理', '发货人', '收货人', '司机']
    },
    series: [{
        name: '客户经理',
        type: 'pie',
        radius: ['25%', '25.4%'],
        label: false,
        clockWise: true, //顺时加载
        hoverAnimation: true,
        hoverOffset: 3,
        data: [{
                value: '1078',
                name: '客户经理',
                itemStyle: {
                    normal: {
                        shadowBlur: 8,
                        shadowColor: 'rgba(255, 0, 0, 0.5)'
                    }
                }
            },
            {
                value: '400',
                hoverAnimation: false, //鼠标移入变大
                itemStyle: placeHolderStyle
            }

        ]
    }, {
        name: '发货人',
        type: 'pie',
        radius: ['35%', '36%'],
        label: false,
        clockWise: true,
        hoverAnimation: true,
        hoverOffset: 3,
        data: [{
                value: '981',
                name: '发货人',
                itemStyle: {
                    normal: {
                        color: '#5886f0',
                        borderWidth: 8,
                        borderColor: '#5886f0'
                    }
                }
            },
            {
                value: '900',
                hoverAnimation: false,
                itemStyle: placeHolderStyle
            }
        ]
    }, {
        name: '收货人',
        type: 'pie',
        radius: ['45%', '46%'],
        label: false,
        clockWise: true,
        hoverAnimation: true,
        hoverOffset: 3,
        data: [{
                value: '877',
                name: '收货人',
            },
            {
                value: '500',
                hoverAnimation: false,
                itemStyle: placeHolderStyle
            }
        ]
    }, {
        name: '司机',
        type: 'pie',
        radius: ['55%', '56%'],
        label: false,
        clockWise: true,
        hoverAnimation: true,
        hoverOffset: 3,
        data: [{
                value: '939',
                name: '司机',
            },
            {
                value: '200',
                hoverAnimation: false,
                itemStyle: placeHolderStyle
            }
        ]
    }, ]
};