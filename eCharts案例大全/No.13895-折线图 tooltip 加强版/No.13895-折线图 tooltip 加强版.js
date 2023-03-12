var data = {
    title: '折线图堆叠MOCK',
    xAxisData: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    series: [{
        "name": "新增事件",
        "type": "line",
        "stack": "总量",
        "data": [120, 132, 101, 134, 90, 230, 210],
        smooth: false
    }],
    info: [
        [9999, 999, 99, 9],
        [8888, 888, 88, 8],
        [7777, 777, 77, 7],
        [6666, 666, 66, 6],
        [5555, 555, 55, 5],
        [4444, 444, 44, 4],
        [3333, 333, 33, 3]
    ]
}

option = {
    title: {
        text: data.title
    },
    tooltip: {
        show: true,
        formatter: function(params) {
            var info = data.info
            var xAxisData = data.xAxisData
            var id = params.dataIndex;

            return xAxisData[id] +
                '<br>最低：' + info[id][0] +
                '<br>最高：' + info[id][1] +
                '<br>平均：' + info[id][2];
        }
    },
    xAxis: {
        type: 'category',
        data: data.xAxisData
    },
    yAxis: {
        type: 'value'
    },
    series: data.series
};