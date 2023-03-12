var uploadedDataURL = "/asset/get/s/data-1521691287974-ryli5ol5G.json";

// init
$(function() {

    $.get(uploadedDataURL, function (rs) {
        debugger;
        var hStep = 100000 / (rs.length - 1);
        var data = [];
        var timeData = [];

        rs = rs.split("\n");
        console.log(rs.length);
        var maxLength = 0;
        for (var i = 0; i < rs.length; i++) {
            var item = rs[i].split(',');
            var coordinates = [];
            if (item.length > maxLength) {
                maxLength = item.length;
            }
            for (j = 0; j < item.length; j += 2) {
                coordinates.push([Number(item[j]), Number(item[j + 1])]);
                timeData.push({
                    geometry: {
                        type: 'Point',
                        coordinates: [item[j], item[j + 1]]
                    },
                    count: 1,
                    time: j
                });
            }
            data.push({
                'coords': coordinates,
                'lineStyle': {
                    'normal': {
                        'color': echarts.color.modifyHSL('#5A94DF', Math.round(hStep * i))
                    }
                }
            });
        };
        var option = {
            maptalks: {
                center:[68.274129, 18.740339],
                zoom: 11,
                baseLayer: {
                    tileSystem: [1, 1, 0, 0],
                    urlTemplate: 'http://api2.map.bdimg.com/customimage/tile?&x={x}&y={y}&z={z}&udt=20180314&scale=1&ak=1XjLLEhZhQNUzd93EjU5nOGQ&styles=t%3Awater%7Ce%3Aall%7Cc%3A%23044161%2Ct%3Aland%7Ce%3Aall%7Cc%3A%23091934%2Ct%3Aboundary%7Ce%3Ag%7Cc%3A%23064f85%2Ct%3Arailway%7Ce%3Aall%7Cv%3Aoff%2Ct%3Ahighway%7Ce%3Ag%7Cc%3A%23004981%2Ct%3Ahighway%7Ce%3Ag.f%7Cc%3A%23005b96%7Cl%3A1%2Ct%3Ahighway%7Ce%3Al%7Cv%3Aon%2Ct%3Aarterial%7Ce%3Ag%7Cc%3A%23004981%7Cl%3A-39%2Ct%3Aarterial%7Ce%3Ag.f%7Cc%3A%2300508b%2Ct%3Apoi%7Ce%3Aall%7Cv%3Aoff%2Ct%3Agreen%7Ce%3Aall%7Cv%3Aoff%7Cc%3A%23056197%2Ct%3Asubway%7Ce%3Aall%7Cv%3Aoff%2Ct%3Amanmade%7Ce%3Aall%7Cv%3Aoff%2Ct%3Alocal%7Ce%3Aall%7Cv%3Aoff%2Ct%3Aarterial%7Ce%3Al%7Cv%3Aoff%2Ct%3Aboundary%7Ce%3Ag.f%7Cc%3A%23029fd4%2Ct%3Abuilding%7Ce%3Aall%7Cc%3A%231a5787%2Ct%3Alabel%7Ce%3Aall%7Cv%3Aoff%2Ct%3Apoi%7Ce%3Al.t.f%7Cc%3A%23ffffff%2Ct%3Apoi%7Ce%3Al.t.s%7Cc%3A%231e1c1c%2Ct%3Aadministrative%7Ce%3Al%7Cv%3Aoff%2Ct%3Aroad%7Ce%3Al%7Cv%3Aoff',
                    subdomains: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                },
                view:{
                
                    'projection': "IDENTITY",
                    'resolutions': (function () {
                        let res = Math.pow(2, 18);
                        const resolutions = [];
                        for (let i = 0; i < 20; i++) {
                            resolutions[i] = res;
                            res *= 0.5;
                        }
                        resolutions[0] = null;
                        resolutions[1] = null;
                        resolutions[2] = null;
                        return resolutions;
                    })(),
                    'fullExtent': {
                        'top': 33554432,
                        'left': -33554432,
                        'bottom': -33554432,
                        'right': 33554432
                    }
                 
                },
                altitudeScale: 2,
                postEffect: {
                    enable: true,
                    FXAA: {
                        enable: true
                    }
                }
            },
            series: [
                {
                    'type': 'lines3D',
                    'coordinateSystem': 'maptalks',
                    'polyline': true,
                    'blendMode': 'lighter',
                    'data': data,
                    'lineStyle': {
                        'normal': {
                            'width': 0
                        }
                    },
                    'effect': {
                        'constantSpeed': 40,
                        'show': true,
                        'trailLength': 0.5,
                        'symbolSize': 2.5
                    }
                }
            ]
        };

        myChart.setOption(option);
    });
});