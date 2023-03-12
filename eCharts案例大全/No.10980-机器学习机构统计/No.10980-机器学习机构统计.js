option = {
    title: {
        text: '机器学习机构统计',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['机器学习']
    },
    grid: {
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
        data: ['中国科学院半导体研究所', '中国人民解放军国防科学技术大学', '北京大学', '北京理工大学', '天津大学', '无锡江南计算技术研究所', '中国科学院电子学研究所', '中国科学院遥感与数字地球研究所', '华为技术有限公司', '哈尔滨工业大学']
    }],
    yAxis: [{
        type: 'value',
        name: "数量",
    }],
    series: [{
        type: 'bar',
        data: [8, 4, 3, 3, 2, 2, 2, 2, 2, 2],
    }]
};