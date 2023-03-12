datasetSourceObj = {
    '年': [
        ['年', '数据'],
        ['2014', 31],
        ['2015', 41],
        ['2016', 59],
        ['2017', 26],
        ['2018', 53],
    ],
    '月': [
        ['月', '数据'],
        ['1月', 14],
        ['2月', 14],
        ['3月', 21],
        ['4月', 35],
        ['5月', 62],
    ],
    '周': [
        ['周', '数据'],
        ['第1周', 17],
        ['第2周', 32],
        ['第3周', 5],
        ['第4周', 8]
    ]
};

option = {
    legend: [{
        selectedMode: 'single',
        data: ['年', '月', '周']
    }],
    tooltip: {},
    dataset: {
        source: datasetSourceObj['年']
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: (function() {
        let res = [{
            type: 'bar'
        }];
        res = res.concat([{
                type: 'line',
                name: '年',
                data: []
            },
            {
                type: 'line',
                name: '月',
                data: []
            },
            {
                type: 'line',
                name: '周',
                data: []
            }
        ]);
        return res;
    })()
};

myChart.on('legendselectchanged', function(params) {
    let datasetSourceNew;
    myChart.setOption({
        dataset: {
            source: datasetSourceObj[params.name]
        }
    });
});