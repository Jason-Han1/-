var data = {
    axis: {
        xAxis: "1",
        yAxis: "2"
    },
    provinces: [{
            name: "0",
            rate: 23.7,
            ratio: 26,
            value: 7.2
        },
        {
            name: "1",
            rate: 26.5,
            ratio: 29.4,
            value: 7.4
        },
        {
            name: "2",
            rate: 20.6,
            ratio: 23.8,
            value: 6.9
        },
        {
            name: "j",
            rate: 31.2,
            ratio: 38.9,
            value: 16.9
        },
        {
            name: "g",
            rate: 25.4,
            ratio: 34.8,
            value: 16.3
        },
        {
            name: "m",
            rate: 38.5,
            ratio: 43.4,
            value: 16.2
        },
        {
            name: "nm",
            rate: 29.0,
            ratio: 38.5,
            value: 15.5
        },
        {
            name: "b",
            rate: 22.2,
            ratio: 27.6,
            value: 11.0
        },
        {
            name: "v",
            rate: 21.4,
            ratio: 24.6,
            value: 10.4
        },
        {
            name: "c",
            rate: 22.4,
            ratio: 28.9,
            value: 10.3
        },
        {
            name: "x",
            rate: 13.7,
            ratio: 21.2,
            value: 10.1
        },
        {
            name: "l",
            rate: 24.6,
            ratio: 24.7,
            value: 9.6
        },
        {
            name: "k",
            rate: 19.6,
            ratio: 25.7,
            value: 9.4
        },
        {
            name: "j",
            rate: 24.9,
            ratio: 27.9,
            value: 9.4
        },
        {
            name: "h",
            rate: 25.8,
            ratio: 30.1,
            value: 9.2
        },
        {
            name: "g",
            rate: 16.6,
            ratio: 21.9,
            value: 8.7
        },
        {
            name: "s",
            rate: 21.5,
            ratio: 26.0,
            value: 8.5
        },
        {
            name: "g",
            rate: 20.5,
            ratio: 25.7,
            value: 8.4
        },
        {
            name: "d",
            rate: 36.8,
            ratio: 37.1,
            value: 8.3
        },
        {
            name: "f",
            rate: 26.0,
            ratio: 27.8,
            value: 7.6
        },
        {
            name: "h",
            rate: 27.6,
            ratio: 30.1,
            value: 7.3
        },
        {
            name: "h",
            rate: 23.0,
            ratio: 26.7,
            value: 7.0
        },
      ]
};
var minRate = 0,
    maxRate = 0,
    minRatio = 0,
    maxRatio = 0;
data.provinces.forEach((province, index) => {
    //  取最值
    if (
        province.rate !== "-" &&
        province.ratio !== "-" &&
        province.value !== "-"
    ) {
        if (index > 0) {
            //  rate最值
            if (parseFloat(province.rate) < minRate) {
                minRate = province.rate;
            } else if (parseFloat(province.rate) > maxRate) {
                maxRate = province.rate;
            }
            //  ratio最值
            if (parseFloat(province.ratio) < minRatio) {
                minRatio = province.ratio;
            } else if (parseFloat(province.ratio) > maxRatio) {
                maxRatio = province.ratio;
            }
        } else {
            minRate = maxRate = province.rate;
            minRatio = maxRatio = province.ratio;
        }
    }
});

var minValue = Math.min(minRate, minRatio);
var maxValue = Math.max(maxRate, maxRatio);
var xValue = 0,
    yValue = 0;
data.provinces.forEach(item => {
    if (item.name === "0") {
        xValue = item.rate;
        yValue = item.ratio;
    }
});
var seriesData = [];
data.provinces.map(item => {
    if (item.rate !== "-" && item.ratio !== "-" && item.value !== "-") {
        let symbolSize = 0;
        if (Math.abs(item.value) < 1) {
            symbolSize = Math.abs(item.value) * 10;
        } else if (Math.abs(item.value) < 50) {
            symbolSize = Math.abs(item.value);
        } else {
            symbolSize = Math.abs(item.value) / 2;
        }
        seriesData.push({
            name: item.name,
            value: [Math.abs(item.rate), Math.abs(item.ratio)],
            symbolSize: symbolSize
        });
    }
});

