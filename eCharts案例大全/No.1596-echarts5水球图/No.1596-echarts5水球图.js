//
option = {
    series: [
        {
            name: '合格率',
            type: 'liquidFill',
            color: ['#1082FF', 'rgba(16, 130, 255, 0.5)'],
            data: [
                0.54,
                {
                    value: 0.54,
                    direction: 'left',
                },
            ],
            radius: '60%',
            outline: {
                itemStyle: {
                    borderWidth: 4,
                    borderColor: '#1082FF',
                },
            },
            backgroundStyle: {
                color: '#fff',
            },
            itemStyle: {
                opacity: 0.95,
                shadowColor: 'rgba(0, 0, 0, 0)',
            },
            label: {
                formatter: function (param) {
                    return '{a|echarts5.1.1:} {b|' + Number(param.value) * 100 + '}{c|  %}';
                },
                textStyle: {
                    rich: {
                        a: {
                            fontSize: 28,
                            color: '#fce348',
                        },
                        b: {
                            fontSize: 36
                        },
                        c: {
                            fontSize: 14,
                        },
                    },
                },
                position: ['50%', '50%'],
                fontSize: 28,
                fontWeight: 700,
                fontFamily: 'SourceHanSansCN',
                color: '#1082FF',
            },
        },
    ],
    tooltip: {
        show: true,
    },
};
