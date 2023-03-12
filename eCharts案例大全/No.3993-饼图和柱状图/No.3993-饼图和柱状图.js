option = {
    tooltip: {
        formatter: function(p) {
            return `${p.seriesName}<br/>${p.marker} ${p.name}: ${p.value}%`;
        },
    },
    title: [{
            text: '2021年1月品类渠道分布',
            top: '8%',
            left: '25%',
            textAlign: 'center',
            textStyle: {
                color: '#fff',
            },
        },
        {
            text: '2021年1月品类渠道销售额同比增速',
            top: '8%',
            left: '75%',
            textAlign: 'center',
            textStyle: {
                color: '#fff',
            },
        },
    ],
    grid: [{
        top: '20%',
        bottom: '0',
        left: '50%',
        right: '8%',
        containLabel: true,
    }, ],
    xAxis: [{
        type: 'value',
        show: false,
    }, ],
    yAxis: [{
        type: 'category',
        data: ['天猫', '天猫国际', '天猫超市'],
        axisLine: {
            lineStyle: {
                color: '#fff',
            },
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
            },
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    }, ],
    series: [{
            name: '2021年1月品类渠道销售额同比增速',
            type: 'bar',
            stack: 'chart',
            barWidth: 30,
            label: {
                show: true,
                color: '#fff',
                position: 'right',
            },
            data: [33.2, 36.4, 110.1],
        },
        {
            name: '2021年1月品类渠道分布',
            type: 'pie',
            radius: ['40%', '60%'],
            center: ['25%', '60%'],
            avoidLabelOverlap: true,
            labelLine: {
                show: true,
            },
            itemStyle: {
                normal: {
                    label: {
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                            fontWeight: 'bolder'
                        },
                        formatter: function(p) {
                            return `${p.name} ${p.value}%`;
                        }
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#fff'
                        },
                    }
                }
            },
            emphasis: {
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: '16',
                    // fontWeight: 'bold'
                },
            },
            data: [{
                    value: 97.2,
                    name: '天猫',
                },
                {
                    value: 2.0,
                    name: '天猫国际',
                },
                {
                    value: 0.8,
                    name: '天猫超市',
                },
            ],
        },
    ],
};