var myColor = ['#006af1', '#01a9f0', '#3fa967', '#ffb310', '#ff7611', '#f55555'];
var colorList = ['#d6e6fd', '#d6f0fd', '#e0f1e7','#fff3d9','#ffead9','#fee4e5']
option = {
    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#e9e9e9',
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
        data: ['应到', '正常', '请假', '迟到', '早退', '旷课']
    }, {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        },
        data: []
    }, ],
    yAxis: {
        type: "value",
        name: '',
        splitNumber: 6,
        axisLabel: {
            textStyle: {
                color: "#333"
            }
        },
        nameTextStyle: {
            color: "#fff",
            fontSize: 12
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "#e9e9e9"
            }
        },
        axisTick: {
            show: false
        }
    },
    series: [{
            type: 'bar',
            xAxisIndex: 1,
            animation: false,
            itemStyle: {
                normal: {
                    show: true,
                    color: function(params) {
                        return colorList[params.dataIndex]
                    },
                    barBorderRadius: 0,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barWidth: '30%',
            data: [33, 33, 33, 33, 33, 33]
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: function(params) {
                        return myColor[params.dataIndex]
                    },
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            label: {
                normal: {
                    show: false,

                }
            },
            barWidth: '30%',
            data: [8, 15, 10, 6, 8, 15]
        }
    ],
};