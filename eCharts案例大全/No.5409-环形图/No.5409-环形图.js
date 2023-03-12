option = {
    backgroundColor: '#000',
    legend: {
        orient: 'vertical',
        show: true,
        right: '5%',
        y: 'center',
        itemWidth: 3,
        itemHeight: 30,
        itemGap: 20,
        textStyle: {
            color: '#c0c4cc',
            fontSize: 14,
            lineHeight: 20,
            rich: {
                percent: {
                    color: '#fff',
                    fontSize: 16,
                },
            },
        },
        formatter: (name) => {
            switch (name) {
                case '二级建造师':
                    return '二级建造师\r\n{percent|30%} ' + ' ' + 30;
                case '三类人员B':
                    return '三类人员B\r\n{percent|22%} ' + ' ' + 22;
                case '中级及以上职称人员':
                    return '中级及以上职称人员\r\n{percent|22%} ' + ' ' + 22;
                case '技术工人':
                    return '技术工人\r\n{percent|16%} ' + ' ' + 16;
                case '其他':
                    return '其他\r\n{percent|8%} ' + ' ' + 8;
                default:
                    break;
            }
        },
    },
    tooltip: {
        show: true,
    },
    series: [{
            type: 'pie',
            radius: ['60%', '70%'],
            center: ['40%', '50%'],
            hoverAnimation: true,
            z: 10,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    borderColor: '#00000085',
                },
            },
            label: {
                position: 'center',
                formatter: () => {
                    return '{total|1,342} \r\n总数(个)';
                },
                rich: {
                    total: {
                        fontSize: 32,
                        color: '#fff',
                    },
                },
                color: '#dcdfe6',
                fontSize: 16,
                lineHeight: 50,
            },
            data: [{
                    value: 32,
                    name: '二级建造师',
                    itemStyle: {
                        color: '#D87A80',
                    },
                },
                {
                    value: 22,
                    name: '三类人员B',
                    itemStyle: {
                        color: '#2EC7C9',
                    },
                },
                {
                    value: 22,
                    name: '中级及以上职称人员',
                    itemStyle: {
                        color: '#B6A2DE',
                    },
                },
                {
                    value: 16,
                    name: '技术工人',
                    itemStyle: {
                        color: '#5AB1EF',
                    },
                },
                {
                    value: 8,
                    name: '其他',
                    itemStyle: {
                        color: '#FFB980',
                    },
                },
            ],
            labelLine: {
                show: false,
            },
        },
        {
            type: 'pie',
            radius: ['65%', '54%'],
            center: ['40%', '50%'],
            itemStyle: {
                normal: {
                    borderWidth: 10,
                    borderColor: 'rgba(0,0,0,1)',
                },
            },
            hoverAnimation: false,
            label: {
                show: false,
            },
            data: [{
                    value: 32,
                    name: '二级建造师',
                    itemStyle: {
                        color: '#D87A80',
                        opacity: 0.1,
                    },
                },
                {
                    value: 22,
                    name: '三类人员B',
                    itemStyle: {
                        color: '#2EC7C9',
                        opacity: 0.1,
                    },
                },
                {
                    value: 22,
                    name: '中级及以上职称人员',
                    itemStyle: {
                        color: '#B6A2DE',
                        opacity: 0.1,
                    },
                },
                {
                    value: 16,
                    name: '技术工人',
                    itemStyle: {
                        color: '#5AB1EF',
                        opacity: 0.1,
                    },
                },
                {
                    value: 8,
                    name: '其他',
                    itemStyle: {
                        color: '#FFB980',
                        opacity: 0.1,
                    },
                },
            ],
            labelLine: {
                show: false,
            },
        },
    ],
};