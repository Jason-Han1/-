option = {
    "chartex": {
        "displayMode": "stack_horizontal_bar"
    },
    "chart": {
        "width": 480,
        "height": 320,
        "theme": "demo"
    },
    "grid": {
        "containLabel": true,
        "containLabelX": true,
        "horizontalAxisLabelHeight": 12,
        "bottom": 28
    },
    "xAxis": {
        "name": "数值",
        "axisLabel": {
            "show": true,
            "margin": 8,
            "rotate": 0
        },
        "isAxisLabelLineFeed": false,
        "type": "value",
        "fieldFormat": {
            "dateFormat": "",
            "decimal": 2,
            "forceDecimal": true,
            "prefix": "",
            "scale": 1,
            "source": "SpreadSheet",
            "suffix": "",
            "timeFormat": "",
            "type": "DOUBLE",
            "viewType": "DISPLAYVALUE"
        }
    },
    "yAxis": {
        nameTextStyle: {
            color: "yellow"
        },
        "name": "名称",
        "axisLabel": {

            "show": true,
            "margin": 8,
            "rotate": 0,
            "interval": 0,
            formatter: function(params) {
                var newParamsName = ""; // 最终拼接成的字符串
                var paramsNameNumber = params.length; // 实际标签的个数
                var provideNumber = 4; // 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    for (var p = 0; p < rowNumber; p++) {
                        var tempStr = ""; // 表示每一次截取的字符串
                        var start = p * provideNumber; // 开始截取的位置
                        var end = start + provideNumber; // 结束截取的位置
                        // 此处特殊处理最后一行的索引值
                        if (p == rowNumber - 1) {
                            // 最后一次不换行
                            tempStr = params.substring(start, paramsNameNumber);
                        } else {
                            // 每一次拼接字符串并换行
                            tempStr = params.substring(start, end) + "\n";
                        }
                        newParamsName += tempStr; // 最终拼成的字符串
                    }

                } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
            }


        },
        "isAxisLabelLineFeed": true,
        "type": "category",
        "filedName": "名称",
        "fieldFormat": {
            "dateFormat": "",
            "decimal": -1,
            "forceDecimal": true,
            "prefix": "",
            "scale": 1,
            "source": "SpreadSheet",
            "suffix": "",
            "timeFormat": "",
            "type": "STRING",
            "viewType": "DISPLAYVALUE"
        },
        "data": ["这是一个很长很长很长的名称1", "这是一个很长很长很长的名称2", "这是一个很长很长很长的名称3", "这是一个很长很长很长的名称4", "这是一个很长很长很长的名称5"]
    },
    "legend": {
        "show": false,
        "data": []
    },
    "sendDataSetting": {
        "selectParams": false,
        "selectCell": false
    },
    "chartTemplate": {
        "id": "echarts_bar_horizontal_stack",
        "type": "echarts_bar"
    },
    "series": [{
        "name": "数值",
        "fieldFormat": {
            "dateFormat": "",
            "decimal": 2,
            "forceDecimal": true,
            "prefix": "",
            "scale": 1,
            "source": "SpreadSheet",
            "suffix": "",
            "timeFormat": "",
            "type": "DOUBLE",
            "viewType": "DISPLAYVALUE"
        },
        "data": [{
            "rowIndex": 0,
            "value": [200, 0],
            "displayValue": "200",
            "rawRowIndex": 0,
            "itemColorFrom": "default",
            "itemStyle": {
                "normal": {
                    "color": "#c12e34"
                }
            }
        }, {
            "rowIndex": 1,
            "value": [50, 1],
            "displayValue": "50",
            "rawRowIndex": 1,
            "itemColorFrom": "default",
            "itemStyle": {
                "normal": {
                    "color": "#e6b600"
                }
            }
        }, {
            "rowIndex": 2,
            "value": [300, 2],
            "displayValue": "300",
            "rawRowIndex": 2,
            "itemColorFrom": "default",
            "itemStyle": {
                "normal": {
                    "color": "#0098d9"
                }
            }
        }, {
            "rowIndex": 3,
            "value": [68, 3],
            "displayValue": "68",
            "rawRowIndex": 3,
            "itemColorFrom": "default",
            "itemStyle": {
                "normal": {
                    "color": "#2b821d"
                }
            }
        }, {
            "rowIndex": 4,
            "value": [239, 4],
            "displayValue": "239",
            "rawRowIndex": 4,
            "itemColorFrom": "default",
            "itemStyle": {
                "normal": {
                    "color": "#005eaa"
                }
            }
        }],
        "type": "bar",
        "stack": "default"
    }],
    "resId": "I8aaa80a001695dc45dc41ba0016aa22fe14a325c",
    "id": "I8aaa80a001695dc45dc41ba0016b6af07654706e",
    "chartdata": {
        "columnsCount": 2,
        "data": [
            [{
                "col": 0,
                "df": {
                    "dateFormat": "",
                    "decimal": -1,
                    "forceDecimal": true,
                    "prefix": "",
                    "scale": 1,
                    "source": "SpreadSheet",
                    "suffix": "",
                    "timeFormat": "",
                    "type": "STRING",
                    "viewType": "DISPLAYVALUE"
                },
                "displayValue": "这是一个很长很长很长的名称1",
                "row": 1,
                "sheetName": "Sheet1",
                "value": "这是一个很长很长很长的名称1"
            }, {
                "col": 1,
                "df": {
                    "dateFormat": "",
                    "decimal": 2,
                    "forceDecimal": true,
                    "prefix": "",
                    "scale": 1,
                    "source": "SpreadSheet",
                    "suffix": "",
                    "timeFormat": "",
                    "type": "DOUBLE",
                    "viewType": "DISPLAYVALUE"
                },
                "displayValue": "200",
                "row": 1,
                "sheetName": "Sheet1",
                "value": 200
            }],
            [{
                "col": 0,
                "df": {
                    "dateFormat": "",
                    "decimal": -1,
                    "forceDecimal": true,
                    "prefix": "",
                    "scale": 1,
                    "source": "SpreadSheet",
                    "suffix": "",
                    "timeFormat": "",
                    "type": "STRING",
                    "viewType": "DISPLAYVALUE"
                },
                "displayValue": "这是一个很长很长很长的名称2",
                "row": 2,
                "sheetName": "Sheet1",
                "value": "这是一个很长很长很长的名称2"
            }, {
                "col": 1,
                "df": {
                    "dateFormat": "",
                    "decimal": 2,
                    "forceDecimal": true,
                    "prefix": "",
                    "scale": 1,
                    "source": "SpreadSheet",
                    "suffix": "",
                    "timeFormat": "",
                    "type": "DOUBLE",
                    "viewType": "DISPLAYVALUE"
                },
                "displayValue": "50",
                "row": 2,
                "sheetName": "Sheet1",
                "value": 50
            }],
            [{
                "col": 0,
                "df": {
                    "dateFormat": "",
                    "decimal": -1,
                    "forceDecimal": true,
                    "prefix": "",
                    "scale": 1,
                    "source": "SpreadSheet",
                    "suffix": "",
                    "timeFormat": "",
                    "type": "STRING",
                    "viewType": "DISPLAYVALUE"
                },
                "displayValue": "这是一个很长很长很长的名称3",
                "row": 3,
                "sheetName": "Sheet1",
                "value": "这是一个很长很长很长的名称3"
            }, {
                "col": 1,
                "df": {
                    "dateFormat": "",
                    "decimal": 2,
                    "forceDecimal": true,
                    "prefix": "",
                    "scale": 1,
                    "source": "SpreadSheet",
                    "suffix": "",
                    "timeFormat": "",
                    "type": "DOUBLE",
                    "viewType": "DISPLAYVALUE"
                },
                "displayValue": "300",
                "row": 3,
                "sheetName": "Sheet1",
                "value": 300
            }],
            [{
                "col": 0,
                "df": {
                    "dateFormat": "",
                    "decimal": -1,
                    "forceDecimal": true,
                    "prefix": "",
                    "scale": 1,
                    "source": "SpreadSheet",
                    "suffix": "",
                    "timeFormat": "",
                    "type": "STRING",
                    "viewType": "DISPLAYVALUE"
                },
                "displayValue": "这是一个很长很长很长的名称4",
                "row": 4,
                "sheetName": "Sheet1",
                "value": "这是一个很长很长很长的名称4"
            }, {
                "col": 1,
                "df": {
                    "dateFormat": "",
                    "decimal": 2,
                    "forceDecimal": true,
                    "prefix": "",
                    "scale": 1,
                    "source": "SpreadSheet",
                    "suffix": "",
                    "timeFormat": "",
                    "type": "DOUBLE",
                    "viewType": "DISPLAYVALUE"
                },
                "displayValue": "68",
                "row": 4,
                "sheetName": "Sheet1",
                "value": 68
            }],
            [{
                "col": 0,
                "df": {
                    "dateFormat": "",
                    "decimal": -1,
                    "forceDecimal": true,
                    "prefix": "",
                    "scale": 1,
                    "source": "SpreadSheet",
                    "suffix": "",
                    "timeFormat": "",
                    "type": "STRING",
                    "viewType": "DISPLAYVALUE"
                },
                "displayValue": "这是一个很长很长很长的名称5",
                "row": 5,
                "sheetName": "Sheet1",
                "value": "这是一个很长很长很长的名称5"
            }, {
                "col": 1,
                "df": {
                    "dateFormat": "",
                    "decimal": 2,
                    "forceDecimal": true,
                    "prefix": "",
                    "scale": 1,
                    "source": "SpreadSheet",
                    "suffix": "",
                    "timeFormat": "",
                    "type": "DOUBLE",
                    "viewType": "DISPLAYVALUE"
                },
                "displayValue": "239",
                "row": 5,
                "sheetName": "Sheet1",
                "value": 239
            }]
        ],
        "fields": [{
            "alias": "名称",
            "dataFormat": {
                "dateFormat": "",
                "decimal": -1,
                "forceDecimal": true,
                "prefix": "",
                "scale": 1,
                "source": "SpreadSheet",
                "suffix": "",
                "timeFormat": "",
                "type": "STRING",
                "viewType": "DISPLAYVALUE"
            },
            "id": "Sheet1!$A$2:$A$6",
            "name": "",
            "realName": ""
        }, {
            "alias": "数值",
            "dataFormat": {
                "dateFormat": "",
                "decimal": 2,
                "forceDecimal": true,
                "prefix": "",
                "scale": 1,
                "source": "SpreadSheet",
                "suffix": "",
                "timeFormat": "",
                "type": "DOUBLE",
                "viewType": "DISPLAYVALUE"
            },
            "id": "Sheet1!$B$2:$B$6",
            "name": "",
            "realName": ""
        }],
        "mergeData": [],
        "mergerOtherObj": null,
        "paramsData": [],
        "rowsCount": 5
    },
    "chartDefine": "{\"chartDatas\":{\"fieldList\":[{\"id\":\"Sheet1!$A$2:$A$6\",\"alias\":\"名称\",\"axisType\":\"categories\"},{\"id\":\"Sheet1!$B$2:$B$6\",\"alias\":\"数值\",\"axisType\":\"yAxis\"}],\"insertMode\":\"SmartbiOfficeAddIn2007.InsertChart2\",\"datasetMode\":false}}",
    "tooltip": {}
}