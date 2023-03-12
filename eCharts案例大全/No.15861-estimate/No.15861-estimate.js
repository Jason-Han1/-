var countries = ['起动机', '机油泵总成', '发电机', '水泵总成', '燃油滤清器总成', '减振器', '机油冷却器总成'];
var years = ['2014年', '2015年', '2016年', '2017年'];

var data = [
    [
        [10000, 2.681634155, 0.115044968],
        [7800, 2.155333864, 0.113580762],
        [5000, 1.798516848, 0.321718039],
        [6800, 0.353431105, 0.008865196],
        [13200, 1.794378769, 1.344426108],
        [12300, 1.560055473, 0.035462114],
        [11111, 2.793094646, 1.049495413]
    ],
    [
        [40000, 2.885611751, 0.117552039],
        [43000, 2.362687426, 0.117609858],
        [51000, 1.786069239, 0.327335695],
        [38000, 0.364786726, 0.009675296],
        [30500, 1.928096899, 1.631482938],
        [31000, 1.790383224, 0.036960954],
        [38000, 2.871666001, 1.516459314]
    ],
    [
        [68000, 2.964367964, 0.127082033],
        [66000, 2.429639368, 0.126681978],
        [63000, 1.688282406, 0.310469086],
        [72000, 0.391102941, 0.01082079],
        [80000, 2.014663128, 2.412036712],
        [86000, 1.909524273, 0.03978082],
        [85000, 2.826465631, 2.05860102]
    ],
    [
        [120000, 2.986101514, 0.130459055],
        [110000, 2.464682772, 0.131009371],
        [100000, 1.611535199, 0.287721343],
        [90000, 0.379277698, 0.009787698],
        [140000, 2.046036451, 3.018636316],
        [135000, 1.997342028, 0.040999382],
        [127000, 2.842110679, 10.899411182]
    ]
];

// 如果看不懂这段代码，那么就不用这段代码，
// 自己估计一个最大值也可以。
function getMax(dim) {
    var max = 0;
    data.forEach(function (dataByYear) {
        dataByYear.forEach(function (item) {
            if (item[dim] > max) {
                max = item[dim];
            }
        });
    });
    var exp = Math.round(Math.log(max) / Math.log(10));
    var exp10 = Math.pow(10, exp);
    max = Math.ceil(max / exp10 * 10) / 10 * exp10;

    return max;
}


var itemStyle = {
    normal: {
        opacity: 0.8,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
};

option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval: 3000,
            left: null,
            right: 10,
            top: 20,
            bottom: 20,
            width: 55,
            height: null,
            label: {
                normal: {
                    textStyle: {
                        color: '#ddd'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            symbol: 'none',
            lineStyle: {
                color: '#555'
            },
            checkpointStyle: {
                color: '#bbb',
                borderColor: '#777',
                borderWidth: 2
            },
            controlStyle: {
                showNextBtn: false,
                showPrevBtn: false,
                normal: {
                    color: '#666',
                    borderColor: '#666'
                },
                emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                }
            },
            data: years
        },
        backgroundColor: '#333',
        title: {
            text: '',
            textAlign: 'center',
            right: '3',
            bottom: 110,
            textStyle: {
                fontSize: 70,
                color: 'rgba(255, 255, 255, 0.9)'
            }
        },
        tooltip: {
            padding: 5,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1
        },
        xAxis: {
            type: 'value',
            name: '里程数',
            nameGap: 25,
            min: 0,
            max: getMax(0),
            nameLocation: 'middle',
            nameTextStyle: {
                fontSize: 18
            },
            splitLine: {
                show: false
            },
            axisTick: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#ddd'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '车龄/ 故障率 ',
            nameGap: 25,
            min: 0,
            max: getMax(1),
            nameTextStyle: {
                color: '#ccc',
                fontSize: 18
            },
            axisLine: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                formatter: '{value} ',
                textStyle: {
                    color: '#ddd'
                }
            }
        },
        grid: {
            left: 180,
            right: 110,
            bottom: 100
        },
        geo: {
            top: 20,
            left: 170,
            right: 120,
            height: '38%',
            name: 'World Population (2010)',
            type: 'map',
            map: 'world',
            roam: false,
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#aaa',
                    areaColor: '#555'
                },
                emphasis: {
                    areaColor: '#555'
                }
            }
        },
        toolbox: {
            top: 25,
            left: 10,
            itemSize: 20,
            iconStyle: {
                normal: {
                    borderColor: '#eee'
                },
                emphasis: {
                    borderColor: '#fffb60'
                }
            }
        },
        visualMap: [{
            type: 'piecewise',
            dimension: 3,
            categories: countries,
            left: 10,
            bottom: 35,
            calculable: true,
            precision: 0.1,
            textGap: 10,
            itemGap: 3,
            textStyle: {
                color: '#ccc'
            },
            inRange: {
                color: ['#bcd3bb', '#e88f70', '#9dc5c8', '#e1e8c8', '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8', '#bda29a', '#376956', '#c3bed4', '#495a80', '#9966cc', '#bdb76a', '#eee8ab', '#a35015', '#04dd98', '#d9b3e6', '#b6c3fc','#315dbc','#c5c975','#476a54','#66e638','#a59619','#822ee2','#49450d','#eeebd4','#2b98dc','#b95c25', '#8f1ec2', '#d50390', '#36a15d', '#edc1a5']
            },
            outOfRange: {
                color: '#555'
            }
        }, {
            show: false,
            type: 'continuous',
            dimension: 2,
            min: 0,
            max: 5,
            inRange: {
                symbolSize: [10, 50]
            }
        }],
        dataZoom: [{
            type: 'inside',
            xAxisIndex: 0
        }, {
            show: true,
            type: 'slider',
            xAxisIndex: 0
        }],
        series: [{
            type: 'scatter',
            id: 'gridScatter',
            itemStyle: itemStyle,
            data: [],
            tooltip: {
                formatter: function(obj) {
                    var value = obj.value;
                    return '<div style="border-bottom: 1px solid #555;padding-bottom: 5px; margin-bottom: 5px;">' + value[3] + '</div>'
                        + '专利申请量：' + value[0] + '<br>'
                        + 'R&D 经费支出占比：' + value[1] + ' %<br>'
                        + 'R&D 经费支出：' + value[2] + ' 千亿 $<br>';
                }
            }
        }],
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'quinticInOut'
    },
    options: []
};

for (var n = 0; n < years.length; n++) {
    option.options.push({
        title: {
            text: years[n]
        },
        series: {
            id: 'gridScatter',
            type: 'scatter',
            itemStyle: itemStyle,
            data: data[n].map(function (item, index) {
                return item.concat([countries[index]]);
            }),
            symbolSize: 10
        }
    });
}
