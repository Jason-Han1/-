var xdata = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
var ydata = [".2", ".4", ".6", ".8", ]
option = {
    backgroundColor: 'rgba(0,0,0,1)',
    grid: {
        left: '2%',
        right: '5%',
        top: '7%',
        bottom: '6%',
        containLabel: true
    },
    "tooltip": {
        "show": false
    },
    "xAxis": {
        "position": "buttom",
        "type": "category",
        "data": xdata,
        "splitArea": {
            "show": true
        },
        axisLabel: {
            textStyle: {
                fontSize: 18,
                color: '#fff'
            }
        },
        "axisLine": {
            "show": true
        },
        "axisTick": {
            "show": false
        },
    },
    "yAxis": {
        "nameLocation": "end",
        "type": "category",
        "data": ydata,
        "axisLine": {
            "show": true
        },
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: '#DDD'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            textStyle: {
                fontSize: 18,
                color: '#fff'
            },
            "rich": {
                "red": {
                    // "color": "#f00"
                }
            }
        },
        "splitArea": {
            "show": true
        }
    },
    // "visualMap": {
    //     show: false,
    //     "min": 0,
    //     "max": 50,
    //     "calculable": false,
    //     "orient": "horizontal",
    //     "right": "60%",
    //     "top": "0",
    //     "color": ['#f9cf67', '#e92b77']
    //     // inRange: {
    //     //     color: ['#e0ffff', '#006edd'],
    //     //     opacity: 0.3
    //     // },
    //     // controller: {
    //     //     inRange: {
    //     //         opacity: 0.5
    //     //     }
    //     // }
    // },
    "series": [{
            "name": "a",
            "type": "heatmap",
            data: [
                [0, 3, 3],
            ],
            "label": {
                "normal": {
                    fontSize: 20,
                    "show": true,
                    formatter: function(data) {
                        if (data.value[2].toFixed(1) != 0) {
                            return data.value[2];
                        } else {
                            return data.value = '';
                        }
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    color: 'rgba(5,39,89,0)',
                    borderColor: "rgba(255, 255, 255, 0.8)"
                },
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowColor": "rgba(255, 255, 255, 0.5)"
                }
            }
        },
        {
            name: 'b',
            "type": "heatmap",
            data: [

                // [1, 0, 0],
                [1, 3, 1],
                // [1, 2, 0],
                // [1, 3, 1],
            ],
            "label": {
                "normal": {
                    fontSize: 20,
                    "show": true,
                    formatter: function(data) {
                        if (data.value[2].toFixed(1) != 0) {
                            return data.value[2];
                        } else {
                            return data.value = '';
                        }
                    }
                }
            },

            "itemStyle": {
                "normal": {
                    color: 'rgba(2,100,161,1)',
                    borderColor: "rgba(25, 209, 225, 1)",
                    borderWidth: 2

                },
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowColor": "rgba(255, 255, 255, 0.5)"
                }
            }
        },
        {
            name: 'c',
            type: 'heatmap',
            data: [

                // [2, 0, 0],
                // [2, 1, 0],
                [2, 2, 4],
                // [2, 3, 0],

            ],
            "label": {
                "normal": {
                    fontSize: 20,
                    show: true,
                    formatter: function(data) {
                        if (data.value[2].toFixed(1) != 0) {
                            return data.value[2];
                        } else {
                            return data.value = '';
                        }
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    color: 'rgba(2,100,161,1)',
                    borderColor: "rgba(25, 209, 225, 1)",
                    borderWidth: 2
                },
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowColor": "rgba(255, 255, 255, 0.5)"
                }
            }
        },
        {
            name: 'd',
            type: 'heatmap',
            data: [
                // [3, 0, 0],
                // [3, 1, 0],
                [3, 2, 6],
                // [3, 3, 0],
            ],
            "label": {
                "normal": {
                    fontSize: 20,
                    "show": true,
                    formatter: function(data) {
                        if (data.value[2].toFixed(1) != 0) {
                            return data.value[2];
                        } else {
                            return data.value = '';
                        }
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    color: 'rgba(131,146,104,1)',
                    borderColor: "rgba(233, 240,14, 1)",
                    borderWidth: 2
                },
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowColor": "rgba(255, 255, 255, 0.5)"
                }
            }
        },
        {
            name: 'e',
            type: 'heatmap',
            data: [

                // [4, 0, 0],
                // [4, 1, 0.0],
                // [4, 2, 0],
                [4, 3, 4],

            ],
            "label": {
                "normal": {
                    fontSize: 20,
                    "show": true,
                    formatter: function(data) {
                        if (data.value[2].toFixed(1) != 0) {
                            return data.value[2];
                        } else {
                            return data.value = '';
                        }
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    color: 'rgba(131,146,104,1)',
                    borderColor: "rgba(233, 240,14, 1)",
                    borderWidth: 2
                },
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowColor": "rgba(255, 255, 255, 0.5)"
                }
            }
        },
        {
            name: 'f',
            type: 'heatmap',
            data: [

                [5, 0, 2],
                // [5, 1, 0],
                // [5, 2, 0],
                [5, 3, 2],
            ],
            "label": {
                "normal": {
                    fontSize: 20,
                    "show": true,
                    formatter: function(data) {
                        if (data.value[2].toFixed(1) != 0) {
                            return data.value[2];
                        } else {
                            return data.value = '';
                        }
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    color: 'rgba(131,14,33,1)',
                    borderColor: "rgba(240, 7,19, 1)",
                    borderWidth: 2
                },
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowColor": "rgba(255, 255, 255, 0.5)"
                }
            }

        },
        {
            name: 'g',
            type: 'heatmap',
            data: [
                // [5, 0, 2],
                // [6, 1, 0],
                [6, 0, 1],
                [6, 3, 1],
            ],
            "label": {
                "normal": {
                    fontSize: 20,
                    "show": true,
                    formatter: function(data) {
                        if (data.value[2].toFixed(1) != 0) {
                            return data.value[2];
                        } else {
                            return data.value = '';
                        }
                    }
                }
            },
            "itemStyle": {
                "normal": {
                    color: 'rgba(131,14,33,1)',
                    borderColor: "rgba(240, 7,19, 1)",
                    borderWidth: 2
                },
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowColor": "rgba(255, 255, 255, 0.5)"
                }
            }
        }

    ]
}