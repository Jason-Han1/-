option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: "axis",

    },
    grid: {
        top: '15%',
        left: '5%',
        right: '5%',
        bottom: '15%',
        // containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: " #D2D2D2",
            }
        },
        splitArea: {
            // show: true,
            color: '#f00',
            lineStyle: {
                color: '#f00'
            },
        },
        axisLabel: {
            color: '#333',

        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        boundaryGap: true,
        data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00'],

    }],
    yAxis: [{
        type: "value",
        name: '风速(m/s)',
        axisLabel: {
            textStyle: {
                color: '#333'
            }
        },
        nameTextStyle: {
            color: '#333',
            fontSize: 12,
            lineHeight: 40
        },
        splitLine: {
            lineStyle: {
                color: " #D2D2D2",
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    series: [{
        name: '',
        type: 'line',
        showAllSymbol: true,
        symbol: 'circle',
        symbolSize: 20,
        lineStyle: {
            normal: {
                color: "#80C8D4",
                type: 'dashed',
                shadowColor: 'rgba(0, 0, 0, .3)',

            },
        },
        itemStyle: {
            color: "#80C8D4",
            borderColor: "#fff",
            borderWidth: 3,
            shadowColor: 'rgba(0, 0, 0, .3)',
            shadowBlur: 0,
            shadowOffsetY: 2,
            shadowOffsetX: 2,
        },
        data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02, 332.79, 281.55, 332.79]
    }]
};