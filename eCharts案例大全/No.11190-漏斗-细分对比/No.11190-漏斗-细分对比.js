var convertRatePostion = 15;
var events = ["搜索商品", "查看商品详情", "加入购物车", "开始付款", "付款成功"];
var data = [{
        "names": ["北京"],
        "original_names": ["北京"],
        "values": [1151, 594, 109, 44, 23],
        "p_next": ["100.0", "51.6", "18.4", "40.4", "52.3"],
        "p_total": ["100.0", "51.6", "9.5", "3.8", "2.0"]
    },
    {
        "names": ["上海"],
        "original_names": ["上海"],
        "values": [845, 334, 116, 43, 30],
        "p_next": ["100.0", "39.5", "34.7", "37.1", "69.8"],
        "p_total": ["100.0", "39.5", "13.7", "5.1", "3.6"]
    },
    {
        "names": ["湖北"],
        "original_names": ["湖北"],
        "values": [577, 161, 38, 13, 7],
        "p_next": ["100.0", "27.9", "23.6", "34.2", "53.8"],
        "p_total": ["100.0", "27.9", "6.6", "2.3", "1.2"]
    },
    {
        "names": ["广东"],
        "original_names": ["广东"],
        "values": [463, 209, 57, 28, 14],
        "p_next": ["100.0", "45.1", "27.3", "49.1", "50.0"],
        "p_total": ["100.0", "45.1", "12.3", "6.0", "3.0"]
    }
];

var color = [
    "#00a0e9",
    "#f4b93b",
    "#85bd41",
    "#f29c9f",
    "#8f82bc",
    "#0068b7",
    "#f29b76",
    "#13b5b1",
    "#6e7074",
    "#546570",
    "#c4ccd3"
];


function getYAxisData() {
    var result = [];
    for (i = 0; i < events.length; i++) {
        result[i * 2] = events[i];
        if (i < events.length - 1)
            result[i * 2 + 1] = 'a' + i.toString();
    }
    return result;
}
var yAxisData = getYAxisData();

function getSeriesData() {
    var result = [];
    for (i = 0; i < data.length; i++) {
        var s = [];
        s[0] = [];
        s[1] = [];
        s[2] = [];
        s[2][0] = 0;
        for (j = 0; j < data[i]["p_total"].length; j++) {
            s[0][j * 2] = data[i]["p_total"][j];
            if (j > 0) {
                s[2][j * 2] = data[i]["p_total"][j - 1];
            }
            if (j < events.length - 1) {
                s[0][j * 2 + 1] = null;
                s[1][j] = {
                    value: data[i]["p_next"][j + 1],
                    xAxis: convertRatePostion,
                    yAxis: 'a' + j.toString()
                };
            }
        }
        result[i] = s;
    }
    return result;
}

var seriesData = getSeriesData();


function generateXAxises() {
    var result = [];
    for (i = 0; i < data.length; i++) {
        result.push({
            gridIndex: i,
            min: 0,
            max: 100,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: "#eee",
                    type: "dotted"
                }
            },
            axisLabel: {
                show: false,
                formatter: "{value}%",
                color: "#aaa",
                fontSize: 10
            }
        })
    }
    return result;
}

function generateYAxises() {
    var result = [];
    for (i = 0; i < data.length; i++) {
        result.push({
            gridIndex: i,
            axisLine: {
                show: false
            },
            data: yAxisData,
            inverse: true,
            axisTick: {
                show: false
            },
            axisLabel: {
                show: i == 0,
                width: "100%",
                interval: 1,
                fontSize: 11
            },

        })
    }
    return result;
}

function generateSeries() {
    var result = [];
    for (i = 0; i < data.length; i++) {
        result.push({
            xAxisIndex: i,
            yAxisIndex: i,
            type: 'bar',
            barWidth: 40,
            z: 10,
            name: data[i]["names"][0],
            data: seriesData[i][0],
            itemStyle: {
                color: color[i]
            },
            emphasis: {
                itemStyle: {
                    opacity: 0.6,
                }
            },
            markPoint: {
                symbol: 'triangle',
                symbolSize: [42, 21],
                symbolRotate: 180,
                label: {
                    formatter: "{c}%",
                    position: "insideTop",
                    distance: 1,
                    fontSize: 7
                },
                itemStyle: {
                    color: "#bbb",
                },
                data: seriesData[i][1],
            }
        })
    }
    return result;
}

