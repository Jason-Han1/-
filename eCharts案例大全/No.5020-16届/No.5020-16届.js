option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['product', '金牌', '银牌', '铜牌'],
            ['第16届',0,3,0],
            //['第17届',0,1,2],
            //['第18届',0,6,2],
            //['第19届',2,2,4],
            //['第20届',2,4,5],
            //['第21届',5,4,2],
            //['第22届',3,4,2],
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {max: 6
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
};
