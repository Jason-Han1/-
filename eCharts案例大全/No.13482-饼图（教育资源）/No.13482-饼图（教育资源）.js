var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        shadowColor: 'rgba(40, 40, 40,0.3)',
    }
};
let rich = {
    txtStyle: {
        fontSize: 12,
        padding: [0, 3],
        align: 'center'
    }
}
var legendName = [];
option = {
    backgroundColor: '#305c7447',
    color: ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000', '#FF6666', '#0066CC', '#FFFFCC'],

    title: {
        text: '',
        left: '30%',
        top: '36%',
        textStyle: {
            color: '#fff'
        }
    },
    legend: [{
        orient: 'vertical',
        right: '20',
        top: 'middle',
        data: ['风速', '风向', '风压', '温度', '湿度'],
        textStyle: {
            color: '#fff',
            fontSize: 12,
        }
    }, {
        orient: 'vertical',
        right: '100',
        top: 'middle',
        data: ['水温', '盐度', '雨量', '能见度', '潮位'],
        textStyle: {
            color: '#fff',
            fontSize: 12,
        }
    }],
    series: [{
        name: '占比',
        type: 'pie',
        radius: ['60%', '75%'],
        center: ['30%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: dataStyle,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                formatter: function(param) {
                    // return param.name + '\n' + param.percent.toFixed(0) + '%';
                    return '观测统计：' + param.name + '\n\n' + param.value;
                },
                textStyle: {
                    fontSize: '22',
                    fontWeight: '100'
                }
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
        data: [{
                'name': '风速',
                'value': 12321
            }, {
                'name': '风向',
                'value': 5221
            },
            {
                'name': '风压',
                'value': 2321
            },
            {
                'name': '温度',
                'value': 5211
            },
            {
                'name': '湿度',
                'value': 4211
            },
            {
                'name': '水温',
                'value': 1242
            },
            {
                'name': '盐度',
                'value': 2323
            }, {
                'name': '雨量',
                'value': 231
            }, {
                'name': '能见度',
                'value': 212
            }, {
                'name': '潮位',
                'value': 1221
            },
        ]
    }]
}