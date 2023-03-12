option = {
    backgroundColor: "#fff",
    tooltip: {
        position: 'top',
        backgroundColor: '#16324F',
        //   trigger: 'axis',
        formatter(params) {
            const marker = '<span style="display:inline-block;margin-right:5px;margin-bottom:3px;border-radius:10px;width:5px;height:5px;background-color:#2FC25B;"></span>'
            return marker + params.value + '条'
        }
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        boundaryGap: false,
        axisTick: {
            "show": false
        },
        splitLine: {
            "show": true,
            lineStyle: {
                color: '#DDE2EE',
                width: 1,
                type: 'solid'
            }
        },
        axisLine: {
            lineStyle: {
                color: '#838A9D', //待调整
            }
        }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            "show": false
        },
        splitLine: {
            "show": false
        },
        axisLine: {
            lineStyle: {
                color: '#838A9D', //待调整
            }
        }
    },
    dataZoom: [{
            type: 'inside',
            xAxisIndex: [0],
            filterMode: 'filter', // 设定为 'filter' 从而 X 的窗口变化会影响 Y 的范围。
            // start: 0,
            // end: 50,
            startValue:0,
            endValue:5,
            // xAxisIndex: [0, 1]
        }
    ],
    series: [{
        data: [500, 300, 600, 900, 1200, 800, 700],
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8, //拐点大小
        lineStyle: {
            color: '#46C7DC',
            width: 2,
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#cceff5"
                    },
                    {
                        offset: 0.5,
                        color: "#dbf3f7"
                    },
                    {
                        offset: 1,
                        color: "#fdfefe"
                    }
                ])
            }
        },
        itemStyle: {
            normal: {
                color: '#46C7DC', //拐点颜色
                opacity: 0,
            },
            emphasis: {
                color: '#16324F',
                opacity: 0.8,
            }
        }
    }]
};