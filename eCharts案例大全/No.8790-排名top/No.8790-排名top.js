data = [{
    name: "13",
    sum: 166818,
    value: 166818
},{
    name: "区县",
    sum: 166818,
    value: 166817
},{
    name: "区县",
    sum: 166818,
    value: 166815
},{
    name: "区县",
    sum: 166818,
    value: 166816
},{
    name: "县区县",
    sum: 166818,
    value: 166815
},{
    name: "区县",
    sum: 166818,
    value: 16683
},{
    name: "区县",
    sum: 166818,
    value: 166818
},{
    name: "区县",
    sum: 166818,
    value: 166818
}]
getArrByKey = (data, k) => {
    let key = k || 'value'
    let res = []
    if (data) {
        data.forEach(function(t) {
            res.push(t[key])
        })
    }
    return res
}
option = {
    grid: {
        top: '2%',
        bottom: -15,
        right: '5%',
        // left: '-8%',
        //left: 20,
        containLabel: true
    },
    xAxis: {
        show: false
    },
    yAxis: [{
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
            color: '#6B6F86',
            // align: 'left',
            margin: 10,
            fontSize: 13,
            formatter: function(value, index) {
                var v = value.substring(0, 7) + '...'
                // console.log(value, v)
                var val = value.length > 7 ? v : value
                return '{idx|' + (1 + index) + '} {title|' + val + '}'
            },
            rich: {
                idx: {
                    color: '#6B6F86',
                    //width: 0,
                    align: 'right',
                    padding: [0, 4]
                },
                title: {
                    color: '#6B6F86',
                    align: 'right',
                    width: 80
                }
            }
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
            // color: '#666h',
            color: '#6B6F86',
            align: 'left',
            margin: 20,
            fontSize: 13,
            formatter: function(value, index) {
                return data[index].value
            }
        }
    }],
    tooltip: {
        show: true,
        backgroundColor: 'rgba(26, 35, 62, 0.6)'
    },
    series: [{
            name: this.chartName,
            type: 'bar',
            yAxisIndex: 0,
            data: data,
            barWidth: 8,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 1, 0,
                    [{
                            offset: 0,
                            // color: '#212C4F'
                            // color: '#fff'
                            color: '#5073b7'
                        },
                        {
                            offset: 1,
                            // color: '#386EFF'
                            color: '#5073b7'
                        }
                    ]
                ),
                barBorderRadius: 0
            },
            emphasis: { // 鼠标移上去的样式
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [{
                                offset: 0,
                                // color: '#21364E'
                                // color: '#fff'
                                color: '#0ab39c'
                            },
                            {
                                offset: 1,
                                // color: '#16F0CC'
                                color: '#0ab39c'
                            }
                        ]
                    ),
                    barBorderRadius: 0
                }
            }
        },
        {
            // name: "白框",
            type: 'bar',
            yAxisIndex: 0,
            barGap: '-100%',
            data: getArrByKey(data, 'sum'),
            barWidth: 8,
            itemStyle: {
                normal: {
                    // color: '#202944' //#f0f2f5
                    color: '#f0f2f5' // #f0f2f5
                }
            },
            tooltip: {
                show: false
            },
            z: 1
        }
    ]
};