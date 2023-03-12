option = {
    backgroundColor:"#1c1c1c",
    xAxis: [
        {
            type: 'category',
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            boundaryGap: false,
            data: ['A', 'B', 'C', 'D', 'E', 'F'],
        },
    ],

    yAxis: [
        {
            type: 'value',
            min: 0,
            // max: 140,
            splitNumber: 1,
            splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.1)',
                },
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    grid:{
        height:'20px',
        width:"100"
    },
    series: [
        {
            name: '注册总量',
            type: 'line',
            showAllSymbol: false,
            label: {
                show: false,
            },
            itemStyle: {
                color: '#4870DB',
            },
            lineStyle:{
                width:1
            },
            tooltip: {
                show: false,
            },
            areaStyle: {
                    color:"#43505F"
            },
            data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
        },
    ],
};
