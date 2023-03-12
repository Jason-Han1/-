option = {
    title: {
        text: '需求驳回率排名',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['驳回率', '创建率']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['XX某1','XX某2','XX某3','XX某4','XX某5','XX某', 'XX某6','XX某7','XX某8','XX某9'],
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value}%',
        },
    },
    series: [
        {
            name: '驳回率',
            type: 'bar',
            itemStyle: {
            normal: {
                label: {
                    textStyle: {
                        color: '#000000',
                        fontSize: 3
                    },
                    show: true,
                    position: 'right',
                    formatter: '{c}%',


                }
            }
        },
            data: [8, 13, 15, 17, 22, 24, 28, 31, 35, 37],
            
        },
        {
            name: '创建率',
            type: 'bar',
            itemStyle: {
            normal: {
                color: '#ADADAD',
                label: {
                    textStyle: {
                        
                         color: '#000000',
                        fontSize: 3
                    },
                    show: true,
                    position: 'right',
                    formatter: '{c}%',


                }
            }
        },
            data: [9, 21, 13, 22, 13, 16, 13, 15, 17, 22]
        }
    ]
};
