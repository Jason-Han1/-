option = {
    "title": {
        "show": false
    },
    "tooltip": {
        "trigger": "axis"
    },
    "toolbox": {
        "show": false
    },
    "xAxis": [{
        "type": "category",
        "gridIndex": 0,
        "data": ["2014年10月30日", "2015年12月18日", "2015年12月21日", "2016年01月26日", "2016年02月24日", "2016年03月02日", "2016年03月04日", "2016年03月07日", "2016年03月15日", "2016年03月17日", "2016年03月30日"],
        "axisLine": {
            "show": true,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#aaa"
            }
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "type": "dotted",
                "color": "#ccc",
                "width": 1
            }
        },
        "axisTick": {
            "show": true,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#aaa"
            }
        },
        "axisLabel": {
            "show": true,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#635454",
            "interval": "auto",
            "rotate": "0"
        }
    }],
    "yAxis": [{
        "type": "value",
        "axisLine": {
            "show": true,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#aaa"
            }
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "type": "dotted",
                "color": "#ccc",
                "width": 1
            }
        },
        "axisTick": {
            "show": true,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#aaa"
            }
        },
        "axisLabel": {
            "show": true,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#635454",
            "interval": "auto"
        },
        "name": "num(求和)",
        "nameLocation": "center",
        "nameGap": 18,
        "min": null,
        "max": null
    }, {
        "type": "value",
        "axisLine": {
            "show": true,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#aaa"
            }
        },
        "splitLine": {
            "show": false,
            "lineStyle": {
                "type": "dotted",
                "color": "#ccc",
                "width": 1
            }
        },
        "axisTick": {
            "show": true,
            "lineStyle": {
                "width": 1,
                "type": "solid",
                "color": "#aaa"
            }
        },
        "axisLabel": {
            "show": true,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#635454",
            "interval": "auto"
        },
        "name": "Sex(计数)",
        "nameLocation": "center",
        "nameGap": 20,
        "min": null,
        "max": 1600
    }],
    "grid": {
        "top": 60,
        "left": "5%",
        "right": "3%",
        "bottom": 40,
        "containLabel": true
    },
    "series": [{
        "name": "num(求和)",
        "type": "bar",
        "yAxisIndex": 0,
        "data": [{
            "name": "num(求和)",
            "oldValue": "111",
            "value": "111"
        }, {
            "name": "num(求和)",
            "oldValue": "711",
            "value": "711"
        }, {
            "name": "num(求和)",
            "oldValue": null,
            "value": 0
        }, {
            "name": "num(求和)",
            "oldValue": "6",
            "value": "6"
        }, {
            "name": "num(求和)",
            "oldValue": null,
            "value": 0
        }, {
            "name": "num(求和)",
            "oldValue": null,
            "value": 0
        }, {
            "name": "num(求和)",
            "oldValue": "6",
            "value": "6"
        }, {
            "name": "num(求和)",
            "oldValue": null,
            "value": 0
        }, {
            "name": "num(求和)",
            "oldValue": null,
            "value": 0
        }, {
            "name": "num(求和)",
            "oldValue": "6",
            "value": "6"
        }, {
            "name": "num(求和)",
            "oldValue": null,
            "value": 0
        }],
        "label": {
            "show": false,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#999",
            "position": "inside"
        },
        "markLine": {
            "symbol": "",
            "data": [{
                "name": 400,
                "yAxis": 400,
                "symbol": "path://M301.184 933.696l0-60.16L602.368 873.536c179.328 0 327.872-130.816 356.09600001-302.272 1.792 0.192 3.45600001 0.96 5.31199999 0.96C997.05600001 572.224 1024 545.344 1024 512c0-33.28-26.944-60.224-60.224-60.224-1.85600001 0-3.456 0.896-5.312 1.088C930.24 281.472 781.76 150.656 602.368 150.656l-301.184 0L301.184 90.368c0-33.28-26.944-60.224-60.224-60.224s-60.16 26.944-60.15999999 60.224l0 843.264c0 33.28 26.944 60.16 60.15999999 60.16 33.28 0.064 60.224-26.88 60.224-60.096zM0 512c0 66.56000001 53.95199999 120.512 120.448 120.512l0-240.96C53.952 391.552 0 445.504 0 512z",
                "symbolSize": 12,
                "symbolOffset": [10, 20],
                "label": {
                    "position": "start",
                    "padding": 10
                },
                "lineStyle": {
                    "type": "solid",
                    "color": "#e04646"
                }
            }]
        }
    }, {
        "name": "Sex(计数)",
        "type": "line",
        "yAxisIndex": 1,
        "data": [{
            "name": "Sex(计数)",
            "oldValue": "1",
            "value": "1"
        }, {
            "name": "Sex(计数)",
            "oldValue": "702",
            "value": "702"
        }, {
            "name": "Sex(计数)",
            "oldValue": "4",
            "value": "4"
        }, {
            "name": "Sex(计数)",
            "oldValue": "5",
            "value": "5"
        }, {
            "name": "Sex(计数)",
            "oldValue": "1",
            "value": "1"
        }, {
            "name": "Sex(计数)",
            "oldValue": "1",
            "value": "1"
        }, {
            "name": "Sex(计数)",
            "oldValue": "6",
            "value": "6"
        }, {
            "name": "Sex(计数)",
            "oldValue": "1",
            "value": "1"
        }, {
            "name": "Sex(计数)",
            "oldValue": "3",
            "value": "3"
        }, {
            "name": "Sex(计数)",
            "oldValue": "6",
            "value": "6"
        }, {
            "name": "Sex(计数)",
            "oldValue": "1",
            "value": "1"
        }],
        "label": {
            "show": false,
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#999",
            "position": "inside"
        },
        "markLine": {
              "symbol": "path://M722.816 90.304l0 60.16L421.632 150.464c-179.328 0-327.872 130.816-356.09600001 302.272-1.792-0.192-3.45600001-0.96-5.31199999-0.96C26.94399999 451.776 0 478.656 0 512c0 33.28 26.944 60.224 60.224 60.224 1.85600001 0 3.456-0.896 5.312-1.088C93.76 742.528 242.24 873.344 421.632 873.344l301.184 0L722.816 933.632c0 33.28 26.944 60.224 60.224 60.224s60.16-26.944 60.15999999-60.224l0-843.264c0-33.28-26.944-60.16-60.15999999-60.16-33.28-0.064-60.224 26.88-60.224 60.096zM1024 512c0-66.56000001-53.95199999-120.512-120.448-120.512l0 240.96C970.048 632.448 1024 578.496 1024 512z",
                "symbolSize": 12,
           
            "data": [{
                "name": "300",
                "yAxis": "300",
                 symbol:"none",
               // "symbol": "path://M301.184 933.696l0-60.16L602.368 873.536c179.328 0 327.872-130.816 356.09600001-302.272 1.792 0.192 3.45600001 0.96 5.31199999 0.96C997.05600001 572.224 1024 545.344 1024 512c0-33.28-26.944-60.224-60.224-60.224-1.85600001 0-3.456 0.896-5.312 1.088C930.24 281.472 781.76 150.656 602.368 150.656l-301.184 0L301.184 90.368c0-33.28-26.944-60.224-60.224-60.224s-60.16 26.944-60.15999999 60.224l0 843.264c0 33.28 26.944 60.16 60.15999999 60.16 33.28 0.064 60.224-26.88 60.224-60.096zM0 512c0 66.56000001 53.95199999 120.512 120.448 120.512l0-240.96C53.952 391.552 0 445.504 0 512z",
                "symbolSize": 12,
                "symbolOffset": [10, 20],
                  "symbolPosition": "end",
                "label": {
                    "position": "end",
                    "padding": 10
                },
                "lineStyle": {
                    "type": "solid",
                    "color": "#e04646"
                }
            },     
      
        {
             // coord:[10,600],
              
              
           
              yAxis:600,
                symbol:"none",
            // "symbol:":, "path://M301.184 933.696l0-60.16L602.368 873.536c179.328 0 327.872-130.816 356.09600001-302.272 1.792 0.192 3.45600001 0.96 5.31199999 0.96C997.05600001 572.224 1024 545.344 1024 512c0-33.28-26.944-60.224-60.224-60.224-1.85600001 0-3.456 0.896-5.312 1.088C930.24 281.472 781.76 150.656 602.368 150.656l-301.184 0L301.184 90.368c0-33.28-26.944-60.224-60.224-60.224s-60.16 26.944-60.15999999 60.224l0 843.264c0 33.28 26.944 60.16 60.15999999 60.16 33.28 0.064 60.224-26.88 60.224-60.096zM0 512c0 66.56000001 53.95199999 120.512 120.448 120.512l0-240.96C53.952 391.552 0 445.504 0 512z",
                "symbolSize": 12,
                "symbolOffset": [-100, 120],
        } 
    ] 
        }
    }],
    "legend": {
        "show": true,
        "type": "scroll",
        "orient": "vertical",
        "top": "top",
        "left": "right",
        "textStyle": {
            "fontFamily": "Microsoft YaHei",
            "fontSize": 12,
            "color": "#999"
        }
    },
    "color": ["#FFCCCC", "#FF99CC", "#CCCCFF", "#FFFFCC", "#996666", "#FF9999", "#CC99CC", "#CCCCCC"],
    "dataZoom": null
}