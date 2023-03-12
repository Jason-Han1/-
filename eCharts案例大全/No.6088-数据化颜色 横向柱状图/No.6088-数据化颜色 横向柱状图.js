option = {
    color: ['rgba(255,176,1,', 'rgba(254,31,101,'],
    backgroundColor: '#020B19',
    dataset: {
        source: [
            ["name", "cent", "bg","wr","diff"],
            ["谭亮英", "70.0", "100" ,"0","1"],
            ["高凯莉", "44.5", "100" ,"0","1"],
            ["顾青霞", "37.9", "100" ,"0","1"],
            ["张芹", "70.0", "100" ,"0","2"],
            ["邹建芳", "44.5", "100" ,"0","2"],
            ["诸明妹", "37.9", "100" ,"0","2"]
        ]
    },
    xAxis: [{
        type: "value",
        show:false
    },{
        type: "value",
        inverse: true,
        show:false
    }],
    yAxis: [{
        type: "category",
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color: "#fff",
            fontSize: 20,
            margin:0,
            align:"left",
            padding: [0, -80, 50, 0]
        }
    },{
        type: "category",
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }],
    series: [{
            type: "bar",
            barWidth: "16%",
            xAxisIndex:0,
            yAxisIndex:0,
            itemStyle: {
                color: function(params) {
                    var colorList = []
                    if (params.data[4]=="1") {
                        colorList[params.dataIndex] = {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: option.color[0] + "0.2)" // 0% 处的颜色
                            }, {
                                offset: 1, color: option.color[0] + "1)" // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                    if (params.data[4]=="2") {
                        colorList[params.dataIndex] = {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0, color: option.color[1] + "0.2)" // 0% 处的颜色
                            }, {
                                offset: 1, color: option.color[1] + "1)" // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                    return colorList[params.dataIndex];
                },
                barBorderRadius: 30,
            },
            label: {
                show: false
            },
            z: 5,
        },
        {
            type: "bar",
            barWidth: "16%",
            barGap: "-100%",
            yAxisIndex:0,
            xAxisIndex:0,
            itemStyle: {
                color: function(params) {
                    var colorList = []
                    if (params.data[4]=="1") {
                        colorList[params.dataIndex] = option.color[0] + "0.2)"
                    }
                    if (params.data[4]=="2") {
                        colorList[params.dataIndex] = option.color[1] + "0.2)"
                    }
                    return colorList[params.dataIndex];
                },
                barBorderRadius: 30,
            },
            label: {
                show: false
            },
            z: 4
        },
        {
            type: "bar",
            barWidth: "16%",
            xAxisIndex:1,
            yAxisIndex:1,
            itemStyle: {
                color: function(params) {
                    var colorList = []
                    if (params.data[4]=="1") {
                        colorList[params.dataIndex] = option.color[0] + "1)"
                    }
                    if (params.data[4]=="2") {
                        colorList[params.dataIndex] = option.color[1] + "1)"
                    }
                    return colorList[params.dataIndex];
                },
                barBorderRadius: 30,
            },
            label: {
                show: true,
                position: "right",
                fontWeight: "bold",
                fontSize: 20,
                padding: [0, 0, 50, -60],
                formatter: function(params){
                    return params.data[1]+"%"
                }
            },
            z: 5,
        },
    ]
};