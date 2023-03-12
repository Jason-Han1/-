option = {
    backgroundColor: '#042058',
    legend: {
        top: 20,
        textStyle: {
            color: '#fff',
        },
        data: ['男', '女']
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

        formatter(pram) {
            let str = "";
            pram.forEach((i, index) => {
                if (index === 0) {
                    str = i.name + "<br>"
                }
                if (i.axisIndex === 0) {
                    str += i.marker + i.seriesName + ":" + i.value + "<br>";

                }
            })
            console.log(pram)
            return str;
        }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#363e83',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#363e83 ',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: '12',
            },
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
                    color: '#363e83',
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                // formatter:function(val){
                //     return val.split("").join("\n")
                // },
            },
            data: ['AA', 'BB', 'CC', "DD"]
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
            data: ['AA', 'BB', 'CC', "DD"]
        },

    ],
    series: [{
            name: '男',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#f7734e',
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barWidth: '10%',
            data: [8, "", 15, 10]
        }, {
            name: '女',
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#96d668',
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barGap: '100%',
            data: [8, "", 17, 26]
        }, {
            name: '女',
            xAxisIndex: 1,
            type: 'bar',
            barMaxWidthWidth: 0,
            data: ["", 0, "", ""]
        }

    ]
};


var loopIndex = 0;

setInterval(function() {
    if (loopIndex > 3) {
        loopIndex = 0;
    }
    myChart.dispatchAction({
        type: "showTip",
        seriesIndex: 0,
        dataIndex: loopIndex
    });
    if (option.series[0].data[loopIndex] === "") {
        myChart.dispatchAction({
            type: "showTip",
            seriesIndex: 2,
            dataIndex: loopIndex
        })
    }
    loopIndex++;
}, 2000);