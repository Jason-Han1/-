option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 11,
        },
    },
    legend: {
        data: ['销售', '运营', '融资', '投资', '转介'],
        right: 20,
        top: 'center',
        orient: 'vertical',
        itemWidth: 13,
        itemHeight: 9,
        textStyle: {
            fontSize: 11,
        },
    },
    series: [
        {
            name: '资产数量(个)',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '40%'],
            label: {
                position: 'inner',
                fontSize: 11,
                show: false,
            },
            labelLine: {
                show: false,
            },
            data: [
                {
                    value: 100,
                    name: '销售',
                    itemStyle: {
                        color: '#5C92F7',
                    },
                },
                {
                    value: 40,
                    name: '运营',
                    itemStyle: {
                        color: '#8FADF9',
                    },
                },
                {
                    value: 60,
                    name: '融资',
                    itemStyle: {
                        color: '#76D2F1',
                    },
                },
                {
                    value: 40,
                    name: '投资',
                    itemStyle: {
                        color: '#9DDDFC',
                    },
                },
                {
                    value: 60,
                    name: '转介',
                    itemStyle: {
                        color: '#A5F9DD',
                    },
                },
            ],
        },
        {
            name: '资产规模(亿)',
            type: 'pie',
            selectedMode: 'single',
            radius: ['60%', '90%'],
            label: {
                position: 'inner',
                fontSize: 11,
                show: false,
            },
            labelLine: {
                show: false,
            },
            data: [
                {
                    value: 100,
                    name: '销售',
                    itemStyle: {
                        color: '#5C92F7',
                    },
                },
                {
                    value: 40,
                    name: '运营',
                    itemStyle: {
                        color: '#8FADF9',
                    },
                },
                {
                    value: 60,
                    name: '融资',
                    itemStyle: {
                        color: '#76D2F1',
                    },
                },
                {
                    value: 40,
                    name: '投资',
                    itemStyle: {
                        color: '#9DDDFC',
                    },
                },
                {
                    value: 60,
                    name: '转介',
                    itemStyle: {
                        color: '#A5F9DD',
                    },
                },
            ],
        },
    ],
};

if (option && typeof option === 'object') {
    myChart.setOption(option, true);
}
