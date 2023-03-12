var myColor = ['#118DF0', '#118DF0', '#118DF0', '#118DF0', '#118DF0'];
var myColor2 = ['#00FFFF', '#00FFFF', '#00FFFF', '#00FFFF', '#00FFFF'];
var datas11 = [718, 519, 105, 708, 200];
var datas21 = [78, 105, 708, 300, 400];

function getsum(arr) {
    return arr.reduce(function(prev, curr, idx, arr) {
        return prev + curr;
    });
}
var sumarr = datas11.concat(datas21);
var sum = getsum(sumarr);
console.log(sum);
option = {
    backgroundColor: '#000',
    grid: [{
            width: "30%",
            left: '15%',
            top: '14%',
            right: '0',
            bottom: '14%'
        },
        {
            width: "30%",
            left: '65%',
            top: '14%',
            right: '0',
            bottom: '14%'
        }
    ],
    xAxis: [{
        gridIndex: 0,
        show: false,
    }, {
        gridIndex: 1,
        show: false,
    }],
    yAxis: [{
            gridIndex: 0,
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
                align: 'left',
                padding: [0, 0, 0, -60],
                textStyle: {
                    color: '#A7C5D6',
                    fontSize: '90%',
                    rich: {
                        a: {
                            fontSize: 14,
                            backgroundColor: '#00C6FF',
                            borderRadius: 10,
                            padding: [3, 6],
                            textAlign: 'center',
                            color: '#010735',

                        }
                    }
                },
                formatter: function(params) {
                    var data = ['黄骅', '高邑', '徐水', '饶阳', '邱县']
                    for (var i = 0; i < 5; i++) {
                        if (data[i] == params) {
                            var j = i + 1
                            return '{a|' + j + '} ' + params
                        }
                    }
                },
            },

            data: ['邱县', '饶阳', '徐水', '高邑', '黄骅']
        }, {
            gridIndex: 0,
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            data: []
        },
        {
            gridIndex: 1,
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
                align: 'left',
                padding: [0, 0, 0, -60],
                textStyle: {
                    color: '#A7C5D6',
                    fontSize: '90%',
                    rich: {
                        a: {
                            fontSize: 14,
                            backgroundColor: '#00C6FF',
                            borderRadius: 10,
                            padding: [3, 3],
                            textAlign: 'center',
                            color: '#010735',

                        }
                    },
                },

                formatter: function(params) {
                    var data =  ['雄县', '望都', '冀州', '博野', '行唐'];
                    for (var i = 0; i < 5; i++) {
                        if (data[i] == params) {
                            var j = 50 - i
                            return '{a|' + j + '} ' + params
                        }
                    }
                },
            },
            data: ['行唐', '博野', '冀州', '望都', '雄县']
        }, {
            gridIndex: 1,
            splitLine: 'none',
            axisTick: 'none',
            axisLine: 'none',
            data: []
        }
    ],
    series: [{
            name: '值',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: datas11,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    offset: [0, 0],
                    color: '#A7C5D6',
                    fontSize: '80%',
                    formatter: function(item) {
                        return (item.value / sum * 100).toFixed(2)
                    }
                }
            },
            barWidth: '20%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#0090F8'
                    }, {
                        offset: 1,
                        color: '#00C9FF'
                    }]),
                    barBorderRadius: 50,
                }
            },
            z: 2
        },


        {
            name: '值',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 3,
            data: datas21,
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    color: '#A7C5D6',
                    fontSize: '80%',
                    formatter: function(item) {
                        return (item.value / sum * 100).toFixed(2)
                    }
                }
            },
            barWidth: '20%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#0090F8'
                    }, {
                        offset: 1,
                        color: '#00C9FF'
                    }]),
                    barBorderRadius: 50,
                }
            },
            z: 2
        },


    ]
};