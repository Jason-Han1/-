option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    xAxis: {
        data: ['作业1', '作业2','考试1','作业3','考试2','考试3','作业4']
    },
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: '考试',
            max: 100,
            min: 0,
            boundaryGap: [0.2, 0.2]
        },
        {
            type: 'category',
            scale: true,
            name: '作业',
            data: [0, 'A', 'B', 'C', 'D', 'E'],
            boundaryGap: false,
            axisTick: {
                
            }
        }],
    series: [{
        data: [['作业1', 10, 'B'], ['作业2', 100], ['作业3', 20], ['作业4', 35]],
        type: 'line'
    },{
        data: [['考试1', 10, 'B'], ['考试2', 35], ['考试3', 60]],
        type: 'line'
    }]
};