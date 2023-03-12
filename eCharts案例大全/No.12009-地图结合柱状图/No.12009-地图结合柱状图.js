var province = [
    "西藏",
    "上海",
    "福建",
    "浙江",
    "广东",
    "山西",
    "云南",
    "辽宁",
    "吉林",
    "江西",
    "海南",
    "广西",
    "内蒙古",
    "四川",
    "陕西",
    "江苏",
    "贵州",
    "北京",
    "新疆",
    "山东",
    "甘肃",
    "天津",
    "河南",
    "黑龙江",
    "河北",
    "湖南",
    "安徽",
    "湖北",
    "青海",
    "重庆",
    "宁夏"
];
var geoCoordMap = {
    西藏: [91.11, 30.97],
    上海: [121.48, 31.22],
    福建: [118.1, 27.46],
    浙江: [119.96, 29.86],
    广东: [113.23, 24.16],
    山西: [112.53, 38.87],
    云南: [101.73, 25.04],
    辽宁: [123.38, 42.8],
    吉林: [125.35, 44.88],
    江西: [115.89, 28.68],
    海南: [109.51, 20.25],
    广西: [108.74, 24.16],
    内蒙古: [111.65, 42.42],
    四川: [104.06, 31.67],
    陕西: [108.95, 35.27],
    江苏: [119.78, 33.04],
    贵州: [106.71, 27.57],
    北京: [116.46, 41.92],
    新疆: [86.68, 41.77],
    山东: [118, 36.65],
    甘肃: [103.73, 37.03],
    天津: [117.2, 40.13],
    河南: [113.65, 34.76],
    黑龙江: [127.63, 47.75],
    河北: [115.48, 40.03],
    湖南: [112, 28.21],
    安徽: [117.27, 32.86],
    湖北: [112.31, 31.52],
    青海: [97.31, 37.03],
    重庆: [107.31, 30.52],
    宁夏: [106.31, 38.52]
};
var gdp = [
    //['第一产业','第二产业','第三产业',‘GDP’]
    [129.79, 4944.44, 20594.9, 25669.13],
    [220.22, 7571.35, 10093.82, 17885.39],
    [3492.81, 15256.93, 13320.71, 32070.45],
    [784.78, 5028.99, 7236.64, 13050.41],
    [1637.39, 8553.63, 7937.08, 18128.1],
    [2173.06, 8606.54, 11467.3, 22246.9],
    [1498.52, 7004.95, 6273.33, 14776.8],
    [2670.46, 4400.69, 8314.94, 15386.09],
    [109.47, 8406.28, 19662.9, 28178.65],
    [4077.18, 34619.5, 38691.6, 77388.28],
    [1965.18, 21194.61, 24091.57, 47251.36],
    [2567.72, 11821.58, 10018.32, 24407.62],
    [2363.22, 14093.47, 12353.89, 28810.58],
    [1904.53, 8829.54, 7764.93, 18499],
    [4929.13, 31343.67, 31751.69, 68024.49],
    [4286.21, 19275.82, 16909.76, 40471.79],
    [3659.33, 14654.38, 14351.67, 32665.38],
    [3578.37, 13341.17, 14631.83, 31551.37],
    [3694.37, 35109.66, 42050.88, 80854.91],
    [2796.8, 8273.66, 7247.18, 18317.64],
    [948.35, 905.95, 2198.9, 4053.2],
    [1303.24, 7898.92, 8538.43, 17740.59],
    [3929.33, 13448.92, 15556.29, 32934.54],
    [1846.19, 4669.53, 5261.01, 11776.73],
    [2195.11, 5690.16, 6903.15, 14788.42],
    [115.78, 429.17, 606.46, 1151.41],
    [1693.85, 9490.72, 8215.02, 19399.59],
    [983.39, 2515.56, 3701.42, 7200.37],
    [221.19, 1249.98, 1101.32, 2572.49],
    [241.6, 1488.44, 1438.55, 3168.59],
    [1648.97, 3647.01, 4353.72, 9649.7]
];
var option = null;
var data = [];
var mapName = "china";
for (var i = 0; i < province.length; i++) {
    data.push({
        name: province[i],
        value: [{
                name: "第一产业",
                value: gdp[i][0]
            },
            {
                name: "第二产业",
                value: gdp[i][1]
            },
            {
                name: "第三产业",
                value: gdp[i][2]
            }
        ]
    });
}
/*addBar*/
function addBar(chart, data) {
    var op = chart.getOption();
    var sd = option.series;

    var grids = [];
    var xAxis = [];
    var yAxis = [];
    var barSeries = [];

    for (var i = 0; i < data.length; i++) {
        var randomValue = 15;
        var radius = randomValue;
        var geoCoord = geoCoordMap[data[i].name];


        if (geoCoord) {
            var vr = [];
            data[i].value.map(function(v) {
                vr.push({
                    name: v.name,
                    value: v.value,
                    visualMap: false
                }); //饼图的数据不进行映射
            });

            xAxis.push({
                gridIndex: i,
                show: false,
                type: "category",
                data: ["早", "中", "晚"],
                z: 100
            });

            yAxis.push({
                type: "value",
                show: false,
                gridIndex: i,
                z: 100
            });

            var coord = chart.convertToPixel("geo", geoCoord);
            console.log("coord", geoCoord, chart, coord);
            grids.push({
                width: 30,
                height: 30,
                left: coord[0] - 25,
                top: coord[1] - 25,
                z: 100
            });

            let barSeriesData = data[i].value.map(item => item.value);
            barSeries.push({
                id: i,
                type: "bar",
                xAxisIndex: i,
                yAxisIndex: i,
                barCategoryGap: 0,
                data: barSeriesData,
                z: 100,
                itemStyle: {
                    normal: {
                        color: function(params) {
                            // 柱状图每根柱子颜色
                            var colorList = ["red", "green", "yellow"];
                            return colorList[params.dataIndex];
                        }
                    },
                    emphasis: {
                        label: {
                            show: false
                        }
                    }
                }
            });

            var newOption = {
                geo: op.geo,
                grid: grids,
                xAxis: xAxis,
                yAxis: yAxis,
                series: [...barSeries]
            };
        }
    }
    return newOption;
}


var option = {
    geo: {
        map: "china",
        roam: false,
        zoom: 0.7, // 地图初始大小
        center: [110.366794, 23.400309], // 初始中心位置
        label: {
            emphasis: {
                show: false,
                areaColor: "#eee"
            }
        },
        // 地区块儿颜色
        itemStyle: {
            normal: {
                areaColor: "#55C3FC",
                borderColor: "#fff"
            },
            emphasis: {
                areaColor: "#21AEF8"
            }
        }
    },
    series: [

    ]
};


myChart.setOption(option);
option = addBar(myChart, data);
myChart.setOption(option);
console.log('myChart', myChart, option)