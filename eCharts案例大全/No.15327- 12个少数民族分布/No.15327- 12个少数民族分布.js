var hours = [' ', '白', '独龙', '哈尼', '景颇', '拉祜', '傈僳', '纳西', '怒', '普米', '羌', '彝', '藏', ' ', ];
var days = [' ', '渝', '川', '贵', '云', ' ', ];
var data = [
    [1, 1, 1569],
    [1, 2, 9],
    [1, 3, 1398],
    [1, 4, 82],
    [1, 5, 479],
    [1, 6, 328],
    [1, 7, 421],
    [1, 8, 28],
    [1, 9, 51],
    [1, 10, 675],
    [1, 11, 6336],
    [1, 12, 3086],
    [2, 1, 9449],
    [2, 2, 47],
    [2, 3, 1566],
    [2, 4, 173],
    [2, 5, 521],
    [2, 6, 21082],
    [2, 7, 10149],
    [2, 8, 312],
    [2, 9, 137],
    [2, 10, 296931],
    [2, 11, 2643953],
    [2, 12, 1496524],
    [3, 1, 179510],
    [3, 2, 87],
    [3, 3, 1092],
    [3, 4, 572],
    [3, 5, 182],
    [3, 6, 337],
    [3, 7, 353],
    [3, 8, 28],
    [3, 9, 16],
    [3, 10, 1605],
    [3, 11, 834461],
    [3, 12, 1281],
    [4, 1, 1564901],
    [4, 2, 6353],
    [4, 3, 1629508],
    [4, 4, 142956],
    [4, 5, 475011],
    [4, 6, 668336],
    [4, 7, 309858],
    [4, 8, 31821],
    [4, 9, 42043],
    [4, 10, 552],
    [4, 11, 5041210],
    [4, 12, 142257],
]
data = data.map(function(item) {
    return [item[1], item[0], item[2]];
});

option = {
    title: {
        text: ' ',
        link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
    },
    legend: {
        data: ['Punch '],
        left: 'right'
    },
    tooltip: {
        position: 'top',
        formatter: function(params) {
            return params.value[2] + ' commits in ' + hours[params.value[0]] + ' of ' + days[params.value[1]];
        }
    },
    grid: {
        left: 2,
        bottom: 10,
        right: 10,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: hours,
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: 20,

            }
        },
        boundaryGap: false,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ddd',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        data: days,
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: 20,

            }
        },
        boundaryGap: false,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#ddd',
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        }
    },
    series: [{
        name: 'Punch Card',
        type: 'scatter',
        symbolSize: function(val) {
            return val[2] * 0.00004;
        },
        data: data,
        color: '#ddd',
    }]
};