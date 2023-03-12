let xdata = [
    '杭州市',
    '金华市',
    '温州市',
    '嘉兴市',
    '湖州市',
    '台州市',
    '丽水市',
    '宁波市',
    '衢州市',
    '舟山市',
    '绍兴市',
    '义乌市'
]
let checkCount = [20, 104, 134, 66, 78, 60, 40, 80, 100, 100, 160, 160]
let companyBusiNum = [10, 52, 67, 33, 39, 30, 25, 40, 50, 50, 80, 90]
let companyNum = [8, 40, 47, 23, 30, 20, 20, 15, 20, 30, 60, 70]
option = {
    backgroundColor: '#040a20',
    tooltip: {
        trigger: 'axis',
        confine: true,
        axisPointer: {
            type: 'line'
        }
    },
    grid: {
        top: '5%',
        left: '2%',
        right: '2%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: xdata,
        axisTick: {
            alignWithLabel: true
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.3)'
            }
        },
        axisLabel: {
            color: 'rgb(204,228,255)',
            formatter: function(value, index) {
                let arr = value.split('')
                var label = ''
                for (let i = 0; i < arr.length; i++) {
                    label += arr[i] + '\n'
                }
                return label
            }
        }
    }],
    yAxis: [{
            type: 'value',
            show: true,
            axisLabel: {
                color: 'rgb(204,228,255)'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            splitLine: {
                show: false
            }
        },
        {
            type: 'value',
            name: '次数',
            //min: 0,
            nameTextStyle: {
                color: 'rgb(204,228,255)'
            },
            axisLabel: {
                color: 'rgb(204,228,255)',
                formatter: '{value}'
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.3)'
                }
            },
            splitLine: {
                show: false
            }
        }
    ],
    series: [{
            name: '巡查次数',
            type: 'line',
            color: 'rgb(243,51,70)',
            yAxisIndex: 1,
            label: {
                show: true
            },
            data: checkCount
        },
        {
            name: '工商单位总数',
            type: 'bar',
            yAxisIndex: 0,
            barWidth: 10,
            barGap: '-100%',
            z: -12,
            //stack: '总量',
            color: 'rgb(41,157,255)',
            itemStyle: {
                // barBorderRadius: [15, 15, 0, 0]
            },
            emphasis: {
                itemStyle: {
                    // color: '#bd881f'
                }
            },
            data: companyBusiNum
        },
        {
            name: '单位总数',
            type: 'bar',
            yAxisIndex: 0,
            barWidth: 10,
            //stack: '总量',
            color: 'rgb(255,170,0)',
            itemStyle: {
                // barBorderRadius: [15, 15, 15, 15]
            },
            emphasis: {
                itemStyle: {
                    // color: '#bd881f'
                }
            },
            data: companyNum
        }
    ]
}