option = {
    color: ['#d5e8e4', '#03734b','#bcb19a', '#f1f0ec'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid:{
        bottom: '20%'
    },
    legend: {
        data: ['中秋活动', '元宵活动', '新年活动', '年中庆典'],
        top: '90%'
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            
            saveAsImage: {show: true}
        }
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['东区', '南区', '西区', '北区']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '中秋活动',
            type: 'bar',
            barGap: 0,
            
            data: [320, 332, 301, 334]
        },
        {
            name: '元宵活动',
            type: 'bar',
            
            data: [220, 182, 191, 234]
        },
        {
            name: '新年活动',
            type: 'bar',
            
            data: [150, 232, 201, 154]
        },
        {
            name: '年中庆典',
            type: 'bar',
            
            data: [98, 77, 101, 99]
        }
    ]
};