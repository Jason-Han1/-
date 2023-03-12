//数据
var info = [
    {YEAR: "2019-01", 往年结转合同年初余额: "601392.00", 本月新签合同金额: "422398.00", 本年新签合同额累计至上月: "2901961.00"}
   ,{YEAR: "2019-02", 往年结转合同年初余额: "601392.00", 本月新签合同金额: "41945.00", 本年新签合同额累计至上月: "422398.00"}
   ,{YEAR: "2019-03", 往年结转合同年初余额: "601392.00", 本月新签合同金额: "72967.00", 本年新签合同额累计至上月: "464348.00"}
   ,{YEAR: "2019-04", 往年结转合同年初余额: "601392.00", 本月新签合同金额: "157700.00", 本年新签合同额累计至上月: "537319.00"}
   ,{YEAR: "2019-05", 往年结转合同年初余额: "601392.00", 本月新签合同金额: "55769.00", 本年新签合同额累计至上月: "695019.00"}
];
var list = [];
var time = [];
for (var i = 0; i < info.length; i++) {
    var data = [];
    time.push(info[i].YEAR);
    for (var j = 0; j < 3; j++) {
        var obj = {
            "name": "",
            "value": ""
        };
        if (j === 0) {
            obj.name = "本年新签合同额累计至上月"
            obj.value = info[i].本年新签合同额累计至上月;
            data.push(obj);
        }
        if (j === 1) {
            obj.name = "往年结转合同年初余额"
            obj.value = info[i].往年结转合同年初余额;
            data.push(obj);
        }
        if (j === 2) {
            obj.name = "本月新签合同金额"
            obj.value = info[i].本月新签合同金额;
            data.push(obj);
        }
    }
    list.push(data);

}

myChart.on('timelinechanged', function(timelineIndex) {
    var arrIndex = timelineIndex.currentIndex;
    year = option.baseOption.timeline.data[arrIndex];

});

myChart.on('click', function(params) {
    $('#cmp64062ainput').textbox().textbox('setValue', year);
    console.log(params);

});

var na = ["往年结转合同年初余额", "本月新签合同金额", "本年新签合同额累计至上月"];
option = {
    "baseOption": {
        "timeline": {
            "axisType": "category",
            "autoPlay": true,
            "playInterval": 2000,
            "orient": "horizontal",
            "lineStyle": {
                "color": "#b9bbbe"
            },
            "label": {
                "fontSize": 12,
                "textStyle": {
                    "color": "#000000"
                }
            },
            "controlStyle": {
                "color": "rgba(255,255,255,0.7)"
            },
            "checkpointStyle": {
                "color": "#3b424a"
            },
            "left": "5%",
            "right": "5%",
            "bottom": "5%",
            "data": time
        },
        "tooltip": {
            "trigger": "item",
            formatter: function(params) {
                var relVal = params[0].name;
                for (var i = 0, l = params.length; i < l; i++) {
                    relVal += '<br/>' + params[i].seriesName + ' : ' + formatNum(params[i].value) + "万元";
                }
                return relVal;
            },
        },
        "legend": {
            "orient": "vertical",
            "top": "2%",
            "left": "50%",
            "textStyle": {
                "fontSize": 12,
                "color": "#ffff0"
            },
            "data": na,
            icon: "circle",
            itemWidth: 7,
            itemHeight: 7,
        },
        "series": [{
            "name": "合同签订总额",
            "type": "pie",
            "radius": "60%",
            "center": ["65%", "65%"]
        }]
    },
    "options": [{
        "series": [{
            "name": "合同签订",
            "color": ["#49c7ad", "#ffa55b", "#4a90e2"],
            "data": list[0],
            "itemStyle": {
                "normal": {
                    "label": {
                        "position": "inner",
                        "show": true,
                        "textStyle": {
                            "fontSize": 10,
                            "color": "#ffffff"
                        },
                        formatter: "{c}万元"
                    },
                    "lableLine": {
                        "show": false
                    }
                },
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
    }, {
        "series": [{
            "name": "合同签订",
            "data": list[1],
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
    }, {
        "series": [{
            "name": "合同签订",
            "data": list[2],
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
    }, {
        "series": [{
            "name": "合同签订",
            "data": list[3],
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
    }, {
        "series": [{
            "name": "合同签订",
            "data": list[4],
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
    }, {
        "series": [{
            "name": "合同签订",
            "data": list[5],
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
    }, {
        "series": [{
            "name": "合同签订",
            "data": list[6],
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
    }, {
        "series": [{
            "name": "合同签订",
            "data": list[7],
            "itemStyle": {
                "emphasis": {
                    "shadowBlur": 10,
                    "shadowOffsetX": 0,
                    "shadowColor": "rgba(0, 0, 0, 0.5)"
                }
            }
        }]
    }]
}