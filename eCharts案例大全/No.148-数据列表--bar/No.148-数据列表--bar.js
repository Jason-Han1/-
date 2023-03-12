var colorList = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff'];
var datas = [{
        "value": 36,
        "name": "系列一"
    },
    {
        "value": 54,
        "name": "系列二"
    },
    {
        "value": 29,
        "name": "系列三"
    },
    {
        "value": 25,
        "name": "系列四"
    },
    {
        "value": 55,
        "name": "系列五"
    },
    {
        "value": 69,
        "name": "系列6"
    },
    {
        "value": 75,
        "name": "系列7"
    },
    {
        "value": 85,
        "name": "系列8"
    }
]
let maxArr = (new Array(datas.length)).fill(100);
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
        left: 0,
        right:0,
        containLabel:true
    },
    xAxis: {
        show: false,
        type: 'value'

    },
    yAxis: [{
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
        data: datas.map(item => item.name),
        axisLabel: {
            margin: 100,
            fontSize: 14,
            align: 'left',
            color: '#333',
            rich: {
                a1: {
                    color: '#fff',
                    backgroundColor: colorList[0],
                    width: 30,
                    height: 30,
                    align: 'center',
                    borderRadius: 2
                },
                a2: {
                    color: '#fff',
                    backgroundColor: colorList[1],
                    width: 30,
                    height: 30,
                    align: 'center',
                    borderRadius: 2
                },
                a3: {
                    color: '#fff',
                    backgroundColor: colorList[2],
                    width: 30,
                    height: 30,
                    align: 'center',
                    borderRadius: 2
                },
                b: {
                    color: '#fff',
                    backgroundColor: colorList[3],
                    width: 30,
                    height: 30,
                    align: 'center',
                    borderRadius: 2
                }
            },
            formatter: function(params) {
                var index = datas.map(item => item.name).indexOf(params);
                index = index + 1;
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
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        data: datas.map(item => item.value),
         axisLabel: {
             show:true,
             fontSize: 14,
            color: '#333',
             formatter:'{value}%'
         }
    }],
    series: [{
            z: 2,
            name: 'value',
            type: 'bar',
            barWidth: 20,
            zlevel: 1,
            data: datas.map((item, i) => {
                itemStyle = {
                    color: i > 3 ? colorList[3] : colorList[i]
                }
                return {
                    value: item.value,
                    itemStyle: itemStyle
                };
            }),
            label: {
                show: false,
                position: 'right',
                color: '#333333',
                fontSize: 14,
                offset: [10, 0]
            }
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            itemStyle: {
                normal: {
                    color: 'rgba(118, 111, 111, 0.55)'
                }
            },
            data: maxArr,
        }

    ]
};