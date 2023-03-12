var data_x=['01-01', '01-02', '01-03', '01-04', '01-05', '01-06', '01-07'];
var data_y1=[120, 200, 150, 80, 70, 110, 130];
var data_y2=[1200000, 1080000, 600000, 900000, 3780000, 2640000, 1800000];

function formatDuring(mss) {
    var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = (mss % (1000 * 60)) / 1000;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return hours + ":" + minutes + ":" + seconds;
}

option = {
    legend: {
        type: "plain",
        data: [{
            name: '观看人次',
            icon: 'rect',
            itemWidth: 12,
            itemHeight: 6,
            textStyle: {
                color: '#666',
                fontSize: 12,
            }
        }, {
            name: '观看时长',
            icon: 'rect',
            itemWidth: 12,
            itemHeight: 4,
            textStyle: {
                color: '#666',
                fontSize: 12,
            }
        }],
        show: true,
        bottom: 0
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: 'line',
            lineStyle: {
                color: "#BFBFBF"
            }
        },
        formatter: function(params, ticket, callback) {

            var res = params[0].name;

            for (var i = 0, l = params.length; i < l; i++) {
                if (params[i].seriesType === 'line') {
                    res += '<br/>' + params[i].seriesName + ' : ' + formatDuring(params[i].value);
                } else {
                    res += '<br/>' + params[i].seriesName + ' : ' + params[i].value + "人次";
                }
            }
            return res;

        }
    },
    xAxis: [{
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: "#BFBFBF"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: "#333"
        },
        data: data_x
    }],
    yAxis: [{
        type: 'value',
        name: "人次",
        position: "left",
        nameLocation: "end",
        nameTextStyle: {
            color: "#333",
            align: "left",
            padding: [0, 0, 0, -32],
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: "#333"
        },
        splitLine: {
            lineStyle: {
                color: "#E9E9E9",
                type: "dashed"
            }
        }
    }, {
        type: 'value',
        name: '时长',
        position: "right",
        nameLocation: "end",
        nameTextStyle: {
            color: "#333",
            align: "left",
        },
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            color: "#333",
            formatter: function(data) {
                return formatDuring(data)
            } //以百分比显示
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        name: '观看人次',
        data: data_y1,
        type: 'bar',
        barWidth: "24",
        itemStyle: {
            color: "#1891FF"
        }
    }, {
        name: '观看时长',
        yAxisIndex: 1, //图层层级，重要，没有它就不会展示Y轴了
        data: data_y2,
        type: 'line',
        lineStyle: {
            width: 3,
            color: "#FBCD14"
        },
        itemStyle: {
            color: "#FBCD14",
            opacity: 1
        }
    }]
};