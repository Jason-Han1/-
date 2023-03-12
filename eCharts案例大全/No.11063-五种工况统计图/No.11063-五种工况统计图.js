const data = {
    'index': ['06.12', '06.13', '06.14', '06.15', '06.17', '06.18', '06.19'],
    'a': [10, 12, 20, 0, 8, 10, 12],
    'b': [8, 6, 4, 3, 6, 3, 5],
    'c': [6, 10, 1, 1, 1, 0, 2],
    'd': [10, 1, 0, 2, 1, 1, 3],
    'e': [9, 4, 13, 8, 4, 0, 3]
}
option = {
    backgroundColor: '#fff',
    legend: {
        left: '20%',
        top: '50%',
        borderRadius: 20,
        itemWidth: 12,
        itemHeight: 8,
        itemGap: 50,
        orient: 'vertical',
        selectedMode:false
    },
    color: ['#74D2A0', '#6AA0E4', '#E87C47', '#CB4B53', '#EAEAEA'],
    grid: {
        left: '30%',
        right: '20%',
        bottom: '10%',
        top: '20%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#A4A6AD'
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
            type: 'bar',
            name: '正常运行',
            stack: '总量',
            barWidth: '20',
            // itemStyle: {
            //     barBorderRadius: [0, 0, 30, 30]
            // },
            zlevel: 10,
            encode: {
                x: 'index',
                y: 'a',
            }
        },
        {
            type: 'bar',
            name: '计划停机',
            stack: '总量',
            barWidth: '20',
            zlevel: 10,
            encode: {
                x: 'index',
                y: 'b',
            }
        },
        {
            type: 'bar',
            stack: '总量',
            name: '工况警告',
            barWidth: '20',
            zlevel: 10,
            encode: {
                x: 'index',
                y: 'c',
            }
        },
        {
            type: 'bar',
            name: '意外停机',
            stack: '总量',
            barWidth: '20',
            zlevel: 10,
            encode: {
                x: 'index',
                y: 'd',
            }
        },
        {
            type: 'bar',
            stack: '总量',
            name: '设备离线',
            barWidth: '20',
            // itemStyle: {
            //     barBorderRadius: [30, 30, 0, 0]
            // },
            emphasis: {
                itemStyle: {
                    color: '#EAEAEA'
                }
            },
            zlevel: 10,
            encode: {
                x: 'index',
                y: 'e',
            }
        }
    ],
    dataset: {
        source: data
    }
};