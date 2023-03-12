option = {
    backgroundColor:'#000',
    color:['#F19148','#81F7FF'],
   
    tooltip: {
        trigger: 'axis',
        axisPointer: { 
            type: 'shadow', 
            color: '#fafafa'
        },
        textStyle: {
            color: '#AEDBE3',
            fontSize: 32
        }

    },
    grid: {
        top: '18%',
        left: '8%',
        right: '8%',
        bottom: '5%',
        containLabel: true,
    },
    legend: {
        itemGap: 10,
        itemWidth: 24,
        itemHeight: 16,
        data: ['隔离人数','解除隔离人数'],
        top: '8%',
        textStyle: {
            color: '#f9f9f9',
            borderColor: '#fff',
            fontSize:32
        },
    },
    dataZoom: [{
        id: 'dataZoomX',
        type: 'inside',
        xAxisIndex: [0],
        filterMode: 'filter', // 设定为 'filter' 从而 X 的窗口变化会影响 Y 的范围。
        start: 0,
        end: 100
    }],
    xAxis: [{
        boundaryGap:0,
        type: 'category',
        axisLine: { //坐标轴轴线相关设置。数学上的x轴
            show: true,
            lineStyle: {
                width:2,
                color: '#959497'
            },
        },
        axisLabel: { //坐标轴刻度标签的相关设置
            textStyle: {
                color: '#AEDBE3',
                fontSize: 32
            },
        },
        axisTick: {
            show: false,
        },
        data: ['2-1','2-2','2-3','2-4','2-5']
    }],
    yAxis: [{
        type: 'value',
        splitLine: {
            show: false,
            lineStyle: {
                color: '#0a3256'
            }
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            margin: 20,
            textStyle: {
                color: '#AEDBE3',
                fontSize: 32
            },
        },
        axisTick: {
            show: false,
        },
    }],
    series: [{
        name:'隔离人数',
        type: 'line',
        showAllSymbol: true,
        symbol: 'none',
        symbolSize: 6,
        smooth: true,
        lineStyle: {
            normal: {
                width: 4,
            },
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(241,145,72,.5)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(241,145,72,0)'
                    }
                ], false),
                shadowColor: 'rgba(108,80,243, 0.9)',
                shadowBlur: 20
            }
        },

        data: [20, 24, 15, 20, 25]
    },{
        name:'解除隔离人数',
        type: 'line',
        showAllSymbol: true,
        symbol: 'none',
        symbolSize: 6,
        smooth: true,
        lineStyle: {
            normal: {
                width: 4,
            },
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(129,247,255,.5)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(129,247,255,0)'
                    }
                ], false),
                shadowColor: 'rgba(108,80,243, 0.9)',
                shadowBlur: 20
            }
        },

        data: [10, 20, 45, 28, 15]
    }]
}