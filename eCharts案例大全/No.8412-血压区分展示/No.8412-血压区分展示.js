var option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: [{
        data: ["血样饱和度"]
    }],
    xAxis: {
        type: "time",
        boundaryGap: 'false',
        axisLabel: {}
    },
    yAxis: {
        type: value
    },
    series: [{
        name: "血样饱和度",
        type: "line",
        smooth: 'true',
        animation: 'false',
        data: [{
            value: ["2020-03-20 00:00:00", "2"]
        }, {
            value: ["2020-03-20 01:00:00", ""]
        }, {
            value: ["2020-03-20 02:00:00", ""]
        }, {
            value: ["2020-03-20 03:00:00", "3"]
        }, {
            value: ["2020-03-20 04:00:00", ""]
        }, {
            value: ["2020-03-20 05:00:00", ""]
        }, {
            value: ["2020-03-20 06:00:00", ""]
        }, {
            value: ["2020-03-20 07:00:00", "4"]
        }, {
            value: ["2020-03-20 08:00:00", ""]
        }, {
            value: ["2020-03-20 09:00:00", ""]
        }, {
            value: ["2020-03-20 10:00:00", ""]
        }, {
            value: ["2020-03-20 11:00:00", ""]
        }, {
            value: ["2020-03-20 12:00:00", ""]
        }, {
            value: ["2020-03-20 13:00:00", ""]
        }, {
            value: ["2020-03-20 14:00:00", ""]
        }, {
            value: ["2020-03-20 15:00:00", ""]
        }, {
            value: ["2020-03-20 16:00:00", ""]
        }, {
            value: ["2020-03-20 17:00:00", ""]
        }, {
            value: ["2020-03-20 18:00:00", ""]
        }, {
            value: ["2020-03-20 19:00:00", ""]
        }, {
            value: ["2020-03-20 20:00:00", ""]
        }, {
            value: ["2020-03-20 21:00:00", ""]
        }, {
            value: ["2020-03-20 22:00:00", ""]
        }, {
            value: ["2020-03-20 23:00:00", ""]
        }],
        connectNulls: 'true'
    }],
    dataZoom: {
        type: "inside",
        xAxisIndex: [0],
        start: 40,
        end: 80,
        filterMode: 'none',
        showDataShadow: 'false',
        height: 15,
        handleSize: "0"
    }
}