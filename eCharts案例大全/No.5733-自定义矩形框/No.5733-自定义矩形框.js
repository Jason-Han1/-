option = {

    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['1号传感器', '2号传感器', '3号传感器', '4号传感器', '5号传感器'],
        show: true,
    },
    grid: {
        left: '8%',
        right: '8%',
        top: '10%',
        containLabel: true
    },

    xAxis: {
        type: "category",
        boundaryGap: false,
    },
    yAxis: {
        type: 'value'
    },
    series: [{
            name: '1号传感器',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [
                [0, 120],
                [1, 132],
                [2, 101],
                [3, 134],
                [4, 90],
                [5, 230],
                [6, 210]
            ]
        },
        {
            name: '2号传感器',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [
                [0, 220],
                [1, 182],
                [2, 191],
                [3, 234],
                [4, 290],
                [5, 330],
                [6, 310]
            ]
        },
        {
            name: '3号传感器',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [
                [0, 150],
                [1, 232],
                [2, 201],
                [3, 154],
                [4, 190],
                [5, 330],
                [6, 410]
            ]
        },
        {
            name: '4号传感器',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [
                [0, 320],
                [1, 332],
                [2, 301],
                [3, 334],
                [4, 390],
                [5, 330],
                [6, 320]
            ]
        },
        {
            name: '5号传感器',
            type: 'line',
            stack: '总量',
            smooth: true,
            data: [
                [0, 820],
                [1, 932],
                [2, 901],
                [3, 934],
                [4, 1290],
                [5, 1330],
                [6, 1320]
            ]
        },
        {
            name: "自定义矩形框",
            type: "custom",
            color: "#000",
            renderItem: function(params, api) {
                var startPoint = api.coord([api.value(0), api.value(1)]),
                    endPoint = api.coord([api.value(2), api.value(3)]);
                return {
                    type: "group",
                    children: [{
                            type: "rect",
                            shape: {
                                x: startPoint[0],
                                y: startPoint[1],
                                width: endPoint[0] - startPoint[0],
                                height: endPoint[1] - startPoint[1]
                            },
                            style: api.style({
                                fill: "transparent",
                                stroke: api.style().fill,
                                lineWidth: 2
                            })
                        },
                        {
                            type: "text",
                            style: {
                                text: `[${api.value(0).toFixed(2)},${api.value(1).toFixed(2)}]`,
                                textAlign: "center",
                                textVerticalAlign: "bottom"
                            },
                            position: [startPoint[0], startPoint[1]]
                        },
                        {
                            type: "text",
                            style: {
                                text: `[${api.value(2).toFixed(2)},${api.value(3).toFixed(2)}]`,
                                textAlign: "center",
                                textVerticalAlign: "top"
                            },
                            position: [endPoint[0], endPoint[1]]
                        }
                    ]
                };
            },
            data: [
                [1, 1500, 3, 1000]
            ]
        }
    ]
};
let instance = echarts.getInstanceByDom(document.getElementById("chart-panel"));