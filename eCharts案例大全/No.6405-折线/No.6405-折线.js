var dat = {

    "lines": {
        "legend": ["录像下载", "录像回放", "实时浏览", "云台控制"],
        "xAxis": {
            "data": ["2002-01", "2020-02", "2020-03", "2020-04", "2020-05", "2020-06", "2020-07", "2020-08", "2020-09", "2020-10"]
        },
        "data": [{
            "name": "录像回放",
            "data": [100, 0,100, 0, 100, 0, 100, 0, 100, 0]
        }, {
            "name": "录像下载",
            "data": [0, 100, 0, 100, 0, 100, 0, 100, 0, 100]
        }, {
            "name": "实时浏览",
            "data": [150, 250, 150, 250,150, 250, 150, 250,150, 250]
        }, {
            "name": "云台控制",
            "data": [250, 150, 250, 150, 250, 150, 250, 150, 250, 200]
        }]
    }
}
let linear_color = {
    type: "linear",
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
            offset: 0,
            color: "#079dfd",
        },
        {
            offset: 1,
            color: "#aad9f7",
        },
    ],
};

let color = [
        "85, 184, 247",
        "153,218,105",
        "227,47,70",
        "112,73,240",
        "250,112,77",
        "1,186,188",
    ],
    mydata = dat.lines.data,
    series = [];
for (let i = 0; i < mydata.length; i++) {
    series.push({
        name: mydata[i].name,
        type: "line",
        smooth: true, //是否平滑曲线显示
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: "rgba(" + color[i] + ",0.4)",
                        },
                        {
                            offset: 1,
                            color: "rgba(" + color[i] + ",0.1)",
                        },
                    ],
                    false
                ),
                shadowBlur: 0,
                opacity: 0.3,
            },
        },
        itemStyle: {
            normal: {
                color: "rgb(" + color[i] + ")",
            },
        },
        data: mydata[i].data,
    });
}
option = {

    backgroundColor: "rgb(21, 26, 50)",
    legend: {
        top: 10,
        icon: "circle",
        itemWidth: 10,
        textStyle: {
            color: "rgb(145,150,181)",
        },
        data: dat.lines.legend,
    },
    tooltip: {
        trigger: "axis",
        textStyle: {
            color: "rgb(145,150,181)"
        },
    },
    grid: {
        left: 100,
        top: 50,
        right: 100,
        bottom: 40,
    },
    xAxis: [{
        type: "category",
        axisLine: {
            lineStyle: {
                color: "rgb(145,150,181)",
            },
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "#32346c ",
            },
        },
        boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
        axisTick: {
            show: false,
        },
        data: dat.lines.xAxis.data,
    }, ],
    yAxis: {
        type: "value",
        axisTick: {
            show: false,
        },
        // minInterval: 1,
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgb(145,150,181)",
            },
        },
        splitLine: {
            lineStyle: {
                type: "dotted",
                color: "rgb(137,142,173)",
            },
        },
    },
    series: series,
};