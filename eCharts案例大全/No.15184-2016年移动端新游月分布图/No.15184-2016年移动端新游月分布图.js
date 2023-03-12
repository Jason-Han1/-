option = {
    backgroundColor: '#5580A1',
    title: {
        bottom: 1,
        text: '2016年移动端新游月分布图（款）',
        subtext: '数据来源 DataEye2016中国移动游戏行业年度报告'
    },
    tooltip: {

    },
    angleAxis: {
        type: 'category',
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        z: 10,
    },
    radiusAxis: {
        name: '新游数量'
    },
    itemStyle: {
        normal: {
            color: '#68a2a9',
        }
    },
    polar: {},
    series: [{
        type: 'bar',
        data: [1000, 900, 1300, 1386, 1085, 2100, 2200, 2183, 2081, 2204, 1735, 2153],
        coordinateSystem: 'polar',
    }]
};