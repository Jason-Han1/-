option = {
    parallelAxis: [{
            dim: 0,
            name: 'Price'
        },
        {
            dim: 1,
            name: 'Net Weight'
        },
        {
            dim: 2,
            name: 'Amount',
            type: 'category',
            data: ['A', 'B']

        },
        {
            dim: 3,
            name: 't',

        },
        {
            dim: 4,
            name: 'Score',
            type: 'category',
            data: ['中', '良', '优']
        }
    ],
    series: {
        type: 'parallel',
        lineStyle: {
            width: 4
        },
        data: [
            [1, 55, 'A', 9, '良'],
            [2, 25, 'B', 11, '优'],
            [3, 56, 'B', 7, '良'],
            [4, 33, 'A', 7, '优']
        ]
    }
};