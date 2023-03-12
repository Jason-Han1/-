
var categoriesA = ['上海电信', '杭州移动', '济南联通']
var categoriesB = ['请求量', 'CC攻击拦截量'];


option = {
    tooltip: {},
    legend: [{
        data: categoriesA.concat(['']).concat(categoriesB)
    }],
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '上海电信 - 请求量',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
    }, {
        name: '上海电信 - CC攻击拦截量',
        type: 'line',
        data: [15, 23, 16, 40, 16, 10]
    }, {
        name: '杭州移动 - 请求量',
        type: 'line',
        data: [4, 28, 16, 16, 14, 50]
    }, {
        name: '杭州移动 - CC攻击拦截量',
        type: 'line',
        data: [44, 21, 1, 12, 24, 30]
    }, {
        name: '济南联通 - 请求量',
        type: 'line',
        data: [23, 2, 16, 16, 14, 50]
    }, {
        name: '济南联通 - CC攻击拦截量',
        type: 'line',
        data: [24, 35, 6, 26, 16, 10]
    }].concat(echarts.util.map(categoriesA, function (catA) {
        return {
            name: catA,
            type: 'line',
            data: []
        };
    })).concat(echarts.util.map(categoriesB, function (catB) {
        return {
            name: catB,
            type: 'line',
            data: []
        };
    }))
};

setTimeout(function () {
    myChart.on('legendselectchanged', function (params) {
        var selectedBatch = [];
        var unselectedBatch = [];
        var selectedStatus = params.selected[params.name];
        var seriesOption = option.series;
        
        echarts.util.each(option.series, function (seriesOpt) {
            var seriesName = seriesOpt.name;
            var splitedName = seriesName.split(' - ');
            if (splitedName.length < 2) {
                return;
            }
            if (params.selected[splitedName[0]] && params.selected[splitedName[1]]) {
                selectedBatch.push({name: seriesName});
            }
            else {
                unselectedBatch.push({name: seriesName});
            }
        });

        myChart.dispatchAction({
            type: 'legendSelect',
            batch: selectedBatch
        }, {silent: true});
        myChart.dispatchAction({
            type: 'legendUnSelect',
            batch: unselectedBatch
        }, {silent: true});
    })
}, 10)