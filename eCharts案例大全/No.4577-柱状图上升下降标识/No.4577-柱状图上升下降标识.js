let data = [{
        name: '测试1',
        value: '上升',
        param: '0.2'
    },
    {
        name: '测试2',
        value: '下降',
        param: '0.2'
    },
    {
        name: '测试3',
        value: '上升',
        param: '0.2'
    },
    {
        name: '测试4',
        value: '下降',
        param: '0.2'
    },
    {
        name: '测试5',
        value: '上升',
        param: '0.2'
    },
    {
        name: '测试6',
        value: '持平',
        param: '0'
    },
    {
        name: '测试7',
        value: '上升',
        param: '0.2'
    },
    {
        name: '测试8',
        value: '上升',
        param: '0.2'
    },
    {
        name: '测试9',
        value: '上升',
        param: '0.2'
    },
    {
        name: '测试10',
        value: '上升',
        param: '0.2'
    }
]
const getArrByKey = (data, k) => {
    let key = k || "value";
    let res = [];
    if (data) {
        data.forEach(function(t) {
            res.push(t[key]);
        });
    }
    return res;
};
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年'],
        show: false,
        textStyle: {
            color: '#fff'
        }
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        splitLine: {
            show: false,
            lineStyle: {
                color: '#666666'
            }
        },
        axisLabel: {
            color: '#000',
        },
    },
    yAxis: [{
        type: 'category',
        data: getArrByKey(data, 'name'),
        axisLabel: {
            color: '#000',
        },
        nameTextStyle: {
            color: '#000',
        },
        axisTick: {
            lineStyle: {
                color: '#000'
            },
            alignWithLabel: true
        },
        axisLine: {
            show: false
        },
        // inverse: false,
        splitLine: {
            show: false,
            lineStyle: {
                color: '#666666'
            },
            alignWithLabel: true

        }
    }, {
        triggerEvent: true,
        show: true,
        inverse: true,
        data: getArrByKey(data, 'name'),
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            verticalAlign: 'bottom',
            lineHeight: 30,
            fontSize: 13,
            formatter: function(value, index) {
                let res = '';
                if (data[index].value == '上升') {
                    res = '{text|↑}{params|' + data[index].param + '}'
                } else if (data[index].value == '持平') {
                    res = '{params|' + data[index].value + '}'
                } else if (data[index].value == '下降') {
                    res = '{text|↓}{params|' + data[index].param + '}'

                }
                return (res)
            },
            rich: {
                params: {
                    color: '#000',
                },
                text: {
                    color: 'red',
                }
            }
        }
    }],
    series: [{
        name: '2011年',
        type: 'bar',
        itemStyle: {
            color: '#09d477'
        },
        barWidth: 21,
        data: [18203, 23489, 29034, 104970, 131744, 630230, 630230, 630230, 630230]
    }, ]
}