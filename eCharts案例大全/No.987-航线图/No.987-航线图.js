var geoJson = {};
getGeoJson(420000);

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
            geoJson = Json;
            getMapData();
        });
    });
}

function getMapData() {
    const data = geoJson;
    const mapData = geoJson.map((item) => {
        return {
            name: item.properties.name,
            value: [
              item.properties.center[0],
              item.properties.center[1],
              parseFloat((Math.random(0.1, 1) * 1000).toFixed(2)),
            ],
            adcode: item.properties.adcode,
            level: item.properties.level,
        };
    });
    initEcharts(mapData);
}

function initEcharts(data) {
    let mapJson = { features: geoJson };
    echarts.registerMap('map', mapJson);
    const mapData = data.sort((a, b) => {
        return b.value[2] - a.value[2];
    });

    let toCity = mapData[0];
    let lineData = mapData.slice(1).map((item) => {
        return {
            fromName: item.name,
            toName: toCity.name,
            coords: [
                [item.value[0], item.value[1]],
                [toCity.value[0], toCity.value[1]],
            ],
        };
    });
    
    myChart.setOption({
        backgroundColor:'#001a3a',
        tooltip: {},

        geo: {
            map: 'map',
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#17439a',
                    borderColor: '#53D9FF',
                    borderWidth: 1.3,
                    shadowBlur: 15,
                    shadowColor: 'rgb(58,115,192)',
                    shadowOffsetX: 7,
                    shadowOffsetY: 6,
                },
                emphasis: {
                    areaColor: '#17439a',
                },
            },
            label: {
                normal: {
                    show: true,
                    color: '#fff',
                },
                emphasis: {
                    show: true,
                    color: '#fff',
                },
            },
            zoom: 1,
        },
        series: [
            {
                name: '城市',
                type: 'effectScatter',
                data: mapData.slice(1),
                coordinateSystem: 'geo',
                symbolSize: 10,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
                    },
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke',
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(29,233,182)',
                        shadowBlur: 10,
                        shadowColor: 'rgb(58,115,192)',
                    },
                },
                layoutCenter: ['50%', '50%'],
                layoutSize: 430,
            },
            {
                name: 'No.1',
                type: 'effectScatter',
                data: mapData.slice(0, 1),
                coordinateSystem: 'geo',
                symbolSize: 25,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false,
                    },
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke',
                },
                itemStyle: {
                    normal: {
                        color: '#f4e925', //地图点的颜色
                        shadowBlur: 10,
                        shadowColor: 'rgb(58,115,192)',
                    },
                },
                layoutCenter: ['50%', '50%'],
                layoutSize: 430,
            },
            {
                name: '航线',
                type: 'lines',
                tooltip: {
                    formatter: (params) => {
                        return params.marker + params.data.fromName + '-' + params.data.toName;
                    },
                },
                zlevel: 2,
                effect: {
                    show: true,
                    period: 5, //值越小 速度越快
                    trailLength: 0, // 0-1  值越大，越拖
                    symbol: 'arrow', //箭头图标
                    symbolSize: 6, //图标大小
                },
                lineStyle: {
                    normal: {
                        color: '#f4e925',
                        width: 1,
                        opacity: 1,
                        curveness: 0.3, //线值的程度  0为直线
                    },
                },
                data: lineData,
            },
        ],
    });
}
