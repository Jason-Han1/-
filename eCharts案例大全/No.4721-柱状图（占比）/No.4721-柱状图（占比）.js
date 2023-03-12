var caption = ['增值税', '消费税', '营业税', '关税', '所得税'];
var data_total = [220, 182, 191, 234, 290];
var data_curr = [210, 170, 161, 160, 150];
var data_percent = [];
var line = [];
var selectA = [];
var selectB = [];
for (var i = 0; i < data_total.length; i++) {
    var j = (data_curr[i] / data_total[i]) * 100;
    data_percent.push(j);
    line.push(0);
    selectA.push('');
    selectB.push('');
}
var checkName = '';
var checkIndex = -1;

    option = {
        grid: {
            bottom: '20%',
        },
        legend: {
            show: true,
            left: "center",
            orient: "horizontal",
            textStyle: {
                color: '#E7F8FB',
                fontSize: 16,
            },
            itemGap: 40
        },
        xAxis: {
            data: caption,
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#696969",
                    width: 2
                }
            },
            axisLabel: {
                show: true,
                fontSize: 22,
                margin: 40,
                textStyle: {
                    color: function(value, index) {
                        if (checkIndex == index) {
                            return '#FFF45C';
                        } else {
                            return '#fff';
                        }
                    }
                }

            }
        },
        yAxis: {
            show: true,
            type: 'value',
            min: 0,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgba(105,105,105,0.5)",
                    width: 2,
                    type: "solid"
                }
            }
        },
        series: [{
                type: 'line',
                data: line,
                label: {
                    show: true,
                    position: "bottom",
                    formatter: function(params) {
                        var curr = option.series[1].data[params.dataIndex];
                        var total = option.series[2].data[params.dataIndex];
                        var val3 = (curr / total) * 100;
                        return val3.toFixed(0) + '%';
                    },
                    fontSize: 22,
                    distance: 8,
                    color: '#FFF45C',
                },
                lineStyle: {
                    color: "rgba(255, 0, 0, 0)"
                },
                itemStyle: {
                    color: "#088B50"
                },
                symbol: "rect",
                silent: true,
                animation: false
            },
            {
                name: '已完成',
                type: 'bar',
                //stack: "1",

                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(7,173,98, 1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(7,173,98, 0)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    //borderColor: "#088B50",
                    //borderWidth: 3,
                },
                label: {
                    show: true,
                    position: "insideTop",
                    formatter: '{c}',
                    fontSize: 18,
                    color: '#fff',
                },
                barWidth: "50%",
                data: data_curr
            },
            {
                name: '总量',
                type: 'bar',
                //stack: "1",//堆积
                barGap: '-100%', //重叠
                itemStyle: {
                    color: "rgba(255, 0, 0, 0)",
                    borderColor: "#088B50",
                    borderWidth: 6,

                },
                label: {
                    show: true,
                    position: "top",
                    /*formatter: function(params){
                        var val1 = params.value;
                        var val2 = option.series[1].data[params.dataIndex];
                        var val3 = val1+val2;
                        return val3;
                    },*/
                    formatter: '{c}',
                    fontSize: 18,
                    color: '#fff',
                },
                barWidth: "50%",
                data: data_total
            },
            {
                //name: '已完成选中',
                type: 'bar',
                //stack: "1",

                itemStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(173,167,7, 1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(173,167,7, 0)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    //borderColor: "#088B50",
                    //borderWidth: 3,
                },
                label: {
                    show: true,
                    formatter: function(params) {
                        if (checkName == params.name) {
                            return params.value;
                        } else {
                            return '';
                        }
                    },
                    position: "insideTop",
                    fontSize: 18,
                    color: '#fff',
                },
                barWidth: "50%",
                data: selectA,
                silent: true,
                animation: false
            },
            {
                //name: '总量选中',
                type: 'bar',
                //stack: "1",//堆积
                barGap: '-100%', //重叠
                itemStyle: {
                    color: "rgba(255, 0, 0, 0)",
                    borderColor: "#ADA707",
                    borderWidth: 6,

                },
                label: {
                    show: false
                },
                barWidth: "50%",
                data: selectA,
                silent: true,
                animation: false
            }
        ]

    };

myChart.on('click', function(params) {
    //点击的柱子的名称
    checkName = params.name;
    console.log(params);
    checkIndex = params.dataIndex;
    for (var i = 0; i < data_total.length; i++) {
        if (i == checkIndex) {
            selectA[i] = data_total[checkIndex];
        } else {
            selectA[i] = '';
        }
        if (i == checkIndex) {
            selectB[i] = data_curr[checkIndex];
        } else {
            selectB[i] = '';
        }
    }
    option.series[4].data = selectA;
    option.series[3].data = selectB;
    //柱形图重构
    myChart.setOption(option);
});