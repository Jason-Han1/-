option = {
    tooltip: {

        trigger: 'axis',
        formatter: function(param) {
            console.log(param);
            var resultTooltip = "";
            resultTooltip =
                "<div style='background:rgba(13,5,30,.6);border:1px solid rgba(255,255,255,.2);padding:5px;border-radius:3px;'>" +
                "<div style='text-align:center;'>" + param[0].name + "</div>" +
                "<div style='padding-top:5px;'>" +
                "<span style='display: inline-block; width: 4px; height:10px; border-radius: 5px;background-color: " + param[0].color + ";'></span>" +
                "<span style=''> " + param[0].seriesName + ": </span>" +
                "<span style='color:" + param[0].color + "'>" + param[0].value + "</span></span><span>元/公斤</span>" +
                "<div style='padding-top:2px;'>" +
                "<span style='display: inline-block; width: 4px; height:10px; border-radius: 5px;background-color: " + param[1].color + ";'></span>" +
                "<span style=''> " + param[1].seriesName + ": </span>" +
                "<span style='color:" + param[1].color + "'>" + param[1].value + "</span><span>元/公斤</span>" +
                "</div>" +
                "</div>";
            return resultTooltip
        }
    },
    grid: {
        left: '5%',
        right: '1%',
        bottom: '5%',
    },
    legend: {
        icon: 'roundRect',
        orient: 'horizontal',
        top: '2%',
        right: '15%',
        itemWidth: 35,
        itemHeight: 9,
        itemGap: 100,
        // textStyle: {
        //     color: '#FFFFFF'
        // }
    },
    xAxis: [{
        type: 'category',
        data: ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11', '2019-12', '2020-01', '2020-02', '2020-03', '2020-04'],
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false, //不显示刻度
        },
        boundaryGap: false,
        splitLine: {
            show: true,
            width: 0.05,
            lineStyle: {
                type: "solid",
                color: "#4B90BD"
            }
        },
        axisPointer: {//轴指示器
            type: 'shadow',
            z: 1,
            shadowStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(255,79,79,0)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(255,79,79,1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowBlur: 10
            }
        },

    }],
    yAxis: [{
        type: 'value',
        axisLabel:{
          show:true,  
        },

        splitLine: {
            show: false,

        },
        axisTick: {
            show: false, //不显示刻度
        },
        axisLine: {
            show: false,
        },
        nameTextStyle: {
            color: "#FFFFFF"
        },
        splitArea: {
            show: false
        }
    }],
    series: [{
            name: '预售价',
            type: 'line',
            data: [10, 18, 5, 23, 14, 40, 58, 50, 45, 56, 53, 47, 45, 65, 55, 50],
            lineStyle: {

                normal: {
                    width: 8,
                    // color: '#FF4F4F',
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(255,79,79, 1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(255,79,79, 0.5)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    shadowColor: 'rgba(255,79,79, 1)',
                    shadowBlur: 12,
                    shadowOffsetY: 6
                }
            },
            symbol: 'emptyCircle',
            showSymbol: false, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示。
            itemStyle: {
                normal: {
                    color: '#FF4F4F',
                    shadowColor: 'rgba(255,79,79, 1)',
                    shadowBlur: 2,
                    borderWidth: 2,
                    borderColor: "#F8F8FF",
                }
            },

            smooth: true
        },
        {
            name: '成交价',
            type: 'line',
            data: [23, 60, 20, 36, 23, 58, 81, 76, 68, 76, 73, 68, 65, 85, 75, 70],
            lineStyle: {
                normal: {
                    width: 8,
                    // color: '#3374EB',
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(51,116,235,1)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(51,116,235,0.5)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    shadowColor: 'rgba(51,116,235,1)',
                    shadowBlur: 12,
                    shadowOffsetY: 6
                }
            },
            symbol: 'emptyCircle',
            showSymbol: false,
            itemStyle: {
                normal: {
                    color: '#3374EB',
                    shadowColor: 'rgba(51,116,235, 1)',
                    shadowBlur: 2,
                    borderWidth: 2,
                    borderColor: "#F8F8FF"
                }
            },
            smooth: true
        }
    ]
};