option = {
    backgroundColor: '#222',
    legend: {
        left: 'center',
        top: 22,
        itemWidth: 26,
        itemHeight: 12,
        icon: 'rect',
        itemGap: 34,
        padding: 0,
        textStyle: {
            fontSize: 14,
            color: '#fff',
            padding: [0, 0, 0, 5]
        },
        data: ['事项1', '事项2', '事项3']
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: 38.5,
        right: 12,
        top: 68,
        bottom: 51
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#2b44a4'
            }
        },
        axisLabel: {
            interval: 0,
            fontSize: 14,
            color: '#fff'
        },
        data: ['类目1', '类目2', '类目3', '类目4', '类目5']
    },
    yAxis: {
        name: '件',
        nameGap: 12,
        nameTextStyle: {
            fontSize: 16,
            color: '#fff'
        },
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#2b44a4'
            }
        },
        axisLabel: {
            fontSize: 14,
            color: '#fff'
        },
        splitNumber: 4,
        splitLine: {
            lineStyle: {
                color: '#2b44a4',
                type: 'solid'
            }
        }
    },
    color: ['#037ffa', '#57f6e9', '#e4e5a3'],
    series: [{
        type: 'bar',
        name: '事项1',
        stack: '事项',
        barWidth: 20,
        data: [10,20,30,20,10]
    },{
        type: 'bar',
        name: '事项2',
        stack: '事项',
        barWidth: 20,
        data: [20,30,40,30,20]
    },{
        type: 'bar',
        name: '事项3',
        stack: '事项',
        barWidth: 20,
        data: [30,40,50,40,30]
    }]
};