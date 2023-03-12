//因为业务需要 情景是 x轴type使用time，数据量在4万左右 使用dataZoom
//且点击某个按钮 折线图展示隐藏
//实现想法是 点击按钮后触发图例的选中与取消事件，但是就目前来说它本身的速度就比较卡
var dataLen = 40000; //数据量
function returnData() {
    var d = [];
    var len = 0;
    var now = new Date();
    var value;
    while (len++ < dataLen) {
        d.push([
            new Date(2014, 9, 1, 0, len * 10000),
            (Math.random() * 30).toFixed(2) - 0,
            (Math.random() * 100).toFixed(2) - 0
        ]);
    }
    return d;
}
var lineData = returnData();
var start = lineData[0][0];
var end = lineData[3][0];

option = {
    title: {
        text: '时间坐标折线图',
        subtext: 'dataZoom支持'
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            var date = new Date(params.value[0]);
            data = date.getFullYear() + '-' +
                (date.getMonth() + 1) + '-' +
                date.getDate() + ' ' +
                date.getHours() + ':' +
                date.getMinutes();
            return data + '<br/>' +
                params.value[1] + ', ' +
                params.value[2];
        }
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    dataZoom: {
        show: true,
        start: 0,
        realtime: false
    },
    legend: {
        data: ['series1']
    },
    grid: {
        y2: 80
    },
    xAxis: [{
        type: 'time',
        //splitNumber: 10
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: 'series1',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: lineData
    }]
};