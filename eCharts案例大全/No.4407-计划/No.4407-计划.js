var fee_rule_color = 1; //鼠标点击，颜色
var mouseDown = 0; //鼠标按下:1,释放0

var startIndex = {}; //鼠标按下初始位置
var currentIndex = {}; //鼠标当前位置
var dataIndexArray = []; //鼠标选中的所有dataIndex（即：单个小矩形）


var minutes = ["00", "15", "30", "45"];

var data = [
    [
        [0, 0, 6],
        [0, 1, 1],
        [0, 2, 0],
        [0, 3, 4],
        [0, 4, 3],
        [0, 5, 7],
        [0, 6, 6],
        [0, 7, 4],
        [0, 8, 4],
        [0, 9, 0],
        [0, 10, 7],
        [0, 11, 0],
        [0, 12, 2],
        [0, 13, 2],
        [0, 14, 5],
        [0, 15, 3],
        [0, 16, 6],
        [0, 17, 8],
        [0, 18, 6],
        [0, 19, 6],
        [0, 20, 7],
        [0, 21, 2],
        [0, 22, 8],
        [0, 23, 6],
        [1, 0, 5],
        [1, 1, 7],
        [1, 2, 7],
        [1, 3, 8],
        [1, 4, 7],
        [1, 5, 8],
        [1, 6, 2],
        [1, 7, 0],
        [1, 8, 4],
        [1, 9, 6],
        [1, 10, 6],
        [1, 11, 6],
        [1, 12, 7],
        [1, 13, 1],
        [1, 14, 4],
        [1, 15, 2],
        [1, 16, 5],
        [1, 17, 7],
        [1, 18, 3],
        [1, 19, 3],
        [1, 20, 5],
        [1, 21, 5],
        [1, 22, 6],
        [1, 23, 8],
        [2, 0, 1],
        [2, 1, 6],
        [2, 2, 4],
        [2, 3, 4],
        [2, 4, 4],
        [2, 5, 6],
        [2, 6, 2],
        [2, 7, 1],
        [2, 8, 4],
        [2, 9, 0],
        [2, 10, 4],
        [2, 11, 2],
        [2, 12, 4],
        [2, 13, 2],
        [2, 14, 3],
        [2, 15, 6],
        [2, 16, 1],
        [2, 17, 3],
        [2, 18, 7],
        [2, 19, 6],
        [2, 20, 0],
        [2, 21, 6],
        [2, 22, 3],
        [2, 23, 1],
        [3, 0, 1],
        [3, 1, 1],
        [3, 2, 6],
        [3, 3, 6],
        [3, 4, 2],
        [3, 5, 8],
        [3, 6, 3],
        [3, 7, 2],
        [3, 8, 2],
        [3, 9, 6],
        [3, 10, 0],
        [3, 11, 5],
        [3, 12, 1],
        [3, 13, 6],
        [3, 14, 2],
        [3, 15, 4],
        [3, 16, 1],
        [3, 17, 2],
        [3, 18, 5],
        [3, 19, 3],
        [3, 20, 0],
        [3, 21, 4],
        [3, 22, 6],
        [3, 23, 7]
    ],
    [
        [0, 0, 6],
        [0, 1, 1],
        [0, 2, 0],
        [0, 3, 4],
        [0, 4, 3],
        [0, 5, 7],
        [0, 6, 6],
        [0, 7, 4],
        [0, 8, 4],
        [0, 9, 0],
        [0, 10, 7],
        [0, 11, 0],
        [0, 12, 2],
        [0, 13, 2],
        [0, 14, 5],
        [0, 15, 3],
        [0, 16, 6],
        [0, 17, 8],
        [0, 18, 6],
        [0, 19, 6],
        [0, 20, 7],
        [0, 21, 2],
        [0, 22, 8],
        [0, 23, 6],
        [1, 0, 5],
        [1, 1, 7],
        [1, 2, 7],
        [1, 3, 8],
        [1, 4, 7],
        [1, 5, 8],
        [1, 6, 2],
        [1, 7, 0],
        [1, 8, 4],
        [1, 9, 6],
        [1, 10, 6],
        [1, 11, 6],
        [1, 12, 7],
        [1, 13, 1],
        [1, 14, 4],
        [1, 15, 2],
        [1, 16, 5],
        [1, 17, 7],
        [1, 18, 3],
        [1, 19, 3],
        [1, 20, 5],
        [1, 21, 5],
        [1, 22, 6],
        [1, 23, 8],
        [2, 0, 1],
        [2, 1, 6],
        [2, 2, 4],
        [2, 3, 4],
        [2, 4, 4],
        [2, 5, 6],
        [2, 6, 2],
        [2, 7, 1],
        [2, 8, 4],
        [2, 9, 0],
        [2, 10, 4],
        [2, 11, 2],
        [2, 12, 4],
        [2, 13, 2],
        [2, 14, 3],
        [2, 15, 6],
        [2, 16, 1],
        [2, 17, 3],
        [2, 18, 7],
        [2, 19, 6],
        [2, 20, 0],
        [2, 21, 6],
        [2, 22, 3],
        [2, 23, 1],
        [3, 0, 1],
        [3, 1, 1],
        [3, 2, 6],
        [3, 3, 6],
        [3, 4, 2],
        [3, 5, 8],
        [3, 6, 3],
        [3, 7, 2],
        [3, 8, 2],
        [3, 9, 6],
        [3, 10, 0],
        [3, 11, 5],
        [3, 12, 1],
        [3, 13, 6],
        [3, 14, 2],
        [3, 15, 4],
        [3, 16, 1],
        [3, 17, 2],
        [3, 18, 5],
        [3, 19, 3],
        [3, 20, 0],
        [3, 21, 4],
        [3, 22, 6],
        [3, 23, 7]
    ],
    [
        [0, 0, 6],
        [0, 1, 1],
        [0, 2, 0],
        [0, 3, 4],
        [0, 4, 3],
        [0, 5, 7],
        [0, 6, 6],
        [0, 7, 4],
        [0, 8, 4],
        [0, 9, 0],
        [0, 10, 7],
        [0, 11, 0],
        [0, 12, 2],
        [0, 13, 2],
        [0, 14, 5],
        [0, 15, 3],
        [0, 16, 6],
        [0, 17, 8],
        [0, 18, 6],
        [0, 19, 6],
        [0, 20, 7],
        [0, 21, 2],
        [0, 22, 8],
        [0, 23, 6],
        [1, 0, 5],
        [1, 1, 7],
        [1, 2, 7],
        [1, 3, 8],
        [1, 4, 7],
        [1, 5, 8],
        [1, 6, 2],
        [1, 7, 0],
        [1, 8, 4],
        [1, 9, 6],
        [1, 10, 6],
        [1, 11, 6],
        [1, 12, 7],
        [1, 13, 1],
        [1, 14, 4],
        [1, 15, 2],
        [1, 16, 5],
        [1, 17, 7],
        [1, 18, 3],
        [1, 19, 3],
        [1, 20, 5],
        [1, 21, 5],
        [1, 22, 6],
        [1, 23, 8],
        [2, 0, 1],
        [2, 1, 6],
        [2, 2, 4],
        [2, 3, 4],
        [2, 4, 4],
        [2, 5, 6],
        [2, 6, 2],
        [2, 7, 1],
        [2, 8, 4],
        [2, 9, 0],
        [2, 10, 4],
        [2, 11, 2],
        [2, 12, 4],
        [2, 13, 2],
        [2, 14, 3],
        [2, 15, 6],
        [2, 16, 1],
        [2, 17, 3],
        [2, 18, 7],
        [2, 19, 6],
        [2, 20, 0],
        [2, 21, 6],
        [2, 22, 3],
        [2, 23, 1],
        [3, 0, 1],
        [3, 1, 1],
        [3, 2, 6],
        [3, 3, 6],
        [3, 4, 2],
        [3, 5, 8],
        [3, 6, 3],
        [3, 7, 2],
        [3, 8, 2],
        [3, 9, 6],
        [3, 10, 0],
        [3, 11, 5],
        [3, 12, 1],
        [3, 13, 6],
        [3, 14, 2],
        [3, 15, 4],
        [3, 16, 1],
        [3, 17, 2],
        [3, 18, 5],
        [3, 19, 3],
        [3, 20, 0],
        [3, 21, 4],
        [3, 22, 6],
        [3, 23, 7]
    ],
];

