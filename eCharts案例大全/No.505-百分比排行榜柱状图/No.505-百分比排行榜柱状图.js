var datas = [{
        "value": 36,
        "name": "申请立案"
    },
    {
        "value": 54,
        "name": "无法核查"
    },
    {
        "value": 29,
        "name": "已进入法律程库"
    },
    {
        "value": 25,
        "name": "重复舆情"
    },
    {
        "value": 45,
        "name": "咨询类"
    },
    {
        "value": 29,
        "name": "快速调处"
    },
    {
        "value": 25,
        "name": "不属监察管辖"
    },
    {
        "value": 45,
        "name": "未发现违法行为"
    }
]
var maxArr = (new Array(datas.length)).fill(100);
option = {
    backgroundColor: "#fff",
    grid: {
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + ' : ' + params[0].value
        }
    },
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            align: 'right',
            textStyle: {
                fontSize: 14,
                color: '#333',
                rich: {
                    index: {
                        color: '#9d9d9d',
                        fontWeight: 'bold',
                        fontStyle: 'italic'
                    },
                    index1: {
                        color: '#f8777b',
                        fontWeight: 'bold',
                        fontStyle: 'italic'
                    },
                    index2: {
                        color: '#ffa145',
                        fontWeight: 'bold',
                        fontStyle: 'italic'
                    },
                    index3: {
                        color: '#6ade8d',
                        fontWeight: 'bold',
                        fontStyle: 'italic'
                    },
                    name: {
                        width: 7 * 14,
                        align: 'left',
                        textAlign: 'left'
                    }
                }
            },
            formatter: (name) => {
                var index = (datas.map(item => item.name)).indexOf(name) + 1;
                return [
                    '{' + (index > 3 ? 'index' : 'index' + index) + '|' + index + '}',
                    '{name|' + name + '}'
                ].join(' ')
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: datas.map(item => item.name)
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: true,
        axisLabel: {
            textStyle: {
                color: '#3196fa',
                fontSize: '12'
            },
            formatter: '{value}%'
        },
        data: datas.map(item => item.value)
    }],
    series: [{
            name: '值',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: '#3196fa',
                },
            },
            barWidth: 20,
            data: datas
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 20,
            barGap: '-100%',
            data: maxArr,
            itemStyle: {
                normal: {
                    color: '#ededed',
                    barBorderRadius: 30,
                }
            },
        },
    ]
};