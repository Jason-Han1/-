var uploadedDataURL = "/asset/get/s/data-1560225611131-bUPdSi0MX.json";




//var uploadedDataURL = "/asset/get/s/data-1557130299866-ZFHZzyHqK.json";


var util = {
    //pollutionName 污染物名称,dateType 筛选类型
    getlevelValueByPollution: function(pollutionName) {
        var num0,
            num1,
            num2,
            num3,
            num4,
            num5,
            num6;
        switch (pollutionName.toUpperCase()) {
            case "SO2":
                num0 = 0;
                num1 = 75;
                num2 = 150;
                num3 = 500;
                num4 = 650;
                num5 = 800;
                num6 = 1600
                break;
            case "NO2":
                num0 = 0;
                num1 = 50;
                num2 = 100;
                num3 = 200;
                num4 = 700;
                num5 = 1200;
                num6 = 2340
                break;
            case "CO":
                num0 = 0;
                num1 = 2.5;
                num2 = 5;
                num3 = 10;
                num4 = 35;
                num5 = 60;
                num6 = 90;
                break;
            case "O3":
                num0 = 0;
                num1 = 80;
                num2 = 160;
                num3 = 200;
                num4 = 300;
                num5 = 400;
                num6 = 800;
                break;
            case "PM10":
                num0 = 0;
                num1 = 25;
                num2 = 50;
                num3 = 150;
                num4 = 250;
                num5 = 350;
                num6 = 420;
                break;
            case "PM25":
                num0 = 0;
                num1 = 17.5;
                num2 = 35;
                num3 = 75;
                num4 = 115;
                num5 = 150;
                num6 = 250;
                break;
            case "AQI":
                num0 = 0;
                num1 = 25;
                num2 = 50;
                num3 = 100;
                num4 = 150;
                num5 = 200;
                num6 = 300;
                break;
            default:
                break
        }
        return [
            num0,
            num1,
            num2,
            num3,
            num4,
            num5,
            num6
        ]
    },
    //传入污染物的值
    getLevelPollution: function(pollutionName, value) {
        var color = '';
        var num0, num1, num2, num3, num4, num5, num6;
        var result = this.getlevelValueByPollution(pollutionName);
        num0 = result[0];
        num1 = result[1];
        num2 = result[2];
        num3 = result[3];
        num4 = result[4];
        num5 = result[5];
        num6 = result[6];
        if (value > num0 && value <= num1) {
            color = "#79E73C";
        } else if (value >= num1 && value <= num2) {
            color = "#79E73C";
        } else if (value > num2 && value <= num3) {
            color = "#FFD800";
        } else if (value > num3 && value <= num4) {
            color = "#FF9000";
        } else if (value > num4 && value <= num5) {
            color = "#FF2A00";
        } else if (value > num5 && value <= num6) {
            color = "#EB007F";
        } else if (value > num6) {
            color = "#C7021D";
        } else {
            color = "#666666";
        }
        return color;
    }
}


var data = [{
    name: "河南省",
    AQI: "45"
},{
    name: "安徽省",
    AQI: "66"
},{
    name: "江西省",
    AQI: "11"
},{
    name: "陕西省",
    AQI: "118"
}, {
    name: "湖北省",
    AQI: "144"
}, {
    name: "武汉市",
    AQI: "27"
}]


var seriesData = [];
data.forEach(function(item) {
    var color = util.getLevelPollution('AQI', item.AQI);
    var obj = {
        name: item.name,
        itemStyle: {
            normal: {
                color: color
            }
        }

    }
    seriesData.push(obj);
})


var data1 = [{
    name: "陕西省",
    AQI: "118"
}, {
    name: "湖北省",
    AQI: "144"
}, {
    name: "武汉市",
    AQI: "27"
}]
var seriesData1 = [];
data1.forEach(function(item) {
    var color = util.getLevelPollution('AQI', item.AQI);
    var obj = {
        name: item.name,
        itemStyle: {
            normal: {
                color: color
            }
        }

    }
    seriesData1.push(obj);
})


var data2 = [{
    name: "十堰市",
    AQI: "18"
}, {
    name: "襄阳市",
    AQI: "144"
}]
var seriesData2 = [];
data2.forEach(function(item) {
    var color = util.getLevelPollution('AQI', item.AQI);
    var obj = {
        name: item.name,
        itemStyle: {
            normal: {
                color: color
            }
        }

    }
    seriesData2.push(obj);
})


myChart.showLoading();
$.get(uploadedDataURL, function(chinaJson) {
    echarts.registerMap('chongqing', chinaJson);
    myChart.hideLoading();
    myChart.setOption({
        "baseOption": {
            "timeline": {
                "axisType": "category",
                "autoPlay": false,
                "playInterval": 3000,
                "symbol": "circle",
                "inverse": false,
                "symbolSize": 5,
                "checkpointStyle": {
                    "symbol": "circle",
                    "symbolSize": 7,
                    "borderColor": "#aed2ff"
                },
                "left": "1%",
                "width": "90%",
                "height": "36",
                "label": {
                    "normal": {
                        "textStyle": {
                            "fontSize": 14
                        }
                    },
                    "position": 15
                },
                "data": ["2019-06-07", "2019-06-08", "2019-06-09"]
            }
        },
        "options": [{
            "series": [{
                "type": "map",
                "map": "chongqing",
                "roam": true,
                "selectedMode": "single",
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": true
                        }
                    },
                    "emphasis": {
                        "label": {
                            "show": true
                        }
                    }
                },
                "data": seriesData
            }]
        }, {
            "series": [{
                "type": "map",
                "map": "chongqing",
                "roam": true,
                "selectedMode": "single",
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": true
                        }
                    },
                    "emphasis": {
                        "label": {
                            "show": true
                        }
                    }
                },
                "data": [{
                    "name": "十堰市",
                    "itemStyle": {
                        "normal": {
                            "color": "#FF9000"
                        }
                    }
                }, {
                    "name": "襄阳市",
                    "itemStyle": {
                        "normal": {
                            "color": "#FF9000"
                        }
                    }
                }]
            }]
        }, {
            "series": [{
                "type": "map",
                "map": "chongqing",
                "roam": true,
                "selectedMode": "single",
                "itemStyle": {
                    "normal": {
                        "label": {
                            "show": true
                        }
                    },
                    "emphasis": {
                        "label": {
                            "show": true
                        }
                    }
                },
                "data": [{
                    "name": "十堰市",
                    "itemStyle": {
                        "normal": {
                            "color": "#FF9000"
                        }
                    }
                }, {
                    "name": "襄阳市",
                    "itemStyle": {
                        "normal": {
                            "color": "#FF9000"
                        }
                    }
                }]
            }]
        }]
    });
});