option = {
    legend: {
        right: 40,
        top: 30,
        textStyle: {
            color: '#333',
            fontSize: 14
        },
        data: ['中招人数','参与演练人数', '部门总人数']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        // formatter: function(param) {
        //     var resultTooltip =
        //         "<div style='background:rgba(13,5,30,.3);border:1px solid rgba(255,255,255,.2);padding:5px 10px;border-radius:4px;'>" +
        //         "<div style='text-align:center;'>" + param[0].name + "</div>" +
        //         "<div style='padding-top:5px;'>" +
        //         "<span style='display:inline-block;border-radius:4px;width:20px;height:10px;background-color:rgba(61,187,255,.3);border: 2px solid #3eb6f5;'></span>" +
        //         "<span style=''> " + param[0].seriesName + ": </span>" +
        //         "<span style=''>" + param[0].value + "</span><span>%</span>" +
        //         "</div>" +
        //         "<div style='padding-top:5px;'>" +
        //         "<span style='display:inline-block;border-radius:4px;width:20px;height:10px;background-color:rgba(255,164,41,.3);border: 2px solid #ffc241;'></span>" +
        //         "<span style=''> " + param[1].seriesName + ": </span>" +
        //         "<span style=''>" + param[1].value + "</span><span>%</span>" +
        //         "</div>" +
        //         "<div style='padding-top:5px;'>" +
        //         "<span style='display:inline-block;border-radius:4px;width:20px;height:10px;background-color:rgba(61,187,255,.16);'></span>" +
        //         "<span style=''> " + param[4].seriesName + ": </span>" +
        //         "<span style=''>" + (100 - param[0].value) + "</span><span>%</span>" +
        //         "</div>" +
        //         "<div style='padding-top:5px;'>" +
        //         "<span style='display:inline-block;border-radius:4px;width:20px;height:10px;background-color:rgba(255,164,41,.16);'></span>" +
        //         "<span style=''> " + param[5].seriesName + ": </span>" +
        //         "<span style=''>" + (100 - param[1].value) + "</span><span>%</span>" +
        //         "</div>" +
        //         "</div>";
        //     return resultTooltip
        // }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#333',
            }
        },
        axisLabel: {
                textStyle: {
                  color: "#333",
                  fontSize: 16
                }
        },
        splitLine: {
            show: true,
            lineStyle: {
                 type: 'dashed',
                color: '#D9DADD',
            }
        },
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#D9DADD',
                }
            },
            axisLabel: {
                textStyle: {
                  color: "#333",
                  fontSize: 16
                }
            },
             data: ['技术部', '产品部', '设计部','测试部']
        }, 
        {
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
            data: ['技术部', '产品部', '设计部','测试部',]
        },

    ],
    series: [{
            name: '参与演练人数',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#DCE9FF',
                    barBorderRadius: 10,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barWidth: '15%',
            data: [33, 25, 34,12]
        }, {
            name: '部门总人数',
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#E9E9E9',
                    barBorderRadius: 10,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barWidth: '15%',
            barGap: '30%',
            data: [51, 34, 43,45]
        }, {
            name: '中招人数',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color:'#4F93FE',
                    barBorderRadius: 10,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#333'
                    }
                }
            },
            barWidth: '10%',
            data: [8, 15, 10,9]
        }, {
            name: '中招人数',
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    show: true,
                    color:'#4F93FE',
                    barBorderRadius: 10,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#333'
                    }
                }
            },
             barGap: '100%',
            data: [8, 15, 10,9]
        }

    ]
};