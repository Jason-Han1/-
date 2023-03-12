// 2020-11-28:
// 世界范围模拟迁徙demo.html下载：
// 链接: https://pan.baidu.com/s/1DTAfIWg3mrifovPZlpigHw 
// 提取码: 2dgj 

var geoCoordMap = {
    "Peking": [116, 40],
    "Paris": [2, 49],
    "Moscow": [38, 56],
    "London": [0, 52],
    "Washington DC": [-77, 39],
    "Belgrade": [20, 45],
    "Buenos Aires": [-58, -35],
    "Minsk": [28, 54],
    "Brasília": [-48, -16],
    "Santiago": [-71, -33],
    "Havana": [-82, 23],
    "Prague": [14, 50],
    "Copenhagen": [13, 56],
    "Santo Domingo": [-70, 18],
    "Cairo": [31, 30],
    "San Salvador": [-89, 14],
    "Port-au-Prince": [-72, 19],
    "Tehran": [51, 36],
    "Beirut": [35, 34],
    "Luxembourg": [6, 50],
    "Wellington": [175, -41],
    "Managua": [-86, 12],
    "Asunción": [-58, -25],
    "Manila": [121, 15],
    "Warsaw": [21, 52],
    "Riyadh": [47, 25],
    "Damascus": [36, 33],
    "Ankara": [33, 40],
    "Kiev": [31, 50],
    "Athens": [24, 38],
    "Delhi": [77, 29],
    "Lima": [-77, -12],
    "Canberra": [149, -35],
    "San Jos": [-84, 10],
    "Monrovia": [-11, 6],
    "Bogot": [-74, 5],
    "Mexico City": [-99, 19],
    "Pretoria": [28, -26],
    "Ottawa": [-76, 45],
    "Addis Ababa": [39, 9],
    "Panam": [-80, 9],
    "La Paz": [-68, -16],
    "Caracas": [-67, 10],
    "Guatemala": [-91, 15],
    "Oslo": [11, 60],
    "Amsterdam": [5, 52],
    "Tegucigalpa": [-87, 14],
    "Montevideo": [-56, -35],
    "Quito": [-79, 0],
    "Baghdad": [44, 33],
    "Brussels": [4, 51],
    "Kabul": [69, 35],
    "Reykjavik": [-22, 64],
    "Stockholm": [18, 59],
    "Bangkok": [101, 14],
    "Islamabad": [73, 34],
    "Sana'a": [44, 15],
    "Rangoon": [96, 17],
    "Jerusalem": [35, 32],
    "Jakarta": [107, -6],
    "Tirana": [20, 41],
    "Vienna": [16, 48],
    "Sofia": [23, 43],
    "Phnum Penh": [105, 12],
    "Helsinki": [25, 60],
    "Budapest": [19, 47],
    "Dublin": [-6, 53],
    "Rome": [12, 42],
    "Rabbah": [36, 32],
    "Vientiane": [103, 18],
    "Tripoli": [13, 33],
    "Kathmandu": [85, 28],
    "Lisbon": [-9, 39],
    "Bucharest": [26, 44],
    "Madrid": [-4, 40],
    "Colombo": [80, 7],
    "Rabat": [-7, 34],
    "Khartoum": [33, 16],
    "Tunis": [10, 37],
    "Tokyo": [140, 36],
    "Accra": [0, 6],
    "Kuala Lumpur": [102, 3],
    "Conakry": [-14, 10],
    "Porto-Novo": [3, 6],
    "Ouagadougou": [-2, 12],
    "Yaound": [12, 4],
    "Bangui": [19, 4],
    "N'Djamena": [15, 12],
    "Brazzaville": [15, -4],
    "Yamoussoukro": [-5, 7],
    "Nicosia": [33, 35],
    "Kinshasa": [15, -4],
    "Libreville": [9, 0],
    "Antananarivo": [48, -19],
    "Niamey": [2, 14],
    "Mogadishu": [45, 2],
    "Lom": [1, 6],
    "Bamako": [-8, 13],
    "Dakar": [-17, 15],
    "Lagos": [3, 6],
    "Freetown": [-13, 8],
    "Nouakchott": [-16, 18],
    "Ulan Batar": [107, 48],
    "Dar es Salaam": [39, -7],
    "Bujumbura": [29, -3],
    "Kingston": [-77, 18],
    "Kigali": [30, -2],
    "Port-of-Spain": [-61, 11],
    "Algiers": [3, 37],
    "Kampala": [33, 0],
    "Kuwait": [48, 29],
    "Nairobi": [37, -1],
    "Zanzibar City": [39, 0],
    "Dodoma": [36, -6],
    "Lilongwe": [34, -14],
    "Valletta": [15, 36],
    "Lusaka": [28, -15],
    "Banjul": [-17, 13],
    "Mal": [74, 4],
    "Singapore": [104, 1],
    "Georgetown": [-58, 7],
    "Gaborone": [26, -25],
    "Maseru": [27, -29],
    "Bridgetown": [-60, 13],
    "Aden": [45, 13],
    "Port Louis": [57, -20],
    "Mbabne": [31, -26],
    "Malabo": [9, 4],
    "Suva": [178, -18],
    "Manama": [51, 26],
    "Thimbu": [90, 27],
    "Doha": [52, 25],
    "Muscat": [59, 24],
    "Abu Dhabi": [54, 24],
    "Nassau": [-77, 25],
    "Bonn": [7, 51],
    "Berlin": [13, 52],
    "Dhaka": [90, 24],
    "Saint George's": [-62, 12],
    "Bissau": [-16, 12],
    "Praia": [-24, 15],
    "Maputo": [33, -26],
    "São Tomé": [7, 0],
    "Port Moresby": [147, -9],
    "Moroni": [43, -12],
    "Paramaribo": [-55, 6],
    "Victoria": [55, -5],
    "Luanda": [13, -9],
    "Apia": [-172, -14],
    "Djibouti": [43, 12],
    "Hanoi": [106, 21],
    "Honiara": [160, -9],
    "Roseau": [-61, 15],
    "Castries": [-61, 14],
    "Harare": [31, -18],
    "Kingstown": [-61, 13],
    "Vila": [168, -18],
    "Belmopan": [-89, 17],
    "Saint Johns": [-62, 17],
    "Basseterre": [-63, 17],
    "Bandar Seri Begawan": [115, 5],
    "Windhoek": [17, -23],
    "Vaduz": [10, 47],
    "Pyongyang": [126, 39],
    "Tallin": [25, 59],
    "Riga": [24, 57],
    "Vilnius": [25, 55],
    "Majuro": [171, 7],
    "Palikir": [158, 7],
    "Seoul": [127, 38],
    "Yerevan": [45, 40],
    "Baku": [50, 40],
    "Tselinograd": [71, 51],
    "Frunze": [75, 43],
    "Chisinau": [29, 47],
    "San Marino": [12, 44],
    "Dushanfe": [69, 39],
    "Ashkhabad": [58, 38],
    "Tashkent": [69, 41],
    "Sarajevo": [18, 44],
    "Zagreb": [16, 46],
    "Ljubljana": [15, 46],
    "T'bilisi": [45, 42],
    "Bratislava": [17, 48],
    "Skopje": [21, 42],
    "Asmara": [39, 15],
    "Monaco": [7, 44],
    "Andorra la Vella": [2, 43],
    "Koror": [134, 7],
    "South Tarawa": [173, 1],
    "Yaren": [167, 1],
    "Nuku'alofa": [-175, -21],
    "Funafuti": [179, 8],
    "Berne": [7, 47],
    "Dili": [126, -9],
    "Podgorica": [19, 42],
    "Juba": [32, 5]
};

