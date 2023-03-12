var getDayTime = function() {
    var temp = [];
    for (var i = 0; i < 24; i++) {
        // var hour = i < 10 ? '0' + i + ':00' : i + ':00';
        var hour = i + ':00';
        temp.push(hour);
    }
    return temp;
}

var getRandomData = function() {
    var temp = [];
    for (var i = 0; i < 24; i++) {
        var item = Math.random() * 100 - Math.random() * 50;
        temp.push(Math.abs(item).toFixed(2));
    }

    return temp;
}

option = {
    color: ['#66CCFF', '#CC6666', '#66CCCC', '#FF9999', '#CCFF99'],
    title: {
        text: '近一小时情况',
        top: -5
    },
    // grid.top需要根据容器高度调整
    grid: [{
        top: '11%',
        bottom: 0,
        left: '5%',
        right: '5%',
        height: '80%'
    }],
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            if (params instanceof Array) {
                var idxMap = [{
                    data: []
                }];
                var time = params[0].axisValue;
                for (var i = 0; i < params.length; i++) {
                    var seriesIdx = params[i].seriesId.split(params[i].seriesId[0]);
                    idxMap[seriesIdx[2]].data.push({
                        marker: params[i].marker,
                        seriesName: params[i].seriesName,
                        data: params[i].data
                    });
                };

                return '<div>' +
                    '<time>' + time + '</time>' +
                    '<br />' +
                    idxMap.map(function(item) {
                        return '<span>' + item.text + '</span>' + item.data.map(function(i_item) {
                            return '<p style="margin: 0;padding: 0;">' + i_item.marker + i_item.seriesName + ': ' + i_item.data + '%' + '</p>';
                        }).join('');
                    }).join(''); +
                '</div>'
            }
        }
    },
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        }
    },
    legend: {
        data: ['接收', '发送']
    },
    xAxis: [{
        type: 'category',
        gridIndex: 0,
        boundaryGap: false,
        axisLabel: {
            interval: 0
        },
        data: getDayTime()
    }],
    yAxis: [{
        name: '',
        type: 'value',
        nameTextStyle: {
            fontSize: 14
        },
        min: 0,
        max: 100,
        gridIndex: 0,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }
    }],
    series: [{
        name: '接收',
        type: 'line',
        data: getRandomData()
    }, {
        name: '发送',
        type: 'line',
        data: getRandomData()
    }]
};