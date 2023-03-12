app.title = '坐标轴刻度与标签对齐';

option = {
    backgroundColor: '#000',
    width: '210',
    height: '100',
    color: ['#3398DB'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: '1%',
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7'],
        axisTick: {
            show: false

        },

        axisLine: {
            show: false,
            lineStyle: {
                color: '#ccc'
            }
        }
    }],
    yAxis: {
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#39506f'],

            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    series: [{
        name: '直接访问',
        type: 'bar',
        barWidth: '40%',
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1, [{
                        offset: 0,
                        color: '#84f986'
                    }, {
                        offset: 1,
                        color: '#0fc0c6'
                    }]
                )
            }
        },
        data: [110, 152, 500, 734, 890, 630, 720]
    },
    {
            name:'平均温度',
             smooth: true,
            type:'line',
            itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#43eec6'},
                        {offset: 1, color: '#06a8fd'}
                    ]
                )
            }
        },
            data:[110, 152, 500, 734, 890, 630, 720 ]
        }
    ]
};