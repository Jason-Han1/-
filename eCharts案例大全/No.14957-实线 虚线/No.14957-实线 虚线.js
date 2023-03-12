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
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 100; i++) {
    data.push(randomData());
}

var dataHalfLength = data.length / 2
var data1 = data.slice(0, dataHalfLength)
var data2 = data.slice(dataHalfLength)

option = {
    title: {
        text: '动态数据 + 时间坐标轴'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [
        {
            name: '模拟数据',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data1,
            lineStyle: {
                normal: {
                    type: 'solid',
                }
            }
        },
        {
            name: '模拟数据2',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: data2,
            lineStyle: {
                normal: {
                    type: 'dashed',
                }
            }
        }
    ]
};

// setInterval(function () {

//     for (var i = 0; i < 5; i++) {
//         data.shift();
//         data.push(randomData());
//     }

//     myChart.setOption({
//         series: [{
//             data: data
//         }]
//     });
// }, 1000);