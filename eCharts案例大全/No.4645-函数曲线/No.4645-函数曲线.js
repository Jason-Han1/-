// 3次幂
let CF = [];
//立方根
let CB = [];
for (i = -10; i <= 10; i++) {
    CF.push([i, Math.pow(i, 3)]);
    CB.push([i, Math.cbrt(i)])
}

option = {
    title: {
        text: '函数曲线'
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: (value) => {
            const v = `${value.marker} 坐标：( ${value.data[0]} , ${value.data[1].toFixed(3)} )`;
            return v;
        }
    },
    xAxis: {
        axisLine: {
            symbol: ['none', 'arrow']
        },
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        minorTick: {
            show: true,
            splitNumber: 10
        }
    },
    yAxis: [{
            axisLine: {
                symbol: ['none', 'arrow']
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            minorTick: {
                show: true
            }
        },
        {
            axisLine: {
                lineStyle: {
                    color: '#d3d3d3',
                    type: 'dashed'
                }
            },
            axisLabel: {
                color: '#333333'
            },
            splitLine: {
                show: false
            },
            minorTick: {
                show: false
            }
        }
    ],
    series: [{
            symbolSize: 5,
            yAxisIndex: 0,
            data: CF,
            type: 'line',
            label: {
                show: true,
                formatter: (params) => {
                    if (params.data[0] === CF[CF.length - 1][0]) {
                        return 'y = x³';
                    } else {
                        return '';
                    }
                },
                fontSize: 18,
                distance: 10
            }
        },
        {
            symbolSize: 5,
            yAxisIndex: 1,
            data: CB,
            type: 'line',
            label: {
                show: true,
                formatter: (params) => {
                    console.log(params)
                    if (params.data[0] === CB[CB.length - 1][0]) {
                        return 'y = ³√x';
                    } else {
                        return '';
                    }
                },
                fontSize: 18,
                distance: 10
            }
        }
    ]
};