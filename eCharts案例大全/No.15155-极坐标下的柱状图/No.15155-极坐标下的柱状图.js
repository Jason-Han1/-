app.title = '极坐标系下的堆叠柱状图';

var getData = function() {
    var data = [];
    for (var i = 0; i < 24; ++i) {
        data.push(Math.floor((i + 10) * Math.random()));
    }
    return data;
}

option = {
    angleAxis: {
        type: 'category',
        data: (function () {
            var data = [];
            for (var i = 0; i < 24; ++i) {
                data.push(i + ':00');
            }
            return data;
        })(),
        z: 10
    },
    radiusAxis: {
    },
    polar: {
    },
    series: [{
        type: 'bar',
        data: getData(),
        coordinateSystem: 'polar',
        name: 'A',
        stack: 'a'
    }, {
        type: 'bar',
        data: getData(),
        coordinateSystem: 'polar',
        name: 'B',
        stack: 'a'
    }, {
        type: 'bar',
        data: getData(),
        coordinateSystem: 'polar',
        name: 'C',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['A', 'B', 'C']
    }
};
