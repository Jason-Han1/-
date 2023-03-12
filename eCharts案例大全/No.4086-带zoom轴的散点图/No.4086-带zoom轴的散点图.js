let sourceData = [{
        prop_name: "IP联名",
        prop_value: "无",
        num: "2760270",
        itemCount: "288913",
        prop: "IP联名 / 无",
    },
    {
        prop_name: "长度",
        prop_value: "常规",
        num: "2193954",
        itemCount: "225673",
        prop: "长度 / 常规",
    },
    {
        prop_name: "风格",
        prop_value: "其它或未提及",
        num: "2096845",
        itemCount: "206479",
        prop: "风格 / 其它或未提及",
    },
    {
        prop_name: "松紧度",
        prop_value: "常规",
        num: "1835864",
        itemCount: "179823",
        prop: "松紧度 / 常规",
    },
    {
        prop_name: "图案",
        prop_value: "纯色",
        num: "1381297",
        itemCount: "148048",
        prop: "图案 / 纯色",
    },
    {
        prop_name: "袖型",
        prop_value: "常规",
        num: "1313665",
        itemCount: "145270",
        prop: "袖型 / 常规",
    },
    {
        prop_name: "袖长",
        prop_value: "长袖",
        num: "1228169",
        itemCount: "149488",
        prop: "袖长 / 长袖",
    },
    {
        prop_name: "主要颜色",
        prop_value: "白",
        num: "959038",
        itemCount: "80275",
        prop: "主要颜色 / 白",
    },
    {
        prop_name: "领型",
        prop_value: "其它",
        num: "905912",
        itemCount: "71932",
        prop: "领型 / 其它",
    },
];

let seriesData = sourceData.map(function(item, index, array) {
    return {
        name: item["prop"],
        //实际点的参数
        value: [item["num"], item["itemCount"]],
    };
});

let computeServicesAvgLine = function() {
    let sum = 0;
    sourceData.forEach(function(item) {
        sum += parseInt(item["itemCount"]);
    });
    return sum / sourceData.length;
};

let computeSalesAvgLine = function() {
    let sum = 0;
    sourceData.forEach(function(item) {
        sum += parseInt(item["num"]);
    });
    return sum / sourceData.length;
};
let avg = {
    servicesAvgLine: computeServicesAvgLine(),
    salesAvgLine: computeSalesAvgLine(),
};

let seriesLabel = {
    normal: {
        show: true,
        position: "inside",
        offset: [0, -50],
        padding: [0, 7],
        fontSize: 12,
        color: "#000",
        textAlign: "left",
        textBorderColor: "#333",
        textBorderWidth: 0,
        backgroundColor: "#fff",
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 4,
        formatter: function(obj) {
            if (obj.componentType == "series") {
                return [
                    obj.name,
                    "销量 " + obj.data.value[0],
                    "销量上新" + obj.data.value[1],
                ].join("\n");
            }
        },
    },
};

