getGeoJson(100000);

function getGeoJson(adcode) {
    var map = new AMap.Map('map', {
        resizeEnable: true,
        center: [116.30946, 39.937629],
        zoom: 3,
    });
    AMapUI.loadUI(['geo/DistrictExplorer'], (DistrictExplorer) => {
        var districtExplorer = (window.districtExplorer = new DistrictExplorer({
            eventSupport: true, //打开事件支持
            map: map,
        }));
        districtExplorer.loadAreaNode(adcode, function (error, areaNode) {
            if (error) {
                console.error(error);
                return;
            }
            let Json = areaNode.getSubFeatures();

            //去获取数据
            getMapData(Json);
        });
    });
}

//获取数据，这里我们用随机数模拟数据

function getMapData(Json) {
    let mapData = Json.map((item) => {
        return {
            name: item.properties.name,
            value: [item.properties.center[0], item.properties.center[1], 40],
        };
    });
    let mapData1 = Json.map((item) => {
        return {
            name: item.properties.name,
            value: parseInt(Math.random() * (150 - 20 + 1) + 20, 10),
        };
    });
    let mapJson = {};
    //geoJson必须这种格式
    mapJson.features = Json;

    //去渲染echarts
    initEcharts(mapData, mapJson, mapData1);
}

function initEcharts(mapData, mapJson, mapData1) {
    console.log(mapData1);
    //注册
    echarts.registerMap('Map', mapJson);

    //这里加true是为了让地图重新绘制，不然如果你有筛选的时候地图会飞出去
    myChart.setOption({
        // backgroundColor:'#ED272F',
        tooltip: {
            triggerOn: 'click',
            formatter: function (e, t, n) {
                return 0.5 == e.value ? e.name + '：有疑似病例' : e.seriesName + '<br />' + e.name + '：' + e.value;
            },
        },
        visualMap: [
            {
                show: true,
                left: '2%',
                bottom: '1%',
                min: 0,
                max: 150,
                text: ['150', '0'],
                seriesIndex:0,
                inRange: {
                    color: ['#f6d189', '#eeaf80', '#e67f5a', '#e55036','#c43621'],
                },
                textStyle: {
                    color: '#0fccff',
                    fontSize: 12,
                },
            },
            {
                min: 0,
                max: 1000,
                left: 60,
                bottom: '1%',
                showLabel: !0,
                text: ['高', '低'],
                seriesIndex:1,
                pieces: [
                    {
                        gt: 100,
                        label: '> 100 人',
                        color: '#fa9d38',
                    },
                    {
                        gte: 10,
                        lte: 100,
                        label: '10 - 100 人',
                        color: '#fea662',
                    },
                    {
                        gte: 1,
                        lt: 10,
                        label: '1 - 9 人',
                        color: '#ffba70',
                    },
                    {
                        gt: 0,
                        lt: 1,
                        label: '疑似',
                        color: '#fad189',
                    },
                ],
                show: !0,
            },
        ],
        geo: {
            map: 'Map', //使用
            roam: !1,
            scaleLimit: {
                min: 1,
                max: 2,
            },
            zoom: 1.23,
            top: 120,
            label: {
                normal: {
                    show: !0,
                    fontSize: '14',
                    color: 'rgba(0,0,0,0.7)',
                },
            },
            itemStyle: {
                normal: {
                    show: true,
                    areaColor: 'rgba(0,0,0,0)',
                    borderColor: '#E18B26',
                    borderWidth: '1',
                    shadowColor: '#FEFEFC',
                    shadowBlur: 20,
                },
                emphasis: {
                    areaColor: '#f2d5ad',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    borderWidth: 0,
                },
            },
        },
        series: [
            {
                name: '地图',
                geoIndex: 0,
                type: 'heatmap',
                data: mapData,
                coordinateSystem: 'geo',
                pointSize: 20, //修改热力图点的半径
                blurSize: 15, //阴影的大小
            },
            {
                name: '确诊病例',
                type: 'map',
                geoIndex:0,
                data: mapData1,
            },
            
        ],
    });
}
