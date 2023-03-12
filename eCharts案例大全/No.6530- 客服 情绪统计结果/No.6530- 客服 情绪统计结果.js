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
        text: ' 客服 情绪统计结果',
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
            data: [306862, 543930, 461277, 916395, 174207, 173538, 174658, 176026, 173725, 153120, 153120]
        },
        {
            name: 'other',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            data: [3609732, 6551202, 4941038, 8945213, 1759740, 1744634, 1772186, 1785246, 1742280, 1555056, 1439605]
        },
        {
            name: 'anxiety',
            type: 'bar',
            label: labelOption,
            data: [181452, 350646, 228510, 459929, 86592, 88511, 85624, 88365, 88874, 80284, 74312]
        },
        {
            name: 'anger',
            type: 'bar',
            label: labelOption,
            data: [29301, 48643, 43364, 80470, 18872, 19213, 18930, 19058, 19899, 19261, 18136]
        },
        {
            name: 'lost',
            type: 'bar',
            label: labelOption,
            data: [11467, 24559, 16019, 33359, 5465, 5498, 5443, 5515, 5225, 5035, 4677]
        },
        
    ]
};