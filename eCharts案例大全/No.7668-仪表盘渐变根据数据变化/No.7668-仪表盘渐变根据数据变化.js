let val = parseInt(50); //填写数据
let number = (val % 5) == 0 ? 0 : 5 - (val % 5)
let valnumber = (val + number) / 100;
let color = [
    [0.05, '#00e5f0'],
    [0.10, '#00e6ee'],
    [0.15, '#00e6ec'],
    [0.20, '#00e7e1'],
    [0.25, '#00e8db'],
    [0.30, '#00e9d3'],
    [0.35, '#00eac9'],
    [0.40, '#00ecb3'],
    [0.45, '#00eea4'],
    [0.50, '#00f089'],
    [0.55, '#00f279'],
    [0.60, '#00f468'],
    [0.65, '#00f658'],
    [0.70, '#00f74c'],
    [0.75, '#00f749'],
    [0.80, '#00f93a'],
    [0.85, '#00fa2f'],
    [0.90, '#00ff04'],
    [0.95, '#00ff00'],
    [1, '#00ff00']
];
let colorback = [
    [0.05, '#0068bd'],
    [0.10, '#0068bd'],
    [0.15, '#0068bd'],
    [0.20, '#0068bd'],
    [0.25, '#0068bd'],
    [0.30, '#0068bd'],
    [0.35, '#0068bd'],
    [0.40, '#0068bd'],
    [0.45, '#0068bd'],
    [0.50, '#0068bd'],
    [0.55, '#0068bd'],
    [0.60, '#0068bd'],
    [0.65, '#0068bd'],
    [0.70, '#0068bd'],
    [0.75, '#0068bd'],
    [0.80, '#0068bd'],
    [0.85, '#0068bd'],
    [0.90, '#0068bd'],
    [0.95, '#0068bd'],
    [1, '#0068bd']
];
let colordata = [];
let colordatas = [];
color.map((v, i) => {
    if (v[0] == valnumber) {
        colordata = color.slice(0, i + 1);
        let colorsurplus = colorback.slice(colordata.length, color.length);
        colordatas = colordata.concat(colorsurplus)
    };
})

option = {
    backgroundColor: "#38445E",
    series: [{
            name: '',
            type: 'gauge',
            radius: '80%',
            center: ['50%', '50%'],
            startAngle: 180,
            endAngle: 0,
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 2
                },
                length: 6,
                splitNumber: 5
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [
                        [1, '#0068bd']
                    ]
                }
            },
            splitLine: {
                show: true,
                length: 6,
                lineStyle: {
                    color: 'auto',
                }
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            detail: {
                show: 0,
            }
        },
        {
            name: '',
            type: 'gauge',
            radius: '80%', //图表尺寸
            center: ['50%', '50%'],
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    color: colordatas,
                    shadowColor: 'rgba(0, 252, 255, 0.5)',
                    shadowBlur: 10
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 2
                },
                length: 6,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 6,
                lineStyle: {
                    color: 'auto',
                }
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                show: 0,
                length: '70%',
                width: 2
            },
            detail: {
                show: 0,
            },
        }
    ]
};