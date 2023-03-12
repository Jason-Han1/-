option = {
     title: {
        text: "人工智能重点领域项目部署分布图",
        textStyle: {
            color: "#000"
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data: ['2018', '2017', '2016']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '7%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        name:"领域名称",
        data: ['机器学习', '智能传感器', '智能软硬件', '图计算', '计算机视觉']
    }],
    yAxis: [{
        type: 'value',
        name:"项目数量"
    }],
    series: [{
            name: '2018',
            type: 'bar',
            label: {
                show: true,
            },
            data: [76, 32, 37, 20, 27]
        },
        {
            name: '2017',
            type: 'bar',
            label: {
                show: true,
            },
            data: [196, 104, 88, 53, 52]
        },
        {
            name: '2016',
            type: 'bar',
            label: {
                show: true,
            },
            data: [99, 52, 52, 42, 29],

        }
    ]
};