function generateTitles() {
    var result = [];
    for (i = 0; i < data.length; i++) {
        result.push({
            textAlign: 'left',
            text: data[i]["names"][0],
            left: (12 + i * 22) + "%",
            top: "2%",
            textStyle: {
                fontSize: 12,
                fontWeight: 'normal',
                color: color[i]
            }
        })
    }
    return result;
}


option = {
    backgroundColor: "#fff",
    height: 350,
    grid: [{
            show: false,
            x: '10%',
            y: '7%',
            width: '20%',
        },
        {
            show: false,
            x: '32%',
            y: '7%',
            width: '20%',
        },
        {
            show: false,
            x: '54%',
            y: '7%',
            width: '20%',
        },
        {
            show: false,
            x: '76%',
            y: '7%',
            width: '20%',
        },
    ],
    tooltip: {
        trigger: "item",
        formatter: function(params){
            if(params.componentType=='markPoint')
                return events[params.dataIndex] + "→" + events[params.dataIndex+1] + "<br>" + data[params.dataIndex]["names"][0] + "：" + params.value + "%";
        },
        textStyle: {
            fontSize: 10
        },
        axisPointer: {
            type: "none",
            label: {
                show: false
            }
        }
    },
    title: generateTitles(),
    xAxis: generateXAxises(),
    yAxis: generateYAxises(),
    series: generateSeries()
};

// 鼠标滑过时实现对比效果
function compare(seriesIndex, dataIndex) {
    if(dataIndex==0)
        return;
    option.animation = false;
    for (i = 0; i < data.length; i++) {
        var sData = Array(seriesData[seriesIndex][0].length).fill(null);
        sData[dataIndex] = {value: seriesData[seriesIndex][0][dataIndex], vs: seriesData[i][0][dataIndex], currentIndex: seriesIndex, compareIndex: i};
        option.series.push({
            xAxisIndex: i,
            yAxisIndex: i,
            type: 'bar',
            name: "compare",
            z: 15,
            itemStyle: {
                color: "rgb(1, 1, 1, 0)",
                borderWidth: 1,
                borderColor: color[seriesIndex],
            },
            label: {
                show: true,
                fontSize: 9,
                position: "right",
                align: "left",
                color: "#777777",
                formatter: function(params){
                    if(params.data.currentIndex == params.data.compareIndex)
                        return "转化：" + params.data.value + "%（" + data[params.data.currentIndex].values[params.dataIndex] + "人）";
                    else
                        return data[params.data.currentIndex].names[0] + "：" + params.data.value + "%（" + data[params.data.currentIndex].values[params.dataIndex] + "人）\n" 
                        + data[params.data.compareIndex].names[0] + "：" + params.data.vs + "%（" + data[params.data.compareIndex].values[params.dataIndex] + "人）"
                }
            },
            silent: true,
            barWidth: 40,
            barGap: '-100%', //与原始柱图叠加
            data: sData,
        })
        option.series[i].markLine = {
            symbol: ["none", "none"],
            z: 20,
            data: [{
                xAxis: seriesData[seriesIndex][0][dataIndex],
            }],
            lineStyle: {
                color: color[seriesIndex],
                type: "dotted"
            },
            label: {
                formatter: "{c}%",
                fontSize: 10
            }
        }
    }
    myChart.setOption(option, false)
}

myChart.on('mouseover', {
        componentType: "series"
    },
    function(params) {
        if (params.componentSubType == 'bar') {
            compare(params.seriesIndex, params.dataIndex);
            for (i = 0; i < data.length; i++) {
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: i,
                    dataIndex: params.dataIndex,
                });
            }
        }
    }
);

myChart.on('mouseout', {
        componentType: "series"
    },
    function(params) {
        option.grid[params.seriesIndex].show = false;
        if (params.componentSubType == 'bar') {
            for (i = 0; i < data.length; i++) {
                myChart.dispatchAction({
                    type: 'downplay',
                    seriesIndex: i,
                    dataIndex: params.dataIndex,
                });
                option.series[i].markLine = null;
            }
            option.series.splice(4, 4);
            myChart.setOption(option, true)
        }
    }
);
