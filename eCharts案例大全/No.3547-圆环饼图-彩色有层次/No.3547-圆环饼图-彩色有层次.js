option = {
    color: ['#1890FF', '#12DDA1', '#F78048', '#FFB026', '#FD4D63', 'rgba(255,255,255,.5)'],
    tooltip: {
        trigger: 'item',
        padding: [10, 10, 10, 10],
        formatter: '{b} :<br/> {d}%',
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: ['36%', '66%'],
            center: ['50%', '50%'],
            label: {
                fontSize: 13,
                color: '#333',
                formatter: function (param) {
                    return param.name + '{per' + param.dataIndex + '|' + param.percent.toFixed(0) + '%}';
                },
                // 自定义富文本样式
                rich: {
                    per0: {
                        padding: [0, 0, 0, 5],
                        fontSize: 13,
                        fontWeight: 'bold',
                        color: '#1890FF',
                    },
                    per1: {
                        padding: [0, 0, 0,5],
                        fontSize: 13,
                        fontWeight: 'bold',
                        color: '#12DDA1',
                    },
                    per2: {
                        padding: [0, 0, 0,5],
                        fontSize: 13,
                        fontWeight: 'bold',
                        color: '#F78048',
                    },
                    per3: {
                        padding: [0, 0, 0, 5],
                        fontSize: 13,
                        fontWeight: 'bold',
                        color: '#FFB026',
                    },
                    per4: {
                        padding: [0, 0, 0, 5],
                        fontSize: 13,
                        fontWeight: 'bold',
                        color: '#FD4D63',
                    },
                },
            },
            labelLine: {
                show: true,
                // length: 6,
                // length2: 15
            },
            data: [
                {
                    name: '博士研究生',
                    value: '40',
                },
                {
                    name: '硕士研究生',
                    value: '25',
                },
                {
                    name: '大学',
                    value: '18',
                },
                {
                    name: '专科',
                    value: '12',
                },
                {
                    name: '专科以下',
                    value: '5',
                },
            ],
        },
        {
            type: 'pie',
            radius: ['36%', '43%'],
            center: ['50%', '50%'],
            silent: true,
            data: [
                {
                    name: '',
                    value: 1,
                },
            ],
        },
    ],
};
