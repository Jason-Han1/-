option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: 'item',
    },
    title: {
        text: '问题类别',
        x: 'center',
        y: 'center',
        textStyle: {
            color: '#f6f7fb',
            fontSize: 14
        }
    },
    legend: {
        orient: 'vertical',
        right: '50',
        y: 'center',
        itemWidth: 9,
        itemHeight: 9,
        itemGap: 12,
        textStyle: {
            color: 'rgba(255,255,255,.65)',
            fontSize: 12,
            padding: [0, 0, 0, 10],
        },
    },
    series: [
        {
            name: '问题类比',
            type: 'pie',
            radius: ['40%', '60%'],
            data: [
                { value: 1048, name: '基础筑土', itemStyle: { color: '#00ffc1' } },
                { value: 735, name: '二次结构', itemStyle: { color: '#ff5050' } },
                { value: 580, name: '土体施工', itemStyle: { color: '#ff8f00' } },
                { value: 484, name: '装饰装修', itemStyle: { color: '#fedf02' } },
                { value: 300, name: '地基处理', itemStyle: { color: '#008bff' } },
            ],
            label: {
                show: true,
                position: 'outside',
                formatter: [
                    '{a| {b}: }'],
                rich: {
                    a: {
                        color: 'rgba(255,255,255,.8)',
                        fontSize: 14
                    },
                    b: {
                        color: 'red'
                    }
                },
            },
            labelLine: {
                normal: {
                    show: false
                },
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
};
