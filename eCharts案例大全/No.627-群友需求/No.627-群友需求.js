var color = ['red', 'green'];
option = {
    animation: false,
    color: color,
    legend: {
        show: true,
        x: 'center',
        y: 'bottom',
        icon: 'stack',
        itemWidth: 50,
        itemHeight: 20,
        textStyle: {
            color: '#1bb4f6',
            fontSize: 30,
        },
        data: ['A', 'B'],
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 250,
    },

    series: [
        {
            name: 'A',
            type: 'bar',

            data: [
                120,
                {
                    value: 200,
                    itemStyle: {
                        color: color[1],
                    },
                },
                150,
                80,
                70,
                110,
                130,
            ],
        },
        {
            name: 'B',
            type: 'line',
        },
    ],
};
myChart.on('legendselectchanged', function (params) {
    var legend = params.name;
    var selected = params.selected[legend];
    console.log(selected);
    if (legend == 'A') {
        if (selected === false) {
            option.series[1] = {
                name: 'B',
                type: 'bar',
                data: [
                    null,
                    {
                        value: 200,
                        itemStyle: {
                            color: color[1],
                        },
                    },
                    null,
                    null,
                    null,
                    null,
                    null,
                ]
            }
                myChart.setOption(option);
        } else {
            option.series[1] = {
                name: 'B',
                type: 'line',
                data: [],
            }
            myChart.setOption(option);
        }
    } else {
        if (selected === false) {
            option.series[0].data = [
                120,
                {
                    value: null,
                    itemStyle: {
                        color: color[1],
                    },
                },
                150,
                80,
                70,
                110,
                130,
            ];
            myChart.setOption(option);
        } else {
            option.series[0].data = [
                120,
                {
                    value: 200,
                    itemStyle: {
                        color: color[1],
                    },
                },
                150,
                80,
                70,
                110,
                130,
            ];
            myChart.setOption(option);
        }
    }
});
