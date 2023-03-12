
app.config = {
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
    normal: {
        
        show: true,
        position: app.config.position,
        distance: app.config.distance,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        rotate: app.config.rotate,
        formatter: '{c} ',
        fontSize: 10,
        rich: {
            name: {
                textBorderColor: '#fff'
            }
        }
    }
};

option = {

    color: ['#003366', '#66CC99', '#4cabce', '#e5323e'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['生存型困难', '生活型困难', '发展型困难', '非贫困']
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
    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['国家奖学金', '国家助学金', '博雅奖学金', '树人奖学金', '其他奖助学金']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '生存型困难',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            data: [113, 873, 91, 124, 276]
        },
        {
            name: '生活型困难',
            type: 'bar',
            label: labelOption,
            data: [282, 1992, 303, 318, 557]
        },
        {
            name: '发展型困难',
            type: 'bar',
            label: labelOption,
            data: [194, 1135, 257, 263, 402]
        },
        {
            name: '非贫困',
            type: 'bar',
            label: labelOption,
            data: [23, 43, 101, 109, 427]
        }
    ]
};