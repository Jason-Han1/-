option = {
    backgroundColor: '#000',
    color: ['#59e7eb', '#38e27f', '#2f92ed', '#d0cc6f', '#ffea00'],
    tooltip: {},
    grid: {
        top: '12%',
        left: '7%',
        right: '7%',
        bottom: '8%',
        containLabel: true,
    },
    legend: {
        icon: 'circle',
        x: 'center',
        y: 'bottom',
        width: 500,
        textStyle: {
            color: '#f2f2f2',
            fontSize: 14,
        },
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            axisLine: {
                //坐标轴轴线相关设置。数学上的x轴
                show: true,
                lineStyle: {
                    color: '#676C7B',
                },
            },
            axisLabel: {
                //坐标轴刻度标签的相关设置
                textStyle: {
                    color: '#d1e6eb',
                    margin: 15,
                },
            },
            axisTick: {
                show: false,
            },
            data: [],
        },
        {
            type: 'category',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitArea: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            data: [],
        },
    ],
    yAxis: [
        {
            type: 'value',
            nameTextStyle: {
                color: '#fff',
            },
            name: '数量/个',
            max: 200,
            min: 0,
            interval: 50,
            splitNumber: 7,
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed',
                    color: '#676C7B',
                },
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#676C7B',
                },
            },
            axisLabel: {
                margin: 20,
                textStyle: {
                    color: '#d1e6eb',
                },
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '计划总投资', //这个是Bar图
            type: 'bar',
            barWidth: '4%',
            barGap: '220%',
            xAxisIndex: 1,
            label: {
                show: true,
                formatter: '{a|}',
                color: '#fff',
                position: 'top',
                distance: -10,
                backgroundColor: '#60FFFF',
                padding: 4,
                borderRadius: 15,
                rich: {
                    a: {
                        width: 6,
                        height: 6,
                        borderRadius: 6,
                        lineHeight: 6,
                        backgroundColor: '#fff',
                    },
                },
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#54FCFC', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#1F4869', // 100% 处的颜色
                            },
                        ],
                    },
                },
            },
            data: [100, 130, 50],
        },
        {
            name: '计划总投资',
            type: 'bar',
            barWidth: '10%',
            xAxisIndex: 0,
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    borderColor: '#4292A7',
                    barBorderRadius: 2,
                    borderWidth: 1,
                    shadowColor: '#5CEFF1',
                    shadowBlur: 5,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                },
            },
            data: [110, 140, 60],
        },
        {
            name: '自年初累计完成投资', //这个是Bar图
            type: 'bar',
            barWidth: '4%',
            barGap: '220%',
            xAxisIndex: 1,
            label: {
                show: true,
                formatter: '{a|}',
                color: '#fff',
                position: 'top',
                distance: -5,
                backgroundColor: '#3AED82',
                padding: 4,
                borderRadius: 15,
                rich: {
                    a: {
                        width: 6,
                        height: 6,
                        borderRadius: 6,
                        lineHeight: 6,
                        backgroundColor: '#fff',
                    },
                },
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#3AED82', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#17454E', // 100% 处的颜色
                            },
                        ],
                    },
                },
            },
            data: [100, 130, 50],
        },
        {
            name: '自年初累计完成投资',
            type: 'bar',
            barWidth: '10%',
            xAxisIndex: 0,
            label: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    borderColor: '#3AED82',
                    barBorderRadius: 2,
                    borderWidth: 1,
                    shadowColor: '#3AED82',
                    shadowBlur: 5,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                },
            },
            data: [110, 140, 60],
        },
        {
            name: '新增固定资产', //这个是Bar图
            type: 'bar',
            barWidth: '4%',
            barGap: '220%',
            xAxisIndex: 1,
            label: {
                show: true,
                formatter: '{a|}',
                color: '#fff',
                position: 'top',
                distance: -5,
                backgroundColor: '#3199F7',
                padding: 4,
                borderRadius: 15,
                rich: {
                    a: {
                        width: 6,
                        height: 6,
                        borderRadius: 6,
                        lineHeight: 6,
                        backgroundColor: '#fff',
                    },
                },
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#3199F7', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#153369', // 100% 处的颜色
                            },
                        ],
                    },
                },
            },
            data: [100, 130, 90],
        },
        {
            name: '新增固定资产',
            type: 'bar',
            barWidth: '10%',
            xAxisIndex: 0,
            label: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    borderColor: '#3199F7',
                    barBorderRadius: 2,
                    borderWidth: 1,
                    shadowColor: '#5CEFF1',
                    shadowBlur: 5,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                },
            },
            data: [110, 140, 100],
        },
        {
            name: '本年资本来源合计', //这个是Bar图
            type: 'bar',
            barWidth: '4%',
            barGap: '220%',
            xAxisIndex: 1,
            label: {
                show: true,
                formatter: '{a|}',
                color: '#fff',
                position: 'top',
                distance: -5,
                backgroundColor: '#F4862B',
                padding: 4,
                borderRadius: 15,
                rich: {
                    a: {
                        width: 6,
                        height: 6,
                        borderRadius: 6,
                        lineHeight: 6,
                        backgroundColor: '#fff',
                    },
                },
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#F4862B', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#422F3C', // 100% 处的颜色
                            },
                        ],
                    },
                },
            },
            data: [100, 130, 150],
        },
        {
            name: '本年资本来源合计',
            type: 'bar',
            barWidth: '10%',
            xAxisIndex: 0,
            label: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    borderColor: '#F4862B',
                    barBorderRadius: 2,
                    borderWidth: 1,
                    shadowColor: '#F4862B',
                    shadowBlur: 5,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                },
            },
            data: [110, 140, 160],
        },
        {
            name: '各项应付款合计', //这个是Bar图
            type: 'bar',
            barWidth: '4%',
            barGap: '220%',
            xAxisIndex: 1,
            label: {
                show: true,
                formatter: '{a|}',
                color: '#fff',
                position: 'top',
                distance: -5,
                backgroundColor: '#ffea00',
                padding: 4,
                borderRadius: 15,
                rich: {
                    a: {
                        width: 6,
                        height: 6,
                        borderRadius: 6,
                        lineHeight: 6,
                        backgroundColor: '#fff',
                    },
                },
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#ffea00', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: '#422F3C', // 100% 处的颜色
                            },
                        ],
                    },
                },
            },
            data: [100, 130, 150],
        },
        {
            name: '各项应付款合计',
            type: 'bar',
            barWidth: '10%',
            xAxisIndex: 0,
            label: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)',
                    borderColor: '#ffea00',
                    barBorderRadius: 2,
                    borderWidth: 1,
                    shadowColor: '#ffea00',
                    shadowBlur: 5,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                },
            },
            data: [110, 140, 160],
        },
    ],
};
