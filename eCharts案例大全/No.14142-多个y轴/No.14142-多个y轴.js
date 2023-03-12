var colors = ['#5793f3', '#d14a61', '#675bba'];

option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {type: 'cross'}
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
    legend: {
        data:['蒸发量','降水量','平均温度']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['雷达','浮标','海洋站','断面','志愿船']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '蒸发量',
            min: 0,
            max: 250,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '降水量',
            min: 0,
            max: 250,
            position: 'right',
            offset: 80,
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: '温度',
            min: 0,
            max: 25,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value} °C'
            }
        }
    ],
    series: [
        {
            name:'平台数量',
            type:'line',
            yAxisIndex: 2,
            data:[2.0, 2.2, 3.3, 4.5, 6.3]
        },
        {
            name:'月接收率',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6]
        },
        {
            name:'年接收率',
            type:'bar',
            data:[12.0, 14.9, 17.0, 123.2, 125.6]
        },
        {
            name:'月接收量',
            type:'bar',
            yAxisIndex: 1,
            data:[2.6, 5.9, 9.0, 26.4, 28.7]
        },
        {
            name:'年接收量',
            type:'bar',
            yAxisIndex: 1,
            data:[12.6, 15.9, 19.0, 126.4, 128.7]
        }
        
    ]
};
