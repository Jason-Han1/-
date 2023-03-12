option = {
    xAxis: [{
        type: 'value',
        show: false

    }],
    yAxis: [{
        type: 'category',
        show: false,

    }],
    series: [{
        name: '现实 ',
        type: 'bar',
        barWidth: 16,
        silent: true,
        itemStyle: {
            normal: {
                color: '#1d1d1d',
                barBorderRadius: 30,
            }
        },
        barGap: '-100%',
        barCategoryGap: '50%',
        data:[100],
    }, {
        name: ' 理想',
        type: 'bar',
        barWidth: 16,
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{c}%'
            }
        },
        data: [{
            value: 50,
            itemStyle: {
                normal: {
                    color: 'red',
                    barBorderRadius: 30,
                }
            }
        }]
    }]
};