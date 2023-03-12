option = {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    title: {
        text: 'TOTAL REVENUE',
        subtext: 'Total Revenue and Elasticity of Demand',
        top: '10%',
        x: 'center',
        textStyle: {
            color: '#333',
            fontSize: '40',
            fontWeight: '100'
        },
        subtextStyle: {
            color: '#333',
            fontSize: '14',
            fontWeight: '100'
        }
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '30%',
        height: '50%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        splitArea: {
            show: false,
        },
        splitLine: {
            show: false
        },
        boundaryGap: false,
        axisLine: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#333'
            }
        },
        axisTick: {
            show: false
        },
        data: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021']
    },
    yAxis: {
        show: false,
        type: 'value',
        min: 0,
        max: 100
    },
    series: [{
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
            type: 'bar',
            color: '#f0f0f0',
            barWidth: 10,
            z:1,
            itemStyle: {
                barBorderRadius: 100,
                shadowBlur: 0,
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowOffsetY: 1,
                shadowOffsetX:1,
                emphasis: {
                    color: '#f0f0f0',
                    opacity: 1,
                    label: {
                        padding: 5,
                    },
                },
            },
        },
        {
            data: [10, 30, 20, 40, 10, 30, 20, 30, 20, 40, 10, 30, 20],
            type: 'bar',
            stack: 'one',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)',
                },
            },
        },
        {
            data: [35, 45, 37, 42, 38, 46, 47, 36, 43, 45, 32, 48, 45],
            type: 'bar',
            stack: 'one',
            barWidth: 30,
            barGap: '-200%',
            itemStyle: {
                normal: {
                    barBorderRadius: 100,
                    color: '#3b4cb8',
                },
                emphasis: {
                    borderWidth: '10',
                    borderColor: '#FFC738',
                    color: '#FFC738',
                    opacity: 1,
                    label: {
                        padding: 5,
                    },
                },
            },
            label: {
                show: true,
                formatter: '{c}%',
                textStyle: {
                        align: 'center',
                        baseline: 'middle',
                        fontSize: 14,
                        fontWeight: '100',
                        color: '#fff',
                    }
            },
            
        },
    ]
};