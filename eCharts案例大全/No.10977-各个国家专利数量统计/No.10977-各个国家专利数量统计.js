option = {
    title: {
        text: '各个国家专利数量统计',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['国家']
    },
    grid: {
        right:'15%',
        bottom: '15%'
    },
    toolbox: {
        feature: {
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        name: "机构",
        axisLabel: {
            rotate: -25,
        },
        data: ["China","Japan","United States","Germany","Korea","United Kiongdom","France","Belgium","Russia","Taiwan"]
    }],
    yAxis: [{
        type: 'value',
        name: "数量",
    }],
    series: [{
        type: 'bar',
        data: [30013, 27976, 24247, 5364, 4863, 1274, 1210, 885, 642, 622],
    }]
};