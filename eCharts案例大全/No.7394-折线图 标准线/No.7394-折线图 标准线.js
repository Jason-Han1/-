option = {
    backgroundColor:'#fff',
    tooltip: {
        trigger: 'axis',
        //				        trigger: 'yAxis',
    },
    color: ['#138af5'],
    grid: {
        left: '2%',
        right: '2%',
        top: '10%',
        bottom: '13%',
        containLabel: true
    },
    xAxis: [{
        show: true,
        type: 'category',
        splitLine: {
            show: false
        },
        data: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009'],
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#999',
            }
        },
        boundaryGap: true,
    }],
    yAxis: [{
            name: '(mA)',
            type: 'value',
            splitLine: {
                show: true
            },
            min: 0,
            max: 250,
            axisLabel: {
                color: '#999',
            },
            axisLine: {
                lineStyle: {
                    color: '#999',
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#999',
                }
            }
        }
    ],
    series: [
        {
            name: '回路',
            type: 'line',
            symbolSize: 8,
            lineStyle: {
                normal: {
                    width: 2,
                    shadowOffsetY: 4,
                    shadowBlur: 4,
                    shadowColor: 'rgba(0,0,0,.08)'

                },
            },
            smooth: true,
            data: ['40', '80', '50', '120', '70', '190', '80', '120', '40'],
        }
    ]
};