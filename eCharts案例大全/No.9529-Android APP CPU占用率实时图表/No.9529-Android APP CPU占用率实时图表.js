var legendData = ['系统总占用率', 'App占用率'];
var time = 0;
var zoomStart = 0;
var zoomEnd = 100;
var xAxisData = [];
var seriesData = [{
        name: '系统总占用率',
        type: 'line',
        lineStyle: {
            width: 1
        },
        showSymbol: false,
        smooth: true, //是否平滑显示折现
        data: []
    },
    {
        name: 'App占用率',
        type: 'line',
        lineStyle: {
            width: 1
        },
        showSymbol: false,
        smooth: true, //是否平滑显示折现
        data: []
    }
];
option = {
    color: ['#327bfa', '#62d56b'],
    title: {
        show: false,
        text: 'CPU占用率',
        x: '50%',
        y: '5%',
        textAlign: "center",
        textStyle: {
            color: '#bac7e5',
            fontSize: '30',
            fontWeight: 'normal'
        }

    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#282d3b',
        textStyle: {
            color: '#bac7e5'
        }
    },
    legend: {
        bottom: '0',
        data: legendData,
        textStyle: {
            color: '#bac7e5'
        },
        icon: 'rect',
        itemWidth: 12,
        itemHeight: 12
    },
    grid: {
        top: '30%',
        left: '5%',
        right: '5%',
        bottom: '30%',
        containLabel: true
    },
    toolbox: {
        show: false
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#7c88a7'
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            color: '#bac7e5'
        },
        data: xAxisData
    },
    dataZoom: [{
        type: "slider",
        /*类型*/
        xAxisIndex: 0,
        /*对应的轴*/
        bottom: "23%",
        /*位置，定位*/
        start: 0,
        /*开始*/
        end: 100,
        /*结束*/
        handleIcon: "M0,0 v9.7h5 v-9.7h-5 Z",
        handleStyle: {
            /*手柄的样式*/
            color: "#00b0ff",
            borderColor: "#00b0ff"
        },
        backgroundColor: "#233239",
        borderColor: "#233239",
        /*背景 */
        dataBackground: {
            /*数据背景*/
            lineStyle: {
                color: "#000000"
            },
            areaStyle: {
                color: "#ddd"
            }
        },
        fillerColor: "rgba(31,178,251,0.2)",
        /*被start和end遮住的背景*/
        labelFormatter: function(value, params) {
            /*拖动时两端的文字提示*/
            var str = "";
            if (params.length > 5) {
                str = params.substring(0, 5) + "…";
            } else {
                str = params;
            }
            return str;
        },
        textStyle: {
            color: '#bac7e5'
        }
    }],
    yAxis: {
        type: 'value',
        name: '占用率',
        nameTextStyle: {
            color: '#bac7e5'
        },
        max: 120,
        axisTick: {
            show: true
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#7c88a7'
            }
        },
        axisLabel: {
            color: '#bac7e5'
        },
    },
    backgroundColor: '#233239',
    series: seriesData
};

function timef() {
    var str;
    time++;
    var m = Math.round(time / 60);
    str = m < 10 ? '0' + m : m;
    str += ':';
    var s = time % 60;
    str += s < 10 ? '0' + s : s;
    return str;
}

function random() {
    var value = (Math.random() * 100).toFixed(2);
    return value > 30 && value < 50 ? value : random();
}

app.timeTicket = setInterval(function() {
    var value = parseInt(Math.random() * 100);
    setPercent(value);
}, 1000);

myChart.on('dataZoom', function(event) {
    if (event.batch) {
        zoomStart = event.batch[0].start;
        zoomEnd = event.batch[0].end;
    } else {
        zoomStart = event.start;
        zoomEnd = event.end;
    };
});

function setPercent(p) {
    option.xAxis.data.push(timef());
    var allv = random();
    option.series[0].data.push(allv);
    option.series[1].data.push((allv * 0.5).toFixed(2));
    option.dataZoom[0].start = zoomStart;
    option.dataZoom[0].end = zoomEnd;
    myChart.setOption(option);
}