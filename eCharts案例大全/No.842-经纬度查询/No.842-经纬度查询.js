const map = Loca.create(myChart.getDom().id, {
    pitch: 52
});

map.on('mapload', function() {
    map.getMap().plugin(['AMap.ControlBar'], function() {
        var controlBar = new AMap.ControlBar({
            position: {
                right: '0',
                bottom: '-173px'
            }
        });
        map.getMap().addControl(controlBar);
    });
    map.getMap().plugin(['AMap.MapType'], function() {
        var mapType = new AMap.MapType({
            liteStyle: true
        });
        map.getMap().addControl(mapType);
    });
    map.getMap().plugin(['AMap.Scale'], function() {
        var scale = new AMap.Scale();
        map.getMap().addControl(scale);
    });
    map.getMap().plugin(['AMap.ToolBar'], function() {
        var toolBar = new AMap.ToolBar();
        map.getMap().addControl(toolBar);
    });
    map.getMap().on('complete', function() {

        var infoWin = new AMap.InfoWindow({
            autoMove: true,
            //closeWhenClickMap: true
        });
        this.on('mousemove', function(e) {
            var $lnglat = $('#lnglat');
            if (!$lnglat.length) {
                $lnglat = $('<div></div>');
                $lnglat.prop('id', 'lnglat');
                $lnglat.appendTo($('#' + this.J.id));
                $lnglat.css({
                    position: 'fixed',
                    'background-color': 'white',
                    padding: '.52%',
                    'box-shadow': '0px 1px 4px #ddd'
                })
            }
            $('#lnglat').show();
            $lnglat.css({
                top: e.pixel.y + 21,
                left: e.pixel.x + 12
            })

            this.plugin('AMap.Geocoder', function() {
                new AMap.Geocoder().getAddress([e.lnglat.lng, e.lnglat.lat], function(status, result) {
                    if (status === 'complete' && result.regeocode) {
                        var address = result.regeocode.formattedAddress;
                        $lnglat.html(address + '<br/>' + [e.lnglat.lng, e.lnglat.lat].join(','))
                    } else {
                        $('#lnglat').hide();
                    }
                });
            })
        });
        this.on('mouseleave', function() {
            $('#lnglat').hide();
        })

        function showinfo(address, point) {
            infoWin.setContent(address + '<br>经度：' + point[0] + '<br>纬度：' + point[1]);
            infoWin.open(map.getMap(), new AMap.LngLat(point[0], point[1]));
            map.getMap().setCenter(point);
            map.getMap().setZoom(15);
        }

        function getGeoCoord(address, func) {
            var center;
            $.ajax({
                type: "post",
                url: 'http://apis.map.qq.com/ws/geocoder/v1/',
                dataType: 'jsonp',
                async: false,
                data: {
                    key: '4ERBZ-DVSWW-VHMR6-O26OJ-65VZ6-4HBRD',
                    output: 'jsonp',
                    address: address
                },
                success: function(result) {
                    if (result.result && result.result.location) {
                        center = [result.result.location.lng, result.result.location.lat];
                        func(address, center);
                    } else {
                        function amapsearch(address, func) {
                            var center;
                            $.ajax({
                                type: "post",
                                url: 'http://restapi.amap.com/v3/geocode/geo',
                                dataType: 'jsonp',
                                async: false,
                                data: {
                                    key: 'cb83484daa1f719b2a64dd48f66f60a3',
                                    address: address
                                },
                                success: function(result) {
                                    if (result.geocodes && result.geocodes.length) {
                                        center = result.geocodes[0].location.split(',');
                                        func(address, center);

                                    } else {
                                        function bmapsearch(address, func) {
                                            $.ajax({
                                                type: "post",
                                                url: 'http://api.map.baidu.com/geocoder/v2/',
                                                dataType: 'jsonp',
                                                async: false,
                                                data: {
                                                    ak: 'ZUONbpqGBsYGXNIYHicvbAbM',
                                                    output: 'json',
                                                    address: address
                                                },
                                                success: function(result) {
                                                    if (result.result && result.result.location) {
                                                        center = [result.result.location.lng, result.result.location.lat];
                                                        func(address, center);
                                                    }
                                                }
                                            });
                                        }
                                        bmapsearch(address, func);
                                    }
                                }
                            });
                        }
                        amapsearch(address, func);
                    }
                }
            });
        }

        this.plugin(["AMap.Geolocation"], function() {
            new AMap.Geolocation().getCurrentPosition(function(status, r) {
                if (r.position) {
                    showinfo(r.formattedAddress, [r.position.lng, r.position.lat]);
                }
            });
        });
        var $div = $('<div></div>')
        var $input = $('<input id="tipinput" type="text" placeholder="请输入要查询的地址" />');
        $div.css({
            position: 'fixed',
            'line-height': 2,
            left: '100px',
            'text-align': 'center',
            'box-shadow': '0 1px 4px #ddd',
            border: 'navajowhite',
            padding: '1% 4%',
            'background-color': '#2e465699',

            'max-width': '80%'

        });
        $input.css({
            'line-height': 2,
            'text-align': 'center',
            'box-shadow': '0 1px 4px #ddd',
            border: 'navajowhite',
            padding: '1% 4%'

        })
        $div.append($input);
        var $button = $('<button>搜索</button>');
        $button.css({
            'line-height': 2,
            'margin-left': '-8%',
            color: 'white',
            'background-color': '#2f2525',
            'font-weight': 'bold'
        })
        // $button.bind('click', function() {
        //     getGeoCoord($('#tipinput').val(), showinfo)
        // })
        $div.append($button);
        $(this.getContainer()).after($div);
        this.plugin(['AMap.Autocomplete', 'AMap.PlaceSearch'], function() {
            var auto = new AMap.Autocomplete({
                input: "tipinput"
            });
            var placeSearch = new AMap.PlaceSearch({
                map: map.getMap()
            }); //构造地点查询类
            AMap.event.addListener(auto, "select", select); //注册监听，当选中某条记录时会触发
            function select(e) {
                placeSearch.setCity(e.poi.adcode);
                placeSearch.search(e.poi.name);
                console.log(e.poi)
                showinfo(e.poi.name, [e.poi.location.lng, e.poi.location.lat]);
                //getGeoCoord(e.poi.district + e.poi.name, showinfo);
            }
        });
    })
})