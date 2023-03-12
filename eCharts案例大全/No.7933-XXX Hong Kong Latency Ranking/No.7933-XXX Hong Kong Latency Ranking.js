myChart.showLoading();

var geoCoordMap = {
    "Store-222": [114.154527, 22.248614],
    "Store-323": [114.171552, 22.296108],
    "Store-1024": [114.138628, 22.338379],
    "Store-vip": [114.143703, 22.500478],
    "Store-987": [113.964351, 22.381489],
    "Store-438": [114.159874, 22.331216],
    "Store-630": [114.168684, 22.444209],
    "Store-6732": [113.976737, 22.393006],
    "Store-410": [114.196315, 22.336025],
    "Store-239": [114.156604, 22.282287],
    "Store-672": [114.169249, 22.318697],
    "Store-1876": [114.24899, 22.262842],
};

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataName = data[i].name;
        for (var key in geoCoordMap) {
            var geoCoord = geoCoordMap[key];
            if (dataName.indexOf(key) > -1) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                    visualMap: true,
                });
                break;
            }
        }
    }
    return res;
};
var max = 100; //期望生成的最小值
var min = 20; //期望生成的最大值
var randomData = [{
        name: "Store-222",
        value: Math.floor(Math.random() * (200 - 140 + 1) + 140),
    },
    {
        name: "Store-323",
        value: Math.floor(Math.random() * (max - min + 1) + min),
    },
    {
        name: "Store-1024",
        value: Math.floor(Math.random() * (max - min + 1) + min),
    },
    {
        name: "Store-vip",
        value: Math.floor(Math.random() * (max - min + 1) + min),
    },
    {
        name: "Store-987",
        value: Math.floor(Math.random() * (max - min + 1) + min),
    },
    {
        name: "Store-438",
        value: Math.floor(Math.random() * (max - min + 1) + min),
    },
    {
        name: "Store-630",
        value: Math.floor(Math.random() * (max - min + 1) + min),
    },
    {
        name: "Store-6732",
        value: Math.floor(Math.random() * (max - min + 1) + min),
    },
    {
        name: "Store-410",
        value: Math.floor(Math.random() * (max - min + 1) + min),
    },
    {
        name: "Store-239",
        value: Math.floor(Math.random() * (max - min + 1) + min),
    },
    {
        name: "Store-672",
        value: Math.floor(Math.random() * (max - min + 1) + min),
    },
    {
        name: "Store-1876",
        value: Math.floor(Math.random() * (max - min + 1) + min),
    },
];
var NumDescSort = function(a, b) {
    return a.value - b.value;
};
randomData = randomData.sort(NumDescSort);
console.log(convertData(randomData));

//获取服务器的IP地址
// var urlPath = window.document.location.href;  //浏览器显示地址 http://10.15.5.83:5555/ISV/demo.aspx?a=1&b=2
// var docPath = window.document.location.pathname; //文件在服务器相对地址 /ISV/demo.aspx
// var index = urlPath.indexOf(docPath);
// var serverPath = urlPath.substring(0, index);//服务器地址 http://10.15.5.83:5555

//官方地址https://echarts.apache.org/examples/data/asset/geo/HK.json
// $.get(`${serverPath}/api/HK.json`, function (geoJson) {
$.get('https://echarts.apache.org/examples/data/asset/geo/HK.json', function(geoJson) {
    myChart.hideLoading();

    echarts.registerMap("HK", geoJson);

    myChart.setOption(
        (option = {
            backgroundColor: "#404a59",
            title: [{
                    text: "XXX Hong Kong Store Network Overview",
                    x: "center",
                    y: "top",
                    textStyle: {
                        fontSize: 15,
                        color: "#fff"
                    },
                },
                {
                    text: 'Store-222 anomaly detection',
                    top: "10%",
                    left: 20,
                    textStyle: {
                        color: "#FB977F",
                        fontSize: 15,
                    },
                }
            ],
            tooltip: {
                trigger: "item",
                formatter: "{b}<br/>{c} (p / km2)",
            },
            visualMap: {
                calculable: true,
                inRange: {
                    color: ["#50a3ba", "#eac736", "#FC021D"],
                },
                textStyle: {
                    color: "#fff",
                },
            },
            geo: {
                map: "HK",
                top: 130,
                left: "12%",
                bottom: "14%",
                zoom: 1.3,
                itemStyle: {
                    normal: {
                        borderColor: "#000",
                        areaColor: "#036880",
                    },
                    emphasis: {
                        areaColor: "#2a333d",
                    },
                },
                label: {
                    normal: {
                        show: true,
                        color: "#10A7CB",
                        fontSize: 11,
                    },
                    emphasis: {
                        color: "#878787",
                        fontSize: 11,
                    },
                },
            },
            grid: [{
                right: 40,
                top: '10%',
                bottom: 40,
                width: "28%",
            }, ],
            xAxis: [{
                position: "top",
                type: "value",
                boundaryGap: false,
                axisLabel: {
                    formatter: "{value} ms",
                    textStyle: {
                        color: "#c3dbff", //更改坐标轴文字颜色
                        fontSize: 10, //更改坐标轴文字大小
                    },
                },
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
            }, ],
            yAxis: [{
                type: "category",
                data: [],
                axisTick: {
                    alignWithLabel: true,
                },
            }, ],
            series: [{
                    z: 1,
                    type: "effectScatter",
                    legendHoverLink: true,
                    coordinateSystem: "geo",
                    data: convertData(randomData),
                    symbolSize: 10,
                    showEffectOn: "render",
                    rippleEffect: {
                        brushType: "stroke",
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: "{b}",
                            position: "left",
                            textStyle: {
                                color: "#FFD857",
                                fontSize: 13,
                            },

                            show: true,
                        },
                        emphasis: {
                            formatter: "{b}",
                            show: true,
                        },
                    },
                    tooltip: {
                        formatter: function(v) {
                            return v.name + " : " + v.data.value[2] + " ms";
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: "#f4e925",
                            shadowBlur: 50,
                            shadowColor: "#EE0000",
                        },
                    },
                    visualMap: true,
                    zlevel: 1,
                },
                {
                    type: "bar",
                    visualMap: false,
                    tooltip: {
                        formatter: function(v) {
                            return v.data.name + " : " + v.data.value + " ms";
                        },
                    },
                    // "itemStyle": {"normal": {"color": "#fd7270","barBorderWidth": 1,"barBorderColor": "#e06462"}},
                    label: {
                        normal: {
                            show: true,
                            formatter: "{b}",
                            position: "insideLeft",
                            textStyle: {
                                color: "#FFFFFF",
                                fontSize: 13,
                            },
                        },
                        emphasis: {
                            show: true,
                        },
                    },
                    data: randomData,
                },
            ],
        })
    );
});