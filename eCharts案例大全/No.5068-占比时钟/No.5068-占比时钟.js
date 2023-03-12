var option = {
    backgroundColor: '#ffffff',
    series: [{
        type: 'pie',
        z: -1,
        radius: [0, '50%'],
        label: {
            show: false
        },
        data: [{
            value: 100,
            itemStyle: {
                color: '#f4f5ff',
            }
        }]
    }, {
        type: 'pie',
        z: 1,
        radius: ['0', '48%'],
        startAngle: 127.5,
        label: {
            show: false
        },
        data: [{
            value: 237.5,
            itemStyle: {
                color: 'rgba(142, 154, 255,.6)',
            },

        }, {
            value: 122.5,
            itemStyle: {
                color: 'transparent',
            },

        }]
    }, {
        type: 'pie',
        z: 1,
        radius: ['46%', '50%'],
        label: {
            show: false
        },
        data: [{
            value: 100,
            itemStyle: {
                color: '#e4e7ff',
            }
        }]
    }, {
        type: 'gauge',
        radius: '46%',
        min: 0,
        max: 12,
        startAngle: 90,
        endAngle: -269.9999,
        splitNumber: 12,

        clockwise: true,
        detail: {
            show: false,
            offsetCenter: [0, '90%'],
            fontSize: 48,
            color: '#333'
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: true,
            length: 10,
            lineStyle: {
                color: '#d2d6f8'
            }
        },
        axisTick: { //仪表盘刻度样式
            show: false,
            length: 5, //刻度线长
            lineStyle: {
                color: ['#d2d6f8']
            }
        },
        axisLabel: { //刻度标签
            show: true,
            distance: 6, //标签与刻度线的距离
            textStyle: {
                fontWeight: 'bold',
                fontSize: 16,
                color: '#9da4ff'
            },
            formatter: function(t) {
                switch (t + '') {
                    case '0':
                        return '';
                    case '1':
                        return '';
                    case '2':
                        return '';
                    case '3':
                        return '3';
                    case '4':
                        return '';
                    case '5':
                        return '';
                    case '6':
                        return '6';
                    case '7':
                        return '';
                    case '8':
                        return '';
                    case '9':
                        return '9';
                    case '10':
                        return '';
                    case '11':
                        return '';
                    case '12':
                        return '12';
                }
            }
        },
        pointer: {
            show: false,
        }
    }],

};