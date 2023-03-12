option = {
    legend: {
        bottom: 10,
        show: true,
        itemWidth: 10,
        itemHeight: 10,
        data: [
            {
                name: '婚姻状况',
                icon: 'circle',
            },
            {
                name: '性别',
                icon: 'roundRect',
            },
            {
                name: '是否租房',
                icon: 'diamond',
            },
            {
                name: '汽车原产地',
                icon: 'rect',
            },
            {
                name: '汽车类型',
                icon: 'triangle',
            },
        ],
    },
    xAxis: {
        show: false,
        min: (value) => -5,
        max: (value) => 5,
    },
    yAxis: {
        show: false,
        min: (value) => -5,
        max: (value) => 5,
    },
    tooltip: {
        formatter: '{b}',
    },
    label: {
        show: true,
        formatter: '{b}',
        position: 'outside',
    },
    series: [
        {
            name: '婚姻状况',
            type: 'scatter',
            data: [
                {
                    value: [0, 5],
                    name: '已婚',
                    symbol: 'circle',
                },
                {
                    value: [-4, 3],
                    name: '未婚',
                    symbol: 'circle',
                },
            ],
        },
        {
            name: '性别',
            type: 'scatter',
            data: [
                {
                    value: [1, 1],
                    name: '男',
                    symbol: 'roundRect',
                },
                {
                    value: [-1, -2],
                    name: '女',
                    symbol: 'roundRect',
                },
            ],
        },
        {
            name: '是否租房',
            type: 'scatter',
            data: [
                {
                    value: [2, -4],
                    name: '是',
                    symbol: 'diamond',
                },
                {
                    value: [-2, -2.5],
                    name: '否',
                    symbol: 'diamond',
                },
            ],
        },
        {
            name: '汽车原产地',
            type: 'scatter',
            data: [
                {
                    value: [2, 3],
                    name: '中国',
                    symbol: 'rect',
                },
                {
                    value: [-4, -4],
                    name: '德国',
                    symbol: 'rect',
                },
            ],
        },
        {
            name: '汽车类型',
            type: 'scatter',
            data: [
                {
                    value: [3, 2],
                    name: '轿车',
                    symbol: 'triangle',
                },
                {
                    value: [-2.5, 2],
                    name: 'SUV',
                    symbol: 'triangle',
                },
            ],
        },
    ],
};
