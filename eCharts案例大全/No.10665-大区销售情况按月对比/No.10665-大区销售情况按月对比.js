option = {
    legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: true
        },
    dataset: {
            source: [
                ['月份', '1月', '2月', '3月', '4月', '5月', '6月','7月','8月','9月','10月','11月','12月'],
                ['一大区', 141.1, 130.4, 165.1, 153.3, 183.8, 98.7,100],
                ['二大区', 186.5, 122.1, 185.7, 163.1, 173.4, 95.1,90]
            ]
        },
    xAxis: {
        type: 'category',
        boundaryGap: false,
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {type: 'line', smooth: true, areaStyle: {},seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, areaStyle: {},seriesLayoutBy: 'row'},
        ]
};
