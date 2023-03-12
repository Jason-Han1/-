const xAxisData = [
    '2020/10',
    '2020/11',
    '2020/12',
    '2021/1',
    '2021/2',
    '2021/3',
    '2021/4',
    '2021/5',
    '2021/6',
    '2021/7',
    '2021/8',
    '2021/9',
];

option = {
    tooltip: {
        trigger: 'axis',
    },
    xAxis: {
        data: xAxisData,
        type: 'category',
        boundaryGap: false,
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: true,
        },
    },
    yAxis: {
        type: 'value',
        max: 100,
        axisLine: {
            show: false,
        },
    },
    grid: {
        show: true,
        borderColor: '#F2F3F5',
        top: 20,
        bottom: 30,
        left: 50,
        right: 20,
    },
    series: [
        {
            data: [45, 46, 50, 47, 55, 60, 58, 55, 54, 51, 53, 49],
            name: '污染贡献值',
            smooth: 0.1,
            type: 'line',
            itemStyle: {
                opacity: 0,
            },
            areaStyle: {
                color: 'rgba(82, 107, 229, .3)',
            },
            emphasis:{ 
    		  lineStyle: {
    			width: 2,
    		  },
    		},
        },
        {
            data: xAxisData.map(() => 50),
            name: '平均线',
            color: 'red',
            type: 'line',
            smooth: 'true',
            symbolSize: 0,
            animation: false,
            legendHoverLink: false,
            lineStyle: {
                color: 'red',
                type: 'dashed',
            },
            emphasis:{ 
    		  lineStyle: {
    			width: 2,
    		  },
    		},
            markPoint: {
                data: [
                    {
                        value: '平均值',
                        coord: [xAxisData.length - 1, 50],
                        label: {
                            show: true,
                            offset: [-15, -20]
                        },
                    },
                ],
                label: '平均值',
                itemStyle: {
                    color: 'red',
                },
                symbol: 'arrow',
                symbolSize: 10,
                symbolRotate: -90,
            },
        },
    ],
};
