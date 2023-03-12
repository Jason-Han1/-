var option = {

    backgroundColor: '#F8F8FF',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(e) {
            if (e.length > 1) {
                var S = e[1].data - e[0].data;
                return e[0].axisValue + ":<br>差额=当前－期初<br>=" + S;
            } else if (e.length = 1) {
                return e[0].axisValue + ":<br>" + e[0].seriesName + "=" + e[0].data;
            }

        }
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '15%',
        top: '16%',
        containLabel: true
    },
    legend: {
        data: ['期初值', '当前值'],
        left: 220,
        top: 1,
        textStyle: {
            color: "#242424"
        },
        itemWidth: 12,
        itemHeight: 10,
        // itemGap: 35
    },
    xAxis: {
        type: 'category',
        data: ['钢材', '毛坯', '自制件', '外购件'],
        axisLine: {
            lineStyle: {
                color: '#242424'

            }
        },
        axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
                fontFamily: 'Microsoft YaHei'
            }
        },
    },

    yAxis: {


        type: 'value',
        name: "         金额( 单位: 万元 )",
        axisLine: {
            show: false,
            lineStyle: {
                color: '#242424'
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#C9C9C9'
            }
        },
        axisLabel: {}
    },
    "dataZoom": [{
        "show": true,
        "height": 16,
        "xAxisIndex": [
            0
        ],
        bottom: '9%',
        "start": 10,
        "end": 90,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#458B74",

        },
        textStyle: {
            color: "#242424"
        },
        borderColor: "#8968CD"
    }, {
        "type": "inside",
        "show": true,
        "height": 15,
        "start": 1,
        "end": 35
    }],
    series: [{
            name: '期初值',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FF7256'
                    }, {
                        offset: 1,
                        color: '#FFC0CB'
                    }]),
                    barBorderRadius: 0,
                },

            },
            label: {
                show: true,
                position: ['-10', '-12'],
                color: '#8E8E38',
                fontSize: 12,
            },
            data: ['482', '902', '1233', '3292'],
        },
        {
            name: '当前值',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#8470FF'
                    }, {
                        offset: 1,
                        color: '#7EC0EE'
                    }]),
                    barBorderRadius: 0,
                }

            },
            label: {
                show: true,
                position: ['10', '-12'],
                color: '#8E8E38',
                fontSize: 12,
            },
            data: ['422', '867', '1364', '3121'],
        },

    ]
};