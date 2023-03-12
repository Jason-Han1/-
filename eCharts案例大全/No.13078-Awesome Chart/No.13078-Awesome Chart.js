option = {
    title: {
        text: 'two bar'
    },
   tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
    grid: [{
        left: 70,
        right: 50,
        height: '40%'
    }, {
        left: 70,
        right: 50,
        top: '52%',
        height: '30%'
    }],
    xAxis: [{
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLabel: {
                interval: 0,
                rotate: 0,
            },
            axisTick: {
                show: false
            }
        },
        {
            show: false,
            gridIndex: 1,
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            position: 'top'
        }
    ],
    yAxis: [{
            type: 'value',
            name: 'name1',
            axisLabel: {
                formatter: '{value} % '
            }
        },
        {
            type: 'value',
            name: 'name2',
            gridIndex: 1,
            inverse: true,

            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [{
            name: 'name1',
            type: 'bar',
            data: [120, 200, 150, 80, 70, 110, 130],
        },
        {
            name: 'name2',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [120, 200, 150, 80, 70, 110, 130],
        }
    ]
};