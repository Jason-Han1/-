let positionLeft = 1,
    max = 100 + 2*positionLeft,
    value = 60;

option = {
    backgroundColor: 'black', //背景必须与symbal颜色一样
    "xAxis": {
        type: 'value',
        "max": max,
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisLabel": {
            "show": false
        },
        "axisTick": {
            "show": false
        }
    },
    "yAxis": {
        "type": "category",
        "inverse": false,
        "data": [],
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": false
        }
    },
    "series": [

        { //间距
            type: 'bar',
            barWidth: 40,
            stack: 'b',
            legendHoverLink: false,
            itemStyle: {
                normal: {
                    color: 'rgba(0,0,0,0)'
                }
            },

            data: [positionLeft]
        },


        { //内
            type: 'bar',
            barWidth: 40,
            stack: 'b',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function(e) {
                        return (e.value / (max - 2*positionLeft) * 100).toFixed(2) + "%"
                    }
                }
            },
            legendHoverLink: false,
            silent: true,
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0, [{
                                offset: 0,
                                color: '#74c6ea'
                            },
                            {
                                offset: 1,
                                color: '#96ead2'
                            }
                        ]
                    )
                }
            },

            data: [value]
        },
        { //框
            type: 'bar',
            barWidth: 50,
            barGap: '-110%',
            label: {
                normal: {
                    show: false,

                    position: 'right',
                    textStyle: {
                        color: '#000'
                    }
                }
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 30,
                    color: 'rgba(0,0,0,0)', //底色
                    borderWidth: 2,
                    borderColor: 'grey'
                }
            },
            data: [max],
            z: 1,
        }
    ]
};