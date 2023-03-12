// 大道至简 ---折线--面积图
// 将数据单独提出，前端直接传数据即可

// 复杂样式可参考文档自定义


var Xdata = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
var Sdata = [820, 932, 901, 934, 1290, 1330, 1320]
var Sdata2 = [111, 22, 589, 367, 999, 987, 356]

option = {
    tooltip:{
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: Xdata
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: Sdata,
        type: 'line',
        areaStyle: {}
    },
    {
        data: Sdata2,
        type: 'line',
        areaStyle: {}
    }]
};
