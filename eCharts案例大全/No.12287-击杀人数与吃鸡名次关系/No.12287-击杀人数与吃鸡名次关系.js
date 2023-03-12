
option = {
     title: {
        text: '击杀人数与吃鸡名次关系',
        subtext: '300w+单排玩家数据'
    },
    angleAxis: {
    },
    radiusAxis: {
        type: 'category',
        data: ['30+', '20-30', '10-20', '5-10', '1-5', '0'],
        z: 10
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [185,510,9333,68284,369243,138159],
        coordinateSystem: 'polar',
        name: '前20名',
        stack: 'a'
    }, {
        type: 'bar',
        data: [1,6 ,189, 11658, 311586,261302],
        coordinateSystem: 'polar',
        name: '20-40名',
        stack: 'a'
    }, {
        type: 'bar',
        data: [0, 0, 14, 3141, 264344, 361875],
        coordinateSystem: 'polar',
        name: '40-60名',
        stack: 'a'
    }, {
        type: 'bar',
        data: [0, 0, 4, 561, 172455, 450694],
        coordinateSystem: 'polar',
        name: '60-80名',
        stack: 'a'
    }, {
        type: 'bar',
        data: [0, 0, 0, 31, 44843, 414101],
        coordinateSystem: 'polar',
        name: '80-100名',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['前20名', '20-40名', '40-60名', '60-80名', '80-100名']
    }
};
