option = {
    title: {
        text: '智能软硬件机构统计',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['智能软硬件']
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
        data: ["清华大学","北京理工大学","天津大学","中国人民解放军国防科学技术大学","北京航空航天大学","中国人民解放军总医院","哈尔滨工业大学","武汉大学","华中科技大学","中国科学院自动化研究所"]
    }],
    yAxis: [{
        type: 'value',
        name: "数量",
    }],
    series: [{
        type: 'bar',
        data: [6,5, 3, 3, 3, 3, 3, 3, 2, 2],
    }]
};