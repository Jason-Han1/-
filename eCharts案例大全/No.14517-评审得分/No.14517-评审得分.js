option = {
    backgroundColor: '#212121',
    grid: {
        left: '3%',
        right: '3%',
        top: '15%',
        bottom: '6%',
        containLabel: true
    },
    textStyle: {
        fontSize: '14',
        fontWeight: 'normal',
        color: '#ffffff'
    },
    xAxis: {
        show: true,
        type: 'category',
        boundaryGap: true,
        axisLine: {
            lineStyle: {
                color: 'rgba(53,153,196,0.6)',
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#fbc52c',
            fontSize: 12,
            padding: [0, 5, 0, 0]
        },
        data: ['60分以下', '60-69分', '70-79分', '80-89分', '90-100分'],
    },
    yAxis: {
        name: '人数',
        nameTextStyle:{
            color:'#fbc52c',
            fontSize:12,
            padding:[0,40,10,0]
        },
        show: true,
        type: 'value',
        axisLine: {
            lineStyle: {
                color: 'rgba(53,153,196,0.6)',
            }
        },
        axisLabel: {
            color: '#fbc52c',
            fontSize: 12,
            padding: [0, 5, 0, 0]
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dotted',
                color: 'rgba(251, 197, 44, 0.3)',
            }
        }
    },
    series: [{
        name: '评审得分分布',
        type: 'line',
        smooth: false,
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
            normal: {
                color: '#00f0ff',
                width: 3,
            }
        },
        itemStyle: {
            normal: {
                color: "#fbc52c",
                borderColor: 'rgba(0, 240, 255, 0.2)', //rgba(255, 199, 43, .3)
                borderWidth: 10,
                shadowColor: '#00f0ff',
                shadowBlur: 30,
            }
        },
        data: [25, 230, 140, 20, 25]
    }]
};