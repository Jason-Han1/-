option = {
    backgroundColor: '#000f1f',
    color: ['#E26851', '#2B6CF6', '#D9BE70'],
    legend: {
        itemGap: 20,
        textStyle:{
             lineHeight :40,
             padding: [6, 4, 5, 6],
             color:'rgba(155, 155, 155, 1)'
        },
        data: ['工作日', '周末', '节假日'],
    },
    grid: {
        top: '60',
        left: '26',
        right: '30',
        bottom: '20',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            axisLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#959FA9',
                    fontSize: 14,
                },
            },
            axisTick: {
                show: false,
            },
            data: ['2012', '2013', '2014', '2015', '2016'],
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    // type: 'dashed',
                    color: 'rgba(39, 41, 58, 0.3)',
                    width: 1,
                },
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgb(2,185,208)',
                },
            },
            axisLabel: {
                textStyle: {
                    color: '#959FA9',
                    fontSize: 14,
                },
            },
        },
    ],
    series: [
        {
            name: '工作日',
            type: 'bar',
            barGap: 0,
            barWidth: 10,
            emphasis: {
                focus: 'series',
            },
            data: [320, 332, 301, 334, 390],
        },
        {
            name: '周末',
            type: 'bar',
            barWidth: 10,
            emphasis: {
                focus: 'series',
            },
            data: [220, 182, 191, 234, 290],
        },
        {
            name: '节假日',
            type: 'bar',
            barWidth: 10,
            emphasis: {
                focus: 'series',
            },
            data: [150, 232, 201, 154, 190],
        },
    ],
};
