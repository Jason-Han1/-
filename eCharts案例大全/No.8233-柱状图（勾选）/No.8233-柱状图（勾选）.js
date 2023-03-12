option = {
    grid: [{
            top: 40
        },
        {
            top: 40
        }
    ],
    legend: {
        show: false
    },
    tooltip: {
        trigger: 'axis',
        formatter: (comp, value) => {
            const [serie] = comp;

            return `${serie.seriesName} ${serie.name}: ${Math.round(serie.value * 100)} %`
        },
        axisPointer: {
            show: true,
            status: 'shadow',
            z: -1,
            shadowStyle: {
                color: '#E6F7FF',
            },
            type: 'shadow'
        }
    },
    xAxis: [{
            position: 'bottom',
            type: 'category',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#ECF1F6'
                }
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                rotate: 0,
                fontSize: 12,
                color: '#3A3A3C'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#ECF1F6', '#ECF1F6'],
                    width: 0,
                    type: 'dashed'
                }
            },
            gridIndex: 0,
            data: ['0-3岁', '4-15岁', '16-30岁', '31-45岁', '46-60岁', '61-75岁', '76-90岁', '91-115岁']
        },
        {
            type: 'category',
            gridIndex: 1,
            show: false
        }
    ],
    yAxis: [{
            type: 'value',
            position: 'left',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                rotate: 0,
                fontSize: 12,
                color: '#6E7D9C',
                formatter: (value, index) => `${value * 100} %`
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#ECF1F6', '#ECF1F6'],
                    width: 1,
                    type: 'solid'
                }
            },
            min: 0,
            max: 1,
            gridIndex: 0
        },
        {
            gridIndex: 1,
            min: 0,
            max: 1,
            show: false
        }
    ],
    series: [{
            name: '底部backdrop',
            xAxisIndex: 1,
            yAxisIndex: 1,
            type: 'bar',
            data: [1, 1, 1, 1, 1, 1, 1, 1].map((value) => {
                return {
                    value,
                    itemStyle: {
                        color: 'transparent'
                    }
                };
            }),
            barMaxWidth: '100%',
            silent: true,
            z: 2
        },
        {
            name: 'xxx疾病人群感染情况',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                color: '#43A7FF'
            },
            type: 'bar',
            data: [0.3, 0.4, 0.5, 0.8, 0.7, 0.7, 0.5, 0.8],
            barMaxWidth: '20%',
            z: 3
        }
    ]
};

myChart._dom.style.backgroundColor = '#fff';

myChart.on('click', function(component) {
    const {
        dataIndex
    } = component;
    const renderOption = myChart.getOption();

    const {
        series: [backDrop]
    } = renderOption

    backDrop.data.forEach((item, itemInd) => {
        if (itemInd === dataIndex) {
            item.itemStyle.color = '#CCEEFF'
        } else {
            item.itemStyle.color = 'transparent';
        }
    })

    myChart.setOption(renderOption);

})