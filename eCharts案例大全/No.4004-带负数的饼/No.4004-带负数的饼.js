
    let data = [{
        name: "移动线上",
        value: 10,
        truevalue: 10,
    }, {
        name: "移动线下",
        value: 10,
        truevalue: 10,
    }, {
        name: "联通线上",
        value: 10,
        truevalue: -8,
        
    }, ]
    let name = data.map((item) => item.name)
    let value = data.map((item) => item.truevalue)
    let sum = value.reduce((a, b) => {
        return a + b
    })
    let color = [
        [
            ["#f24e50", "#f0de23"],
            ["#19cddd", "#19ecb6"],
            ["#29a0f9", "#5041f6"],
            ["#d819a7", "#8719e5"],
        ],
        ["rgba(24, 183, 142,0.1)",
            "rgba(1, 179, 238,0.1)",
            "rgba(22, 75, 205,0.1)",
            "rgba(52, 52, 176,0.1)"
        ]
    ]
    let series = []
    let yAxis = []
    for (let i = 0; i < data.length; i++) {
        let fx = data[i].truevalue<0?true:false
        
        series.push({
            name: "",
            type: "pie",
            clockWise: fx, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [82.5 - i * 20 + "%", 82 - i * 20 + "%"],
            center: ["50%", "50%"],
            label: {
                show: false
            },
            itemStyle: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
            },
            data: [
                {
                    value: Math.abs(data[i].value),
                    name: data[i].name,
                    itemStyle: {
                        borderWidth: 3,
                        borderRadius: 30,
                        borderColor: {
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 0,
                            // 0% 处的颜色                           // 100% 处的颜色
                            colorStops: [{
                                offset: 0,
                                color: color[0][i][0]
                            }, {
                                offset: 1,
                                color: color[0][i][1]
                            }],
                            global: false // 缺省为 false
                        },
                    }
                },
                {
                    value: Math.abs(sum - data[i].value),
                    name: "",
                    itemStyle: {
                        color: 'transparent',
                    },
                    tooltip: {
                        show: false
                    },
                    hoverAnimation: false
                }
            ]
        })
        series.push({
            name: "",
            type: "pie",
            silent: true,
            z: 1,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [82.5 - i * 20 + "%", 82 - i * 20 + "%"],
            center: ["50%", "50%"],
            label: {
                show: false
            },
            itemStyle: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                borderWidth: 5
            },
            data: [{
                value: 10,
                itemStyle: {
                    color: "#21446a",
                },
                tooltip: {
                    show: false
                },
                hoverAnimation: false
            },
            {
                value: 0,
                itemStyle: {
                    color: "rgba(0,0,0,0)",
                    borderWidth: 100,
                },
                tooltip: {
                    show: false
                },
                hoverAnimation: false
            }
            ]
        })
        yAxis.push({
            name:data[i].name,
            ratio:((data[i].value / sum) * 100).toFixed(2) + "%",
            qoq: '50%'
        })
    }
    option = {
        backgroundColor: '#012248',
        color: color[0],
        tooltip: {
            show: true,
            trigger: "item",
            formatter: "{a}<br>{b}:{c}({d}%)"
        },
        grid: {
            top: "4%",
            left: "51%",
            width: "40%",
            height: "40%",
            containLabel: false
        },
        // yAxis: [{
        //     type: "category",
        //     inverse: true,
        //     axisLine: {
        //         show: false
        //     },
        //     axisTick: {
        //         show: false
        //     },
        //     axisLabel: {
        //         // formatter: "{b}:{c}({d}%)",
        //         formatter: function (value,index) {
        //             console.log(yAxis[index])
        //             let ydataObj = `{name|${yAxis[index].name}.....}{qoq|环比${yAxis[index].qoq}}`
        //             return ydataObj
        //         },
        //         rich: {
        //             name: {
        //                 color: '#2e96ff',
        //                 fontSize: 14
        //             },
        //         },
        //         interval: 0,
        //         inside: true,
        //         textStyle: {
        //             color: function(value,index) { 
        //                 var colorList =  ["rgb(242,81,80)", "rgb(25,206,220)","rgb(43,156,249)", "rgb(212,25,170)"]
        //                 return  colorList[index]
        //             },
        //             fontSize: 14
        //         },
        //         show: true
        //     },
        //     data: yAxis
        // }],
        xAxis: [{
            show: false,
        }],
        series: series
    };