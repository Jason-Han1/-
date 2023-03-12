option = {
    color: ['#26BAD5', '#7ED321', '#FF8B00', '#BD10E0'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(params,  callback) {
            
            return 'Loading';
        }
    },
    legend: {
        data: ['直行', '右转', '左转', '掉头'],
        itemHeight: 10,
        textStyle: {
            color: '#fff'
        },
        right: 10,
    },
    grid: {
        top: 25,
        bottom: 20
    },
    xAxis: [{
        type: 'category',
        axisLabel: {
            textStyle: {
                color: '#8895A2'
            }
        },
        axisTick: {
            show: false

        },
        data: ['东进口道', '南进口道', '西进口道', '北进口道','东进口道' ]
    }],
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#303437'
            }
        },
        axisTick: {
            show: false
        },
        nameTextStyle: {
            color: '#fff',
            padding: [0, 8, 0, 0]
        },
        axisLabel: {
            textStyle: {
                color: '#8895A2'
            }
        },
    },
    series: [{
            name: '直行',
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
                barBorderRadius: 4
            },
            data: [320, 332, 301, 334,222]
        },
        {
            name: '右转',
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
                barBorderRadius: 4
            },

            data: [220, 182, 191, 234,333]
        },
        {
            name: '左转',
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
                barBorderRadius: 4
            },

            data: [150, 232, 201, 154,444]
        },
        {
            name: '掉头',
            type: 'bar',
            barGap: '50%',
            barWidth: '10%',
            itemStyle: {
                barBorderRadius: 4
            },
            data: [98, 77, 101, 99,133]
        }
    ]
};