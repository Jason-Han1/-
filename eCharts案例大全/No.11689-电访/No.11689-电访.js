option = {
    title: {
        text: '电访',
        left: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 25,
            align: 'center'
        }
    },
    grid: {
        left: '-28%',
        right: '0',
        bottom: '0',
        top: '15%',
        containLabel: true
    },
    xAxis: [{
            show: false,
        },
        {
            show: false,
        }
    ],
    yAxis: {
        type: 'category',
        inverse: true,
        show: false
    },
    series: [{
            show: true,
            type: 'bar',
            barGap: '-100%',
            barWidth: '50%',
            z: 2,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = ['#1993d6'].length;
                        return ['#1993d6'][params.dataIndex % num]
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}',
                    color: '#fff',
                    fontSize: 20

                }
            },
            data: [120, 98, 40, 40]
        },
        {
            show: true,
            type: 'bar',
            xAxisIndex: 1,
            barGap: '-100%',
            barWidth: '40%',
            itemStyle: {
                normal: {
                    barBorderRadius: 200,
                    color: 'transparent'
                }
            },
            label: {
                normal: {
                    show: true,
                    position: ['0', '-20'],
                    textStyle: {
                        fontSize: 20,
                        color: '#000'
                    },
                    formatter: function(data) {
                        return ['应有活动量', '已接触', '有效电访', '已成交'][data.dataIndex];
                    }
                }
            },
            data: [120, 98, 40, 40]
        }
    ]
}