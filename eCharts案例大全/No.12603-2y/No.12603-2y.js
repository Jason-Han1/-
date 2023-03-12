option = {
    backgroundColor: '#000',
    tooltip: {
        show: true,
        backgroundColor: 'rgba(50,50,50,.7)',
        padding: 5,
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#555',
                width: 1,
                type: 'dashed',
            },
            label: {
                show: true,
                margin: 10,
                padding: 5,
                backgroundColor: 'rgba(50,50,50,.7)',
                color: '#fff',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 20,
            },
        },
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 14,
        },
    },
    grid: {
        top: 35,
        bottom: 15,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: [1, 2, 3, 4, 5],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            interval: 0,
            color: 'white',
            fontSize: 8,
        }
    },
    yAxis: [{
            name: '(亿元)',
            type: 'value',
            nameTextStyle: {
                fontSize: 8,
                color: '#fff'
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                color: 'white',
                fontSize: 8,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 1,
                    type: 'dotted',
                },
            },
            show: true,
            scale: false,
        },
        {
            name: '(亿元)',
             nameTextStyle: {
                fontSize: 8,
                color: '#fff',
            },
            type: 'value',
            inverse: false,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                color: 'white',
                fontSize: 8,
            },
            splitLine: {
                show: false
            },
        },
    ],
    legend: {
        show: true,
        left: 'auto',
        right: '20%',
        top: 'auto',
        bottom: 'auto',
        orient: 'horizontal', //vertical
        itemGap: 10,
        itemWidth: 12,
        itemHeight: 8,
        textStyle: {
            color: 'white',
            fontSize: 8,
            fontStyle: 'normal',
            fontWeight: 'normal',
        },
    },

    series: [

        {
            name: '宁夏',
            type: 'bar',
            barWidth: 8,
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 30, 0, 0],
                    color: {
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false,
                        "colorStops":[{
                                offset: 0,
                                color: '#58C7FF',
                            },
                            {
                                offset: 1,
                                color: '#3891FF',
                            },
                        ]
                    }
                },
            },
            data: [120, 132, 101, 134, 90],
        },
        {
            name: '中国',
            type: 'bar',
            barWidth: 8,
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 30, 0, 0],
                    color: {
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false,
                        "colorStops":[{
                                offset: 0,
                                color: '#89FFD2',
                            },
                            {
                                offset: 1,
                                color: '#24E5F2',
                            },
                        ]
                    } 
                },
            },
            data: [20, 32, 10, 13, 90],
        }
    ],
}