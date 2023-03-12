var textbackcolor = ['#f55555', '#006af1', '#3fa967'];
var colorList = ['#fee4e5', '#d6e6fd', '#e0f1e7'];
var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: "{b0}: {c0}"
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "#e9e9e9"
            }
        },
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#333',
                fontWeight: 'normal',
                fontSize: 12,
            }
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#666'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#e9e9e9',
            }
        },
        data: ['未到访', '已到访', '已离校']
    },
    series: [{
            name: '数据内框',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: function(params) {
                        return textbackcolor[params.dataIndex]
                    }
                }
            },
            barWidth: 30,
            data: [11, 33, 77]
        },
        {
            name: '外框',
            type: 'bar',
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: function(params) {
                        return colorList[params.dataIndex]
                    }
                }
            },
            barGap: '-100%',
            z: 0,
            barWidth: 30,
            data: [100, 100, 100, 100, 100]
        }
    ]
};