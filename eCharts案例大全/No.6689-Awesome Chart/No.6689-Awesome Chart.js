var geoCoordMap = {
    //港口坐标以及经纬度
    "Hong Kong": [114.301334, 22.285748],
    "Hong Kong1": [114.301334, 22.285748],
    "Zhoushan": [122.22137, 29.994808],
    "Zhoushan1": [122.22137, 29.994808],
    "Shanghai": [121.480879, 31.235959],
    "Tianjin": [117.223054, 39.031259],
    "Kaohsiund": [120.3138, 22.641647],
    "Kaohsiund1": [120.3138, 22.641647],
    "Busan": [129.075513, 35.186925],
    "Osaka": [135.416215, 34.632456],
    "Yokohama": [139.501555, 35.436338],

    // Busan-Yokohama拐点坐标以及经纬度
    "Busan_Yokohama_1": [129.11, 30.31],
    "Busan_Yokohama_2": [133.55, 31.52],

    // Hong Kong-Shanghai 拐点坐标以及经纬度
    "HongKong_Shanghai_1": [117.34, 22.52],
    "HongKong_Shanghai_2": [122.588348,30.571731],

    // Zhoushan-Yokohama拐点坐标以及经纬度
    "Zhoushan_Yokohama_1": [133.55, 31.52],

};



// Busan-Yokohama
var BusanData = [
    [{
        "name": 'Busan',
        "value": 50
    }, {
        "name": 'Busan_Yokohama_1',
        "value": 0
    }],

];
var Busan_Yokohama_1 = [
    [{
        "name": 'Busan_Yokohama_1'
    }, {
        "name": 'Busan_Yokohama_2',
        "value": 0
    }],
];
var Busan_Yokohama_2 = [
    [{
        "name": 'Busan_Yokohama_2'
    }, {
        "name": 'Yokohama',
        "value": 50
    }],

];
// Hong Kong-Shanghai 
var HongKong1Data = [
    [{
        "name": 'HongKong1'
    }, {
        "name": 'Hong Kong',
        "value": 50
    }],
];
var HongKongData = [
    [{
        "name": 'Hong Kong'
    }, {
        "name": 'HongKong_Shanghai_1',
        "value": 0
    }],
];
var HongKong_Shanghai_1 = [
    [{
        "name": 'HongKong_Shanghai_1'
    }, {
        "name": 'HongKong_Shanghai_2',
        "value": 0
    }],
];
var HongKong_Shanghai_2 = [
    [{
        "name": 'HongKong_Shanghai_2'
    }, {
        "name": 'Shanghai',
        "value": 50
    }],
];

//Kaohsiund-Osaka
var Kaohsiund1Data = [
   [{
       "name": 'Kaohsiund1'
     }, {
      "name": 'Kaohsiund',
      "value": 50
    }],
];
var KaohsiundData = [
   [{
       "name": 'Kaohsiund'
     }, {
      "name": 'Osaka',
      "value": 50
    }],
];

//Zhoushan-Busan
// Zhoushan-Yokohama
var Zhoushan1Data = [
    [{
        "name": 'Zhoushan1'
    }, {
        "name": 'Zhoushan',
        "value": 50
    }],
];
var ZhoushanData = [
    [{
        "name": 'Zhoushan'
    }, {
        "name": 'Zhoushan_Yokohama_1',
        "value": 0
    }],
    [{
        "name": 'Zhoushan'
    }, {
        "name": 'Busan',
        "value": 50
    }],
];
var Zhoushan_Yokohama_1 = [
    [{
        "name": 'Zhoushan_Yokohama_1'
    }, {
        "name": 'Yokohama',
        "value": 50
    }],
];

// Shanghai-Busan
var ShanghaiData = [
   [{ 
       "name": 'Shanghai',
    }, {
        "name": 'Busan',
        "value": 50
    }],
];
//航运终点，暂时不需要使用
// var TianjinData=[
//     [{
//         "name": 'New York'
//     }, {
//         "name": '1_2guai',
//         "value": 0
//     }],
// ];
// var KingstonData=[
//     [{
//         "name": 'New York'
//     }, {
//         "name": '1_2guai',
//         "value": 0
//     }],
// ];

