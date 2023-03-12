app.title = '堆叠条形图联动饼状图';

var data = [
    [56, 36, 25, 39, 95, 99],
    [26, 86, 65, 49, 45, 39],
    [28, 46, 35, 89, 15, 79],
    [16, 56, 85, 29, 75, 49]
]
var arr=['product', '桐庐', '城南', '旧县', '城乡', '固始', '千岛湖']
option = {
    legend: {},
    tooltip: {
        trigger: 'axis',
        showContent: true,
        position: 'inside',
    },
    dataset: {
        source: [
            arr,
            ['心电', 56, 36, 25, 39, 95, 99],
            ['血压', 26, 86, 65, 49, 45, 39],
            ['心率', 28, 46, 35, 89, 15, 79],
            ['化验', 16, 56, 85, 29, 75, 49]
        ]
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        gridIndex: 0
    },
    grid: {
        top: '20%',
        right: "45%",
    },
    series: [{
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            smooth: true,
            seriesLayoutBy: 'row'
        },
        {
            type: 'bar',
            smooth: true,
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            seriesLayoutBy: 'row'
        },
        {
            type: 'bar',
            smooth: true,
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            seriesLayoutBy: 'row'
        },
        {
            type: 'bar',
            smooth: true,
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            seriesLayoutBy: 'row'
        },
        {
            name: '总计',
            type: 'line', // 平均值
            data: (function() {
                let sum = []
                for (let i in data) {
                    for (let j in data[i]) {
                        if (!sum[j]) {
                            sum[j] = 0
                        }
                        sum[j] += data[i][j]
                    }
                }
                return sum
            })(),
            itemStyle: {
                opacity: 0
            },
            lineStyle: {
                opacity: 0
            },
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均数',
                    label: {
                        normal: {
                            position: 'end',
                            formatter: '{b}: {c}'
                        }
                    }
                }]
            }
        },
        {
            tooltip: {
                trigger: 'item',
                showContent: true,
                alwaysShowContent: true,
                 position: 'inside',
            },
            type: 'pie',
            id: 'pie',
            radius: '24%',
            center: ['78%', '50%'],
            label: {
                formatter: '{b}: {@旧县} ({d}%)',
                /* normal: {
                     position: 'inner'
                 }*/
            },
            /*labelLine: {
                normal: {
                    show: false
                }
            },*/
            encode: {
                itemName: 'product',
                value: '旧县',
                tooltip: '旧县'
            }
        }
    ]
};
myChart.on('updateAxisPointer', function(event) {
    var xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
        var dimension = xAxisInfo.value + 1;
        myChart.setOption({
            series: {
                name:arr[dimension],
                id: 'pie',
                label: {
                    formatter: '{a} {b}: {@[' + dimension + ']} ({d}%)',
                },
                encode: {
                    value: dimension,
                    tooltip: dimension
                }
            }
        });
    }
});