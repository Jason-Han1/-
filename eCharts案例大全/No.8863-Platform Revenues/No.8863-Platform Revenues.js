option = {
    title: {
        text: 'Platform Revenues',
        subtext: 'Sample Data for Demostration',
        left: 'left'
    },
    legend: {
        bottom: 0
    },
    tooltip: {},
    dataset: {
        dimensions: ['Platform', 'OG', 'AG', 'AB', 'PT'],
        source: [
            ['Jan 2019', 4000000, 6000000, 3500000, 6500000],
            ['Feb 2019', 3400000, 7000000, 3800000, 8800000],
            ['Mar 2019', 6000000, 3400000, 6300000, 7300000],
            ['Apr 2019', 7200000, 5800000, 5000000, 7400000],
            ['May 2019', 3900000, 7100000, 3700000, 5200000],
            ['Jun 2019', 5700000, 7300000, 3500000, 7800000],
            ['Jul 2019', 4000000, 6000000, 3500000, 6500000],
            ['Aug 2019', 3400000, 7000000, 3800000, 8800000],
            ['Sep 2019', 6100000, 3500000, 6400000, 7200000],
            ['Oct 2019', 7100000, 5900000, 5100000, 7500000],
            ['Nov 2019', 3900000, 7100000, 3700000, 5200000],
            ['Dec 2019', 5200000, 7500000, 3100000, 7800000],
        ]
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        name: '',
        min: 0,
        max: 9000000,
        interval: 1800000,
        axisLabel: {
            formatter: '￥{value}'
        }

    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{
            type: 'bar'
        },
        {
            type: 'bar'
        },
        {
            type: 'bar'
        },
        {
            type: 'bar'
        }
    ]
};