function Compare(data, i, j) {
    return data.findIndex(x => {
        return x[0] === i && x[1] === j;
    });
}

//计算鼠标覆盖位置所有点位（二维数组）
function CalcMouseOver(data, start, end) {
    let result = [];
    let [sx, sy] = start;
    let [ex, ey] = end;
    if ((ex - sx >= 0) && (ey - sy >= 0)) {
        // [0,0]~[2,2]左上角到右下角
        for (let i = sx; i <= ex; i++) {
            for (let j = sy; j <= ey; j++) {
                result.push(Compare(data, i, j));
            }
        }
    } else if (ex - sx < 0 && ey - sy >= 0) {
        // [2,0]~[0,2]左下角到右上角
        for (let i = ex; i <= sx; i++) {
            for (let j = sy; j <= ey; j++) {
                result.push(Compare(data, i, j));
                // result.push(data.findIndex(x => x[0] == i && x[1] == j))
            }
        }
    } else if (ex - sx >= 0 && ey - sy < 0) {
        // [0,2]~[2,0]右上角到左下角
        for (let i = sx; i <= ex; i++) {
            for (let j = ey; j <= sy; j++) {
                result.push(Compare(data, i, j));
                // result.push(data.findIndex(x => x[0] == i && x[1] == j))
            }
        }
    } else {
        // [2,2]~[0,0]右下角到左上角
        for (let i = ex; i <= sx; i++) {
            for (let j = ey; j <= sy; j++) {
                result.push(Compare(data, i, j));
                // result.push(data.findIndex(x => x[0] === i && x[1] === j))
            }
        }
    }
    return result;
}

