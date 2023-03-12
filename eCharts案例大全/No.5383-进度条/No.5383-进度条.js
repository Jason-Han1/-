option = {
    "legend": {
        "show": false,
        "data": [
            "Beijing",
            "Tokyo"
        ],
        "textStyle": {
            "fontSize": 10,
            "fontFamily": "PangMenZhengDao"
        }
    },
    "tooltip": {
        "trigger": "axis",
        "show": false
    },
    "calculable": true,
    "toolbox": {
        "show": true
    },
    "xAxis": {
        "max": 2000,
        "splitLine": {
            "show": false
        },
        "offset": 10,
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisLabel": {
            "show": false
        }
    },
    "yAxis": {
        "data": [
            "采购入库合格率",
            "出库合格率",
            "检验合格率",
            "检验合格率"
        ],
        "inverse": true,
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisLabel": {
            "margin": 10,
            "textStyle": {
                "color": "#9C9FA4",
                "fontSize": 24,
                "fontFamily": "PangMenZhengDao"
            }
        }
    },
    "series": [{
            "name": "Beijing",
            "type": "pictorialBar",
            "data": [],
            "barWidth": "25",
            "itemStyle": {
                "normal": {
                    "barBorderRadius": 5,
                    "color": "#36d7b6"
                }
            },
            "symbolRepeat": false,
            "symbolClip": true,
            "symbolSize": [
                "100%",
                "50%"
            ],
            "symbolBoundingData": 2000,
            "z": 99999999,
            "symbolOffset": [
                "3.5%",
                0
            ],
            "animationEasing": "elasticOut",
            "animationDelay": "function(dataIndex, params) {return params.index * 30;}"
        },
        {
            "name": "Tokyo",
            "type": "pictorialBar",
            "data": [

            ],
            "barWidth": "25",
            "itemStyle": {
                "normal": {
                    "color": "rgba(54,215,182,0.27)"
                }
            },
            "label": {
                "normal": {
                    "show": true,
                    "formatter": "{c}%",
                    "position": "right",
                    "textStyle": {
                        "fontSize": 28,
                        "fontFamily": "PangMenZhengDao"
                    }
                }
            },
            "animationDuration": 0,
            "symbolRepeat": false,
            "symbolMargin": "5%",
            "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAAAQCAYAAACP6RPCAAAAzklEQVR4Xu3csQqDMBiF0ealSwfHDsWXrmSwlJLuwnccg4L3/OESF8d9e71vi2t/Psa5/O+e1XPWCBAgcHWBMUvtu+TmC/+ure65ejDvR4AAgZXA7DPFZ28QIJASUHypcQtLgMD5RevEZy8QIJAScOJLjVtYAgSc+OwBAgSSAk58ybELTaAtoPja85eeQFJA8SXHLjSBtoDia89fegJJAcWXHLvQBNoCiq89f+kJJAUUX3LsQhNoCyi+9vylJ5AU+BTfKr3fUiX3hNAEEgIHcljXoRSLm8MAAAAASUVORK5CYII=",
            "symbolSize": [
                "100%",
                "65%"
            ],
            "symbolBoundingData": 2000,
            "z": 99999,
            "animationEasing": "elasticOut",
            "animationDelay": "function(dataIndex, params) {return params.index * 30;}"
        }
    ],
    "backgroundColor": "",
    "title": {
        "text": "",
        "subtext": "",
        "textStyle": {
            "fontSize": 12,
            "color": "#ffffff",
            "fontFamily": "PangMenZhengDao"
        },
        "x": ""
    },
    "grid": {
        "top": "10%",
        "bottom": "3%",
        "right": "16%",
        "left": "3%",
        "containLabel": true
    }
}
var res = [15, 50, 100, 80];
var newArr = [];
var tipArr = []
for (let i = 0; i < res.length; i++) {
    if (res[i] < 60) {
        var data = res[i] * 20;
        var alertImg = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAAAGCAYAAABn9JMiAAAAj0lEQVRYR+2Y0Q2AIAxE7QzO40TO40TOwwwafg3+UELp5fFfevQeF4KV43y2RGu/L/vK5QzzDWz5UFXgxRpeZPPBsgkmiOaD3upIEK3hQ1WhcCcIogCeFMAhiALA+WmpwBNBFMCTAjgEUQA4BBFDHzkBgmjkNH17qXqR7cuFF5GP465qVfj5rO7CwV2kwNMLmQuHf6QgL0YAAAAASUVORK5CYII=";
        var obj = {
            value: data,
            symbol: alertImg
        };
        var objtip = {
            value: res[i],
            label: {
                normal: {

                    textStyle: {
                        color: '#fff',
                        textShadowColor: "#ED3D6B",
                        textShadowBlur: 10,
                    }
                }
            }
        };
        tipArr.push(objtip);
        newArr.push(obj);
    } else {
        var data = res[i] * 20;
        var fillImg = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAAAGCAYAAABq6uNlAAAAjUlEQVRYR+2VQQqAMBAD3avgJ32YnxR6Vbz3lASky/SepZl009qv+9kWOuM8anbdDj46ePiy6eCjg4cVsyjA/9PGs2IlC7JQCXT5qCkk9QWYOgrJBBiUk0UQpjmKQjIBqnKWQCWX15FFnqk6kUJSyZk6lsAEGJSTRRCmOYpCMgGqcpZAJZfXkUWeqTrxBZb4h6NIQmZPAAAAAElFTkSuQmCC";
        var obj = {
            value: data,
            symbol: fillImg
        };
        var objtip = {
            value: res[i],
            label: {
                normal: {

                    textStyle: {
                        color: '#fff',
                        textShadowColor: "#00F2FF",
                        textShadowBlur: 10,
                    }
                }
            }
        };
        newArr.push(obj);
        tipArr.push(objtip);

    }

}
option.series[0].data = newArr;
option.series[1].data = tipArr;