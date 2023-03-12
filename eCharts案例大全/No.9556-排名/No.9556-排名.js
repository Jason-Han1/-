var totalCost = [100, 100, 100, 100, 100]; //背景色比例
var visits = [82.32, 73.56, 22.9, 48.34, 25]; //数值
var grade = ['阿斯顿', '帕萨迪', 'omyga', '呵呵大', '嘻嘻'];
var data = {
    grade: grade,
    totalCost: totalCost,
    visits: visits,
};
option = {
    //backgroundColor: '#ffffff',
    grid: {
        top: 30,
        left: 50,
        right: 50,
        bottom: 150,
        containLabel: true

    },
    tooltip: {
        show: false
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        type: 'category',

        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            margin: 90,
            textStyle: {
                align: 'left',
                fontSize: 16,
                fontWeight: 'bold',
                color: '#171B1F'
            },
            rich: {
                a: {

                },
                b: {

                    width: 20,
                    height: 20,
                    align: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: function() {
                        return 'blue'
                    }

                },
                c: {
                    padding: [80, 20, 20, 60],
                    fontWeight: 'bold',


                }
            },
            formatter: function(params, i) {
                console.log(params, i)
                if (true) {
                    return [
                        '{a|No.}' + '' + '{b|' + (i + 1) + '}' + '{c|' + params + '}'
                    ].join('\n')
                }
            }
        },
        data: data.grade
    }, {
        type: 'category',

        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                fontSize: 16,
                color: '#54AFEE',
                lineHeight: '50',
                padding: [-30, 20, 35, -50]
            },
            rich: {
                a: {

                },
                b: {

                    width: 20,
                    height: 20,
                    align: 'right',
                    fontSize: 14,
                    fontWeight: 'bold'

                }
            },
            formatter: function(params, i) {
                console.log(params, i)
                if (true) {
                    return [
                        '{b|' + params + '/次}'
                    ].join('\n')
                }
            }
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: data.visits
    }, ],
    series: [{

            type: 'bar',

            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#25EBE9'

                    }, {
                        offset: 1,
                        color: '#6390F0'

                    }]),
                    barBorderRadius: 5,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            label: {
                normal: {
                    show: false, //珠子顶部
                    position: 'top',

                    formatter: '{b}%'
                }
            },
            barWidth: '30%',
            z: 10,
            data: data.visits
        }, {

            type: 'bar',
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: false,
                    color: '#fff',
                    barBorderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#eee',
                }
            },
            emphasis: {

            },
            z: 1,
            barWidth: '30%',
            data: data.totalCost
        }

    ]
};