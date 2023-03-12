var posList = [
    'left', 'right', 'top', 'bottom',
    'inside',
    'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
    'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];

app.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: echarts.util.reduce(posList, function (map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};

app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
        var labelOption = {
            normal: {
                rotate: app.config.rotate,
                align: app.config.align,
                verticalAlign: app.config.verticalAlign,
                position: app.config.position,
                distance: app.config.distance
            }
        };
        myChart.setOption({
            series: [{
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }, {
                label: labelOption
            }]
        });
    }
};


var labelOption = {
    show: true,
    position: app.config.position,
    distance: app.config.distance,
    align: app.config.align,
    verticalAlign: app.config.verticalAlign,
    rotate: app.config.rotate,
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
        name: {
            textBorderColor: '#fff'
        }
    }
};

option = {
    title: {
        text: '顾客 情绪统计结果',
        x: 'center',
        y: 'bottom',
    },
    color: ['#58B19F', '#4cabce', '#696969', '#e5323e', '#4169E1'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['happy', 'other', 'anxiety', 'anger', 'lost']
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['20191101', '20191111', '20200601', '20200618', '20200720', '20200721', '20200722', '20200723', '20200724', '20200725', '20200726']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'happy',
            type: 'bar',
            label: labelOption,
            data: [321357, 598333, 483038, 849161, 164198, 164038, 166447, 165810, 161122, 143157, 129767]
        },
        {
            name: 'other',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            data: [3235176, 6809720, 4724678, 8855964, 1391231, 1396862, 1398716, 1393900, 1381632, 1231406, 1122837]
        },
        {
            name: 'anxiety',
            type: 'bar',
            label: labelOption,
            data: [255576, 519531, 358421, 686371, 141762, 141617, 139421, 139971, 140186, 128631, 121164]
        },
        {
            name: 'anger',
            type: 'bar',
            label: labelOption,
            data: [144082, 270008, 186433, 376646, 66648, 69025, 67258, 67709, 67227, 68235, 65409]
        },
        {
            name: 'lost',
            type: 'bar',
            label: labelOption,
            data: [94986, 213067, 130956, 252574, 35105, 36493, 36768, 37151, 38679, 33084, 30698]
        },
        
    ]
};