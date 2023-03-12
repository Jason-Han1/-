var min = 0;
var max = 100;
var secretNum = (Math.random() * 100).toFixed(0);
var flag = 0;

//var data = [[0,0,5],[0,1,1]];
var categoryX = ['0', '1', '2', '3', '4', '5', '6',
    '7', '8', '9'
];
var categoryY = ['0', '1', '2', '3', '4', '5', '6',
    '7', '8', '9', '10'
];
var data = (function() {
    var res = [];
    for (i = 0; i < 11; i++) {
        for (j = 0; j < 10; j++) {
            if (i * 10 + j < 101) {
                res.push([i, j, '' + (i * 10 + j)]);
            }
        }
    }
    return res;
})();

guessNumData = data.map(function(item) {
    return [item[1], item[0], item[2] || '-'];
});
myChart.setOption(getOption(0, 100));
myChart.on('click', function(params) {
    if (params.seriesId === 'guessPanel' && flag == 0) {
        //alert(params.data[2]);
        guess(parseInt(params.data[2]));
    }
});

//设置
function getOption(min, max) {
    option = {
        tooltip: {
            show: false
        },
        grid: {
            width: '30%',
            height: '90%',
            left: '10px',
            top: '10px'
        },
        xAxis: {
            show: false,
            type: 'category',
            data: categoryX,
            splitArea: {
                show: true
            }
        },
        yAxis: {
            show: false,
            type: 'category',
            data: categoryY,
            splitArea: {
                show: true
            }
        },
        series: [{
            id: 'guess',
            center: ['60%', '50%'],
            zlevel: 1,
            name: 'numPuzzle',
            type: 'gauge',
            radius: '70%',
            silent: true,
            axisLabel: {
                show: false,
                formatter: function(value) {
                    if (value == min || value == max) {
                        return value;
                    }
                }
            },
            pointer: {
                show: true
            },
            axisLine: {
                lineStyle: {
                    width: '25',
                    color: [
                        [0, '#BEBEBE'],
                        [min / 100, '#BEBEBE'],
                        [max / 100, '#5BC49F'],
                        [1, '#BEBEBE']
                    ]
                }
            },
            detail: {
                formatter: '请猜一个' + min + '到' + max + '的整数',
                offsetCenter: [0, '10%']
            },
            data: [{
                value: [{
                    value: secretNum,
                    name: '随机整数'
                }]
            }]
        }, {
            id: 'guessPanel',
            type: 'heatmap',
            label: {
                normal: {
                    show: true
                }
            },
            data: guessNumData
        }]
    };
    return option;
}

function guess(num) {
    var info;
    if (num == secretNum) {
        info = '猜中了！！！';
        flag = 1;
        renewEcharts(1, info, min, max);
    } else if (num < min || num > max) {
        info = '请猜' + min + '到' + max + '之间的数';
        renewEcharts(0, info, min, max);
    } else if (num < secretNum) {
        min = num + 1;
        info = '猜小了，答案在' + min + '与' + max + '之间';
        renewEcharts(0, info, min, max);
    } else {
        max = num - 1;
        info = '猜大了，答案在' + min + '与' + max + '之间';
        renewEcharts(0, info, min, max);
    }
}

function renewEcharts(isGet, msg, min, max) {
    var opt;
    var color = '#5BC49F';
    if (max - min < 8) {
        color = '#B5495B';
    } else if (max - min < 15) {
        color = '#FF7C7C';
    } else if (max - min < 30) {
        color = '#FFDA43';
    }
    if (isGet == 1) {
        opt = {
            series: {
                detail: {
                    formatter: msg
                }
            }
        };
        myChart.setOption(opt);
    } else {
        opt = {
            series: [{
                id: 'guess',
                axisLine: {
                    lineStyle: {
                        color: [
                            [0, '#BEBEBE'],
                            [min / 100, '#BEBEBE'],
                            [max / 100, color],
                            [1, '#BEBEBE']
                        ]
                    }
                },
                detail: {
                    formatter: msg,
                    color: color
                }
            }, {
                id: 'guessPanel',
                data: (function() {
                    var res = [];
                    for (var item in guessNumData) {
                        if (parseInt(guessNumData[item][2]) >= min && parseInt(guessNumData[item][2]) <= max) {
                            res.push(guessNumData[item]);
                        }
                    }
                    return res;
                })()
            }]
        };
        myChart.setOption(opt);
    }
}

//深红#B5495B 红#FF7C7C 黄#FFDA43 绿#5BC49F 灰#BEBEBE