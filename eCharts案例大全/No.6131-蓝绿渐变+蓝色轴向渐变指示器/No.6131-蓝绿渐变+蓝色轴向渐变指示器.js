var xData=["2020-08-07","2020-08-08","2020-08-09","2020-08-10","2020-08-11","2020-08-12","2020-08-13","2020-08-14","2020-08-15","2020-08-16","2020-08-17","2020-08-18","2020-08-19","2020-08-20","2020-08-21","2020-08-22","2020-08-23","2020-08-24","2020-08-25","2020-08-26","2020-08-27","2020-08-28","2020-08-29","2020-08-30","2020-08-31","2020-09-01","2020-09-02","2020-09-03","2020-09-04","2020-09-05","2020-09-06"];
var lines=[["36.77","38.61","38.70","39.16","37.20","36.30","36.09","36.45","36.12","36.19","34.89","34.38","34.94","36.69","34.86","35.52","34.68","35.36","36.77","37.04","36.32","36.02","36.15","36.16","36.38","36.51","36.04","36.66","36.73","36.68","38.51"],["37.59","38.49","38.38","38.12","36.37","37.61","36.94","36.57","36.32","37.04","36.68","34.44","35.22","36.45","35.02","35.01","34.95","36.48","36.31","37.53","37.01","36.63","36.93","36.04","37.01","36.81","35.53","37.24","36.28","38.05","39.05"]];
var attrs=[{name:"预售价", unit:"元/公斤"},{name:"成交价", unit:"元/公斤"}];
option = {
        tooltip: {
            trigger: 'axis',
            backgroundColor:'none',
            padding:5,
            formatter: function(param) {
                var resultTooltip = "";
                resultTooltip =
                    "<div style='background:rgba(13,5,30,.6);border:1px solid rgba(255,255,255,.2);padding:5px;border-radius:3px;'>" +
                    "<div style='text-align:center;'>" + param[0].name + "</div>" +
                    "<div style='padding-top:5px;'>" +
                    "<span style='display: inline-block; width: 4px; height:10px; border-radius: 5px;background-color: " + param[0].color + ";'></span>" +
                    "<span style=''> " + param[0].seriesName + ": </span>" +
                    "<span style='color:" + param[0].color + "'>" + param[0].value + "</span></span><span>"+attrs[0].unit+"</span>" +
                    "<div style='padding-top:2px;'>" +
                    "<span style='display: inline-block; width: 4px; height:10px; border-radius: 5px;background-color: " + param[1].color + ";'></span>" +
                    "<span style=''> " + param[1].seriesName + ": </span>" +
                    "<span style='color:" + param[1].color + "'>" + param[1].value + "</span><span>"+attrs[1].unit+"</span>" +
                    "</div>" +
                    "</div>";
                return resultTooltip
            }
        },
        grid: {
            left: '10%',
            top:'8%',
            right: '5%',
            bottom: '18%',
        },
        legend: {
            show:true,
            icon: 'roundRect',
            orient: 'horizontal',
            top: '0.5%',
            right: '8%',
            itemWidth: 18.5,
            itemHeight: 6,
            itemGap: 30,
            textStyle: {
                // color: '#FFFFFF'
                color: '#C9C8CD'
            }
        },
        xAxis: [{
            type: 'category',
            // data: ['2019-01-01', '2019-02-01', '2019-03-01', '2019-04-01', '2019-05-01', '2019-06-01', '2019-07-01', '2019-08-01', '2019-09-01', '2019-10-01', '2019-11-01', '2019-12-01', '2020-01-01', '2020-02-01', '2020-03-01', '2020-04-01'],
            data:xData,
            axisLabel: {
                show: true,
                fontSize:9,
                textStyle: {
                    color: "#C9C8CD" //X轴文字颜色
                },
                formatter:function(value){
                    var str = "";
                    str += value.substring(0, 4) + "\n";
                    str += value.substring(5, 10);
                    return str;
                }
            },
            axisLine: {
                show: false //不显示x轴
            },
            axisTick: {
                show: false //不显示刻度
            },
            boundaryGap: false,
            splitLine: {
                show: true,
                width: 0.08,
                lineStyle: {
                    type: "solid",
                    color: "#03202E"
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
                            color: 'rgba(18,155,249,0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(18,155,249,1)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 5
                }
            },

        }],
        yAxis: [{
            type: 'value',
            scale:true,//坐标轴起点不限制0
            axisLabel: {
                show: true,
                textStyle: {
                    fontSize:9,
                    color: "#C9C8CD" //X轴文字颜色
                }
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
            name: attrs[0].name,
            type: 'line',
            // data: [10, 18, 5, 23, 14, 40, 58, 50, 45, 56, 53, 47, 45, 65, 55, 50],
            data:lines[0],
            lineStyle: {
                    normal: {
                        width: 3.5,
                        // color: '#3374EB',
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: '#00CA98' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#66FF66' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        },
                        shadowColor: '#66FF66',
                        shadowBlur: 4,
                        shadowOffsetY: 3
                    }
                },
                symbol: 'emptyCircle',
                showSymbol: false,
                itemStyle: {
                    normal: {
                        color: '#14CC8F',
                        shadowColor: '#14CC8F',
                        shadowBlur: 2,
                        borderWidth: 2,
                        borderColor: "#F8F8FF"
                    }
                },
                smooth: true
        },
            {
                name: attrs[1].name,
                type: 'line',
                // data: [23, 60, 20, 36, 23, 58, 81, 76, 68, 76, 73, 68, 65, 85, 75, 70],
                data:lines[1],
                lineStyle: {
                    normal: {
                        width: 3.5,
                        // color: '#3374EB',
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: '#1166E7' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#139EFD' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        },
                        shadowColor: '#139EFD',
                        shadowBlur: 4,
                        shadowOffsetY: 3
                    }
                },
                symbol: 'emptyCircle',
                showSymbol: false,
                itemStyle: {
                    normal: {
                        color: '#0099FF',
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