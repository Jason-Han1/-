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
                        strokeColor: '#FFB6C1',
                        fillColor: '#FFB6C1',
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
                        value: Math.round(Math.random() * 2000),
                        level: curlevel
                    });
                    debugger
                    loadMap(this.cityName, mapJson);
                    this.geoJsonData = mapJson;
                    return;
                }
                mapData = [];
                for (i = 0, l = subList.length; i < l; i++) {
                    var name = subList[i].name;
                    var cityCode = subList[i].adcode;

                    mapData.unshift({
                        name: name,
                        value: Math.round(Math.random() * 2000),
                        cityCode: cityCode,
                        level: curlevel
                    }); // 将一个或多个新元素添加到数组开始，数组中的元素自动后移，返回数组新长度 


                    var levelSub = subList[i] && subList[i].level;
                    contentSub = new Option(name);
                    contentSub.setAttribute("value", levelSub);
                    contentSub.center = subList[i].center;
                    contentSub.adcode = subList[i].adcode;
                    console.log(subList[i].name)
                }
                loadMapData(adcode);
            }

        }

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
        }

        function loadMap(mapName, data) {
            if (Object.keys(data).length !== 0 && data) {
                echarts.registerMap(mapName, data);

                var option = {
                    backgroundColor: '#F3F3F3',
                    visualMap: {
                        type: 'piecewise',
                        show: true,
                        pieces: [{
                                max: 999,
                                label: '安全',
                                color: '#fff'
                            },
                            {
                                min: 1000,
                                label: '危险',
                                color: '#3b72ff'
                            },
                        ],
                    },
                    series: [{
                        type: 'map',
                        mapType: mapName,
                        roam: false,
                        itemStyle: {
                            show: true,
                            normal: {
                                areaColor: 'white',
                                borderColor: '#F3F3F3',
                                borderWidth: 1,
                            },
                            emphasis: {
                                areaColor: '#D3D3D3',
                                borderColor: '#F3F3F3',
                                label: {
                                    show: true,
                                    textStyle: {
                                        color: "#666"
                                    }
                                }
                            }
                        },
                        data: mapData,
                    }]
                };
                myChart.setOption(option);
            }
        }

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