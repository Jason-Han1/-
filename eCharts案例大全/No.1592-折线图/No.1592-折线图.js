option = {
    backgroundColor: '#333',
    tooltip:{
        show:true,
        trigger:'axis',
        textStyle:{
            
        }
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel:{
            color:'#fff',
            fontFamily:'',
        }
    },
    grid:{
        top:0,
        left:'2%',
        right:'2%',
        bottom:'0',
        containLabel:true,
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
    series: [
        {
            symbol: 'none',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
            lineStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    {
                        offset: 0,
                        color: 'rgba(0,134,255, 1)',
                    },
                    {
                        offset: 1,
                        color: 'rgba(0,255,255, 1)',
                    },
                ]),
                shadowColor: 'rgba(0,0,0,0.4)',
                width: 3,
                shadowBlur: 6,
                shadowOffsetX: 5,
                shadowOffsetY: 5,
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(0,134,255, 0.5)',
                    },
                    {
                        offset: 0.9,
                        color: 'rgba(0,134,255, 0.1)',
                    },
                ]),
            },
        },
    ],
};