//判断鼠标向右还是向左框选
function LeftOrRight(current, start, planData) {
    let selectZoneXY = [];
    if (current.zone < start.zone) {
        let zoneNum = start.zone - current.zone;
        for (let i = 0; i <= zoneNum; i++) {
            if (i === 0) {
                //第一个区域的起止点;
                let startXY_1 = [start.x, start.y];
                let startXY_2 = [0, current.y];
                let startXY = CalcMouseOver(planData[start.zone], startXY_1, startXY_2);
                selectZoneXY.push({
                    zone: start.zone,
                    index: startXY
                });
            } else if (i > 0 && i < zoneNum) { //TODO:中间点
                let middleXY_1 = [minutes.length - 1, start.y];
                let middleXY_2 = [0, current.y];
                let middleXY = CalcMouseOver(planData[start.zone - i], middleXY_1, middleXY_2);
                selectZoneXY.push({
                    zone: start.zone - i,
                    index: middleXY
                });
            } else {
                let endXY_1 = [minutes.length - 1, start.y];
                let endXY_2 = [current.x, current.y];
                let endXY = CalcMouseOver(planData[current.zone], endXY_1, endXY_2);
                selectZoneXY.push({
                    zone: current.zone,
                    index: endXY
                });
            }
        }
        // console.log('end:' + JSON.stringify(selectZoneXY))
        // console.log('right->left')
    } else if (current.zone > start.zone) {
        let zoneNum = current.zone - start.zone;
        for (let i = 0; i <= zoneNum; i++) {
            if (i === 0) {
                //第一个区域的起止点
                let startXY_1 = [start.x, start.y];
                let startXY_2 = [minutes.length - 1, current.y];
                let startXY = CalcMouseOver(planData[start.zone], startXY_1, startXY_2);
                selectZoneXY.push({
                    zone: start.zone,
                    index: startXY
                });
            } else if (i > 0 && i < zoneNum) { //TODO:中间点
                let middleXY_1 = [0, start.y];
                let middleXY_2 = [minutes.length - 1, current.y];
                let middleXY = CalcMouseOver(planData[start.zone + i], middleXY_1, middleXY_2);
                selectZoneXY.push({
                    zone: start.zone + i,
                    index: middleXY
                });
            } else {
                let endXY_1 = [0, start.y];
                let endXY_2 = [current.x, current.y];
                let endXY = CalcMouseOver(planData[current.zone], endXY_1, endXY_2);
                selectZoneXY.push({
                    zone: current.zone,
                    index: endXY
                });
            }
        }
        // console.log('end:' + JSON.stringify(selectZoneXY))
        // console.log('left->right')
    } else {
        let XY_1 = [start.x, start.y];
        let XY_2 = [current.x, current.y];
        let XY = CalcMouseOver(planData[current.zone], XY_1, XY_2);
        selectZoneXY.push({
            zone: current.zone,
            index: XY
        });
        // console.log('end:' + JSON.stringify(selectZoneXY))
        // console.log('no zone')
    }
    return selectZoneXY;
}


