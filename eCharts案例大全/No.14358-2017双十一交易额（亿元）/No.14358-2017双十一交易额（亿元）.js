//好像现在地图都显示不出来QAQ
var geoCoordMap = {
  "北京": [116.46, 39.92],
  "上海": [121.48, 31.22],
  "杭州": [120.19, 30.26],
  "广州": [113.23, 23.16],
  "深圳": [114.07, 22.62],
  "南京": [118.78, 32.04],
  "苏州": [120.62, 31.32],
  "佛山": [113.11, 23.05],
  "宁波": [121.56, 29.86],
  "泉州":[118.37, 24.54],
  "青岛": [120.33, 36.07],
  "嘉兴": [120.75, 30.75],
  "厦门": [24.27, 118.06], 
  "东莞": [113.75, 23.04],
  "武汉": [114.31, 30.52],
  "金华": [119.38, 29.05],
  "天津": [117.10,39.10],
  "成都": [104.06, 30.67],
  "温州": [120.65,28.01],
  "无锡": [120.29,31.59 ],
       
}

 var data = [
 { name: "北京", value: 655.75},
 { name: "上海", value: 389.34},
 { name: "杭州", value: 209.02},
 { name: "广州", value: 165.89},
 { name: "深圳", value: 151.62},
 { name: "南京", value: 110.22},
 { name: "苏州", value: 103.11},
 { name: "佛山", value: 74.16},
 { name: "宁波", value: 64.76},
 { name: "泉州", value: 38.86},
 { name: "青岛", value: 36.32},
 { name: "嘉兴", value: 34.54},
 { name: "厦门", value: 31.49},
 { name: "东莞", value: 31.24},
 { name: "武汉", value: 29.46},
 { name: "金华", value: 28.70},
 { name: "天津", value: 25.40},
 { name: "成都", value: 24.13},
 { name: "温州", value: 24.13},
 { name: "无锡", value: 21.08},

    ]
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

var convertedData = [
    convertData(data),
    convertData(data.sort(function(a, b) {
        return b.value - a.value;
    }).slice(0, 6))
];
data.sort(function(a, b) {
    return a.value - b.value;
})

var selectedItems = [];
var categoryData = [];
var barData = [];
//   var maxBar = 30;
var sum = 0;
var count = data.length;
for (var i = 0; i < data.length; i++) {
    categoryData.push(data[i].name);
    barData.push(data[i].value);
    sum += data[i].value;
}
console.log(categoryData);
console.log(sum + "   " + count)

option = {
    backgroundColor: '#404a59',
    animation: true,
    animationDuration: 1000,
    animationEasing: 'cubicInOut',
    animationDurationUpdate: 1000,
    animationEasingUpdate: 'cubicInOut',
    title: [{
        text: '2017双十一交易额（亿元）',
        subtext: '数据来源：亿邦智库',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    }, {
        id: 'statistic',
        text: count ? '平均交易额: ' + parseInt((sum / count).toFixed(4)) : '',
        right: 120,
        top: 40,
        width: 100,
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    }],
    toolbox: {
        iconStyle: {
            normal: {
                borderColor: '#fff'
            },
            emphasis: {
                borderColor: '#fff'
            }
        },
        feature: {
            saveAsImage: {
                show: true
            }
        }
    },
    geo: {
        map: 'china',
        left: '10',
        right: '35%',
        center: [117.98561551896913, 31.205000490896193],
        zoom: 4,
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#323c48',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#323c48'
            }
        }
    },
    tooltip: {
        trigger: 'item'
    },
    grid: {
        right: 40,
        top: 100,
        bottom: 40,
        width: '30%'
    },
    xAxis: {
        type: 'value',
        scale: true,
        position: 'top',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 2,
            textStyle: {
                color: '#fff'
            }
        },
    },
    yAxis: {
        type: 'category',
        nameGap: 16,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#ddd'
            }
        },
        data: categoryData
    },
    series: [{
   
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertedData[0],
        symbolSize: function(val) {
            return Math.max(val[2] / 20, 5);
        },
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: false
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#FF3333',
                position: 'right',
                show: true
            }
        }
    }, {
   
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertedData[0],
        symbolSize: function(val) {
            return Math.max(val[2] / 50, 8);
        },
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
            normal: {
                formatter: '{b}',
                position: 'right',
                show: true
            }
        },
        itemStyle: {
            normal: {
                color: '#FFDD55',
                shadowBlur: 50,
                shadowColor: '#EE0000'
            }
        },
        zlevel: 1
    }, {
        id: 'bar',
        zlevel: 2,
        type: 'bar',
        symbol: 'none',
        itemStyle: {
            normal: {
                color: '#ddb926'
            }
        },

        data: data
    }]
};


function renderBrushed(params) {
    var mainSeries = params.batch[0].selected[0];

    var selectedItems = [];
    var categoryData = [];
    var barData = [];
    var maxBar = 30;
    var sum = 0;
    var count = 0;

    for (var i = 0; i < mainSeries.dataIndex.length; i++) {
        var rawIndex = mainSeries.dataIndex[i];
        var dataItem = convertedData[0][rawIndex];
        var pmValue = dataItem.value[2];

        sum += pmValue;
        count++;

        selectedItems.push(dataItem);
    }

    selectedItems.sort(function(a, b) {
        //   return b.value[2] - a.value[2];
        return a.value - b.value;
    });

    for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
        categoryData.push(selectedItems[i].name);
        barData.push(selectedItems[i].value[2]);
    }

    this.setOption({
        yAxis: {
            data: categoryData
        },
        xAxis: {
            axisLabel: {
                show: !!count
            }
        },
        title: {
            id: 'statistic',
            text: count ? '平均: ' + (sum / count).toFixed(4) : ''
        },
        series: {
            id: 'bar',
            //        sort:'descending',
            data: barData
        }
    });
}