var code = [11.1, 2.4];

option = {
    grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: 496,
        height: 119,
    },
    tooltip: {},
    xAxis: {
        type: 'value',
        boundaryGap: false,
        show: true,
    },
    yAxis: {
        type: 'value',
        show: true,
    },
    series: [
        {
            type: 'graph',
            layout: 'none',
            coordinateSystem: 'cartesian2d',
            symbolSize: 0,
            label: {
                normal: {
                    show: true,
                },
            },
            data: [
                {
                    name: '1上',
                    value: code,
                    tooltip: {
                        formatter: '1号线上行',
                    },
                    // itemStyle: {
                    //     color: 'rgba(40,140,200,1)',
                    // },
                },
                {
                    name: '2上',
                    value: [0, 10.5],
                    // itemStyle: {
                    //     color: 'rgba(40,200,80,1)',
                    // },
                },
                {
                    name: '2下',
                    value: [20, 9.5],
                    // itemStyle: {
                    //     color: 'rgba(200,90,40,1)',
                    // },
                },
            ],
        },
        {
            name: 'lineDemo',
            type: 'lines',
            symbol: ['none', 'none'],
            symbolSize: 10,
            coordinateSystem: 'cartesian2d',
            effect: {
                show: true,
                period: 8,
                trailLength: 0.01,
                symbolSize: 12,
                symbol: 'pin',
                loop: true,
                color: 'rgba(55,155,255,0.5)',
            },
            label: {
                show: true,
                position: 'middle',
            },
            lineStyle: {
                normal: {
                    color: 'red',
                    width: 2,
                    opacity: 1,
                    curveness: 0,
                },
            },
            data: [
                // 下
                {
                    name: '',
                    coords: [code, [7.2, 11.2]],
                    label: {
                        // padding: [0, 0, -20, 0],
                    },
                    lineStyle: {
                        normal: {
                            width: 1,
                            opacity: 1,
                            show: false,
                            curveness: -0.35, //边的曲度，支持从 0 到 1 的值，值越大曲度越大。
                            color: 'red',
                        },
                    },
                    effect: {
                        show: true,
                        period: 8,
                        trailLength: 1,
                        symbolSize: 12,
                        symbol: 'pin',
                        loop: true,
                        color: 'rgba(55,155,255,0.5)',
                    },
                },
                {
                    name: '',
                    coords: [code, [20, 4]],
                    lineStyle: {
                        normal: {
                            show: true,
                            curveness: 0.42, //边的曲度，支持从 0 到 1 的值，值越大曲度越大。
                            color: 'rgba(40,140,200,1)',
                            opacity: 1,
                        },
                    },
                    effect: {
                        show: true,
                        period: 8,
                        trailLength: 1,
                        symbolSize: 12,
                        symbol: 'pin',
                        loop: true,
                        color: 'rgba(55,155,255,0.5)',
                    },
                },
                {
                    name: '',
                    coords: [code, [0.2, 0.6]],
                    label: {
                        padding: [0, 0, -20, 0],
                    },
                    lineStyle: {
                        normal: {
                            show: true,
                            curveness: -0.35, //边的曲度，支持从 0 到 1 的值，值越大曲度越大。
                            color: 'rgba(40,140,200,1)',
                            opacity: 1,
                        },
                    },
                    effect: {
                       show: true,
              period: 8,
              trailLength: 1,
              symbolSize: 12,
              symbol: "pin",
              loop: true,
              color: "rgba(55,155,255,0.5)"
                    },
                },
            ],
        },
    ],
};
