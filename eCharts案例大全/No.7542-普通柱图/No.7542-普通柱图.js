 option = {
        color: ['#157FE2'],
        grid: {
            top: '15%',
            right: '10%',
            left: '10%',
            bottom: '12%'
        },
        xAxis: [{
            type: 'category',
            data: ['单位1', '单位2', '单位3', '单位4'],
            axisLabel: {
                show: true,
                margin: 20,
                color: '#93F5F6',
                textStyle: {
                    fontSize: 18
                },
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#808998',
                }
            },
            axisTick: {
                show: false
            },
        }],
        yAxis: [{
            axisLabel: {
                formatter: '{value}%',
                color: '#99FFFF',
                textStyle: {
                    fontSize: 18
                },
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: '#808998',
                    type: 'dashed',
                }
            }
        }],
        series: [{
            type: 'bar',
            data: [40, 80, 20, 16],
            barWidth: '50%'
        }]
    };