/**
 * 生成标记坐标点集合
 * @params data 数据
 * @params xdata x轴数据
 **/
var createdPointList = function(data, xdata) {
    data = data || []
    xdata = xdata || []
    var res = []
    data.forEach((itm, idx) => {
        // 未提交的坐标提取
        if (itm === 0) {
            res.push({
                coord: [xdata[idx], itm]
            })
        }
    })
    return res
}

var img = 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAQ5JREFUKBWdkjFLA0EQhWejYEgEW1u7FCki2IliqVzlLzG/TMvY5YhY5YoUFqm0vJRKjJyKGd+X3MoR0ngPhp15+97O7LJmgrsnikwxV4wVl/CAvOTYQ5PEDUzbcCOS2IaEEznF828f3r56/lz4UOUSrsQSjr38y9OSy4KSuVrv373ZbPFjh4zRa9mo27Qz8qfCHiYfdk7e3rHZ9cFK895QPYXsNdcrOUIMVRP8cetPM6UjDzFQ+KYQcURliiDuqhFCuFfSVwTGQxDFcd0w9fEwai3UHhXjWC1PXj4tfVzYRWwfR44vCn/atvRob6XJdlV3ICfFeiWv3IlyFM1oZASd2h8AY70vR9/S/K9P/gv1TGyesswxhgAAAABJRU5ErkJggg=='
let data = [820, 932, 0, 0, 0, 1000, 1320]

//x轴数据
var xdata = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// 标记坐标集合
var markPointList = createdPointList(data, xdata)

option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: data,
        label: {
            normal: {
                show: true,
                position: 'top',
                distance: 10,
                // formatter: function(params) {
                //     console.log(params)
                //     return params.data == 0 ? '未提交' : params.data
                // }
            }
        },
        markPoint: {
            symbol: img,
            symbolSize: 18,
            data: markPointList,
        },
        type: 'line'
    }]
};