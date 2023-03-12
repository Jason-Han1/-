var districts = {
    "曲靖": {
        "lat": 25.5,
        "lng": 103.8
    },
    "玉溪": {
        "lat": 24.35,
        "lng": 102.55
    },
    "保山": {
        "lat": 25.12,
        "lng": 99.17
    },
    "丽江": {
        "lat": 26.88,
        "lng": 100.23
    },
    "普洱": {
        "lat": 22.79,
        "lng": 100.98
    },
    "临沧": {
        "lat": 23.88,
        "lng": 100.08
    },
    "大理": {
        "lat": 25.6,
        "lng": 100.23
    },
    "红河": {
        "lat": 23.37,
        "lng": 103.4
    },
    "版纳": {
        "lat": 22.02,
        "lng": 100.8
    },
    "楚雄": {
        "lat": 25.03,
        "lng": 101.55
    },
    "德宏": {
        "lat": 24.43,
        "lng": 98.58
    },
    "怒江": {
        "lat": 25.85,
        "lng": 98.85
    },
    "迪庆": {
        "lat": 27.83,
        "lng": 99.7
    },
    "文山": {
        "lat": 23.37,
        "lng": 104.25
    },
    "昭通": {
        "lat": 27.33,
        "lng": 103.72
    },
    "乐山": {
        "lat": 29.57,
        "lng": 103.77
    },
    "甘孜": {
        "lat": 30.05,
        "lng": 101.97
    },
    "阿坝": {
        "lat": 31.9,
        "lng": 102.22
    },
    "凉山": {
        "lat": 27.9,
        "lng": 102.27
    },
};

