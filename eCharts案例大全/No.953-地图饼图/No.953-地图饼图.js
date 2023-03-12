var districts = {
    "园区": {
        "lat": 31.328803977968,
        "lng": 120.71463459445
    },
    "新区": {
        "lat": 31.31123,
        "lng": 120.551669
    }
};

var allData = {
    "直接访问": {
        "district_count": [{
            "district": "新区",
            "count": 1231
        }]
    },
    "邮件营销": {
        "district_count": [{
            "district": "园区",
            "count": 235
        }, {
            "district": "新区",
            "count": 211
        }]
    },
    "联盟广告": {
        "district_count": [{
            "district": "新区",
            "count": 1231
        }, {
            "district": "园区",
            "count": 205
        }]
    },
    "视频广告": {
        "district_count": [{
            "district": "园区",
            "count": 855
        }]
    }
};

var option = {
    // color: ['#85b6b2', '#6d4f8d','#cd5e7e', '#e38980','#f7db88'],
    bmap: {
        center: [120.631007, 31.308762],
        zoom: 12,
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

myChart.on('legendselectchanged', function (params) {
    console.log(params.name);
    for(var prop in districtChart){
        districtChart[prop].dispatchAction({
            type: 'legendToggleSelect',
            name:params.name
        });
    }
});
setTimeout(init, 0);


function init() {
    initMap();
    initPieDistrict(myChart, getMap());
    showPie(["直接访问", "邮件营销", "联盟广告", "视频广告"]);
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
    normal : {
        color: 'rgba(255,255,255,0.8)',
        label: {show:false},
       
        labelLine: {show:false}
    },
    emphasis : {
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
                show:  false,
                data: label
            },
            series: [{
                data: newPieData
            }, {
                tooltip:{show:false},
                type: 'pie',
                radius: [0, 25],
                data: [{
                    value: 0,
                    itemStyle : placeHolderStyle
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