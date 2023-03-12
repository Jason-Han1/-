// myChart.showLoading();
var parentJson = null;
var parentInfo = [
    {
        cityName: '全国',
        level: 'china',
        code: 320000,
    },
];
getGeoJson(320000);
function getGeoJson(adcode) {
    AMapUI.loadUI(['geo/DistrictExplorer'], (DistrictExplorer) => {
        var districtExplorer = new DistrictExplorer();
        districtExplorer.loadAreaNode(adcode, function (error, areaNode) {
            if (error) {
                console.error(error);
                return;
            }
            let Json = areaNode.getSubFeatures();
            if (Json.length > 0) {
                parentJson = Json;
            } else if (Json.length === 0) {
                Json = parentJson.filter((item) => {
                    if (item.properties.adcode == adcode) {
                        return item;
                    }
                });
                if (Json.length === 0) return;
            }
            //去获取数据
            getMapData(Json);
        });
    });
}

//获取数据，这里我们用随机数模拟数据
function getMapData(Json) {
    let mapData = Json.map((item) => {
        var value = parseInt(Math.random() * 100);
        return {
            value: value,
            label: {
                color: value < 50 ? '#000' : '#fff',
            },
            name: item.properties.name,
            level: item.properties.level,
            cityCode: item.properties.adcode,
        };
    });
    let mapJson = {};
    //geoJson必须这种格式
    mapJson.features = Json;
    //去渲染echarts
    initChart(mapData, mapJson);
}


function initChart(mapData, geoJson) {
    myChart.showLoading();
    echarts.registerMap('Map', geoJson);

    var option = {
        tooltip: {
            trigger: 'item',
            formatter: (p) => {
                let val = p.value;
                if (window.isNaN(val)) {
                    val = 0;
                }
                let txtCon = p.name + '<br>' + '<hr>' + '数值 : ' + val.toFixed(2);
                return txtCon;
            },
        },
        legend: {
            show: false,
        },
        visualMap: {
            type: 'continuous',
            min: 0,
            max: 100,
            itemWidth: 20,
            itemHeight: 300,
            // text: ['多', '少'],
            seriesIndex: [0, 2],
            dimension: 0,
            realtime: false,
            left: '30%',
            top: '10%',
            orient: 'horizontal',
            // itemWidth: 18,
            // itemHeight: 1000,
            calculable: true,
            inRange: {
                color: ['#fff', '#009999'],
                symbolSize: [100, 100],
            },
            outOfRange: {
                color: ['#eeeeee'],
                symbolSize: [100, 100],
            },
        },
        series: [
            {
                name: '地图下钻',
                type: 'map',
                map: 'Map', // 自定义扩展图表类型
                aspectScale: 1,
                zoom: 1, //缩放
                showLegendSymbol: false,
                top: '10%',
                label: {
                    show: true,
                    fontSize: 20,
                    fontWeight: 'bold',
                    formatter: '{c}\n{b}',
                },
                emphasis: {
                    label: {
                        show: true,
                    },
                    itemStyle: {
                        areaColor: '#FFD181',
                        borderColor: '#fff',
                        borderWidth: 1,
                    },
                },
                layoutCenter: ['50%', '50%'],
                layoutSize: '100%',
                markPoint: {
                    symbol: 'none',
                },
                data: mapData,
            },
        ],
    };
    myChart.setOption(option);
    myChart.hideLoading();
    //点击前解绑，防止点击事件触发多次
    myChart.off('click');
    myChart.on('click', echartsMapClick);
}

function echartsMapClick(params) {
    console.log(params);
    //如果当前是最后一级，那就直接return
    // if (parentInfo[parentInfo.length - 1].code == params.data.cityCode) {
    //     return
    // }
    let data = params.data;
    if (data.level !== 'city') return;
    // parentInfo.push({
    //     cityName: data.name,
    //     level: data.level,
    //     code: data.cityCode
    // })
    getGeoJson(data.cityCode);
}

function getDetail() {
    var opt = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
            },
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
            },
        ],
    };
    myChart.setOption(opt);
}
// getDetail()
