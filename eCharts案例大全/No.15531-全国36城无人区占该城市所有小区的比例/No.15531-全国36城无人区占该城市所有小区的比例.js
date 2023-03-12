var geoCoordMap = {
    "上海": [121.48, 31.22],
    "珠海": [113.52, 22.3],
    "三亚": [109.31, 18.14],
    "惠州": [114.4, 23.09],
    "海口": [110.35, 20.02],
    "合肥": [117.27, 31.86],
    "南京": [118.78, 32.04],
    "杭州": [120.19, 30.26],
    "苏州": [120.62, 31.32],
    "无锡": [120.29, 31.59],
    "昆山": [120.95, 31.39],
    "广州": [113.23, 23.16],
    "深圳": [114.07, 22.62],
    "佛山": [113.11, 23.05],
    "东莞": [113.75, 23.04],
    "福州": [119.3, 26.08],
    "厦门": [118.1, 24.46],
    "南宁": [108.33, 22.84],
    "郑州": [113.65, 34.76],
    "武汉": [114.31, 30.52],
    "长沙": [113, 28.21],
    "南昌": [115.89, 28.68],
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
    "重庆": [106.54, 29.59],
    "昆明": [102.73, 25.04],
};

var convertData = function (data) {
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

option = {
    backgroundColor: '#404a59',
    title: {
        text: '全国36城无人区占该城市所有小区的比例',
        link: 'http://pages.anjuke.com/expert/newexpert.html',
        subtext: 'data from Anjuke',
        sublink: 'http://pages.anjuke.com/expert/newexpert.html',
        x:'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.name + ' : ' + params.value[2];
        }
    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
        data:['小区专家'],
        textStyle: {
            color: '#fff'
        }
    },
    visualMap: {
        min: 85,
        max: 100,
        calculable: true,
        color: ['#d94e5d','#eac736','#50a3ba'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
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
    series: [
        {
            name: '小区专家',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([
                { name: "上海", value: 88.6},
                { name: "珠海", value: 91.5},
                { name: "三亚", value: 98.4},
                { name: "惠州", value: 92.8},
                { name: "海口", value: 99.6},
                { name: "合肥", value: 87.2},
                { name: "南京", value: 94.8},
                { name: "杭州", value: 93.9},
                { name: "苏州", value: 90.5},
                { name: "无锡", value: 95.4},
                { name: "昆山", value: 91.8},
                { name: "广州", value: 97.0},
                { name: "深圳", value: 87.7},
                { name: "佛山", value: 98.6},
                { name: "东莞", value: 94.9},
                { name: "福州", value: 95.2},
                { name: "厦门", value: 89.6},
                { name: "南宁", value: 98.6},
                { name: "郑州", value: 94.7},
                { name: "武汉", value: 97.4},
                { name: "长沙", value: 95.5},
                { name: "南昌", value: 97.9},
                { name: "北京", value: 92.1},
                { name: "长春", value: 93.0},
                { name: "大连", value: 87.9},
                { name: "沈阳", value: 97.4},
                { name: "哈尔滨", value: 97.7},
                { name: "天津", value: 94.9},
                { name: "济南", value: 93.2},
                { name: "青岛", value: 95.4},
                { name: "太原", value: 98.4},
                { name: "石家庄", value: 95.1},
                { name: "西安", value: 95.6},
                { name: "成都", value: 96.3},
                { name: "重庆", value: 98.0},
                { name: "昆明", value: 98.4},

            ]),
            symbolSize: 12,
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            }
        }
    ]
}