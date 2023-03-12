
option = {
	     tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    color:['#fb737e','#6c8ed6','#54c0c6','#fe963d','#3fa3de'],
    legend: {
        data: ['0-1', '1-2', '2-3', '3-4', '4-5']
    },
    barCategoryGap: '50%',
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['2019','2020', '2021']
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: '0-1',
            type: 'bar',
            stack: '0-1',
            data: [10,20, 32]
        },
        {
            name: '1-2',
            type: 'bar',
            stack: '1-2',
            data: [152,182, 220]
        },
        {
            name: '2-3',
            type: 'bar',
            stack: '2-3',
            data: [152,182, 220]
        },
        {
            name: '3-4',
            type: 'bar',
            stack: '3-4',
            data: [152,182, 220]
        },
        {
            name: '4-5',
            type: 'bar',
            stack: '4-5',
            data: [152,182, 220]
        }
    ]
};