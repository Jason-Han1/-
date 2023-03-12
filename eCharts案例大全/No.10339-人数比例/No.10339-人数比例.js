var res = {
        data: [28, 30, 39, 50],
        name: ['A', 'B', 'C', 'D'],
        ratio: [0, 0, 100, 90],
    },
    dataIndex = 2;
option = {
    // color: '#FF3366',
    xAxis: {
        type: 'value',
        max: function (value) {
            return value.max + 10;
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    yAxis: {
        type: 'category',
        axisTick: {
            show: false,
        },
        data: res.name,
        inverse: true,
    },
    series: {
        type: 'bar',
        data: res.data,
        barMaxWidth: 40,
        itemStyle: {
            color: function (params) {
                if (params.dataIndex === dataIndex) {
                    return '#00CD68';
                } else {
                    return '#FF3366';
                }
            },
        },
        label: {
            show: true,
            position: 'right',
            color: '#222',
            formatter: function (params) {
                return `${params.value}人，占比${res.ratio[params.dataIndex]}%`;
            },
        },
    },
};
