
option = {
    xAxis: {
        type: 'value',
        max: 100,
        min: -100
    },
    yAxis: {
        type: 'value',
        max: 100,
        min: -100
    },
    series: [{
        type: 'lines',
        coordinateSystem: 'cartesian2d',
        markLine: {
            data: [[
                {
                    xAxis: 0,
                    yAxis: 0
                },
                {
                    xAxis: 80,
                    yAxis: 80
                }]
            ]
        }
    }
    ],
    graphic: [{
        elements: [{
            type: 'circle',
            position: [200, 200],
            shape: {
                cx: 0,
                cy: 0,
                r: 20
            },
        },
        {
            type: 'circle',
            position: [300, 200],
            shape: {
                cx: 0,
                cy: 0,
                r: 20
            },
        }]
    }]
};

myChart.on('click', function (params) {
    console.log(params.componentType);
    if (params.componentType === 'markLine') {
        //正确删除
        myChart.setOption({
            series: [{
                markLine: {
                    data: []
                }
            }]
        });
    }
    else if (params.componentType === 'graphic') {
        option.graphic = [];
        myChart.setOption(option, true);
    }
}); 