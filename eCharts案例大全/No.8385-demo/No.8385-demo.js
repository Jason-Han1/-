category = ['売上', '利益', '直人'],
data = [30, 89, 45];



option = {
    grid: [{
        left: 50,
        right: '55%',
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
    }, {
        left: '55%',
        right: 50,
        borderColor: '#ffffff',
        backgroundColor: '#ffffff',
    }],
    yAxis: [{
        gridIndex: 0,
        type: 'category',
        boundaryGap: true,
        data: category,
        // inverse: true,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: true,
        },
    }, {
        gridIndex: 1,
        type: 'category',
        boundaryGap: true,
        data: category,
        position: 'top',
        // inverse: true,
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        type: 'category',
        data: category,
        // inverse: true,
        axisLabel: {
            show: false,
        }
    }],
    xAxis: [{
        gridIndex: 0,
        type: 'value',
        
        splitLine: {
            show: false
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
                width: 1.5,
            }
        },
        axisLabel: {
            show: false,
            textStyle: {
                fontSize: 10,
            },
        },
    }, {
        gridIndex: 1,
        type: 'value',
        splitLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
                width: 1.5,
            }
        },
        axisLabel: {
            show: false,
        },
    }, ],
    series: [{
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            z: 10,
            barCategoryGap: '67',
            label: {
                normal: {
                    show: true,
                    position: 'inside'

                }
            },
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: '{c}%',
                        position: 'inner'
                    },
                    color: '#00ff31'
                }
            },
            data: [data[0], data[1], data[2]],
        },
        {
            type: "bar",
            xAxisIndex: 0,
            yAxisIndex: 0,

            silent: false,
            itemStyle: {
                normal: {
                    show: false,
                    color: '#124071',
                    borderColor: '#000'

                }
            },
            tooltip: {
                show: false
            },
            barGap: '-100%',
            data: [100, 100, 100]
        },


    ]
};