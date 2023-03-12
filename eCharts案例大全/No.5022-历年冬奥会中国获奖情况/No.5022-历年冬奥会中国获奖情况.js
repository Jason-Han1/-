option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['金牌','银牌','铜牌']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['第23届','第22届','第21届','第20届','第19届','第18届','第17届','第16届','第15届','第14届','第13届']
    },
    series: [
        {
            name: '金牌',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [1,3,5,2,2]
        },
        {
            name: '银牌',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [6,4,4,4,2,2,2,3]
        },
        {
            name: '铜牌',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [2,2,2,5,4,2,2]
        }
    ]
};