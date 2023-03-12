// test数据
var todayTotal = 25,
    emergency = 17,
    untreated = 3,
    general = 5
    
var compute = function (num) {
    return todayTotal - num
}

// console.log('你好====', compute(untreated));

var color = ['#fb734e', '#e32f46', '#94d96c', '#0bbcb7', '#1a9bfc', '#7049f0'];
var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        borderWidth: 40,
        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
    }
};
var placeHolderStyle = {
    normal: {
        color: '#111F2C',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: '#111f2c'
    }
};
option = {
    title: {
        text: todayTotal,
        x: 'right',
        y: '30%',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 30,
            color: "#B8DCF1",
        },
        subtext: '今日报警事件',
    },

    tooltip: {
        trigger: 'item',
        show: true,
        formatter: "{b} : <br/>{c}",
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
    },
    legend: {
        orient: 'vertical',
        // icon: 'circle',
        left: 'right',
        top: 'center',
        itemGap: 20,
        icon: 'rect',
        data: ['一般事件', '未处理', '紧急事件', '04', '05', '06'],
        textStyle: {
            color: '#fft',
            borderRadius: 0
        }
    },
    series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true, //顺时加载
            radius: ['66%', '80%'],
            center: ['40%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            label: {
                borderRadius: '10',
            },
            data: [{
                    value: emergency,
                    name: '紧急事件',
                    itemStyle: {
                        normal: {
                            color: '#E63B3B'
                        }
                    }
                },
                {
                    value: compute(emergency),
                    name: '',
                    tooltip: {
                        show: true
                    },
                    itemStyle: placeHolderStyle
                },
            ]
        },
        {
            name: 'Line 2',
            type: 'pie',
            clockWise: true,
            radius: ['46%', '60%'],
            center: ['40%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: untreated,
                    name: '未处理',
                    itemStyle: {
                        normal: {
                            color: '#A9A86D'
                        }
                    }
                },
                {
                    value: compute(untreated),
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle
                },
            ]
        },
        {
            name: 'Line 3',
            type: 'pie',
            clockWise: true,
            radius: ['26%', '40%'],
            center: ['40%', '50%'],
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 90,
            data: [{
                    value: general,
                    name: '一般事件',
                    itemStyle: {
                        normal: {
                            color: '#B8B8B8'
                        }
                    }
                },
                {
                    value: compute(general),
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle
                },
            ]
        }
    ]
};