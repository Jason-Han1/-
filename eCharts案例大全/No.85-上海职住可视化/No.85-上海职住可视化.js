//关于这个图表我做的视频简介：https://www.bilibili.com/video/BV1pD4y127tW
//各位观众老爷们一键三连，下次一定！
var uploadedDataURL = "/asset/get/s/data-1590291019662-Pukz5wykJ.json";

 //原始数据为栅格数据，需将栅格转化为经纬度后可视化

mapboxgl.accessToken = mapboxglToken;

myChart.showLoading();

function coltowgs(LONCOL, LATCOL) { //定义栅格转换经纬度的函数
var lon1 = 118.36;
var lon2 = 121.986379;
var lat1 = 30.67;
var lat2 = 33.402324;
    var accuracy = 500;
    var latStart = Math.min(lat1, lat2);
    var lonStart = Math.min(lon1, lon2);
    var deltaLon = accuracy * 360 / (2 * Math.PI * 6371004 * Math.cos((lat1 + lat2) * Math.PI / 360));
    var deltaLat = accuracy * 360 / (2 * Math.PI * 6371004);
    var HBLON = LONCOL * deltaLon + (lonStart - deltaLon / 2)
    var HBLAT = LATCOL * deltaLat + (latStart - deltaLat / 2)
    return [HBLON, HBLAT]
}
//读取MapboxStyle数据
var option = {
    title: {
        text: "上海职住可视化",
        subtext: '3Dbar高度为人口数，颜色为就业岗位数',
        textStyle: {
            color: '#000',
            fontSize: 30
        },
        subtextStyle: {
            color: '#000',
            fontSize: 15
        },
        right: '0%'
    },

    visualMap: {
        show: false,
        calculable: true,
        realtime: false,
        dimension:3,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        },
        outOfRange: {
            colorAlpha: 0
        }

    },


    mapbox3D      : {
    center          : [121.4293, 31.203070],
    zoom            : 11,
    pitch           : 50,
    bearing:30,
    style: 'mapbox://styles/mapbox/light-v9',
    // altitudeScale: 1,
    postEffect      : {
    enable          : true,
    FXAA            : {
    enable          : true
            }
        },
        light: {
            main: {
                intensity: 1,
                shadow: true,
                shadowQuality: 'high'
            },
            ambient: {
                intensity: 0.
            },
            ambientCubemap: {
                texture: '/asset/get/s/data-1491838644249-ry33I7YTe.hdr',
                exposure: 1,
                diffuseIntensity: 0.5,
                specularIntensity: 2
            }
        }
    },
    series: [{
        type: 'bar3D',
        shading: 'realistic',
        coordinateSystem: 'mapbox3D',
        barSize: 0.4,
        silent: true
    }]
}


$.getJSON(uploadedDataURL, function(linedata) { //读取可视化数据
myChart.hideLoading();


    var data = []
    for (var i = 0; i < linedata.length; i += 1) {
        loncol = linedata[i][0]
        latcol = linedata[i][1]
        homecount = linedata[i][2]
        workcount = linedata[i][3]
        coor = coltowgs(loncol, latcol)
        data.push({
            'value': [coor[0], coor[1], homecount*5,workcount*5]
        })
    }

    option.visualMap.max = 30000
    option.series[0].data = data



if (option && typeof option === "object") {
    myChart.setOption(option, true);
    
//Mapbox实例获取
var map = myChart.getModel()
    .getComponent("mapbox3D")
    .getMapbox();
//map.addControl(new mapboxgl.NavigationControl());
console.log(map)

//相机旋转
function rotate() {
    map.easeTo({ bearing: 0, duration: 8000, pitch: 0, zoom: 9 });
    t = window.setTimeout(() => {
        map.easeTo({ bearing: 180, duration: 10000, pitch: 80, zoom: 12 });
        t2 = window.setTimeout(() => {
            map.easeTo({ bearing: -120, duration: 10000, pitch: 60, zoom: 10 });
            t3 = window.setTimeout(() => {
                rotate();
            }, 10000);
        }, 10000);
    }, 10000);
}
rotate()
}
});
