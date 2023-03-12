app.title = '极坐标系下的堆叠柱状图';

option = {
    angleAxis: {
        type: 'category',
        data: ['500-600米', '600-700米', '700-800米', '800-900米', '900-1000米', '1000米以上'],
        z: 10
    },
    toolbox: {
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        }
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: [849, 581, 465, 397, 523, 9],
        coordinateSystem: 'polar',
        name: 'M416',
        stack: 'a'
    }, {
        type: 'bar',
        data: [604, 369, 335, 330, 511, 13],
        coordinateSystem: 'polar',
        name: 'AKM',
        stack: 'a'
    }, {
        type: 'bar',
        data: [965, 521, 340, 231, 252, 1],
        coordinateSystem: 'polar',
        name: 'Kar98k',
        stack: 'a'
    }, {
        type: 'bar',
        data: [548, 199, 100, 62, 55, 2],
        coordinateSystem: 'polar',
        name: 'Mini 14',
        stack: 'a'
    }, {
        type: 'bar',
        data: [486, 258, 185, 128, 189, 1],
        coordinateSystem: 'polar',
        name: 'SKS',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['AKM', 'M416', 'Kar98k', 'Mini 14', 'SKS']
    }
};
