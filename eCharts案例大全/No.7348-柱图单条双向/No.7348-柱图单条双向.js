option = {
   
    legend: {
        data: ['支出', '收入']
    },
        tooltip: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'value',
             min: -100,
            max: 100,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        }
    ],
    yAxis: [
        {
            type: 'category',
            inverse: false,
            data: '',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false,
                color: '#fff',
                fontSize: 14,
                // 右对齐
                align: 'left',
                padding: [0, -380, 0, 0],
                verticalAlign: 'bottom',
                lineHeight: 58,
            },
            data: ['']
        }
    ],
    series: [
        {
            name: '收入',
            type: 'bar',
            stack: '总量',
             barGap: '30%',
            barWidth: '20',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    barBorderRadius: [0, 30, 30, 0],
                    borderWidth: 0
                }
            },
            emphasis:{
                itemStyle: {
                barBorderWidth: 1,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0,0,0,0.5)'
            }},
            label: {
                normal: {
                    show: true,
                    color: '#111',
                    fontSize: 22,
                    align: 'right',
                    padding: [0, 10, 100, 0],
                    position: 'right',
                    formatter: function(params) {
                        let res = params.name;
                        let myseries = option.series;
                        res = myseries[0].name + ' \n ' + myseries[0].data[0] + '%';
                        return res;
                    }
                }
            },
            data: [320]
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
             barGap: '30%',
            barWidth: '20',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 0, 0, 30],
                    borderWidth: 0
                }
            },
            emphasis:{
                itemStyle: {
                barBorderWidth: 1,
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowColor: 'rgba(0,0,0,0.5)'
            }},
            label: {
                normal: {
                    show: true,
                    color: '#111',
                    fontSize: 22,
                    align: 'left',
                    padding: [0, 10, 100, 0],
                    position: 'left',
                    formatter: function(params) {
                        let res = params.name;
                        let myseries = option.series;
                        res = myseries[1].name + ' \n ' + Math.abs(myseries[1].data[0]) + '%';
                        return res;
                    }
                }
            },
            data: [-120]
        }
    ]
};
