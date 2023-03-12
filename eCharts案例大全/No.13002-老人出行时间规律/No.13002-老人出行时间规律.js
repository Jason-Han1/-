var uploadedDataURL = "/asset/get/s/data-1550402032092-ocV5b75OY.csv";



//var uploadedDataURL = "/asset/get/s/data-1540539057476-HAvBUfQRD.csv";
$.ajax({
    url: uploadedDataURL,
    dataType: "text",
    method: "GET",
    success: function(csvdata) {
        var rows = csvdata.split('\n');
        var xdata = [],
            renci = [],
            renshu = [],
            fre = [];
        for (var r in rows) {

            if (r < 1)
                continue;

            var row = rows[r].slice(1,rows[r].length).split(',');

            if (row[0]) {
                xdata.push(row[0].slice(6,8));
                //console.log(row[0].slice(6,8));
                renci.push(row[1]);
                renshu.push(row[2]);
                fre.push(row[3]);
            }

        }


        option = {
            "title": {
                "text": "老人出行时间规律",
                "left": "center",
                "y": "10",
                "textStyle": {
                    "color": "#fff"
                }
            },
            "backgroundColor": "#1c2e40",
            "color": "#384757",
            "tooltip": {
                "trigger": "axis",
                "axisPointer": {
                    "type": "cross",
                    "crossStyle": {
                        "color": "#384757"
                    }
                }
            },
            "legend": {
                "data": [{
                        "name": "出行人次",
                        "icon": "circle",
                        "textStyle": {
                            "color": "#7d838b"
                        }
                    },
                    {
                        "name": "出行人数",
                        "icon": "circle",
                        "textStyle": {
                            "color": "#7d838b"
                        }
                    },
                    {
                        "name": "换乘频率",
                        "icon": "circle",
                        "textStyle": {
                            "color": "#7d838b"
                        }
                    }
                ],
                "top": "10%",
                "textStyle": {
                    "color": "#fff"
                }
            },
            "xAxis": [{
                "type": "category",
                "name": "日期(2014年5月)",
                "nameLocation":"end",
                "nameRotate":-30,
                "nameGap":30,
                "nameTextStyle": {
                    "color": "#7d838b",
                },
                "data": xdata,
                "axisPointer": {
                    "type": "shadow"
                },
                "axisLabel": {
                    "show": true,
                    "textStyle": {
                        "color": "#7d838b"
                    }
                }
            }],
            "yAxis": [{
                    "type": "value",
                    "name": "人数",
                    "nameTextStyle": {
                        "color": "#7d838b"
                    },
                    "min": 15000,
                    "max": 105000,
                    "axisLabel": {
                        "show": true,
                        "textStyle": {
                            "color": "#7d838b"
                        }
                    },
                    "axisLine": {
                        "show": true
                    },
                    "splitLine": {
                        "lineStyle": {
                            "color": "#7d838b"
                        }
                    }
                },
                {
                    "type": "value",
                    "name": "换乘频率",
                    "min": 2,
                    "max": 4,
                    "show": true,
                    "axisLabel": {
                        "show": true,
                        "textStyle": {
                            "color": "#7d838b"
                        }
                    }
                }
            ],
            "grid": {
                "top": "20%"
            },
            "series": [{
                    "name": "出行人次",
                    "type": "bar",
                    "data": renci,
                    "barWidth": "auto",
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "colorStops": [{
                                        "offset": 0,
                                        "color": "rgba(255,37,117,0.7)"
                                    },
                                    {
                                        "offset": 0.5,
                                        "color": "rgba(0,133,245,0.7)"
                                    },
                                    {
                                        "offset": 1,
                                        "color": "rgba(0,133,245,0.3)"
                                    }
                                ],
                                "globalCoord": false
                            }
                        }
                    }
                },
                {
                    "name": "出行人数",
                    "type": "bar",
                    "data": renshu,
                    "barWidth": "auto",
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "type": "linear",
                                "x": 0,
                                "y": 0,
                                "x2": 0,
                                "y2": 1,
                                "colorStops": [{
                                        "offset": 0,
                                        "color": "rgba(255,37,117,0.7)"
                                    },
                                    {
                                        "offset": 0.5,
                                        "color": "rgba(0,255,252,0.7)"
                                    },
                                    {
                                        "offset": 1,
                                        "color": "rgba(0,255,252,0.3)"
                                    }
                                ],
                                "globalCoord": false
                            }
                        }
                    },
                    "barGap": "0"
                },
                {
                    "name": "换乘频率",
                    "type": "line",
                    "yAxisIndex": 1,
                    "data": fre,
                    "itemStyle": {
                        "normal": {
                            "color": "#ffaa00"
                        }
                    },
                    "smooth": true
                }
            ]
        };
        myChart.setOption(option);

    },
});