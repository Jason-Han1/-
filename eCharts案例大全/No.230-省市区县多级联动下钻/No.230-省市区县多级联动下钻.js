/**
边界数据的实时获取与应用，省市区县多级联动【附最新geoJson文件下载】
边界数据可以实时获取，也可以结合geojson本地文件加载

geojson文件下载地址：https://hxkj.vip/demo/echartsMap/

项目GitHub地址（欢迎star）：https://github.com/TangSY/echarts-map-demo

作者：TSY
作者个人空间（欢迎闲逛）：https://hxkj.vip
**/

var mapData = [];
this.opts = {
    subdistrict: 1, //返回下一级行政区
    showbiz: false //最后一级返回街道信息
};
this.district = new AMap.DistrictSearch(this.opts); //注意：需要使用插件同步下发功能才能这样直接使用
this.district.search('中国', (status, result) => {
    if (status == 'complete') {
        getData(result.districtList[0], '', 100000);
    }
});


function getData(data, level, adcode) {
    var bounds = data.boundaries || [];
    if (bounds) {
        for (var i = 0, l = bounds.length; i < l; i++) {
            var polygon = new AMap.Polygon({
                map: this.map,
                strokeWeight: 1,
                strokeColor: '#0091ea',
                fillColor: '#80d8ff',
                fillOpacity: 0.2,
                path: bounds[i]
            });

        }
    }

    var subList = data.districtList || [];
    if (subList) {
        var contentSub = new Option('--请选择--');
        var curlevel = subList[0].level;
        if (curlevel === 'street') {
            let mapJsonList = this.geoJsonData.features || [];
            let mapJson = {};
            for (let i in mapJsonList) {
                if (mapJsonList[i].properties.name == this.cityName) {
                    mapJson.features = [].concat(mapJsonList[i]);
                }
            }
            mapData = [];
            mapData.push({
                name: this.cityName,
                value: Math.random() * 100,
                level: curlevel
            });
            loadMap(this.cityName, mapJson);
            this.geoJsonData = mapJson;
            return;
        }

        mapData = [];
        for (var i = 0, l = subList.length; i < l; i++) {
            var name = subList[i].name;
            var cityCode = subList[i].adcode;
            mapData.push({
                name: name,
                value: Math.random() * 100,
                cityCode: cityCode,
                level: curlevel
            });
            var levelSub = subList[i] && subList[i].level;
            contentSub = new Option(name);
            contentSub.setAttribute("value", levelSub);
            contentSub.center = subList[i].center;
            contentSub.adcode = subList[i].adcode;

        }
        loadMapData(adcode);
    }

};

function loadMapData(areaCode) {
    AMapUI.loadUI(['geo/DistrictExplorer'], DistrictExplorer => {

        //创建一个实例
        var districtExplorer = window.districtExplorer = new DistrictExplorer({
            eventSupport: true, //打开事件支持
            map: this.map
        });

        districtExplorer.loadAreaNode(areaCode, (error, areaNode) => {

            if (error) {
                console.error(error);
                return;
            }
            let mapJson = {};
            mapJson.features = areaNode.getSubFeatures();
            loadMap(this.cityName, mapJson);
            this.geoJsonData = mapJson;
        });
    });
};

function loadMap(mapName, data) {
    if (Object.keys(data).length !== 0 && data) {
        echarts.registerMap(mapName, data);
        var option = {
            visualMap: {
                type: 'piecewise',
                pieces: [{
                        max: 30,
                        label: '安全',
                        color: '#2c9a42'
                    },
                    {
                        min: 30,
                        max: 60,
                        label: '警告',
                        color: '#d08a00'
                    },
                    {
                        min: 60,
                        label: '危险',
                        color: '#c23c33'
                    },
                ],
                color: '#fff',
                textStyle: {
                    color: '#fff',
                },
                visibility: 'off'
            },
            series: [{
                name: '数据名称',
                type: 'map',
                roam: false,
                mapType: mapName,
                selectedMode: 'single',
                showLegendSymbol: false,
                visibility: 'off',
                itemStyle: {
                    normal: {
                        color: '#ccc',
                        areaColor: '#fff',
                        borderColor: '#fff',
                        borderWidth: 0.5,
                        label: {
                            show: true,
                            textStyle: {
                                color: "rgb(249, 249, 249)"
                            }
                        }
                    },
                    emphasis: {
                        areaColor: false,
                        borderColor: '#fff',
                        areaStyle: {
                            color: '#fff'
                        },
                        label: {
                            show: true,
                            textStyle: {
                                color: "rgb(249, 249, 249)"
                            }
                        }
                    }
                },
                data: mapData,
            }]
        };
        myChart.setOption(option);
    }
};
myChart.on('click', echartsMapClick);
var that = this;

function echartsMapClick(params) { //地图点击事件
    if (!params.data || params.data.level == 'street') return;
    that.cityName = params.data.name;
    that.cityCode = params.data.cityCode;
    that.district.setLevel(params.data.level); //行政区级别
    that.district.setExtensions('all');
    //行政区查询
    //按照adcode进行查询可以保证数据返回的唯一性
    that.district.search(params.data.cityCode, (status, result) => {
        if (status === 'complete') {
            getData(result.districtList[0], params.data.level, params.data.cityCode);
        }
    });
}