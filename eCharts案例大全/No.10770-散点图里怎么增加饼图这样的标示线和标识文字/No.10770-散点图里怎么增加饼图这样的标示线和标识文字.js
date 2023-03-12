option = {
    xAxis: {},
    yAxis: {},
    aria: {
        show: true
    },
    series: [{
            symbolSize: 20,
            data: [
                [10.0, 8.04],
                [8.0, 6.95],
                [13.0, 7.58],
                [9.0, 8.81],
                [11.0, 8.33],
                [14.0, 9.96],
                [6.0, 7.24],
                [4.0, 4.26],
                [12.0, 10.84],
                [7.0, 4.82],
                [5.0, 5.68]
            ],
            type: 'scatter',
        },
        {
            symbolSize: 20,
            data: [
                [4, 3, 403],
                // [5, 3, 503],
            ],
            type: 'scatter',
            itemStyle: {
                normal: {
                    label: {
                        color: '#7B38F8',
                        show: true,
                        position: 'top',
                        trigger: 'item',
                        formatter: function(params) {
                            return params.value[0] + "/" + params.value[1] + '<br/>' + params.value[2];
                        },
                    },
                },
            },
        },
    ],
};