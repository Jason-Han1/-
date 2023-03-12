var startTime ='20:00:00';
var endTime='00:00:00';
var dataArr = [41, 50, 50, 51, 47, 51, 50, 51, 52, 51, 51, 51, 48,
    42, 44, 48, 50, 47, 41, 50, 51, 52, 51, 49
];
var xData = ['08:00:00', '09:00:00', '10:00:00', '11:00:00', '12:00:00', '13:00:00', '14:00:00', '15:00:00', '16:00:00', '17:00:00', '18:00:00', '19:00:00', '20:00:00',
    '21:00:00', '22:00:00', '23:00:00', '00:00:00', '01:00:00', '02:00:00', '03:00:00', '04:00:00', '05:00:00', '06:00:00', '07:00:00'
];
var nowYdata = [];
var seriesArr = [{
    name: "a",
    type: 'line',
    symbolSize: 0,
    // color: "lightGreen", //折线图颜色,搭配markArea为面积图
    lineStyle: { //折线的颜色
        color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1, [{
                offset: 0,
                color: '#fff'
            }, {
                offset: 0.5,
                color: 'rgba(43, 255, 123,0.5)'
            }, {
                offset: 1,
                color: 'rgb(43, 255, 123)'
            }]
        )
    },
    smooth: false, //是否平滑处理值0-1,true相当于0.5
    data: dataArr,
    markArea: {
        animation: true,
        itemStyle: { //全局的
            normal: {
                color: 'rgba(187, 97, 85,0.2)'
            }
        },
        data: [
            [{
                xAxis: startTime || "",

            }, {
                xAxis: endTime || "",
            }]
        ]
    }
},];
function getNowYData(startTime, endTime, xData) {
            var start = xData.indexOf(startTime);
            var end = xData.indexOf(endTime);
            var number = end - start + 1;
            var nowyData = [];
            for (var i = 0; i < xData.length; i++) {
                if (i < start || i > end) {
                    nowyData.push(null)
                } else {
                    var randomNum = getRandomNumberByRange(0, 10);
                    nowyData.push(40 + randomNum);
                }
            }
            return nowyData;
        };

        function getRandomNumberByRange(start, end) {
            return Math.floor(Math.random() * (end - start) + start)
}

if (startTime && endTime) {
    // 根据选择的时间计算dataZoom显示的起始位置
    var start = (xData.indexOf(startTime) / xData.length) * 100 - 5;
    var end = (xData.indexOf(endTime) / xData.length) * 100 + 10;
    //点击之后动态添加有一条曲线
    nowYdata = getNowYData(startTime, endTime, xData); //改曲线的纵坐标
    var nowSeries = {
        name: "b",
        type: 'line',
        symbolSize: 0,
        color: "red", //折线图颜色,搭配markArea为面积图
        lineStyle: { //折线的颜色
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                    offset: 0,
                    color: '#fff'
                }, {
                    offset: 0.5,
                    color: 'rgba(254, 13, 13,0.8)'
                }, {
                    offset: 1,
                    color: 'red'
                }]
            )
        },
        smooth: false, //是否平滑处理值0-1,true相当于0.5
        data: nowYdata,
    };
    seriesArr.push(nowSeries);
};
  option = {
     backgroundColor:'#000',
    title: {
        text: "",
    },
    tooltip: {
        trigger: 'axis',
        textStyle: {
            fontSize: 20
        },
        formatter: function(params) {
            var str = params[0].axisValue + "<br/>";
            for (var i = 0; i < params.length; i++) {
                if (params[i].value) {
                    str += '<span>' + params[i].seriesName + "</span><br/><span style=font-size:25px;color:#28fa91;>" + params[i].value + "Hz </span><br/>";
                }

            };
            return str;
        }
    },
    grid: {
        left: "5%",
        right: "3%",
        top: "10%",
        bottom: "10%"
    },
    color: ["rgb(43, 255, 123)", 'red'], //影响图例的颜色
    legend: {
        show: true,
        icon: "line",
        itemWidth: 20,
        itemHeight: 5,
        textStyle: {
            fontSize: 20,
            color: "#fff"
        },
        data: ["a", "b"],
    },
    xAxis: [{
        name: '',
        type: 'category',
        boundaryGap: false,
        axisLine: { //设置X轴的颜色
            lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        data: xData
    }],
    yAxis: [{
        name: 'Hz',
        type: 'value',
        axisLine: { //设置y轴的颜色
            lineStyle: {
                color: '#fff'
            }
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
            }
        },
        splitLine: {
            show: false
        },
        min: 39.0,
        max: 52.0
    }],
    dataZoom: [{
        type: 'slider', //图表下方的伸缩条
        show: true, //是否显示
        realtime: true, //拖动时，是否实时更新系列的视图
        filterMode: 'filter',
        start: start || 0,
        end: end || 100,

    }],
    series: seriesArr
};