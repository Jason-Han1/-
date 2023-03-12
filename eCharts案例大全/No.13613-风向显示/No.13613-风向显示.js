var symbolRotateNum = [90,45,50,12,10,0,150];// 旋转的度数
var valueNum = [820, 932, 901, 934, 1290, 1330, 1320];// 数值
var data = echarts.util.map(valueNum, function (item, index) {
    return {
        value: valueNum[index],
        symbolRotate:symbolRotateNum[index]
    };
});
option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data:data,
        type: 'line',
        symbol:'triangle',
        symbolSize:'20'
    }]
};
