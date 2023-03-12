option = {
    title: {
        text: 'Awesome Chart',
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    },
    yAxis: {},
    series: [
        {
            type: 'bar',
            data: [220, 182, 191, 234, 290, 330, 310],
        },
    ],
    timeline: {
        axisType: 'time',
        currentIndex: 2,
        // realtime: false,
        // loop: false,
        autoPlay: false,
        playInterval: 15000,
        tooltip: {
            show: false,
        },
        label: {
            formatter: function (s) {
                return new Date(s).getFullYear() + '-' + (new Date(s).getMonth() + 1);
            },
        },
        data: [
            {
                value: '2020-01-01',
            },
            {
                value: '2020-02-01',
            },
            {
                value: '2020-03-01',
            },
        ],
    },
};

echarts.init(document.getElementById('chart-panel'), 'macarons').on('timelinechanged', function (params) {
    console.log(params);
    // fun(yearf, params.currentIndex + 1);
});
