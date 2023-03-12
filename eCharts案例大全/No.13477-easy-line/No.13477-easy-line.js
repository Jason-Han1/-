// 数据与配置分离
var data = [{
    "name": "2018-05-22",
    "value": 1
}, {
    "name": "2018-05-29",
    "value": 5
}, {
    "name": "2018-06-04",
    "value": 1
}, {
    "name": "2018-06-11",
    "value": 1
}, {
    "name": "2018-06-29",
    "value": 1
}];

var series_data = [],
    xAxis_data = [];

data.forEach(function(e) {
    series_data.push(e.value);
    xAxis_data.push(e.name);
});

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false
        }
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    axisPointer: {
        link: {
            xAxisIndex: 'all'
        }
    },
    dataZoom: [{
            show: true,
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0]
        }, // dataZoom
        {
            type: 'inside',
            realtime: true,
            start: 30,
            end: 70,
            xAxisIndex: [0]
        } // 鼠标滚轮缩放
    ],
    xAxis: {
        name: '时间',
        data: xAxis_data
    },
    yAxis: {
        name: '总量',
    },
    series: [{
        type: 'line',
        data: series_data
    }]
};