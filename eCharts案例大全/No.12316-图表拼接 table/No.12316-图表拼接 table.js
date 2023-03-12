var max = 10000;
var data = [{
    name: 'value',
    value: 0,
    itemStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#C96DD8'
            }, {
                offset: 1,
                color: '#3023AE'
            }])
        }
    }
}];


function renderItem(params, api) {
    console.log(params)
    // window.alert(api.value(1))
    var start = api.coord([api.value(0), 0]);
    console.log(start)
    // 值映射成坐标
    var end = api.coord([api.value(1), 0]);
    // 值映射成长度
    var height = api.size([0, api.value(1)])[1];
    console.log(api.size([0, api.value(1)])[1])
    var d = api.size([0, 1000])[1]
    height -= d;
    // window.alert(height)
    return {
        type: 'rect',
        shape: {
            x: params.coordSys.x,
            y: end[1],
            // x: 0,
            // y: 0,
            width: params.coordSys.width,
            height: -height
        },
        style: api.style()
    };

}


option = {
    grid: {
        left: 'middle',
        width: 70
    },
    tooltip: {},
    xAxis: {
        show: false,
        data: [
            [
                ['test1']
            ]
        ],
    },
    yAxis: {
        // show: false,
        min: 0,
        max: max,
    },
    series: [{
        type: 'custom',
        renderItem: renderItem,
        encode: {
            y: 0
        },
        data: [{
            name: 'max',
            value: max,
            itemStyle: {
                normal: {
                    color: '#000',
                    opacity: 0.5
                }
            }
        }],
        silent: true
    }, {
        type: 'custom',
        renderItem: renderItem,
        encode: {
            y: 0
        },
        data: data,
    }]
};
var i = 0;
// setInterval(function() {
//     if (option1.series[1].data[0].value >= 10000) {
//         i = 1;
//     } else if (option1.series[1].data[0].value <= 0) {
//         i = 0;
//     }
//     if (i) {
//         option1.series[1].data[0].value -= 1000;
//     } else {
//         option1.series[1].data[0].value += 1000;
//     }

//     myChart.setOption(option1);
//     var left = myChart.convertToPixel({
//         xAxisIndex: 0
//     }, [0]);
//     console.log(left);
// }, 1000)