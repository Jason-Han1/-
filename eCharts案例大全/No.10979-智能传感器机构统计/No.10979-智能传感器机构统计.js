option = {
    title: {
        text: '智能传感器机构统计',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['智能传感器']
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
        data: ["武汉大学","天津大学","西安交通大学","清华大学","北京理工大学","中国科学院长春光学精密机械与物理研究所","哈尔滨工业大学","中国科学院上海微系统与信息技术研究所","中国科学院电子学研究所","中国科学院遥感与数字地球研究所"]
    }],
    yAxis: [{
        type: 'value',
        name: "数量",
    }],
    series: [{
        type: 'bar',
        data: [6, 5, 5, 5, 5, 4, 4, 3, 3, 3],
    }]
};