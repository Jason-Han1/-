
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
                    id: '1',
                    label: {
                        position: 'start',
                        formatter: '我是新标注'
                    },
                    xAxis: -30,
                    yAxis: 30
                },
                {
                    xAxis: 50,
                    yAxis: 50
                }]
            ]
        }
    }
    ] 
};

myChart.on('click', function (params) {
    //单击标注修改标注文本
    if (params.componentType === 'markLine') {
        myChart.setOption({
        series: [{
            markLine: {
                data: [{
                    id: '1',
                    label: {
                        formatter: '1111111'
                    }
                }]
            }
        }]
    });
    }
}); 
 