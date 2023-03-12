data = [{
        name: "常规",
        value: 175
    },
    {
        name: "紧急",
        value: 148
    },
    {
        name: "疑难",
        value: 95
    }
];
xAxisData = [];
seriesData1 = [];
sum = 0;
barTopColor = ["#FDC01A", "#2EFFF8", "#FF3A3A"];
barBottomColor = ["rgba(255, 212, 73, 0.1)", "rgba(4, 245, 255, 0.1)", "rgba(255, 76, 57, 0.1)"];
data.forEach(item => {
    xAxisData.push(item.name);
    seriesData1.push(item.value);
    sum += item.value;
});
option = {
    backgroundColor: '#061326',
    legend: {
        top:'3%',
        data:[
            {
                name:'常规',
                icon:'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU5RTNGRkUyREFFMDExRUE4OTUwOTQzRjI2QTJDODk0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU5RTNGRkUzREFFMDExRUE4OTUwOTQzRjI2QTJDODk0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTlFM0ZGRTBEQUUwMTFFQTg5NTA5NDNGMjZBMkM4OTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTlFM0ZGRTFEQUUwMTFFQTg5NTA5NDNGMjZBMkM4OTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5Xt/mqAAAA9klEQVR42mL8f8WTAQmIAHEREPsAsRoQszNgBz+B+AYQbwLiSQza297AJBj/X3aHsYOBeC4Q8zOQBj4BcRKDzo61IA4Tw/+/DEAcDMSrgZgfyicF84H1XnYNhrjwgqMokL4DxHwMlAGQS1VZGP7/yaWCYQxQMwpY/v/748dAPeDDwvDvjwYVDVQHGUhF8xh+gQwEpSd9Khl4DxQpm6ho4FbGv0dUxYCM29RLNv/+vAKndAaG1aB0SaZh/0FmMNneewXLKWuBOAyIP5ORU0B6QoGGgbMe498D0tgKB19QEgBiVhwu+grEt0BhBsQTmeyfwAsHgAADADkyiHZYPJWCAAAAAElFTkSuQmCC'
            },
            {
                name:'紧急',
                icon:'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU5Njc1RTBCREFFMDExRUE4NEVCQkRGRTI5QkY5MDI3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU5Njc1RTBDREFFMDExRUE4NEVCQkRGRTI5QkY5MDI3Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTk2NzVFMDlEQUUwMTFFQTg0RUJCREZFMjlCRjkwMjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTk2NzVFMEFEQUUwMTFFQTg0RUJCREZFMjlCRjkwMjciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7F0nHBAAAA6klEQVR42mJk/vqfAQmIAHEREPsAsRoQszNgBz+B+AYQbwLiSX+4GN7AJBjZPsENDAbiuUDMz0Aa+ATEST95GdaCDeR8/x9m2GoQn4E8ADIk9JsAw1pGvlf/RYGcO0DMx0AZALlUlYX1N0MuFQxjgJpRADLQj4F6wIeF7ReDBhUNVAcZSE3wC+RlUHrSp5KB90Au3ERFA7cymhz5LwZk3KZmsnkFSulUSNhJxxwYXoEMBAFQtgkD4nlAzEuiYZ+BOPGgKyTrsTD/hUusAeID0MLBF5QEgJgVhyFfgfgWKMyAeOI+D0ThABBgAAM2PO5tXGk1AAAAAElFTkSuQmCC'
            },
            {
                name:'疑难',
                icon:'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU4RkE2N0RDREFFMDExRUE5MjhGRDk3QjBDODY3RkQ5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU4RkE2N0REREFFMDExRUE5MjhGRDk3QjBDODY3RkQ5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NThGQTY3REFEQUUwMTFFQTkyOEZEOTdCMEM4NjdGRDkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NThGQTY3REJEQUUwMTFFQTkyOEZEOTdCMEM4NjdGRDkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6bdAxVAAAA7UlEQVR42mL872PJgAREgLgIiH2AWA2I2Rmwg59AfAOINwHxJIbNx97AJBj/e8MNDAbiuUDMz0Aa+ATESQxbjq0FcZgY/gPJ/0DD/jOsBmJ+KJ8UzAfW620VDHGhp6UokL4DxHwMlAGQS1VZGP4x5FLBMAaoGQUsQOf6MVAP+IBcqEFFA9VBBlIT/ALF8g0yYhYXvscEdOEmsCupg7cy/rezFAMyb1Mr2YBc+AqIk4D4PwUu+w824+CxV7CcshaIw4D4MxnhBtITynAYNeuB8BogVgLidiC+AsS/8RjyFYjPA3ELWM8RiGEgABBgAMzcpI2CaD3LAAAAAElFTkSuQmCC'
            },
        ],
        itemGap:32,
        itemWidth: 21,
        itemHeight:14,
        textStyle: {
            color:'#fff',
            padding:[2,0,0,0]
        }
    },
    grid:{
        top:'25%',
        bottom:'15%'
    },
    xAxis: {
        data: xAxisData,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: true,
            margin: 25,
            align: 'center',
            formatter: function(params, index) {
                return '{a|' + (seriesData1[index] / sum * 100).toFixed(2) + '%}' + '\n' + '{b|' + params + '}';
            },
            textStyle: {
                fontSize: 14,
                color: '#ffffff',
                rich: {
                    a: {
                        fontSize: 12,
                        color: '#ffffff'
                    },
                    b: {
                        height: 20,
                        fontSize: 14,
                        color: '#ffffff'
                    }
                }
            }
        },
        interval: 0
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    },
    series: [{
        name: '常规',
        type: 'pictorialBar',
        symbolSize: [0,10],
        symbolOffset: [0, -5],
        z: 12,
        itemStyle: {
            normal: {
                color: '#FFFFFF'
            }
        },
        label: {
            show: true,
            position: 'top',
            fontSize: 16
        },
        symbolPosition: 'end',
        data: [10,'','']
    }, {
        name: '常规',
        type: 'pictorialBar',
        symbolSize: [26, 10],
        symbolOffset: [0, 5],
        z: 12,
        itemStyle: {
            normal: {
                color: function(params) {
                    return barTopColor[params.dataIndex];
                }
            }
        },
        data: [10,'','']
    }, {
        name: '常规',
        type: 'pictorialBar',
        symbolSize: [50, 20],
        symbolOffset: [0, -15],
        z: 18,
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(255, 212, 73, 0)' // 0% 处的颜色
                    },{
                        offset: 0.5, color: '#FDC01A' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#FDC01A' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                borderWidth: 3,
                shadowColor: '#FFFFFF',
                shadowBlur: 5
            }
        },
        data: [10,'','']
    }, {
        name: '常规',
        type: 'pictorialBar',
        symbolSize: [62, 22],
        symbolOffset: [0, 17],
        z: 10,
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor: '#FDC01A',
                borderWidth: 2,
                shadowColor: '#FFFFFF',
                shadowBlur: 5
            }
        },
        data: [10,'','']
    }, {
        name: '常规',
        type: 'bar',
        itemStyle: {
            normal: {
                color: function(params) {
                    return new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0.7,
                                color: barTopColor[params.dataIndex]
                            },
                            {
                                offset: 0,
                                color: barBottomColor[params.dataIndex]
                            }
                        ]
                    );
                },
                opacity: 0.9
            }
        },
        z: 16,
        silent: true,
        barWidth: 26,
        barGap: '-100%', // Make series be overlap
        data: [10,'','']
    },{
        name: '紧急',
        type: 'pictorialBar',
        symbolSize: [0,10],
        symbolOffset: [0, -5],
        z: 12,
        itemStyle: {
            normal: {
                color: '#FFFFFF'
            }
        },
        label: {
            show: true,
            position: 'top',
            fontSize: 16
        },
        symbolPosition: 'end',
        data: ['',10,'']
    }, {
        name: '紧急',
        type: 'pictorialBar',
        symbolSize: [26, 10],
        symbolOffset: [0, 5],
        z: 12,
        itemStyle: {
            normal: {
                color: function(params) {
                    return barTopColor[params.dataIndex];
                }
            }
        },
        data: ['',10,'']
    }, {
        name: '紧急',
        type: 'pictorialBar',
        symbolSize: [50, 20],
        symbolOffset: [0, -15],
        z: 18,
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(255, 212, 73, 0)' // 0% 处的颜色
                    },{
                        offset: 0.5, color: '#2EFFF8' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#2EFFF8' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                borderWidth: 3,
                shadowColor: '#FFFFFF',
                shadowBlur: 5
            }
        },
        data: ['',10,'']
    }, {
        name: '紧急',
        type: 'pictorialBar',
        symbolSize: [62, 22],
        symbolOffset: [0, 17],
        z: 10,
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor: '#2EFFF8',
                borderWidth: 2,
                shadowColor: '#FFFFFF',
                shadowBlur: 5
            }
        },
        data: ['',10,'']
    }, {
        name: '紧急',
        type: 'bar',
        itemStyle: {
            normal: {
                color: function(params) {
                    return new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0.7,
                                color: barTopColor[params.dataIndex]
                            },
                            {
                                offset: 0,
                                color: barBottomColor[params.dataIndex]
                            }
                        ]
                    );
                },
                opacity: 0.9
            }
        },
        z: 16,
        silent: true,
        barWidth: 26,
        barGap: '-100%', // Make series be overlap
        data: ['',10,'']
    },{
        name: '疑难',
        type: 'pictorialBar',
        symbolSize: [0,10],
        symbolOffset: [0, -5],
        z: 12,
        itemStyle: {
            normal: {
                color: '#FFFFFF'
            }
        },
        label: {
            show: true,
            position: 'top',
            fontSize: 16
        },
        symbolPosition: 'end',
        data: ['','',10]
    }, {
        name: '疑难',
        type: 'pictorialBar',
        symbolSize: [26, 10],
        symbolOffset: [0, 5],
        z: 12,
        itemStyle: {
            normal: {
                color: function(params) {
                    return barTopColor[params.dataIndex];
                }
            }
        },
        data: ['','',10]
    }, {
        name: '疑难',
        type: 'pictorialBar',
        symbolSize: [50, 20],
        symbolOffset: [0, -15],
        z: 18,
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(255, 212, 73, 0)' // 0% 处的颜色
                    },{
                        offset: 0.5, color: '#FF3A3A' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#FF3A3A' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                borderWidth: 3,
                shadowColor: '#FFFFFF',
                shadowBlur: 5
            }
        },
        data: ['','',10]
    }, {
        name: '疑难',
        type: 'pictorialBar',
        symbolSize: [62, 22],
        symbolOffset: [0, 17],
        z: 10,
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor: '#FF3A3A',
                borderWidth: 2,
                shadowColor: '#FFFFFF',
                shadowBlur: 5
            }
        },
        data: ['','',10]
    }, {
        name: '疑难',
        type: 'bar',
        itemStyle: {
            normal: {
                color: function(params) {
                    return new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 0.7,
                                color: barTopColor[params.dataIndex]
                            },
                            {
                                offset: 0,
                                color: barBottomColor[params.dataIndex]
                            }
                        ]
                    );
                },
                opacity: 0.9
            }
        },
        z: 16,
        silent: true,
        barWidth: 26,
        barGap: '-100%', // Make series be overlap
        data: ['','',10]
    }]
};