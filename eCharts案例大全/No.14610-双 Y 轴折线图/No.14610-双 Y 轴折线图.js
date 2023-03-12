var albData = [
    [
        [1510617512, 10],
        [1510622312, 15],
        [1510627112, 11],
        [1510631912, 10],
        [1510636712, 15]
    ],
    [
        [1510617512, 6],
        [1510622312, 18],
        [1510627112, 10],
        [1510631912, 13],
        [1510636712, 5]
    ]
]

var albValueData = [
    [[10, 15, 11, 10, 15], [6, 18, 10, 13, 5]],
    [[6, 18, 10, 13, 5], [10, 15, 11, 10, 15]]
]

var albTimeData = [
    [1510617512, 1510622312, 1510627112, 1510631912, 1510636712],
    [1510617512, 1510622312, 1510627112, 1510631912, 1510636712]
]

option = {
    title: {
        text: '双 Y 轴折线图'
    },
    grid: [{
        left: 50,
        right: 50,
        height: '45%'
    }, {
        left: 50,
        right: 50,
        top: '50%',
        height: '45%'
    }],
    xAxis: [{
        type: "category",
        data: albTimeData[0]
    }, {
        gridIndex: 1,
        type: "category",
        position: 'top',
        data: albTimeData[1]
    }],
    yAxis: [{
        type: "value",
        name: "plus"
    }, {
        gridIndex: 1,
        type: "value",
        inverse: true
    }],
    series: [
        {
            name: "b.mixj93.com",
            showSymbol: false,
            type: "line",
            data: albValueData[0][0]
        },
        {
            name: "b.mixj93.com",
            showSymbol: false,
            type: "line",
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: albValueData[1][0]
        },
        {
            name: "c.mixj93.com",
            showSymbol: false,
            type: "line",
            data: albValueData[0][1]
        },
        {
            name: "c.mixj93.com",
            showSymbol: false,
            type: "line",
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: albValueData[1][1]
        }
    ]
};
