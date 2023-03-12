option = {
    "color": ["#441EEC", "#0A88FD", "#24DB72", "#CE720F"],
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow"
        },
         formatter: function(params) { //数据单位格式化  
  	            var relVal = params[0].name; //x轴名称  
  	            relVal += "<div style='width:200px'>"
  	            for (var i = 0, l = params.length; i < l; i++) {
  	                if (params[i].value) {

  	                    relVal += "<span  style='display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:" + params[i].color + ";'>" + '<span  style="display:block;padding-left:15px;margin-top:-4px">' + params[i].seriesName + ' : ' + params[i].value + '</span>' + "</span>" + '<br>';
  	                }
  	            }
  	            relVal += "</div>"
  	            return relVal;
  	        }
        // "formatter": "供水流量: {c0} T/h<br />回水流量: {c1} T/h<br />万平米平方流量：{c2} T/W㎡"
    },
    backgroundColor: '#0f375f',
    "grid": {
        "top": "10%",
        "left": "3%",
        "right": "4%",
        "bottom": "3%",
        "containLabel": true
    },
    "legend": {
        "data": ["供水流量 T/h", "回水流量 T/h", "万平米平方流量 T/W㎡"],
        // "bottom": 5,
        // top: "5%",
        "icon": "circle",
        "textStyle": {
            "color": "#fff"
        }
    },
    "xAxis": [{
        "type": "category",
        "data": ["通辽盛发", "通辽总厂", "通辽热电"],
        "axisTick": {
            "alignWithLabel": true
        },
        "axisLine": {
            "lineStyle": {
                "color": "#fff",
                "width": 2
            }
        }
    }],
    "yAxis": [{
        name: "(T/h)",
        "type": "value",
        "axisLine": {
            "lineStyle": {
                "color": "#fff",
                "width": 2
            }
        },
        "axisLabel": {
            // "formatter": "{value} T/h"
            "formatter": "{value}"
        },
        "splitLine": {
            "show": false
        }
    }, {
        name: "(T/W㎡)",
        "type": "value",
        "axisLine": {
            "lineStyle": {
                "color": "#fff",
                "width": 2
            }
        },
        "axisLabel": {
            // "formatter": "{value} T/W㎡"
            "formatter": "{value}"
        },
        "splitLine": {
            "show": false
        }
    }],
    "series": [{
            "type": "bar",
            "barWidth": 16,
            "barGap": "200%",
            "name": "供水流量 T/h",
            "data": [9876, 6786, 4567],
            "itemStyle": {
                "emphasis": {
                    "barBorderRadius": [8, 8, 0, 0]
                },
                "normal": {
                    "barBorderRadius": [8, 8, 0, 0]
                }
            }
        },
        {
            "type": "bar",
            "barWidth": 16,
            "barGap": "200%",
            "name": "回水流量 T/h",
            "data": [1122, 6286, 2117],
            "itemStyle": {
                "emphasis": {
                    "barBorderRadius": [8, 8, 0, 0]
                },
                "normal": {
                    "barBorderRadius": [8, 8, 0, 0]
                }
            }
        },
        {
            "type": "bar",
            "barWidth": 16,
            name: "万平米平方流量 T/W㎡",
            "data": [23, 45, 20],
            "yAxisIndex": 1,
            "itemStyle": {
                "emphasis": {
                    "barBorderRadius": [8, 8, 0, 0]
                },
                "normal": {
                    "barBorderRadius": [8, 8, 0, 0]
                }
            }
        }
    ]
}