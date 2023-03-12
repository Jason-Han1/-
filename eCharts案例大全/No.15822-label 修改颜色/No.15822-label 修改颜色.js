timeData = ['2016/1/1 19:20:00', '2016/1/2 19:20:00', '2016/1/3 19:20:00', '2016/1/4 19:20:00', '2016/1/5 19:20:00', '2016/1/6 19:20:00', '2016/1/7 19:20:00']
option = {
    backgroundColor: '#312f2f',
    tooltip: {
        trigger: 'axis'
    },
    grid: [{
        show: true,
        top: '8%',
        left: '8%',
        right: '1%',
        height: '80%',
    }],
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            onZero: true
        },
        data: timeData,
        axisLabel: {
            interval: 1,
            textStyle: {
                color: '#eaeaea'
            }
        }
    }],
    yAxis: [{
        name: 'I/O(KBPS)',
        type: 'value',
    }],
    series: [{
        name: 'aaa',
        type: 'line',
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    textStyle: {
                        //修改 折线点的值 显示颜色
                        color: '#fff'
                    }
                }
            }
        },
        areaStyle: {
            normal: {},
            smooth: true,
            opacity: 0.7
        },
        data: [1, 2, 3, 6, 5, 3, 2]
    }]
}