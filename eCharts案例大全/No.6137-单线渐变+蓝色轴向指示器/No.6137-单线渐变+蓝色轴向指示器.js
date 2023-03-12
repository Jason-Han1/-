attr=[{name:"出栏均重", unit:"公斤"}]
xData=["2020-08-07","2020-08-08","2020-08-09","2020-08-10","2020-08-11","2020-08-12","2020-08-13","2020-08-14","2020-08-15","2020-08-16","2020-08-17","2020-08-18","2020-08-19","2020-08-20","2020-08-21","2020-08-22","2020-08-23","2020-08-24","2020-08-25","2020-08-26","2020-08-27","2020-08-28","2020-08-29","2020-08-30","2020-08-31","2020-09-01","2020-09-02","2020-09-03","2020-09-04","2020-09-05"];
line=["118.56","115.25","121.54","125.35","115.32","115.68","121.16","117.07","124.79","114.81","114.12","104.99","101.56","109.68","112.12","115.09","107.77","113.94","123.06","129.50","122.37","118.25","114.83","117.29","113.04","122.08","127.52","123.33","120.11","114.49"];
var option = {
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'none',
        padding: 5,
        formatter: function(param) {
            var resultTooltip = "";
            resultTooltip =
                "<div style='background:rgba(13,5,30,.6);border:1px solid rgba(255,255,255,.2);padding:5px;border-radius:3px;'>" +
                "<div style='text-align:center;'>" + param[0].name + "</div>" +
                "<div style='padding-top:5px;'>" +
                "<span style='display: inline-block; width: 4px; height:10px; border-radius: 5px;background-color: " + param[0].color + ";'></span>" +
                "<span style=''> " + param[0].seriesName + ": </span>" +
                "<span style='color:" + param[0].color + "'>" + param[0].value + "</span></span><span>" + attr[0].unit + "</span>" +
                "</div>";
            return resultTooltip
        }
    },
    grid: {
        left: '10%',
        top: '8%',
        right: '5%',
        bottom: '19%',
    },
    legend: {
        show: false,
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
        data:xData,
        axisLabel: {
            show: true,
            fontSize: 9,
            textStyle: {
                color: "#C9C8CD" //X轴文字颜色
            },
            formatter: function(value) {
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
        scale: true, //坐标轴起点不限制0
        axisLabel: {
            show: true,
            textStyle: {
                fontSize: 9,
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
        name: attr[0].name,
        type: 'line',
        // data: [10, 18, 5, 23, 14, 40, 58, 50, 45, 56, 53, 47, 45, 65, 55, 50],
        data:line,
        lineStyle: {

            normal: {
                width: 3.5,
                // color: '#FF4F4F',
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 0,
                    colorStops: [{
                        offset: 0,
                        color: '#0066FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#0099FF' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                shadowColor: '#0099FF',
                shadowBlur: 4,
                shadowOffsetY: 2
            }
        },
        symbol: 'emptyCircle',
        showSymbol: false, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示。
        itemStyle: {
            normal: {
                color: '#0099FF',
                shadowColor: 'rgba(0,153,255, 0.9)',
                shadowBlur: 2,
                borderWidth: 2,
                borderColor: "#F8F8FF",
            }
        },

        smooth: true
    }]
};