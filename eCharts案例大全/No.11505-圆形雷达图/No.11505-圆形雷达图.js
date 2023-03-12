function getRandom(num) {
    return Math.floor(Math.random() * num);
}

function getMax(arr, key) {
    var max = 0,
        len = arr.length;
    for (var i = 0; i < len; i++) {
        var item = arr[i][key];
        if (max < item) max = item;
    }
    return max;
}

function getValArr(arr, key) {
    var val = [],
        len = arr.length;
    for (var i = 0; i < len; i++) {
        val.push(arr[i][key]);
    }
    return val;
}

var data = [{
        name: '指标1',
        value: getRandom(9999)
    }, {
        name: '指标2',
        value: getRandom(9999)
    }, {
        name: '指标3',
        value: getRandom(9999)
    }, {
        name: '指标4',
        value: getRandom(9999)
    }],
    max = getMax(data, 'value');

var indicatorData = data.map(function(e) {
    return {
        name: e.name,
        max: max
    }
}),
serData = getValArr(data, 'value');
option = {
    tooltip: {},
    backgroundColor: '#222',
    radar: [{
        indicator: indicatorData,
        center: ['50%', '50%'],
        radius: '60%',
        startAngle: 90,
        splitNumber: 5,
        shape: 'circle',
        nameGap: 5,
        name: {
            textStyle: {
                color: '#fff',
                fontSize: 16,
                rich: {
                    b: {
                        color: '#00eaff',
                        fontSize: 12,
                        lineHeight: 13,
                        align: 'center'
                    }
                }
            }
        },
        splitArea: {
            areaStyle: {
                color: ['#2345fb', '#60a0ff', '#217aff', '#0e39cc', '#002192']
            }
        },
        axisLine: {
            lineStyle: {
                type: 'dashed',
                color: '#fff'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'transparent'
            }
        }
    }],
    series: [{
        name: '雷达图',
        type: 'radar',
        symbolSize: 0,
        itemStyle: {
            normal: {
                areaStyle: {
                    color: '#a12cd1'
                },
                lineStyle: {
                    color: '#8461d2'
                }
            }
        },
        data: [{
            value: serData
        }]
    }]
};