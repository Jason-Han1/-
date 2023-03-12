datasetSource = [
    ['product', '2015', '2016', '2017', '2018'],
    ['Matcha Latte', 43.3, 85.8, 93.7, 54.2],
    ['Milk Tea', 83.1, 73.4, 55.1, 65.3],
    ['Cheese Cocoa', 86.4, 65.2, 82.5, 87.1],
    ['Walnut Brownie', 72.4, 53.9, 39.1, 33.6]
];

function arrFilter(source, hasColumnName, filterCondition) {
    var iBegin = hasColumnName ? 1 : 0;
    var res = hasColumnName ? [source[0]] : [];
    if (typeof(filterCondition) === 'function') {
        for (var i = iBegin; i < source.length; i++) {
            if (filterCondition(source[i])) {
                res.push(source[i]);
            }
        }
    } else if (typeof(filterCondition) === 'string') {
        for (var j = iBegin; j < source.length; j++) {
            var item = source[j];
            if (eval(filterCondition)) {
                res.push(source[j]);
            }
        }
    }
    return res;
}

option = {
    legend: [{
        selectedMode: 'multipe',
        data: (function() {
            var res = [].concat(datasetSource[0]);
            res.shift();
            return res;
        })(),
    }, {
        y:20,
        data: ['Matcha Latte/Milk Tea', 'Cheese Cocoa/Walnut Brownie']
    }],
    tooltip: {},
    dataset: {
        source: datasetSource
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: (function() {
        var res = [];
        for (var i = 1; i < datasetSource[0].length; i++) {
            res.push({
                type: 'bar'
            });
        }
        res = res.concat([{
                type: 'line',
                name: 'Matcha Latte/Milk Tea',
                data: []
            },
            {
                type: 'line',
                name: 'Cheese Cocoa/Walnut Brownie',
                data: []
            }
        ]);
        return res;
    })()
};

myChart.on('legendselectchanged', function(params) {
    var datasetSourceNew;
    //alert(JSON.stringify(params.selected));
    if (params.selected['Cheese Cocoa/Walnut Brownie'] === true && params.selected['Matcha Latte/Milk Tea'] === true) {
        datsetSourceNew = [].concat(datasetSource);
    } else if (params.selected['Matcha Latte/Milk Tea'] === false && params.selected['Cheese Cocoa/Walnut Brownie'] === false) {
        datsetSourceNew = [].concat([datasetSource[0]]);
    } else if (params.selected['Matcha Latte/Milk Tea'] === true && params.selected['Cheese Cocoa/Walnut Brownie'] === false) {
        datsetSourceNew = arrFilter(datasetSource, true, 'item[0] === "Matcha Latte" || item[0] === "Milk Tea"');
    } else if (params.selected['Cheese Cocoa/Walnut Brownie'] === true && params.selected['Matcha Latte/Milk Tea'] === false) {
        datsetSourceNew = arrFilter(datasetSource, true, 'item[0] === "Cheese Cocoa" || item[0] === "Walnut Brownie"');
    }
    myChart.setOption({
        dataset: {
            source: datsetSourceNew
        }
    });
});