option = {
    title: {
        text: "标 题",
        show: false
    },
    grid: {
        left: "3%",
        right: "10%",
        bottom: "3%",
        containLabel: true
    },
    tooltip: {
        trigger: "axis",
        showDelay: 0,
        formatter: function(params) {
            let str = "";
            params.forEach((param, index) => {
                str +=
                    param.name +
                    " :<br/>" +
                    data.axis.xAxis +
                    "：" +
                    param.value[0] +
                    "% " +
                    " <br/>" +
                    data.axis.yAxis +
                    "：" +
                    param.value[1] +
                    "% <br/>";
            });
            return str;
        },
        axisPointer: {
            show: true,
            type: "cross",
            lineStyle: {
                type: "dashed",
                width: 1
            } //坐标指示器
        }
    },
    legend: {
        selectedMode: false,
        data: ["气泡大小"],
        left: "center"
    },
    xAxis: [{
        name: data.axis.xAxis,
        type: "value",
        zlevel: 3,
        scale: true,
        axisLabel: {
            formatter: "{value} %"
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            symbol: ["none", "arrow"]
        },
        min: Math.floor(minValue / 5) * 6, // math.floor() 向下取整
        max: Math.ceil(maxValue / 5) * 6 //  math.ceil() 向上取整
    }],
    yAxis: [{
        name: data.axis.yAxis,
        type: "value",
        scale: true,
        zlevel: 3,
        axisLabel: {
            formatter: "{value} %"
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            symbol: ["none", "arrow"]
        },
        min: Math.floor(minValue / 5) * 6, // math.floor() 向下取整
        max: Math.ceil(maxValue / 5) * 6 //  math.ceil() 向上取整
    }],
    series: [{
        name: "气泡大小",
        type: "scatter",
        data: seriesData,
        zlevel: 2,
        label: {
            normal: {
                show: true,
                formatter: function(param) {
                    return param.name;
                },
                position: "top"
            }
        },
        itemStyle: {
            normal: {
                color: function(param) {
                    if (param.name === "0") {
                        return "red";
                    } else if (param.name === "1") {
                        return "#16A857";
                    } else if (param.name === "2") {
                        return "#F57C35";
                    } else {
                        return "#83B4D5";
                    }
                }
            }
        },
        markArea: {
            zlevel: 0,
            silent: true,
            data: [
                [{
                        name: "1",
                        itemStyle: {
                            color: "#e0f8ed"
                        },
                        label: {
                            show: true,
                            position: ["30%", "50%"],
                            fontStyle: "normal",
                            color: "#66cc66",
                            fontSize: 14
                        },
                        coord: [xValue, yValue]
                    },
                    {
                        coord: [Number.MAX_VALUE, 0]
                    }
                ],
                [{
                        name: "2",
                        itemStyle: {
                            color: "#fef0e0"
                        },
                        label: {
                            show: true,
                            position: ["10%", "50%"],
                            fontStyle: "normal",
                            color: "#66cc66",
                            fontSize: 14
                        },
                        xAxis: 0,
                        yAxis: 0
                        // coord:[0,0]
                    },
                    {
                        xAxis: xValue,
                        yAxis: yValue
                        // coord: [avg.churnAvg, avg.developAvg]
                    }
                ],
                [{
                        name: "3",
                        itemStyle: {
                            color: "#ffebe9"
                        },
                        label: {
                            show: true,
                            position: ["30%", "10%"],
                            fontStyle: "normal",
                            color: "#66cc66",
                            fontSize: 14
                        },
                        xAxis: xValue,
                        yAxis: yValue
                        // coord: [avg.churnAvg, avg.developAvg]
                    },
                    {
                        xAxis: Number.MAX_VALUE,
                        yAxis: Number.MAX_VALUE
                        // coord:[Number.MAX_VALUE,Number.MAX_VALUE]
                    }
                ],
                [{
                        name: "4",
                        itemStyle: {
                            color: "#eee5fe"
                        },
                        label: {
                            show: true,
                            position: ["10%", "10%"],
                            fontStyle: "normal",
                            color: "#66cc66",
                            fontSize: 14
                        },
                        xAxis: 0,
                        yAxis: Number.MAX_VALUE
                        // coord:[0,Number.MAX_VALUE]
                    },
                    {
                        xAxis: xValue,
                        yAxis: yValue
                        // coord: [avg.churnAvg, avg.developAvg]
                    }
                ]
            ]
        },
        markLine: {
            zlevel: 0,
            symbol: ["none", "none"],
            emphasis: {
                show: false
            },
            lineStyle: {
                normal: {
                    color: "#CDCFCA",
                    type: "solid"
                }
            },
            data: [{
                    xAxis: xValue
                },
                {
                    yAxis: yValue
                },
                [{
                        lineStyle: {
                            type: "dashed"
                        },
                        coord: [
                            Math.floor(minValue / 5) * 6,
                            Math.floor(minValue / 5) * 6
                        ]
                    },
                    {
                        symbol: "arrow",
                        coord: [
                            Math.ceil(maxValue / 5) * 6,
                            Math.ceil(maxValue / 5) * 6
                        ]
                    }
                ]
            ]
        }
    }]
};