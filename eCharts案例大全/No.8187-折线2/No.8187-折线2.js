option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        showContent:false,
    },
    grid: {
        left: 50,
    },
    legend: {
        icon: 'roundRect',
        itemWidth: 12,
        itemHeight: 6,
        align: 'left',
        left: 20,
    },
    xAxis: {
        type: 'category',
        nameLocation: 'middle',
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(239,239,239,1)',
            },
        },
        axisLabel: {
            color: '#7F858C',
        },
        data: ['供应商A', '供应商B', '供应商C', '供应商D', '供应商E'],
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        interval: 25,
        gridIndex: 0,
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(239,239,239,1)',
            },
        },
        axisLabel: {
            color: '#7F858C',
        },
    },
    series: [{
            name: '专家A',
            type: 'line',
            seriesLayoutBy: 'row',
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                normal: {
                    lineStyle: {
                        emphasis: {
                            width: 4,
                        },
                        color: '#3479FD',
                    },
                    borderWidth: 3,
                    borderColor: '#FFF',
                    color: '#3479FD',
                },
            },
            emphasis: {
                label: {
                    show: true,
                },
            },
         data: [30, 72, 71, 54, 30],
        },
        {

            name: '平均分',
            type: 'line',
            showAllSymbol: true,
            seriesLayoutBy: 'row',
            symbol: 'circle',
            symbolSize: 10,
            itemStyle: {
                normal: {
                    lineStyle: {
                        type: 'dashed',
                        emphasis: {
                            width: 4,
                        },
                        color: '#E1E5E8',
                    },
                    borderWidth: 3,
                    borderColor: '#FFF',
                    color: '#E1E5E8',
                },
            },
            emphasis: {
                label: {
                    show: true,
                },
                itemStyle:{
                        color: '#E1E5E8',
                }
            },
           data: [20, 37, 41, 74, 60],
        },
    ],
};