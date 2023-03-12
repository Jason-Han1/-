var data = [
    ['01', 85.11],
    ['02', 36.61],
    ['03', 27.26],
    ['04', 6.72],
    ['05', 36.37],
    ['06', 80.13],
    ['07', 20.88],
    ['08', 97.15],

];

let type = [] //1蓝色拐点，0红色拐点
let symbolArr = [];
var dataa = [];
for (var i = 0; i < data.length; i++) {
    dataa.push(data[i][1])
    type.push(data[i][1])
}
console.log(type)
type.forEach(function(v, i) {
    symbolArr[i] = {
        value: dataa[i],
        symbolSize: v == 97.15 ? 13 : 0,
        itemStyle: {
            normal: {
                color: v == 97.15 ? '#E4007F' : '#1572E9',
                shadowBlur: 50,
                shadowColor: '#333'
            }
        }
    };
});
console.log(symbolArr)
data.push(['', avg])
var sum = 0;
var data3 = [];
for (var i = 0; i < data.length - 1; i++) {
    data3.push(data[i][1])
    sum += data[i][1]
}
var avg = sum / data.length;
// console.log(avg)

var data1 = data
var data2 = [];
data2
for (var i = 0; i < data.length - 2; i++) {
    data2.push('')
}
data2.push(data[data.length - 2][1])
data2.push(data1[data1.length - 2][1])
// console.log(data1)
console.log(data3)
//======= x轴===========
var data4 = [];
for (var i = 0; i < data.length; i++) {
    data4.push(data[i][0])
}
option = {

    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            if (params.length === 1) {
                if (params[0].seriesName === 'line1') {
                    return '明天<br/>' + params[0].data;
                } else {
                    return params[0].axisValue + '日<br/>' + params[0].data;
                }
            } else {
                return params[0].axisValue + '日<br/>' + params[0].data;
            }
        }
    },
    xAxis: [{
        type: 'category',
        name: '',
        data: data4,
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
        splitNumber: 20
    }],
    yAxis: [{
            type: 'value',
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            }
        },
        {
            type: 'value',
            show: false,
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            }
        }
    ],
    grid: {
        top: 90
    },

    series: [{
            name: 'line',
            type: 'line',
            symbol: 'none',

            lineStyle: {
                color: '#ff7405'
            },
            data: data3,
            xAxisIndex: 0,
            markLine: {
                symbol: ['none', 'none'],
                label: {
                    show: false
                },
                data: [{
                        xAxis: 7
                    },


                ]
            }
        },

        {
            name: 'line1',
            type: 'line',
            // showAllSymbol: true,
            // symbol:'',
           
            //  showSymbol: true,
            symbolSize:1,
            
            lineStyle: {
                color: '#1260FF',
                type: 'dashed'
            },
            data: data2,
            label: {
                show: true,
                distance: 4,
                position: ['10', '-10'],
                formatter: function(params) {
                    console.log(params)
                    if(params.dataIndex==8){
                        var val1 = params.value || 0;
                    return '{color1|' + val1 + '}'; 
                    }
                   
                },
                rich: {
                    color1: {
                        color: '#fff',
                        backgroundColor: 'black',
                        borderColor: '#FAAE29',
                        border: 1,
                        lineHeight: 24,
                        height: 24,
                        padding: [2, 6, 2, 6],
                        borderWidth: 1,
                        borderRadius: [3, 3, 3, 3],
                    }

                }
            },
            xAxisIndex: 0,
            markLine: {
                lineStyle: {
                    type: 'solid',
                    color: 'red'
                },
                symbol: ['none', 'none'],
                label: {
                    show: false
                },

                data: [

                    {
                        xAxis: 8
                    }

                ]
            }
        },
        {
            label: {
                show: false,


            },

            type: 'effectScatter',
            coordinateSystem: 'cartesian2d',
            data: symbolArr,
            yAxisIndex: 1,
            symbolSize: 0,
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true
        }
    ]
};