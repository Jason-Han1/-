xAxisData = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
yAxisData = {
    'data1': ['-', '-', '-', 234, 290, 133, 123],
    'data2': ['-', 221, 191, 324, 121, 233, 421],
    'data3': ['-', '-', 332, 243, 231, 333, 213],
    'data4': [122, 333, 221, 432, 331, 411, 312]
};

//数据处理函数（假定各系列数据列表长度一致）
function func1(xData, yData, selectedList) {
    let sliceParam = -1;
    let res = {};
    res.xData = [];
    res.yData = {};

    //当未传入selectedList时，不进行处理直接输出
    if (typeof(selectedList) === 'undefined') {
        res.xData = xData;
        res.yData = yData;
        return res;
    }

    for (let i in xData) {
        for (let key in yData) {
            if (selectedList[key] && yData[key][i] != '-') {
                sliceParam = i;
                break;
            }

        }
        if (sliceParam != -1) {
            break;
        }
    }
    res.xData = xAxisData.slice(sliceParam);
    for (let key in yData) {
        res.yData[key] = yData[key].slice(sliceParam);
    }
    return res;
}


dataNew = func1(xAxisData, yAxisData);


option = {
    title: {
        text: 'Awesome Chart'
    },
    legend: {},
    xAxis: {
        data: dataNew.xData
    },
    yAxis: {},
    series: (function() {
        let res = [];
        for (let key in dataNew.yData) {
            res.push({
                name: key,
                type: 'line',
                data: dataNew.yData[key]
            });
        }
        return res;
    })()
};

myChart.on('legendselectchanged', function(params) {
    dataNew = func1(xAxisData, yAxisData, params.selected);
    myChart.setOption({
        xAxis: {
            data: dataNew.xData
        },
        series: (function() {
            let res = [];
            for (let key in dataNew.yData) {
                res.push({
                    name: key,
                    type: 'line',
                    data: dataNew.yData[key]
                });
            }
            return res;
        })()

    });

});