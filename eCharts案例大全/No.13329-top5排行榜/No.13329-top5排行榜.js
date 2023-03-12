option = {
    title: {
        text: 'top5排行榜',
        textStyle: {
            color: '#fff'
        },
        subtext: 'top5排行榜',
        subtextStyle: {
            color: '#fff'
        }
    },
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
    grid: [{
        x: '10%',
        y: '10%',
        width: '300',
        height: '200'
    }],
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: ['张三', '李四', '王五', '赵六', '王雅俊'],

        splitLine: {
            show: false
        },
        axisLabel: {
            show: true,
            color: "#fff",
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        itemStyle: {
            normal: {
                color: function(params) {
                    // build a color map as your need.
                    var colorList = [
                        '#B1F5F6',
                        '#85FBFD',
                        '#4EFBFF',
                        '#00CCFF',
                        '#7FFE00'
                    ];
                    return colorList[params.dataIndex]
                },
                label: {
                    show: true,
                    position: 'right',
                    color: "#fff",
                    formatter: '{c}'
                }
            }
        },
        barWidth: 10,
        data: [10, 20, 30, 40, 90]
    }]
};