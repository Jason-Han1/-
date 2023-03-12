option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    color: ['#fa6e86','#5ab1ef'],
    legend: {
        data: ['有问题户', '无问题户']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: ["福山区","莱山区","牟平区","海阳市","莱阳市","栖霞市","蓬莱市","长岛县","龙口市","招远市","莱州市","开发区","昆嵛区","高新区"]
    },
    series: [
        {
            name: '有问题户',
            type: 'bar',
            stack: '户数',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [320, 302, 301, 334, 390, 330, 320,320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '无问题户',
            type: 'bar',
            stack: '户数',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [120, 132, 101, 134, 90, 230, 120, 132, 101, 134, 90, 230, 210,210]
        },
    ]
};