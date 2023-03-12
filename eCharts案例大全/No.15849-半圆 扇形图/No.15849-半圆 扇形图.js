var startAngle = 180, //灰色背景的起始角度
    endAngle = 0,
    alpha = startAngle - endAngle,
    x = [0, 10, 30, 40],
    sum = x[0] + x[1] + x[2] + x[3];

function getFrontStartAngle(x, sum) {
    return x / sum * alpha / 2 + (startAngle + endAngle) / 2;
}

function getPercent(x, v) {
    return (x / (x + sum) * 100).toFixed(2) + '%';
}

function back(left) {
    return {
        type: 'pie',
        startAngle: startAngle,
        center: [left, '50%'],
        radius: ['0', '25%'],
        label: {
            normal: {
                show: false,
            }
        },
        data: [{
            value: alpha,
            itemStyle: {
                normal: {
                    color: '#888'
                }
            }
        }, {
            value: 360 - alpha,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            }
        }]
    };
}

function front(x, sum, name, left, color) {
    return {
        type: 'pie',
        name: name,
        startAngle: getFrontStartAngle(x, sum, alpha),
        center: [left, '50%'],
        radius: ['0', '25%'],
        minAngle: 1,
        data: [{
            value: x,
            itemStyle: {
                normal: {
                    color: color,
                    shadowBlur: 20,
                    shadowColor: color
                }
            },
            label: {
                normal: {
                    position: 'inside',
                    formatter: '{c}',
                    textStyle: {
                        color: '#000',
                        fontSize: 20
                    }
                }
            }
        }, {
            value: sum * (360 / alpha) - x,
            itemStyle: {
                normal: {
                    color: 'transparent'
                }
            },
            label: {
                normal: {
                    position: 'inside',
                    formatter: name,
                    textStyle: {
                        color: color,
                        fontSize: 20
                    }
                }
            }
        }]
    };
}

option = {
    backgroundColor: '#333645',
    color: ['#FF6CA3', '#FDAD88', '#FFF2A1', '#2CBBC0'],
    series: [
        back('12.5%'),
        back('37.5%'),
        back('62.5%'),
        back('87.5%'),
        front(x[0], sum, '一级告警', '12.5%', '#fb358a'),
        front(x[1], sum, '二级告警', '37.5%', '#e59e7f'),
        front(x[2], sum, '三级告警', '62.5%', '#e3d893'),
        front(x[3], sum, '四级告警', '87.5%', '#33e8e9')
    ]
};