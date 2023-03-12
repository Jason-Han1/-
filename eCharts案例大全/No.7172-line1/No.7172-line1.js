var xAxisData = [];
var data1 = [];
var data2 = [];
xAxisData.push('2020/06/01');
data1.push(1012);
xAxisData.push('2020/06/02');
data1.push(1125);
xAxisData.push('2020/06/03');
data1.push(1052);
xAxisData.push('2020/06/04');
data1.push(1178);
xAxisData.push('2020/06/05');
data1.push(1589);
xAxisData.push('2020/06/06');
data1.push(2948);
xAxisData.push('2020/06/07');
data1.push(2541);

option = {
    title: {
        text: '参观人数统计'
    },
    legend: {
        data: ['人次']
    },
    toolbox: {
        // y: 'bottom',
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        splitLine: {
            show: false
        }
    },
    yAxis: {
    },
    series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
            return idx * 10;
        }
    }, {
        name: 'bar2',
        type: 'bar',
        data: data2,
        animationDelay: function (idx) {
            return idx * 10 + 100;
        }
    }],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function (idx) {
        return idx * 5;
    }
};