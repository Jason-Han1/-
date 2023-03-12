option = {
    backgroundColor: '#000',
    tooltip: {
        show: true,
        trigger: 'item',
        confine: true,
    },
    legend: {
        data: [
            {
                name: '已完成验收总数',
                itemStyle: {
                    color: '#43D5A0',
                },
            },
            {
                name: '总数',
                itemStyle: {
                    color: 'rgba(255,255,255,.65)',
                },
            },
        ],
        top: 'center',
        right: '10%',
        itemGap: 30,
        orient: 'lineHeight',
        itemWidth: 8,
        itemHeight: 8,
        formatter: function (name) {
            var arr = ['{a|' + name + '}    |    ', '{b|1232}'];
            return arr.join('');
        },
        textStyle: {
            color: '#eee',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
            rich: {
                a: {
                    fontSize: 14,
                    color: 'rgba(255,255,255,.8)',
                },
                b: {
                    fontSize: 14,
                    color: '#fff',
                },
            },
        },
    },
    series: [
        {
            type: 'pie',
            radius: ['50%', '70%'],
            center: ['50%', '40%'],
            labelLine: {
                normal: {
                    show: false,
                },
            },
            emphasis: {
                label: {
                    show: false,
                    fontSize: 14,
                },
            },
            data: [
                {
                    name: '总数',
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: '#61b7ce',
                        },
                    },
                    label: {
                        show: false,
                    },
                },
                {
                    name: '已完成验收总数',
                    completed: 0,
                    value: 40,
                    itemStyle: {
                        normal: {
                            color: '#4c6370',
                        },
                    },
                    label: {
                        show: true,
                        position: 'center',
                        color: '#43D5A0',
                        fontSize: 21,
                        formatter: function (data) {
                            return data.value + '%';
                        },
                    },
                },
            ],
        },
    ],
};
