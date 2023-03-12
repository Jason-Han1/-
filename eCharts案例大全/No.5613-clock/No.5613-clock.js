// 数据1
const data1 = 93.3
// 类目1
const Category1 = '类目1'
// 数据2
const data2 = 115.5
// 类目2
const Category2 = '类目2'
// 数据3
const data3 = 140.3
// 类目3
const Category3 = '类目3'

// 饼图满设为 150 分钟
const total = 150

option = {
    backgroundColor: '#20252E',
    color: [{
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#FC8F0F00'
        }, {
            offset: 0.5,
            color: '#FC8F0F80', // 这个颜色应与背景线保持一致
        }, {
            offset: 1,
            color: '#FDA946'
        }],
        global: false
    }],
    tooltip: {
        show: true,
    },
    series: [{
            center: ["50%", "50%"], // 仪表的位置
            name: "基础刻度", // 仪表的名字
            type: "gauge", // 统计图类型为仪表
            splitNumber: 12, // 刻度数量
            startAngle: 90, // 开始刻度的角度
            endAngle: -269.9, // 结束刻度的角度
            radius: '22%',
            // 仪表盘轴线
            axisLine: {
                show: false,
            },
            // 仪表盘上的数据
            axisLabel: {
                show: false,
            },
            // 表盘上的指针
            pointer: {
                show: false
            },
            // 刻度标签。
            axisTick: {
                show: true,
                splitNumber: 5, // 刻度的段落数
                lineStyle: {
                    color: '#FBA53F',
                    // width: 2, // 刻度的宽度
                    shadowColor: '#67FFFC',
                    shadowBlur: 2
                },
                length: 8 // 刻度的长度
            },
            // 分隔线样式
            splitLine: {
                show: true,
                length: -5,
                lineStyle: {
                    color: "#FBA53F",
                    // width: 4,
                    shadowColor: '#F69829',
                    shadowBlur: 4,
                }
            },
            // 表盘中心的文字
            detail: {
                show: false,
            },
        },
        {
            center: ["50%", "50%"], // 仪表的位置
            name: "分割线覆盖", // 仪表的名字
            type: "gauge", // 统计图类型为仪表
            splitNumber: 12, // 刻度数量
            startAngle: 90, // 开始刻度的角度
            endAngle: -269.9, // 结束刻度的角度
            radius: '22%',
            // 仪表盘轴线
            axisLine: {
                show: false,
            },
            // 仪表盘上的数据
            axisLabel: {
                show: false,
            },
            // 表盘上的指针
            pointer: {
                show: false
            },
            // 刻度标签。
            axisTick: {
                show: false,
            },
            // 分隔线样式
            splitLine: {
                show: true,
                /*
                 * 这个值是 8 + 5 得出的, 基础分割线长度为 -5 (向外延伸 5), 而刻度长度为 8, 因此只需要向内延伸 8 + 5 就能保持对称
                 * 向外延伸是从外轮廓开始计算长度, 而向内延伸同样是外轮廓开始计算, 因此要加上刻度的长度
                 */
                length: 13,
                lineStyle: {
                    color: "#FBA53F",
                    shadowColor: '#F69829',
                    shadowBlur: 4,
                }
            },
            // 表盘中心的文字
            detail: {
                show: false,
            },
        },
        {
            type: 'pie',
            name: '背景线A',
            radius: ['5%', '6%'],
            data: [100],
            silent: true,
            label: {
                show: false
            },
            itemStyle: {
                color: '#E5A150'
            },
        },
        {
            type: 'pie',
            name: '背景线B',
            radius: ['10%', '11%'],
            data: [100],
            silent: true,
            label: {
                show: false
            },
            itemStyle: {
                color: '#E5A150'
            },
        },
        {
            type: 'pie',
            name: '背景线C',
            radius: ['15%', '16%'],
            data: [100],
            silent: true,
            label: {
                show: false
            },
            itemStyle: {
                color: '#E5A150'
            },
        },
        {
            type: 'pie',
            radius: ['5%', '6%'],
            center: ["50%", "50%"],
            label: {
                show: true,
                formatter: '{c}',
                color: '#fff',
                fontSize: 12,
                position: 'inside'
            },
            labelLine: {
                show: false
            },
            hoverOffset: 2,
            data: [{
                    value: data3,
                    name: Category3,
                    itemStyle: {
                        borderWidth: 6,
                        borderColor: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#FC8F0F00'
                            }, {
                                offset: 0.9,
                                color: '#FC8F0F50',
                            }, {
                                offset: 1,
                                color: '#FDA946'
                            }],
                            global: false
                        },
                    },
                    tooltip: {
                        formatter: '{b}：{c}分',
                    },
                },
                {
                    value: total - data3, // total 是三项的总和
                    name: 'gap',
                    itemStyle: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    label: {
                        show: false
                    },
                    tooltip: {
                        show: false,
                    },
                },
            ],
        },
        {
            type: 'pie',
            radius: ['10%', '11%'],
            center: ["50%", "50%"],
            label: {
                show: true,
                formatter: '{c}',
                color: '#fff',
                fontSize: 12,
                position: 'inside'
            },
            labelLine: {
                show: false
            },
            hoverOffset: 2,
            data: [{
                    value: data2,
                    name: Category2,
                    itemStyle: {
                        borderWidth: 6,
                        borderColor: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#FC8F0F00'
                            }, {
                                offset: 0.9,
                                color: '#FC8F0F50',
                            }, {
                                offset: 1,
                                color: '#FDA946'
                            }],
                            global: false
                        },
                    },
                    tooltip: {
                        formatter: '{b}：{c}分',
                    },
                },
                {
                    value: total - data2, // total 是三项的总和
                    name: 'gap',
                    itemStyle: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    label: {
                        show: false
                    },
                    tooltip: {
                        show: false,
                    },
                },
            ],
        },
        {
            type: 'pie',
            radius: ['15%', '16%'],
            center: ["50%", "50%"],
            label: {
                show: true,
                formatter: '{c}',
                color: '#fff',
                fontSize: 12,
                position: 'inside'
            },
            labelLine: {
                show: false
            },
            hoverOffset: 2,
            data: [{
                    value: data1,
                    name: Category1,
                    itemStyle: {
                        borderWidth: 6,
                        borderColor: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#FC8F0F00'
                            }, {
                                offset: 0.9,
                                color: '#FC8F0F50',
                            }, {
                                offset: 1,
                                color: '#FDA946'
                            }],
                            global: false
                        },
                    },
                    tooltip: {
                        formatter: '{b}：{c}分',
                    },
                },
                {
                    value: total - data1, // total 是三项的总和
                    name: 'gap',
                    itemStyle: {
                        color: "rgba(0, 0, 0, 0)",
                    },
                    label: {
                        show: false
                    },
                    tooltip: {
                        show: false,
                    },
                },
            ],
        },
    ],
    yAxis: [{
        type: 'category',
        // inverse: true,
        z: 2,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: "#D8FDF9",
                fontSize: 12,
            },
        },
        data: [Category3, Category2, Category1],
    }],
    xAxis: [{
        show: false
    }],
    // 这里的 grid 主要是对 y 轴进行定位
    grid: {
        top: '40%', // 这里通过同时指定 top 和 bottom 来挤压 y 轴 label 的高度, 这样间接调整了 label 间距和高度
        bottom: '50%',
        left: "52%",
        containLabel: false
    },
}