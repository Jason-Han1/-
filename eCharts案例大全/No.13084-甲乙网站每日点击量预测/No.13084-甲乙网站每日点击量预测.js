function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    }
}

var data = [];
var now = +new Date(2018, 10, 9);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
    data.push(randomData());
}

function randomData1() {
    now1 = new Date(+now1 + oneDay1);
    value1 = value1 + Math.random() * 21 - 10;
    return {
        name: now1.toString(),
        value: [
            [now1.getFullYear(), now1.getMonth() + 1, now1.getDate()].join('/'),
            Math.round(value1)
        ]
    }
}

var data1 = [];
var now1 = +new Date(2018, 10, 9);
var oneDay1 = 24 * 3600 * 1000;
var value1 = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
    data1.push(randomData1());
}
var option = {
    backgroundColor: "#B0E0E6",
    title: {
        text: '甲乙网站每日点击量预测',
        subtext: '数据来自nice比克胡编乱造',
        x: 'center',
        align: 'right'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#FF00FF'
            }
        }
    },

    legend: {
        data: ['甲网站', '乙网站'],
        x: 'left'
    },
    dataZoom: [{
            type: 'slider', //图表下方的伸缩条
            show: true, //是否显示
            realtime: true, //拖动时，是否实时更新系列的视图
            start: 0, //伸缩条开始位置（1-100），可以随时更改
            end: 50, //伸缩条结束位置（1-100），可以随时更改
        },
        {
            type: "inside" //鼠标滚轮缩放
        }
    ],
    xAxis: {
        name: '月/日/年',
        type: 'time',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        name: '次数(/次)',
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            // dataView: {readOnly: false},
            magicType: {
                type: ['line', 'bar']
            },
            restore: {},
            saveAsImage: {}
        }
    },
    series: [{
            name: '甲网站',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data
        },
        {
            name: '乙网站',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data1
        }
    ]
};

setInterval(function() {

    for (var i = 0; i < 5; i++) {
        data.shift();
        data1.shift();
        data.push(randomData());
        data1.push(randomData1());
    }

    myChart.setOption({
        series: [{
                name: '甲网站',
                data: data
            },
            {
                name: '乙网站',
                data: data1
            }
        ]
    });
}, 1000);