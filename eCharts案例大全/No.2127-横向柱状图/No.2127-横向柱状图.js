option = {
    backgroundColor: '000',
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '0%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        formatter: function (params) {
            return (
                params[0].name +
                '<br/>' +
                "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                params[0].seriesName +
                ' : ' +
                Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() +
                ' 单位<br/>'
            );
        },
    },
    xAxis: {
        show: false,
        type: 'value',
    },
    yAxis: [
        {
            type: 'category',
            inverse: true,

            axisLabel: {
                align: 'left',
                show: true,
                padding: [0, 0, 0, -140],
                textStyle: {
                    color: '#fff',
                    fontSize: '30',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            data: ['火车站', '党政机关', '中小学校', '金融单位', '文博单位', '医院', '加油站', '物流单位'],
        },
        {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            offset: 2,
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '30',
                },
                formatter: function (value) {
                    if (value >= 10000) {
                        return (value / 10000).toLocaleString() + '个';
                    } else {
                        return value.toLocaleString();
                    }
                },
            },
            data: [201, 160, 140, 175, 201, 312, 168, 170],
        },
    ],
    series: [
        {
            name: '单位',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: 'rgba(12,137,202,1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(107,255,242,1)',
                        },
                    ]),
                },
            },
            barWidth: 12,
            data: [201, 160, 140, 175, 201, 312, 168, 170],
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 12,
            barGap: '-100%',
            data: [400, 400, 400, 400, 400, 400, 400, 400],
            itemStyle: {
                normal: {
                    color: 'rgba(27,52,93,1)',
                    barBorderRadius: 0,
                },
            },
        },
    ],
};
