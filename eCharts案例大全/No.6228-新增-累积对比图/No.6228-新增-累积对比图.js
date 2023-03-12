    var bgColor = '#fff';
    var fontColor = '#666';
    var chartData = [{
            name: '一星级',
            xz: 100,
            lj: 150
        },
        {
            name: '二星级',
            xz: 60,
            lj: 120
        },
        {
            name: '三星级',
            xz: 70,
            lj: 100
        },
    ];
    var xData = chartData.map(v => v.name);
    var xzData = chartData.map(v => v.xz);
    var ljData = chartData.map(v => v.lj);

    var lineOption = {
        lineStyle: {
            color: 'rgba(151,151,151,0.5)',
            type: 'dashed',
        },
    };

    var option = {
        backgroundColor: bgColor,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        grid: {
            top: '14%',
            right: '3%',
            left: '10%',
            bottom: '14%',
        },
        xAxis: [{
            type: 'category',
            data: xData,
            axisLine: lineOption,
            axisTick: {
                show: false,
            },
            axisLabel: {
                margin: 10,
                color: fontColor,
                textStyle: {
                    fontSize: 12,
                },
            },
        }, ],
        yAxis: [{
                axisLabel: {
                    formatter: '{value}',
                    color: fontColor,
                },
                axisTick: {
                    show: false,
                },
                axisLine: lineOption,
                splitLine: lineOption,
            },
            {
                axisLine: lineOption,
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: false,
                },
            },
        ],
        series: [{
            name: '累积',
            type: 'bar',
            data: ljData,
            barWidth: '20px',
            silent: true,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#808080',
                    }, {
                        offset: 1,
                        color: '#EEEEEE',
                    }], false),
                },
            },
        }, {
            name: '新增',
            type: 'bar',
            data: xzData,
            barWidth: '20px',
            barGap: '-100%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00BD89',
                    }, {
                        offset: 1,
                        color: '#C9F9E1',
                    }], false),
                },
            },
        }, ],
    };