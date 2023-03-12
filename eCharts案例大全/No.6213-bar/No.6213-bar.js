option = {
    angleAxis: {
        type: 'category',
        data: ['合肥', '芜湖', '马鞍山', '安庆', '铜陵', '六安', '宿州']
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [1, 2, 3, 4, 3, 5, 1],
        coordinateSystem: 'polar',
        name: '林火',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2, 4, 6, 1, 3, 2, 1],
        coordinateSystem: 'polar',
        name: '秸秆',
        stack: 'a'
    }, {
        type: 'bar',
        data: [1, 2, 3, 4, 1, 2, 5],
        coordinateSystem: 'polar',
        name: '工厂',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['林火', '秸秆', '工厂']
    }
};
