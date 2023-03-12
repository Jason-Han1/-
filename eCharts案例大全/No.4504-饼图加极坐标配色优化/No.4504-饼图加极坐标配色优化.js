/**
 * 极坐标 + 饼图组合
 */
 //如果想要修改，请点击上方克隆，然后在自己的版本上修改，不要在lz的版本上改！！
option = {
    // 背景颜色
    backgroundColor: '#0D1223',
    tooltip: {
        trigger: 'item',
        formatter: e => {
            return `
                ${e.name}<br/>
                销售: ${e.data.value}万元<br/>
                良品率: ${e.data.rate}%
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
                color: '#09F9D0',
                lineHeight: 24,
                formatter: e => {
                    return `${e.name}\n销售量: ${e.data.value}人\n良品率: ${e.data.rate}%`
                }
            },
            labelLine: {
                length: 20,
                lineStyle: {
                    color: '#09F9D0'
                }
            },
            itemStyle: {
                borderWidth: 2,
                borderColor: '#ffffff',
                // 阴影
                shadowColor: 'rgba(0, 0, 0, .2)',
                shadowBlur: 6,
                shadowOffsetY: 4
            },
            data: [
                {
                    value: 50,
                     // 因为触发的是饼图的 tooltip，这里对应放极坐标的 data 值
                    rate: 50,
                    name: '一组',
                    itemStyle: {
                        color: 'rgba(9, 249, 208, .5)',
                    }
                },
                {
                    value: 50,
                    rate: 50,
                    name: '二组',
                    itemStyle: {
                        color: 'rgba(0, 203, 205, .5)',
                    }
                },
                {
                    value: 50,
                    rate: 50,
                    name: '三组',
                    itemStyle: {
                        color: 'rgba(251, 135, 33, .5)',
                    }
                },

            ],
        },
        // 极坐标 - 玫瑰图
        {
            type: 'bar',
            name: '一组',
            max: 100, // 100 的比例
            data: [65], // 控制半径占比
            barWidth: (50 / 150) * 100 + '%', // 控制和饼图角度一致
            barGap: 0,
            itemStyle: {
                color: '#09F9D0',
                shadowColor: '#000',
                shadowBlur: 6
            },
            coordinateSystem: 'polar',
        }, {
            type: 'bar',
            name: '二组',
            data: [65],
            max: 100,
            barWidth:  (50 / 150) * 100 + '%',
            barGap: 0,
            itemStyle: {
                color: '#00CBFF',
                shadowColor: '#000',
                shadowBlur: 6
            },
            coordinateSystem: 'polar',
        }, {
            type: 'bar',
            name: '三组',
            data: [65],
            max: 100,
            barWidth:  (50 / 150) * 100 + '%',
            barGap: 0,
            itemStyle: {
                color: '#FB8721',
                shadowColor: '#000',
                shadowBlur: 6
            },
            coordinateSystem: 'polar',
        },
    ],
};