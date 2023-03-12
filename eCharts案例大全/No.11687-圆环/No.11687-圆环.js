var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40, 0.1)',
    }
};

var placeHolderStyle = {
    normal: {
        color: '#1F9AFF', // 未完成的圆环的颜色
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: '#1F9AFF' // 未完成的圆环的颜色
    }
};

option = {
    title: {
        text: '纳管',
        x: 'center',
        y: 'center',
        subtext:'100',
        textStyle: {
            fontWeight: 'normal',
            color: '#BEC9D3',
            fontSize: 14
        },
        subtextStyle: {
            color: '#1F9AFF',// 副标题文字颜色
            fontSize:'25',
            fontWeight:'normal'
        }
    },
    tooltip: {
        show: false,
    },
    toolbox: {
        show: false,
    },
    series: [{
        name: 'Pie2',
        type: 'pie',
        clockWise: false,
        radius: [73, 85],
        itemStyle: dataStyle,
        hoverAnimation: false,
        center: ['50%', '51%'],
        data: [{
            value: 20,
            itemStyle: {
                normal: {
                    color: '#E2E9F0',
                    shadowBlur: 10
                }
            }
        }, {
            value: 80,
            name: 'invisible',
            itemStyle: placeHolderStyle,
        }]
    }]
}