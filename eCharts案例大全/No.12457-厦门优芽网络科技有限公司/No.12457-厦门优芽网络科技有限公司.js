// note: 设置灰色背景色的长度的逻辑不够好，请自行调整
var honorData = [
    {name: "校级", data: [100, 92, 150, 200, 50]},
    {name: "区县级",data: [500, 920, 500, 50, 0]},
    {name: "市级",data: [90, 50, 102, 50, 100]},
    {name: "国家级",data: [100, 121, 92, 50, 0]}
];
var legendData = [],
    sumArray = [],
    honorXAxisData = ["科技创新", "艺术活动", "体育比赛", "优势科目", "先进个人"];
var maxArray = [];
var sumData1 = null;
var sumData2 = null;
var sumData3 = null;
var sumData4 = null;
var sumData5 = null;
honorData.map(function(a, b) {
    legendData.push(a.name);
    a.data.map(function(x, y) {
        switch (y) {
            case 0:
                sumData1 += x;
                break;
            case 1:
                sumData2 += x;
                break;
            case 2:
                sumData3 += x;
                break;
            case 3:
                sumData4 += x;
                break;
            case 4:
                sumData5 += x;
                break;
        }
    });
});
maxArray.push(sumData1, sumData2, sumData3, sumData4, sumData5);
// 设置灰色背景色的长度
var isMax = maxArray.sort(function(a, b) {
    return b - a
})[0] * 1.1;
var bjData1 = [isMax, isMax, isMax, isMax, isMax];
var bjData2 = [isMax + 20, isMax + 20, isMax + 20, isMax + 20, isMax + 20];
var option = {
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "none"
        },
        // show: true,
        // backgroundColor: '#fff',
        borderColor: "#ddd",
        textStyle: {
            // color: '#3c3c3c',
            fontSize: 16
        },
        formatter: function(p) {
            var relVal = p[0].name;
            var sum = 0;
            for (var z = 0; z < p.length; z++) {
                if (!(p[z].seriesName == 1001 || p[z].seriesName == 1000)) {
                    sum += p[z].value;
                }
            }
            for (var i = 0; i < p.length; i++) {
                if (!(p[i].seriesName == 1001 || p[i].seriesName == 1000)) {
                    relVal += "<br>" + p[i].marker + p[i].seriesName + " " + p[i].value + " " + "(" + ((100 * parseFloat(p[i].value)) / parseFloat(sum)).toFixed(2) + "%)";
                }
            }
            return relVal;
        }
    },
    backgroundColor: "#ffffff",
    color: ["#ec407a", "#26aaff", "#7156ff", "#05ce91", "#efefef", "#eef2f7"],
    legend: {
        data: legendData,
        x: "center",
        y: "bottom",
        itemWidth: 20,
        itemHeight: 20,
        itemGap: 30, // 例间距
        padding: 30,
        textStyle: {
            color: "#666666",
            fontSize: 16
        }
    },
    grid: {
        left: "10%",
        right: "10%",
        bottom: "5%",
        top: "5%",
        containLabel: true
    },
    xAxis: [{
            type: "value",
            show: false
        },
        {
            type: "value",
            show: false
        }
    ],
    yAxis: [{
            type: "category",
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#333333",
                fontSize: 16, // 文字大小
                fontWeight: 400,
                interval: 0
            },
            offset: 20,
            data: honorXAxisData
        },
        {
            type: "category",
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#fff",
                fontSize: 36,
                fontWeight: 300,
                interval: 0
            }
        }
    ],
    series: [{
            name: "校级",
            type: "bar",
            barWidth: 20,
            stack: "总量",
            itemStyle: {
                normal: {
                    show: true,
                    barBorderRadius: [30, 0, 0, 30]
                }
            },
            zlevel: 10,
            data: honorData[0].data
        },
        {
            name: "区县级",
            type: "bar",
            barWidth: 20,
            stack: "总量",
            zlevel: 10,
            data: honorData[1].data
        },
        {
            name: "市级",
            type: "bar",
            stack: "总量",
            barWidth: 20,
            zlevel: 10,
            data: honorData[2].data
        },
        {
            name: "国家级",
            type: "bar",
            barWidth: 20,
            stack: "总量",
            zlevel: 10,
            data: honorData[3].data
        },
        {
            name: "1000",
            type: "bar",
            barGap: "-100%",
            barWidth: 20,
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 30, 30, 30]
                }
            },
            xAxisIndex: 0,
            // yAxisIndex: 1,
            data: bjData1,
            emphasis: {
                itemStyle: {
                    color: '#efefef'
                }
            },
            zlevel: 5
        },
        // {
        //     name: "1001",
        //     type: "bar",
        //     barGap: "-120%",
        //     barWidth: 30,
        //     itemStyle: {
        //         normal: {
        //             barBorderRadius: [30, 30, 30, 30]
        //         }
        //     },
        //     // xAxisIndex: 0,
        //     yAxisIndex: 1,
        //     data: bjData2,
        //     emphasis: {
        //         itemStyle: {
        //             color: '#eef2f7'
        //         }
        //     },
        //     zlevel: 0
        // }
    ]
}