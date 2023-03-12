var echartLegendData = [
    {
        "name": "无旱",
        "value": "1000",
        "percentage": "24.39"
    },
    {
        "name": "轻旱",
        "value": "1000",
        "percentage": "24.39"
    },
    {
        "name": "中旱",
        "value": "1000",
        "percentage": "24.39"
    },
    {
        "name": "重旱",
        "value": "1000",
        "percentage": "24.39"
    },
    {
        "name": "特旱",
        "value": "100",
        "percentage": "2.44"
    }
];
option = {
    color: ['#4CE600', '#FFFFBD', '#ECEC1B', '#FFA77F', '#FD0100'],
    title: {
        text: 'XXX干旱指数面积统计(VCI)',
        left: 'center',
        top: 20,
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
            },
        },
    },
    legend: {
        orient: 'vertical',
        left: '65%',
        top: '35%',
        formatter: (name) => {
            let target;
            echartLegendData.forEach((item, index) => {
                if (name == item.name) {
                    target = item;
                }
            });
            return `${name}    ${target.value}Km²      ${target.percentage}%`;
        },
    },
    series: [
        {
            name: '受旱面积',
            type: 'pie',
            center: ['40%', '50%'],
            radius: ['40%', '70%'],
            right: 200,
            data: [
                {
                    name: '无旱',
                    value: '1000',
                },
                {
                    name: '轻旱',
                    value: '1000',
                },
                {
                    name: '中旱',
                    value: '1000',
                },
                {
                    name: '重旱',
                    value: '1000',
                },
                {
                    name: '特旱',
                    value: '100',
                },
            ],
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2,
            },
            label: {
                show: false,
            },
            labelLine: {
                show: false,
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
