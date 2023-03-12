let colorList = ['#58D5FF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF'];
option = {
    backgroundColor: '#0f375f',
    tooltip: {
        trigger: 'item',
        show: true,
        textStyle: {
            fontSize: 14,
            color: '#fff',
        },
        backgroundColor: 'rgba(50,50,50,0.7)',
        borderWidth: 0,
        formatter: (e) => {
            return `${e.marker}${e.name}<br/>数量：${e.value}<br/>占比：${e.percent}%`;
        },
    },
    legend: {
        orient: 'vertical',
        type: 'plain',
        pageTextStyle: {
            color: '#fff',
        },
        icon: 'circle',
        left: '700px',
        top: '200px',
        textStyle: {
            color: '#fff',
            fontSize: 14,
        },
    },
    series: [
        {
            type: 'pie',
            center: ['30%', '45%'],
            radius: ['50%', '75%'],
            labelLine: {
                show: false,
            },
            label: {
                show: false,
            },
            hoverOffset: 15,
            itemStyle: {
                color: (params) => {
                    return colorList[params.dataIndex];
                },
            },
            data: [
                {
                    name: 'first',
                    value: 1,
                },
                {
                    name: 'second',
                    value: 2,
                },
                {
                    name: 'third',
                    value: 3,
                },
                {
                    name: 'fou1rth',
                    value: 4,
                },
                {
                    name: 'fif2th',
                    value: 5,
                },
                {
                    name: 'sixth',
                    value: 6,
                },
            ],
        },
    ],
};
