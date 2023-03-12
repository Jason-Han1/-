 option = {
        legend: {
            data:['城市平均','本公司']
        },
        "color": [
            "#516b91",
            "#59c4e6",
            "#edafda",
            "#93b7e3",
            "#a5e7f0",
            "#cbb0e3"
        ],
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', '2011','2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                ['城市平均', 15.6, 19.4, 23.1, 22.3, 26.8, 25.7, 19.3, 15.8, 14.7, 16.8, 16.7],
                ['本公司', 11.5, 15.1, 15.7, 14.1, 17.4, 14.1, 9.1, 8.4, 7.1, 8.4, 8.1]
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        // grid: {top: '55%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row', label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },},
            {type: 'line', smooth: true, seriesLayoutBy: 'row', label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },}


        ]
    };