option = {
    "title": {
        "text": "计划"
    },
    "tooltip": {
        "position": "top",
    },
    "animation": false,
    "grid": [{ //布局
        "left": "50",
        'width': '220',
        "top": "50",
        "bottom": "20",
        "containLabel": true
    }, {
        "left": "290",
        'width': '220',
        "top": "50",
        "bottom": "20",
        "containLabel": true
    }, {
        "left": "520",
        'width': '220',
        "top": "50",
        "bottom": "20",
        "containLabel": true
    }],
    "xAxis": [{ //x轴(横)
        "gridIndex": 0,
        "offset": 0,
        "position": "top",
        "type": "category",
        "data": minutes,
        "nameLocation": "center",
        "nameTextStyle": {
            "fontWeight": "bold",
            "fontSize": "16",
            "padding": [3, 4, 15, 6],
            "color": "#606060"
        },
        "axisLabel": {
            "interval": 0,
            "rotate": 0
        },
        "splitArea": {
            "show": true
        }
    }, {
        "gridIndex": 1,
        "offset": 1,
        "position": "top",
        "type": "category",
        "data": minutes,
        "nameLocation": "center",
        "nameTextStyle": {
            "fontWeight": "bold",
            "fontSize": "16",
            "padding": [3, 4, 15, 6],
            "color": "#606060"
        },
        "axisLabel": {
            "interval": 0,
            "rotate": 0
        },
        "splitArea": {
            "show": true
        }
    }, {
        "gridIndex":2,
        "offset":2,
        "position": "top",
        "type": "category",
        "data": minutes,
        "nameLocation": "center",
        "nameTextStyle": {
            "fontWeight": "bold",
            "fontSize": "16",
            "padding": [3, 4, 15, 6],
            "color": "#606060"
        },
        "axisLabel": {
            "interval": 0,
            "rotate": 0
        },
        "splitArea": {
            "show": true
        }
    }],
    "yAxis": [{ //Y轴(纵)
        "type": "category",
        "gridIndex": 0,
        "data": ["23:00", "22:00", "21:00", "20:00", "19:00", "18:00", "17:00", "16:00", "15:00", "14:00", "13:00", "12:00", "11:00", "10:00", "09:00", "08:00", "07:00", "06:00", "05:00", "04:00", "03:00", "02:00", "01:00", "00:00"],
        "axisLine": {
            "lineStyle": {
                "color": "#000"
            }
        },
        "axisLabel": {
            "interval": 0,
            "rotate": 0
        },
        "splitArea": {
            "show": true
        }
    }, {
        "type": "category",
        "gridIndex": 1,
        "data": ["23:00", "22:00", "21:00", "20:00", "19:00", "18:00", "17:00", "16:00", "15:00", "14:00", "13:00", "12:00", "11:00", "10:00", "09:00", "08:00", "07:00", "06:00", "05:00", "04:00", "03:00", "02:00", "01:00", "00:00"],
        "axisLine": {
            "lineStyle": {
                "color": "#000"
            }
        },
        "axisLabel": {
            "interval": 0,
            "rotate": 0
        },
        "splitArea": {
            "show": true
        }
    }, {
        "type": "category",
        "gridIndex": 2,
        "data": ["23:00", "22:00", "21:00", "20:00", "19:00", "18:00", "17:00", "16:00", "15:00", "14:00", "13:00", "12:00", "11:00", "10:00", "09:00", "08:00", "07:00", "06:00", "05:00", "04:00", "03:00", "02:00", "01:00", "00:00"],
        "axisLine": {
            "lineStyle": {
                "color": "#000"
            }
        },
        "axisLabel": {
            "interval": 0,
            "rotate": 0
        },
        "splitArea": {
            "show": true
        }
    }],
    "visualMap": { //右上角可视化图标
        "show": true,
        "right": 0,
        "top": 10,
        "align": "left",
        "pieces": [{
            "value": 0,
            "label": "费率0",
            "color": "#c1232b"
        }, {
            "value": 1,
            "label": "费率1",
            "color": "#27727b"
        }, {
            "value": 2,
            "label": "费率2",
            "color": "#e87c25"
        }, {
            "value": 3,
            "label": "费率3",
            "color": "#b5c334"
        }, {
            "value": 4,
            "label": "费率4",
            "color": "#fe8463"
        }, {
            "value": 5,
            "label": "费率5",
            "color": "#9bca63"
        }, {
            "value": 6,
            "label": "费率6",
            "color": "#fad860"
        }, {
            "value": 7,
            "label": "费率7",
            "color": "#f3a43b"
        }, {
            "value": 8,
            "label": "费率8",
            "color": "#60c0dd"
        }, {
            "value": 9,
            "label": "费率9",
            "color": "#d7504b"
        }]
    },
    "series": [{ //具体数据,数据样式
        "name": "星期一",
        "type": "heatmap",
        "data": data[0],
        "label": {
            "normal": {
                "show": false
            }
        },
        "gridIndex": 0,
        "xAxisIndex": 0,
        "yAxisIndex": 0,
        "itemStyle": {
            "emphasis": {
                "shadowBlur": 5,
                "borderWidth": 2,
                "borderColor": "white",
            },
            "borderWidth": 0.5,
            "borderType": "solid",
            "borderColor": "#ffffff"
        }
    }, {
        "name": "星期二",
        "type": "heatmap",
        "data": data[1],
        "label": {
            "normal": {
                "show": false
            }
        },
        "gridIndex": 1,
        "xAxisIndex": 1,
        "yAxisIndex": 1,
        "itemStyle": {
            "emphasis": {
                "shadowBlur": 5,
                "borderWidth": 2,
                "borderColor": "white",
            },
            "borderWidth": 0.5,
            "borderType": "solid",
            "borderColor": "#ffffff"
        }
    }, {
        "name": "星期三",
        "type": "heatmap",
        "data": data[2],
        "label": {
            "normal": {
                "show": false
            }
        },
        "gridIndex": 2,
        "xAxisIndex": 2,
        "yAxisIndex": 2,
        "itemStyle": {
            "emphasis": {
                "shadowBlur": 5,
                "borderWidth": 2,
                "borderColor": "white",
            },
            "borderWidth": 0.5,
            "borderType": "solid",
            "borderColor": "#ffffff"
        }
    }]
};
myChart.on('click', 'series', function(params) {
    if (fee_rule_color != -1) {
        data[params.seriesIndex][params.dataIndex][2] = fee_rule_color;
        myChart.setOption({
            series: [{
                "name": "星期一",
                "type": "heatmap",
                "data": data[0],
                "label": {
                    "normal": {
                        "show": false
                    }
                },
                "gridIndex": 0,
                "xAxisIndex": 0,
                "yAxisIndex": 0,
                "itemStyle": {
                    "emphasis": {
                        "shadowBlur": 5,
                        "borderWidth": 2,
                        "borderColor": "white",
                    },
                    "borderWidth": 0.5,
                    "borderType": "solid",
                    "borderColor": "#ffffff"
                }
            }, {
                "name": "星期一",
                "type": "heatmap",
                "data": data[1],
                "label": {
                    "normal": {
                        "show": false
                    }
                },
                "gridIndex": 1,
                "xAxisIndex": 1,
                "yAxisIndex": 1,
                "itemStyle": {
                    "emphasis": {
                        "shadowBlur": 5,
                        "borderWidth": 2,
                        "borderColor": "white",
                    },
                    "borderWidth": 0.5,
                    "borderType": "solid",
                    "borderColor": "#ffffff"
                }
            }, {
                "name": "星期三",
                "type": "heatmap",
                "data": data[2],
                "label": {
                    "normal": {
                        "show": false
                    }
                },
                "gridIndex": 2,
                "xAxisIndex": 2,
                "yAxisIndex": 2,
                "itemStyle": {
                    "emphasis": {
                        "shadowBlur": 5,
                        "borderWidth": 2,
                        "borderColor": "white",
                    },
                    "borderWidth": 0.5,
                    "borderType": "solid",
                    "borderColor": "#ffffff"
                }
            }]
        });
    }
});

