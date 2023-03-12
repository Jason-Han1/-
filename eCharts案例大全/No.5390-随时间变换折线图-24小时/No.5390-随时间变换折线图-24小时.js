var uploadedDataURL = "/asset/get/s/data-1603420390106-AcgDIhAvF.json";

// 横坐标，一天内，一小时为间隔或者15min为间隔
var timeAxis = (type) => {
    let time = [];
    let start = new Date("2020-1-1 00:00:00");
    start = start.getTime();
    if (type === "小时") {
        let split = 60 * 60 * 1000;
        for (let i = 0; i < 24; i++) {
            time.push(moment(Number(start)).format("HH"));
            start += split;
        }
    } else {
        let split = 15 * 60 * 1000;
        for (let i = 0; i < 24 * 4; i++) {
            time.push(moment(Number(start)).format("HH:mm:ss"));
            start += split;
        }
    }
    return time;
}

var COLOR = [{
        areaColor: ["#505736", "#262c44"],
        color: "rgb(137,189,27)",
        borderColor: "rgba(137,189,2,0.27)"
    },
    {
        areaColor: ["#3F8BCA", "#262c44"],
        color: "rgb(63,139,202)",
        borderColor: "rgba(63,139,202,0.27)"
    },
    {
        areaColor: ["#3F8BCA", "#262c44"],
        color: "rgb(230,162,60)",
        borderColor: "rgba(230,162,60,0.27)"
    },
    {
        areaColor: ["#3F8BCA", "#262c44"],
        color: "rgb(245,108,108)",
        borderColor: "rgba(245,108,108,0.27)"
    }
]

$.getJSON(uploadedDataURL, (json) => {
    let legendD = ["A", "B", "C", "D"]
    let timeAxisD = timeAxis("小时")
    let series = []

    for (let i = 0; i < legendD.length; i++) {
        let data = []
        for (let j = 0; j < json.length; j++) {
            if (json[j].userType === legendD[i]) {
                data.push({
                    name: '',
                    value:json[j].num
                })
            }
        }
        // console.log(data)
        series.push({
            name: legendD[i],
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: COLOR[i].areaColor[0]
                            },
                            {
                                offset: 0.8,
                                color: COLOR[i].areaColor[1]
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)",
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: COLOR[i].color,
                    borderColor: COLOR[i].borderColor,
                    borderWidth: 12
                }
            },
            data: data
        })
    }
    let option = {
        backgroundColor: '#012248',
        tooltip: {
            trigger: "axis",
            axisPointer: {
                lineStyle: {
                    color: "#57617B"
                }
            }
        },
        legend: {
            show: true,
            icon: "circle",
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 9,
            data: legendD,
            left: "1%",
            top: "1%",
            textStyle: {
                fontSize: 14,
                color: "#F1F1F3"
            }
        },
        grid: {
            top: "6%",
            left: "3%",
            right: "3%",
            bottom: "3%",
            containLabel: true
        },
        xAxis: [{
            type: "category",
            boundaryGap: true,
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "#ffffff"
                }
            },
            axisLabel: {
                color: '#fff',
                textStyle: {
                    fontSize: 14,
                }
            },
            data: timeAxisD
        }],
        yAxis: [{
            type: "value",
            // name: '单位：Erl',
            // nameTextStyle: {
            //   color: '#ffffff',
            //   fontSize: 12,
            //   align: 'right'
            // },
            axisTick: {
                show: true
            },
            axisLine: {
                lineStyle: {
                    color: "#ffffff"
                }
            },
            axisLabel: {
                color: '#fff',
                margin: 10,
                textStyle: {
                    fontSize: 14
                },
                formatter: (val) => {
                    return val / 10000 + '万'
                }
            },
            splitLine: {
                show: false
            }
        }],
        series: series
    }
    myChart.setOption(option)
})