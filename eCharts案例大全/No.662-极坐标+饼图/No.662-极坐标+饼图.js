/**
 * 极坐标 + 饼图组合
 */

option = {
    tooltip: {
        trigger: 'item',
        formatter: e => {
            return `
                ${e.name}<br/>
                人数: ${e.data.value}人<br/>
                及格率: ${e.data.rate}%
            `
        }
    },
    angleAxis: {
        type: 'category',
        // 去掉边线
        axisLine: {
            show: false
        },
    },
    radiusAxis: {
        max: 100,
        // 去掉刻度线
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
    },
    polar: {
        radius: [0, '50%']
    },
    series: [
        // 饼图
        {
            type: 'pie',
            radius: [0, '50%'],
            label: {
                color: '#333',
                lineHeight: 14,
                formatter: e => {
                    return `${e.name}\n人数: ${e.data.value}人\n及格率: ${e.data.rate}%`
                }
            },
            labelLine: {
                length: 20,
                lineStyle: {
                    color: '#999'
                }
            },
            itemStyle: {
                borderWidth: 3,
                borderColor: '#fff',
                shadowColor: 'rgba(0, 0, 0, .2)',
                shadowBlur: 6,
                shadowOffsetY: 4
            },
            data: [
                {
                    value: 45,
                     // 因为触发的是饼图的 tooltip，这里对应放极坐标的 data 值
                    rate: 78,
                    name: '一班',
                    itemStyle: {
                        color: 'rgba(255, 198, 93, .4)',
                    }
                },
                {
                    value: 47,
                    rate: 65,
                    name: '二班',
                    itemStyle: {
                        color: 'rgba(127, 229, 253, .4)',
                    }
                },
                {
                    value: 48,
                    rate: 50,
                    name: '三班',
                    itemStyle: {
                        color: 'rgba(145, 205, 241, .4)',
                    }
                },
                {
                    value: 30,
                    rate: 80,
                    name: '四班',
                    itemStyle: {
                        color: 'rgba(152, 234, 220, .4)',
                    }
                },
            ],
        },
        // 极坐标 - 玫瑰图
        {
            type: 'bar',
            name: '一班',
            max: 100, // 100 的比例
            data: [78], // 控制半径占比
            barWidth: (45 / 170) * 100 + '%', // 控制和饼图角度一致
            barGap: 0,
            itemStyle: {
                color: '#ffc65d',
                shadowColor: '#000',
                shadowBlur: 6
            },
            coordinateSystem: 'polar',
        }, {
            type: 'bar',
            name: '二班',
            data: [65],
            max: 100,
            barWidth:  (47 / 170) * 100 + '%',
            barGap: 0,
            itemStyle: {
                color: '#7fe5fd',
                shadowColor: '#000',
                shadowBlur: 6
            },
            coordinateSystem: 'polar',
        }, {
            type: 'bar',
            name: '三班',
            data: [50],
            max: 100,
            barWidth:  (48 / 170) * 100 + '%',
            barGap: 0,
            itemStyle: {
                color: '#8db9ff',
                shadowColor: '#000',
                shadowBlur: 6
            },
            coordinateSystem: 'polar',
        }, {
            type: 'bar',
            name: '四班',
            data: [80],
            max: 100,
            barWidth: (30 / 170) * 100 + '%',
            barGap: 0,
            itemStyle: {
                color: '#a3ffc5',
                shadowColor: '#000',
                shadowBlur: 6
            },
            coordinateSystem: 'polar',
        }
    ],
};