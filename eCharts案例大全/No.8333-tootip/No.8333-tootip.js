option = {
    "color": ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
    "gradientColor": ["#f6efa6", "#d88273", "#bf444c"],
    "textStyle": {
        "fontFamily": "sans-serif",
        "fontSize": 12,
        "fontStyle": "normal",
        "fontWeight": "normal"
    },
    "animation": "auto",
    "animationDuration": 1000,
    "animationDurationUpdate": 300,
    "animationEasing": "exponentialOut",
    "animationEasingUpdate": "cubicOut",
    "animationThreshold": 2000,
    "progressiveThreshold": 3000,
    "progressive": 400,
    "hoverLayerThreshold": 3000,
    "useUTC": false,
    "axisPointer": [{
        "show": "auto",
        "triggerOn": null,
        "zlevel": 0,
        "z": 50,
        "type": "line",
        "snap": false,
        "triggerTooltip": true,
        "value": null,
        "status": null,
        "link": [],
        "animation": null,
        "animationDurationUpdate": 200,
        "lineStyle": {
            "color": "#aaa",
            "width": 1,
            "type": "solid"
        },
        "shadowStyle": {
            "color": "rgba(150,150,150,0.3)"
        },
        "label": {
            "show": true,
            "formatter": null,
            "precision": "auto",
            "margin": 3,
            "color": "#fff",
            "padding": [5, 7, 5, 7],
            "backgroundColor": "auto",
            "borderColor": null,
            "borderWidth": 0,
            "shadowBlur": 3,
            "shadowColor": "#aaa"
        },
        "handle": {
            "show": false,
            "icon": "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
            "size": 45,
            "margin": 50,
            "color": "#333",
            "shadowBlur": 3,
            "shadowColor": "#aaa",
            "shadowOffsetX": 0,
            "shadowOffsetY": 2,
            "throttle": 40
        }
    }],
    "tooltip": [{
        "show": true,
        "trigger": "axis",
        "confine": true,
        "renderMode": "richText",
        "triggerOn": "click",
        "backgroundColor": "rgba(255, 255, 255, 1)",
        "textStyle": {
            "color": "#555",
            "fontSize": 14
        },
        "axisPointer": {
            "lineStyle": {
                "color": "#E9ECF2"
            },
            "type": "line",
            "axis": "auto",
            "animation": "auto",
            "animationDurationUpdate": 200,
            "animationEasingUpdate": "exponentialOut",
            "crossStyle": {
                "color": "#999",
                "width": 1,
                "type": "dashed",
                "textStyle": {}
            }
        },
        "extraCssText": "box-shadow: 0 2px 8px 2px rgba(62, 113, 214, .09);",
        "zlevel": 0,
        "z": 60,
        "showContent": true,
        "alwaysShowContent": false,
        "displayMode": "single",
        "showDelay": 0,
        "hideDelay": 100,
        "transitionDuration": 0.4,
        "enterable": false,
        "borderColor": "#333",
        "borderRadius": 4,
        "borderWidth": 0,
        "padding": 5
    }],
    "yAxis": [{
        "name": "分数",
        "nameTextStyle": {
            "color": "#999",
            "fontSize": 13,
            "align": "right"
        },
        "type": "value",
        "scale": true,
        "splitNumber": 6,
        "axisLine": {
            "show": false,
            "onZero": true,
            "onZeroAxisIndex": null,
            "lineStyle": {
                "color": "#333",
                "width": 1,
                "type": "solid"
            },
            "symbol": ["none", "none"],
            "symbolSize": [10, 15]
        },
        "axisTick": {
            "show": false,
            "inside": false,
            "length": 5,
            "lineStyle": {
                "width": 1
            }
        },
        "minInterval": 1,
        "axisLabel": {
            "color": "#999",
            "fontSize": 13,
            "margin": 0,
            "show": true,
            "inside": false,
            "rotate": 0,
            "showMinLabel": null,
            "showMaxLabel": null
        },
        "splitLine": {
            "lineStyle": {
                "type": "dotted",
                "color": "#E6E6E6",
                "width": 0.3333333333333333
            },
            "show": true
        },
        "min": 330,
        "max": 550,
        "boundaryGap": [0, 0],
        "minorTick": {
            "show": false,
            "splitNumber": 5,
            "length": 3,
            "lineStyle": {}
        },
        "minorSplitLine": {
            "show": false,
            "lineStyle": {
                "color": "#eee",
                "width": 1
            }
        },
        "show": true,
        "zlevel": 0,
        "z": 0,
        "inverse": false,
        "nameLocation": "end",
        "nameRotate": null,
        "nameTruncate": {
            "maxWidth": null,
            "ellipsis": "...",
            "placeholder": "."
        },
        "nameGap": 15,
        "silent": false,
        "triggerEvent": false,
        "tooltip": {
            "show": false
        },
        "axisPointer": {},
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
            }
        },
        "offset": 0,
        "rangeEnd": null,
        "rangeStart": null
    }],
    "xAxis": [{
        "type": "category",
        "boundaryGap": true,
        "data": [2015, 2016, 2017, 2018, 2019],
        "axisTick": {
            "show": false,
            "alignWithLabel": false,
            "interval": "auto",
            "inside": false,
            "length": 5,
            "lineStyle": {
                "width": 1
            }
        },
        "axisLabel": {
            "color": "#999",
            "fontSize": 13,
            "interval": "auto",
            "show": true,
            "inside": false,
            "rotate": 0,
            "showMinLabel": null,
            "showMaxLabel": null,
            "margin": 8
        },
        "axisLine": {
            "lineStyle": {
                "color": "#E9ECF2",
                "width": 1,
                "type": "solid"
            },
            "show": true,
            "onZero": true,
            "onZeroAxisIndex": null,
            "symbol": ["none", "none"],
            "symbolSize": [10, 15]
        },
        "deduplication": null,
        "splitLine": {
            "show": false,
            "lineStyle": {
                "color": ["#ccc"],
                "width": 1,
                "type": "solid"
            }
        },
        "show": true,
        "zlevel": 0,
        "z": 0,
        "inverse": false,
        "name": "",
        "nameLocation": "end",
        "nameRotate": null,
        "nameTruncate": {
            "maxWidth": null,
            "ellipsis": "...",
            "placeholder": "."
        },
        "nameTextStyle": {},
        "nameGap": 15,
        "silent": false,
        "triggerEvent": false,
        "tooltip": {
            "show": false
        },
        "axisPointer": {
            "status": "hide",
            "value": 4
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
            }
        },
        "offset": 0,
        "rangeEnd": null,
        "rangeStart": null
    }],
    "grid": [{
        "top": 35,
        "right": 10,
        "bottom": 25,
        "left": 35,
        "show": false,
        "zlevel": 0,
        "z": 0,
        "containLabel": false,
        "backgroundColor": "rgba(0,0,0,0)",
        "borderWidth": 1,
        "borderColor": "#ccc"
    }],
    "series": [{
        "symbol": "circle",
        "symbolSize": 2,
        "type": "line",
        "itemStyle": {
            "color": "#FF8989"
        },
        "zlevel": 2,
        "connectNulls": false,
        "label": {
            "show": true,
            "position": "top",
            "color": "#000"
        },
        "tooltip": {
            "show": true
        },
        "lineStyle": {
            "width": 3,
            "shadowBlur": 4,
            "shadowOffsetY": 4,
            "shadowColor": "rgba(255, 137, 137, .27)",
            "type": "solid"
        },
        "name": "本科二批",
        "data": [{
            "value": [0, 503],
            "label": {
                "show": true,
                "position": "top"
            },
            "symbol": "rect",
            "symbolSize": [10, 4],
            "type": "undergraduatesec",
            "emphasis": {
                "label": {
                    "show": true
                }
            }
        }, , {
            "value": [2, 515],
            "label": {
                "show": true,
                "position": "top"
            },
            "emphasis": {
                "label": {
                    "show": true
                }
            }
        }, {
            "value": [3, 489],
            "label": {
                "show": true,
                "position": "top"
            },
            "emphasis": {
                "label": {
                    "show": true
                }
            }
        }],
        "z": 2,
        "coordinateSystem": "cartesian2d",
        "legendHoverLink": true,
        "hoverAnimation": true,
        "clip": true,
        "step": false,
        "smooth": false,
        "smoothMonotone": null,
        "symbolRotate": null,
        "showSymbol": true,
        "showAllSymbol": "auto",
        "sampling": "none",
        "animationEasing": "linear",
        "progressive": 0,
        "hoverLayerThreshold": null,
        "emphasis": {
            "label": {
                "show": true
            }
        }
    }, {
        "symbol": "circle",
        "symbolSize": 2,
        "type": "line",
        "itemStyle": {
            "color": "#FF8989"
        },
        "zlevel": 2,
        "connectNulls": false,
        "label": {
            "show": false,
            "position": "top",
            "color": "#000"
        },
        "tooltip": {
            "show": false
        },
        "lineStyle": {
            "width": 3,
            "shadowBlur": 4,
            "shadowOffsetY": 4,
            "shadowColor": "rgba(255, 137, 137, .27)",
            "type": "solid"
        },
        "name": "",
        "data": [
            [3, 489],
            [4, 491]
        ],
        "z": 2,
        "coordinateSystem": "cartesian2d",
        "legendHoverLink": true,
        "hoverAnimation": true,
        "clip": true,
        "step": false,
        "smooth": false,
        "smoothMonotone": null,
        "symbolRotate": null,
        "showSymbol": true,
        "showAllSymbol": "auto",
        "sampling": "none",
        "animationEasing": "linear",
        "progressive": 0,
        "hoverLayerThreshold": null,
        "emphasis": {
            "label": {
                "show": false
            }
        }
    }, {
        "symbol": "circle",
        "symbolSize": 2,
        "type": "line",
        "itemStyle": {
            "color": "#FF246E"
        },
        "zlevel": 2,
        "connectNulls": false,
        "label": {
            "show": true,
            "position": "top",
            "color": "#000"
        },
        "tooltip": {
            "show": true
        },
        "lineStyle": {
            "width": 3,
            "shadowBlur": 4,
            "shadowOffsetY": 4,
            "shadowColor": "rgba(255, 137, 137, .27)",
            "type": "solid"
        },
        "name": "本科二批省控",
        "data": [{
            "value": [0, 495],
            "label": {
                "show": true,
                "position": "bottom"
            },
            "symbol": "rect",
            "symbolSize": [10, 4],
            "type": "undergraduatesecSK",
            "emphasis": {
                "label": {
                    "show": true
                }
            }
        }, , {
            "value": [2, 439],
            "label": {
                "show": true,
                "position": "bottom"
            },
            "emphasis": {
                "label": {
                    "show": true
                }
            }
        }, {
            "value": [3, 432],
            "label": {
                "show": true,
                "position": "bottom"
            },
            "emphasis": {
                "label": {
                    "show": true
                }
            }
        }],
        "z": 2,
        "coordinateSystem": "cartesian2d",
        "legendHoverLink": true,
        "hoverAnimation": true,
        "clip": true,
        "step": false,
        "smooth": false,
        "smoothMonotone": null,
        "symbolRotate": null,
        "showSymbol": true,
        "showAllSymbol": "auto",
        "sampling": "none",
        "animationEasing": "linear",
        "progressive": 0,
        "hoverLayerThreshold": null,
        "emphasis": {
            "label": {
                "show": true
            }
        }
    }, {
        "symbol": "circle",
        "symbolSize": 2,
        "type": "line",
        "itemStyle": {
            "color": "#FF246E"
        },
        "zlevel": 2,
        "connectNulls": false,
        "label": {
            "show": false,
            "position": "top",
            "color": "#000"
        },
        "tooltip": {
            "show": false
        },
        "lineStyle": {
            "width": 3,
            "shadowBlur": 4,
            "shadowOffsetY": 4,
            "shadowColor": "rgba(255, 137, 137, .27)",
            "type": "solid"
        },
        "name": "",
        "data": [
            [3, 432],
            [4, 423]
        ],
        "z": 2,
        "coordinateSystem": "cartesian2d",
        "legendHoverLink": true,
        "hoverAnimation": true,
        "clip": true,
        "step": false,
        "smooth": false,
        "smoothMonotone": null,
        "symbolRotate": null,
        "showSymbol": true,
        "showAllSymbol": "auto",
        "sampling": "none",
        "animationEasing": "linear",
        "progressive": 0,
        "hoverLayerThreshold": null,
        "emphasis": {
            "label": {
                "show": false
            }
        }
    }, {
        "symbol": "circle",
        "symbolSize": 2,
        "type": "line",
        "itemStyle": {
            "color": "#8176FF"
        },
        "zlevel": 2,
        "connectNulls": false,
        "label": {
            "show": true,
            "position": "top",
            "color": "#000"
        },
        "tooltip": {
            "show": true
        },
        "lineStyle": {
            "width": 3,
            "shadowBlur": 4,
            "shadowOffsetY": 4,
            "shadowColor": "rgba(129, 118, 255, .27)",
            "type": "solid"
        },
        "name": "本科批",
        "data": [null, null, null, null, {
                "value": [4, 491],
                "label": {
                    "show": true,
                    "position": "top"
                },
                "emphasis": {
                    "label": {
                        "show": true
                    }
                }
            },
            [5, 491]
        ],
        "z": 2,
        "coordinateSystem": "cartesian2d",
        "legendHoverLink": true,
        "hoverAnimation": true,
        "clip": true,
        "step": false,
        "smooth": false,
        "smoothMonotone": null,
        "symbolRotate": null,
        "showSymbol": true,
        "showAllSymbol": "auto",
        "sampling": "none",
        "animationEasing": "linear",
        "progressive": 0,
        "hoverLayerThreshold": null,
        "emphasis": {
            "label": {
                "show": true
            }
        }
    }, {
        "symbol": "circle",
        "symbolSize": 2,
        "type": "line",
        "itemStyle": {
            "color": "#7D2DD0"
        },
        "zlevel": 2,
        "connectNulls": false,
        "label": {
            "show": true,
            "position": "top",
            "color": "#000"
        },
        "tooltip": {
            "show": true
        },
        "lineStyle": {
            "width": 3,
            "shadowBlur": 4,
            "shadowOffsetY": 4,
            "shadowColor": "rgba(129, 118, 255, .27)",
            "type": "solid"
        },
        "name": "本科批省控",
        "data": [null, null, null, null, {
                "value": [4, 423],
                "label": {
                    "show": true,
                    "position": "bottom"
                },
                "emphasis": {
                    "label": {
                        "show": true
                    }
                }
            },
            [5, 423]
        ],
        "z": 2,
        "coordinateSystem": "cartesian2d",
        "legendHoverLink": true,
        "hoverAnimation": true,
        "clip": true,
        "step": false,
        "smooth": false,
        "smoothMonotone": null,
        "symbolRotate": null,
        "showSymbol": true,
        "showAllSymbol": "auto",
        "sampling": "none",
        "animationEasing": "linear",
        "progressive": 0,
        "hoverLayerThreshold": null,
        "emphasis": {
            "label": {
                "show": true
            }
        }
    }],
    "visualMap": [],
    "legend": [],
    "markArea": [{
        "zlevel": 0,
        "z": 1,
        "tooltip": {
            "trigger": "item"
        },
        "animation": false,
        "label": {
            "show": true,
            "position": "top"
        },
        "itemStyle": {
            "borderWidth": 0
        },
        "emphasis": {
            "label": {
                "show": true,
                "position": "top"
            }
        }
    }],
    "markLine": [{
        "zlevel": 0,
        "z": 5,
        "symbol": ["circle", "arrow"],
        "symbolSize": [8, 16],
        "precision": 2,
        "tooltip": {
            "trigger": "item"
        },
        "label": {
            "show": true,
            "position": "end"
        },
        "lineStyle": {
            "type": "dashed"
        },
        "emphasis": {
            "label": {
                "show": true
            },
            "lineStyle": {
                "width": 3
            }
        },
        "animationEasing": "linear"
    }],
    "markPoint": [{
        "zlevel": 0,
        "z": 5,
        "symbol": "pin",
        "symbolSize": 50,
        "tooltip": {
            "trigger": "item"
        },
        "label": {
            "show": true,
            "position": "inside"
        },
        "itemStyle": {
            "borderWidth": 2
        },
        "emphasis": {
            "label": {
                "show": true
            }
        }
    }],
    "marker": [],
    "brush": [],
    "dataZoom": []
}