var rdJson = "/asset/get/s/data-1607408889708-gUSQNlE54.json";

var uploadedDataURL = "/asset/get/s/data-1605513271700-gUdP4HnUM.json";

var geoCoordMap = [
    { name: '北京', value: [116.45, 39.85] },
    { name: '天津', value: [117.59, 38.71] },
    { name: '河北', value: [114.49, 38.00] },
    { name: '山西', value: [111.93, 36.84] },
    { name: '江苏', value: [119.80, 33.00] },
    { name: '吉林', value: [125.31, 43.85] },
    { name: '辽宁', value: [123.42, 41.82] },
    { name: '陕西', value: [109.01, 34.20] },
    { name: '甘肃', value: [103.78, 36.05] },
    { name: '宁夏', value: [106.35, 37.27] },
    { name: '四川', value: [104.05, 30.66] },
    { name: '重庆', value: [107.28, 29.43] },
    { name: '山东', value: [118.00, 36.27] },
    { name: '河南', value: [113.66, 33.72] },
    { name: '安徽', value: [117.29, 31.25] },
    { name: '湖北', value: [113.38, 30.66] },
    { name: '浙江', value: [120.13, 29.27] },
    { name: '福建', value: [118.35, 26.02] },
    { name: '江西', value: [115.50, 27.66] },
    { name: '湖南', value: [111.78, 28.05] },
    { name: '贵州', value: [106.69, 26.56] },
    { name: '云南', value: [101.51, 24.76] },
    { name: '广东', value: [113.32, 23.80] },
    { name: '广西', value: [108.27, 22.81] },
    { name: '海南', value: [109.78, 19.00] },
    { name: '上海', value: [121.46, 31.28] },
    { name: '香港', value: [115.16, 21.98] },
    { name: '澳门', value: [112.58, 21.48] },
    { name: '台湾', value: [120.86, 23.48] },
    { name: '西藏', value: [89.15, 30.77] },
    { name: '青海', value: [96.80, 35.62] },
    { name: '新疆', value: [85.62, 40.78] },
    { name: '黑龙江', value: [128.70, 46.77] },
    { name: '内蒙古', value: [111.64, 41.78] },
];

var geoCoordMap2 = [
    { name: 'G1', value: [120.25, 40.35] },
    { name: 'G2', value: [118.00, 34.77] },
    { name: 'G3', value: [117.49, 32.45] },
    { name: 'G4', value: [114.06, 32.92] },
    { name: 'G5', value: [102.05, 28.66] },
    { name: 'G6', value: [95.80, 36.62] },
    { name: 'G7', value: [100.64, 41.88] },
    { name: 'G10', value: [128.70, 44.77] },
];

var rdArr = []

$.getJSON(rdJson, function(data) {
    data.forEach(item => {
        const obj = {
            coords: item
        }
        rdArr.push(obj)
    })

    myChart.showLoading();
    $.getJSON(uploadedDataURL, function(geoJson) {
        echarts.registerMap('china', geoJson);
        myChart.hideLoading();

        option = {
            backgroundColor: '#fff',
            geo: {
                map: 'china',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                        areaColor: '#8FF'
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 0.5,
                        borderColor: '#333',
                        areaColor: '#0C92EA'
                    },
                    emphasis: {
                        borderWidth: 0.5,
                        borderColor: '#333',
                        areaColor: '#0C92EA'
                    }
                }
            },
            series: [{
                type: 'lines',
                coordinateSystem: 'geo',
                polyline: true,
                data: rdArr,
                silent: true,
                lineStyle: {
                    color: '#fff',
                    opacity: 1,
                    width: 1
                },
                progressiveThreshold: 500,
                progressive: 200
            }, {
                type: "scatter",
                coordinateSystem: 'geo',
                data: geoCoordMap,
                symbol: "pin",
                symbolSize: 1,
                label: {
                    show: true,
                    formatter: (param) => {
                        return param.name
                    },
                    fontSize: 12,
                    color: "#000",
                },
            }, {
                type: "scatter",
                coordinateSystem: 'geo',
                data: geoCoordMap2,
                symbol: "roundRect",
                symbolSize: 20,
                itemStyle: {
                    color: 'rgb(168,161,67)'
                },
                label: {
                    show: true,
                    formatter: (param) => {
                        return param.name
                    },
                    fontSize: 12,
                    color: "#fff",
                },
            }]
        };

        myChart.setOption(option);
    });
})