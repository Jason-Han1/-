
var data = [
    { name: "上海", value: 7780},
    { name: "珠海", value: 2186},
    { name: "南京", value: 6959},
    { name: "苏州", value: 6707},
    { name: "无锡", value: 3393},
    { name: "昆山", value: 1894},
    { name: "广州", value: 5769},
    { name: "福州", value: 4542},
    { name: "郑州", value: 6690},
    { name: "北京", value: 4259},
    { name: "长春", value: 7016},
    { name: "大连", value: 6202},
    { name: "沈阳", value: 9540},
    { name: "哈尔滨", value: 3141},
    { name: "天津", value: 8626},
    { name: "济南", value: 4361},
    { name: "青岛", value: 6667},
    { name: "太原", value: 4080},
    { name: "石家庄", value: 6137},
    { name: "西安", value: 3991},
    { name: "成都", value: 3873},
    { name: "昆明", value: 4633},


];

var geoCoordMap = {
    "上海": [121.48, 31.22],
    "南京": [118.78, 32.04],
    "苏州": [120.62, 31.32],
    "无锡": [120.29, 31.59],
    "昆山": [120.95, 31.39],
    "广州": [113.23, 23.16],
    "深圳": [114.07, 22.62],
    "佛山": [113.11, 23.05],
    "东莞": [113.75, 23.04],
    "福州": [119.3, 26.08],
    "厦门": [118.1, 24.46],
    "郑州": [113.65, 34.76],
    "北京": [116.46, 39.92],
    "长春": [125.35, 43.88],
    "大连": [121.62, 38.92],
    "沈阳": [123.38, 41.8],
    "哈尔滨": [126.63, 45.75],
    "天津": [117.2, 39.13],
    "济南": [117, 36.65],
    "青岛": [120.33, 36.07],
    "太原": [112.53, 37.87],
    "石家庄": [114.48, 38.03],
    "西安": [108.95, 34.27],
    "成都": [104.06, 30.67],
    "昆明": [102.73, 25.04],
};

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
        text: '全国货量分布热力图',
        link: 'http://pages.anjuke.com/expert/newexpert.html',
        subtext: '',
        sublink: 'http://pages.anjuke.com/expert/newexpert.html',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    }, {
        id: 'statistic',
        text: count ? '平均: ' + parseInt((sum / count).toFixed(4)) : '',
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
                borderColor: '#b1e4ff'
            }
        },
        feature: {
            dataZoom: {},
            brush: {
                type: ['rect', 'polygon', 'clear']
            },
            saveAsImage: {
                show: true
            }
        }
    },
    brush: {
        outOfBrush: {
            color: '#abc'
        },
        brushStyle: {
            borderWidth: 2,
            color: 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(0,0,0,0.5)',
        },
        seriesIndex: [0, 1],
        throttleType: 'debounce',
        throttleDelay: 300,
        geoIndex: 0
    },
    geo: {
        map: 'china',
        left: '10',
        right: '35%',
        center: [117.98561551896913, 31.205000490896193],
        zoom: 1.5,
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
                areaColor: '#2a333d'
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
                color: '#aaa'
            }
        },
    },
    yAxis: {
        type: 'category',
        //  name: 'TOP 20',
        nameGap: 16,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#ddd'
            }
        },
        axisTick: {
            show: false,
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
        // name: 'pm2.5',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertedData[0],
        symbolSize: function(val) {
            if(val[2] > 6000){
                return Math.max(val[2] / 200, 8);
            }else{
                return Math.max(val[2] / 300, 8);
            }
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
                color: '#FF8C00',
                position: 'right',
                show: true
            }
        }
    }, {
        //  name: 'Top 5',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertedData[0],
        symbolSize: function(val) {
            if(val[2] > 6000){
                return Math.max(val[2] / 300, 8);
            }else{
                return Math.max(val[2] / 500, 8);
            }
            
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
                color: '#f4e925',
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