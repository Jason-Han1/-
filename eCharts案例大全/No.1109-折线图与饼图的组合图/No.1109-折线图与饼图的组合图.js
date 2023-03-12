var minPieRadius = 20;
var base = 10000;
// 根据y轴数值得到饼图半径大小
function getPieRadius(value) {
    var pieRadius = Math.floor(value / (1.1 * base) * 40) > minPieRadius ? Math.floor(value / base * 40) : minPieRadius;
    return pieRadius;
}
// 得到虚拟数据
function getVirtulData() {
    var date = +echarts.number.parseDate('2022-01-01');
    var end = +echarts.number.parseDate('2022-01-10');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor((Math.random() + 0.1) * base)
        ]);
    }
    return data;
}
// 根据虚拟数据得到饼图数据
function getPieSeries(lineData, chart) {
    return echarts.util.map(lineData, function (item, index) {
        var center = chart.convertToPixel({seriesIndex: 0}, item);
        return {
            id: index + 'pie',
            type: 'pie',
            center: center,
            label: {
                normal: {
                    formatter: '{c}',
                    position: 'inside'
                }
            },
            zlevel: 1,
            radius: getPieRadius(item[1]),
            data: [
                {name: '工作', value: Math.round(Math.random() * 24)},
                {name: '娱乐', value: Math.round(Math.random() * 24)},
                {name: '睡觉', value: Math.round(Math.random() * 24)}
            ]
        };
    });
}

var lineData = getVirtulData();

option = {
    tooltip : {},
    legend: {
        data: ['工作', '娱乐', '睡觉'],
        bottom: 20
    },
    grid: {
        left: '10%',
        right: '10%',
        top:'10%',
        bottom:'20%',
    },
    xAxis: {
        type: 'category',
        name: '日',
        nameGap: 5,
        axisLabel: {
            color: '#000',
            textStyle: {
                fontSize: '13'
            },
        },
        axisTick: {
            show: true,
        },
        axisLine: {
            lineStyle: {
                color: '#000',
            }
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        name: '步数',
        nameGap: 10,
        // scale: true,
        nameTextStyle: {
            fontSize: 13,
        },
        axisLabel: {
            textStyle: {
                fontSize: '13'
            },
        },
        axisTick: {
            show: true,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#000',
            }
        },
        splitLine: {
            show: false,
        }
    },
    series: [{
        type: 'line',
        symbolSize: 0,
        lineStyle: {
            color: '#000a',
            width: 1,
        },
        data: lineData
    }]
};

setTimeout(function () {
  myChart.setOption({
    series: getPieSeries(lineData, myChart)
  });
}, 10);