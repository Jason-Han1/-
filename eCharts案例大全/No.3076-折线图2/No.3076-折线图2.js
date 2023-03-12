option = {
    backgroundColor: '#080b30',
    title: [
        {
            text: '门禁刷卡次数统计',
            textStyle: {
                align: 'center',
                color: '#fff',
                fontSize: 20,
            },
            top: '5%',
            x: '30%'
        },
        {
            text: '68',
            textStyle: {
                color: '#d3d5d6',
                fontSize: 14,
                fontWeight: 'normal'
            },
            padding:[6,6,2,6],
            backgroundColor: '#aea403',
            borderRadius: 25,
            top: '64%',
            x: '53%'
        },
        {
            text: '68',
            textStyle: {
                color: '#d3d5d6',
                fontSize: 14,
                fontWeight: 'normal'
            },
            padding:[6,6,2,6],
            backgroundColor: '#44b2d5',
            borderRadius: 25,
            top: '27%',
            x: '38%'
        },
    ],
    grid: {
        top: '15%',
        // left: '5%',
        // right: '5%',
        bottom: '15%',
    },
    legend: {
        show: true,
        top: '10%',
        left: '50%',
        icon: 'circle',
        textStyle: {
            color: '#d4e3e6'
        }
    },
    xAxis: [{
        type: 'category',
        axisLabel: {
            color: '#d3d5d6',
            fontSize: 16,
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        boundaryGap: false,
        data: [2,4,6,8,10,12,14,16,18,20,22,24],
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        max: 100,
        name: '次',
        nameTextStyle: {
             color: '#d2d2d2',
             fontSize: 14,
             padding: [0, 0, 20, -50],
        },
        splitNumber: 5,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#05365d',
                width: 2
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            margin: 20,
            textStyle: {
                color: '#d3d5d6',
            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [
         {
            name: '进入',
            type: 'line',
            // symbol: 'none',  //取消折点圆圈
            smooth: 'false',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 12,
            itemStyle: {
                color: "#12d6e7",
                borderColor: "#fff",
                borderWidth: 2
            },
            lineStyle: {
                width: 4,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#032648'
                    },
                    {
                        offset: 1,
                        color: '#12d6e7'
                    }
                ]),
                shadowColor: '#12d6e7',
                shadowBlur: 40,
            },
            tooltip: {
                show: false
            },
            data: [42,45,62,77,77,61,44,40,46,67,64,58,41]
        },
        {
            name: '外出',
            type: 'line',
            // symbol: 'none',  //取消折点圆圈
            smooth: 'false',
            showAllSymbol: true,
            symbol: 'circle',
            symbolSize: 12,
            itemStyle: {
                color: "#f5e341",
                borderColor: "#fff",
                borderWidth: 2
            },
            lineStyle: {
                width: 4,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#152a3f'
                    },
                    {
                        offset: 1,
                        color: '#f5e341'
                    }
                ]),
                shadowColor: '#f5e341',
                shadowBlur: 40,
            },
            tooltip: {
                show: false
            },
            data: [22,25,42,57,57,41,24,20,26,47,44,38,21]
        },
    ]
};