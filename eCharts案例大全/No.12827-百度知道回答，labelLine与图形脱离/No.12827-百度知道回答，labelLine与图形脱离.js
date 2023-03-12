option = {
    title: {
        text: '百度知道回答，labelLine与图形脱离'
    },
    dataset: {
        source: [
            ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            [220, 182, 191, 234, 290, 330, 310]
        ]
    },
    xAxis: {

    },
    yAxis: {},
    series: [{
            name : 'show',
            type: 'pie',
            radius: ['0%', '40%'],
            seriesLayoutBy: 'row',
            label: {
                show: false
            }

        },
        {
            name: 'hidden',
            radius: ['40%', '45%'],
            type: 'pie',
            seriesLayoutBy: 'row',
            label: {
                show: true
            },
            itemStyle: {
                opacity: 0,
            }

        }
    ]
};

myChart.on('mouseover', function(params) {
    if (params.componentType === 'series' && params.seriesName == 'hidden') {
        myChart.dispatchAction({
            type: 'highlight',
            seriesName: 'show',
            dataIndex: params.dataIndex
        });
    }
});

myChart.on('mouseout', function(params) {
    if (params.componentType === 'series' && params.seriesName == 'hidden') {
        myChart.dispatchAction({
            type: 'downplay',
            seriesName: 'show',
            dataIndex: params.dataIndex
        });
    }
});