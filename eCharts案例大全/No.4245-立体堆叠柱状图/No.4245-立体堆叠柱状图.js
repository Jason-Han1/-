var legends = ['重大风险','较大风险','一般风险','低风险'];
var name = ['综合风险','瓦斯风险','冲击地压风险','水害风险'];
var data1 = [1, 5, 4, 1];
var data2 = [14, 12, 16, 8];
var data3 = [36, 24, 34, 28];
var data4 = [56, 33, 37, 44];
var color = [ {
    type: "linear",
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [{
            offset: 0,
            color: "#dc0707",
        },
        {
            offset: 0.5,
            color: "#dc0707",
        },
        {
            offset: 0.5,
            color: "#af0808",
        },
        {
            offset: 1,
            color: "#af0808",
        },
    ],
},{
    type: "linear",
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [{
            offset: 0,
            color: "#f67c20",
        },
        {
            offset: 0.5,
            color: "#f67c20",
        },
        {
            offset: 0.5,
            color: "#cc681e",
        },
        {
            offset: 1,
            color: "#cc681e",
        },
    ],
},{
    type: "linear",
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [{
            offset: 0,
            color: "#fde008",
        },
        {
            offset: 0.5,
            color: "#fde008",
        },
        {
            offset: 0.5,
            color: "#c7b20e",
        },
        {
            offset: 1,
            color: "#c7b20e",
        },
    ],
},{
    type: "linear",
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [{
            offset: 0,
            color: "#54b4fa",
        },
        {
            offset: 0.5,
            color: "#54b4fa",
        },
        {
            offset: 0.5,
            color: "#0592f9",
        },
        {
            offset: 1,
            color: "#0592f9",
        },
    ],
}];
var barWidth = 30;
var constData2 = [];
var constData3 = [];
var constData4 = [];
var showData = [];
for (var i = 0; i < data1.length; i++) {
    constData2[i] = data1[i] + data2[i];
    constData3[i] = data1[i] + data2[i] + data3[i];
    constData4[i] = data1[i] + data2[i] + data3[i] + data4[i];
    if (data1[i] <= 0) {
        showData.push({
            value: 0.1,
            itemStyle: {
                normal: {
                    borderColor: "#f67c20",
                    borderWidth: 2,
                    color: "#f67c20",
                },
            },
        });
    } else {
        if (data2[i] > 0) {
            showData.push({
                value: data1[i],
                itemStyle: {
                    normal: {
                        borderColor: "#f67c20", 
                        borderWidth: 2,
                        color: "#f67c20",
                    },
                },
            });
        } else {
            showData.push({
                value: data1[i],
                itemStyle: {
                    normal: {
                        borderColor: "#fde008",
                        borderWidth: 2,
                        color: "#fde008",
                    },
                },
            });
        }
    }
}
var option = {
    tooltip: {
        trigger: "axis"
    },
    legend: {
        data: legends,
        selectedMode: false,
        show: true
    },
    xAxis: {
        data: name,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#a4a4a4'
        },
    },
    yAxis: {
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine:{
            show: false
        },
        axisLabel: {
            color: "#a4a4a4"
        }
    },
    series: [{
            z: 1,
            name: legends[0],
            type: "bar",
            barWidth: barWidth,
            stack: "总量",
            color: color[0],
            data: data1,
        },
        {
            z: 2,
            name: legends[1],
            type: "bar",
            barWidth: barWidth,
            stack: "总量",
            color: color[1],
            data: data2
        },
        {
            z: 3,
            name: legends[2],
            type: "bar",
            barWidth: barWidth,
            stack: "总量",
            color: color[2],
            data: data3
        },
        {
            z: 4,
            name: legends[3],
            type: "bar",
            barWidth: barWidth,
            stack: "总量",
            color: color[3],
            data: data4
        },
        {
            z: 5,
            type: "pictorialBar",
            data: data1,
            symbol: "diamond",
            symbolOffset: ["0%", "50%"],
            symbolSize: [barWidth, 10],
            itemStyle: {
                normal: {
                    color: color[0],
                },
            },
            tooltip: {
                show: false,
            },
        },
        {
            z: 6,
            type: "pictorialBar",
            data: constData2,
            symbolPosition: "end",
            symbol: "diamond",
            symbolOffset: ["0%", "-50%"],
            symbolSize: [barWidth, 10],
            itemStyle: {
                normal: {
                    color: color[1],
                },
            },
            tooltip: {
                show: false,
            },
        },
        {
            z: 7,
            type: "pictorialBar",
            data: constData3,
            symbolPosition: "end",
            symbol: "diamond",
            symbolOffset: ["0%", "-50%"],
            symbolSize: [barWidth, 10],
            itemStyle: {
                normal: {
                    color: color[2],
                },
            },
            tooltip: {
                show: false,
            },
        },
        {
            z: 8,
            type: "pictorialBar",
            data: constData4,
            symbol: "diamond",
            symbolPosition: "end",
            symbolOffset: ["0%", "-50%"],
            symbolSize: [barWidth, 10],
            itemStyle: {
                normal: {
                    color: color[3],
                },
            },
            tooltip: {
                show: false,
            },
        },
        {
            z: 9,
            type: "pictorialBar",
            symbolPosition: "end",
            data: showData,
            symbol: "diamond",
            symbolOffset: ["0%", "-50%"],
            symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth],
            tooltip: {
                show: false,
            },
        }
    ],
};