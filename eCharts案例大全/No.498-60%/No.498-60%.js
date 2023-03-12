var newchartName = ["万州", "忠县", "石柱"],newchartValue1 = ["41", "51", "29"],newchartValue2 = ["83", "81", "20"];
option = {
    backgroundColor: 'rgba(7,40,27,.85)',
    // legend: {
    //   data: ['未开工', '未完成'],
    //   icon: 'rect',
    //   top: 5,
    //   right: 10,
    //   textStyle: {
    //     color: '#fff',
    //     fontWeight: 'normal',
    //     fontSize: 12,
    //   }
    // },
    //提示框
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(param) {
            var resultTooltip =
                "<div style='background:rgba(13,5,30,.3);border:1px solid rgba(255,255,255,.2);padding:5px 10px;border-radius:4px;'>" +
                "<div style='text-align:center;'>" + param[0].name + "</div>" +
                "<div style='padding-top:5px;'>" +
                "<span style='display:inline-block;border-radius:4px;width:20px;height:10px;background-color:rgba(61,187,255,.3);border: 2px solid #3eb6f5;'></span>" +
                "<span style=''> " + param[0].seriesName + ": </span>" +
                "<span style=''>" + param[0].value + "</span><span>%</span>" +
                "</div>" +
                "<div style='padding-top:5px;'>" +
                "<span style='display:inline-block;border-radius:4px;width:20px;height:10px;background-color:rgba(255,164,41,.3);border: 2px solid #ffc241;'></span>" +
                "<span style=''> " + param[1].seriesName + ": </span>" +
                "<span style=''>" + param[1].value + "</span><span>%</span>" +
                "</div>" +
                "<div style='padding-top:5px;'>" +
                "<span style='display:inline-block;border-radius:4px;width:20px;height:10px;background-color:rgba(61,187,255,.16);'></span>" +
                "<span style=''> " + param[4].seriesName + ": </span>" +
                "<span style=''>" + (100 - param[0].value) + "</span><span>%</span>" +
                "</div>" +
                "<div style='padding-top:5px;'>" +
                "<span style='display:inline-block;border-radius:4px;width:20px;height:10px;background-color:rgba(255,164,41,.16);'></span>" +
                "<span style=''> " + param[5].seriesName + ": </span>" +
                "<span style=''>" + (100 - param[1].value) + "</span><span>%</span>" +
                "</div>" +
                "</div>";
            return resultTooltip
        }
    },
    title: [{
            text: (100 - newchartValue1[0]) + '%',
            textAlign: 'center',
            textStyle: {
                color: "rgba(61,187,255,.3)",
                fontSize: 12
            },
            top: '20%',
            left: '19%'
        },
        {
            text: (100 - newchartValue2[0]) + '%',
            textAlign: 'center',
            textStyle: {
                color: "rgba(255,146,41,.3)",
                fontSize: 12
            },
            top: '20%',
            left: '24%'
        },
        {
            text: (100 - newchartValue1[1]) + '%',
            textAlign: 'center',
            textStyle: {
                color: "rgba(61,187,255,.3)",
                fontSize: 12
            },
            top: '20%',
            left: '48%'
        },
        {
            text: (100 - newchartValue2[1]) + '%',
            textAlign: 'center',
            textStyle: {
                color: "rgba(255,146,41,.3)",
                fontSize: 12,
            },
            top: '20%',
            left: '53%'
        },
        {
            text: (100 - newchartValue1[2]) + '%',
            textAlign: 'center',
            textStyle: {
                color: "rgba(61,187,255,.3)",
                fontSize: 12
            },
            top: '20%',
            left: '77%'
        },
        {
            text: (100 - newchartValue2[2]) + '%',
            textAlign: 'center',
            textStyle: {
                color: "rgba(255,146,41,.3)",
                fontSize: 12
            },
            top: '20%',
            left: '82.5%'
        }
    ],
    "grid": {
        "top": "25%",
        "left": "5%",
        "bottom": "10%",
        "right": "5%",
        "containLabel": true
    },
    animation: false,
    "xAxis": [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0,228,255,1)',
            }
        },
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: 12,
            }
        },
        data: newchartName
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
        data: newchartName
    }],
    "yAxis": [{
        show: false,
        "type": "value",
        "axisLabel": {
            "textStyle": {
                "color": "#fff"
            },
        },
        "splitLine": {
            "lineStyle": {
                "color": "rgba(0,228,255,1)"
            }
        },
        "axisLine": {
            "show": false
        }
    }],
    "series": [{
            name: '未开工',
            type: 'pictorialBar',
            symbolSize: [18, 10],
            symbolOffset: ["-65%", -5],
            symbolPosition: 'end',
            z: 12,
            color: "#3eb6f5",
            zlevel: 2,
            data: newchartValue1
        },
        {
            name: '未完成',
            type: 'pictorialBar',
            symbolSize: [18, 10],
            symbolOffset: ["65%", -5],
            symbolPosition: 'end',
            z: 12,
            color: "#ffc241",
            zlevel: 2,
            data: newchartValue2
        },

        {
            name: '未开工',
            type: 'bar',
            barWidth: "18",
            itemStyle: {
                color: "rgba(61,187,255,.16)",
                borderColor: "#3eb6f5",
                borderWidth: 1,
                borderType: 'solid',
            },
            "label": {
                show: true,
                formatter: '{c}' + '%',
                "position": "left",
                color: 'rgba(119,167,255,1)',
                fontSize: 12,
                textAlign: 'center'
            },
            zlevel: 2,
            data: newchartValue1
        },
        {
            name: '未完成',
            type: 'bar',
            barWidth: "18",
            itemStyle: {
                color: "rgba(255,164,41,.16)",
                borderColor: "#ffc241",
                borderWidth: 1,
                borderType: 'solid',
            },
            "label": {
                show: true,
                formatter: '{c}' + '%',
                "position": "right",
                color: 'rgba(255,228,59,1)',
                fontSize: 12,
                textAlign: 'center'
            },
            zlevel: 2,
            data: newchartValue2
        },
        {
            name: '已开工',
            type: 'bar',
            xAxisIndex: 1,
            barGap: '50%',
            data: [100, 100, 100],
            zlevel: 1,
            barWidth: 16,
            itemStyle: {
                normal: {
                    color: 'rgba(61,187,255,.16)'
                }
            }
        }, {
            name: '已完成',
            type: 'bar',
            xAxisIndex: 1,
            barGap: '45%',
            data: [100, 100, 100],
            zlevel: 1,
            barWidth: 16,
            itemStyle: {
                normal: {
                    color: 'rgba(255,164,41,.16)'
                }
            }
        }
    ]
}