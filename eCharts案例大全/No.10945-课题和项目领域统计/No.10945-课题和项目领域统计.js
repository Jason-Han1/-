option = {
    title: {
        text: "课题和项目领域统计",
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
        name: "领域分类",
         axisLabel: {
            rotate: -25,
            fontSize: 18
        },
        data: ['智能传感器', '图计算', '计算机视觉', '机器学习', '分布式计算框架', '智能芯片', '大数据智能', '专家系统与知识工程', '模式识别']
    }],
    yAxis: [{
        type: 'value',
        name: "数量",
        axisLabel: {
            fontSize: 18
        },
    }],
    series: [{
            name: '2018',
            type: 'bar',
            label: {
                show: true,
                fontSize: 18,
                position:'top'
            },
            data: [162, 78, 86, 153, 69, 97, 48, 22, 31],
        },
        {
            name: '2017',
            type: 'bar',
            label: {
                show: true,
                fontSize: 18,
                position:'top'
            },
            data: [275, 200, 204, 170, 87, 101, 64, 64, 55],
        },
        {
            name: '2016',
            type: 'bar',
            label: {
                show: true,
                fontSize: 18,
                position:'top'
            },
            data: [238, 123, 103, 174, 109, 139, 32, 42, 38],

        },
    ]
};