myChart.on('mousedown', 'series', function(params) {
    mouseDown = 1;
    currentIndex = {
        x: params.value[0],
        y: params.value[1],
        zone: params.seriesIndex
    };
    startIndex = currentIndex;
    myChart.dispatchAction({ //隐藏提示
        type: 'hideTip'
    });
});
myChart.on('mousemove', 'series', function(params) {
    if (mouseDown == 1) {
        currentIndex = {
            x: params.value[0],
            y: params.value[1],
            zone: params.seriesIndex
        };
        dataIndexArray = LeftOrRight(currentIndex, startIndex, data);

        SelectedDataIndex(myChart);
    }
});
myChart.on('mouseup', 'series', function(params) {
    mouseDown = 0;
    SelectedCancelDataIndex(myChart);
    if (fee_rule_color > 0) {
        dataIndexArray.forEach(value => {
            value.index.forEach(x => {
                data[value.zone][x][2] = fee_rule_color;
            });
        });
        //刷新data
        myChart.setOption({
            series: [{
                "name": "星期一",
                "type": "heatmap",
                "data": data[0],
                "label": {
                    "normal": {
                        "show": false
                    }
                },
                "gridIndex": 0,
                "xAxisIndex": 0,
                "yAxisIndex": 0,
                "itemStyle": {
                    "emphasis": {
                        "shadowBlur": 5,
                        "borderWidth": 2,
                        "borderColor": "white",
                    },
                    "borderWidth": 0.5,
                    "borderType": "solid",
                    "borderColor": "#ffffff"
                }
            }, {
                "name": "星期二",
                "type": "heatmap",
                "data": data[1],
                "label": {
                    "normal": {
                        "show": false
                    }
                },
                "gridIndex": 1,
                "xAxisIndex": 1,
                "yAxisIndex": 1,
                "itemStyle": {
                    "emphasis": {
                        "shadowBlur": 5,
                        "borderWidth": 2,
                        "borderColor": "white",
                    },
                    "borderWidth": 0.5,
                    "borderType": "solid",
                    "borderColor": "#ffffff"
                }
            }, {
                "name": "星期三",
                "type": "heatmap",
                "data": data[2],
                "label": {
                    "normal": {
                        "show": false
                    }
                },
                "gridIndex": 2,
                "xAxisIndex": 2,
                "yAxisIndex": 2,
                "itemStyle": {
                    "emphasis": {
                        "shadowBlur": 5,
                        "borderWidth": 2,
                        "borderColor": "white",
                    },
                    "borderWidth": 0.5,
                    "borderType": "solid",
                    "borderColor": "#ffffff"
                }
            }]
        });

        dataIndexArray = [];
    }
});

//选中高亮
function SelectedDataIndex(allPlanChart) {
    allPlanChart.dispatchAction({
        type: 'downplay'
    });
    dataIndexArray.forEach(data => {
        allPlanChart.dispatchAction({
            type: 'highlight',
            seriesIndex: data.zone,
            dataIndex: data.index
        });
    });
    allPlanChart.dispatchAction({
        type: 'hideTip'
    })
}
//取消选中高亮
function SelectedCancelDataIndex(allPlanChart) {
    allPlanChart.dispatchAction({
        type: 'downplay'
    })
}