app.title = '多 Y 轴示例';

var colors = ['#5793f3', '#d14a61', '#675bba'];

option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitLine: {
                show: false
            },
            name: '蒸发量',
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            show: false
        },
        {
            type: 'value',
                        splitLine: {
                show: false
            },
            name: '降水量',
            position: 'right',
            offset: 80,
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            show: false
        },
        {
            type: 'value',
                        splitLine: {
                show: false
            },
            name: '温度',
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
            show: false
        }
    ],
    series: [
        {
            name:'蒸发量',
            type:'bar',
            barWidth: 20,
            data:[21.0, 14.9, 17.0, 23.2, 25.6, 16.7, 13.6]
        },
        {
            name:'降水量',
            type:'bar',
            yAxisIndex: 1,
            barWidth: 20,
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 55.6]
        },
        {
            name:'平均温度',
            type:'line',
            yAxisIndex: 2,
            barWidth: 20,
            data:[22.0, 22.2, 23.3, 24.5, 26.3, 20.2, 20.3]
        }
    ]
};
