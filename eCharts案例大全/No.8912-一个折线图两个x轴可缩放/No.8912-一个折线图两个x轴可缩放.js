// 数据 数据格式最后只要能分解成两个X轴集合和一个数据集合就可以 s
let data = [{
        label: [1, -98],
        value: 1
    },
    {
        label: [2, -97],
        value: 9
    },
    {
        label: [3, -96],
        value: 12
    },
    {
        label: [4, -95],
        value: 7
    },
    {
        label: [5, -94],
        value: 5
    },
    {
        label: [6, -93],
        value: 13
    },
    {
        label: [7, -92],
        value: 6
    },
    {
        label: [8, -91],
        value: 1
    },
    {
        label: [9, -90],
        value: 5
    },
    {
        label: [10, 89],
        value: 3
    }
]
// 起始环集合
let xAxisData1 = []
// 截止环集合
let xAxisData2 = []
// 数据集合
let series = []
// 对数据进行格式化
data.forEach(item => {
    xAxisData1.push(item.label[0])
    xAxisData2.push(item.label[1])
    series.push(item.value)
})
option = {
    title: {
        text: '测试',
        x: 'center'
    },
    // 此处设置鼠标悬浮的显示文字可根据实际情况进行修改
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            return params[0].name + '<br/>' +
                params[0].seriesName + ' : ' + params[0].value;
        },
        axisPointer: {
            animation: false
        }
    },
    legend: {
        data: ['偏移量'],
        x: 'left'
    },
    // 设置两个缩放，第二个type设为inside 进行隐藏关联
    dataZoom: [{
            show: true,
            realtime: true,
            start: 0,
            end: 100,
            xAxisIndex: [0, 1]
        },
        {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100,
            xAxisIndex: [0, 1]
        }
    ],
    // 设置两个折线图的位置 第二个靠下 根据实际情况可修改显示位置
    grid: [{
        left: 100,
        right: 50,
        height: '70%'
    }, {
        left: 100,
        right: 50,
        height: '78%'
    }],
    // 设置两个X轴
    xAxis: [{
            type: 'category',
            name: '截止环',
            nameLocation: 'start',
            boundaryGap: false,
            data: xAxisData2
        },
        {
            gridIndex: 1,
            type: 'category',
            name: '起始环',
            nameLocation: 'start',
            boundaryGap: false,
            data: xAxisData1,
            splitLine: false
        }
    ],
    // 设置两个Y轴，并对第二个进行隐藏
    yAxis: [{
            name: '偏移量',
            type: 'value',
        },
        {
            gridIndex: 1,
            name: '',
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            show: false
        }
    ],
    // 设置两个折线图 不能删除任何一个， 隐藏第二个折线图
    series: [{
            name: '偏移量',
            type: 'line',
            hoverAnimation: false,
            data: series
        },
        {
            name: '',
            type: 'line',
            show: false,
            data: series
        }
    ]
};