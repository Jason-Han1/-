//显示数据
data = 300;
//总数据
max = 600;
//分割线宽度
width = data === 0 ? 0 : 4;
//指定数值在圆弧中所占角度
scaleAn = 300 / max;
//圆弧起始位置的角度
let startAngle = 225 - data * scaleAn;
if (max - data == (max / 100) * 25) {
    startAngle = 225 - max * scaleAn;
}
//分割比例
scaleSp = 150 / max;
//分割线的分割数值
splitNum = data * scaleSp;
option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'item',
    },
    series: [
        {
            name: '',
            type: 'gauge',
            radius: '80%',
            center: ['50%', '50%'],
            startAngle: startAngle,
            endAngle: 225,
            splitNumber: splitNum,
            hoverAnimation: false,
            axisTick: {
                show: false,
            },
            splitLine: {
                length: 32,
                distance: 38,
                lineStyle: {
                    width: width,
                    color: '#8D54E9',
                },
            },
            axisLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    opacity: 0,
                },
            },
            detail: {
                formatter: '{score|{value}%}',
                offsetCenter: [0, '50%'],
                rich: {
                    score: {
                        color: '#43425D',
                        fontFamily: '微软雅黑',
                        fontSize: 26,
                    },
                },
            },
            title: {
                offsetCenter: [0, '60%'],
                color: '#43425D',
                textStyle: {
                    fontSize: 14,
                },
            },
            data: [
                {
                    value: 0,
                    name: '开状态',
                },
            ],
        },
        {
            name: '',
            type: 'pie',
            radius: ['60%', '68%'],
            center: ['50%', '50%'],
            silent: true,
            clockwise: true,
            startAngle: 225,
            z: 0,
            zlevel: 0,
            label: {
                normal: {
                    position: 'center',
                },
            },
            data: [
                {
                    value: data,
                    name: '',
                    itemStyle: {
                        color: '#E9E9F0',
                    },
                },
                {
                    name: '',
                    value: (max / 100) * 16,
                    label: {
                        show: false,
                    },
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                        },
                    },
                },
            ],
        },
    ],
};
