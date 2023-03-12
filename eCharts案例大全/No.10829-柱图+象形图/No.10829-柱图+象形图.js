var data = {
    "name": [
        "一级",
        "二级",
        "三级",
        "关注",
    ],
    "value": [
        1172,
        2935,
        1731,
        3379
    ]
}
var valueArr = [];
var len = data.name.length;
for (let i = 0; i < len; i++) {
    let temp = data.name[i];
    if (temp === "一级") {
        valueArr[0] = data.value[i]
    } else if (temp === "二级") {
        valueArr[1] = data.value[i]
    } else if (temp === "三级") {
        valueArr[2] = data.value[i]
    } else if (temp === "关注") {
        valueArr[3] = data.value[i]
    }
}


option = {
    backgroundColor: '#0e2147',
    tooltip: {
        trigger: "axis",
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为："line" | "shadow"
        }
    },
    grid: {
        left: "4%",
        right: "4%",
        bottom: "45%",
        top: "35%",
        containLabel: true
    },
    yAxis: [{
        type: "category",
        data: data.name,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false,
            alignWithLabel: true
        },
        axisLabel: {
            textStyle: {
                color: "#9DEBFF"
            }
        },
        inverse: true
    }],
    xAxis: [{
        type: "value",
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        name: "人员数量",
        type: "bar",
        data: valueArr,
        // barWidth: 12,
        barGap: 20,
        barCategoryGap: 15,
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#6E7EFF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#1ECCFC' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },
                barBorderRadius: [0, 15, 15, 0],
                shadowColor: 'rgba(0,0,0,0.1)',
                shadowBlur: 3,
                shadowOffsetY: 3
            }
        },
        label: {
            normal: {
                show: false,
                position: "right",
                formatter: function(params) {
                    return params.data.value;
                },
                textStyle: {
                    color: "#fff" //color of value
                }
            }
        }
    }, {
        type: 'pictorialBar',
        symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT0AAAAJCAYAAABAB/uSAAAACXBIWXMAAAsSAAALEgHS3X78AAAAZElEQVRo3u3ZMRGAMAwF0MDhg5mqABPYASmsVAUqmKkSWFDRvrdkz5D7/9JN57NHRNzruAdAxVIub28NQEscPaApwz/nlIt6C0h6ADUmvcsjA6hdymWT9AD1FqDmentYA9CI5QN/tg7eMcV0jAAAAABJRU5ErkJggg==',
        data: [4379, 4379, 4379, 4379],
        barWidth: '20%',
        z: -1,
        label: {
            normal: {
                show: true,
                position: 'right',
                color: '#fff',
                fontSize: 24,
                formatter: function(param) {
                    return data.value[param.dataIndex];
                },
            }
        },
    }, ]
};