var planePath = 'path://M1024.217389 677.155206a22.378321 22.378321 0 0 0-20.047778-12.429559H22.378321a22.378321 22.378321 0 0 0-17.822734 35.910811l153.12526 201.635066A22.375124 22.375124 0 0 0 175.500384 911.117355H851.047548a22.378321 22.378321 0 0 0 17.822734-8.845831l153.122063-201.635066a22.378321 22.378321 0 0 0 2.225044-23.481252zM839.941507 866.360713H186.609622l-119.138984-156.878424h891.603459L839.941507 866.360713zM489.330761 493.809622a22.378321 22.378321 0 0 0-22.378321 22.378321v107.188961a22.378321 22.378321 0 0 0 22.378321 22.378321h107.188961a22.378321 22.378321 0 0 0 22.378321-22.378321v-107.188961a22.378321 22.378321 0 0 0-22.378321-22.378321h-107.188961z m84.813836 107.188961h-62.432318v-62.432319h62.432318v62.432319zM651.126022 493.809622a22.378321 22.378321 0 0 0-22.378321 22.378321v107.188961a22.378321 22.378321 0 0 0 22.378321 22.378321h107.185763a22.378321 22.378321 0 0 0 22.378321-22.378321v-107.188961a22.378321 22.378321 0 0 0-22.378321-22.378321h-107.185763z m84.807442 107.188961h-62.429121v-62.432319h62.429121v62.432319zM812.918086 493.809622a22.378321 22.378321 0 0 0-22.378321 22.378321v107.188961a22.378321 22.378321 0 0 0 22.378321 22.378321h107.185763a22.378321 22.378321 0 0 0 22.378321-22.378321v-107.188961a22.378321 22.378321 0 0 0-22.378321-22.378321h-107.185763z m84.810639 107.188961h-62.429121v-62.432319h62.429121v62.432319z'
var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord
            }, {
                coord: toCoord
            }]);
        }
    }
    return res;
};

var color = ['#3ed4ff', '#ffa022', '#a6c84c'];
var series = [];
[
    //港口
    ['Hong Kong', HongKongData],
    ['Hong Kong1', HongKong1Data],
    ['Zhoushan', ZhoushanData],
    ['Zhoushan1', Zhoushan1Data],
    ['Shanghai ', ShanghaiData],
    ['Kaohsiund', KaohsiundData],
    ['Kaohsiund1', Kaohsiund1Data],
    ['Busan', BusanData],
    // ['Yokohama', YokohamaData],
    //航线Busan-Yokohama
    ['Busan_Yokohama_1', Busan_Yokohama_1],
    ['Busan_Yokohama_2', Busan_Yokohama_2],
    //HongKong_Shanghai
    ['HongKong_Shanghai_1', HongKong_Shanghai_1],
    ['HongKong_Shanghai_2', HongKong_Shanghai_2],
    //Kaohsiund-Osaka
    //Zhoushan-Yokohama
    ['Zhoushan_Yokohama_1', Zhoushan_Yokohama_1],



].forEach(function(item, i) {
    series.push({
        name: item[0] + ' 海运线',
        type: 'lines',
        zlevel: 1,
        effect: {
            // show: true, //启用飞行效果
            period: 3, //飞行速度
            trailLength: 0, //飞行线的拖尾
            color: '#ffa', //飞行线的颜色
            symbolSize: 3 //飞行线的宽度
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: -0.1 //飞行线的弯曲程度
            }
        },
        data: convertData(item[1])
    }, {
        name: item[0] + ' 海运线路',
        type: 'lines',
        zlevel: 2,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 5
        },
        //飞行线底线的样式
        lineStyle: {
            normal: {
                color: '#000000',
                width: 2,
                opacity: 0.8,
                curveness: -0.1 //飞行线底线的弯曲程度
            }
        },
        data: convertData(item[1])
    }, {
        name: item[0] + ' 系列',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}'
            }
        },
        symbolSize: function(val) {
            return val[2] / 8;
        },
        itemStyle: {
            //为不同系列节点设置颜色
            normal: {
                color: color[i]
            }
        },
        data: item[1].map(function(dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});

option = {
    backgroundColor: '#D3D3D3', //地图背景色
    title: {
        text: 'The routes of the MTS after restoration (4)',
        subtext: '',
        left: 'left',
        textStyle: {
            color: '#000000'
        }
    },
    geo: {
        map: 'world',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#6495ED',
                borderColor: '#0692a4'
            },
            emphasis: {
                areaColor: '#0b1c2d'
            }
        }
    },
    series: series,
    tooltip: {
        trigger: 'item'
    }
}