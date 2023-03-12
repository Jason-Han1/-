var pieOption = {
        title: '总体情况',
        data: [
            { value: 1048, name: '路基工程', itemStyle: { color: '#61b7ce' } },
            { value: 735, name: '结构物工程', itemStyle: { color: '#7361d0' } },
            { value: 580, name: '路面工程', itemStyle: { color: '#45e0a6' } },
            { value: 484, name: '安全设施', itemStyle: { color: '#e8bd56' } },
            {
                value: 300,
                name: '原材料和产品',
                itemStyle: { color: '#ce6262' },
            },
        ],
    },
    option = {
        tooltip: {
            trigger: 'item',
        },
        legend: {
            right: 'right',
            top: 'center',
            itemWidth: 12,
            itemHeight: 12,
            textStyle: {
                color: 'rgba(255,255,255,0.65)',
                fontSize: 12,
            },
        },
        series: [
            {
                type: 'pie',
                radius: ['30%', '50%'],
                center: ['33%', '50%'],
                clockwise: false,
                labelLine: {
                    normal: {
                        length: 5,
                        length2: 5,
                        lineStyle: {
                            color: '#61b7ce',
                        },
                    },
                },
                label: {
                    color: 'rgba(255,255,255,0.65)',
                },
                data: pieOption.data ? pieOption.data : 0,
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
