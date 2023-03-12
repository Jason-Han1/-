var index = 0;
var colorList = ['#E44F5E', '#E58A2E', '#E59C06', '#3FB7FA'];
var dataOne = [3.66, 2.86, 1.82, 1.8, 1.53, 1.47, 1.3, 1.25, 1.1, 1.02];

var yAxisDate = ['杭州市', '宁波市', '温州市', '湖州市', '嘉兴市', '绍兴市', '金华市', '衢州市', '舟山市', '台州市'];

var dataTwO = [];
var maxVlue = 0;
for (let i = 0; i < dataOne.length; i++) {
    maxVlue = dataOne[i] > maxVlue ? dataOne[i] : maxVlue
}
for (let i = 0; i < dataOne.length; i++) {
    dataTwO.push(maxVlue)
}
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        show: false
    },
    grid: {
        left: 100,
        right: 60,
        top: 0,
        bottom: 0
    },
   
    xAxis: {
        type: 'value',
        max: function(value) {
            return value.max;
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }

    },
    yAxis: {
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisPointer: {
            label: {
                show: true,
                margin: 30
            }
        },
        data: yAxisDate,
        axisLabel: {
            margin: 100,
            fontSize: 14,
            align: 'left',
            color: '#fff',
            interval: 0, //强制显示文字
            rich: {
                a1: {
                    color: '#fff',
                    backgroundColor: colorList[0],
                    width: 15,
                    height: 15,
                    align: 'center',
                    borderRadius: 15
                },
                a2: {
                    color: '#fff',
                    backgroundColor: colorList[1],
                    width: 15,
                    height: 15,
                    align: 'center',
                    borderRadius: 15
                },
                a3: {
                    color: '#fff',
                    backgroundColor: colorList[2],
                    width: 15,
                    height: 15,
                    align: 'center',
                    borderRadius: 15
                },
                b: {
                    color: '#fff',
                    backgroundColor: colorList[3],
                    width: 15,
                    height: 15,
                    align: 'center',
                    borderRadius: 15
                }
            },
            formatter: function(params) {
                if (index == 11) {
                    index = 0;
                }
                index++;
                if (index - 1 < 3) {
                    return [
                        '{a' + index + '|' + index + '}' + '  ' + params
                    ].join('\n')
                } else {
                    return [
                        '{b|' + index + '}' + '  ' + params
                    ].join('\n')
                }
            }
        }
    },
    series: [{
            z: 2,
            name: 'value',
            type: 'bar',
            barWidth: '15px',
            data: dataOne,
            itemStyle: {
                color: function(params) {
                    return params.dataIndex > 3 ? colorList[3] : colorList[params.dataIndex]
                },
                barBorderRadius: 10
            },
            label: {
                show: false,
                position: 'right',
                color: '#333333',
                fontSize: 14,
                offset: [10, 0]
            }
        }, {
            name: '值',
            type: 'bar',
            zlevel: 1,
            barGap: '-100%',
            barWidth: '15px',
            data: dataTwO,
            itemStyle: {
                color: function(params) {
                    return 'rgba(225, 225, 225, 0)'
                }
            },
            label: {
                show: true,
                position: 'right',
                color: '#333333',
                fontSize: 14,
                formatter: function(params) {
                    return [
                        '{c|' + params.data + '}' + ''
                    ].join('\n')

                },
                rich: {
                    c: {
                        color: '#1785EE',
                        //backgroundColor:'green',
                        width: 50,
                        height: 15,
                        align: 'center',
                        borderRadius: 0,
                        borderColor: '#1785EE',
                        borderWidth: 1
                    }
                }
            }
        }

    ]
};