var allData = {
        "白族": {
            "district_count": [{
                "district": "曲靖",
                "count": 5572
            }, {
                "district": "玉溪",
                "count": 11822
            }, {
                "district": "保山",
                "count": 45890
            }, {
                "district": "临沧",
                "count": 30904
            }, {
                "district": "大理",
                "count": 1112000
            }, {
                "district": "楚雄",
                "count": 16474
            }, {
                "district": "怒江",
                "count": 139164
            }, {
                "district": "文山",
                "count": 9130
            }]
        },
        "哈尼族": {
            "district_count": [{
                "district": "曲靖",
                "count": 2114
            }, {
                "district": "玉溪",
                "count": 130279
            }, {
                "district": "普洱",
                "count": 45466
            }, {
                "district": "红河",
                "count": 789700
            }, {
                "district": "版纳",
                "count": 215434
            }, {
                "district": "楚雄",
                "count": 6176
            }]
        },
        "景颇族": {
            "district_count": [{
                "district": "德宏",
                "count": 134373
            }]
        },
        "拉祜族": {
            "district_count": [{
                "district": "玉溪",
                "count": 7027
            }, {
                "district": "普洱",
                "count": 393037
            }, {
                "district": "临沧",
                "count": 84818
            }, {
                "district": "大理",
                "count": 1000
            }, {
                "district": "红河",
                "count": 11400
            }, {
                "district": "版纳",
                "count": 61504
            }]
        },
        "傈僳族": {
            "district_count": [{
                "district": "玉溪",
                "count": 556
            }, {
                "district": "保山",
                "count": 34423
            }, {
                "district": "丽江",
                "count": 115730
            }, {
                "district": "临沧",
                "count": 84818
            }, {
                "district": "大理",
                "count": 34000
            }, {
                "district": "楚雄",
                "count": 53114
            }, {
                "district": "德宏",
                "count": 31430
            }, {
                "district": "怒江",
                "count": 257620
            }, {
                "district": "迪庆",
                "count": 106910
            }]
        },
        "纳西族": {
            "district_count": [{
                "district": "丽江",
                "count": 240580
            }, {
                "district": "大理",
                "count": 5000
            }, {
                "district": "迪庆",
                "count": 46402
            }]
        },
        "羌族": {
            "district_count": [{
                "district": "阿坝",
                "count": 157959
            }]
        },
        "彝族": {
            "district_count": [{
                        "district": "曲靖",
                        "count": 226733
                    }, {
                        "district": "玉溪",
                        "count": 446764
                    }, {
                        "district": "保山",
                        "count": 81524
                    }, {
                        "district": "丽江",
                        "count": 246282
                    }, {
                        "district": "普洱",
                        "count": 451052
                    }, {
                        "district": "临沧",
                        "count": 355266
                    }, {
                        "district": "大理",
                        "count": 450000
                    }, {
                        "district": "红河",
                        "count": 1043300
                    }, {
                        "district": "版纳",
                        "count": 66731
                    }, {
                        "district": "楚雄",
                        "count": 716627
                    }, {
                        "district": "怒江",
                        "count": 11578
                    }, {
                        "district": "迪庆",
                        "count": 716627
                    }, {
                        "district": "文山",
                        "count": 351318
                    }, {
                        "district": "昭通",
                        "count": 161302
                    }, {
                        "district": "乐山",
                        "count": 153092
                    }, {
                        "district": "凉山",
                        "count": 2226755
            }]
        },
        "藏族": {
            "district_count": [{
            "district": "大理",
            "count": 1000
        }, {
            "district": "迪庆",
            "count": 129496
        }, {
            "district": "甘孜",
            "count": 854860
        }, {
            "district": "阿坝",
            "count": 48982
            }]
        },
        };

        var option = {
            // color: ['#85b6b2', '#6d4f8d','#cd5e7e', '#e38980','#f7db88'],
            bmap: {
                center: [101.722423,26.587571],
                zoom: 7,
                roam: true,
                enableMapClick: false,
                mapStyle: {
                    styleJson: [{
                        "featureType": "all",
                        "elementType": "all",
                        "stylers": {
                            "lightness": 61,
                            "saturation": -70
                        }

                    }, {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }]
                }
            },
            legend: {
                show: false,
                orient: 'vertical',
                right: 20,
                top: 15,
                padding: 10,
                backgroundColor: "rgba(255,255,255,0.8)",
                data: []
            },
            series: [{
                type: 'pie',
                data: []
            }]
        };

        myChart.setOption(option);

        myChart.on('legendselectchanged', function(params) {
            console.log(params.name);
            for (var prop in districtChart) {
                districtChart[prop].dispatchAction({
                    type: 'legendToggleSelect',
                    name: params.name
                });
            }
        });
        setTimeout(init, 0);


        function init() {
            initMap();
            initPieDistrict(myChart, getMap());
            showPie(["白族", "哈尼族", "景颇族", "拉祜族", "傈僳族", "纳西族", "羌族", "彝族", "藏族"]);
            //showPie(["直接访问", "联盟广告", "视频广告"]);

        }

        function initMap() {
            var top_left_navigation = new BMap.NavigationControl({
                //type: BMAP_NAVIGATION_CONTROL_SMALL
            });
            var map = getMap();
            //map.centerAndZoom("苏州", 13);
            map.addControl(top_left_navigation);
            map.disableDoubleClickZoom();
            map.removeEventListener("click");
            return map;
        }


        function getMap() {
            return myChart.getModel().getComponent('bmap').getBMap();
        }

        // function initPieMarker(id, position) {
        //     var htm = '<div id="' + id + '" style="width:200px;height:200px;"></div>';
        //     var point = new BMap.Point(position.lng, position.lat);
        //     var myRichMarkerObject = new BMapLib.RichMarker(htm, point, {
        //         "anchor": new BMap.Size(-100, -100),
        //         barkground: "transparent"
        //     });
        //     var map = getMap();
        //     map.addOverlay(myRichMarkerObject);
        //     document.getElementById(id).parentNode.style.backgroundColor = "transparent";
        //     document.getElementById(id).parentNode.style.zIndex = "1";
        //     var myChart = echarts.init(document.getElementById(id), "macarons");
        //     var option = {
        //         tooltip: {
        //             trigger: 'item',
        //             formatter: "{a} <br/>{b}: {c} ({d}%)"
        //         },
        //         title: {
        //             text: "园区",
        //             left: "center",
        //             top: "center",
        //             textStyle: {
        //                 fontSize: 16,
        //                 fontWeight: "bold"
        //             }
        //         },

        //         series: [{
        //             name: '园区',
        //             type: 'pie',
        //             backgroundColor: "rgba(255,255,255,0.8)",
        //             avoidLabelOverlap: false,
        //             label: {
        //                 normal: {
        //                     show: false,
        //                     position: 'center',
        //                     formatter: "{a}"

        //                 }
        //             },
        //             radius: ['25', '40'],
        //             data: [{
        //                 value: 235,
        //                 name: '直接访问'
        //             }, {
        //                 value: 310,
        //                 name: '邮件营销'
        //             }, {
        //                 value: 234,
        //                 name: '联盟广告'
        //             }, {
        //                 value: 135,
        //                 name: '视频广告'
        //             }, {
        //                 value: 1548,
        //                 name: '搜索引擎'
        //             }]
        //         }]
        //     }
        //     myChart.setOption(option);
        // }
        var districtPoint = districts;
        var districtChart = {};
        var districtLabels = [];
        var parentChart = null;

        var initPieDistrict = function(chart, map) {
            parentChart = chart;
            var count = 0;
            for (var prop in districtPoint) {
                var district = prop;
                var position = districtPoint[prop];
                var id = "districtPoint" + count++;
                districtLabels.push(district);
                districtChart[district] = initPieMarker(map, id, district, position);
            }
            //console.log(districtLabels);
            //console.log(districtChart);
        }



        function initPieMarker(map, id, district, position) {
            var htm = '<div id="' + id + '" style="width:100px;height:100px;"></div>';
            var point = new BMap.Point(position.lng, position.lat);
            var myRichMarkerObject = new BMapLib.RichMarker(htm, point, {
                "anchor": new BMap.Size(-30, -30),
                barkground: "transparent"
            });
            map.addOverlay(myRichMarkerObject);
            document.getElementById(id).parentNode.style.backgroundColor = "transparent";
            document.getElementById(id).parentNode.style.zIndex = "1";
            var myChart = echarts.init(document.getElementById(id), "macarons");
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },

                title: {
                    left: "center",
                    top: "center",
                    textStyle: {
                        fontSize: 14,
                        fontWeight: "bold"
                    }
                },
                series: [{
                    name: district,
                    type: 'pie',
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            formatter: "{a}"
                        }
                    },
                    radius: ['25', '40'],
                    data: []

                }]
            }
            myChart.setOption(option);
            return myChart;
        }

        function showPie(arr) {
            let obj = {};
            console.log(arr.length, "len")
            districtLabels.forEach((i) => {
                obj[i] = {};
                arr.forEach((j) => {
                    console.log(j, "xxx")
                    obj[i][j] = 0;
                });
            });

            console.log(obj, "AA")
                //数据降维
            for (let prop in allData) {
                allData[prop].district_count.forEach((i) => {
                    if (obj[i.district][prop] === 0) {
                        obj[i.district][prop] = i.count;
                    }
                });
            }
            console.log(obj);
            setData(obj, arr);
        }

        var placeHolderStyle = {
            normal: {
                color: 'rgba(255,255,255,0.8)',
                label: {
                    show: false
                },

                labelLine: {
                    show: false
                }
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        };

        function setData(data, label) {

            districtLabels.forEach((district) => {
                var count = 0;
                var dt = (data[district]);
                var newPieData = [];
                for (let prop in dt) {
                    newPieData.push({
                        name: prop,
                        value: dt[prop]
                    });
                    count += dt[prop];
                }
                console.log(newPieData);

                if (count === 0) {
                    newPieData = [];
                }
                districtChart[district].setOption({
                    title: {
                        show: count > 0,
                        text: district
                    },
                    legend: {
                        show: false,
                        data: label
                    },
                    series: [{
                        data: newPieData
                    }, {
                        tooltip: {
                            show: false
                        },
                        type: 'pie',
                        radius: [0, 25],
                        data: [{
                            value: 0,
                            itemStyle: placeHolderStyle
                        }]
                    }]
                })
            });
            let labelName = label.map((i) => {
                return {
                    name: i
                };
            });

            //修改parentChart
            parentChart.setOption({
                legend: {
                    show: (label.length > 0),
                    data: label
                },
                series: [{
                    data: labelName
                }]
            });
        }