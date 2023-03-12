option = {
    title: {
        text: '位置获取中。。。。。',
        left: 'center',
        top: '0',
        textStyle: {
            color: 'rgba(18,89,147,1)',
            fontSize: 21
        },
        backgroundColor: 'rgba(255,255,255,0.8)'
    },
    bmap: {
        roam: true,
        mapStyle: {
            style: "grayscale"
        }
    },
    series: [{
        coordinateSystem: 'bmap',
        type: 'effectScatter',
        symbol: 'arrow',
        itemStyle: {
            normal: {
                color: 'rgba(18,89,147,1)'
            }
        },
        data: []
    }]
};
setTimeout(function() {
    var map = myChart.getModel().getComponent('bmap').getBMap();
    map.addControl(new BMap.NavigationControl({})); // 添加平移缩放控件
    map.addControl(new BMap.ScaleControl({})); // 添加比例尺控件
    map.enableScrollWheelZoom(); //启用滚轮放大缩小
    map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
    new AMap.Geolocation().getCurrentPosition(function(status, r) {
        var address = r.addressComponent;
        if (!address.city) {
            address.city = address.province.replace('市', '城区');
        }
        addBoundary(address.province, address.city, address.district);

        function addBoundary(province, city, district) {
            new AMap.DistrictSearch({
                level: 'province',
                subdistrict: 1, //返回下一级行政区
                showbiz: false, //最后一级返回街道信息
                extensions: 'base'
            }).search('中国', function(status, result) {
                if (status == 'complete') {
                    result.districtList[0].districtList.forEach(function(item) {
                        if (item.name != province) {
                            draw(item.name);
                        } else
                        if (city) {
                            new AMap.DistrictSearch({
                                level: 'city',
                                subdistrict: 1, //返回下一级行政区
                                showbiz: false, //最后一级返回街道信息
                                extensions: 'base'
                            }).search(item.name, function(status, result) {
                                if (status == 'complete') {
                                    result.districtList[0].districtList.forEach(function(item) {

                                        if (item.name != city) {
                                            draw(item.name);
                                        } else if (district) {

                                            new AMap.DistrictSearch({
                                                level: 'district',
                                                subdistrict: 1, //返回下一级行政区
                                                showbiz: false, //最后一级返回街道信息
                                                extensions: 'base'
                                            }).search(item.name, function(status, result) {
                                                if (status == 'complete') {
                                                    result.districtList[0].districtList.forEach(function(item) {
                                                        if (item.name != district) {
                                                            draw(item.name);
                                                        }

                                                    });
                                                }
                                            });

                                        }

                                    });
                                }
                            });
                        }



                    });
                }

                function draw(address) {

                    new BMap.Boundary().get(address, function(rs) { //获取行政区域
                        rs.boundaries.forEach(function(item) {
                            map.addOverlay(new BMap.Polygon(item, {
                                strokeColor: 'white',
                                fillColor: 'black',
                                strokeWeight: 1,
                                strokeOpacity: .01,
                                fillOpacity: .521,
                                //						strokeStyle: 'dashed'
                            }));
                        });
                    });

                }
            });
        }
        map.centerAndZoom(address.city);
        setTimeout(function() {
            myChart.setOption({
                title: {
                    text: '当前位置：' + r.formattedAddress,
                },
                tooltip: {
                    show: true,
                    backgroundColor: option.title.backgroundColor,
                    formatter: function(params) {
                        var infoWindow = new BMap.InfoWindow();
                        infoWindow.setWidth(0);
                        infoWindow.setHeight(0);
                        infoWindow.setTitle(r.formattedAddress);
                        infoWindow.setContent('<ul style="color:' + option.title.textStyle.color + ';"><li>省市区：' + address.province + '</li>' +
                            '<li>地级市：' + address.city + '</li>' +
                             '<li>区 县：' + address.district + '</li>' +
                            '<li>街 道：' + (address.street ? address.street : '未知') + '</li>' +
                            '<li>经 度：' + r.position.lng + '</li>' +
                            '<li>纬 度：' + r.position.lat + '</li></ul>');
                        map.openInfoWindow(infoWindow, new BMap.Point(r.position.lng, r.position.lat));
                    }
                },
                series: [{
                    data: [{
                        name: address,
                        value: [r.position.lng, r.position.lat]
                    }]
                }]
            });
            setTimeout(function() {
                //map.centerAndZoom(new BMap.Point(r.position.lng, r.position.lat), 16);
                myChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: 0
                })
            }, 100);

        }, 100);

    });



}, 2000);