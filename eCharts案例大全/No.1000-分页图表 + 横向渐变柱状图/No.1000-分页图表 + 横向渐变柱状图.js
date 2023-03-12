option = {
    timeline: {
        data: [0, 1],
        tooltip: {
            show: false,
        },
        lineStyle: {
            show: false,
        },
        controlStyle: {
            show: false,
        },
        label: {
            show: false,
        },
        emphasis: {
            label: {
                show: false,
            },
            itemStyle: {
                color: '#2e78d6',
            },
        },
        autoPlay: false, // 是否自动播放
        playInterval: 2000, // 播放间隔单位: ms
        rewind: true, // 是否反向播放
        padding: [10, 280, 20, 280],
        symbol: 'circle',
        checkpointStyle: {
            color: '#2e78d6',
            borderWidth: 0,
        },
        realtime: true,
    },
    options: [
        {
            tooltip: {
                trigger: 'axis',
                formatter: '{b}: {c}个',
                axisPointer: {
                    type: 'shadow',
                },
            },
            grid: {
                top: '8%',
                left: '3%',
                right: '4%',
                // bottom: '15%',
                containLabel: true,
            },
            xAxis: {
                type: 'value',
                show: false,
            },
            yAxis: {
                type: 'category',
                axisLabel: {
                    color: '#ffffff', // 坐标轴label文字颜色
                    interval: 0,
                },
                data: ['星光达', '创智中心', '星光达'],
            },
            series: [
                {
                    type: 'bar',
                    barWidth: 15,
                    label: {
                        show: true,
                        color: '#ffffff',
                        position: 'right', // 自定义柱状图数据显示位置 left、center、right
                    },
                    itemStyle: {
                        normal: {
                            // 添加渐变色柱状图
                            color: function (params) {
                                const colorObj = {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 0,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: '#f05c5d', // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: '#f59863', // 100% 处的颜色
                                        },
                                    ],
                                    global: false, // 缺省为 false
                                };
                                const colorStart = ['#f05c5d', '#384ae0', '#09a87d'];
                                const colorEnd = ['#f59863', '#2893d0', '#7ee2c0'];
                                colorObj.colorStops[0].color =
                                    params.dataIndex < 2
                                        ? colorStart[1]
                                        : params.dataIndex > 1 && params.dataIndex < 5
                                        ? colorStart[0]
                                        : colorStart[2];
                                colorObj.colorStops[1].color =
                                    params.dataIndex < 2
                                        ? colorEnd[1]
                                        : params.dataIndex > 1 && params.dataIndex < 5
                                        ? colorEnd[0]
                                        : colorEnd[2];
                                return colorObj;
                            },
                        },
                    },
                    data: [71, 83, 70, 71, 65],
                },
            ],
        },
        {
            yAxis: [{ data: ['新益昌智', '中瑞欧工', '中兴智慧', '翠城道北', '翡翠海湾'] }],
            series: [
                {
                    itemStyle: {
                        normal: {
                            color: function (params) {
                                const colorObj = {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 1,
                                    y2: 0,
                                    colorStops: [
                                        {
                                            offset: 0,
                                            color: '#f05c5d', // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: '#f59863', // 100% 处的颜色
                                        },
                                    ],
                                    global: false, // 缺省为 false
                                };
                                const colorStart = ['#f05c5d', '#384ae0', '#09a87d'];
                                const colorEnd = ['#f59863', '#2893d0', '#7ee2c0'];
                                colorObj.colorStops[0].color =
                                    params.dataIndex < 2
                                        ? colorStart[2]
                                        : params.dataIndex > 1 && params.dataIndex < 5
                                        ? colorStart[1]
                                        : colorStart[0];
                                colorObj.colorStops[1].color =
                                    params.dataIndex < 2
                                        ? colorEnd[2]
                                        : params.dataIndex > 1 && params.dataIndex < 5
                                        ? colorEnd[1]
                                        : colorEnd[0];
                                return colorObj;
                            },
                        },
                    },
                    data: [87, 80, 86, 72, 80],
                },
            ],
        },
    ],
};