option = {
    title: {
        text: "女装属性销量驱动表现",
        x: "center",
        y: "top",
    },
    tooltip: {
        trigger: "item",
        axisPointer: {
            show: true,
            type: "cross",
            lineStyle: {
                type: "dashed",
                width: 1,
            },
        },
        formatter: function(obj) {
            if (obj.componentType == "series") {
                return `<div style="border-bottom: 1px solid rgba(255,255,255,.3);font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">${obj.name}</div>
            <span>销量</span>:${obj.data.value[0]}<br/>
            <span>销量上新</span>:${obj.data.value[1]}`;
            }
        },
    },
    label: {
        fontSize: 8,
        show: true,
        formatter: function(params) {
            return params.name;
        },
        emphasis: {
            show: true,
            position: "bottom",
        },
    },
    xAxis: {
        name: "销量",
        type: "value",
        scale: true,
        axisLabel: {
            formatter: "{value}",
            fontSize: 8,
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: "#3259B8",
            },
        },
    },
    yAxis: {
        name: "上新数量",
        type: "value",
        scale: true,
        axisLabel: {
            formatter: "{value}",
            fontSize: 8,
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: "#3259B8",
            },
        },
    },
    dataZoom: [{
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 0,
            end: 100
        },
        {
            type: 'slider',
            show: true,
            yAxisIndex: [0],
            left: '94%',
            start: 0,
            end: 100
        },
        {
            type: 'inside',
            xAxisIndex: [0],
            start: 1,
            end: 100
        },
        {
            type: 'inside',
            yAxisIndex: [0],
            start: 0,
            end: 100
        }
    ],
    series: [{
        type: "scatter",
        data: seriesData,
        label: seriesLabel,
        symbolSize: function(data, index) {
            return Math.sqrt(data[0]) / 4e1;
        },
        itemStyle: {
            normal: {
                opacity: 0.8,
            },
            color: function(params) {
                let colorarrays = [
                    "#2F9323",
                    "#D9B63A",
                    "#2E2AA4",
                    "#9F2E61",
                    "#4D670C",
                    "#BF675F",
                    "#1F814A",
                    "#357F88",
                    "#673509",
                    "#310937",
                    "#1B9637",
                    "#F7393C",
                ];
                return colorarrays[params.dataIndex];
            },
        },
        markLine: {
            label: {
                normal: {
                    formatter: function(params) {
                        if (params.dataIndex == 0) {
                            return params.value;
                        } else if (params.dataIndex == 1) {
                            return params.value;
                        }
                        return params.value;
                    },
                },
            },
            lineStyle: {
                normal: {
                    color: "#626c91",
                    type: "bashed",
                    width: 1,
                },
                emphasis: {
                    color: "#d9def7",
                },
            },
            data: [{
                    xAxis: avg.salesAvgLine,
                    name: "营业额平均线",
                    itemStyle: {
                        normal: {
                            color: "#b84a58",
                        },
                    },
                },
                {
                    yAxis: avg.servicesAvgLine,
                    name: "服务能力平均线",
                    itemStyle: {
                        normal: {
                            color: "#b84a58",
                        },
                    },
                },
            ],
        },
        markArea: {
            silent: true,
            data: [
                [{
                        name: "弱势区",
                        itemStyle: {
                            color: "white",
                        },
                        label: {
                            show: true,
                            position: "insideBottomRight",
                            fontStyle: "normal",
                            color: "#797979",
                            fontSize: 10,
                            // fontWeight: "blod",
                        },
                        coord: [avg.salesAvgLine, avg.servicesAvgLine],
                    },
                    {
                        coord: [Number.MAX_VALUE, 0],
                    },
                ],
                [{
                        name: "乏力区",
                        itemStyle: {
                            color: "white",
                        },
                        label: {
                            show: true,
                            position: "insideBottomLeft",
                            fontStyle: "normal",
                            color: "#797979",
                            fontSize: 10,
                            // fontWeight: "blod",
                        },
                        coord: [0, 0],
                    },
                    {
                        coord: [avg.salesAvgLine, avg.servicesAvgLine],
                    },
                ],
                [{
                        name: "强势区",
                        itemStyle: {
                            color: "white",
                        },
                        label: {
                            show: true,
                            position: "insideTopRight",
                            fontStyle: "normal",
                            color: "#797979",
                            fontSize: 10,
                            // fontWeight: "blod",
                        },
                        coord: [avg.salesAvgLine, avg.servicesAvgLine],
                    },
                    {
                        coord: [Number.MAX_VALUE, Number.MAX_VALUE],
                    },
                ],
                [{
                        name: "潜力区",
                        itemStyle: {
                            color: "white",
                        },
                        label: {
                            show: true,
                            position: "insideTopLeft",
                            fontStyle: "normal",
                            color: "#797979",
                            fontSize: 10,
                            // fontWeight: "blod",
                        },
                        coord: [0, Number.MAX_VALUE],
                    },
                    {
                        coord: [avg.salesAvgLine, avg.servicesAvgLine],
                    },
                ],
            ],
        },
    }, ],
};