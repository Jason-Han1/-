option = {
    backgroundColor:"#000",
    tooltip: {
        formatter(params) {
            return `${params.name}<br/>${params.marker}${params.value}<br/><span style="color:red">总数据：10</span>`;
        }
    },
    legend: {
        show: true,
        data: ['天', '周', '月'],
        icon: "circle",
        itemWidth: 30,
        itemHeight: 30,
    },
    angleAxis: {
        max: 8,
        show: false,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            textStyle: {
                color: "#fff",
                fontSize: 18,
                fontWeight: 700
            },
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
        data: ['天', '周', '月'],
        z: 10
    },
    polar: {},
    series: [{
            type: 'bar',
            data: [5, 0, 0, ],
            roundCap: true,
            coordinateSystem: 'polar',
            name: '天',
            stack: 'a',
            itemStyle: {
                normal: {
                    // 定制显示（按顺序）
                    color: {
                        type: "linear",
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                                offset: 0,
                                color: "#0c83a9" // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#31b3dc" // 100% 处的颜色
                            }
                        ],
                        global: false // 缺省为 false
                    }
                }
            }
            // showBackground: true,
            // backgroundStyle: {
            //     color: "#ccc"
            // },
        },
        {
            type: 'bar',
            data: [0, 4, 0],
            roundCap: true,
            coordinateSystem: 'polar',
            name: '周',
            stack: 'a',
            itemStyle: {
                normal: {
                    // 定制显示（按顺序）
                    color: {
                        type: "linear",
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                                offset: 0,
                                color: "#35e94d87" // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#35e94d" // 100% 处的颜色
                            }
                        ],
                        global: false // 缺省为 false
                    }
                }
            }
        },
        {
            type: 'bar',
            roundCap: true,
            showBackground: true, // 这里设置背景最后一层才生效
            backgroundStyle: {
                color: "#fff"
            },
            data: [0, 0, 5],
            coordinateSystem: 'polar',
            name: '月',
            stack: 'a',
            label: {
                show: true,
            },
            itemStyle: {
                normal: {
                    // 定制显示（按顺序）
                    color: {
                        type: "linear",
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                                offset: 0,
                                color: "#FD08AB" // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#FF1411" // 100% 处的颜色
                            }
                        ],
                        global: false // 缺省为 false
                    }
                }
            },
        }
    ],
};