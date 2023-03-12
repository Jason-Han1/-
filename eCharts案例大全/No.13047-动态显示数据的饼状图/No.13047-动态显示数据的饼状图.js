let data1 = [{
        value: 100,
        name: '高价值'
    },
    {
        value: 200,
        name: '中价值'
    },
    {
        value: 300,
        name: '低价值'
    }
]
let data2 = [{
        value: 10,
        name: '高价值1',
        stack: '高价值',
        type: '1'
    },
    {
        value: 20,
        name: '高价值2',
        stack: '高价值',
        type: '1'
    },
    {
        value: 40,
        name: '高价值3',
        stack: '高价值',
        type: '1'
    },
    {
        value: 30,
        name: '高价值4',
        stack: '高价值',
        type: '1'
    },
    {
        value: 40,
        name: '中价值1',
        stack: '中价值',
        type: '2'
    },
    {
        value: 60,
        name: '中价值2',
        stack: '中价值',
        type: '2'
    },
    {
        value: 100,
        name: '中价值3',
        stack: '中价值',
        type: '2'
    },
    {
        value: 90,
        name: '低价值1',
        stack: '低价值',
        type: '3'
    },
    {
        value: 120,
        name: '低价值2',
        stack: '低价值',
        type: '3'
    },
    {
        value: 90,
        name: '低价值3',
        stack: '低价值',
        type: '3'
    }
]
option = {
    color: ['#ff6e72', '#ffc751', '#4162ff', ],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        show: true,
        x: 'center',
        y: 'bottom',
        data: ['高价值', '中价值', '低价值'],
        icon: 'circle',
        textStyle: {
            width: '2'
        }
    },
    grid: {
        top: 10,
        left: 0,
        bottom: 0,
        right: 0,
        containLabel: true
    },
    series: [{
            name: '价值类型',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '40%'],
            minAngle: 5,
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: data1
        },
        {
            name: '分开占比',
            type: 'pie',
            radius: ['55%', '60%'],
            minAngle: 5,
            labelLine: {
                length: 0,
                length2: 5
            },
            label: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = ['#ff979f', '#ffbbc6', '#ffe1e7', '#fff0f3', '#ffefcc', '#ffe3a6', '#ffd77f', '#6680ff', '#8c9fff', '#b2bfff'];
                        return colorList[params.dataIndex]
                    },
                }
            },
            data: data2
        }
    ]
}
//外围的动态数据显示
var timeTicket = null;
var count = 0;
timeTicket && clearInterval(timeTicket);
timeTicket = setInterval(function() {
    var dataLength = option.series[1].data.length;
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 1
    });
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 1,
        dataIndex: count % dataLength
    });
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 1,
        dataIndex: count % dataLength,
    });
    count++;
}, 1500);
myChart.on('mouseover', function(params) {
    clearInterval(timeTicket);
    var allDataIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (params.seriesIndex == 0) {
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 1,
            dataIndex: allDataIndex
        });
        if (params.dataIndex == 0) {
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 1,
                dataIndex: allDataIndex.splice(0, 4)
            });
        } else {
            var arr1 = allDataIndex.splice(params.dataIndex * 3 + 1, 3);
            myChart.dispatchAction({
                type: 'highlight',
                seriesIndex: 1,
                dataIndex: arr1
            });
        }
    }
});
myChart.on('mouseout', function(params) {
    timeTicket && clearInterval(timeTicket);
    myChart.dispatchAction({
        type: 'downplay',
    });
    timeTicket = setInterval(function() {
        var dataLength = option.series[1].data.length;
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 1
        });
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 1,
            dataIndex: count % dataLength
        });
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 1,
            dataIndex: count % dataLength,
        });
        count++;
    }, 1500);
});