var ChinaData = [
    [{
        "name": 'Peking'
    }, {
        "name": 'Paris',
        "value": 100
    }],
    [{
        "name": 'Peking'
    }, {
        "name": 'Moscow',
        "value": 10
    }],
    [{
        "name": 'Peking'
    }, {
        "name": 'Canberra',
        "value": 50
    }],

];

var UkData = [
    [{
        "name": 'Washington DC'
    }, {
        "name": 'Paris',
        "value": 100
    }],
    [{
        "name": 'Washington DC'
    }, {
        "name": 'Moscow',
        "value": 10
    }]
];

var AsunciónData = [
    [{
        "name": 'Asunción'
    }, {
        "name": 'Peking',
        "value": 100
    }],
    [{
        "name": 'Asunción'
    }, {
        "name": 'Washington DC',
        "value": 10
    }]
];
var planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';

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
    ['China', ChinaData],
    ['UK', UkData],
    ['Asunción', AsunciónData]

].forEach(function(item, i) {
    series.push({
        name: item[0] + ' 飞行线',
        type: 'lines',
        zlevel: 1,
        effect: {
            show: true, //启用飞行效果
            period: 6, //飞行速度
            trailLength: 0.7, //飞行线的拖尾
            color: '#fff', //飞行线的颜色
            symbolSize: 3 //飞行线的宽度
        },
        lineStyle: {
            normal: {
                color: color[i],
                width: 0,
                curveness: 0.2 //飞行线的弯曲程度
            }
        },
        data: convertData(item[1])
    }, {
        name: item[0] + ' 飞行线路',
        type: 'lines',
        zlevel: 2,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: planePath,
            symbolSize: 15
        },
        //飞行线底线的样式
        lineStyle: {
            normal: {
                color: color[i],
                width: 1,
                opacity: 0.8,
                curveness: 0.2 //飞行线底线的弯曲程度
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
    backgroundColor: '#080a20', //地图背景色
    title: {
        text: '世界范围模拟迁徙',
        subtext: '数据纯属虚构',
        left: 'left',
        textStyle: {
            color: '#fff'
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
                areaColor: '#132937',
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