option = {
    backgroundColor: '#fff',
    title: {
        text: '$124.036.254',
        subtext: 'All Time',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '50',
            color: '#000'
        },
        left: '1%',
        top: '8%'
    },


    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        top:'0',
        containLabel: false
    },
    xAxis: [{
        show: true,
        type: 'category',
        boundaryGap: false,
        z: 2,
        scale:true,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            onZero:false,
            
        },
        axisLabel: {
            color: '#A0A7AD',
            fontSize: 40,
            inside: true,
        },
        data: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL']
    }],
    yAxis: [{
        show: false,
        type: 'value',
        name: '单位（%）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        }
    }],
    series: [{
        name: '移动',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: true,
        lineStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#2BB5F6'
                }, {
                    offset: 0.8,
                    color: '#754AC0'
                }], false),
                width: 10
            }
        },
        areaStyle: {
            normal: {
                color: '#EBF2F8',
            }
        },
        itemStyle: {
            normal: {
                color: '#fff',
                borderColor: '#fff',
                borderWidth: 12

            }
        },
        data: [220, 205, 300, 250, 320, 300, 330]
    }]
};